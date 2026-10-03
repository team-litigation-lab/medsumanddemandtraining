/**
 * LSH Medsum & Demand — Case Workspace bridge (Google Apps Script).
 *
 * Runs as team-litigation@legalsupporthelp.com and owns every trainee's case folder, so trainers can open
 * any folder and see how it was arranged, and each document's version history shows how it was built.
 * The training portal (Cloudflare Worker) calls this web app with a shared secret to:
 *   provision — copy the master case folder for a trainee and share it with their company account
 *   inspect   — list a trainee's folder tree (names, places, last changed)
 *   export    — return the text of a trainee's work product (for the AI pre-review)
 *   reset     — move a trainee's folder to the trash, so they can start again with a fresh copy
 * Each trainee's record (their folder, the files to review, the name each received file arrived with)
 * is a small JSON file in "_records", a folder next to the master that only this account uses.
 *
 * One-time setup: see SETUP.md next to this file (paste, run setup(), deploy as a web app).
 */
const CONFIG = {
  ROOT_ID: '19TUcIzRsexjencclC235M1r1VXgTe10t',        // LSH Medsum & Demand — Case Workspace
  MASTER_ID: '1bWbX9Ii02MzZOcQjGMuDrS7phdJjXene',      // MASTER — Whitfield case file (template, don't edit)
  TRAINEES_ID: '1ijWcmVa3IA3jFfXG6Eu4Z0zxY8-teXX3',    // Trainee Workspaces
  SITE: 'https://medsumanddemandtraining.legalsupporthelp.workers.dev',
  DOMAIN: 'legalsupporthelp.com',                      // trainees' company accounts
};
// master file title → role (the portal asks for files by role; trainees may rename their copies)
const ROLES = {
  '00 START HERE — Your tasks, Days 1–5': 'start',
  'Whitfield — Day 1 File Audit': 'audit',
  'Whitfield — Medical Chronology': 'chronology',
  'Whitfield — Medical Summary': 'medsum',
  'Whitfield — Bills Itemization': 'itemization',
  'Whitfield — Demand Letter (draft)': 'demand',
  'Whitfield — Exhibit Index': 'exhibits',
  'Whitfield — Reply to Keystone (draft)': 'reply',
};
const NAVY = '#262B45';

/* ================================================================ one-time setup (run from the editor) */
function setup() {
  const props = PropertiesService.getScriptProperties();
  if (!props.getProperty('SECRET')) props.setProperty('SECRET', Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().replace(/-/g, ''));
  recordsFolder_();                                              // made once here, so two first sign-ups can't make two
  const imported = importFiles_();
  const sheets = buildSheets_();
  Logger.log('Imported %s file(s); created %s sheet(s).', imported, sheets);
  Logger.log('WORKSPACE_SECRET for the Worker: %s', props.getProperty('SECRET'));
}

// The case's PDFs, from the training site's list (workspace/manifest.json), into the master folder.
function importFiles_() {
  const manifest = JSON.parse(UrlFetchApp.fetch(CONFIG.SITE + '/workspace/manifest.json').getContentText());
  const master = DriveApp.getFolderById(CONFIG.MASTER_ID);
  let n = 0;
  manifest.files.forEach(function (f) {
    const folder = childFolder_(master, f.folder);
    if (folder.getFilesByName(f.name).hasNext()) return;          // already there
    const blob = UrlFetchApp.fetch(CONFIG.SITE + '/' + f.url).getBlob().setName(f.name);
    folder.createFile(blob); n++;
  });
  return n;
}

// The two Google Sheets templates, in 03 Work Product.
function buildSheets_() {
  const folder = childFolder_(DriveApp.getFolderById(CONFIG.MASTER_ID), '03 Work Product');
  let n = 0;
  if (!folder.getFilesByName('Whitfield — Medical Chronology').hasNext()) {
    const ss = SpreadsheetApp.create('Whitfield — Medical Chronology');
    const sh = ss.getSheets()[0].setName('Chronology');
    header_(sh, ['Date of service', 'Provider / facility', 'Visit type', "Complaints & findings (provider's words)", 'Diagnosis', 'Treatment / plan', 'Flag', 'Bates page(s)'],
            [110, 190, 130, 380, 220, 250, 160, 110]);
    sh.getRange('A2:A300').setNumberFormat('mm/dd/yyyy');
    sh.getRange('D2:F300').setWrap(true).setVerticalAlignment('top');
    sh.getRange('G2:G300').setDataValidation(SpreadsheetApp.newDataValidation()
      .requireValueInList(['Routine entry', 'Prior injury', 'Gap in treatment', 'Objective finding', 'Causation opinion', 'Procedure', 'MMI / future care'], true)
      .setAllowInvalid(false).build());
    const notes = ss.insertSheet('Notes');
    notes.getRange('A1:A3').setValues([['One row per encounter, in date order (prior records first).'], ["Use the provider's words. Cite the Bates page for every row."],
      ['Flag: Prior injury · Gap in treatment (30+ days) · Objective finding · Causation opinion · Procedure · MMI / future care.']]);
    notes.setColumnWidth(1, 760);
    DriveApp.getFileById(ss.getId()).moveTo(folder); n++;
  }
  if (!folder.getFilesByName('Whitfield — Bills Itemization').hasNext()) {
    const ss = SpreadsheetApp.create('Whitfield — Bills Itemization');
    const sh = ss.getSheets()[0].setName('Itemization');
    header_(sh, ['Provider', 'Date(s) of service', 'Code (CPT / rev.)', 'Description', 'Billed', 'Adjustment', 'Health ins. paid', 'PIP / MedPay paid', 'Client paid', 'Balance', 'Source (file, page)', 'Notes'],
            [200, 130, 110, 260, 100, 100, 110, 115, 95, 100, 190, 220]);
    const last = 40;                                                // charge lines in rows 2–40, totals in row 41
    const bal = [];
    for (let r = 2; r <= last; r++) bal.push(['=IF(COUNT(E' + r + ':I' + r + ')=0,"",E' + r + '-F' + r + '-G' + r + '-H' + r + '-I' + r + ')']);
    sh.getRange(2, 10, last - 1, 1).setFormulas(bal);
    sh.getRange('E2:J' + (last + 1)).setNumberFormat('$#,##0.00');
    const t = last + 1;
    sh.getRange('A' + t).setValue('TOTALS').setFontWeight('bold');
    sh.getRange('E' + t + ':J' + t).setFormulas([['E', 'F', 'G', 'H', 'I', 'J'].map(function (c) { return '=SUM(' + c + '2:' + c + last + ')'; })])
      .setFontWeight('bold').setBackground('#FFF6EC');
    sh.getRange('A' + (t + 1)).setValue('Check: Billed − Adjustments − Payments = Balance →');
    sh.getRange('J' + (t + 1)).setFormula('=IF(ROUND(E' + t + '-F' + t + '-G' + t + '-H' + t + '-I' + t + '-J' + t + ',2)=0,"ties out","does NOT tie out")');
    const ex = ss.insertSheet('Exclusions');
    header_(ex, ['Provider', 'Date of service', 'Description', 'Amount', "Why it's left out", 'Source (file, page)'], [200, 120, 260, 100, 320, 190]);
    ex.getRange('D2:D40').setNumberFormat('$#,##0.00');
    const li = ss.insertSheet('Balances & Liens');
    header_(li, ['Holder', 'Type (LOP, balance due, reimbursement claim)', 'Amount', 'Confirmed? (date, how)', 'Source (file, page)'], [220, 270, 110, 200, 190]);
    li.getRange('C2:C40').setNumberFormat('$#,##0.00');
    DriveApp.getFileById(ss.getId()).moveTo(folder); n++;
  }
  return n;
}

function header_(sh, titles, widths) {
  sh.getRange(1, 1, 1, titles.length).setValues([titles]).setFontWeight('bold').setFontColor('#ffffff').setBackground(NAVY).setWrap(true).setVerticalAlignment('middle');
  widths.forEach(function (w, i) { sh.setColumnWidth(i + 1, w); });
  sh.setFrozenRows(1); sh.setRowHeight(1, 34);
}

/* ================================================================ the web app the portal calls */
function doPost(e) {
  try {
    const req = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const secret = PropertiesService.getScriptProperties().getProperty('SECRET');
    if (!secret || req.secret !== secret) return out_({ error: 'Not allowed' });
    switch (req.action) {
      case 'ping': return out_({ ok: true, master: DriveApp.getFolderById(CONFIG.MASTER_ID).getName() });
      case 'provision': return out_(provision_(req));
      case 'inspect': return out_(inspect_(req.traineeId));
      case 'export': return out_(exportWork_(req.traineeId, req.roles || []));
      case 'reset': return out_(reset_(req.traineeId));
      default: return out_({ error: 'Unknown action' });
    }
  } catch (err) {
    return out_({ error: String(err && err.message || err) });
  }
}
function doGet() { return out_({ ok: true, service: 'LSH Case Workspace bridge' }); }
function out_(obj) { return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }

/* ---------------------------------------------------------------- records (one JSON file per trainee) */
function recordsFolder_() {
  const root = DriveApp.getFolderById(CONFIG.ROOT_ID), name = '_records (used by the portal — do not edit)';
  const it = root.getFoldersByName(name);
  return it.hasNext() ? it.next() : root.createFolder(name);
}
function recordFile_(traineeId) {
  const it = recordsFolder_().getFilesByName(traineeId + '.json');
  while (it.hasNext()) { const f = it.next(); if (!f.isTrashed()) return f; }
  return null;
}
function record_(traineeId) {
  const f = recordFile_(traineeId);
  return f ? JSON.parse(f.getBlob().getDataAsString()) : null;
}
function saveRecord_(rec) {
  const f = recordFile_(rec.traineeId), body = JSON.stringify(rec);
  if (f) f.setContent(body); else recordsFolder_().createFile(rec.traineeId + '.json', body, MimeType.PLAIN_TEXT);
}
function dropRecord_(traineeId) { const f = recordFile_(traineeId); if (f) f.setTrashed(true); }
function liveFolder_(id) {
  try { const f = DriveApp.getFolderById(id); return f.isTrashed() ? null : f; } catch (err) { return null; }
}

/* ---------------------------------------------------------------- provision: the trainee's own copy */
// The lock is held only to read and claim the record, so trainees signing up together don't wait on
// each other's copies (about a minute each). A copy that fails is moved to the trash, never left behind.
function provision_(req) {
  const id = String(req.traineeId || '').trim(), email = String(req.email || '').trim().toLowerCase();
  if (!/^[a-z0-9-]{1,80}$/.test(id)) return { error: 'Bad trainee id' };
  if (!new RegExp('^[^@\\s]+@' + CONFIG.DOMAIN.replace(/\./g, '\\.') + '$').test(email)) return { error: 'Use your @' + CONFIG.DOMAIN + ' Google account' };
  const now = new Date().toISOString();
  let rec, folder = null, fresh = false;
  const lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    rec = record_(id);
    if (rec) folder = liveFolder_(rec.folderId);
    if (rec && folder && !rec.complete && Date.now() - Date.parse(rec.creating || now) < 8 * 60 * 1000)
      return { error: 'Your case folder is still being created. Try again in a minute.' };
    if (!rec || !folder || !rec.complete) {
      if (folder) folder.setTrashed(true);                       // an earlier copy that never finished
      const who = String(req.name || (rec && rec.name) || id).slice(0, 60), batch = String(req.batch || (rec && rec.batch) || '').slice(0, 30);
      folder = DriveApp.getFolderById(CONFIG.TRAINEES_ID).createFolder('Whitfield Case — ' + who + (batch ? ' (' + batch + ')' : ''));
      folder.setShareableByEditors(false);                       // trainees can't share client files onward
      rec = { traineeId: id, folderId: folder.getId(), files: {}, orig: {}, emails: [], name: who, batch: batch,
              createdAt: now, creating: now, complete: false };
      saveRecord_(rec);
      fresh = true;
    }
  } finally { lock.releaseLock(); }
  try {
    share_(folder, rec, email);                                  // first, so a wrong address fails before the copy
    if (fresh) copyTree_(DriveApp.getFolderById(CONFIG.MASTER_ID), folder, rec.files, rec.orig);
  } catch (err) {
    if (fresh) { folder.setTrashed(true); dropRecord_(id); }
    throw err;
  }
  rec.complete = true; delete rec.creating;
  rec.email = email; rec.name = req.name || rec.name || ''; rec.batch = req.batch || rec.batch || '';
  saveRecord_(rec);
  return describe_(rec, folder);
}

// One Google account per trainee: a new address replaces the old one.
function share_(folder, rec, email) {
  (rec.emails || []).forEach(function (old) { if (old !== email) { try { folder.removeEditor(old); } catch (err) {} } });
  if ((rec.emails || []).indexOf(email) < 0) folder.addEditor(email);
  rec.emails = [email];
}

function copyTree_(src, dest, files, orig) {
  const fit = src.getFiles();
  while (fit.hasNext()) {
    const f = fit.next(); if (f.isTrashed()) continue;
    const copy = f.makeCopy(f.getName(), dest);
    copy.setShareableByEditors(false);
    if (ROLES[f.getName()]) files[ROLES[f.getName()]] = copy.getId(); else orig[copy.getId()] = f.getName();   // the name it arrived with, for the review
  }
  const dit = src.getFolders();
  while (dit.hasNext()) {
    const d = dit.next(); if (d.isTrashed()) continue;
    const sub = dest.createFolder(d.getName()); sub.setShareableByEditors(false); copyTree_(d, sub, files, orig);
  }
}

// Start over: the trainee's folder goes to the trash (an admin can restore it from there) and the record is dropped.
function reset_(traineeId) {
  const id = String(traineeId || '');
  const lock = LockService.getScriptLock(); lock.waitLock(20000);
  try {
    const rec = record_(id); if (!rec) return { ok: true };
    const folder = liveFolder_(rec.folderId); if (folder) folder.setTrashed(true);
    dropRecord_(id);
    return { ok: true };
  } finally { lock.releaseLock(); }
}

function describe_(rec, folder) {
  const files = {};
  Object.keys(rec.files).forEach(function (role) {
    try { const f = DriveApp.getFileById(rec.files[role]); files[role] = { id: f.getId(), url: f.getUrl(), name: f.getName() }; } catch (err) { files[role] = null; }
  });
  return { traineeId: rec.traineeId, folderId: rec.folderId, folderUrl: folder.getUrl(), email: rec.email, emails: rec.emails, files: files, createdAt: rec.createdAt };
}

function inspect_(traineeId) {
  const rec = record_(traineeId); if (!rec) return { error: 'No workspace for this trainee yet' };
  const root = liveFolder_(rec.folderId), items = [];
  if (!root) return { error: "This trainee's case folder is in the trash. Start over from the portal to give them a new copy." };
  (function walk(folder, path) {
    const fit = folder.getFiles();
    while (fit.hasNext()) {
      const f = fit.next(); if (f.isTrashed()) continue;
      const mime = f.getMimeType();
      const isShortcut = mime === MimeType.SHORTCUT, orig = rec.orig || {};
      items.push({ path: path, name: f.getName(), type: isShortcut ? 'shortcut' : mime.replace('application/vnd.google-apps.', 'google-'),
                   updated: f.getLastUpdated().toISOString(), target: isShortcut ? safeTargetName_(f) : undefined,
                   orig: orig[isShortcut ? safeTargetId_(f) : f.getId()] });
    }
    const dit = folder.getFolders();
    while (dit.hasNext()) { const d = dit.next(); if (!d.isTrashed()) walk(d, path ? path + ' / ' + d.getName() : d.getName()); }
  })(root, '');
  items.sort(function (a, b) { return (a.path + '\u0000' + a.name).localeCompare(b.path + '\u0000' + b.name); });
  return { traineeId: traineeId, folderUrl: root.getUrl(), updated: root.getLastUpdated().toISOString(), items: items };
}
function safeTargetName_(f) { try { return DriveApp.getFileById(f.getTargetId()).getName(); } catch (err) { return ''; } }
function safeTargetId_(f) { try { return f.getTargetId(); } catch (err) { return ''; } }

function exportWork_(traineeId, roles) {
  const rec = record_(traineeId); if (!rec) return { error: 'No workspace for this trainee yet' };
  const outDocs = {};
  roles.forEach(function (role) {
    const id = rec.files[role]; if (!id) return;
    try {
      const f = DriveApp.getFileById(id), mime = f.getMimeType();
      if (f.isTrashed()) { outDocs[role] = { name: f.getName(), error: 'in the trash' }; return; }
      let text = '';
      if (mime === MimeType.GOOGLE_DOCS) text = DocumentApp.openById(id).getBody().getText();
      else if (mime === MimeType.GOOGLE_SHEETS) {
        text = SpreadsheetApp.openById(id).getSheets().map(function (sh) {
          const rows = sh.getDataRange().getDisplayValues().filter(function (r) { return r.some(function (c) { return String(c).trim() !== ''; }); });
          return '## ' + sh.getName() + '\n' + rows.map(function (r) { return r.join('\t'); }).join('\n');
        }).join('\n\n');
      }
      outDocs[role] = { name: f.getName(), updated: f.getLastUpdated().toISOString(), text: text.slice(0, 60000) };
    } catch (err) { outDocs[role] = { error: String(err && err.message || err) }; }
  });
  return { traineeId: traineeId, docs: outDocs };
}

function childFolder_(parent, name) {
  const it = parent.getFoldersByName(name);
  if (!it.hasNext()) throw new Error('Folder not found in the master: ' + name);
  return it.next();
}
