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
      /* はじめての つかいかた：開いていれば、いまのページのまま訳し直す／起動のときは、読み終えるまで毎回出す（2026-09-30） */
      var gov = document.querySelector(".guide-ov");
      if (gov && gov._draw) gov._draw();
      if (!guideBooted) { guideBooted = true; if (!guideDone()) openGuide(true); }
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
    setPaneLabel("timer", T.talkTimer);
    var tmd = $("#tmModeDigital");
    if (tmd) {
      tmd.textContent = T.tmDigital;
      $("#tmModeAnalog").textContent = T.tmAnalog60;
      $("#tmModeFull").textContent = T.tmAnalogFull;
      var pm = document.querySelectorAll(".tm-preset");
      if (pm.length >= 3) { pm[0].textContent = T.tmMin5; pm[1].textContent = T.tmMin10; pm[2].textContent = T.tmMin15; }
      $("#tmCustomBtn").textContent = T.tmCustom;
      $("#tmReset").textContent = T.tmReset;
      $("#tmSoundLabel").textContent = T.tmSound;
      var sb = document.querySelectorAll(".tm-sound");
      if (sb.length >= 3) { sb[0].textContent = T.tmBeep; sb[1].textContent = T.tmChime; sb[2].textContent = T.tmVoice; }
      tmPaintCtl(); tmPaintCustom(); tmPaint();
    }
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
    html += '<div class="footer-links"><button id="openLogs">' + esc(T.seeLogs) + "</button><br>" +
      '<button id="openGuide">' + esc(T.guide.again) + "</button></div>";   /* つかいかたを もう一度（2026-09-30） */
    html += '<div class="app-foot">' + esc(T.footMedical) + "<br>" + esc(T.footPrivacy) +
      '<br><a class="dev-credit" href="https://soudansoyogi.com/" target="_blank" rel="noopener">アプリ開発：介護と支援の相談どころ・そよぎ</a></div>';
    $("#view-scenes").innerHTML = html;
    document.querySelectorAll("#view-scenes [data-id]").forEach(function (b) {
      b.addEventListener("click", function () { renderDetail(b.dataset.id); show("detail"); });
    });
    $("#openLogs").addEventListener("click", function () { renderLogs(); show("logs"); });
    $("#openGuide").addEventListener("click", function () { openGuide(false); });
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
    // 本人の側から見た感じ方（傾向）。what に散っていた文をここにまとめた（特性によっては無い）
    if (t.feel && t.feel.length) html += '<div class="block block-feel"><h3>💭 ' + esc(T.trFeel) + "</h3>" + list(t.feel) + "</div>";
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
  /* デッキ方式：ヒントもクイズも「重複なしで全件」出題。使い切ったら再シャッフル。
   * メモリ内のみ＝アプリを閉じるとリセット。件数は全言語同一（_check.jsで担保）なので言語切替後も添字は有効。 */
  function shuffled(n) {
    var a = []; for (var i = 0; i < n; i++) a.push(i);
    for (var j = a.length - 1; j > 0; j--) { var k = Math.floor(Math.random() * (j + 1)); var t = a[j]; a[j] = a[k]; a[k] = t; }
    return a;
  }
  var hintDeck = [], quizDeck = [];
  function nextHint() {
    if (!hintDeck.length) hintDeck = shuffled(C.hints.length);
    return C.hints[hintDeck.pop()];
  }
  function nextQuizIndex() {
    if (!quizDeck.length) quizDeck = shuffled(C.quizzes.length);
    return quizDeck.pop();
  }
  function renderLearn() {
    var hint = nextHint();
    var html = '<div class="learn-hint"><div class="lh-label">' + esc(T.todayHint) + "</div>" +
      "<p>" + esc(hint) + "</p>" +
      '<button class="lh-more" id="hintMore">' + esc(T.anotherHint) + "</button></div>";
    html += '<div class="lookup-lead">' + esc(T.quizLead) + "</div>";
    html += '<div id="quizArea"></div>';
    $("#view-learn").innerHTML = html;
    $("#hintMore").addEventListener("click", function () {
      $("#view-learn .learn-hint p").textContent = nextHint();
    });
    renderQuiz(nextQuizIndex());
  }
  function renderQuiz(qi) {
    var q = C.quizzes[qi];
    /* 選択肢は表示のたびに並びをシャッフル＝正解の位置が固定されない */
    var order = shuffled(q.options.length);
    var correctPos = order.indexOf(q.answer);
    var html = '<div class="quiz-card"><div class="quiz-q">' + esc(q.q) + '</div><div class="quiz-opts">';
    order.forEach(function (oi, pos) { html += '<button class="quiz-opt" data-i="' + pos + '">' + esc(q.options[oi]) + "</button>"; });
    html += '</div><div class="quiz-explain" id="quizExplain"></div></div>';
    $("#quizArea").innerHTML = html;
    var answered = false;
    document.querySelectorAll("#quizArea .quiz-opt").forEach(function (b) {
      b.addEventListener("click", function () {
        if (answered) return; answered = true;
        var chosen = Number(b.dataset.i);
        document.querySelectorAll("#quizArea .quiz-opt").forEach(function (x) {
          var xi = Number(x.dataset.i);
          if (xi === correctPos) x.classList.add("correct");
          else if (xi === chosen) x.classList.add("wrong");
          x.disabled = true;
        });
        var ex = $("#quizExplain");
        ex.innerHTML = '<div class="qe-head">' + (chosen === correctPos ? esc(T.quizRight) : esc(T.quizWrong)) + "</div>" +
          "<p>" + esc(q.explain) + "</p>" +
          '<button class="quiz-next" id="quizNext">' + esc(T.quizNext) + "</button>";
        ex.classList.add("show");
        $("#quizNext").addEventListener("click", function () { renderQuiz(nextQuizIndex()); window.scrollTo(0, 0); });
      });
    });
  }

  /* ========== つたえる ========== */
  document.querySelectorAll(".talk-tabs button").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".talk-tabs button").forEach(function (x) { x.classList.toggle("on", x === b); });
      ["phrases", "type", "draw", "timer"].forEach(function (p) { $("#pane-" + p).classList.toggle("active", p === b.dataset.pane); });
      talkPane = b.dataset.pane;
      if (b.dataset.pane === "draw") initCanvas();
      if (b.dataset.pane === "timer") tmPaint();
      bgmRefresh();
    });
  });
  var talkPane = "phrases";

  /* --- タイマー（見通しの可視化）---
   * デジタル/アナログ切替・5/10/15分+自由設定(1〜90分)・終了音=ピピピピ/チーン/こえ(各言語で「おしまい」)。
   * アナログは現場で使われるタイムタイマー式（60分文字盤・赤い残りが12時から反時計回りに減る。60分超は全周比率）。
   * 音はWeb Audio合成＝完全オフライン。実行中は画面スリープを抑止（Wake Lock・非対応環境では無視）。 */
  var tmTotal = 5 * 60, tmRemain = 5 * 60, tmRunning = false, tmEndAt = 0, tmTimerId = null;
  var tmMode = "digital", tmSoundSel = "beep", tmCustomMin = 20, tmWake = null, tmActx = null;
  function tmFmt(s) {
    s = Math.max(0, Math.ceil(s));
    var m = Math.floor(s / 60), ss = s % 60;
    return (m < 10 ? "0" : "") + m + ":" + (ss < 10 ? "0" : "") + ss;
  }
  function tmAudio() {
    var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null;
    if (!tmActx) tmActx = new AC();
    if (tmActx.state === "suspended") tmActx.resume();
    return tmActx;
  }
  function tmBeepSound() { /* ピピピピ×3回 */
    var ctx = tmAudio(); if (!ctx) return;
    var t0 = ctx.currentTime + 0.05;
    for (var r = 0; r < 3; r++) {
      for (var i = 0; i < 4; i++) {
        var t = t0 + r * 1.15 + i * 0.19;
        var o = ctx.createOscillator(), g = ctx.createGain();
        o.type = "square"; o.frequency.value = 960;
        g.gain.setValueAtTime(0.0001, t);
        g.gain.linearRampToValueAtTime(0.2, t + 0.015);
        g.gain.setValueAtTime(0.2, t + 0.1);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
        o.connect(g); g.connect(ctx.destination);
        o.start(t); o.stop(t + 0.18);
      }
    }
  }
  function tmChimeSound() { /* チンッ！＝昔の電子レンジのベル（一打・高め・短い余韻＋わずかなうなり） */
    var ctx = tmAudio(); if (!ctx) return;
    var t = ctx.currentTime + 0.03;
    [[1760, 0.3, 1.5], [1749, 0.12, 1.5], [2212, 0.1, 1.0], [3520, 0.05, 0.7]].forEach(function (p) {
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "sine"; o.frequency.value = p[0];
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(p[1], t + 0.006);
      g.gain.exponentialRampToValueAtTime(0.0001, t + p[2]);
      o.connect(g); g.connect(ctx.destination);
      o.start(t); o.stop(t + p[2] + 0.1);
    });
  }
  function tmPlaySound(kind) {
    if (kind === "beep") tmBeepSound();
    else if (kind === "chime") tmChimeSound();
    else speak(T.tmVoiceWord);
  }
  function tmPaint() {
    var d = $("#tmDigital"); if (!d) return;
    d.textContent = tmFmt(tmRemain);
    var disp = $("#tmDisplay");
    disp.classList.toggle("tm-digital-mode", tmMode === "digital");
    disp.classList.toggle("tm-analog-mode", tmMode !== "digital");
    if (tmMode !== "digital") tmDrawDial();
  }
  function tmDrawDial() {
    var cv = $("#tmCanvas"); if (!cv) return;
    var ctx = cv.getContext("2d"), W = cv.width, cx = W / 2, cy = W / 2, R = W / 2 - 14;
    ctx.clearRect(0, 0, W, W);
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff"; ctx.fill();
    ctx.lineWidth = 6; ctx.strokeStyle = "#dbe7f0"; ctx.stroke();
    /* アナログ60＝タイムタイマー式（60分文字盤に実残り分数）／まんたん＝設定時間を満タンとして全周比率で減る */
    var frac = tmMode === "analog60" ? Math.min(1, tmRemain / 3600) : tmRemain / Math.max(1, tmTotal);
    frac = Math.max(0, Math.min(1, frac));
    if (frac > 0) {
      ctx.beginPath(); ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, R - 8, -Math.PI / 2, -Math.PI / 2 - frac * Math.PI * 2, true);
      ctx.closePath(); ctx.fillStyle = "#ef7f61"; ctx.fill();
    }
    var ticks = tmMode === "analog60" ? 60 : 12;
    for (var i = 0; i < ticks; i++) {
      var a = -Math.PI / 2 + i * Math.PI * 2 / ticks;
      var big = tmMode === "analog60" ? i % 5 === 0 : true;
      var r1 = R - (big ? 28 : 16), r2 = R - 4;
      ctx.beginPath();
      ctx.moveTo(cx + r1 * Math.cos(a), cy + r1 * Math.sin(a));
      ctx.lineTo(cx + r2 * Math.cos(a), cy + r2 * Math.sin(a));
      ctx.lineWidth = big ? 6 : 3; ctx.strokeStyle = big ? "#35648f" : "#b8cddd"; ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(cx, cy, 10, 0, Math.PI * 2); ctx.fillStyle = "#35648f"; ctx.fill();
  }
  function tmWakeLock(on) {
    try {
      if (on && navigator.wakeLock) navigator.wakeLock.request("screen").then(function (w) { tmWake = w; }).catch(function () {});
      else if (!on && tmWake) { tmWake.release().catch(function () {}); tmWake = null; }
    } catch (e) {}
  }
  function tmSetTotal(sec) {
    tmHalt(); tmTotal = sec; tmRemain = sec;
    $("#tmDisplay").classList.remove("alarm");
    tmPaint();
  }
  function tmTick() {
    tmRemain = (tmEndAt - Date.now()) / 1000;
    if (tmRemain <= 0) {
      tmRemain = 0; tmHalt();
      $("#tmDisplay").classList.add("alarm");
      tmPlaySound(tmSoundSel);
    }
    tmPaint();
  }
  function tmGo() {
    if (tmRemain <= 0) { tmRemain = tmTotal; $("#tmDisplay").classList.remove("alarm"); }
    tmAudio(); /* ユーザー操作中にAudioContextを起こす（自動再生制限対策） */
    tmEndAt = Date.now() + tmRemain * 1000;
    tmRunning = true;
    tmTimerId = setInterval(tmTick, 200);
    tmWakeLock(true);
    tmPaintCtl();
    bgmRefresh(); /* カウントダウン開始→BGM再生 */
  }
  function tmHalt() {
    tmRunning = false;
    if (tmTimerId) { clearInterval(tmTimerId); tmTimerId = null; }
    tmWakeLock(false);
    tmPaintCtl();
    bgmRefresh(); /* 一時停止・終了・設定変更→BGM停止（次の開始か他画面まで） */
  }
  function tmPaintCtl() {
    var b = $("#tmStart"); if (!b || !T) return;
    b.textContent = tmRunning ? T.tmPause : T.tmStart;
    b.classList.toggle("running", tmRunning);
  }
  function tmPaintCustom() {
    var v = $("#tmCustomVal"); if (v) v.textContent = tmCustomMin + (T ? " " + T.tmMinSuffix : "");
  }
  function tmSetMode(m, btn) {
    tmMode = m;
    document.querySelectorAll(".tm-modes button").forEach(function (x) { x.classList.toggle("on", x === btn); });
    tmPaint();
  }
  $("#tmModeDigital").addEventListener("click", function () { tmSetMode("digital", this); });
  $("#tmModeAnalog").addEventListener("click", function () { tmSetMode("analog60", this); });
  $("#tmModeFull").addEventListener("click", function () { tmSetMode("full", this); });
  document.querySelectorAll(".tm-preset").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".tm-preset, #tmCustomBtn").forEach(function (x) { x.classList.remove("on"); });
      b.classList.add("on");
      $("#tmCustomRow").classList.remove("show");
      tmSetTotal(Number(b.dataset.min) * 60);
    });
  });
  $("#tmCustomBtn").addEventListener("click", function () {
    document.querySelectorAll(".tm-preset, #tmCustomBtn").forEach(function (x) { x.classList.remove("on"); });
    $("#tmCustomBtn").classList.add("on");
    $("#tmCustomRow").classList.add("show");
    tmPaintCustom();
  });
  document.querySelectorAll(".tm-step").forEach(function (b) {
    b.addEventListener("click", function () {
      tmCustomMin = Math.max(1, Math.min(90, tmCustomMin + Number(b.dataset.d)));
      tmPaintCustom();
    });
  });
  $("#tmCustomSet").addEventListener("click", function () { tmSetTotal(tmCustomMin * 60); });
  $("#tmStart").addEventListener("click", function () {
    if (tmRunning) { tmRemain = Math.max(0, (tmEndAt - Date.now()) / 1000); tmHalt(); tmPaint(); }
    else tmGo();
  });
  $("#tmReset").addEventListener("click", function () {
    tmHalt(); tmRemain = tmTotal; $("#tmDisplay").classList.remove("alarm"); tmPaint();
  });
  document.querySelectorAll(".tm-sound").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".tm-sound").forEach(function (x) { x.classList.remove("on"); });
      b.classList.add("on"); tmSoundSel = b.dataset.s;
      tmPlaySound(tmSoundSel); /* 選んだ音をその場で試聴できる */
    });
  });

  /* Play版(Capacitor)のWebViewはWeb Speech API非対応の端末が多い。
     その場合は端末内蔵のTTSエンジン(ネイティブ)へ橋渡しして読み上げる。 */
  /* 🔴 registerPlugin は @capacitor/core の関数で、バンドラ無しの WebView には無い(native-bridge.js に無い)。
     ネイティブが注入する Capacitor.Plugins.TextToSpeech を使う(2026-09-28 判明。registerPlugin だけを見ていた版はPlay版で無音) */
  var nativeTTS = (function () {
    try {
      var c = window.Capacitor;
      if (c && typeof c.isNativePlatform === "function" && c.isNativePlatform()) {
        var p = c.Plugins && c.Plugins.TextToSpeech;
        if (p && typeof p.speak === "function") return p;
        if (typeof c.registerPlugin === "function") return c.registerPlugin("TextToSpeech");
      }
    } catch (e) {}
    return null;
  })();
  function speak(text) {
    if (!text) return;
    if (nativeTTS) {
      nativeTTS.stop().catch(function () {}).then(function () {
        nativeTTS.speak({
          text: text,
          lang: SPEAK_LANG[LANG] || LANG,
          rate: 0.9, pitch: 1.0, volume: 1.0
        }).catch(function () {});
      });
      return;
    }
    if (!("speechSynthesis" in window)) return;
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
    /* つたえる中はBGM停止。ただしタイマーペインで「カウントダウン中」だけは再生
     * （設定中・一時停止中・終了後は停止のまま＝終了音や声がはっきり聞こえる）。
     * 他の画面に移れば従来どおり自動復帰。 */
    var talkOk = talkPane === "timer" && tmRunning;
    if (audioUnlocked && A.getBgmVolume() > 0 && (currentView !== "talk" || talkOk)) A.startBGM();
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
      /* つかいかた（初回の案内）が出ているあいだの操作は数えない＝読んでいるうちに鳴り出さない。閉じたあと最初にふれたときに今までどおり（2026-09-30） */
      if (document.querySelector(".guide-ov")) return;
      A.unlock(); audioUnlocked = true; bgmRefresh(); bgmPaint();
      window.removeEventListener("pointerdown", firstGesture, true);
    }
    window.addEventListener("pointerdown", firstGesture, true);
  })();

  /* ========== Android の戻るボタン（Play版だけ・2026-09-30） ==========
   * @capacitor/app が無いと、戻るでアプリごと後ろに下がっていた（Android 11 以前は閉じる）。
   * 押したときの順：①確かめの窓 → 「いいえ」
   *               ②みせる（大きく表示）→ 閉じる（画面タップと同じ）
   *               ③きろくの窓 → 「やめる」と同じ。チップを選んだか備考に字を入れていたら、先に確かめの窓（いいえ＝そのまま）
   *               ④しらべるの特性ページ・根拠ページ → 「← 特性一覧へ」「← しらべるへ」と同じ
   *               ⑤カード詳細・きろく一覧 → 「← もどる」と同じ（こまった へ）／しらべる・まなぶ・つたえる → こまった
   *               ⑥こまった → アプリを後ろに下げる（minimizeApp。中身はそのまま）
   * つたえるの もじばん・ひつだん の字や絵、動いているタイマーは、画面を移っても消えない（描き直さない）ので確かめは出さない。
   * 🔴 プラグインはネイティブが注入する Capacitor.Plugins.App を使う（registerPlugin は WebView に無い）。
   * Web版（ブラウザ）は何も変えない（戻るはブラウザのまま） */
  function isNativeApp() {
    try { var c = window.Capacitor; return !!(c && typeof c.isNativePlatform === "function" && c.isNativePlatform()); } catch (e) { return false; }
  }
  function nativePlugin(name, fn) {
    if (!isNativeApp()) return null;
    try {
      var c = window.Capacitor;
      if (typeof c.isPluginAvailable === "function" && !c.isPluginAvailable(name)) return null;
      var p = c.Plugins && c.Plugins[name];
      return (p && typeof p[fn] === "function") ? p : null;
    } catch (e) { return null; }
  }
  function minimizeApp() {
    var ap = nativePlugin("App", "minimizeApp");
    try { if (ap) { var p = ap.minimizeApp(); if (p && p.catch) p.catch(function () {}); } } catch (e) {}
  }
  /* 確かめの窓：Play版の window.confirm は、Capacitor（BridgeWebChromeClient）がボタンを英語の OK / Cancel に決め打ちしている。
   * Play版だけ、アプリの中に「いいえ / はい」（T.askNo / T.askYes・14言語）の窓を出す。Web版は window.confirm（ブラウザの言葉）。
   * done(true=はい / false=いいえ)。戻るボタン＝いいえ */
  function askBox(msg, done) {
    if (!isNativeApp()) {
      var r = false;
      try { r = !!window.confirm(msg); } catch (e) {}
      done(r); return;
    }
    var ov = document.createElement("div");
    ov.className = "ask-ov";
    ov.setAttribute("role", "alertdialog");
    ov.setAttribute("aria-modal", "true");
    var box = document.createElement("div"); box.className = "ask-box";
    var p = document.createElement("p"); p.className = "ask-msg"; p.textContent = msg;
    var row = document.createElement("div"); row.className = "ask-row";
    var no = document.createElement("button"); no.type = "button"; no.className = "ask-no"; no.textContent = T.askNo;
    var yes = document.createElement("button"); yes.type = "button"; yes.className = "ask-yes"; yes.textContent = T.askYes;
    var closed = false;
    function close(v) { if (closed) return; closed = true; if (ov.parentNode) ov.parentNode.removeChild(ov); done(v); }
    no.addEventListener("click", function () { close(false); });
    yes.addEventListener("click", function () { close(true); });
    row.appendChild(no); row.appendChild(yes);
    box.appendChild(p); box.appendChild(row); ov.appendChild(box);
    document.body.appendChild(ov);
    try { no.focus(); } catch (e) {}
  }
  function onBack() {
    var ask = document.querySelector(".ask-ov");
    if (ask) { var an = ask.querySelector(".ask-no"); if (an) an.click(); return; }
    /* つかいかた：2ページ目から=前のページ／1ページ目=初回は後ろに下げる（閉じない）・「もう一度 みる」から開いたときは閉じる */
    var gov = document.querySelector(".guide-ov");
    if (gov && gov._back) { gov._back(); return; }
    if ($("#showOverlay").classList.contains("open")) { $("#showOverlay").click(); return; }
    if ($("#modalWrap").classList.contains("open")) {
      /* 書きかけ＝備考に字がある、またはチップを1つでも選んだ（きろくはタップだけで仕上がるので、チップも書きかけ）。
       * 戻るボタンは画面の端をなぞるだけで出ることがあるので、選んだものが確かめなしで消えないようにする */
      var memo = $("#memoInput");
      var dirty = (memo && memo.value.trim()) || document.querySelector("#recordModal .chip.on");
      if (dirty && T) { askBox(T.recBackAsk, function (ok) { if (ok) closeRecord(); }); return; }
      closeRecord(); return;
    }
    if (currentView === "lookup") {
      var lb = $("#lkBack") || $("#bsBack");
      if (lb) { lb.click(); return; }
    }
    if (currentView === "detail" && $("#backBtn")) { $("#backBtn").click(); return; }
    if (currentView === "logs" && $("#logsBack")) { $("#logsBack").click(); return; }
    if (currentView !== "scenes") { show("scenes"); return; }
    minimizeApp();
  }
  (function watchBack() {
    var ap = nativePlugin("App", "addListener");
    if (!ap) return;
    try { ap.addListener("backButton", function () { onBack(); }); } catch (e) {}
  })();

  /* ========== はじめての つかいかた（初回の案内・2026-09-30） ==========
   * ヒロさん「ひとつずつ・そよぎ みたいなタイプのアプリは、必ず最初に使い方の丁寧な説明を出してほしい。10代の情報室のように」。
   * ・初回起動で必ず出す（最後まで読むまで、開くたびに出る）。文言は i18n.js の SHIEN_UI.<言語>.guide（title / step / prev / next / start / again / heads[] / bodies[]）
   *   本文の {キー} は、その言語の画面の文字（T の同じ表・nav.scenes のような「.」区切りも可）に、{@med} は医療カードの名前に置きかえる＝ボタン名が画面とずれない
   * ・1ページずつ「つぎ」「まえ」。閉じるのは最後のページの「はじめる」だけ（× は置かない）。1ページ目に、ことば（上の 🌐 と同じ選択肢）
   * ・戻るボタン（Play版）：2ページ目から=前のページ／1ページ目=初回は後ろに下げる（閉じない）・「もう一度 みる」から開いたときは閉じる（onBack）
   * ・読み終えたら shien.guide.v1 に "1"。こまった のいちばん下の「つかいかたを もう一度 みる」でいつでも開ける
   * ・出ているあいだは BGM を始めない（firstGesture）。読み上げは案内の中には無い */
  var GUIDE_KEY = "shien.guide.v1";
  var guideBooted = false;
  function guideDone() { try { return !!localStorage.getItem(GUIDE_KEY); } catch (e) { return false; } }
  function tget(path) {
    if (path === "@med") { var m = C && C.scenes.filter(function (s) { return s.medical; })[0]; return m ? m.title : undefined; }
    function walk(o) { return path.split(".").reduce(function (a, c) { return (a && a[c] !== undefined) ? a[c] : undefined; }, o); }
    var v = walk(T || {}); if (v === undefined) v = walk(window.SHIEN_UI.en || {});
    return v;
  }
  function gtext(s) {
    return String(s == null ? "" : s).replace(/\{(@?[\w.]+)\}/g, function (m, k) { var v = tget(k); return (typeof v === "string") ? v : m; });
  }
  function mk(tag, cls) { var e = document.createElement(tag); if (cls) e.className = cls; return e; }
  function openGuide(first) {
    if (!T || !T.guide || !T.guide.bodies || !T.guide.bodies.length) return;
    if (document.querySelector(".guide-ov")) return;   /* 二重に出さない */
    var i = 0;
    var ov = mk("div", "guide-ov");
    ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true");
    var box = mk("div", "guide-box"), top = mk("div", "guide-top"), ttl = mk("p", "guide-title"), step = mk("p", "guide-step");
    step.setAttribute("dir", "ltr");   /* 「1 / 8」は右から左の言葉（ar）でも左から */
    top.appendChild(ttl); top.appendChild(step);
    var card = mk("div", "guide-card");
    /* ことば（1ページ目だけ）：案内は上の 🌐 も覆うので、ここで同じ選択肢から選べるように */
    var langRow = mk("div", "guide-lang"), langLbl = mk("span", "guide-lang-lbl"), sel = mk("select", "lang-select");
    sel.setAttribute("aria-label", "言語 / Language");
    var src = $("#langSelect");
    Array.prototype.forEach.call(src ? src.options : [], function (o) { var op = document.createElement("option"); op.value = o.value; op.textContent = o.textContent; sel.appendChild(op); });
    sel.addEventListener("change", function () { if (sel.value !== LANG) setLang(sel.value); });
    langRow.appendChild(langLbl); langRow.appendChild(sel);
    var h = mk("h2", "guide-h"), p = mk("p", "guide-p"), dots = mk("div", "guide-dots");
    dots.setAttribute("aria-hidden", "true");
    card.appendChild(langRow); card.appendChild(h); card.appendChild(p); card.appendChild(dots);
    box.appendChild(top); box.appendChild(card);
    var row = mk("div", "guide-row"), rin = mk("div", "guide-row-in");
    var prevB = mk("button", "guide-prev"), nextB = mk("button", "guide-next");
    prevB.type = "button"; nextB.type = "button";
    rin.appendChild(prevB); rin.appendChild(nextB); row.appendChild(rin);
    ov.appendChild(box); ov.appendChild(row);
    function fitPad() {   /* 本文の最後の行が下の帯に隠れないよう、余白を帯より高くする（文字を大きくしている端末でも） */
      var rh = row.getBoundingClientRect ? row.getBoundingClientRect().height : 0;
      if (rh > 0) ov.style.paddingBottom = Math.ceil(rh + 24) + "px";
    }
    function draw() {
      var G = T.guide, n = G.bodies.length;
      if (i > n - 1) i = n - 1;
      ov.setAttribute("aria-label", G.title);
      ttl.textContent = G.title;
      step.textContent = String(G.step).replace("{n}", i + 1).replace("{m}", n);
      langRow.style.display = (i === 0) ? "" : "none";
      langLbl.textContent = T.langLabel;
      sel.value = LANG;
      h.textContent = gtext(G.heads[i]);
      p.textContent = gtext(G.bodies[i]);
      dots.innerHTML = "";
      for (var k = 0; k < n; k++) dots.appendChild(mk("span", "guide-dot" + (k === i ? " on" : "")));
      prevB.textContent = G.prev;
      prevB.style.visibility = (i === 0) ? "hidden" : "visible";   /* 「つぎ」の位置を変えない */
      nextB.textContent = (i === n - 1) ? G.start : G.next;
      ov.scrollTop = 0;
      fitPad();
    }
    function close() {
      if (ov.parentNode) ov.parentNode.removeChild(ov);
      document.documentElement.classList.remove("guide-open");
      window.removeEventListener("resize", fitPad);
      try { localStorage.setItem(GUIDE_KEY, "1"); } catch (e) {}
    }
    ov._draw = draw;
    ov._back = function () {
      if (i > 0) { i--; draw(); return; }
      if (first) minimizeApp(); else close();
    };
    prevB.addEventListener("click", function () { if (i > 0) { i--; draw(); } });
    nextB.addEventListener("click", function () { if (i < T.guide.bodies.length - 1) { i++; draw(); } else close(); });
    /* 下の画面が横にはみ出す言語（de・ru の幅360、文字を大きくした en など）でも、案内が画面の幅からはみ出さないように、
       出ているあいだは下の画面の はみ出し を切る（閉じたら元どおり） */
    document.documentElement.classList.add("guide-open");
    document.body.appendChild(ov);
    draw();
    window.addEventListener("resize", fitPad);
    try { nextB.focus(); } catch (e) {}
  }

  /* ========== 起動 ========== */
  LANG = resolveLang();
  buildLangSelect();
  setLang(LANG);
})();
