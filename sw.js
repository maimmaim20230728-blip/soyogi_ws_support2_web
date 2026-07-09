/*
 * そよぎ 支援サポート - Service Worker
 * オフラインで完全に動くよう、アプリ一式をキャッシュします。
 * 中身を更新したら CACHE の数字を上げてください（例 v1 -> v2）。
 */
var CACHE = "shien-v20";
var ASSETS = [
  "./",
  "./index.html",
  "./i18n.js",
  "./app.js",
  "./audio.js",
  "./content.ja.js",
  "./content.en.js",
  "./content.zh.js",
  "./content.es.js",
  "./content.hi.js",
  "./content.pt.js",
  "./content.fr.js",
  "./content.ru.js",
  "./content.id.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/maskable-512.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
      return hit || fetch(e.request).then(function (res) {
        if (e.request.method === "GET" && res.ok && new URL(e.request.url).origin === location.origin) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        }
        return res;
      });
    })
  );
});
