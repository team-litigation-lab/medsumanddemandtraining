// Course data checks (run by .github/workflows/checks.yml).
// Every case document and handout the portal links to must exist in documents/,
// document ids must be unique, every document packet a Skill Builder opens
// must point at a real document, every lesson has its Presenter view script, every
// Canva deck page has its image and its script, and the Case Workspace files match their answer key.
import fs from 'fs';
import path from 'path';
import vm from 'vm';

const ROOT = path.resolve(process.argv[2] || '.');
const problems = [];
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/md-documents.js'), 'utf8'), ctx);
const { MD_DOCS = [], MD_HANDOUTS = [], MD_DOC_FOLDERS = [] } = ctx.window;

const seen = new Set();
const folders = new Set(MD_DOC_FOLDERS.map(f => f.id));
for (const d of MD_DOCS) {
    if (seen.has(d.id)) problems.push(`Duplicate document id ${d.id}`);
    seen.add(d.id);
    if (!d.file || !fs.existsSync(path.join(ROOT, 'documents', d.file))) problems.push(`${d.id} "${d.title}": documents/${d.file} is missing`);
    if (d.folder && !folders.has(d.folder)) problems.push(`${d.id}: unknown folder "${d.folder}"`);
}
for (const h of MD_HANDOUTS) {
    if (!h.file || !fs.existsSync(path.join(ROOT, 'documents', h.file))) problems.push(`Handout "${h.title}": documents/${h.file} is missing`);
}
// docPacket(["AC01", …]) and doc:"AC07" references in the tools
for (const f of fs.readdirSync(path.join(ROOT, 'js')).filter(f => f.endsWith('.js'))) {
    const src = fs.readFileSync(path.join(ROOT, 'js', f), 'utf8');
    for (const m of src.matchAll(/docPacket\(\[([^\]]*)\]/g)) {
        for (const id of m[1].match(/"([A-Z]+\d+)"/g) || []) {
            const k = id.replace(/"/g, '');
            if (!seen.has(k)) problems.push(`js/${f}: docPacket references ${k}, which isn't in MD_DOCS`);
        }
    }
    for (const m of src.matchAll(/\bdoc:"([A-Z]+\d+)"/g)) if (!seen.has(m[1])) problems.push(`js/${f}: doc:"${m[1]}" isn't in MD_DOCS`);
}

// Presenter view scripts (js/slide-scripts/dayN.js): every lesson has a hand-written script for both
// slides in the four beats (why · talk · walk · ask), keyed by its exact title, with one walk line per
// How-To step (slide 1) and per Best Practice (slide 2), and no line that only points at the slide.
// A renamed lesson would otherwise quietly lose its script.
let scripted = 0;
for (let n = 1; n <= 5; n++) {
    const dc = {}; vm.createContext(dc);
    vm.runInContext(fs.readFileSync(path.join(ROOT, `build/day${n}.js`), 'utf8') + `;this.D = DAY${n};`, dc);
    const sc = { window: {} }; vm.createContext(sc);
    vm.runInContext(fs.readFileSync(path.join(ROOT, `js/slide-scripts/day${n}.js`), 'utf8'), sc);
    const D = dc.D, S = sc.window.SLIDE_SCRIPTS || {}, titles = new Set(D.lessons.map(l => `${D.id}::${l.h}`));
    for (const k of Object.keys(S)) if (!titles.has(k)) problems.push(`js/slide-scripts/day${n}.js: "${k}" doesn't match a Day ${n} lesson title`);
    for (const l of D.lessons) {
        const e = S[`${D.id}::${l.h}`];
        if (!e) { problems.push(`Day ${n} "${l.h}": no speaker script in js/slide-scripts/day${n}.js`); continue; }
        for (const [p, want] of [['p1', (l.fourPart.howTo || []).length], ['p2', (l.fourPart.bestPractices || []).length]]) {
            const s = e[p];
            if (!s || !s.why || !s.talk || !s.ask || !Array.isArray(s.walk) || !s.walk.length) { problems.push(`Day ${n} "${l.h}" ${p}: the script needs why, talk, walk and ask`); continue; }
            if (s.walk.length !== want) problems.push(`Day ${n} "${l.h}" ${p}: ${s.walk.length} walk lines for ${want} ${p === 'p1' ? 'How-To steps' : 'Best Practices'}`);
            // it's read aloud as speaker notes, so it explains the idea instead of pointing at the slide
            for (const x of [s.why, s.talk, ...s.walk, s.ask]) if (/\b(this|the) slide\b|\bon the (left|right)\b|\bGo Deeper\b/i.test(x)) problems.push(`Day ${n} "${l.h}" ${p}: explain it instead of pointing at the slide — "${x.slice(0, 80)}…"`);
        }
        scripted++;
    }
}

// The Canva decks shown as the day's slides (js/md-canva-decks.js): every page's image is in slides/,
// and every page has its spoken script in js/slide-scripts/canva-dayN.js.
const cv = { window: {} }; vm.createContext(cv);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/md-canva-decks.js'), 'utf8'), cv);
for (let n = 1; n <= 5; n++) {
    const f = path.join(ROOT, `js/slide-scripts/canva-day${n}.js`);
    if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8'), cv); else problems.push(`js/slide-scripts/canva-day${n}.js is missing`);
}
const CANVA = cv.window.MD_CANVA || {}, CV_SCRIPTS = cv.window.CANVA_SCRIPTS || {};
let canvaPages = 0;
for (let n = 1; n <= 5; n++) {
    const deck = CANVA[n];
    if (!deck || !deck.pages || !deck.pages.length) { problems.push(`Day ${n}: no Canva deck in js/md-canva-decks.js`); continue; }
    deck.pages.forEach((p, i) => {
        canvaPages++;
        if (!p.img || !fs.existsSync(path.join(ROOT, p.img))) problems.push(`Day ${n} Canva slide ${i + 1}: ${p.img} is missing`);
        const s = CV_SCRIPTS[`${n}:${i + 1}`];
        if (!s || !s.say) problems.push(`Day ${n} Canva slide ${i + 1} ("${p.title}"): no script in js/slide-scripts/canva-day${n}.js`);
        else if (/\b(this|the) slide\b|\bon the (left|right)\b|as you can see/i.test(s.say + ' ' + (s.ask || ''))) problems.push(`Day ${n} Canva slide ${i + 1}: explain it instead of pointing at the slide`);
    });
    for (const k of Object.keys(CV_SCRIPTS).filter(k => k.startsWith(n + ':'))) if (+k.split(':')[1] > deck.pages.length) problems.push(`js/slide-scripts/canva-day${n}.js: "${k}" is past the deck's last page`);
}

// The Case Workspace (build/workspace, /api/workspace/* in worker.js): every file the Apps Script setup imports
// exists, the answer key covers the same files, the records' page counts match their PDFs and run
// WHITFIELD 0001–0066 without a gap, and the answer key stays out of the public site.
const WS_MAN = JSON.parse(fs.readFileSync(path.join(ROOT, 'workspace/manifest.json'), 'utf8'));
const WS_KEY = JSON.parse(fs.readFileSync(path.join(ROOT, 'build/workspace/answer_key.json'), 'utf8'));
const manByName = new Map(WS_MAN.files.map(f => [f.name, f]));
for (const f of WS_MAN.files) {
    if (!/^workspace\/files\/f\d\d\.pdf$/.test(f.url)) problems.push(`Case Workspace: "${f.name}" should be served under a neutral name (workspace/files/fNN.pdf), not ${f.url}`);
    else if (!fs.existsSync(path.join(ROOT, f.url))) problems.push(`Case Workspace: ${f.url} ("${f.name}") is missing`);
    if (Object.keys(f).some(k => !['folder', 'name', 'url'].includes(k))) problems.push(`Case Workspace: workspace/manifest.json gives away more than folder, name and url for "${f.name}"`);
}
let wsPages = 0; const bates = [];
for (const f of WS_KEY.files) {
    const m = manByName.get(f.name);
    if (!m) { problems.push(`Case Workspace answer key: "${f.name}" isn't in workspace/manifest.json`); continue; }
    if (m.url !== f.file || m.folder !== f.drive) problems.push(`Case Workspace answer key: "${f.name}" doesn't match its manifest entry`);
    if (!f.bates) continue;
    const pdf = fs.existsSync(path.join(ROOT, f.file)) ? fs.readFileSync(path.join(ROOT, f.file), 'latin1') : '';
    const n = (pdf.match(/\/Type\s*\/Page[^s]/g) || []).length, r = f.bates.match(/WHITFIELD (\d{4})–(\d{4})/);
    if (n !== f.pages) problems.push(`Case Workspace: "${f.name}" has ${n} pages; the answer key says ${f.pages}`);
    if (!r || +r[2] - +r[1] + 1 !== f.pages) problems.push(`Case Workspace: "${f.name}" is ${f.bates}, which isn't ${f.pages} pages`);
    else bates.push([+r[1], +r[2]]);
    wsPages += f.pages || 0;
}
bates.sort((a, b) => a[0] - b[0]).forEach(([a], i) => { if (a !== (i ? bates[i - 1][1] + 1 : 1)) problems.push(`Case Workspace: the records' Bates ranges have a gap or overlap at WHITFIELD ${String(a).padStart(4, '0')}`); });
if (wsPages !== 66) problems.push(`Case Workspace: the medical records add up to ${wsPages} pages, not WHITFIELD 0001–0066`);
for (const n of ['1', '2', '3', '4', '5']) if (!(WS_KEY.rubric[n] || []).length) problems.push(`Case Workspace: no expected results for Day ${n} in the answer key`);
if (!/^build\/?$/m.test(fs.readFileSync(path.join(ROOT, '.assetsignore'), 'utf8'))) problems.push('.assetsignore must keep build/ (the Case Workspace answer key) off the public site');

console.log(`Checked ${MD_DOCS.length} documents, ${MD_HANDOUTS.length} handouts, ${scripted} lesson speaker scripts, ${canvaPages} Canva slides and ${WS_MAN.files.length} Case Workspace files.`);
if (problems.length) { console.log(`\n${problems.length} problem(s):\n`); problems.forEach((p, i) => console.log(`${i + 1}. ${p}`)); process.exit(1); }
console.log('All good.');
