// Renders build/workspace/html/*.html (from make_received.py) to workspace/files/*.pdf, as received:
// a fax header line on what came by fax, and a TRAINING — SIMULATED footer with page numbers on every page.
// usage: node build/workspace/render-pdfs.cjs     (needs Playwright + Chromium)
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const jobs = JSON.parse(fs.readFileSync(path.join(__dirname, 'jobs.json'), 'utf8'));
const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  fs.mkdirSync(path.join(ROOT, 'workspace/files'), { recursive: true });
  let total = 0;
  for (const j of jobs) {
    await page.goto('file://' + j.html, { waitUntil: 'load' });
    const header = j.fax
      ? `<div style="width:100%;font:9px 'Courier New',monospace;color:#333;padding:0 0.5in;display:flex;justify-content:space-between"><span>${esc(j.fax)}</span><span>P. <span class="pageNumber"></span>/<span class="totalPages"></span></span></div>`
      : '<div></div>';
    const footer = `<div style="width:100%;font:8px Arial,sans-serif;color:#777;padding:0 0.5in;display:flex;justify-content:space-between"><span>TRAINING — SIMULATED DOCUMENT · fictional people and records · LSH Medsum &amp; Demand Training</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`;
    const out = path.join(ROOT, j.pdf);
    await page.pdf({ path: out, format: 'Letter', printBackground: true, displayHeaderFooter: true, headerTemplate: header, footerTemplate: footer,
      margin: { top: j.fax ? '0.6in' : '0.5in', bottom: '0.55in', left: '0.6in', right: '0.6in' } });
    total += fs.statSync(out).size;
  }
  await browser.close();
  console.log(`${jobs.length} PDFs → workspace/files/ (${Math.round(total / 1024)} KB)`);
})().catch((e) => { console.error(e); process.exit(1); });
