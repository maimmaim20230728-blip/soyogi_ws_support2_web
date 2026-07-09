/*
 * そよぎ 支援サポート - UI文字列（i18n）
 * 画面のラベル・ボタン等。コンテンツ本体は content.<lang>.js（SHIEN_CONTENT[lang]）。
 * 言語を足すときは：ここに SHIEN_UI.<lang> を追加し、content.<lang>.js を作る。
 * LANGS の並び順が言語切替メニューの順。dir:"rtl" は右書き言語。
 */
window.SHIEN_UI = window.SHIEN_UI || {};

/* 対応言語の登録（uiとcontentの両方がそろった言語だけ実際に選べる） */
window.SHIEN_LANGS = [
  { code: "ja", name: "日本語" },
  { code: "en", name: "English" },
  { code: "zh", name: "中文（简体）" },
  { code: "es", name: "Español" },
  { code: "hi", name: "हिन्दी" },
  { code: "ar", name: "العربية", dir: "rtl" },
  { code: "pt", name: "Português" },
  { code: "fr", name: "Français" },
  { code: "ru", name: "Русский" },
  { code: "id", name: "Bahasa Indonesia" },
  { code: "de", name: "Deutsch" },
  { code: "ko", name: "한국어" },
  { code: "it", name: "Italiano" },
  { code: "bn", name: "বাংলা" }
];

window.SHIEN_UI.ja = {
  dir: "ltr",
  appName: "そよぎ 支援サポート",
  tagline: "支援の、お守りに。― 障害福祉スタッフのための支援サポート ―",
  nav: { scenes: "こまった", lookup: "しらべる", learn: "まなぶ", talk: "つたえる" },
  back: "← もどる",
  ref: "参考：",

  scenesNote: "ここにあるのは「傾向とヒント」です。いちばんの手がかりは、目の前のその人です。",
  medicalSub: "医療のことは迷わずこちら →",
  seeLogs: "📝 きろくをみる",
  footMedical: "このアプリは医療判断をしません。緊急時は現地の緊急番号へ。",
  footPrivacy: "個人情報は収集しません（きろくは この端末の中だけ に保存されます）。",

  blkDo: "まずやること",
  blk119: "すぐ緊急番号（119等）の目安",
  blkDont: "やってはいけないこと",
  blkOutdoor: "外出先では（駅・人混みなど）",
  blkAfter: "おちついたら",
  blkWhy: "なぜ起きる？（よみもの）",
  recordBtn: "いまのことを きろくする（30秒）",

  recTitle: "きろく",
  recSaveNote: "（この端末の中にだけ保存されます）",
  recTriggers: "きっかけ（いくつでも）",
  recDuration: "つづいた時間",
  recResponses: "対応したこと（いくつでも）",
  recInjury: "けが・物損",
  recMemo: "備考（なくてOK・ひとことだけ）",
  recMemoPh: "例：おやつの前だった",
  recCancel: "やめる",
  recSave: "ほぞん",

  logsTitle: "きろく",
  logsEmpty: "まだ きろくはありません。場面カードの「きろくする」から、タップだけで残せます。",
  logsCopy: "📋 ぜんぶコピー（申し送りに貼れます）",
  logsCopied: "✅ コピーしました",
  logsFoot: "きろくは この端末の中だけ に保存されています（最大200件）。",
  logTrigger: "きっかけ", logDur: "時間", logResp: "対応", logInj: "けが", logMemo: "備考",

  lookupNote: "ここにあるのは「傾向とヒント」です。表れ方は一人ひとり違います。いちばんの手がかりは、目の前のその人です。",
  byTrait: "特性から調べる",
  byScene: "場面から調べる",
  bySceneNote: "困っている“場面”からは、下の 🚨 こまった から引けます。",
  openScenes: "→ こまった を開く",
  aboutBasis: "📚 このアプリの根拠について",

  backTraits: "← 特性一覧へ",
  trWhat: "どんな特性か",
  trPrepare: "そなえる（事前の準備・計画がいちばん大事）",
  trComm: "コミュニケーションのコツ",
  trEnv: "環境の工夫",
  trScenes: "よくある場面と対応",
  trNg: "こんな対応は避けて",

  backLookup: "← しらべるへ",
  basisTitle: "📚 このアプリの根拠",
  basisNote: "このアプリは、現場の経験だけでなく、国内外で広く使われている支援の枠組み・医学的知見を土台にしています。あくまで“ヒント”であり、最終的な判断は目の前の本人と、専門職・主治医の指示を優先してください。",
  basisFoot: "※各場面カード・各特性ページの末尾にも、個別の参考元を示しています。",

  todayHint: "🌱 今日のヒント",
  anotherHint: "別のヒントを見る",
  quizLead: "ケースクイズ ― 正解より“なぜ”を",
  quizRight: "◎ そのとおり",
  quizWrong: "△ もう一度みてみましょう",
  quizNext: "次の問題 →",

  talkPhrases: "ていけいぶん",
  talkType: "もじばん",
  talkDraw: "ひつだん",
  phrasesNote: "タップすると 読み上げて、大きく表示します。",
  typePh: "ここに もじが でます",
  typeInputPh: "ここに 入力…",
  read: "🔊 よむ", showBig: "👀 みせる", del: "← けす", clearAll: "ぜんぶけす",
  drawThin: "ほそい", drawThick: "ふとい", drawInvert: "はんてん", drawClear: "けす",
  overlayHint: "画面をタップすると戻ります",

  bgmOn: "BGM オン（タップで消音）",
  bgmOff: "BGM オフ（タップで再生）",
  langLabel: "言語 / Language"
};

window.SHIEN_UI.en = {
  dir: "ltr",
  appName: "Soyogi Support Guide",
  tagline: "A little guardian for support. — for disability-support staff —",
  nav: { scenes: "When stuck", lookup: "Look up", learn: "Learn", talk: "Communicate" },
  back: "← Back",
  ref: "Source: ",

  scenesNote: "These are tendencies and hints. Your best guide is always the person in front of you.",
  medicalSub: "For medical matters, go straight here →",
  seeLogs: "📝 See records",
  footMedical: "This app does not make medical decisions. In an emergency, call your local emergency number.",
  footPrivacy: "No personal data is collected (records stay on this device only).",

  blkDo: "First, do this",
  blk119: "When to call emergency now",
  blkDont: "What NOT to do",
  blkOutdoor: "When you're out (stations, crowds…)",
  blkAfter: "Once things settle",
  blkWhy: "Why it happens (a read)",
  recordBtn: "Record what just happened (30 sec)",

  recTitle: "Record",
  recSaveNote: "(saved on this device only)",
  recTriggers: "Trigger (choose any)",
  recDuration: "How long it lasted",
  recResponses: "What you did (choose any)",
  recInjury: "Injury / damage",
  recMemo: "Note (optional, one line)",
  recMemoPh: "e.g. it was just before snack time",
  recCancel: "Cancel",
  recSave: "Save",

  logsTitle: "Records",
  logsEmpty: "No records yet. Tap “Record” on any card to save one with a few taps.",
  logsCopy: "📋 Copy all (paste into a handover)",
  logsCopied: "✅ Copied",
  logsFoot: "Records are stored on this device only (up to 200).",
  logTrigger: "Trigger", logDur: "Duration", logResp: "Response", logInj: "Injury", logMemo: "Note",

  lookupNote: "These are tendencies and hints. How they show up differs from person to person. Your best guide is the person in front of you.",
  byTrait: "By trait",
  byScene: "By situation",
  bySceneNote: "To look up by the situation you're facing, use 🚨 When stuck below.",
  openScenes: "→ Open “When stuck”",
  aboutBasis: "📚 About this app's evidence",

  backTraits: "← Back to traits",
  trWhat: "About this trait",
  trPrepare: "Prepare (planning ahead matters most)",
  trComm: "Communication tips",
  trEnv: "Adjusting the environment",
  trScenes: "Common situations & responses",
  trNg: "Approaches to avoid",

  backLookup: "← Back to Look up",
  basisTitle: "📚 This app's evidence",
  basisNote: "This app is grounded not only in frontline experience but also in widely used support frameworks and medical knowledge. These are hints — always prioritise the person in front of you and the guidance of professionals and their doctor.",
  basisFoot: "* Each situation card and trait page also lists its own sources at the end.",

  todayHint: "🌱 Hint of the day",
  anotherHint: "Show another hint",
  quizLead: "Case quiz — the “why” matters more than the answer",
  quizRight: "◎ That's right",
  quizWrong: "△ Let's look again",
  quizNext: "Next question →",

  talkPhrases: "Phrases",
  talkType: "Keyboard",
  talkDraw: "Write",
  phrasesNote: "Tap to read aloud and show it large.",
  typePh: "Your text appears here",
  typeInputPh: "Type here…",
  read: "🔊 Read", showBig: "👀 Show", del: "← Delete", clearAll: "Clear all",
  drawThin: "Thin", drawThick: "Thick", drawInvert: "Invert", drawClear: "Clear",
  overlayHint: "Tap the screen to go back",

  bgmOn: "Music on (tap to mute)",
  bgmOff: "Music off (tap to play)",
  langLabel: "言語 / Language"
};
