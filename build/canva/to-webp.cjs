// Convert captured 1920x1080 PNGs to 1600x900 WebP with Chromium's own encoder (no image libraries needed).
// usage: node build/canva/to-webp.cjs <pngDir> slides/dayN [quality] [day]   (day: apply build/canva/redact.json)
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const [src, out, q, day] = process.argv.slice(2);
const redact = day ? ((JSON.parse(fs.readFileSync(path.join(__dirname, 'redact.json'), 'utf8')))[day] || {}) : {};
fs.mkdirSync(out, { recursive: true });
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent('<canvas id="c" width="1600" height="900"></canvas>');
  let total = 0;
  for (const f of fs.readdirSync(src).filter(f => f.endsWith('.png')).sort()) {
    const b64 = fs.readFileSync(path.join(src, f)).toString('base64');
    const areas = redact[String(+f.replace(/\D/g, ''))] || [];
    const data = await page.evaluate(async ({ b64, q, areas }) => {
      const img = new Image(); img.src = 'data:image/png;base64,' + b64; await img.decode();
      const c = document.getElementById('c'), x = c.getContext('2d');
      x.imageSmoothingEnabled = true; x.imageSmoothingQuality = 'high';
      x.drawImage(img, 0, 0, 1600, 900);
      if (areas.length) {
        // blur personal details (see redact.json), and say so on the slide
        const copy = document.createElement('canvas'); copy.width = 1600; copy.height = 900; copy.getContext('2d').drawImage(c, 0, 0);
        x.save(); x.filter = 'blur(6px)';
        for (const [ax, ay, aw, ah] of areas) { x.save(); x.beginPath(); x.rect(ax, ay, aw, ah); x.clip(); x.drawImage(copy, 0, 0); x.restore(); }
        x.restore();
        x.font = '600 15px system-ui, sans-serif'; const label = 'Client details blurred for privacy';
        const w = x.measureText(label).width + 24; x.fillStyle = 'rgba(16,19,31,.78)'; x.fillRect(800 - w / 2, 860, w, 28);
        x.fillStyle = '#fff'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(label, 800, 874);
      }
      return c.toDataURL('image/webp', q).split(',')[1];
    }, { b64, q: +(q || 0.82), areas });
    const name = f.replace(/^p/, '').replace(/\.png$/, '.webp');
    fs.writeFileSync(path.join(out, name), Buffer.from(data, 'base64'));
    total += Buffer.from(data, 'base64').length;
  }
  console.log(out, Math.round(total / 1024) + ' KB');
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
