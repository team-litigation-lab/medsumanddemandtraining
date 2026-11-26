// "Their work this day" in Admin → Trainee Audit → View Detail → Day-by-Day Feedback: the standard score table.
// One row per scored activity (Knowledge Check, Quick Checks, each Skill Builder and its AI-reviewed answers, the random
// task, any roleplay) under the headings Activity · Score · 🧾 Why this score · ⭐ What you did great · ❌ What was wrong ·
// 💡 What could have been done better, filled from the grader's saved notes, or explained honestly when none were saved.
// Usage: node .github/scripts/score-table.cjs [baseUrl] [screenshot.png]   (with .github/scripts/server.mjs running; needs Playwright)
const { chromium } = require('playwright');
const BASE = process.argv[2] || 'http://localhost:8787/';
const SHOT = process.argv[3] || '';
const failures = []; const fail = (m) => failures.push(m);
const HEADS = ['Activity', 'Score', '🧾 Why this score', '⭐ What you did great', '❌ What was wrong', '💡 What could have been done better'];
(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 1000 } })).newPage();
  page.on('pageerror', e => fail(`page error: ${e.message}`));
  try {
    await page.goto(BASE); await page.waitForFunction(() => typeof renderAdminDetail === 'function' && typeof scoreTableHTML === 'function', null, { timeout: 20000 });
    const id = 'tess-table--b112626';
    const r = await page.evaluate(async (id) => {
      const put = (k, v) => fetch('/api/storage/set', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key: k, value: JSON.stringify(v) }) });
      const ago = new Date(Date.now() - 3 * 3600e3).toISOString(), tool = relatedTools(2)[0] || PRACTICE_TOOLS[0];
      await put('trainee:' + id, { id, name: 'Tess Table', batch: 'B112626', approved: true, registeredAt: ago, lastActive: ago });
      await put('progress:' + id, { savedAt: ago, data: {
        'day-progress': { 2: { done: true, score: 80, history: [{ score: 60, passed: false }, { score: 80, passed: true }], surpriseTaskScore: 40, surpriseTaskScores: [80, 0] } },
        'practice-progress': { [tool.id]: { runs: 3, bestScore: 88, history: [{ score: 70 }, { score: 88 }, { score: 62 }] } },
        'slide-progress': { 2: 9 },
        'quick-check-answers': { '2_1': { checked: true, correct: true }, '2_2': { checked: true, correct: false } },
        'work-log': [
          { kind: 'quiz', dayId: 2, label: 'Day 2 Knowledge Check', score: 80, correct: 8, total: 10, missed: ['What does MMI mean?', 'How long is a gap in treatment?'] },
          { kind: 'lab', dayId: 2, toolId: tool.id, label: 'Medical summary paragraph', score: 62, tier: 'Requires Remediation', at: ago,
            strengths: ['Every fact carries a page cite.'], gaps: ['The 43-day gap is not mentioned.'], growth: ['Add the gap with its reason and cite pp. 38, 60.'],
            excerpt: 'Ms. Whitfield presented to the ER on 03/14/2026 (p. 3)…', subs: { accuracy: 60, presence: 70, risk: 55, efficiency: 65 } },
          { kind: 'task', dayId: 2, label: 'Random Task · Day 2', score: 80, tier: 'Proficient Assistant' },
          { kind: 'task', dayId: 2, label: 'Random Task · Day 2 (missed)', score: 0, tier: 'Not Yet — Keep Building' }] } });
      state.isAdmin = true; state.adminData = null; goto('admin');
      for (let i = 0; i < 60 && !(state.adminData || []).some(x => x.id === id); i++) await new Promise(r => setTimeout(r, 300));
      const rec = state.adminData.find(x => x.id === id);
      await loadTraineeWork(id, true);
      // the real View Detail, as a trainer opens it
      state.adminExpandedId = id; const wrap = document.getElementById('adminRowsWrap'); wrap.innerHTML = renderAdminRows();
      const box = [...wrap.querySelectorAll('.audit-row.expanded')].find(x => /Tess Table/.test(x.textContent)); box.id = 'mdstTestBox';
      const day2 = [...box.querySelectorAll('details.fb-day')].find(d => /Day 2/.test(d.querySelector('summary').textContent));
      if (day2) day2.open = true;
      const t = day2 && day2.querySelector('table.mdst-t');
      const rows = t ? [...t.querySelectorAll('tbody tr')].map(tr => [...tr.children].map(c => c.textContent.replace(/\s+/g, ' ').trim())) : [];
      const thBg = t ? getComputedStyle(t.querySelector('tbody th')).backgroundColor : '';
      const headBg = t ? getComputedStyle(t.querySelector('thead th')).backgroundColor : '';
      const wrapScroll = t ? getComputedStyle(t.parentElement).overflowX : '';
      return { has: !!t, heads: t ? [...t.querySelectorAll('thead th')].map(th => th.textContent.trim()) : [], rows, thBg, headBg, wrapScroll,
        oldGone: !box.querySelector('.fb-evidence'), tool: tool.title };
    }, id);
    if (!r.has) fail('Day 2 in Day-by-Day Feedback should show the score table');
    if (JSON.stringify(r.heads) !== JSON.stringify(HEADS)) fail(`column headings: ${JSON.stringify(r.heads)}`);
    if (!r.oldGone) fail('the old bullet list (.fb-evidence) should be gone');
    if (r.headBg !== 'rgb(38, 43, 69)') fail(`header row should be navy: ${r.headBg}`);
    if (r.thBg !== 'rgb(255, 255, 255)') fail(`the Activity column should be white: ${r.thBg}`);
    if (r.wrapScroll !== 'auto') fail(`the table should sit in a horizontally scrollable wrapper: ${r.wrapScroll}`);
    const row = (n) => r.rows.find(x => x[0].startsWith(n)) || [];
    const kc = row('Knowledge Check');
    if (kc[1] !== '80%' || !/Best score of 2 attempts \(60%, 80%\)/.test(kc[2]) || !/8 of 10 questions right/.test(kc[2]) || !/Missed: What does MMI mean\?/.test(kc[4]) || !/re-read Day 2's slides on the questions missed/i.test(kc[5]))
      fail(`Knowledge Check row: ${JSON.stringify(kc)}`);
    const qc = row('Quick Checks');
    if (qc[1] !== '50%' || !/1 of 2 Quick Checks/.test(qc[2])) fail(`Quick Checks row: ${JSON.stringify(qc)}`);
    const lab = row(r.tool);
    if (lab[1] !== '88%' || !/Best of 3 scored runs \(70%, 88%, 62%\)/.test(lab[2]) || !/wasn't recorded/.test(lab[4]) || !/AI-reviewed answers below/.test(lab[5]))
      fail(`Skill Builder row (best run had no notes, so it says so): ${JSON.stringify(lab)}`);
    const ans = row('Medical summary paragraph');
    if (ans[1] !== '62%' || !/By area: Accuracy 60%/.test(ans[2]) || !/Below the 70% pass mark/.test(ans[2]) || !/page cite/.test(ans[3]) || !/43-day gap is not mentioned/.test(ans[4]) || !/pp\. 38, 60/.test(ans[5]))
      fail(`AI-reviewed answer row (grader's strengths / gaps / growth): ${JSON.stringify(ans)}`);
    const task = row('Random task');
    if (task[1] !== '40%' || !/Average of 2 random tasks \(80%, 0%\)/.test(task[2]) || !/1 task not answered/.test(task[4])) fail(`Random task row: ${JSON.stringify(task)}`);
    if (r.rows.some(x => x.slice(2).some(c => !c))) fail(`no cell should be blank: ${JSON.stringify(r.rows)}`);
    if (SHOT) {
      await page.evaluate(() => { // the list re-renders when the audit extras arrive: open Day 2 again
        const row = [...document.querySelectorAll('#adminRowsWrap .audit-row.expanded')].find(x => /Tess Table/.test(x.textContent));
        const d = row && [...row.querySelectorAll('details.fb-day')].find(x => /Day 2/.test(x.querySelector('summary').textContent));
        if (d) { d.open = true; d.querySelector('.mdst').id = 'mdstShot'; } });
      const el = await page.$('#mdstShot');
      if (el) { await el.scrollIntoViewIfNeeded(); await el.screenshot({ path: SHOT }); } else fail('no table to screenshot');
    }
  } catch (e) { fail(`threw: ${e.message}`); }
  await browser.close();
  if (failures.length) { console.error('Score table test FAILED:\n - ' + failures.join('\n - ')); process.exit(1); }
  console.log('Score table test passed (Day-by-Day Feedback: Activity · Score · Why this score · What you did great · What was wrong · What could have been done better).');
})();
