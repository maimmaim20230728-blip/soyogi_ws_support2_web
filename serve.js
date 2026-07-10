/* serve.js — 開発プレビュー用の簡易静的サーバー（Cache-Control: no-store でキャッシュ事故を根絶）
 * 実行: node serve.js [port]  （既定 3044） */
var http = require("http");
var fs = require("fs");
var path = require("path");
var root = __dirname;
var port = Number(process.argv[2] || 3044);
var MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".md": "text/plain; charset=utf-8"
};
http.createServer(function (req, res) {
  try {
    var u = decodeURIComponent((req.url || "/").split("?")[0]);
    if (u === "/") u = "/index.html";
    var p = path.normalize(path.join(root, u));
    if (p.indexOf(root) !== 0) { res.writeHead(403); res.end(); return; }
    fs.readFile(p, function (err, buf) {
      if (err) { res.writeHead(404, { "Cache-Control": "no-store" }); res.end("not found"); return; }
      res.writeHead(200, {
        "Content-Type": MIME[path.extname(p).toLowerCase()] || "application/octet-stream",
        "Cache-Control": "no-store"
      });
      res.end(buf);
    });
  } catch (e) { res.writeHead(500); res.end(); }
}).listen(port, function () {
  console.log("Serving " + root + " at http://127.0.0.1:" + port + "/ (no-store)");
});
