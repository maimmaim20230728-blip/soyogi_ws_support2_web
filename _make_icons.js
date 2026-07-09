/* _make_icons.js — icon.svg から PNG一式を生成。実行: node _make_icons.js
 * sharp は soyogi_ws_support（Play版）の node_modules を借用 */
const sharp = require("C:/Users/puipu/soyogi_ws_support/node_modules/sharp");
const path = require("path");
const svg = path.join(__dirname, "icons", "icon.svg");
const out = (n) => path.join(__dirname, "icons", n);

(async () => {
  await sharp(svg, { density: 300 }).resize(512, 512).png().toFile(out("icon-512.png"));
  await sharp(svg, { density: 300 }).resize(192, 192).png().toFile(out("icon-192.png"));
  await sharp(svg, { density: 300 }).resize(180, 180).png().toFile(out("apple-touch-icon.png"));
  // maskable: 中身を80%に縮小して余白（セーフゾーン）を確保
  const inner = await sharp(svg, { density: 300 }).resize(410, 410).png().toBuffer();
  await sharp({ create: { width: 512, height: 512, channels: 4, background: "#4e8ec4" } })
    .composite([{ input: inner, left: 51, top: 51 }])
    .png().toFile(out("maskable-512.png"));
  console.log("icons OK");
})().catch((e) => { console.error(e); process.exit(1); });
