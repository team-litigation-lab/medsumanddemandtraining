// Course data checks (run by .github/workflows/checks.yml).
// Every case document and handout the portal links to must exist in documents/,
// document ids must be unique, every document packet a Skill Builder opens
// must point at a real document, and every lesson has its Presenter view script.
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
// How-To step (slide 1) and per Best Practice (slide 2). A renamed lesson would otherwise quietly lose its script.
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
        }
        scripted++;
    }
}

console.log(`Checked ${MD_DOCS.length} documents, ${MD_HANDOUTS.length} handouts and ${scripted} lesson speaker scripts.`);
if (problems.length) { console.log(`\n${problems.length} problem(s):\n`); problems.forEach((p, i) => console.log(`${i + 1}. ${p}`)); process.exit(1); }
console.log('All good.');
