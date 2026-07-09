/* _make_feature.js — Google Play用フィーチャーグラフィック(1024x500)を生成。実行: node _make_feature.js */
const sharp = require("C:/Users/puipu/soyogi_ws_support/node_modules/sharp");
const path = require("path");
const fs = require("fs");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 500" width="1024" height="500">
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
  <rect width="1024" height="500" fill="url(#bg)"/>
  <g transform="translate(880 430) scale(1.9)" opacity="0.10">
    <path d="M0 92 C-60 44 -104 4 -104 -46 C-104 -76 -80 -98 -50 -98 C-26 -98 -8 -84 0 -64 C8 -84 26 -98 50 -98 C80 -98 104 -76 104 -46 C104 4 60 44 0 92 Z" fill="#1d4c74"/>
  </g>
  <g transform="translate(200 245) scale(0.95)">
    <path d="M0 92 C-60 44 -104 4 -104 -46 C-104 -76 -80 -98 -50 -98 C-26 -98 -8 -84 0 -64 C8 -84 26 -98 50 -98 C80 -98 104 -76 104 -46 C104 4 60 44 0 92 Z" fill="url(#heart)"/>
    <path d="M-150 4 C-120 132 120 132 150 4 C110 74 -110 74 -150 4 Z" fill="url(#hand)"/>
    <circle cx="-146" cy="0" r="22" fill="url(#hand)"/>
    <circle cx="146" cy="0" r="22" fill="url(#hand)"/>
  </g>
  <text x="410" y="168" font-family="'Hiragino Maru Gothic ProN','Yu Gothic',sans-serif" font-size="58" font-weight="700" fill="#ffffff">福祉サポーターズ</text>
  <text x="410" y="238" font-family="'Hiragino Maru Gothic ProN','Yu Gothic',sans-serif" font-size="58" font-weight="700" fill="#ffffff">・サポート</text>
  <text x="410" y="300" font-family="'Hiragino Maru Gothic ProN','Yu Gothic',sans-serif" font-size="30" fill="#eaf3fb">障害者版 ／ 支援の、お守りに。</text>
  <text x="410" y="350" font-family="'Hiragino Maru Gothic ProN','Yu Gothic',sans-serif" font-size="26" fill="#dbe9f5">障害福祉スタッフのための支援サポートアプリ</text>
  <text x="410" y="408" font-family="'Hiragino Maru Gothic ProN','Yu Gothic',sans-serif" font-size="24" fill="#bcd5ea">アプリ開発：介護と支援の相談どころ・そよぎ</text>
</svg>`;
const dir = path.join(__dirname, "store");
if (!fs.existsSync(dir)) fs.mkdirSync(dir);
sharp(Buffer.from(svg)).png().toFile(path.join(dir, "feature-graphic.png"))
  .then(() => console.log("feature-graphic OK (1024x500)"))
  .catch((e) => { console.error(e); process.exit(1); });
