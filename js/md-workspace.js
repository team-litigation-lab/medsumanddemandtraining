/* ============================================================
   🗂 Case Workspace: Dana Whitfield's file in each trainee's own Google Drive folder.
   Trainees get a copy of the master case folder (faxes and records as they arrive, unsorted,
   plus Google Docs and Sheets to build the work in), shared with their @legalsupporthelp.com
   account only. They sort and rename the file and build the chronology, summary, itemization,
   demand and exhibit index there; trainers open the folder to see how it was arranged and built.
   Submitting a day asks the Worker for an AI pre-review against the answer key.
   Worker: /api/workspace/* (worker.js). Drive side: build/workspace/apps-script (SETUP.md).
   Loaded after js/md-updates.js.
   ============================================================ */
(function(){
  const E = (s)=> String(s == null ? "" : s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const ROOT_URL = "https://drive.google.com/drive/folders/19TUcIzRsexjencclC235M1r1VXgTe10t";
  const ROLE_LABEL = {start:"00 START HERE: your tasks", audit:"Day 1 File Audit", chronology:"Medical Chronology (Sheet)", medsum:"Medical Summary",
    itemization:"Bills Itemization (Sheet)", demand:"Demand Letter (draft)", exhibits:"Exhibit Index", reply:"Reply to Keystone (draft)"};
  const ROLE_ICON = {start:"📌", audit:"📝", chronology:"📊", medsum:"📝", itemization:"📊", demand:"📝", exhibits:"📝", reply:"📝"};
  const WS = window.MD_WS = {who:"", data:null, loading:false, err:"", busy:{}, sel:"", tree:{}, treeErr:{}, keyOpen:false};

  const css = document.createElement("style"); css.id = "md-workspace-css"; css.textContent = `
.ws-intro{color:var(--ink-soft);font-size:14px;max-width:80ch;margin:0 0 16px;line-height:1.55;}
.ws-card{padding:16px 20px;margin-bottom:16px;}
.ws-card h3{margin:0 0 6px;color:var(--navy);font-size:16px;}
.ws-note{font-size:12.6px;color:var(--ink-soft);margin:8px 0 0;line-height:1.5;}
.ws-warn{border-left:4px solid var(--orange);}
.ws-ok{border-left:4px solid var(--success);}
.ws-form{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:10px;}
.ws-form input{flex:1 1 260px;max-width:380px;padding:9px 12px;border:1px solid var(--line);border-radius:8px;font:inherit;}
.ws-files{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px;margin-top:10px;}
.ws-files a{display:flex;gap:8px;align-items:center;padding:9px 12px;border:1px solid var(--line);border-radius:8px;text-decoration:none;color:var(--navy);font-size:13px;font-weight:600;background:#fff;}
.ws-files a:hover{border-color:var(--navy);}
.ws-day{padding:14px 18px;margin-bottom:12px;}
.ws-day-h{display:flex;justify-content:space-between;gap:10px;align-items:flex-start;flex-wrap:wrap;}
.ws-day-h b{color:var(--navy);font-size:15px;}
.ws-day p{font-size:13.2px;margin:6px 0 0;line-height:1.5;}
.ws-day .ws-links{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;}
.ws-day .ws-links a{font-size:12px;}
.ws-sub{font-size:12px;color:var(--ink-soft);margin-top:8px;}
.ws-lock{font-size:12px;color:var(--ink-soft);}
.ws-score{display:inline-block;min-width:44px;text-align:center;font-weight:800;border-radius:99px;padding:3px 9px;font-size:12.5px;color:#fff;background:var(--ink-soft);}
.ws-score.hi{background:var(--success);} .ws-score.mid{background:var(--orange);} .ws-score.lo{background:var(--danger);}
.ws-review{margin-top:10px;padding:10px 12px;border-radius:8px;background:rgba(38,43,69,.04);font-size:13px;}
.ws-review ul{margin:4px 0 0;padding-left:18px;}
.ws-review li{margin:2px 0;}
.ws-review .ws-h{font-weight:700;color:var(--navy);margin-top:8px;font-size:12.5px;}
.ws-checks{list-style:none;padding-left:0 !important;}
.ws-table{width:100%;border-collapse:collapse;font-size:13px;}
.ws-table th,.ws-table td{padding:8px 8px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top;}
.ws-table th{font-size:11.5px;text-transform:uppercase;letter-spacing:.04em;color:var(--ink-soft);}
.ws-table tr.sel td{background:rgba(219,132,55,.08);}
.ws-wrap{overflow-x:auto;}
.ws-tree{font-size:12.8px;margin-top:8px;}
.ws-tree .ws-fold{font-weight:700;color:var(--navy);margin:10px 0 3px;}
.ws-tree .ws-file{display:flex;gap:8px;padding:3px 0 3px 14px;border-left:2px solid var(--line);flex-wrap:wrap;}
.ws-tree .ws-file small{color:var(--ink-soft);}
.ws-tree .ok{color:var(--success);} .ws-tree .bad{color:var(--danger);}
.ws-key td{font-size:12.3px;}
@media (max-width:760px){ .ws-files{grid-template-columns:1fr;} }
`;
  document.head.appendChild(css);

  const whoKey = ()=> (state.isAdmin ? "a" : state.adminPreview ? "p" : "t") + ":" + (state.traineeId || "");
  const unlocked = (n)=> state.isAdmin || state.adminPreview || typeof dayUnlocked !== "function" || dayUnlocked(n);
  const scoreTag = (s)=> s == null ? `<span class="ws-score">–</span>` : `<span class="ws-score ${s>=85?"hi":s>=70?"mid":"lo"}">${s}</span>`;
  const when = (iso)=> iso ? new Date(iso).toLocaleString(undefined,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}) : "";

  async function call(path, payload){
    // The trainee view names its trainee, so it also works when the Worker runs without an admin passphrase.
    const me = !state.isAdmin && state.traineeId ? {traineeId: state.traineeId} : {};
    const r = await authFetch("/api/workspace/" + path, Object.assign(me, payload || {}));
    const j = await r.json().catch(()=>({}));
    if(!r.ok) throw new Error(j.error || `The portal answered ${r.status}.`);
    return j;
  }
  async function load(force){
    const who = whoKey();
    if(WS.loading || (!force && WS.data && WS.who === who)) return;
    WS.loading = true; WS.who = who; WS.err = "";
    try{ WS.data = await call("status"); }
    catch(e){ WS.data = {connected:false, unreachable:true}; WS.err = String(e.message || e); }
    WS.loading = false;
    if(state.view === "workspace") render();
  }
  window.mdWsReload = ()=>{ WS.data = null; WS.tree = {}; WS.treeErr = {}; load(true); render(); };

  /* ---------- trainee actions ---------- */
  window.mdWsProvision = async function(){
    const el = document.getElementById("wsEmail"), email = ((el && el.value) || "").trim().toLowerCase();
    const domain = (WS.data && WS.data.domain) || "legalsupporthelp.com";
    if(!email.endsWith("@" + domain)){ toast(`Use your @${domain} Google account.`); return; }
    WS.busy.provision = true; render();
    try{ const j = await call("provision", {email}); WS.data.ws = j.ws; toast("✅ Your case folder is ready. Check your email for the share notice, or open it here."); }
    catch(e){ toast("⚠ " + (e.message || e)); }
    WS.busy.provision = false; render();
  };
  window.mdWsSubmit = async function(day){
    if(!confirm(`Submit Day ${day} for review? Your trainer sees the folder as it is now, and you get an AI pre-review in about 30 seconds. You can keep working and resubmit.`)) return;
    WS.busy["d"+day] = true; render();
    try{
      const j = await call("submit", {day});
      WS.data.ws = j.ws;
      if(j.review){ WS.data.review = WS.data.review || {days:{}}; WS.data.review.days = WS.data.review.days || {}; WS.data.review.days[day] = j.review; }
      toast(j.note || `✅ Day ${day} submitted.`);
    }catch(e){ toast("⚠ " + (e.message || e)); }
    WS.busy["d"+day] = false; render();
  };

  /* ---------- trainer actions ---------- */
  window.mdWsSelect = function(id){ WS.sel = WS.sel === id ? "" : id; if(WS.sel && !WS.tree[id]) mdWsInspect(id); render(); };
  window.mdWsInspect = async function(id){
    WS.busy["t"+id] = true; WS.treeErr[id] = ""; render();
    try{ WS.tree[id] = await call("inspect", {traineeId:id}); }
    catch(e){ WS.treeErr[id] = String(e.message || e); }
    WS.busy["t"+id] = false; render();
  };
  window.mdWsReview = async function(id, day){
    WS.busy[`r${id}:${day}`] = true; render();
    try{
      const j = await call("review", {traineeId:id, day});
      const row = (WS.data.workspaces || []).find(x=>x.ws && x.ws.traineeId === id);
      if(row && j.review){ row.review = row.review || {days:{}}; row.review.days = row.review.days || {}; row.review.days[day] = j.review; }
      toast(j.note || `✅ Day ${day} reviewed.`);
    }catch(e){ toast("⚠ " + (e.message || e)); }
    WS.busy[`r${id}:${day}`] = false; render();
  };
  window.mdWsToggleKey = function(){ WS.keyOpen = !WS.keyOpen; render(); };

  /* ---------- pieces ---------- */
  function reviewHTML(rv){
    if(!rv) return "";
    const fixes = rv.fixes || [];
    return `<div class="ws-review"><div>${scoreTag(rv.score)} <b>AI pre-review</b> <small style="color:var(--ink-soft)">${E(when(rv.at))} · your trainer has the final say</small></div>
      ${rv.verdict ? `<p style="margin:6px 0 0">${E(rv.verdict)}</p>` : ""}
      ${(rv.strengths || []).length ? `<div class="ws-h">What's working</div><ul>${rv.strengths.map(s=>`<li>${E(s)}</li>`).join("")}</ul>` : ""}
      ${fixes.length ? `<div class="ws-h">Fix next</div><ul>${fixes.map(f=> typeof f === "string" ? `<li>${E(f)}</li>` : `<li>${E(f.what || "")}${f.where ? ` <small style="color:var(--ink-soft)">(${E(f.where)})</small>` : ""}</li>`).join("")}</ul>` : ""}
      ${(rv.checks || []).length ? `<div class="ws-h">Checklist</div><ul class="ws-checks">${rv.checks.map(c=>`<li>${c.ok ? "✅" : "❌"} ${E(c.item)}</li>`).join("")}</ul>` : ""}</div>`;
  }
  const fileLink = (ws, role)=>{ const f = ws && ws.files && ws.files[role]; return f && f.url ? `<a class="btn btn-ghost btn-sm" href="${E(f.url)}" target="_blank" rel="noopener">${ROLE_ICON[role] || "📄"} ${E(ROLE_LABEL[role] || f.name)} ↗</a>` : ""; };
  const howItWorks = `<div class="card ws-card"><h3>How it works</h3>
    <ol style="font-size:13px;margin:6px 0 0;padding-left:20px;line-height:1.6">
      <li><b>01 Incoming — unsorted</b> holds the file as it reaches the firm: faxes and records with unhelpful names, out of order, one duplicate. Day 1: sort each file into <b>02 Case File</b>, rename it with the LSH convention and Bates-order the records, and log every problem in the Day 1 File Audit.</li>
      <li><b>03 Work Product</b> holds the Docs and Sheets you build in, one day at a time: chronology and medical summary (Day 2), bills itemization (Day 3), the demand letter (Day 4), the exhibit index and the reply to Keystone (Day 5).</li>
      <li><b>04 Received after the demand</b> stays closed until Day 5. It holds Keystone's response.</li>
      <li>Work in the folder as you would on the job. When a day's work is done, <b>Submit</b> it here: your trainer sees the folder as it is, and you get an AI pre-review against the day's checklist. You can resubmit after fixing.</li>
    </ol>
    <p class="ws-note">🔒 This is a simulated case with fictional people, but treat it like a real client file: the folder is shared with you and your trainers only, and you can't share it on. Don't download it to a personal device.</p></div>`;

  /* ---------- trainee view ---------- */
  function traineePage(){
    const d = WS.data || {}, ws = d.ws, days = d.days || {}, reviews = (d.review && d.review.days) || {};
    let status;
    if(!WS.data || WS.loading) status = `<div class="card ws-card">Loading your case folder…</div>`;
    else if(d.workspaces) status = `<div class="card ws-card ws-warn"><h3>👁 Trainee view preview</h3><p class="ws-note" style="margin:0">Each trainee sees their own case folder here, with the day's tasks and Submit buttons. You're signed in as a trainer, so switch back to the Admin view to see every trainee's folder.</p></div>`;
    else if(!d.connected) status = `<div class="card ws-card ws-warn"><h3>The Case Workspace isn't switched on yet</h3><p class="ws-note" style="margin:0">Your trainer is connecting it to Google Drive. Until then, the same documents are in 📁 Documents.${WS.err && !d.unreachable ? ` (${E(WS.err)})` : ""}</p>
        <div class="ws-form"><button class="btn btn-ghost btn-sm" onclick="goto('casedocs')">📁 Open Documents</button><button class="btn btn-ghost btn-sm" onclick="mdWsReload()">↻ Check again</button></div></div>`;
    else if(!ws) status = `<div class="card ws-card"><h3>Create your case folder</h3>
        <p class="ws-note" style="margin:0">We'll copy Dana Whitfield's case file into a Google Drive folder that's shared with your company account only. It takes about a minute.</p>
        <div class="ws-form"><input id="wsEmail" type="email" autocomplete="email" placeholder="you@${E(d.domain || "legalsupporthelp.com")}" ${WS.busy.provision ? "disabled" : ""}>
          <button class="btn btn-primary" onclick="mdWsProvision()" ${WS.busy.provision ? "disabled" : ""}>${WS.busy.provision ? "Creating your folder…" : "Create my case folder"}</button></div>
        <p class="ws-note">Use your <b>@${E(d.domain || "legalsupporthelp.com")}</b> Google account, the one you sign in to Gmail with at work.</p></div>`;
    else status = `<div class="card ws-card ws-ok"><h3>📂 Your case folder</h3>
        <p class="ws-note" style="margin:0">Shared with <b>${E(ws.email)}</b>. Open it in Google Drive while you're signed in to that account.</p>
        <div class="ws-form"><a class="btn btn-primary" href="${E(ws.folderUrl)}" target="_blank" rel="noopener">Open my case folder ↗</a><button class="btn btn-ghost btn-sm" onclick="mdWsReload()">↻ Refresh</button></div>
        <div class="ws-files">${Object.keys(ROLE_LABEL).filter(r=>ws.files && ws.files[r]).map(r=>`<a href="${E(ws.files[r].url)}" target="_blank" rel="noopener">${ROLE_ICON[r]} ${E(ROLE_LABEL[r])}</a>`).join("")}</div></div>`;
    const canSubmit = !!(ws && d.connected && !d.workspaces);
    const dayCards = Object.keys(days).map(Number).sort((a,b)=>a-b).map(n=>{
      const spec = days[n], sub = ws && ws.submissions && ws.submissions[n], busy = WS.busy["d"+n], open = unlocked(n);
      return `<div class="card ws-day"><div class="ws-day-h"><b>Day ${n} · ${E(spec.title)}</b>
          ${!open ? `<span class="ws-lock">🔒 Opens with Day ${n}</span>` : canSubmit ? `<button class="btn ${sub ? "btn-ghost" : "btn-navy"} btn-sm" onclick="mdWsSubmit(${n})" ${busy ? "disabled" : ""}>${busy ? "Reviewing… about 30 s" : sub ? "Resubmit" : `Submit Day ${n}`}</button>` : ""}</div>
        <p>${E(spec.task)}</p>
        ${ws ? `<div class="ws-links">${(spec.roles || []).map(r=>fileLink(ws, r)).join("")}</div>` : ""}
        ${sub ? `<div class="ws-sub">Submitted ${E(when(sub.at))}${sub.count > 1 ? ` · ${sub.count} submissions` : ""}</div>` : ""}
        ${reviewHTML(reviews[n])}</div>`;
    }).join("");
    return `<p class="eyebrow">Case Workspace · Google Drive</p>
      <h1 style="color:var(--navy);font-size:26px;margin:6px 0 8px">🗂 Case Workspace</h1>
      <p class="ws-intro">Work Dana Whitfield's file the way you will on the job: in Google Drive, from the moment the faxes arrive to the demand going out. You sort and name the file, then build the chronology, medical summary, bills itemization, demand letter and exhibit index in your own folder. Your trainer can open it at any time to see how you arranged it and how you built the demand.</p>
      ${status}${dayCards}${howItWorks}`;
  }

  /* ---------- trainer view ---------- */
  function treeHTML(id){
    const t = WS.tree[id], key = (WS.data && WS.data.key && WS.data.key.files) || [];
    if(WS.busy["t"+id]) return `<p class="ws-note">Reading the folder…</p>`;
    if(WS.treeErr[id]) return `<p class="ws-note" style="color:var(--danger)">⚠ ${E(WS.treeErr[id])}</p>`;
    if(!t) return "";
    const byName = Object.fromEntries(key.map(k=>[k.name, k]));
    const groups = {}; (t.items || []).forEach(x=>{ (groups[x.path || ""] = groups[x.path || ""] || []).push(x); });
    let right = 0, wrong = 0, waiting = 0;
    const rows = Object.keys(groups).sort().map(p=>`<div class="ws-fold">📁 ${E(p || "(top of the folder)")} <small style="font-weight:500;color:var(--ink-soft)">${groups[p].length}</small></div>` + groups[p].map(x=>{
      const k = x.orig && byName[x.orig];
      let mark = "";
      if(k && x.type !== "shortcut"){
        const inPlace = p.split(" / ").pop() === k.belongs, stillIn = /^0[14] /.test(p);
        if(inPlace) right++; else if(stillIn) waiting++; else wrong++;
        mark = inPlace ? `<span class="ok">✓</span>` : stillIn ? `<span>…</span>` : `<span class="bad">✗</span>`;
      }
      const ic = x.type === "shortcut" ? "↪" : x.type === "google-document" ? "📝" : x.type === "google-spreadsheet" ? "📊" : "📄";
      return `<div class="ws-file">${mark}${ic} <span>${E(x.name)}</span>${x.target ? `<small>→ ${E(x.target)}</small>` : ""}${x.orig && x.orig !== x.name ? `<small>arrived as “${E(x.orig)}”</small>` : ""}${k && x.type !== "shortcut" ? `<small>key: ${E(k.is)} → ${E(k.belongs)}${k.bates ? `, ${E(k.bates)}` : ""}</small>` : ""}<small>· ${E(when(x.updated))}</small></div>`;
    }).join("")).join("");
    return `<div class="ws-note"><b>${right}</b> received file(s) in the right folder · <b>${wrong}</b> in the wrong folder · <b>${waiting}</b> not sorted yet (still in 01 Incoming or 04 Received after the demand). Folder last changed ${E(when(t.updated))}.</div>
      <div class="ws-tree">${rows || `<p class="ws-note">The folder is empty.</p>`}</div>`;
  }
  function adminPage(){
    const d = WS.data || {}, rows = (d.workspaces || []).slice().sort((a,b)=>String((a.trainee||{}).name||"").localeCompare(String((b.trainee||{}).name||""))), days = d.days || {};
    const dayNums = Object.keys(days).map(Number).sort((a,b)=>a-b);
    const conn = !WS.data || WS.loading ? `<div class="card ws-card">Loading…</div>`
      : d.connected ? `<div class="card ws-card ws-ok"><h3>✓ Connected to Google Drive</h3><p class="ws-note" style="margin:0">Trainees create their own folder from this page. Each one is a copy of the master case folder, owned by the firm's account and shared with the trainee only (they can't share it on). <a href="${ROOT_URL}" target="_blank" rel="noopener">Open the Case Workspace folder in Drive ↗</a> (team-litigation@ account).</p></div>`
      : `<div class="card ws-card ws-warn"><h3>Not connected yet</h3>
          <p class="ws-note" style="margin:0">The master case folder is ready in the team-litigation@ Drive (<a href="${ROOT_URL}" target="_blank" rel="noopener">open it ↗</a>). To switch the workspace on, follow <b>build/workspace/apps-script/SETUP.md</b> in the course repository (about 5 minutes):</p>
          <ol style="font-size:13px;margin:8px 0 0;padding-left:20px;line-height:1.6"><li>Signed in as team-litigation@, create an Apps Script project and paste in <code>Code.gs</code> and <code>appsscript.json</code>.</li><li>Run <code>setup()</code> once. It imports the faxes and records into the master folder, builds the two Sheets and logs a secret.</li><li>Deploy it as a web app: execute as <b>Me</b>, access <b>Anyone</b>. Copy the URL.</li><li>In Cloudflare, add the Worker secrets <code>WORKSPACE_URL</code> (that URL) and <code>WORKSPACE_SECRET</code> (the logged secret).</li></ol>
          ${WS.err && !/isn't connected/.test(WS.err) ? `<p class="ws-note">${E(WS.err)}</p>` : ""}<div class="ws-form"><button class="btn btn-ghost btn-sm" onclick="mdWsReload()">↻ Check again</button></div></div>`;
    const table = rows.length ? `<div class="card ws-card"><h3>Trainee folders <small style="font-weight:500;color:var(--ink-soft)">(${rows.length})</small></h3><div class="ws-wrap"><table class="ws-table">
        <thead><tr><th>Trainee</th><th>Google account</th>${dayNums.map(n=>`<th>Day ${n}</th>`).join("")}<th></th></tr></thead><tbody>
        ${rows.map(r=>{ const ws = r.ws || {}, tr = r.trainee || {}, rv = (r.review && r.review.days) || {}, id = ws.traineeId;
          return `<tr class="${WS.sel===id?"sel":""}"><td><b>${E(tr.name || ws.name || id)}</b><div style="font-size:11.5px;color:var(--ink-soft)">${E(tr.batch || ws.batch || "")}</div></td><td>${E(ws.email || "")}</td>
            ${dayNums.map(n=>{ const s = ws.submissions && ws.submissions[n]; return `<td>${rv[n] ? scoreTag(rv[n].score) : ""}${s ? `<div style="font-size:11px;color:var(--ink-soft)">sent ${E(when(s.at))}</div>` : rv[n] ? "" : `<span style="color:var(--ink-soft)">–</span>`}</td>`; }).join("")}
            <td style="white-space:nowrap">${ws.folderUrl ? `<a class="btn btn-ghost btn-sm" href="${E(ws.folderUrl)}" target="_blank" rel="noopener">Drive ↗</a> ` : ""}<button class="btn btn-sm ${WS.sel===id?"btn-navy":"btn-ghost"}" onclick="mdWsSelect('${E(id)}')">${WS.sel===id?"Close":"Review"}</button></td></tr>`; }).join("")}
        </tbody></table></div></div>`
      : (d.connected ? `<div class="card ws-card"><p class="ws-note" style="margin:0">No trainee has created a folder yet. They do it from 🗂 Workspace once their account is approved.</p></div>` : "");
    const sel = WS.sel && rows.find(r=>r.ws && r.ws.traineeId === WS.sel);
    const detail = sel ? (()=>{ const ws = sel.ws, rv = (sel.review && sel.review.days) || {}, id = ws.traineeId;
      return `<div class="card ws-card"><h3>${E((sel.trainee || {}).name || id)}: the folder now</h3>
        <div class="ws-form" style="margin-top:0"><a class="btn btn-ghost btn-sm" href="${E(ws.folderUrl)}" target="_blank" rel="noopener">Open in Drive ↗</a>${Object.keys(ROLE_LABEL).filter(r=>ws.files && ws.files[r] && r !== "start").map(r=>fileLink(ws, r)).join("")}<button class="btn btn-ghost btn-sm" onclick="mdWsInspect('${E(id)}')">↻ Re-read folder</button></div>
        ${treeHTML(id)}</div>
        ${dayNums.map(n=>`<div class="card ws-day"><div class="ws-day-h"><b>Day ${n} · ${E(days[n].title)}</b>
          <button class="btn btn-ghost btn-sm" onclick="mdWsReview('${E(id)}',${n})" ${WS.busy[`r${id}:${n}`] ? "disabled" : ""}>${WS.busy[`r${id}:${n}`] ? "Reviewing…" : rv[n] ? "↻ Run the AI review again" : "Run the AI review"}</button></div>
          ${ws.submissions && ws.submissions[n] ? `<div class="ws-sub">Submitted ${E(when(ws.submissions[n].at))}${ws.submissions[n].count > 1 ? ` · ${ws.submissions[n].count} submissions` : ""}</div>` : `<div class="ws-sub">Not submitted yet.</div>`}
          ${reviewHTML(rv[n])}</div>`).join("")}`; })() : "";
    const key = d.key ? `<div class="card ws-card"><div class="ws-day-h"><h3>🔑 Answer key <small style="font-weight:500;color:var(--ink-soft)">trainers only</small></h3><button class="btn btn-ghost btn-sm" onclick="mdWsToggleKey()">${WS.keyOpen ? "Hide" : "Show"}</button></div>
        ${WS.keyOpen ? `${dayNums.map(n=>`<div class="ws-h" style="font-weight:700;color:var(--navy);margin-top:10px">Day ${n} · ${E(days[n].title)}</div><ul style="font-size:12.8px;margin:4px 0 0;padding-left:18px">${((d.key.rubric || {})[n] || []).map(x=>`<li>${E(x)}</li>`).join("")}</ul>`).join("")}
          <div style="font-weight:700;color:var(--navy);margin-top:12px">Where each received file belongs</div>
          <div class="ws-wrap"><table class="ws-table ws-key"><thead><tr><th>Arrives as</th><th>What it is</th><th>Belongs in</th><th>Bates</th></tr></thead><tbody>${(d.key.files || []).map(f=>`<tr><td>${E(f.name)}</td><td>${E(f.is)}</td><td>${E(f.belongs)}</td><td>${E(f.bates)}</td></tr>`).join("")}</tbody></table></div>` : `<p class="ws-note" style="margin:0">The day-by-day expected results the AI pre-review scores against, and where every received file belongs.</p>`}</div>` : "";
    return `<p class="eyebrow">Case Workspace · Trainer view</p>
      <h1 style="color:var(--navy);font-size:26px;margin:6px 0 8px">🗂 Case Workspace</h1>
      <p class="ws-intro">Each trainee works Dana Whitfield's file in their own Google Drive folder, so you can see how they arranged the file and how they built the demand, not just their quiz scores. Open a trainee's folder to see every file where they put it and what it was called when it arrived, with a ✓ or ✗ against the answer key. Each submitted day has an AI pre-review; it's a starting point for your own review.</p>
      ${conn}${table}${detail}${key}`;
  }

  window.renderCaseWorkspace = function(){
    if(WS.who !== whoKey()){ WS.data = null; WS.sel = ""; WS.tree = {}; WS.treeErr = {}; }
    if(!WS.data && !WS.loading) setTimeout(()=>load(), 0);
    return state.isAdmin ? adminPage() : traineePage();
  };
})();
