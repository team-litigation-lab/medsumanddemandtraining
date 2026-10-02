/**
 * LSH Medsum & Demand — Case Workspace bridge (Google Apps Script).
 *
 * Runs as team-litigation@legalsupporthelp.com and owns every trainee's case folder, so trainers can open
 * any folder and see how it was arranged, and each document's version history shows how it was built.
 * The training portal (Cloudflare Worker) calls this web app with a shared secret to:
 *   provision — copy the master case folder for a trainee and share it with their company account
 *   inspect   — list a trainee's folder tree (names, places, last changed)
 *   export    — return the text of a trainee's work product (for the AI pre-review)
 *   list      — every trainee workspace
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
      case 'ping': return out_({ ok: true, account: Session.getEffectiveUser().getEmail(), master: DriveApp.getFolderById(CONFIG.MASTER_ID).getName() });
      case 'provision': return out_(provision_(req));
      case 'inspect': return out_(inspect_(req.traineeId));
      case 'export': return out_(exportWork_(req.traineeId, req.roles || []));
      case 'list': return out_(list_());
      default: return out_({ error: 'Unknown action' });
    }
  } catch (err) {
    return out_({ error: String(err && err.message || err) });
  }
}
function doGet() { return out_({ ok: true, service: 'LSH Case Workspace bridge' }); }
function out_(obj) { return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }

function record_(traineeId) {
  const raw = PropertiesService.getScriptProperties().getProperty('ws_' + traineeId);
  return raw ? JSON.parse(raw) : null;
}

function provision_(req) {
  const id = String(req.traineeId || '').trim(), email = String(req.email || '').trim().toLowerCase();
  if (!/^[a-z0-9-]{1,80}$/.test(id)) return { error: 'Bad trainee id' };
  if (!new RegExp('^[^@\\s]+@' + CONFIG.DOMAIN.replace(/\./g, '\\.') + '$').test(email)) return { error: 'Use your @' + CONFIG.DOMAIN + ' Google account' };
  const lock = LockService.getScriptLock(); lock.waitLock(30000);
  try {
    let rec = record_(id);
    let folder = null;
    if (rec) { try { folder = DriveApp.getFolderById(rec.folderId); if (folder.isTrashed()) folder = null; } catch (err) { folder = null; } }
    if (!folder) {
      const name = 'Whitfield Case — ' + String(req.name || id).slice(0, 60) + (req.batch ? ' (' + String(req.batch).slice(0, 30) + ')' : '');
      folder = DriveApp.getFolderById(CONFIG.TRAINEES_ID).createFolder(name);
      const files = {}, orig = {};
      copyTree_(DriveApp.getFolderById(CONFIG.MASTER_ID), folder, files, orig);
      rec = { traineeId: id, folderId: folder.getId(), files: files, orig: orig, emails: [], createdAt: new Date().toISOString() };
    }
    folder.setShareableByEditors(false);                         // trainees can't re-share client files
    if (rec.emails.indexOf(email) < 0) { folder.addEditor(email); rec.emails.push(email); }
    rec.email = email; rec.name = req.name || rec.name || ''; rec.batch = req.batch || rec.batch || '';
    PropertiesService.getScriptProperties().setProperty('ws_' + id, JSON.stringify(rec));
    return describe_(rec, folder);
  } finally { lock.releaseLock(); }
}

function copyTree_(src, dest, files, orig) {
  const fit = src.getFiles();
  while (fit.hasNext()) {
    const f = fit.next(), copy = f.makeCopy(f.getName(), dest);
    copy.setShareableByEditors(false);
    if (ROLES[f.getName()]) files[ROLES[f.getName()]] = copy.getId(); else orig[copy.getId()] = f.getName();   // the name it arrived with, for the review
  }
  const dit = src.getFolders();
  while (dit.hasNext()) { const d = dit.next(), sub = dest.createFolder(d.getName()); sub.setShareableByEditors(false); copyTree_(d, sub, files, orig); }
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
  const root = DriveApp.getFolderById(rec.folderId), items = [];
  (function walk(folder, path) {
    const fit = folder.getFiles();
    while (fit.hasNext()) {
      const f = fit.next(), mime = f.getMimeType();
      const isShortcut = mime === MimeType.SHORTCUT, orig = rec.orig || {};
      items.push({ path: path, name: f.getName(), type: isShortcut ? 'shortcut' : mime.replace('application/vnd.google-apps.', 'google-'),
                   updated: f.getLastUpdated().toISOString(), target: isShortcut ? safeTargetName_(f) : undefined,
                   orig: orig[isShortcut ? safeTargetId_(f) : f.getId()] });
    }
    const dit = folder.getFolders();
    while (dit.hasNext()) { const d = dit.next(); walk(d, path ? path + ' / ' + d.getName() : d.getName()); }
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

function list_() {
  const all = PropertiesService.getScriptProperties().getProperties(), out = [];
  Object.keys(all).forEach(function (k) {
    if (k.indexOf('ws_') !== 0) return;
    const r = JSON.parse(all[k]);
    out.push({ traineeId: r.traineeId, name: r.name, batch: r.batch, email: r.email, folderUrl: 'https://drive.google.com/drive/folders/' + r.folderId, createdAt: r.createdAt });
  });
  return { workspaces: out };
}

function childFolder_(parent, name) {
  const it = parent.getFoldersByName(name);
  if (!it.hasNext()) throw new Error('Folder not found in the master: ' + name);
  return it.next();
}
