/* そよぎ 支援サポート - アプリロジック
 * 原則：個人情報を持たない（氏名欄を作らない）・記録は端末内のみ・タップだけで数十秒で完結
 */
(function () {
  "use strict";
  var C = window.SOYOGI_SHIEN;
  var $ = function (s) { return document.querySelector(s); };
  var LOG_KEY = "shien.logs";

  /* ========== ビュー切替 ========== */
  var views = ["scenes", "detail", "lookup", "learn", "talk", "logs"];
  function show(view) {
    views.forEach(function (v) {
      $("#view-" + v).classList.toggle("active", v === view);
    });
    document.querySelectorAll("nav button").forEach(function (b) {
      b.classList.toggle("on", b.dataset.view === view ||
        (b.dataset.view === "scenes" && (view === "detail" || view === "logs")));
    });
    window.scrollTo(0, 0);
  }
  document.querySelectorAll("nav button").forEach(function (b) {
    b.addEventListener("click", function () {
      if (b.dataset.view === "lookup") renderLookup();
      if (b.dataset.view === "learn") renderLearn();
      show(b.dataset.view);
    });
  });

  /* ========== こまった：一覧 ========== */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function renderScenes() {
    var med = C.scenes.filter(function (s) { return s.medical; })[0];
    var rest = C.scenes.filter(function (s) { return !s.medical; });
    var html = "";
    html += '<div class="gentle-note">ここにあるのは「傾向とヒント」です。いちばんの手がかりは、目の前のその人です。</div>';
    html += '<button class="medical-btn" data-id="' + med.id + '">' +
      '<span style="font-size:1.8rem">' + med.emoji + "</span>" +
      '<span><span class="t">' + esc(med.title) + '</span><br><span class="s">医療のことは迷わずこちら → 119の目安</span></span></button>';
    html += '<div class="scene-grid">';
    rest.forEach(function (s) {
      html += '<button class="scene-btn" data-id="' + s.id + '">' +
        '<span class="e">' + s.emoji + '</span><span class="t">' + esc(s.title) + "</span></button>";
    });
    html += "</div>";
    html += '<div class="footer-links"><button id="openLogs">📝 きろくをみる</button></div>';
    html += '<div class="app-foot">このアプリは医療判断をしません。緊急時は119へ。<br>個人情報は収集しません（きろくは この端末の中だけ に保存されます）。</div>';
    $("#view-scenes").innerHTML = html;

    document.querySelectorAll("#view-scenes [data-id]").forEach(function (b) {
      b.addEventListener("click", function () { renderDetail(b.dataset.id); show("detail"); });
    });
    $("#openLogs").addEventListener("click", function () { renderLogs(); show("logs"); });
  }

  /* ========== こまった：カード詳細 ========== */
  function list(items) {
    return "<ul>" + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
  }
  function renderDetail(id) {
    var s = C.scenes.filter(function (x) { return x.id === id; })[0];
    if (!s) return;
    var html = '<button class="back-btn" id="backBtn">← もどる</button>';
    html += '<div class="card-title">' + s.emoji + " " + esc(s.title) + "</div>";
    if (s.medical && s.lead) html += '<div class="lead-med">' + esc(s.lead) + "</div>";
    html += '<div class="block block-do"><h3>🟢 まずやること</h3>' + list(s.do) + "</div>";
    if (s.call119) {
      html += '<div class="block block-119"><h3>🚑 すぐ119の目安</h3>' + list(s.call119);
      if (s.note) html += '<div class="note">' + esc(s.note) + "</div>";
      html += "</div>";
    }
    html += '<div class="block block-ng"><h3>🚫 やってはいけないこと</h3>' + list(s.dont) + "</div>";
    if (s.outdoor) html += '<div class="block block-out"><h3>🚶 外出先では（駅・人混みなど）</h3>' + list(s.outdoor) + "</div>";
    html += '<div class="block block-after"><h3>🕊️ おちついたら</h3>' + list(s.after) + "</div>";
    html += '<button class="record-btn" data-scene="' + s.id + '">📝 いまのことを きろくする（30秒）</button>';
    html += '<details class="why"><summary>💡 なぜ起きる？（よみもの）</summary><p>' + esc(s.why) + "</p></details>";
    html += '<div class="src">参考：' + esc(s.src) + "</div>";
    $("#view-detail").innerHTML = html;

    $("#backBtn").addEventListener("click", function () { show("scenes"); });
    $("#view-detail .record-btn").addEventListener("click", function () { openRecord(s.id); });
  }

  /* ========== きろく：モーダル（タップのみ・約30秒） ========== */
  var rec = null;
  function chipRow(label, name, options, multi) {
    var html = '<div class="q"><div class="label">' + label + '</div><div class="chips" data-name="' + name + '" data-multi="' + (multi ? 1 : 0) + '">';
    options.forEach(function (o) { html += '<button class="chip" data-v="' + esc(o) + '">' + esc(o) + "</button>"; });
    return html + "</div></div>";
  }
  function openRecord(sceneId) {
    var scene = C.scenes.filter(function (x) { return x.id === sceneId; })[0];
    rec = { ts: Date.now(), scene: scene ? scene.title : "", triggers: [], duration: "", responses: [], injury: "", memo: "" };
    var d = new Date(rec.ts);
    var when = (d.getMonth() + 1) + "/" + d.getDate() + " " + d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");
    var html = "<h2>📝 きろく</h2>" +
      '<div class="sub">' + when + "・" + esc(rec.scene) + "（この端末の中にだけ保存されます）</div>";
    html += chipRow("きっかけ（いくつでも）", "triggers", C.logOptions.triggers, true);
    html += chipRow("つづいた時間", "duration", C.logOptions.durations, false);
    html += chipRow("対応したこと（いくつでも）", "responses", C.logOptions.responses, true);
    html += chipRow("けが・物損", "injury", C.logOptions.injuries, false);
    html += '<div class="q"><div class="label">備考（なくてOK・ひとことだけ）</div>' +
      '<input class="memo-input" id="memoInput" type="text" maxlength="60" placeholder="例：おやつの前だった"></div>';
    html += '<div class="modal-actions"><button class="btn-cancel" id="recCancel">やめる</button>' +
      '<button class="btn-save" id="recSave">ほぞん</button></div>';
    $("#recordModal").innerHTML = html;
    $("#modalWrap").classList.add("open");

    document.querySelectorAll("#recordModal .chips").forEach(function (row) {
      row.addEventListener("click", function (e) {
        var chip = e.target.closest(".chip"); if (!chip) return;
        var multi = row.dataset.multi === "1";
        if (multi) {
          chip.classList.toggle("on");
        } else {
          row.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("on"); });
          chip.classList.add("on");
        }
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
    var d = new Date(l.ts);
    var when = (d.getMonth() + 1) + "/" + d.getDate() + " " + d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");
    var parts = ["[" + when + "] " + l.scene];
    if (l.triggers.length) parts.push("きっかけ: " + l.triggers.join("・"));
    if (l.duration) parts.push("時間: " + l.duration);
    if (l.responses.length) parts.push("対応: " + l.responses.join("・"));
    if (l.injury) parts.push("けが: " + l.injury);
    if (l.memo) parts.push("備考: " + l.memo);
    return parts.join(" ｜ ");
  }
  function renderLogs() {
    var logs = loadLogs();
    var html = '<button class="back-btn" id="logsBack">← もどる</button>';
    html += '<div class="card-title">📝 きろく</div>';
    if (!logs.length) {
      html += '<div class="empty">まだ きろくはありません。<br>場面カードの「きろくする」から、タップだけで残せます。</div>';
    } else {
      html += '<button class="copy-btn" id="copyLogs">📋 ぜんぶコピー（申し送りに貼れます）</button>';
      logs.forEach(function (l, i) {
        var d = new Date(l.ts);
        var when = (d.getMonth() + 1) + "/" + d.getDate() + " " + d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");
        html += '<div class="log-item"><button class="del" data-i="' + i + '">✕</button>' +
          '<span class="when">' + when + "・" + esc(l.scene) + "</span><br>" +
          esc([l.triggers.join("・"), l.duration, l.responses.join("・"), l.injury, l.memo]
            .filter(Boolean).join(" ｜ ")) + "</div>";
      });
      html += '<div class="app-foot">きろくは この端末の中だけ に保存されています（最大200件）。</div>';
    }
    $("#view-logs").innerHTML = html;
    $("#logsBack").addEventListener("click", function () { show("scenes"); });
    var cp = $("#copyLogs");
    if (cp) cp.addEventListener("click", function () {
      var text = loadLogs().map(fmtLog).join("\n");
      navigator.clipboard.writeText(text).then(function () {
        cp.textContent = "✅ コピーしました";
        setTimeout(function () { cp.textContent = "📋 ぜんぶコピー（申し送りに貼れます）"; }, 1600);
      });
    });
    document.querySelectorAll("#view-logs .del").forEach(function (b) {
      b.addEventListener("click", function () {
        var logs2 = loadLogs();
        logs2.splice(Number(b.dataset.i), 1);
        localStorage.setItem(LOG_KEY, JSON.stringify(logs2));
        renderLogs();
      });
    });
  }

  /* ========== しらべる：特性リファレンス ========== */
  function sceneTitle(id) {
    var s = C.scenes.filter(function (x) { return x.id === id; })[0];
    return s ? { emoji: s.emoji, title: s.title } : null;
  }
  function renderLookup() {
    var html = '<div class="gentle-note">ここにあるのは「傾向とヒント」です。表れ方は一人ひとり違います。いちばんの手がかりは、目の前のその人です。</div>';
    html += '<div class="lookup-lead">特性から調べる</div>';
    html += '<div class="scene-grid">';
    C.traits.forEach(function (t) {
      html += '<button class="scene-btn" data-trait="' + t.id + '">' +
        '<span class="e">' + t.emoji + '</span><span class="t">' + esc(t.name) + "</span>" +
        '<span class="ts">' + esc(t.short) + "</span></button>";
    });
    html += "</div>";
    html += '<div class="lookup-lead">場面から調べる</div>';
    html += '<div class="gentle-note" style="margin-bottom:12px">困っている“場面”からは、下の <b>🚨 こまった</b> から引けます。<br>' +
      '<button class="inline-link" id="toScenes">→ こまった を開く</button></div>';
    html += '<div class="footer-links"><button id="toBasis">📚 このアプリの根拠について</button></div>';
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
    var html = '<button class="back-btn" id="lkBack">← 特性一覧へ</button>';
    html += '<div class="card-title">' + t.emoji + " " + esc(t.name) + "</div>";
    html += '<div class="block block-what"><h3>ℹ️ どんな特性か</h3>' + list(t.what) + "</div>";
    if (t.prepare && t.prepare.length) html += '<div class="block block-prep"><h3>🗓️ そなえる（事前の準備・計画がいちばん大事）</h3>' + list(t.prepare) + "</div>";
    html += '<div class="block block-comm"><h3>💬 コミュニケーションのコツ</h3>' + list(t.comm) + "</div>";
    html += '<div class="block block-env"><h3>🧩 環境の工夫</h3>' + list(t.env) + "</div>";
    if (t.scenes && t.scenes.length) {
      html += '<div class="block block-scenes"><h3>🚨 よくある場面と対応</h3><div class="scene-links">';
      t.scenes.forEach(function (sid) {
        var s = sceneTitle(sid);
        if (s) html += '<button class="scene-link" data-scene="' + sid + '">' + s.emoji + " " + esc(s.title) + "</button>";
      });
      html += "</div></div>";
    }
    html += '<div class="block block-ng"><h3>🚫 こんな対応は避けて</h3>' + list(t.ng) + "</div>";
    html += '<div class="src">参考：' + esc(t.src) + "</div>";
    $("#view-lookup").innerHTML = html;

    $("#lkBack").addEventListener("click", renderLookup);
    document.querySelectorAll("#view-lookup .scene-link").forEach(function (b) {
      b.addEventListener("click", function () { renderDetail(b.dataset.scene); show("detail"); });
    });
    window.scrollTo(0, 0);
  }
  function renderBasis() {
    var html = '<button class="back-btn" id="bsBack">← しらべるへ</button>';
    html += '<div class="card-title">📚 このアプリの根拠</div>';
    html += '<div class="gentle-note">このアプリは、現場の経験だけでなく、国内外で広く使われている支援の枠組み・医学的知見を土台にしています。あくまで“ヒント”であり、最終的な判断は目の前の本人と、専門職・主治医の指示を優先してください。</div>';
    html += '<div class="block block-what"><ul>' +
      C.basis.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul></div>";
    html += '<div class="src">※各場面カード・各特性ページの末尾にも、個別の参考元を示しています。</div>';
    $("#view-lookup").innerHTML = html;
    $("#bsBack").addEventListener("click", renderLookup);
    window.scrollTo(0, 0);
  }

  /* ========== まなぶ：今日のヒント＋ケースクイズ ========== */
  function todayIndex(len) {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var day = Math.floor((now - start) / 86400000);
    return day % len;
  }
  var lastQuiz = -1;
  function pickQuiz() {
    if (C.quizzes.length <= 1) return 0;
    var i;
    do { i = Math.floor(Math.random() * C.quizzes.length); } while (i === lastQuiz);
    lastQuiz = i;
    return i;
  }
  function renderLearn() {
    var hint = C.hints[todayIndex(C.hints.length)];
    var html = '<div class="learn-hint"><div class="lh-label">🌱 今日のヒント</div>' +
      "<p>" + esc(hint) + "</p>" +
      '<button class="lh-more" id="hintMore">別のヒントを見る</button></div>';
    html += '<div class="lookup-lead">ケースクイズ ― 正解より“なぜ”を</div>';
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
    q.options.forEach(function (o, i) {
      html += '<button class="quiz-opt" data-i="' + i + '">' + esc(o) + "</button>";
    });
    html += '</div><div class="quiz-explain" id="quizExplain"></div></div>';
    $("#quizArea").innerHTML = html;

    var answered = false;
    document.querySelectorAll("#quizArea .quiz-opt").forEach(function (b) {
      b.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        var chosen = Number(b.dataset.i);
        document.querySelectorAll("#quizArea .quiz-opt").forEach(function (x) {
          var xi = Number(x.dataset.i);
          if (xi === q.answer) x.classList.add("correct");
          else if (xi === chosen) x.classList.add("wrong");
          x.disabled = true;
        });
        var ex = $("#quizExplain");
        ex.innerHTML = '<div class="qe-head">' + (chosen === q.answer ? "◎ そのとおり" : "△ もう一度みてみましょう") + "</div>" +
          "<p>" + esc(q.explain) + "</p>" +
          '<button class="quiz-next" id="quizNext">次の問題 →</button>';
        ex.classList.add("show");
        $("#quizNext").addEventListener("click", function () {
          renderQuiz(pickQuiz());
          window.scrollTo(0, 0);
        });
      });
    });
  }

  /* ========== つたえる ========== */
  document.querySelectorAll(".talk-tabs button").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".talk-tabs button").forEach(function (x) { x.classList.toggle("on", x === b); });
      ["phrases", "kana", "draw"].forEach(function (p) {
        $("#pane-" + p).classList.toggle("active", p === b.dataset.pane);
      });
      if (b.dataset.pane === "draw") initCanvas();
    });
  });

  function speak(text) {
    if (!("speechSynthesis" in window) || !text) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "ja-JP"; u.rate = 0.9;
    window.speechSynthesis.speak(u);
  }

  /* --- ていけいぶん --- */
  (function renderPhrases() {
    var html = '<div class="gentle-note">タップすると 読み上げて、大きく表示します。</div>';
    C.phraseGroups.forEach(function (g) {
      html += '<div class="phrase-group"><h3>' + g.emoji + " " + esc(g.label) + '</h3><div class="phrase-grid">';
      g.items.forEach(function (p) { html += '<button class="phrase-btn" data-p="' + esc(p) + '">' + esc(p) + "</button>"; });
      html += "</div></div>";
    });
    $("#pane-phrases").innerHTML = html;
    $("#pane-phrases").addEventListener("click", function (e) {
      var b = e.target.closest(".phrase-btn"); if (!b) return;
      speak(b.dataset.p); showBig(b.dataset.p);
    });
  })();

  /* --- もじばん（50音） --- */
  var DAKU = { "か": "が", "き": "ぎ", "く": "ぐ", "け": "げ", "こ": "ご", "さ": "ざ", "し": "じ", "す": "ず", "せ": "ぜ", "そ": "ぞ", "た": "だ", "ち": "ぢ", "つ": "づ", "て": "で", "と": "ど", "は": "ば", "ひ": "び", "ふ": "ぶ", "へ": "べ", "ほ": "ぼ", "う": "ゔ" };
  var HANDAKU = { "は": "ぱ", "ひ": "ぴ", "ふ": "ぷ", "へ": "ぺ", "ほ": "ぽ" };
  var SMALL = { "あ": "ぁ", "い": "ぃ", "う": "ぅ", "え": "ぇ", "お": "ぉ", "つ": "っ", "や": "ゃ", "ゆ": "ゅ", "よ": "ょ", "わ": "ゎ" };
  var kanaText = "";
  var ROWS = [
    "あいうえお", "かきくけこ", "さしすせそ", "たちつてと", "なにぬねの",
    "はひふへほ", "まみむめも", "や　ゆ　よ", "らりるれろ", "わ　を　ん"
  ];
  (function renderKana() {
    var html = "";
    ROWS.forEach(function (row) {
      row.split("").forEach(function (ch) {
        if (ch === "　") html += "<span></span>";
        else html += '<button data-k="' + ch + '">' + ch + "</button>";
      });
    });
    html += '<button class="fn" data-fn="daku">゛</button>';
    html += '<button class="fn" data-fn="handaku">゜</button>';
    html += '<button class="fn" data-fn="small">小さく</button>';
    html += '<button data-k="ー">ー</button>';
    html += '<button data-k="　">スペース</button>';
    $("#kanaBoard").innerHTML = html;
    $("#kanaBoard").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      if (b.dataset.k) kanaText += b.dataset.k;
      else if (b.dataset.fn) {
        var last = kanaText.slice(-1);
        var map = b.dataset.fn === "daku" ? DAKU : b.dataset.fn === "handaku" ? HANDAKU : SMALL;
        if (map[last]) kanaText = kanaText.slice(0, -1) + map[last];
      }
      updateKanaOut();
    });
    $("#kanaBack").addEventListener("click", function () { kanaText = kanaText.slice(0, -1); updateKanaOut(); });
    $("#kanaClear").addEventListener("click", function () { kanaText = ""; updateKanaOut(); });
    $("#kanaSpeak").addEventListener("click", function () { speak(kanaText); });
    $("#kanaShow").addEventListener("click", function () { if (kanaText) showBig(kanaText); });
  })();
  function updateKanaOut() {
    $("#kanaOut").innerHTML = kanaText ? esc(kanaText) : '<span class="ph">ここに もじが でます</span>';
  }

  /* --- みせる（全画面表示） --- */
  function showBig(text) {
    var el = $("#showTxt");
    el.textContent = text;
    var size = text.length <= 4 ? "5rem" : text.length <= 8 ? "3.6rem" : text.length <= 16 ? "2.6rem" : "1.9rem";
    el.style.fontSize = size;
    $("#showOverlay").classList.add("open");
  }
  $("#showOverlay").addEventListener("click", function () { this.classList.remove("open"); });

  /* --- ひつだん（手書きキャンバス） --- */
  var canvas = $("#drawCanvas"), ctx = null, drawing = false;
  var penWidth = 9, inverted = false, canvasReady = false;
  function initCanvas() {
    if (canvasReady) return;
    var rect = canvas.getBoundingClientRect();
    var dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    paintBg();
    canvasReady = true;
  }
  function paintBg() {
    var rect = canvas.getBoundingClientRect();
    ctx.fillStyle = inverted ? "#111" : "#fff";
    ctx.fillRect(0, 0, rect.width, rect.height);
  }
  function pos(e) {
    var r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }
  canvas.addEventListener("pointerdown", function (e) {
    if (!canvasReady) initCanvas();
    drawing = true;
    canvas.setPointerCapture(e.pointerId);
    var p = pos(e);
    ctx.beginPath(); ctx.moveTo(p.x, p.y);
    ctx.strokeStyle = inverted ? "#fff" : "#222";
    ctx.lineWidth = penWidth;
  });
  canvas.addEventListener("pointermove", function (e) {
    if (!drawing) return;
    var p = pos(e);
    ctx.lineTo(p.x, p.y); ctx.stroke();
  });
  ["pointerup", "pointercancel"].forEach(function (ev) {
    canvas.addEventListener(ev, function () { drawing = false; });
  });
  $("#penThin").addEventListener("click", function () { penWidth = 4; toolOn(this); });
  $("#penThick").addEventListener("click", function () { penWidth = 9; toolOn(this); });
  function toolOn(btn) {
    $("#penThin").classList.remove("on"); $("#penThick").classList.remove("on");
    btn.classList.add("on");
  }
  $("#penInvert").addEventListener("click", function () {
    inverted = !inverted; this.classList.toggle("on", inverted);
    if (canvasReady) paintBg();
  });
  $("#penClear").addEventListener("click", function () { if (canvasReady) paintBg(); });

  /* ========== 起動 ========== */
  renderScenes();
})();
