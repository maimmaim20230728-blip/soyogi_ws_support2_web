/* 福祉サポーターズ・サポート（障害者版） - アプリロジック（多言語対応）
 * 原則：個人情報を持たない（氏名欄を作らない）・記録は端末内のみ・タップだけで数十秒で完結
 * i18n：C = SHIEN_CONTENT[lang]（本文）／ T = SHIEN_UI[lang]（UI文字列）
 */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };
  var LOG_KEY = "shien.logs";
  var LANG_KEY = "shien.lang";
  var C = null, T = null, LANG = "ja", SEP = "・";

  var SPEAK_LANG = {
    ja: "ja-JP", en: "en-US", zh: "zh-CN", es: "es-ES", hi: "hi-IN", ar: "ar-SA",
    pt: "pt-BR", fr: "fr-FR", ru: "ru-RU", id: "id-ID", de: "de-DE", ko: "ko-KR",
    it: "it-IT", bn: "bn-BD"
  };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function list(items) {
    return "<ul>" + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
  }

  /* ========== 言語 ========== */
  function availableLangs() {
    return (window.SHIEN_LANGS || []).filter(function (l) { return window.SHIEN_UI && window.SHIEN_UI[l.code]; });
  }
  function resolveLang() {
    var saved = null;
    try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
    if (saved && window.SHIEN_UI[saved]) return saved;
    var nav = (navigator.language || "ja").slice(0, 2).toLowerCase();
    if (window.SHIEN_UI[nav]) return nav;
    return "ja";
  }
  function loadContent(lang, cb) {
    if (window.SHIEN_CONTENT[lang]) { cb(true); return; }
    var s = document.createElement("script");
    s.src = "content." + lang + ".js";
    s.onload = function () { cb(!!window.SHIEN_CONTENT[lang]); };
    s.onerror = function () { cb(false); };
    document.head.appendChild(s);
  }
  function setLang(lang) {
    loadContent(lang, function (ok) {
      if (!ok || !window.SHIEN_UI[lang]) lang = "ja";
      LANG = lang;
      C = window.SHIEN_CONTENT[lang];
      T = window.SHIEN_UI[lang] || window.SHIEN_UI.ja;
      SEP = lang === "ja" ? "・" : ", ";
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
      document.documentElement.lang = lang;
      document.documentElement.dir = T.dir || "ltr";
      applyStaticUI();
      renderPhrases();
      buildTypePane();
      renderScenes();
      show("scenes");
    });
  }
  function buildLangSelect() {
    var sel = $("#langSelect"); if (!sel) return;
    sel.innerHTML = availableLangs().map(function (l) {
      return '<option value="' + l.code + '">🌐 ' + esc(l.name) + '</option>';
    }).join("");
    sel.value = LANG;
    sel.addEventListener("change", function () { setLang(sel.value); });
  }
  function setNavLabel(view, text) {
    var b = document.querySelector('nav button[data-view="' + view + '"] .t'); if (b) b.textContent = text;
  }
  function setPaneLabel(pane, text) {
    var b = document.querySelector('.talk-tabs button[data-pane="' + pane + '"]'); if (b) b.textContent = text;
  }
  var BRAND = { ja: "そよぎ", ko: "소요기" }; /* 正式名「福祉サポーターズ・サポート　そよぎ（障害者版）」の「そよぎ」をバランス調整で2段目に表示（高齢者版と同形） */
  function applyStaticUI() {
    document.title = T.appName;
    $("#appName").textContent = T.appName;
    var br = $("#appBrand"); if (br) br.textContent = BRAND[LANG] || "Soyogi";
    $("#tagline").textContent = T.tagline;
    setNavLabel("scenes", T.nav.scenes); setNavLabel("lookup", T.nav.lookup);
    setNavLabel("learn", T.nav.learn); setNavLabel("talk", T.nav.talk);
    setPaneLabel("phrases", T.talkPhrases); setPaneLabel("type", T.talkType); setPaneLabel("draw", T.talkDraw);
    $("#penThin").textContent = T.drawThin; $("#penThick").textContent = T.drawThick;
    $("#penInvert").textContent = T.drawInvert; $("#penClear").textContent = T.drawClear;
    var oh = document.querySelector("#showOverlay .hint"); if (oh) oh.textContent = T.overlayHint;
    var ls = $("#langSelect"); if (ls) ls.value = LANG;
    bgmPaint();
  }

  /* ========== ビュー切替 ========== */
  var views = ["scenes", "detail", "lookup", "learn", "talk", "logs"];
  var currentView = "scenes";
  function show(view) {
    views.forEach(function (v) { $("#view-" + v).classList.toggle("active", v === view); });
    document.querySelectorAll("nav button").forEach(function (b) {
      b.classList.toggle("on", b.dataset.view === view ||
        (b.dataset.view === "scenes" && (view === "detail" || view === "logs")));
    });
    window.scrollTo(0, 0);
    currentView = view;
    bgmRefresh();
  }
  document.querySelectorAll("nav button").forEach(function (b) {
    b.addEventListener("click", function () {
      if (b.dataset.view === "lookup") renderLookup();
      if (b.dataset.view === "learn") renderLearn();
      show(b.dataset.view);
    });
  });

  /* ========== こまった：一覧 ========== */
  function renderScenes() {
    var med = C.scenes.filter(function (s) { return s.medical; })[0];
    var rest = C.scenes.filter(function (s) { return !s.medical; });
    var html = '<div class="gentle-note">' + esc(T.scenesNote) + "</div>";
    html += '<button class="medical-btn" data-id="' + med.id + '">' +
      '<span style="font-size:1.8rem">' + med.emoji + "</span>" +
      '<span><span class="t">' + esc(med.title) + '</span><br><span class="s">' + esc(T.medicalSub) + "</span></span></button>";
    html += '<div class="scene-grid">';
    rest.forEach(function (s) {
      html += '<button class="scene-btn" data-id="' + s.id + '">' +
        '<span class="e">' + s.emoji + '</span><span class="t">' + esc(s.title) + "</span></button>";
    });
    html += "</div>";
    html += '<div class="footer-links"><button id="openLogs">' + esc(T.seeLogs) + "</button></div>";
    html += '<div class="app-foot">' + esc(T.footMedical) + "<br>" + esc(T.footPrivacy) +
      '<br><a class="dev-credit" href="https://soyogi.hp.peraichi.com/top" target="_blank" rel="noopener">アプリ開発：介護と支援の相談どころ・そよぎ</a></div>';
    $("#view-scenes").innerHTML = html;
    document.querySelectorAll("#view-scenes [data-id]").forEach(function (b) {
      b.addEventListener("click", function () { renderDetail(b.dataset.id); show("detail"); });
    });
    $("#openLogs").addEventListener("click", function () { renderLogs(); show("logs"); });
  }

  /* ========== こまった：カード詳細 ========== */
  function renderDetail(id) {
    var s = C.scenes.filter(function (x) { return x.id === id; })[0];
    if (!s) return;
    var html = '<button class="back-btn" id="backBtn">' + esc(T.back) + "</button>";
    html += '<div class="card-title">' + s.emoji + " " + esc(s.title) + "</div>";
    if (s.medical && s.lead) html += '<div class="lead-med">' + esc(s.lead) + "</div>";
    html += '<div class="block block-do"><h3>🟢 ' + esc(T.blkDo) + "</h3>" + list(s.do) + "</div>";
    if (s.call119) {
      html += '<div class="block block-119"><h3>🚑 ' + esc(T.blk119) + "</h3>" + list(s.call119);
      if (s.note) html += '<div class="note">' + esc(s.note) + "</div>";
      html += "</div>";
    }
    html += '<div class="block block-ng"><h3>🚫 ' + esc(T.blkDont) + "</h3>" + list(s.dont) + "</div>";
    if (s.outdoor) html += '<div class="block block-out"><h3>🚶 ' + esc(T.blkOutdoor) + "</h3>" + list(s.outdoor) + "</div>";
    html += '<div class="block block-after"><h3>🕊️ ' + esc(T.blkAfter) + "</h3>" + list(s.after) + "</div>";
    html += '<button class="record-btn" data-scene="' + s.id + '">📝 ' + esc(T.recordBtn) + "</button>";
    html += '<details class="why"><summary>💡 ' + esc(T.blkWhy) + "</summary><p>" + esc(s.why) + "</p></details>";
    html += '<div class="src">' + esc(T.ref) + esc(s.src) + "</div>";
    $("#view-detail").innerHTML = html;
    $("#backBtn").addEventListener("click", function () { show("scenes"); });
    $("#view-detail .record-btn").addEventListener("click", function () { openRecord(s.id); });
  }

  /* ========== きろく：モーダル ========== */
  var rec = null;
  function chipRow(label, name, options, multi) {
    var html = '<div class="q"><div class="label">' + esc(label) + '</div><div class="chips" data-name="' + name + '" data-multi="' + (multi ? 1 : 0) + '">';
    options.forEach(function (o) { html += '<button class="chip" data-v="' + esc(o) + '">' + esc(o) + "</button>"; });
    return html + "</div></div>";
  }
  function stamp(ts) {
    var d = new Date(ts);
    return (d.getMonth() + 1) + "/" + d.getDate() + " " + d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");
  }
  function openRecord(sceneId) {
    var scene = C.scenes.filter(function (x) { return x.id === sceneId; })[0];
    rec = { ts: Date.now(), scene: scene ? scene.title : "", triggers: [], duration: "", responses: [], injury: "", memo: "" };
    var html = "<h2>📝 " + esc(T.recTitle) + "</h2>" +
      '<div class="sub">' + stamp(rec.ts) + "・" + esc(rec.scene) + esc(T.recSaveNote) + "</div>";
    html += chipRow(T.recTriggers, "triggers", C.logOptions.triggers, true);
    html += chipRow(T.recDuration, "duration", C.logOptions.durations, false);
    html += chipRow(T.recResponses, "responses", C.logOptions.responses, true);
    html += chipRow(T.recInjury, "injury", C.logOptions.injuries, false);
    html += '<div class="q"><div class="label">' + esc(T.recMemo) + "</div>" +
      '<input class="memo-input" id="memoInput" type="text" maxlength="60" placeholder="' + esc(T.recMemoPh) + '"></div>';
    html += '<div class="modal-actions"><button class="btn-cancel" id="recCancel">' + esc(T.recCancel) + "</button>" +
      '<button class="btn-save" id="recSave">' + esc(T.recSave) + "</button></div>";
    $("#recordModal").innerHTML = html;
    $("#modalWrap").classList.add("open");
    document.querySelectorAll("#recordModal .chips").forEach(function (row) {
      row.addEventListener("click", function (e) {
        var chip = e.target.closest(".chip"); if (!chip) return;
        if (row.dataset.multi === "1") { chip.classList.toggle("on"); }
        else { row.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("on"); }); chip.classList.add("on"); }
      });
    });
    $("#recCancel").addEventListener("click", closeRecord);
    $("#recSave").addEventListener("click", saveRecord);
  }
  function closeRecord() { $("#modalWrap").classList.remove("open"); rec = null; }
  function readChips(name) {
    var row = document.querySelector('#recordModal .chips[data-name="' + name + '"]');
    return Array.prototype.map.call(row.querySelectorAll(".chip.on"), function (c) { return c.dataset.v; });
  }
  function saveRecord() {
    rec.triggers = readChips("triggers");
    rec.duration = readChips("duration")[0] || "";
    rec.responses = readChips("responses");
    rec.injury = readChips("injury")[0] || "";
    rec.memo = ($("#memoInput").value || "").trim();
    var logs = loadLogs();
    logs.unshift(rec);
    if (logs.length > 200) logs.length = 200;
    localStorage.setItem(LOG_KEY, JSON.stringify(logs));
    closeRecord();
    renderLogs(); show("logs");
  }
  $("#modalWrap").addEventListener("click", function (e) { if (e.target === this) closeRecord(); });

  /* ========== きろく：一覧 ========== */
  function loadLogs() {
    try { return JSON.parse(localStorage.getItem(LOG_KEY) || "[]"); } catch (e) { return []; }
  }
  function fmtLog(l) {
    var parts = ["[" + stamp(l.ts) + "] " + l.scene];
    if (l.triggers.length) parts.push(T.logTrigger + ": " + l.triggers.join(SEP));
    if (l.duration) parts.push(T.logDur + ": " + l.duration);
    if (l.responses.length) parts.push(T.logResp + ": " + l.responses.join(SEP));
    if (l.injury) parts.push(T.logInj + ": " + l.injury);
    if (l.memo) parts.push(T.logMemo + ": " + l.memo);
    return parts.join(" ｜ ");
  }
  function renderLogs() {
    var logs = loadLogs();
    var html = '<button class="back-btn" id="logsBack">' + esc(T.back) + "</button>";
    html += '<div class="card-title">📝 ' + esc(T.logsTitle) + "</div>";
    if (!logs.length) {
      html += '<div class="empty">' + esc(T.logsEmpty) + "</div>";
    } else {
      html += '<button class="copy-btn" id="copyLogs">' + esc(T.logsCopy) + "</button>";
      logs.forEach(function (l, i) {
        html += '<div class="log-item"><button class="del" data-i="' + i + '">✕</button>' +
          '<span class="when">' + stamp(l.ts) + "・" + esc(l.scene) + "</span><br>" +
          esc([l.triggers.join(SEP), l.duration, l.responses.join(SEP), l.injury, l.memo]
            .filter(Boolean).join(" ｜ ")) + "</div>";
      });
      html += '<div class="app-foot">' + esc(T.logsFoot) + "</div>";
    }
    $("#view-logs").innerHTML = html;
    $("#logsBack").addEventListener("click", function () { show("scenes"); });
    var cp = $("#copyLogs");
    if (cp) cp.addEventListener("click", function () {
      var text = loadLogs().map(fmtLog).join("\n");
      navigator.clipboard.writeText(text).then(function () {
        cp.textContent = T.logsCopied;
        setTimeout(function () { cp.textContent = T.logsCopy; }, 1600);
      });
    });
    document.querySelectorAll("#view-logs .del").forEach(function (b) {
      b.addEventListener("click", function () {
        var logs2 = loadLogs(); logs2.splice(Number(b.dataset.i), 1);
        localStorage.setItem(LOG_KEY, JSON.stringify(logs2)); renderLogs();
      });
    });
  }

  /* ========== しらべる：特性リファレンス ========== */
  function sceneTitle(id) {
    var s = C.scenes.filter(function (x) { return x.id === id; })[0];
    return s ? { emoji: s.emoji, title: s.title } : null;
  }
  function renderLookup() {
    var html = '<div class="gentle-note">' + esc(T.lookupNote) + "</div>";
    html += '<div class="lookup-lead">' + esc(T.byTrait) + "</div>";
    html += '<div class="scene-grid">';
    C.traits.forEach(function (t) {
      html += '<button class="scene-btn" data-trait="' + t.id + '">' +
        '<span class="e">' + t.emoji + '</span><span class="t">' + esc(t.name) + "</span>" +
        '<span class="ts">' + esc(t.short) + "</span></button>";
    });
    html += "</div>";
    html += '<div class="lookup-lead">' + esc(T.byScene) + "</div>";
    html += '<div class="gentle-note" style="margin-bottom:12px">' + esc(T.bySceneNote) + "<br>" +
      '<button class="inline-link" id="toScenes">' + esc(T.openScenes) + "</button></div>";
    html += '<div class="footer-links"><button id="toBasis">' + esc(T.aboutBasis) + "</button></div>";
    $("#view-lookup").innerHTML = html;
    document.querySelectorAll("#view-lookup [data-trait]").forEach(function (b) {
      b.addEventListener("click", function () { renderTrait(b.dataset.trait); });
    });
    $("#toScenes").addEventListener("click", function () { show("scenes"); });
    $("#toBasis").addEventListener("click", renderBasis);
  }
  function renderTrait(id) {
    var t = C.traits.filter(function (x) { return x.id === id; })[0];
    if (!t) return;
    var html = '<button class="back-btn" id="lkBack">' + esc(T.backTraits) + "</button>";
    html += '<div class="card-title">' + t.emoji + " " + esc(t.name) + "</div>";
    html += '<div class="block block-what"><h3>ℹ️ ' + esc(T.trWhat) + "</h3>" + list(t.what) + "</div>";
    if (t.prepare && t.prepare.length) html += '<div class="block block-prep"><h3>🗓️ ' + esc(T.trPrepare) + "</h3>" + list(t.prepare) + "</div>";
    html += '<div class="block block-comm"><h3>💬 ' + esc(T.trComm) + "</h3>" + list(t.comm) + "</div>";
    html += '<div class="block block-env"><h3>🧩 ' + esc(T.trEnv) + "</h3>" + list(t.env) + "</div>";
    if (t.scenes && t.scenes.length) {
      html += '<div class="block block-scenes"><h3>🚨 ' + esc(T.trScenes) + '</h3><div class="scene-links">';
      t.scenes.forEach(function (sid) {
        var s = sceneTitle(sid);
        if (s) html += '<button class="scene-link" data-scene="' + sid + '">' + s.emoji + " " + esc(s.title) + "</button>";
      });
      html += "</div></div>";
    }
    html += '<div class="block block-ng"><h3>🚫 ' + esc(T.trNg) + "</h3>" + list(t.ng) + "</div>";
    html += '<div class="src">' + esc(T.ref) + esc(t.src) + "</div>";
    $("#view-lookup").innerHTML = html;
    $("#lkBack").addEventListener("click", renderLookup);
    document.querySelectorAll("#view-lookup .scene-link").forEach(function (b) {
      b.addEventListener("click", function () { renderDetail(b.dataset.scene); show("detail"); });
    });
    window.scrollTo(0, 0);
  }
  function renderBasis() {
    var html = '<button class="back-btn" id="bsBack">' + esc(T.backLookup) + "</button>";
    html += '<div class="card-title">' + esc(T.basisTitle) + "</div>";
    html += '<div class="gentle-note">' + esc(T.basisNote) + "</div>";
    html += '<div class="block block-what"><ul>' +
      C.basis.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul></div>";
    html += '<div class="src">' + esc(T.basisFoot) + "</div>";
    $("#view-lookup").innerHTML = html;
    $("#bsBack").addEventListener("click", renderLookup);
    window.scrollTo(0, 0);
  }

  /* ========== まなぶ ========== */
  function todayIndex(len) {
    var now = new Date(), start = new Date(now.getFullYear(), 0, 0);
    return Math.floor((now - start) / 86400000) % len;
  }
  var lastQuiz = -1;
  function pickQuiz() {
    if (C.quizzes.length <= 1) return 0;
    var i; do { i = Math.floor(Math.random() * C.quizzes.length); } while (i === lastQuiz);
    lastQuiz = i; return i;
  }
  function renderLearn() {
    var hint = C.hints[todayIndex(C.hints.length)];
    var html = '<div class="learn-hint"><div class="lh-label">' + esc(T.todayHint) + "</div>" +
      "<p>" + esc(hint) + "</p>" +
      '<button class="lh-more" id="hintMore">' + esc(T.anotherHint) + "</button></div>";
    html += '<div class="lookup-lead">' + esc(T.quizLead) + "</div>";
    html += '<div id="quizArea"></div>';
    $("#view-learn").innerHTML = html;
    $("#hintMore").addEventListener("click", function () {
      $("#view-learn .learn-hint p").textContent = C.hints[Math.floor(Math.random() * C.hints.length)];
    });
    renderQuiz(pickQuiz());
  }
  function renderQuiz(qi) {
    var q = C.quizzes[qi];
    var html = '<div class="quiz-card"><div class="quiz-q">' + esc(q.q) + '</div><div class="quiz-opts">';
    q.options.forEach(function (o, i) { html += '<button class="quiz-opt" data-i="' + i + '">' + esc(o) + "</button>"; });
    html += '</div><div class="quiz-explain" id="quizExplain"></div></div>';
    $("#quizArea").innerHTML = html;
    var answered = false;
    document.querySelectorAll("#quizArea .quiz-opt").forEach(function (b) {
      b.addEventListener("click", function () {
        if (answered) return; answered = true;
        var chosen = Number(b.dataset.i);
        document.querySelectorAll("#quizArea .quiz-opt").forEach(function (x) {
          var xi = Number(x.dataset.i);
          if (xi === q.answer) x.classList.add("correct");
          else if (xi === chosen) x.classList.add("wrong");
          x.disabled = true;
        });
        var ex = $("#quizExplain");
        ex.innerHTML = '<div class="qe-head">' + (chosen === q.answer ? esc(T.quizRight) : esc(T.quizWrong)) + "</div>" +
          "<p>" + esc(q.explain) + "</p>" +
          '<button class="quiz-next" id="quizNext">' + esc(T.quizNext) + "</button>";
        ex.classList.add("show");
        $("#quizNext").addEventListener("click", function () { renderQuiz(pickQuiz()); window.scrollTo(0, 0); });
      });
    });
  }

  /* ========== つたえる ========== */
  document.querySelectorAll(".talk-tabs button").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".talk-tabs button").forEach(function (x) { x.classList.toggle("on", x === b); });
      ["phrases", "type", "draw"].forEach(function (p) { $("#pane-" + p).classList.toggle("active", p === b.dataset.pane); });
      if (b.dataset.pane === "draw") initCanvas();
    });
  });
  function speak(text) {
    if (!("speechSynthesis" in window) || !text) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = SPEAK_LANG[LANG] || LANG; u.rate = 0.9;
    window.speechSynthesis.speak(u);
  }
  function renderPhrases() {
    var html = '<div class="gentle-note">' + esc(T.phrasesNote) + "</div>";
    C.phraseGroups.forEach(function (g) {
      html += '<div class="phrase-group"><h3>' + g.emoji + " " + esc(g.label) + '</h3><div class="phrase-grid">';
      g.items.forEach(function (p) { html += '<button class="phrase-btn" data-p="' + esc(p) + '">' + esc(p) + "</button>"; });
      html += "</div></div>";
    });
    var pane = $("#pane-phrases");
    pane.innerHTML = html;
    pane.onclick = function (e) {
      var b = e.target.closest(".phrase-btn"); if (!b) return;
      speak(b.dataset.p); showBig(b.dataset.p);
    };
  }

  /* --- 入力ペイン（日本語=50音／他言語=テキスト入力） --- */
  var DAKU = { "か": "が", "き": "ぎ", "く": "ぐ", "け": "げ", "こ": "ご", "さ": "ざ", "し": "じ", "す": "ず", "せ": "ぜ", "そ": "ぞ", "た": "だ", "ち": "ぢ", "つ": "づ", "て": "で", "と": "ど", "は": "ば", "ひ": "び", "ふ": "ぶ", "へ": "べ", "ほ": "ぼ", "う": "ゔ" };
  var HANDAKU = { "は": "ぱ", "ひ": "ぴ", "ふ": "ぷ", "へ": "ぺ", "ほ": "ぽ" };
  var SMALL = { "あ": "ぁ", "い": "ぃ", "う": "ぅ", "え": "ぇ", "お": "ぉ", "つ": "っ", "や": "ゃ", "ゆ": "ゅ", "よ": "ょ", "わ": "ゎ" };
  var ROWS = ["あいうえお", "かきくけこ", "さしすせそ", "たちつてと", "なにぬねの", "はひふへほ", "まみむめも", "や　ゆ　よ", "らりるれろ", "わ　を　ん"];
  var typeText = "";
  function getTypeText() { if (LANG === "ja") return typeText; var ta = $("#typeInput"); return ta ? ta.value : ""; }
  function updateKanaOut() {
    var el = $("#kanaOut"); if (!el) return;
    el.innerHTML = typeText ? esc(typeText) : '<span class="ph">' + esc(T.typePh) + "</span>";
  }
  function buildKanaBoard() {
    var html = "";
    ROWS.forEach(function (row) {
      row.split("").forEach(function (ch) { html += ch === "　" ? "<span></span>" : '<button data-k="' + ch + '">' + ch + "</button>"; });
    });
    html += '<button class="fn" data-fn="daku">゛</button><button class="fn" data-fn="handaku">゜</button>' +
      '<button class="fn" data-fn="small">小さく</button><button data-k="ー">ー</button><button data-k="　">スペース</button>';
    var bd = $("#kanaBoard"); bd.innerHTML = html;
    bd.onclick = function (e) {
      var b = e.target.closest("button"); if (!b) return;
      if (b.dataset.k) typeText += b.dataset.k;
      else if (b.dataset.fn) {
        var last = typeText.slice(-1);
        var map = b.dataset.fn === "daku" ? DAKU : b.dataset.fn === "handaku" ? HANDAKU : SMALL;
        if (map[last]) typeText = typeText.slice(0, -1) + map[last];
      }
      updateKanaOut();
    };
  }
  function buildTypePane() {
    var pane = $("#pane-type");
    var actions = '<div class="kana-actions">' +
      '<button id="typeRead" class="primary">' + esc(T.read) + "</button>" +
      '<button id="typeShow">' + esc(T.showBig) + "</button>" +
      (LANG === "ja" ? '<button id="typeBack">' + esc(T.del) + "</button>" : "") +
      '<button id="typeClear">' + esc(T.clearAll) + "</button></div>";
    if (LANG === "ja") {
      pane.innerHTML = '<div class="kana-out" id="kanaOut"></div>' + actions + '<div class="kana-board" id="kanaBoard"></div>';
      typeText = ""; buildKanaBoard(); updateKanaOut();
    } else {
      pane.innerHTML = '<textarea id="typeInput" class="type-input" rows="3" placeholder="' + esc(T.typeInputPh) + '"></textarea>' + actions;
    }
    $("#typeRead").addEventListener("click", function () { speak(getTypeText()); });
    $("#typeShow").addEventListener("click", function () { var t = getTypeText(); if (t) showBig(t); });
    $("#typeClear").addEventListener("click", function () {
      if (LANG === "ja") { typeText = ""; updateKanaOut(); } else { $("#typeInput").value = ""; }
    });
    if (LANG === "ja") $("#typeBack").addEventListener("click", function () { typeText = typeText.slice(0, -1); updateKanaOut(); });
  }

  /* --- みせる（全画面表示） --- */
  function showBig(text) {
    var el = $("#showTxt"); el.textContent = text;
    el.style.fontSize = text.length <= 4 ? "5rem" : text.length <= 8 ? "3.6rem" : text.length <= 16 ? "2.6rem" : "1.9rem";
    $("#showOverlay").classList.add("open");
  }
  $("#showOverlay").addEventListener("click", function () { this.classList.remove("open"); });

  /* --- ひつだん（手書きキャンバス） --- */
  var canvas = $("#drawCanvas"), ctx = null, drawing = false;
  var penWidth = 9, inverted = false, canvasReady = false;
  function initCanvas() {
    if (canvasReady) return;
    var rect = canvas.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
    ctx = canvas.getContext("2d"); ctx.scale(dpr, dpr);
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    paintBg(); canvasReady = true;
  }
  function paintBg() {
    var rect = canvas.getBoundingClientRect();
    ctx.fillStyle = inverted ? "#111" : "#fff"; ctx.fillRect(0, 0, rect.width, rect.height);
  }
  function pos(e) { var r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
  canvas.addEventListener("pointerdown", function (e) {
    if (!canvasReady) initCanvas();
    drawing = true; canvas.setPointerCapture(e.pointerId);
    var p = pos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y);
    ctx.strokeStyle = inverted ? "#fff" : "#222"; ctx.lineWidth = penWidth;
  });
  canvas.addEventListener("pointermove", function (e) { if (!drawing) return; var p = pos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); });
  ["pointerup", "pointercancel"].forEach(function (ev) { canvas.addEventListener(ev, function () { drawing = false; }); });
  $("#penThin").addEventListener("click", function () { penWidth = 4; toolOn(this); });
  $("#penThick").addEventListener("click", function () { penWidth = 9; toolOn(this); });
  function toolOn(btn) { $("#penThin").classList.remove("on"); $("#penThick").classList.remove("on"); btn.classList.add("on"); }
  $("#penInvert").addEventListener("click", function () { inverted = !inverted; this.classList.toggle("on", inverted); if (canvasReady) paintBg(); });
  $("#penClear").addEventListener("click", function () { if (canvasReady) paintBg(); });

  /* ========== BGM ==========
   * ・ヘッダー🎵で即ミュート（ON/OFF設定は保存）
   * ・つたえる中は自動でBGMを止め、他ページに移ると即復帰
   */
  var bgmBtn = null, audioUnlocked = false;
  function bgmPaint() {
    var A = window.SoyogiAudio; if (!A || !bgmBtn) return;
    var on = A.getBgmVolume() > 0;
    bgmBtn.textContent = on ? "🎵" : "🔇";
    bgmBtn.classList.toggle("off", !on);
    bgmBtn.title = on ? (T ? T.bgmOn : "BGM") : (T ? T.bgmOff : "BGM");
  }
  function bgmRefresh() {
    var A = window.SoyogiAudio; if (!A) return;
    if (audioUnlocked && A.getBgmVolume() > 0 && currentView !== "talk") A.startBGM();
    else A.stopBGM();
  }
  (function initBGM() {
    var A = window.SoyogiAudio; bgmBtn = $("#bgmToggle");
    if (!A || !bgmBtn) return;
    bgmPaint();
    bgmBtn.addEventListener("click", function () {
      A.unlock(); audioUnlocked = true;
      if (A.getBgmVolume() > 0) A.setBgmVolume(0); else A.setBgmVolume(0.5);
      bgmPaint(); bgmRefresh();
    });
    function firstGesture() {
      A.unlock(); audioUnlocked = true; bgmRefresh(); bgmPaint();
      window.removeEventListener("pointerdown", firstGesture, true);
    }
    window.addEventListener("pointerdown", firstGesture, true);
  })();

  /* ========== 起動 ========== */
  LANG = resolveLang();
  buildLangSelect();
  setLang(LANG);
})();
