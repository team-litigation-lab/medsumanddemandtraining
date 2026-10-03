// Capture every page of a Canva "view" link as a 1920x1080 PNG (the viewer's own buttons hidden).
// usage: node build/canva/capture.cjs <view url> <outDir> [maxPages] [startPage]
//   then: node build/canva/to-webp.cjs <outDir> slides/dayN 0.82 N   (N blurs that day's pages listed in redact.json)
// Needs Playwright + Chromium that trusts your network's certificates.
const { chromium } = require('playwright');
const fs = require('fs');
const { execFile } = require('child_process');
const os = require('os'), path = require('path');
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
// Canva's full-size media: fetched with curl (the browser's own requests get "Signature invalid")
let seq = 0;
const curlGet = (url) => new Promise((res) => {
  const tmp = path.join(os.tmpdir(), 'cv' + process.pid + '_' + (seq++));
  execFile('curl', ['-sS', '-L', '-A', UA, '--max-time', '60', '-o', tmp, '-w', '%{http_code} %{content_type}', url], { maxBuffer: 1 << 20 }, (err, stdout) => {
    const [code, type] = String(stdout || '').trim().split(' ');
    let body = Buffer.alloc(0); try { body = fs.readFileSync(tmp); fs.unlinkSync(tmp); } catch (e) {}
    res({ status: +code || 502, type: type || 'application/octet-stream', body });
  });
});
const [url, out, maxArg, startArg] = process.argv.slice(2);
const START = Math.max(1, +(startArg || 1));
fs.mkdirSync(out, { recursive: true });
(async () => {
  const browser = await chromium.launch({ channel: 'chromium', args: ['--disable-blink-features=AutomationControlled'] });
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, userAgent: UA });
  const page = await ctx.newPage();
  await page.route(/^https:\/\/media\.canva\.com\//, async (route) => {
    const r = await curlGet(route.request().url());
    await route.fulfill({ status: r.status, body: r.body, headers: { 'content-type': r.type, 'access-control-allow-origin': '*', 'cache-control': 'max-age=3600' } });
  });
  // a #N at the end of a view link opens that page (used to resume a capture)
  await page.goto(START > 1 ? `${url}#${START}` : url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.waitForSelector(`[aria-label="Page ${START}"]`, { timeout: 60000 });
  const total = await page.evaluate(() => { const m = document.body.innerText.match(/\n\d+\n\n\/\n\n(\d+)\n/); return m ? +m[1] : 0; });
  const N = Math.min(total || 999, +(maxArg || 999));
  console.log('pages', total);
  const settle = async (n) => {
    await page.waitForSelector(`[aria-label="Page ${n}"]`, { timeout: 30000 });
    // wait for the page's images to finish (Canva swaps a low-res preview for the full image)
    for (let t = 0; t < 40; t++) {
      const ok = await page.evaluate((n) => { const el = document.querySelector(`[aria-label="Page ${n}"]`); if (!el) return false; const imgs = [...el.querySelectorAll('img')]; return imgs.every(i => i.complete && i.naturalWidth > 0); }, n);
      if (ok) break; await page.waitForTimeout(250);
    }
    await page.waitForTimeout(800);
  };
  for (let n = START; n <= N; n++) {
    await settle(n);
    await page.mouse.move(960, 540);
    const box = await page.evaluate((n) => {
      // the slide is drawn inside <main>; hide everything outside it (the viewer's header, footer and buttons)
      const el = document.querySelector('main');
      document.querySelectorAll('[data-lsh-hidden]').forEach(e => { e.style.visibility = ''; e.removeAttribute('data-lsh-hidden'); });
      let node = el;
      while (node && node.parentElement) { for (const sib of node.parentElement.children) if (sib !== node && sib.tagName !== 'SCRIPT' && sib.tagName !== 'STYLE' && getComputedStyle(sib).visibility !== 'hidden') { sib.setAttribute('data-lsh-hidden', '1'); sib.style.visibility = 'hidden'; } node = node.parentElement; }
      el.querySelectorAll('footer, button, [role="toolbar"], [role="progressbar"]').forEach(e => { e.setAttribute('data-lsh-hidden', '1'); e.style.visibility = 'hidden'; });
      const r = el.getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height };
    }, n);
    // Canva animates elements in (fades, typewriter text): wait until two frames a second apart are identical
    const clip = { x: Math.max(0, box.x), y: Math.max(0, box.y), width: Math.min(1920, box.w), height: Math.min(1080, box.h) };
    let prev = null, shot = null;
    for (let t = 0; t < 20; t++) {
      await page.waitForTimeout(t === 0 ? 1500 : 1000);
      shot = await page.screenshot({ clip });
      if (prev && prev.equals(shot)) break;
      prev = shot;
    }
    fs.writeFileSync(`${out}/p${String(n).padStart(2, '0')}.png`, shot);
    console.log('page', n, Math.round(box.w) + 'x' + Math.round(box.h));
    await page.evaluate(() => document.querySelectorAll('[data-lsh-hidden]').forEach(e => { e.style.visibility = ''; e.removeAttribute('data-lsh-hidden'); }));
    if (n < N) {
      const at = () => page.evaluate(() => +((document.body.innerText.match(/\n(\d+)\n\n\/\n\n\d+\n/) || [])[1] || 0));
      for (let k = 0; k < 4; k++) {
        await page.keyboard.press('ArrowRight');
        let cur = 0; for (let w = 0; w < 20 && (cur = await at()) <= n; w++) await page.waitForTimeout(200);
        if (cur === n + 1) break;
        if (cur > n + 1) throw new Error(`skipped from page ${n} to ${cur}`);
      }
    }
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
