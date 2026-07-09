/* _make_embed.js — Farcaster/OGP用 3:2 埋め込み画像を生成。実行: node _make_embed.js */
const sharp = require("C:/Users/puipu/soyogi_ws_support/node_modules/sharp");
const path = require("path");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#5fa8d8"/><stop offset="1" stop-color="#2f6b9e"/>
    </linearGradient>
    <linearGradient id="hand" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f4faff"/><stop offset="1" stop-color="#cfe3f2"/>
    </linearGradient>
    <linearGradient id="heart" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffc2ad"/><stop offset="1" stop-color="#ef7f61"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg)"/>
  <g transform="translate(600 270) scale(1.25)">
    <path d="M0 92 C-60 44 -104 4 -104 -46 C-104 -76 -80 -98 -50 -98 C-26 -98 -8 -84 0 -64 C8 -84 26 -98 50 -98 C80 -98 104 -76 104 -46 C104 4 60 44 0 92 Z" fill="url(#heart)"/>
    <path d="M-150 4 C-120 132 120 132 150 4 C110 74 -110 74 -150 4 Z" fill="url(#hand)"/>
    <circle cx="-146" cy="0" r="22" fill="url(#hand)"/>
    <circle cx="146" cy="0" r="22" fill="url(#hand)"/>
  </g>
  <text x="600" y="530" text-anchor="middle" font-family="'Hiragino Maru Gothic ProN','Yu Gothic',sans-serif" font-size="76" font-weight="700" fill="#ffffff">そよぎ 支援サポート</text>
  <text x="600" y="600" text-anchor="middle" font-family="'Hiragino Maru Gothic ProN','Yu Gothic',sans-serif" font-size="40" font-weight="700" fill="#eaf3fb">支援の、お守りに。</text>
  <text x="600" y="660" text-anchor="middle" font-family="'Hiragino Maru Gothic ProN','Yu Gothic',sans-serif" font-size="30" fill="#cfe3f2">障害福祉スタッフのための支援サポート</text>
</svg>`;
sharp(Buffer.from(svg)).png().toFile(path.join(__dirname, "icons", "farcaster-embed.png"))
  .then(() => console.log("embed OK (1200x800)"))
  .catch((e) => { console.error(e); process.exit(1); });
