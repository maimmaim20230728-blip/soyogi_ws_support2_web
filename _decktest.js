/* _decktest.js — app.js のデッキ/シャッフル関数を実ソースから抽出して機械検証。実行: node _decktest.js */
const fs = require("fs");
const src = fs.readFileSync(require("path").join(__dirname, "app.js"), "utf8");

/* shuffled / hintDeck / nextHint / nextQuizIndex のブロックを実ソースから切り出す */
const start = src.indexOf("function shuffled(");
const end = src.indexOf("function renderLearn(");
if (start < 0 || end < 0 || end <= start) { console.error("NG: 対象関数が見つからない"); process.exit(1); }
const block = src.slice(start, end);

const C = {
  hints: Array.from({ length: 80 }, (_, i) => "hint" + i),
  quizzes: Array.from({ length: 50 }, (_, i) => ({ q: "q" + i, options: ["a", "b", "c"], answer: i % 3 }))
};
const api = (function () {
  eval(block);
  return { shuffled: shuffled, nextHint: nextHint, nextQuizIndex: nextQuizIndex };
})();
const shuffled = api.shuffled, nextHint = api.nextHint, nextQuizIndex = api.nextQuizIndex;

let ok = true;
function assert(name, cond) { console.log((cond ? "OK " : "NG ") + name); if (!cond) ok = false; }

/* 1) ヒント：80連続で重複なし＝全件网羅、使い切り後は再シャッフルで続行 */
const draws1 = new Set(); for (let i = 0; i < 80; i++) draws1.add(nextHint());
assert("ヒント80連続draw＝重複なし全80種", draws1.size === 80);
const draws2 = new Set(); for (let i = 0; i < 80; i++) draws2.add(nextHint());
assert("使い切り後の再デッキも全80種", draws2.size === 80);

/* 2) クイズ：50連続で重複なし＝全問出題 */
const q1 = new Set(); for (let i = 0; i < 50; i++) q1.add(nextQuizIndex());
assert("クイズ50連続draw＝重複なし全50問", q1.size === 50);
const q2 = new Set(); for (let i = 0; i < 50; i++) q2.add(nextQuizIndex());
assert("使い切り後の再デッキも全50問", q2.size === 50);

/* 3) 選択肢シャッフル：renderQuizと同じ計算で、正解の表示位置が3位置すべてに現れる */
const posCount = [0, 0, 0];
for (let t = 0; t < 600; t++) {
  const q = C.quizzes[t % 50];
  const order = shuffled(q.options.length);
  const correctPos = order.indexOf(q.answer);
  posCount[correctPos]++;
  /* orderが選択肢の正当な並べ替えであること */
  if ([...order].sort().join(",") !== "0,1,2") { assert("orderが正当な置換", false); break; }
}
assert("正解の表示位置が0/1/2すべてに出現（600試行: " + posCount.join("/") + "）",
  posCount[0] > 0 && posCount[1] > 0 && posCount[2] > 0);
/* 偏りすぎていない（各位置10%以上） */
assert("表示位置の分布に極端な偏りなし", posCount.every(c => c > 60));

console.log(ok ? "\n>>> ALL OK（デッキ重複なし・選択肢シャッフル動作）" : "\n>>> 要確認");
process.exit(ok ? 0 : 1);
