/* _check.js — コンテンツの機械QA。実行: node _check.js */
const fs = require("fs"), path = require("path");
global.window = {};
eval(fs.readFileSync(path.join(__dirname, "content.ja.js"), "utf8"));
const C = global.window.SOYOGI_SHIEN;
let issues = 0;
const flag = (msg) => { issues++; console.log("  ! " + msg); };

/* scenes */
if (!C || !Array.isArray(C.scenes)) { console.log("scenes がありません"); process.exit(1); }
console.log("scenes: " + C.scenes.length + "件");
if (C.scenes.length !== 12) flag("場面カードが12件でない: " + C.scenes.length);
if (!C.scenes[0].medical) flag("先頭が医療カードでない");
const ids = {};
C.scenes.forEach((s, i) => {
  const tag = `#${i} ${s.title || "(無題)"}`;
  if (!s.id) flag(tag + " id欠け");
  if (ids[s.id]) flag(tag + " id重複"); ids[s.id] = 1;
  if (!s.title) flag(tag + " title欠け");
  if (!s.emoji) flag(tag + " emoji欠け");
  ["do", "dont", "after"].forEach(k => {
    if (!Array.isArray(s[k]) || !s[k].length) flag(tag + ` ${k}が空`);
  });
  if (s.do && s.do.length > 3) flag(tag + " まずやることが3項目超（3秒で読める原則違反）: " + s.do.length);
  if (!s.why) flag(tag + " why欠け");
  if (!s.src) flag(tag + " src(出典)欠け");
  const all = JSON.stringify(s);
  if (/�/.test(all)) flag(tag + " 文字化け(U+FFFD)");
  if (/  /.test(all.replace(/\\n/g, ""))) flag(tag + " 連続スペースの疑い");
  if (s.medical && (!Array.isArray(s.call119) || !s.call119.length)) flag(tag + " 医療カードにcall119が無い");
  if ("outdoor" in s && (!Array.isArray(s.outdoor) || !s.outdoor.length)) flag(tag + " outdoorが空");
});
console.log("outdoor付き: " + C.scenes.filter(s => s.outdoor && s.outdoor.length).length + "件");

/* traits（特性リファレンス） */
if (!Array.isArray(C.traits) || !C.traits.length) flag("traits がありません");
else {
  console.log("traits: " + C.traits.length + "件");
  const tids = {};
  const sceneIds = C.scenes.map(s => s.id);
  C.traits.forEach((t, i) => {
    const tag = `trait#${i} ${t.name || "(無題)"}`;
    if (!t.id) flag(tag + " id欠け");
    if (tids[t.id]) flag(tag + " id重複"); tids[t.id] = 1;
    if (!t.name) flag(tag + " name欠け");
    if (!t.emoji) flag(tag + " emoji欠け");
    if (!t.short) flag(tag + " short欠け");
    ["what", "comm", "env", "ng"].forEach(k => {
      if (!Array.isArray(t[k]) || !t[k].length) flag(tag + ` ${k}が空`);
    });
    if ("prepare" in t && (!Array.isArray(t.prepare) || !t.prepare.length)) flag(tag + " prepareが空");
    if (!t.src) flag(tag + " src(出典)欠け");
    (t.scenes || []).forEach(sid => {
      if (!sceneIds.includes(sid)) flag(tag + " 未知のscene id: " + sid);
    });
    if (/�/.test(JSON.stringify(t))) flag(tag + " 文字化け(U+FFFD)");
  });
}
if (!Array.isArray(C.basis) || !C.basis.length) flag("basis（根拠一覧）がありません");

/* まなぶ：hints / quizzes */
if (!Array.isArray(C.hints) || C.hints.length < 7) flag("hints（今日のヒント）が少ない");
else {
  console.log("hints: " + C.hints.length + "件");
  C.hints.forEach((h, i) => { if (typeof h !== "string" || !h.trim()) flag("hint#" + i + " が空/非文字列"); });
}
if (!Array.isArray(C.quizzes) || !C.quizzes.length) flag("quizzes がありません");
else {
  console.log("quizzes: " + C.quizzes.length + "件");
  C.quizzes.forEach((q, i) => {
    const tag = "quiz#" + i;
    if (!q.q) flag(tag + " q欠け");
    if (!Array.isArray(q.options) || q.options.length < 2) flag(tag + " optionsが2未満");
    if (typeof q.answer !== "number" || q.answer < 0 || (q.options && q.answer >= q.options.length)) flag(tag + " answer添字が不正");
    if (!q.explain) flag(tag + " explain欠け");
    if (/�/.test(JSON.stringify(q))) flag(tag + " 文字化け(U+FFFD)");
  });
}

/* phrases */
if (!Array.isArray(C.phraseGroups) || C.phraseGroups.length < 3) flag("定型文グループが少ない");
else {
  let n = 0;
  C.phraseGroups.forEach(g => {
    if (!g.label || !Array.isArray(g.items) || !g.items.length) flag("定型文グループ不備: " + (g.id || "?"));
    n += (g.items || []).length;
  });
  console.log("phrases: " + C.phraseGroups.length + "グループ / " + n + "語");
}

/* logOptions */
["triggers", "durations", "responses", "injuries"].forEach(k => {
  if (!C.logOptions || !Array.isArray(C.logOptions[k]) || !C.logOptions[k].length) flag("logOptions." + k + " が空");
});

/* index.html / app.js に氏名入力欄が無いこと（個人情報を持たない原則）
 * コメント文言に反応しないよう、実際の入力欄(placeholder/id/name属性)だけを見る */
const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const app = fs.readFileSync(path.join(__dirname, "app.js"), "utf8");
if (/placeholder="[^"]*(氏名|名前|なまえ)|(id|name)="[^"]*(userName|fullName|kanji)/i.test(html + app))
  flag("氏名入力欄らしき箇所がある（原則違反の疑い）");

console.log(issues ? (">>> " + issues + " 件の要確認") : ">>> ALL OK");
process.exit(issues ? 1 : 0);
