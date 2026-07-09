/* _check.js — 多言語コンテンツの機械QA。実行: node _check.js
 * ・各言語の構造チェック（件数・id・scene参照・do<=3 等）
 * ・ja を基準に全言語の構造パリティ（id/emoji/answer/scene参照/件数の一致）
 * ・UI文字列(SHIEN_UI)のキーが ja と一致するか
 */
const fs = require("fs"), path = require("path");
global.window = {};
function load(f) { eval(fs.readFileSync(path.join(__dirname, f), "utf8")); }
load("i18n.js");

const LANGS = (global.window.SHIEN_LANGS || []).map(l => l.code);
LANGS.forEach(code => {
  const f = "content." + code + ".js";
  if (fs.existsSync(path.join(__dirname, f))) load(f);
});
const CT = global.window.SHIEN_CONTENT || {};
const UI = global.window.SHIEN_UI || {};

let issues = 0;
const flag = (m) => { issues++; console.log("  ! " + m); };

function flatKeys(o, pre) {
  pre = pre || ""; let ks = [];
  for (const k in o) {
    if (k === "dir") continue;
    if (o[k] && typeof o[k] === "object" && !Array.isArray(o[k])) ks = ks.concat(flatKeys(o[k], pre + k + "."));
    else ks.push(pre + k);
  }
  return ks;
}
function sig(C) {
  return {
    scenes: (C.scenes || []).map(s => s.id + "|" + s.emoji + "|" + (s.medical ? "M" : "") + "|" + (s.call119 ? "119" : "") + "|" + (s.outdoor ? "O" : "")),
    traits: (C.traits || []).map(t => t.id + "|" + t.emoji + "|" + (t.prepare ? "P" : "") + "|" + (t.scenes || []).join(",")),
    hints: (C.hints || []).length,
    quizzes: (C.quizzes || []).map(q => q.answer + "/" + (q.options || []).length),
    phrases: (C.phraseGroups || []).map(g => g.id + "|" + g.emoji + "|" + (g.items || []).length),
    logOptions: ["triggers", "durations", "responses", "injuries"].map(k => k + ":" + ((C.logOptions || {})[k] || []).length),
    basis: (C.basis || []).length
  };
}
function checkLang(code, C) {
  const sceneIds = (C.scenes || []).map(s => s.id);
  if ((C.scenes || []).length !== 12) flag(`[${code}] 場面が12件でない: ${(C.scenes || []).length}`);
  if (!C.scenes || !C.scenes[0].medical) flag(`[${code}] 先頭が医療カードでない`);
  (C.scenes || []).forEach((s, i) => {
    const tag = `[${code}] scene#${i} ${s.id || "?"}`;
    ["title", "emoji", "why", "src"].forEach(k => { if (!s[k]) flag(`${tag} ${k}欠け`); });
    ["do", "dont", "after"].forEach(k => { if (!Array.isArray(s[k]) || !s[k].length) flag(`${tag} ${k}が空`); });
    if (s.do && s.do.length > 3) flag(`${tag} まずやることが3項目超: ${s.do.length}`);
    if (s.medical && (!Array.isArray(s.call119) || !s.call119.length)) flag(`${tag} 医療カードにcall119が無い`);
    if (/[�]/.test(JSON.stringify(s))) flag(`${tag} 文字化け(U+FFFD)`);
  });
  (C.traits || []).forEach((t, i) => {
    const tag = `[${code}] trait#${i} ${t.id || "?"}`;
    ["name", "emoji", "short", "src"].forEach(k => { if (!t[k]) flag(`${tag} ${k}欠け`); });
    ["what", "comm", "env", "ng"].forEach(k => { if (!Array.isArray(t[k]) || !t[k].length) flag(`${tag} ${k}が空`); });
    if ("prepare" in t && (!Array.isArray(t.prepare) || !t.prepare.length)) flag(`${tag} prepareが空`);
    (t.scenes || []).forEach(sid => { if (!sceneIds.includes(sid)) flag(`${tag} 未知のscene id: ${sid}`); });
    if (/[�]/.test(JSON.stringify(t))) flag(`${tag} 文字化け`);
  });
  (C.quizzes || []).forEach((q, i) => {
    const tag = `[${code}] quiz#${i}`;
    if (!q.q || !q.explain) flag(`${tag} q/explain欠け`);
    if (!Array.isArray(q.options) || q.options.length < 2) flag(`${tag} optionsが2未満`);
    if (typeof q.answer !== "number" || q.answer < 0 || (q.options && q.answer >= q.options.length)) flag(`${tag} answer添字不正`);
  });
  if (!Array.isArray(C.hints) || C.hints.length < 7) flag(`[${code}] hintsが少ない`);
  ["triggers", "durations", "responses", "injuries"].forEach(k => {
    if (!C.logOptions || !Array.isArray(C.logOptions[k]) || !C.logOptions[k].length) flag(`[${code}] logOptions.${k}空`);
  });
  if (!Array.isArray(C.basis) || !C.basis.length) flag(`[${code}] basis空`);
}

if (!CT.ja) { console.log("content.ja.js が読めない"); process.exit(1); }
const baseSig = JSON.stringify(sig(CT.ja));
const uiKeysJa = flatKeys(UI.ja).sort();

console.log("=== 言語別チェック ===");
Object.keys(CT).forEach(code => {
  const C = CT[code];
  console.log(`--- ${code}: scenes ${C.scenes.length} / traits ${C.traits.length} / hints ${C.hints.length} / quizzes ${C.quizzes.length} / phrases ${C.phraseGroups.length}`);
  checkLang(code, C);
  if (code !== "ja") {
    if (JSON.stringify(sig(C)) !== baseSig) {
      flag(`[${code}] 構造が ja と不一致`);
      const a = sig(CT.ja), b = sig(C);
      ["scenes", "traits", "quizzes", "phrases", "logOptions"].forEach(key => {
        if (JSON.stringify(a[key]) !== JSON.stringify(b[key])) console.log(`      diff@${key}:\n        ja=${JSON.stringify(a[key])}\n        ${code}=${JSON.stringify(b[key])}`);
      });
      if (a.hints !== b.hints) console.log(`      hints: ja=${a.hints} ${code}=${b.hints}`);
      if (a.basis !== b.basis) console.log(`      basis: ja=${a.basis} ${code}=${b.basis}`);
    }
    if (UI[code]) {
      const ks = flatKeys(UI[code]).sort();
      const missing = uiKeysJa.filter(k => ks.indexOf(k) < 0);
      const extra = ks.filter(k => uiKeysJa.indexOf(k) < 0);
      if (missing.length) flag(`[${code}] UIキー不足: ${missing.join(", ")}`);
      if (extra.length) flag(`[${code}] UIキー余分: ${extra.join(", ")}`);
    } else flag(`[${code}] SHIEN_UI.${code} が無い`);
  }
});

console.log(issues ? `\n>>> ${issues} 件の要確認` : "\n>>> ALL OK（全言語 構造パリティ一致）");
process.exit(issues ? 1 : 0);
