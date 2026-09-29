/* ============================================================
   LSH Medsum & Demand Training — Skill Builders, the Case Document
   Library, the Training Tools hub (CMS, Call Simulator, Email),
   Handouts and the Case File. Built on the PD / CM courses' Skill Builder kit.
   Loaded after the main portal script: anything assigned to window
   here replaces the portal function of the same name.
   ============================================================ */
(function(){
"use strict";

/* ---------------- styles ---------------- */
const st = document.createElement("style"); st.id = "md-skillbuilders-css"; st.textContent = `
.md-part h3{margin:0 0 6px;color:var(--navy);font-size:15.5px}
.md-part .md-intro{font-size:13px;color:var(--ink-soft);margin:0 0 12px;max-width:80ch}
.md-scn{background:#F8F9FC;border-left:4px solid var(--navy);border-radius:10px;padding:12px 16px;margin:0 0 14px;font-size:13px;color:#37394A}
.md-scn b{color:var(--navy)}
.md-docs{border:1px dashed var(--line);border-radius:12px;padding:10px 14px;margin:0 0 14px;background:#FFFCF7}
.md-docs-h{font-size:11.5px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;color:var(--orange-deep);margin-bottom:6px}
.md-doc-row{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:6px 0;border-top:1px solid #F0EDE6;font-size:13px}
.md-doc-row:first-of-type{border-top:none}
.md-doc-row .t{font-weight:700;color:var(--ink)}.md-doc-row .d{font-size:12px;color:var(--ink-soft);font-weight:500}
.md-doc-row .btn{white-space:nowrap;flex-shrink:0}
.md-doc-row > div:first-child{min-width:0;flex:1}
.md-doc-row .cms{font-family:'IBM Plex Mono',monospace;font-size:10.5px;background:#EEF0F6;color:var(--navy);border-radius:999px;padding:2px 8px;white-space:nowrap}
.md-table{width:100%;border-collapse:collapse;font-size:12.8px;margin:6px 0 10px}
.md-table th,.md-table td{border:1px solid var(--line);padding:7px 9px;text-align:left;vertical-align:top}
.md-table th{background:#F3F4F9;color:var(--navy);font-size:12px}
.md-table select,.md-table input{font:inherit;font-size:12.5px;padding:5px 7px;border:1px solid var(--line);border-radius:7px;max-width:100%}
.md-table tr.ok td{background:#EEF7F1}.md-table tr.bad td{background:#FBEDEA}
.md-why{display:block;font-size:11.5px;color:var(--ink-soft);margin-top:3px;font-weight:500}
.md-res{margin-top:10px;font-size:13px}
.md-check{display:flex;gap:9px;align-items:flex-start;padding:7px 10px;border:1px solid var(--line);border-radius:9px;margin-bottom:6px;font-size:13px;background:#fff;cursor:pointer}
.md-check.ok{border-color:var(--success);background:#EEF7F1}.md-check.bad{border-color:var(--danger);background:#FBEDEA}
.md-calc{display:grid;grid-template-columns:minmax(0,1fr) 180px;gap:8px 12px;align-items:center;font-size:13px;margin:6px 0 10px}
.md-calc input{font:inherit;padding:7px 9px;border:1px solid var(--line);border-radius:8px;width:100%}
.md-calc input.ok{border-color:var(--success);background:#EEF7F1}.md-calc input.bad{border-color:var(--danger);background:#FBEDEA}
.md-ta{width:100%;min-height:130px;padding:10px 12px;border-radius:8px;border:1px solid var(--line);font-size:13px;font-family:inherit;resize:vertical}
.md-cms{border:1.5px solid var(--navy);border-radius:12px;padding:12px 16px;margin:14px 0;background:#F4F6FB}
.md-cms b{color:var(--navy)}
.md-cms .row{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:8px}
.md-cms input{font:inherit;padding:7px 9px;border:1px solid var(--line);border-radius:8px;min-width:200px}
.md-soon{font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;background:#FFF1DE;color:#9A5B00;border-radius:999px;padding:2px 8px;margin-left:6px}
.md-tools{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:14px;margin-bottom:16px}
.md-tool{padding:16px 18px;display:flex;flex-direction:column;gap:8px}
.md-tool.soon{opacity:.82}
.md-tool p{margin:0;font-size:13px;color:var(--ink-soft)}
.md-tool-h{display:flex;gap:12px;align-items:center}.md-tool-h b{color:var(--navy);font-size:15px}
.md-tool-ic{font-size:26px;width:46px;height:46px;border-radius:12px;background:#EEF0F6;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.md-badge{display:inline-block;font-size:11px;font-weight:700;border-radius:999px;padding:2px 9px;margin-top:3px}
.md-badge.live{background:#E3F4EA;color:#1D6B3C}.md-badge.soon{background:#FFF1DE;color:#9A5B00}
.md-tool-act{display:flex;gap:8px;flex-wrap:wrap;margin-top:auto}
.md-tool-url{font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--ink-soft);word-break:break-all}
.cl-lines-mini{display:flex;flex-wrap:wrap;gap:6px}.cl-lines-mini span{font-size:11.5px;background:#EEF0F6;color:var(--navy);border-radius:999px;padding:3px 9px}
.md-tool-note{font-size:12.3px!important;margin-top:auto!important}
.md-tool-admin{display:grid;grid-template-columns:90px minmax(0,1fr) 150px;gap:8px;align-items:center;margin-bottom:8px;font-size:13px}
.md-tool-admin input,.md-tool-admin select{font:inherit;padding:7px 9px;border:1px solid var(--line);border-radius:8px;min-width:0}
@media (max-width:600px){.md-tool-admin{grid-template-columns:1fr}}
#md-toolframe{position:fixed;left:0;right:0;bottom:0;top:0;z-index:9000;background:var(--paper,#F7F6F2);display:flex;flex-direction:column}
#md-toolframe[hidden]{display:none}
.md-tf-bar{display:flex;gap:10px;align-items:center;padding:6px 14px;background:#F3F4F9;border-bottom:1px solid var(--line);flex-wrap:wrap}
.md-tf-name{flex:1;min-width:0;font-size:13px;font-weight:700;color:var(--navy);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.md-tf-hint{font-size:11.5px;color:var(--ink-soft)}.md-tf-hint b{color:var(--navy)}
.md-tf-bar .btn-ghost{background:#fff}
/* the course's top bar (with its 🧰 Tools menu) stays above the tool frame: #app is its own
   stacking layer, so lift it and hide everything in it but the top bar while a tool is open.
   #app's own box still covers the page, so let clicks and scrolling pass through it to the tool. */
body.md-tf-open #app{z-index:9001;pointer-events:none}
body.md-tf-open #app > :not(.topbar):not(.view-mode-strip){visibility:hidden}
body.md-tf-open #app > .topbar,body.md-tf-open #app > .view-mode-strip{pointer-events:auto}
/* while a tool is open, only 🧰 Tools is highlighted in the nav */
body.md-tf-open .nav > button.active{background:transparent;color:#D7DAEC}
.md-tf-newtab{background:var(--orange)!important;border-color:var(--orange)!important}
.md-tf-body{flex:1;position:relative}
.md-tf-body iframe{position:absolute;inset:0;width:100%;height:100%;border:0;background:#fff}
body.md-tf-open{overflow:hidden}
#md-toolpill{position:fixed;right:18px;bottom:18px;z-index:8999;box-shadow:0 6px 22px rgba(0,0,0,.25);border-radius:999px}
#md-toolpill[hidden]{display:none}
@media (max-width:760px){.md-tf-hint,.md-tf-long{display:none}}
.md-radio{display:flex;flex-direction:column;gap:6px;margin:6px 0 10px}
.md-radio label{display:flex;gap:8px;align-items:flex-start;border:1px solid var(--line);border-radius:9px;padding:8px 10px;font-size:13px;background:#fff;cursor:pointer}
.md-skill-cta{margin-top:14px;border:1.5px solid var(--orange);background:#FFF6EC;border-radius:12px;padding:12px 16px;display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap}
.md-skill-cta b{color:var(--navy);font-size:14px}.md-skill-cta p{margin:2px 0 0;font-size:12.5px;color:#5A4A32}
.md-lib-folder{margin-bottom:18px}
.md-lib-folder h3{font-size:14px;color:var(--navy);margin:0 0 8px}
.md-key{font-size:11.8px;color:#6B2E26;background:#FBEDEA;border-radius:7px;padding:5px 8px;margin-top:5px;font-weight:600}
.md-filter{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 16px}
.md-lesson-visual{margin:12px 0 4px}
.svg-diagram-card .md-lesson-visual{text-align:left}
/* The course has two more nav items than EA/PA: on laptop widths collapse the search box to its icon (expands on focus) */
@media(min-width:761px) and (max-width:1600px){
  .topbar-search{flex:0 0 38px !important;min-width:38px !important;max-width:38px !important;overflow:hidden;transition:max-width .2s ease,flex-basis .2s ease}
  .topbar-search:focus-within{flex-basis:230px !important;max-width:230px !important}
  .nav button{padding:7px 7px;font-size:12.5px}
}
@media(max-width:700px){.md-calc{grid-template-columns:1fr}.md-doc-row{flex-wrap:wrap}}
`; document.head.appendChild(st);

/* ---------------- small helpers ---------------- */
const E = (s)=> (typeof esc==="function" ? esc(s) : String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])));
const money = (n)=> (n<0?"−":"") + "$" + Math.abs(Number(n)||0).toLocaleString("en-US",{minimumFractionDigits:2, maximumFractionDigits:2});
const mdState = ()=> (toolState.md = toolState.md || {});
const MD_UI = {};                                  // key -> config for the current tool
window.__mdUI = MD_UI;                             // read-only hook for automated answer-key tests
const toolOfKey = (key)=> key.split(":")[0];
const dayOfTool = (id)=> { const t = PRACTICE_TOOLS.find(x=>x.id===id); return t ? parseInt(String(t.relates).replace(/\D/g,""),10) : null; };
async function scorePart(key, score){ await bumpPracticeProgress(toolOfKey(key), score); if(score>=90 && typeof burstConfetti==="function") burstConfetti(); }
const part = (title, intro, inner)=> `<div class="md-part"><h3>${E(title)}</h3>${intro?`<p class="md-intro">${intro}</p>`:""}${inner}</div>`;
const scenario = (html)=> `<div class="md-scn">${html}</div>`;

/* ================================================================
   TRAINING TOOLS HUB — the portal embeds every LSH training platform.
   Each tool can be opened inside the portal (a persistent frame that
   keeps its session while you move around the lessons) or on its own
   in a new tab. Admins set each tool's address and status for everyone
   (shared key settings:tools).
   ================================================================ */
const MD_TOOL_DEFAULTS = [
  {id:"cms", icon:"🗂", name:"LSH Case Management System", short:"CMS", status:"live",
   url:"https://lshcasemanagementtraining-trainingcrm.pages.dev",
   desc:"Where the case work actually happens: open the client's case, keep the provider list, upload records under Medical and bills under Bills, save the chronology, summary, itemization and demand, and log Tasks and Notes for every follow-up.",
   evidence:"CMS Case ID", idHint:"CMS Case ID (e.g. LSH-2026-PI-000123)"},
  // Shared simulators on the LSH Training Portal (used by every program). The course
  // opens them with ?program=MD and the trainee's name and batch, so results carry them.
  // The Call Simulator has no Medsum & Demand call pack yet: it stays "coming soon" until an
  // admin switches it to Live in 🧰 Tools once the pack is on the Training Portal.
  {id:"calls", icon:"📞", name:"Call Simulator (LSH Training Portal)", short:"Call Simulator", status:"coming",
   url:"https://cm-training-activity.pages.dev/simulators/call.html", portalSim:true,
   desc:"Live practice calls, spoken aloud, on the LSH Training Portal. A Medsum & Demand call pack (records and billing offices, the client, the adjuster) is planned; until it's live, practise these calls in 🔥 Live Roleplay and in each Skill Builder's live call.",
   evidence:"Score", idHint:"Score (e.g. 82%)"},
  {id:"email", icon:"✉️", name:"Email Workspace (LSH Training Portal)", short:"Email Workspace", status:"live",
   url:"https://cm-training-activity.pages.dev/simulators/email.html", portalSim:true,
   desc:"A Gmail-style practice inbox (generate one for your program): create labels, clear the inbox with one decision per email, reply, forward and report phishing. Graded on filing, security, triage and writing.",
   evidence:"Score", idHint:"Score"}
];
function mdTool(id){
  const d = MD_TOOL_DEFAULTS.find(t=>t.id===id); if(!d) return null;
  const o = ((state.toolSettings||{})[id])||{};
  const url = String(o.url!=null ? o.url : d.url || "").trim().replace(/\/+$/,"");
  const status = o.status || d.status;
  return Object.assign({}, d, {url, status, live: status==="live" && /^https:\/\//i.test(url)});
}
window.mdTool = mdTool;
function toolHref(t){
  if(t.id!=="cms" && !t.portalSim) return t.url;
  // The CMS serves every LSH program: ?program=md tags the Medsum & Demand course's saved cases,
  // and from=md lets a registered trainee in with just their name (filled in from name= and batch=).
  const q = new URLSearchParams(t.id==="cms" ? {program:"md", from:"md"} : {program:"MD"});
  const name = String(state.certName || state.traineeName || "").trim(), batch = String(state.traineeBatch || "").trim();
  if(name && !state.isAdmin) q.set("name", name);
  if(batch && !state.isAdmin) q.set("batch", batch);
  return t.url + (t.url.includes("?") ? "&" : "?") + q.toString();
}
window.mdCmsUrl = function(){ return mdTool("cms").url; };
async function loadToolSettings(){
  try{ const s = await sharedGet("settings:tools"); if(s && typeof s==="object") state.toolSettings = s.tools || s; }catch(e){}
}

/* ---- the persistent in-portal frame (lives outside #app, so render() never reloads it) ---- */
const frames = {};                  // tool id → iframe
let frameShell = null, currentFrame = null;
function ensureShell(){
  if(frameShell) return frameShell;
  frameShell = document.createElement("div");
  frameShell.id = "md-toolframe"; frameShell.hidden = true;
  // The tool list lives in the course's top bar (🧰 Tools menu); the frame opens under it,
  // so the course navigation stays on screen while a tool is open.
  frameShell.innerHTML = `<div class="md-tf-bar"><span class="md-tf-name"></span>
    <span class="md-tf-hint">Sign-in won't stay? Use <b>New tab</b>.</span>
    <button class="btn btn-navy btn-sm md-tf-newtab" onclick="openTool(null,'tab')">New tab ↗</button>
    <button class="btn btn-ghost btn-sm" onclick="closeToolFrame()">✕ Close<span class="md-tf-long"> and back to training</span></button></div>
    <div class="md-tf-body"></div>`;
  document.body.appendChild(frameShell);
  const pill = document.createElement("button");
  pill.id = "md-toolpill"; pill.hidden = true; pill.className = "btn btn-navy";
  pill.onclick = ()=> openTool(currentFrame);
  document.body.appendChild(pill);
  document.addEventListener("keydown", e=>{ if(e.key==="Escape" && !frameShell.hidden) closeToolFrame(); });
  window.addEventListener("resize", placeFrame);
  return frameShell;
}
// Start the frame just under the course's top bar.
function placeFrame(){
  if(!frameShell || frameShell.hidden) return;
  const tb = document.querySelector(".topbar");
  const top = tb ? Math.max(0, Math.round(tb.getBoundingClientRect().bottom)) : 0;
  frameShell.style.top = top + "px";
}
function paintShell(){
  const t = mdTool(currentFrame);
  frameShell.querySelector(".md-tf-name").textContent = t ? `${t.icon} ${t.name.replace(/ \(LSH Training Portal\)$/,"")}` : "";
  Object.entries(frames).forEach(([id,f])=>{ f.style.display = id===currentFrame ? "block" : "none"; });
}
// extra: an optional query string for this opening, e.g. "mock=MC-04" opens that CMS Training Library case.
window.openTool = function(id, mode, extra){
  id = id || currentFrame || "cms";
  const t = mdTool(id);
  if(!t){ return; }
  if(!t.live){ toast(`${t.icon} ${t.name} is coming soon. For now, log this step as a Task in the CMS.`); return; }
  let href = toolHref(t);
  if(extra) href += (href.includes("?") ? "&" : "?") + extra;
  if(mode==="tab"){ window.open(href, "_blank", "noopener"); return; }
  ensureShell();
  if(!frames[id] || frames[id].dataset.src !== href){
    if(frames[id]) frames[id].remove();
    const f = document.createElement("iframe");
    f.src = href; f.dataset.src = href; f.title = t.name;
    // microphone: the Call Simulator listens when trainees answer by voice
    f.setAttribute("allow", "microphone; autoplay; clipboard-read; clipboard-write; fullscreen");
    f.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    frameShell.querySelector(".md-tf-body").appendChild(f);
    frames[id] = f;
  }
  currentFrame = id; paintShell();
  frameShell.hidden = false; document.body.classList.add("md-tf-open");
  window.scrollTo(0, 0); placeFrame();
  document.getElementById("md-toolpill").hidden = true;
  if(typeof render==="function") repaintToolsMenu();
};
window.closeToolFrame = function(){
  if(!frameShell) return;
  frameShell.hidden = true; document.body.classList.remove("md-tf-open");
  repaintToolsMenu();
  const t = mdTool(currentFrame), pill = document.getElementById("md-toolpill");
  if(t && pill){ pill.textContent = `${t.icon} Return to ${t.short}`; pill.hidden = false; }
};
window.openCms = function(mode){ openTool("cms", mode); };

/* Tool step: the trainee does the work in a training platform, then logs the ID here.
   A tool that isn't live yet falls back to a CMS Task so no step is ever blocked. */
function toolStep(toolId, key, what){
  const t = mdTool(toolId), saved = ((state.cmsLog||{})[key]||{}), k = key.replace(/\W/g,"_");
  const fallback = !t.live && toolId!=="cms";
  return `<div class="md-cms"><b>${t.icon} Do this in the ${E(t.name)}</b>${t.live?"":` <span class="md-soon">coming soon</span>`}
    <p style="font-size:12.8px;margin:6px 0 0;color:#37394A">${what}</p>
    ${fallback?`<p style="font-size:12.3px;margin:6px 0 0;color:var(--ink-soft)">Until the ${E(t.short)} platform is live, add this as a <b>Task</b> in the CMS case and log your CMS Case ID below.</p>`:""}
    <div class="row">
      ${t.live?`<button class="btn btn-navy btn-sm" onclick="openTool('${toolId}')">Open ${E(t.short)}</button><button class="btn btn-ghost btn-sm" onclick="openTool('${toolId}','tab')" title="Open in a new tab">↗</button>`
              :`<button class="btn btn-navy btn-sm" onclick="openTool('cms')">Open CMS</button>`}
      <input id="cmsId_${k}" placeholder="${E(fallback?mdTool("cms").idHint:t.idHint)}" value="${E(saved.caseId||"")}">
      <button class="btn btn-ghost btn-sm" onclick="mdLogCms('${key}','${fallback?"cms":toolId}')">Log my work</button>
      <span id="cmsLogged_${k}" style="font-size:12px;color:var(--success)">${saved.at?`✓ Logged ${fmtDate(saved.at)}`:""}</span>
    </div></div>`;
}
const cmsStep = (key, what)=> toolStep("cms", key, what);
window.mdToolStep = toolStep;
window.mdLogCms = async function(key, platform){
  const el = document.getElementById("cmsId_"+key.replace(/\W/g,"_"));
  const v = (el && el.value || "").trim();
  const t = mdTool(platform||"cms");
  if(v.length < 3){ toast(`Enter the ${t.evidence} the ${t.short} gave you when you saved.`); return; }
  state.cmsLog = state.cmsLog || {};
  state.cmsLog[key] = {caseId:v, at:new Date().toISOString(), tool:toolOfKey(key), platform:t.id};
  await storeSet("cms-log", state.cmsLog);
  const s = document.getElementById("cmsLogged_"+key.replace(/\W/g,"_")); if(s) s.textContent = "✓ Logged just now";
  toast(`Logged. Your trainer can check it in the ${t.short}.`);
};

/* A document packet: the exact files a Skill Builder part is built on. */
function docPacket(ids, title){
  const docs = ids.map(id=>mdDoc(id)).filter(Boolean);
  if(!docs.length) return "";
  return `<div class="md-docs"><div class="md-docs-h">📁 ${E(title||"Source documents for this part")}</div>
    ${docs.map(d=>`<div class="md-doc-row"><div><span class="t">${E(d.title)}</span><div class="d">${E(d.desc)}</div>${state.isAdmin && d.key ? `<div class="md-key">🔑 Trainer key: ${E(d.key)}</div>` : ""}</div>
      <div style="display:flex;gap:6px;align-items:center"><span class="cms" title="CMS upload category">CMS: ${E(d.cms)}</span><a class="btn btn-ghost btn-sm" href="${mdDocUrl(d)}" target="_blank" rel="noopener">Open</a></div></div>`).join("")}
  </div>`;
}
window.mdDocPacket = docPacket;

/* ---------------- building block: flag table ---------------- */
function flagTable(key, rows, options){
  MD_UI[key] = {type:"flags", rows, options};
  const st = mdState()[key] = mdState()[key] || {};
  return `<table class="md-table" id="tbl_${key.replace(/\W/g,"_")}"><thead><tr><th>Item</th><th>What the documents show</th><th style="width:170px">Your call</th></tr></thead><tbody>
    ${rows.map((r,i)=>`<tr id="row_${key.replace(/\W/g,"_")}_${i}"><td><b>${E(r.item)}</b></td><td>${E(r.shows)}<span class="md-why" id="why_${key.replace(/\W/g,"_")}_${i}"></span></td>
      <td><select onchange="mdSet('${key}',${i},this.value)"><option value="">— choose —</option>${options.map(o=>`<option ${st[i]===o?"selected":""}>${E(o)}</option>`).join("")}</select></td></tr>`).join("")}
  </tbody></table><button class="btn btn-ghost btn-sm" onclick="mdCheckFlags('${key}')">Check my calls</button><div class="md-res" id="res_${key.replace(/\W/g,"_")}"></div>`;
}
window.mdSet = function(key, i, v){ const s = mdState()[key] = mdState()[key] || {}; s[i] = v; };
window.mdCheckFlags = async function(key){
  const cfg = MD_UI[key], s = mdState()[key]||{}, k = key.replace(/\W/g,"_");
  if(cfg.rows.some((_,i)=>!s[i])){ toast("Make a call on every row first."); return; }
  let ok = 0;
  cfg.rows.forEach((r,i)=>{ const good = s[i]===r.answer; if(good) ok++;
    const tr = document.getElementById(`row_${k}_${i}`); if(tr){ tr.classList.toggle("ok",good); tr.classList.toggle("bad",!good); }
    const w = document.getElementById(`why_${k}_${i}`); if(w) w.textContent = (good?"✓ ":"✗ Correct call: "+r.answer+" — ") + r.why; });
  const score = Math.round(ok/cfg.rows.length*100);
  document.getElementById("res_"+k).innerHTML = `<b style="color:${score>=80?"var(--success)":"var(--danger)"}">${ok}/${cfg.rows.length} correct (${score}%)</b>`;
  await scorePart(key, score);
};

/* ---------------- building block: sorter (assign each item to a zone) ---------------- */
function sorter(key, items, zones, colLabel){
  MD_UI[key] = {type:"sort", items, zones};
  const st = mdState()[key] = mdState()[key] || {};
  return `<table class="md-table" id="tbl_${key.replace(/\W/g,"_")}"><thead><tr><th>${E(colLabel||"Document / item")}</th><th style="width:240px">Where does it go?</th></tr></thead><tbody>
    ${items.map((it,i)=>{ const d = it.doc ? mdDoc(it.doc) : null; return `<tr id="row_${key.replace(/\W/g,"_")}_${i}"><td><b>${E(it.t)}</b>${d?` <a href="${mdDocUrl(d)}" target="_blank" rel="noopener" style="font-size:12px">open ↗</a>`:""}<span class="md-why" id="why_${key.replace(/\W/g,"_")}_${i}"></span></td>
      <td><select onchange="mdSet('${key}',${i},this.value)"><option value="">— choose —</option>${zones.map(z=>`<option ${st[i]===z?"selected":""}>${E(z)}</option>`).join("")}</select></td></tr>`; }).join("")}
  </tbody></table><button class="btn btn-ghost btn-sm" onclick="mdCheckSort('${key}')">Check my sort</button><div class="md-res" id="res_${key.replace(/\W/g,"_")}"></div>`;
}
window.mdCheckSort = async function(key){
  const cfg = MD_UI[key], s = mdState()[key]||{}, k = key.replace(/\W/g,"_");
  if(cfg.items.some((_,i)=>!s[i])){ toast("Place every item first."); return; }
  let ok = 0;
  cfg.items.forEach((it,i)=>{ const good = s[i]===it.z; if(good) ok++;
    const tr = document.getElementById(`row_${k}_${i}`); if(tr){ tr.classList.toggle("ok",good); tr.classList.toggle("bad",!good); }
    const w = document.getElementById(`why_${k}_${i}`); if(w) w.textContent = (good?"✓ ":"✗ Goes to: "+it.z+" — ") + (it.why||""); });
  const score = Math.round(ok/cfg.items.length*100);
  document.getElementById("res_"+k).innerHTML = `<b style="color:${score>=80?"var(--success)":"var(--danger)"}">${ok}/${cfg.items.length} placed correctly (${score}%)</b>`;
  await scorePart(key, score);
};

/* ---------------- building block: checklist (select all that apply) ---------------- */
function checklist(key, items, btnLabel){
  MD_UI[key] = {type:"check", items};
  const st = mdState()[key] = mdState()[key] || {};
  return `<div id="chk_${key.replace(/\W/g,"_")}">${items.map((it,i)=>`<label class="md-check" id="row_${key.replace(/\W/g,"_")}_${i}"><input type="checkbox" ${st[i]?"checked":""} onchange="mdSet('${key}',${i},this.checked)"><span>${E(it.t)}<span class="md-why" id="why_${key.replace(/\W/g,"_")}_${i}"></span></span></label>`).join("")}</div>
    <button class="btn btn-ghost btn-sm" onclick="mdCheckList('${key}')">${E(btnLabel||"Check my selections")}</button><div class="md-res" id="res_${key.replace(/\W/g,"_")}"></div>`;
}
window.mdCheckList = async function(key){
  const cfg = MD_UI[key], s = mdState()[key]||{}, k = key.replace(/\W/g,"_");
  let ok = 0;
  cfg.items.forEach((it,i)=>{ const picked = !!s[i], good = picked===!!it.ok; if(good) ok++;
    const row = document.getElementById(`row_${k}_${i}`); if(row){ row.classList.toggle("ok", good); row.classList.toggle("bad", !good); }
    const w = document.getElementById(`why_${k}_${i}`); if(w) w.textContent = (it.ok?"Should be selected — ":"Should NOT be selected — ") + (it.why||""); });
  const score = Math.round(ok/cfg.items.length*100);
  document.getElementById("res_"+k).innerHTML = `<b style="color:${score>=80?"var(--success)":"var(--danger)"}">${ok}/${cfg.items.length} right (${score}%)</b>`;
  await scorePart(key, score);
};

/* ---------------- building block: calculator ---------------- */
function calc(key, fields, afterCheck){
  MD_UI[key] = {type:"calc", fields, afterCheck};
  const st = mdState()[key] = mdState()[key] || {};
  return `<div class="md-calc">${fields.map((f,i)=>`<label for="calc_${key.replace(/\W/g,"_")}_${i}">${f.label}</label>
      <input id="calc_${key.replace(/\W/g,"_")}_${i}" type="${f.type||"number"}" step="0.01" value="${E(st[i]==null?"":st[i])}" oninput="mdSet('${key}',${i},this.value)" placeholder="${f.type==="date"?"":f.unit?"0":"0.00"}">`).join("")}</div>
    <button class="btn btn-ghost btn-sm" onclick="mdCheckCalc('${key}')">Check my numbers</button><div class="md-res" id="res_${key.replace(/\W/g,"_")}"></div>`;
}
window.mdCheckCalc = async function(key){
  const cfg = MD_UI[key], s = mdState()[key]||{}, k = key.replace(/\W/g,"_");
  let ok = 0; const notes = [];
  cfg.fields.forEach((f,i)=>{
    const el = document.getElementById(`calc_${k}_${i}`); const raw = el ? el.value : s[i];
    let good;
    if(f.type==="date") good = raw===f.answer;
    else { const v = parseFloat(String(raw).replace(/[$,\s]/g,"")); good = !isNaN(v) && Math.abs(v - f.answer) <= (f.tol==null?1:f.tol); }
    const shown = f.type==="date" ? f.answer : f.unit ? `${f.answer}${f.unit==="%"?"%":" "+f.unit}` : money(f.answer);
    if(good) ok++; else notes.push(`<li><b>${f.label.replace(/<[^>]+>/g,"")}:</b> expected ${shown}${f.hint?` — ${f.hint}`:""}</li>`);
    if(el){ el.classList.toggle("ok",good); el.classList.toggle("bad",!good); }
  });
  const score = Math.round(ok/cfg.fields.length*100);
  document.getElementById("res_"+k).innerHTML = `<b style="color:${score>=80?"var(--success)":"var(--danger)"}">${ok}/${cfg.fields.length} correct (${score}%)</b>${notes.length?`<ul style="margin:6px 0 0;padding-left:18px">${notes.join("")}</ul>`:""}${cfg.afterCheck?`<div style="margin-top:8px">${cfg.afterCheck}</div>`:""}`;
  await scorePart(key, score);
};

/* ---------------- building block: single choice ---------------- */
function choice(key, opts){
  MD_UI[key] = {type:"choice", opts};
  const st = mdState()[key] = mdState()[key] || {};
  return `<div class="md-radio">${opts.map((o,i)=>`<label><input type="radio" name="rad_${key.replace(/\W/g,"_")}" ${st.v===i?"checked":""} onchange="mdSetChoice('${key}',${i})"><span>${o}</span></label>`).join("")}</div>`;
}
window.mdSetChoice = function(key, i){ (mdState()[key] = mdState()[key]||{}).v = i; };
const choiceText = (key)=>{ const c = MD_UI[key], s = mdState()[key]; return c && s && s.v!=null ? c.opts[s.v].replace(/<[^>]+>/g,"") : "(no option selected)"; };

/* ---------------- building block: AI-graded writing ---------------- */
function aiTask(key, cfg){
  MD_UI[key] = Object.assign({type:"ai"}, cfg);
  return `<label style="font-size:12.8px;font-weight:700;color:var(--navy);display:block;margin:4px 0 5px">${E(cfg.label)}</label>
    <textarea class="md-ta" id="ta_${key.replace(/\W/g,"_")}" style="min-height:${cfg.rows||150}px" placeholder="${E(cfg.placeholder||"Write it exactly as you would send or file it…")}"></textarea>
    <button class="btn btn-navy btn-sm" style="margin-top:8px" onclick="mdGrade('${key}', this)">Get AI review</button>
    <div id="ai_${key.replace(/\W/g,"_")}" style="margin-top:10px"></div>`;
}
window.mdGrade = async function(key, btn){
  const cfg = MD_UI[key], k = key.replace(/\W/g,"_");
  const ta = document.getElementById("ta_"+k); const text = (ta && ta.value || "").trim();
  const out = document.getElementById("ai_"+k);
  if(text.length < 40){ toast("Write out your full answer first."); return; }
  const tool = toolOfKey(key), day = dayOfTool(tool);
  if(!(await useLabAttempt(day, key))) return;
  if(btn){ btn.disabled = true; btn.textContent = "Reviewing…"; }
  out.innerHTML = `<div class="ai-loading">Reviewing your work against the case file…</div>`;
  const extra = typeof cfg.extra==="function" ? cfg.extra() : "";
  try{
    const report = await runRubricEvaluation(cfg.exercise || cfg.label,
      `CASE FILE (Dana Whitfield · MVA-DW-2026-031):\n${CLIENT_DOSSIER_MD}\n\nEXERCISE CONTEXT:\n${cfg.context}${extra?`\n\nTRAINEE'S EARLIER SELECTIONS:\n${extra}`:""}`,
      text, cfg.criteria);
    out.innerHTML = renderEvaluationReport(report, day);
    await bumpPracticeProgress(tool, report.totalScore);
  }catch(e){ out.innerHTML = renderAiErrorBlock(e, "Couldn't review this yet"); }
  if(btn){ btn.disabled = false; btn.textContent = "Get AI review"; }
};

/* ================================================================
   THE SKILL BUILDERS — one per day, all on the Dana Whitfield file
   (keys come from build/md_casefile.js and the documents in documents/)
   ================================================================ */
const TOOLS = {};
const FLAGS7 = ["Routine entry — no special flag","Prior injury / pre-existing","Gap in treatment (30+ days)","Objective diagnostic finding","Causation opinion","Procedure (injection / surgery)","MMI / future care"];
const POS = (n)=> Array.from({length:n}, (_,i)=> String(i+1));

/* ---------- DAY 1 · File Intake & Records Audit ---------- */
TOOLS.mdIntake1 = ()=>[
  {label:"File Handoff Audit", html: part("A. File Handoff Audit",
    "Marcus Webb has handed you Dana Whitfield's file for the medsum and the demand. Before you build anything, check the file against the documents — not against the handoff memo's own summary. Make a call on every row.",
    scenario(`<b>Scenario:</b> Monday 10/05/2026. Dana reached MMI on 08/21/2026 and Marcus requested every provider's records and bills on 08/24/2026. Attorney Bennett wants the demand out by Friday.`)
    + docPacket(["DW01","DW02","DW03","DW04","DW06","DW07","DW10","DW11","DW12","DW13","DW14","DW15","DW22","DW25","DW26"], "The file as handed off")
    + flagTable("mdIntake1:flags", [
      {item:"Date of incident", shows:"Client intake summary: 03/15/2026. Police report LPD-26-031477 and the ED record: 03/14/2026.", answer:"Inconsistent", why:"The police report and the ED record are the source: 03/14/2026. Correct the intake notes and the CMS so the wrong date never reaches the demand."},
      {item:"Liability", shows:"Keystone's letter of 04/02/2026 accepts liability 100%.", answer:"OK", why:"Liability is accepted in writing — the demand focuses on damages."},
      {item:"Policy limits", shows:"Keystone's limits letter of 07/15/2026: $100,000 per person / $300,000 per accident.", answer:"OK", why:"Confirmed in writing — the attorney has what she needs to set the demand."},
      {item:"HIPAA authorization", shows:"Signed 03/18/2026; valid for one year (to 03/18/2027).", answer:"OK", why:"In force for every request you still need to make."},
      {item:"Prior injury history", shows:"Intake summary: prior back problems “none really, maybe a strain a while back.” Harbor Spine records WHITFIELD 0010–0011: 3 visits in 01/2025 for a low back strain.", answer:"Inconsistent", why:"The records control. Keep the 2025 records in the file and flag the prior low back strain to the attorney."},
      {item:"Riverside Medical Center (ED)", shows:"Records WHITFIELD 0001–0009; UB-04 itemized statement; Riverside Emergency Physicians' separate CMS-1500 statement.", answer:"OK", why:"Records and both bills from the ED visit (facility and physician group) are in."},
      {item:"Harbor Spine & Chiropractic", shows:"2026 records WHITFIELD 0012–0038 (initial exam through the 05/14 discharge); ledger received; letter of protection on file.", answer:"OK", why:"Complete: first visit, re-evaluation, daily notes and discharge, plus the ledger."},
      {item:"Clearview Imaging (MRI)", shows:"MRI report WHITFIELD 0039–0041; ledger received.", answer:"OK", why:"The report and the ledger are in (the ledger's duplicate line is Day 3's job)."},
      {item:"Summit Orthopedic", shows:"Records WHITFIELD 0042–0059: consult 04/20, follow-up 08/21 with MMI and future care; ledger received.", answer:"OK", why:"Includes the two sentences the demand needs most: causation (p. 55) and future care (p. 57)."},
      {item:"Bayside Pain Management", shows:"Records WHITFIELD 0060–0066 received. Billing: a balance-due statement of $4,325.00 — no dates of service, no CPT codes.", answer:"Missing", why:"The itemized bill is missing. The ESI is the largest charge — request the itemized statement with dates of service and CPT codes today."},
      {item:"Lost wages", shows:"Lakeside USD payroll verification: 14 workdays × $224.00.", answer:"OK", why:"Verified by the employer, and the off-work note and return-to-work release are in the Harbor Spine records (pp. 15, 26)."},
      {item:"Client impact statement", shows:"Signed by Dana on 09/30/2026.", answer:"OK", why:"Ready for the non-economic damages section."}
    ], ["OK","Missing","Inconsistent","Needs follow-up"]))},
  {label:"Today's Plan", html: part("B. What do you do today?",
    "Select everything a Demand Specialist should do on 10/05. Leave out anything that is wrong, premature, or someone else's decision.",
    checklist("mdIntake1:actions", [
      {t:"Correct the date of incident to 03/14/2026 in the intake notes and the CMS, citing the police report.", ok:true, why:"Fix the source now so the wrong date can't spread into the medsum and the demand."},
      {t:"Request Bayside's itemized bill with dates of service, CPT codes and charges, and calendar a follow-up.", ok:true, why:"The specials can't be finished without it."},
      {t:"Flag the 2025 low back treatment (WHITFIELD 0010–0011) to Attorney Bennett.", ok:true, why:"The attorney must know about prior injuries before the adjuster raises them."},
      {t:"Confirm the Bates-numbered set runs WHITFIELD 0001–0066 with no missing pages before starting the chronology.", ok:true, why:"Every chronology row will cite these pages."},
      {t:"Call Dana to confirm her provider list, asking open questions and without suggesting answers.", ok:true, why:"A provider she forgot means missing records and bills."},
      {t:"Leave the 2025 chiropractic records out of the file because they are from before the accident.", ok:false, why:"Prior records stay in the file and are flagged, never removed."},
      {t:"Start the specials using Bayside's balance-due statement and fix it later.", ok:false, why:"A balance-only statement can't be itemized; wait for the itemized bill."},
      {t:"Email the complete records set to Dana's personal email so she can check it.", ok:false, why:"Minimum necessary and secure channels only; she doesn't need the full chart to confirm her providers."},
      {t:"Ask Keystone for the policy limits again.", ok:false, why:"Keystone confirmed the limits in writing on 07/15/2026."},
      {t:"Tell Bayside's billing office the expected demand amount so they know they'll be paid.", ok:false, why:"Never share demand or settlement amounts with providers."}
    ], "Check my plan"))},
  {label:"Itemized Bill Request", html: part("C. Request Bayside's itemized bill",
    "Write the email you would send to Bayside Pain Management's billing office today. It should get exactly what the demand needs, with a date.",
    scenario(`<b>What you know:</b> Bayside billing contact Carla Ruiz, (555) 318-9014. Patient Dana Whitfield, DOB 01/09/1984. Visits: 06/26/2026 new-patient evaluation and 07/10/2026 C5-6 interlaminar ESI. Balance-due statement received 08/28/2026 shows $4,325.00 with no detail. HIPAA authorization signed 03/18/2026 (on file with Bayside). Bayside treated on a letter of protection.`)
    + docPacket(["DW22","DW03"], "Source documents")
    + aiTask("mdIntake1:request", {
      label:"Your email to Bayside's billing office",
      exercise:"File Intake & Records Audit — itemized bill request",
      rows:170,
      context:"Day 1 (Mon 10/05/2026). Dana Whitfield's file was handed to the trainee for the medsum and demand. Bayside Pain Management sent only a balance-due statement ($4,325.00, no dates of service, no CPT codes) on 08/28/2026. Dana's visits: 06/26/2026 new-patient evaluation ($425.00) and 07/10/2026 C5-6 interlaminar ESI ($3,900.00). HIPAA authorization signed 03/18/2026. Bayside treats on a letter of protection. Billing contact Carla Ruiz.",
      criteria:"A strong request: (1) identifies the patient (name, DOB, account if known) and the firm's representation; (2) asks for an ITEMIZED statement listing every date of service with CPT codes, descriptions, charges, adjustments, payments and the balance (UB-04/CMS-1500 or ledger) — not a balance-due statement; (3) references the HIPAA authorization on file (and offers to resend); (4) mentions a billing affidavit or custodian certification only as “if required by the attorney/our office”; (5) gives a clear, reasonable date to respond and how to send it (secure fax/portal/email); (6) professional, concise, no case value or settlement talk, no PHI beyond what's needed; (7) says the trainee will follow up. Penalize sharing demand or settlement amounts, asking for the whole medical chart when only the bill is needed, or no deadline."
    }))},
  {label:"Call & the CMS", html: part("D. Live call — then set up the demand work in the CMS",
    "Make the call (pick the scenario at the top: Bayside billing, or Dana to confirm her providers). Then put the demand work into the CMS so anyone on the team could see where it stands.",
    `<div style="margin-top:4px">${renderCrisisRoleplaySection("mdIntake1", "Live call — the AI plays Bayside's billing office or Dana (pick the scenario at the top)")}</div>`
    + cmsStep("mdIntake1:cms", "Open Dana Whitfield's case in the CMS. Correct the <b>date of incident to 03/14/2026</b>. Add the <b>provider list</b> as a Note (each provider: records received? bills received? itemized?). Upload the records under <b>Medical</b> and the bills under <b>Bills</b>. Add Tasks: Bayside itemized bill (follow up 10/07), flag the 2025 low back records to the attorney, chronology (10/06), itemization (10/07), demand draft (10/08). Save and log the Case ID."))}
];

/* ---------- DAY 2 · Chronology & Summary Builder ---------- */
const CHRON_ITEMS = [
  {t:"Summit Orthopedic — Dr. Patel consult: C5-6 disc protrusion with right C6 radiculopathy; causation opinion", doc:"DW14", z:"5", why:"04/20/2026 (WHITFIELD 0052–0055)."},
  {t:"Harbor Spine — low back strain after lifting boxes; 3 visits", doc:"DW11", z:"1", why:"01/08/2025 — before the collision, but it goes in the chronology (flagged) in date order."},
  {t:"Bayside Pain Management — new patient: neck pain 6/10, right-arm tingling since the MVC", doc:"DW15", z:"7", why:"06/26/2026 (WHITFIELD 0060–0063)."},
  {t:"Riverside Medical Center ED — neck 7/10, low back 5/10; CT cervical spine negative", doc:"DW10", z:"2", why:"03/14/2026, the day of the collision (WHITFIELD 0001–0009)."},
  {t:"Summit Orthopedic — follow-up: MMI; future care up to 2 ESIs", doc:"DW14", z:"9", why:"08/21/2026 (WHITFIELD 0056–0058) — the last visit."},
  {t:"Clearview Imaging — MRI cervical spine: 3 mm central disc protrusion at C5-6", doc:"DW13", z:"4", why:"03/30/2026 (WHITFIELD 0039–0041)."},
  {t:"Harbor Spine — visit 24 of 24; plan complete; declines 4 more weeks of care (childcare); discharged, improved", doc:"DW12", z:"6", why:"05/14/2026 (WHITFIELD 0038)."},
  {t:"Bayside Pain Management — C5-6 interlaminar ESI under fluoroscopy", doc:"DW15", z:"8", why:"07/10/2026 (WHITFIELD 0064–0066)."},
  {t:"Harbor Spine — initial exam: neck 7/10 to the right shoulder, ROM down 40%", doc:"DW12", z:"3", why:"03/17/2026 (WHITFIELD 0012–0015)."}
];
TOOLS.mdChron2 = ()=>[
  {label:"Date Order", html: part("A. Put the records in date order",
    "The records came in by provider, not by date. Open each record, find its date of service, and give it its position in the chronology (1 = earliest).",
    scenario(`<b>Scenario:</b> Tuesday 10/06/2026. You're building Dana's medical chronology from WHITFIELD 0001–0066. Every row will carry its page reference.`)
    + sorter("mdChron2:order", CHRON_ITEMS, POS(9), "Record (open it to find the date)"))},
  {label:"Flag the Entries", html: part("B. Flag what the attorney must see",
    "Give each entry the single most important flag for the attorney.",
    flagTable("mdChron2:flags", [
      {item:"01/08/2025 · Harbor Spine (0010–0011)", shows:"Low back strain after lifting boxes; 3 visits; released 01/29/2025.", answer:"Prior injury / pre-existing", why:"Before the DOI and the same general region (back). Always include and flag."},
      {item:"03/14/2026 · Riverside ED (0001–0009)", shows:"Neck 7/10, low back 5/10; CT negative; cervical and lumbar strain; discharged.", answer:"Routine entry — no special flag", why:"Same-day ED care — standard first entry."},
      {item:"03/17/2026 · Harbor Spine (0012–0015)", shows:"Initial exam; ROM down 40%; plan 3x/week × 8 weeks; off work.", answer:"Routine entry — no special flag", why:"Start of the treatment course."},
      {item:"03/30/2026 · Clearview Imaging (0039–0041)", shows:"MRI: 3 mm central disc protrusion at C5-6 abutting the ventral thecal sac.", answer:"Objective diagnostic finding", why:"Imaging is objective evidence of injury — quote the radiologist's words."},
      {item:"04/20/2026 · Summit Orthopedic (0052–0055)", shows:"C5-6 protrusion with right C6 radiculopathy; “causally related to the 03/14/2026 MVC.”", answer:"Causation opinion", why:"The doctor ties the injury to the collision — the demand's key sentence (p. 55)."},
      {item:"05/14/2026 · Harbor Spine (0038)", shows:"Visit 24 of 24; neck 4/10; 4 more weeks recommended, declined because of childcare; discharged, improved.", answer:"Routine entry — no special flag", why:"A routine discharge — but record why she declined further care; it explains the gap at the next entry."},
      {item:"06/26/2026 · Bayside Pain Management (0060–0063)", shows:"New patient; neck 6/10 with right-arm tingling since the MVC; plan C5-6 ESI.", answer:"Gap in treatment (30+ days)", why:"43 days after the last visit (05/14). Flag it with the reasons the records give (pp. 38, 60)."},
      {item:"07/10/2026 · Bayside Pain Management (0064–0066)", shows:"C5-6 interlaminar ESI under fluoroscopy; pain 6/10 → 2/10.", answer:"Procedure (injection / surgery)", why:"An invasive procedure — significant for damages."},
      {item:"08/21/2026 · Summit Orthopedic (0056–0058)", shows:"Neck 3/10; MMI; up to 2 more ESIs over 24 months, est. $3,900 each.", answer:"MMI / future care", why:"Ends the treatment story and supports $7,800.00 in future medical (p. 57)."}
    ], FLAGS7))},
  {label:"Key Facts", html: part("C. Pull the key facts from the records",
    "The attorney and the demand will rely on these numbers. Take each one from the documents, not from memory.",
    docPacket(["DW10","DW12","DW13","DW14","DW15"], "Records")
    + calc("mdChron2:facts", [
      {label:"Days without treatment between the last chiropractic visit and the first pain-management visit", answer:43, unit:"days", tol:0, hint:"05/14/2026 → 06/26/2026"},
      {label:"Chiropractic visits in 2026", answer:24, unit:"visits", tol:0},
      {label:"Neck pain at the ED (0–10)", answer:7, unit:"of 10", tol:0},
      {label:"Neck pain at MMI on 08/21/2026 (0–10)", answer:3, unit:"of 10", tol:0},
      {label:"Size of the C5-6 protrusion on the MRI", answer:3, unit:"mm", tol:0},
      {label:"Bates page of Dr. Patel's causation opinion", answer:55, unit:"(WHITFIELD page)", tol:0},
      {label:"Future care estimate — total", answer:7800, hint:"2 ESIs × $3,900.00 (p. 57)"}
    ]))},
  {label:"Medical Summary", html: part("D. Write the medical summary — then save the medsum in the CMS",
    "Write the medical summary the attorney will read first. Neutral, accurate and traceable: every statement should come from a record you can cite.",
    aiTask("mdChron2:summary", {
      label:"Your medical summary for Dana Whitfield",
      exercise:"Chronology & Summary Builder — medical summary",
      rows:260,
      context:"Day 2. The trainee built Dana Whitfield's chronology from WHITFIELD 0001–0066 and now writes the medical summary for Attorney Bennett.",
      criteria:"A strong summary (about 250–450 words): (1) overview — client, DOI 03/14/2026, rear-end MVC, treatment span 03/14–08/21/2026, providers; (2) initial treatment — same-day Riverside ED, neck 7/10 and low back 5/10, CT negative, cervical/lumbar strain; (3) diagnostics — MRI 03/30 “3 mm central disc protrusion at C5-6” in the radiologist's words (NOT “herniation”); (4) treatment course — 24 chiropractic visits 03/17–05/14 with improvement (7/10 → 4/10), ortho consult 04/20 (C6 radiculopathy, causation opinion p. 55), pain management 06/26 and the C5-6 ESI 07/10 (6/10 → 2/10); (5) gaps and prior history stated plainly — 2025 low back strain (pp. 10–11) and the 43-day gap 05/14 → 06/26 with the reasons in the records (childcare p. 38; continuing symptoms p. 60); (6) current status — MMI 08/21, neck 3/10, future care up to 2 ESIs est. $7,800.00 (p. 57); (7) page references throughout; neutral tone, no advocacy, no opinions of the writer. Penalize upgraded diagnoses, omitted prior injury or gap, invented facts, missing page cites, or persuasive/advocacy language."
    })
    + cmsStep("mdChron2:cms", "In Dana Whitfield's CMS case, upload the <b>medical chronology</b> and the <b>medical summary</b> under <b>Medical</b>. Add a Note for the attorney listing the flags (prior 2025 low back strain, the 43-day gap and its reasons, causation p. 55, MMI and future care p. 57). Save and log the Case ID."))}
];

/* ---------- DAY 3 · Bills Itemization Workbench ---------- */
const BILL_ZONES = ["Include — related","Exclude — before the DOI","Exclude — duplicate","Exclude — unrelated"];
TOOLS.mdBills3 = ()=>[
  {label:"Related or Not?", html: part("A. Which lines belong in the specials?",
    "These are every billing line in Dana's file. Decide which are medical specials for the 03/14/2026 collision. Every exclusion still gets a note in the file.",
    scenario(`<b>Scenario:</b> Wednesday 10/07/2026. Bayside's itemized bill arrived this morning, so every provider's billing is now in.`)
    + sorter("mdBills3:lines", [
      {t:"Riverside Medical Center · 03/14/2026 · ED visit + CT cervical spine · $4,850.00", doc:"DW16", z:BILL_ZONES[0], why:"Same-day emergency care."},
      {t:"Riverside Emergency Physicians · 03/14/2026 · ED physician services · $1,120.00", doc:"DW17", z:BILL_ZONES[0], why:"The ED physician group bills separately from the hospital."},
      {t:"Corner Pharmacy · 03/14/2026 · cyclobenzaprine, ibuprofen · $86.40", doc:"DW18", z:BILL_ZONES[0], why:"Prescribed at the ED — an out-of-pocket medical expense."},
      {t:"Harbor Spine & Chiropractic · 01/08–01/29/2025 · low back strain, 3 visits · $285.00", doc:"DW19", z:BILL_ZONES[1], why:"Before the DOI — leave it out and note it as prior treatment."},
      {t:"Harbor Spine & Chiropractic · 03/17–05/14/2026 · chiropractic care, 24 visits · $5,760.00", doc:"DW19", z:BILL_ZONES[0], why:"Accident treatment on a letter of protection."},
      {t:"Clearview Imaging · 03/30/2026 · MRI cervical spine (CPT 72141) · $2,400.00 — first line", doc:"DW20", z:BILL_ZONES[0], why:"The MRI — list it once."},
      {t:"Clearview Imaging · 03/30/2026 · MRI cervical spine (CPT 72141) · $2,400.00 — second line", doc:"DW20", z:BILL_ZONES[2], why:"Same date, code and amount, one report — a duplicate. Note it and confirm with Clearview."},
      {t:"Summit Orthopedic · 04/20/2026 · new patient consultation · $650.00", doc:"DW21", z:BILL_ZONES[0], why:"Ortho consult for the neck injury."},
      {t:"Northgate Family Practice · 05/02/2026 · annual wellness exam · $275.00", doc:"DW24", z:BILL_ZONES[3], why:"Routine annual exam — not accident treatment."},
      {t:"Bayside Pain Management · 06/26/2026 · new patient evaluation · $425.00", doc:"DW23", z:BILL_ZONES[0], why:"Pain management for the neck injury (LOP)."},
      {t:"Bayside Pain Management · 07/10/2026 · C5-6 interlaminar ESI (CPT 62321) · $3,900.00", doc:"DW23", z:BILL_ZONES[0], why:"The injection (LOP)."},
      {t:"Summit Orthopedic · 08/21/2026 · follow-up visit · $325.00", doc:"DW21", z:BILL_ZONES[0], why:"The MMI visit."}
    ], BILL_ZONES, "Billing line"))},
  {label:"Total It", html: part("B. Total the itemization",
    "Using only the related lines, total the itemization. Balance = Billed − Adjustments − all Payments (health insurance + PIP + client).",
    docPacket(["DW16","DW17","DW18","DW19","DW20","DW21","DW23","DW08"], "Bills and the PIP log")
    + calc("mdBills3:totals", [
      {label:"Total billed (related lines)", answer:19516.40, tol:0.01},
      {label:"Total adjustments / write-offs", answer:2675.00, tol:0.01},
      {label:"Paid by BlueHarbor Health", answer:2575.00, tol:0.01},
      {label:"Paid by PIP (Summit Ridge)", answer:2500.00, tol:0.01, hint:"$1,120.00 + $1,380.00 — the $2,500 PIP is exhausted"},
      {label:"Paid by Dana (copays, deductible, pharmacy)", answer:661.40, tol:0.01},
      {label:"Outstanding balance", answer:11105.00, tol:0.01}
    ], `<div class="md-scn" style="margin:0">Check: $19,516.40 − $2,675.00 − ($2,575.00 + $2,500.00 + $661.40) = <b>$11,105.00</b>. All lines including the three exclusions total $22,476.40 — the demand uses $19,516.40.</div>`))},
  {label:"Balances & Liens", html: part("C. Balances and liens to protect",
    "Select every provider or payer that belongs on the list of balances and reimbursement claims the attorney and Case Manager must resolve from any settlement.",
    checklist("mdBills3:liens", [
      {t:"Harbor Spine & Chiropractic — letter of protection — $5,760.00", ok:true, why:"Unpaid LOP balance."},
      {t:"Bayside Pain Management — letter of protection — $4,325.00", ok:true, why:"$425.00 + $3,900.00, unpaid on an LOP."},
      {t:"Clearview Imaging — unpaid balance after PIP — $1,020.00", ok:true, why:"$2,400.00 − $1,380.00 PIP."},
      {t:"BlueHarbor Health — reimbursement claim — $2,575.00 paid to date", ok:true, why:"The health plan asserts reimbursement; its final figure comes after settlement."},
      {t:"Summit Ridge Insurance — PIP reimbursement — $2,500.00", ok:false, why:"Under this course's ST training rule, PIP has no reimbursement claim against the recovery."},
      {t:"Riverside Medical Center — $4,850.00", ok:false, why:"Its balance is $0.00 after the adjustment, BlueHarbor and Dana's payment."},
      {t:"Summit Orthopedic Associates — $975.00", ok:false, why:"Both visits are paid in full (balance $0.00)."},
      {t:"Northgate Family Practice — $275.00", ok:false, why:"Unrelated wellness exam — not part of this claim."}
    ], "Check my lien list"))},
  {label:"Specials Summary", html: part("D. The specials summary — then save the itemization in the CMS",
    "Build the economic damages summary the demand will use.",
    docPacket(["DW14","DW25"], "Future care and wage documents")
    + calc("mdBills3:specials", [
      {label:"Past medical specials (billed)", answer:19516.40, tol:0.01},
      {label:"Future medical (Dr. Patel, 08/21/2026)", answer:7800.00, tol:0.01, hint:"2 ESIs × $3,900.00"},
      {label:"Lost wages", answer:3136.00, tol:0.01, hint:"14 workdays × $224.00"},
      {label:"Total economic damages", answer:30452.40, tol:0.01}
    ])
    + cmsStep("mdBills3:cms", "Upload the <b>bills itemization</b> under <b>Bills</b> with both billed and paid columns. Add a Note listing the three exclusions and why ($285.00 prior treatment, the duplicate $2,400.00 MRI line, the $275.00 wellness exam). Add a Task for <b>Marcus Webb</b> with the balances and reimbursement claims to protect. Save and log the Case ID."))}
];

/* ---------- DAY 4 · Demand Draft Audit ---------- */
const DEMAND_SECTIONS = ["Introduction","Facts & liability","Injuries & treatment","Medical specials","Lost wages","Non-economic damages","Demand & deadline","Enclosures"];
TOOLS.mdDemand4 = ()=>[
  {label:"Ready to Send?", html: part("A. What must be true before the demand goes out?",
    "Thursday 10/08/2026. Select everything that must be done before Attorney Bennett's signed demand goes to Keystone. Leave out anything that isn't needed yet.",
    checklist("mdDemand4:ready", [
      {t:"Attorney Bennett reviews the draft, sets the demand amount and signs it.", ok:true, why:"Nothing goes out without the attorney."},
      {t:"Every figure in the letter matches the itemization and the wage verification.", ok:true, why:"$19,516.40 past medical, $7,800.00 future, $3,136.00 wages."},
      {t:"Every fact has an exhibit cite that lands on the right page.", ok:true, why:"The adjuster checks the cites."},
      {t:"The gap and the prior low back strain are addressed with the records.", ok:true, why:"Deal with weaknesses before the adjuster raises them."},
      {t:"Dana's impact statement is reviewed and signed.", ok:true, why:"Done on 09/30/2026 — required before it's used."},
      {t:"BlueHarbor Health's final reimbursement amount is received.", ok:false, why:"The final figure only issues after settlement — track it, don't wait for it."},
      {t:"Dana has fully recovered with no future care.", ok:false, why:"MMI is the milestone; future care is part of the claim."},
      {t:"Every provider has been paid in full.", ok:false, why:"LOP balances are paid from the settlement."},
      {t:"A lawsuit is filed first.", ok:false, why:"The demand is a pre-suit settlement request; the SOL (03/14/2028) is calendared."}
    ], "Check my list"))},
  {label:"Audit the Draft", html: part("B. Audit the draft demand, line by line",
    "Open the draft (DW27) next to the documents. Make a call on each line.",
    docPacket(["DW27","DW04","DW10","DW11","DW13","DW14","DW24"], "The draft and its sources")
    + flagTable("mdDemand4:audit", [
      {item:"Heading", shows:"“Claim No.: KM-26-0418832 · Date of loss: March 15, 2026”", answer:"Wrong fact or number", why:"The claim number is KM-26-0418823 and the date of loss is 03/14/2026."},
      {item:"Facts & liability", shows:"“…your insured struck her vehicle from behind; your insured was cited for Following Too Closely (Ex. A).”", answer:"OK", why:"Accurate and cited to the police report."},
      {item:"Prior history", shows:"“Prior to this collision, Ms. Whitfield had never experienced neck or back problems.”", answer:"Wrong fact or number", why:"She treated for a low back strain in 01/2025 (WHITFIELD 0010–0011). A false statement destroys credibility."},
      {item:"MRI", shows:"“A cervical MRI on March 30, 2026 revealed a herniated disc at C5-6 (Ex. E, WHITFIELD 0041).”", answer:"Overstated", why:"The radiologist says a 3 mm central disc protrusion. Use the report's words."},
      {item:"Causation", shows:"“Dr. Anita Patel concluded that the C5-6 injury is causally related to this collision.”", answer:"Missing or wrong cite", why:"Cite it: (Ex. E, WHITFIELD 0055)."},
      {item:"Injection", shows:"“She required a C5-6 epidural steroid injection on July 10, 2026 (Ex. E, WHITFIELD 0064).”", answer:"OK", why:"Accurate and cited."},
      {item:"Specials table", shows:"A line “Northgate Family Practice · 05/02/2026 · $275.00”", answer:"Doesn't belong", why:"An unrelated wellness exam — take it out."},
      {item:"Specials total", shows:"“Total past medical expenses: $19,666.40”", answer:"Wrong fact or number", why:"The related total is $19,516.40."},
      {item:"Future care", shows:"“Future medical care: two additional C5-6 injections, $7,800.00 (Ex. E, WHITFIELD 0057).”", answer:"OK", why:"Matches Dr. Patel's recommendation."},
      {item:"Lost wages", shows:"“Lost wages: 14 workdays at $224.00 per day, $3,136.00 (Ex. F).”", answer:"OK", why:"Matches the payroll verification."},
      {item:"The gap", shows:"The draft says nothing about the 05/14 → 06/26 gap.", answer:"Missing", why:"Address it with the records: childcare (p. 38) and continuing symptoms (p. 60)."},
      {item:"Demand", shows:"“We are authorized to resolve this claim for $85,000.00. This offer remains open for thirty (30) days.”", answer:"OK", why:"The amount and deadline are the attorney's — as set."}
    ], ["OK","Wrong fact or number","Overstated","Missing or wrong cite","Doesn't belong","Missing"]))},
  {label:"Sections", html: part("C. Where does each sentence go?",
    "Match each sentence from the corrected draft to its section of the demand letter.",
    sorter("mdDemand4:sections", [
      {t:"“Ms. Whitfield's related medical expenses total $19,516.40, itemized by provider and date of service (Ex. D).”", z:"Medical specials"},
      {t:"“This office represents Dana Whitfield for injuries she sustained in the collision of March 14, 2026 with your insured, Grant Mercer.”", z:"Introduction"},
      {t:"“For six weeks she could not lift her 3-year-old son or turn her head to check her blind spot (Ex. G).”", z:"Non-economic damages"},
      {t:"“Ms. Whitfield was stopped at a red light when your insured struck her from behind; he told the officer he looked down at his phone (Ex. A).”", z:"Facts & liability"},
      {t:"“Enclosed: police report, photo log, medical summary and chronology, itemized specials, records and bills, wage verification, client statement.”", z:"Enclosures"},
      {t:"“Dr. Patel diagnosed a C5-6 disc protrusion with right C6 radiculopathy and related it to this collision (Ex. E, WHITFIELD 0052–0055).”", z:"Injuries & treatment"},
      {t:"“We are authorized to resolve this claim for $85,000.00; this offer remains open for thirty (30) days.”", z:"Demand & deadline"},
      {t:"“She missed 14 workdays at $224.00 per day, a loss of $3,136.00, verified by her employer (Ex. F).”", z:"Lost wages"}
    ], DEMAND_SECTIONS, "Sentence"))},
  {label:"Non-Economic Damages", html: part("D. Write the non-economic damages section — then send the draft for review",
    "Write the paragraph that tells Dana's human story. Use her impact statement and the records; be specific and truthful.",
    docPacket(["DW26","DW12","DW14"], "Impact statement and records")
    + aiTask("mdDemand4:noneconomic", {
      label:"Your non-economic damages section",
      exercise:"Demand Draft Audit — non-economic damages",
      rows:200,
      context:"Day 4. From Dana Whitfield's signed impact statement (09/30/2026): for six weeks she couldn't lift her 3-year-old son or turn her head to check her blind spot; she stopped her Saturday 5K runs; she still wakes at night with neck pain once or twice a week. Records: neck pain 7/10 at the ED, 24 chiropractic visits, an ESI 07/10, MMI 08/21 with neck 3/10 and future injections recommended; off work 14 workdays.",
      criteria:"A strong section: (1) specific daily-life examples in concrete terms from the impact statement (lifting her son, driving/blind spot, the 5K runs, sleep); (2) duration and what continues (still wakes at night; future injections); (3) ties the story to the medical course (pain scores, the injection, MMI) with exhibit cites (Ex. G for the statement, Ex. E pages for records); (4) persuasive but truthful — no exaggeration, no invented facts, no claims she can't work at all; (5) professional tone suitable for an adjuster; (6) no dollar value for pain and suffering (the attorney sets the demand). Penalize adjectives without facts, invented limitations, or missing cites."
    })
    + cmsStep("mdDemand4:cms", "Save the <b>corrected draft demand</b> in Dana's CMS case under <b>Case Files</b>. Add a Task for <b>Attorney Bennett</b>: review and sign by Friday 10/09. Add a Note listing the corrections you made. Save and log the Case ID."))}
];

/* ---------- DAY 5 · Packet & Response Desk ---------- */
const PACKET_ITEMS = [
  {t:"Medical summary & chronology", z:"5"},
  {t:"Police report LPD-26-031477", z:"3"},
  {t:"Client impact statement", z:"9"},
  {t:"Demand letter (signed)", z:"1"},
  {t:"Medical records & bills by provider (WHITFIELD 0001–0066, then the bills)", z:"7"},
  {t:"Photo log (scene and vehicle)", z:"4"},
  {t:"Exhibit index", z:"2"},
  {t:"Wage & time-loss verification", z:"8"},
  {t:"Itemized medical specials", z:"6"}
];
const RESPONSE_STEPS = ["Route to the attorney today (log it)","Draft a rebuttal with record cites for the attorney","Attorney decides — route it; send nothing yet","Follow up with the adjuster in writing","Calendar it"];
TOOLS.mdPacket5 = ()=>[
  {label:"Order the Packet", html: part("A. Assemble the packet in the LSH standard order",
    "Friday 10/09/2026: Attorney Bennett has signed. Number each piece of the packet (1 = first page).",
    docPacket(["DW28"], "Exhibit index")
    + sorter("mdPacket5:order", PACKET_ITEMS.map(p=>Object.assign({why:"Position "+p.z+" in the LSH order: letter → index → liability (A police, B photos) → injuries (C summary) → money (D specials, E records & bills, F wages) → impact (G)."}, p)), POS(9), "Packet item"))},
  {label:"Keystone Responds", html: part("B. Keystone responds — what's your next step on each?",
    "Keystone's responses came in over the following weeks. For each one, choose your next step.",
    docPacket(["DW29","DW30"], "Keystone's letters")
    + flagTable("mdPacket5:responses", [
      {item:"10/16/2026", shows:"A week after sending: no acknowledgment from Keystone.", answer:RESPONSE_STEPS[3], why:"Confirm receipt in writing, note the proof of delivery, and keep the 11/09 deadline in view."},
      {item:"The offer", shows:"11/04/2026 letter: “Keystone offers $18,500.00 in full settlement.”", answer:RESPONSE_STEPS[0], why:"Every offer goes to the attorney the same day; the attorney communicates it to Dana."},
      {item:"Offer deadline", shows:"“This offer remains open for 30 days.”", answer:RESPONSE_STEPS[4], why:"Calendar 12/04/2026 with reminders."},
      {item:"Argument: the gap", shows:"“The 43-day gap from 05/14 to 06/26 breaks causation for Bayside's treatment.”", answer:RESPONSE_STEPS[1], why:"The records answer it: childcare (p. 38), symptoms since the MVC (p. 60), causation opinion (p. 55)."},
      {item:"Argument: pre-existing", shows:"“The 2025 low back treatment shows a pre-existing condition.”", answer:RESPONSE_STEPS[1], why:"The 2025 treatment was a resolved low back strain (released 01/29/2025); the claim is a C5-6 neck injury (pp. 10–11, 41, 55)."},
      {item:"Argument: future care", shows:"“Future injections are speculative.”", answer:RESPONSE_STEPS[1], why:"Dr. Patel recommended them in writing with a cost estimate (p. 57)."},
      {item:"Argument: chiropractic", shows:"“24 chiropractic visits is excessive.”", answer:RESPONSE_STEPS[1], why:"The plan (3x/week × 8 weeks) and the documented improvement (7/10 → 4/10) support it (pp. 12–15, 38)."},
      {item:"Argument: paid, not billed", shows:"“We will evaluate only the $5,736.40 actually paid.”", answer:RESPONSE_STEPS[0], why:"Billed vs paid is a legal position — give the attorney the both-columns itemization; don't argue it yourself."},
      {item:"Prior records request", shows:"“Provide 5 years of prior medical records from all providers.”", answer:RESPONSE_STEPS[2], why:"Scope of disclosure is the attorney's decision (minimum necessary)."}
    ], RESPONSE_STEPS))},
  {label:"Rebuttal Draft", html: part("C. Draft the rebuttal for the attorney",
    "Draft the rebuttal paragraphs answering Keystone's gap, pre-existing and future-care arguments. Attorney Bennett will add the counteroffer.",
    docPacket(["DW29","DW11","DW12","DW14","DW15"], "Keystone's letter and the records")
    + aiTask("mdPacket5:rebuttal", {
      label:"Your rebuttal draft",
      exercise:"Packet & Response Desk — rebuttal to Keystone's 11/04/2026 offer letter",
      rows:230,
      context:"Keystone (Tom Reyes, claim KM-26-0418823) offered $18,500.00 on 11/04/2026 arguing: the 43-day gap (05/14 → 06/26) breaks causation; the 2025 low back treatment makes the injury pre-existing; future ESIs are speculative; 24 chiropractic visits were excessive; paid amounts only. Records: childcare reason at the last chiropractic visit (WHITFIELD 0038); pain-management intake “neck pain … since the MVC of 03/14/2026” (0060); Dr. Patel's causation opinion (0055); 2025 low back strain, 3 visits, released 01/29/2025 (0010–0011); MRI C5-6 protrusion (0041); future care up to 2 ESIs est. $3,900 each (0057); chiropractic plan 3x/week × 8 weeks (0012–0015) with improvement 7/10 → 4/10 (0038).",
      criteria:"A strong rebuttal: (1) answers the gap with the records — childcare (0038), continuing symptoms (0060), causation opinion (0055); (2) distinguishes the prior: a resolved 2025 LOW BACK strain vs a C5-6 NECK injury with radiculopathy, citing 0010–0011, 0041, 0055; (3) answers “speculative” with Dr. Patel's written recommendation and estimate (0057); optionally (4) supports the chiropractic course with the plan and improvement; (5) cites exhibits/pages throughout in the (Ex. E, WHITFIELD 00xx) style; (6) professional, factual, not insulting; (7) leaves the counteroffer amount and any statement about the client's position to the attorney (placeholder is fine). Penalize invented facts, a counter amount chosen by the trainee, conceding the arguments, or no cites."
    }))},
  {label:"The Call & the CMS", html: part("D. Take the adjuster's call — then log it in the CMS",
    "Tom Reyes calls about the offer (or presses for the prior records: pick the scenario at the top). Then log the response in the CMS.",
    `<div style="margin-top:4px">${renderCrisisRoleplaySection("mdPacket5", "Live call — the AI plays Tom Reyes at Keystone (pick the scenario at the top)")}</div>`
    + cmsStep("mdPacket5:cms", "In Dana's CMS case: upload Keystone's letters under <b>Case Files</b>, add a Note logging the <b>$18,500.00 offer</b> (date, terms, arguments) and that it went to Attorney Bennett today, add Tasks for the offer deadline (12/04/2026), the rebuttal review and the prior-records response (attorney), and confirm the statute of limitations (03/14/2028) is calendared. Save and log the Case ID."))}
];

/* ---------- tool dispatch ---------- */
const _origInitTool = window.initTool;
window.initTool = function(id){
  const body = document.getElementById("toolBody"); if(!body) return;
  if(TOOLS[id]){
    toolState.wizardIndex = toolState.wizardIndex || 0;
    const parts = TOOLS[id]();
    body.innerHTML = renderToolWizard(dayOfTool(id), parts);
    if(document.getElementById("crChatWindow")) { try{ crRenderChatWindow(); }catch(e){} }
    return;
  }
  return _origInitTool(id);
};
/* the roleplay section needs toolState.cr set up before the wizard renders */
const _origRenderCr = window.renderCrisisRoleplaySection;
window.renderCrisisRoleplaySection = function(setKey, label){
  const sc = CRISIS_SCENARIO_SETS[setKey];
  if(sc && (!toolState.cr || toolState.cr.setKey!==setKey)){
    const opening = sc[0].script.split("\n")[0].replace(/^OPENING LINE[^:]*:\s*/,"").replace(/^"|"$/g,"");
    toolState.cr = {setKey, activeScenario: sc[0].id, chatHistory:[{role:"client", text: opening}]};
  }
  return _origRenderCr(setKey, label);
};
/* roleplay replies in Demand Specialist terms */
window.crSendChat = async function(){
  const input = document.getElementById("crChatInput");
  const text = input.value.trim(); if(!text) return;
  if(!(await useLabAttempt(toolIdToDayId(toolState.cr.setKey), "crSendChat_"+toolState.cr.setKey))) return;
  toolState.cr.chatHistory.push({role:"ea", text}); input.value = ""; crRenderChatWindow();
  toolState.cr.chatHistory.push({role:"client", text:"…thinking…", pending:true}); crRenderChatWindow();
  const s = crCurrentScenario();
  const transcript = toolState.cr.chatHistory.filter(m=>!m.pending).map(m=>(m.role==="client"?"CALLER: ":"DEMAND SPECIALIST: ")+m.text).join("\n");
  const prompt = `You are roleplaying the other party in a training call for a Demand Specialist at a personal-injury law firm (the client, the insurance adjuster, a provider's records or billing office, or the handling attorney — stay consistent with whoever spoke first). Stay fully in character; no meta-commentary.

CASE BACKGROUND:
${CLIENT_DOSSIER_MD}

SCENARIO: ${s.title}
${s.setup}
${s.stakes}
Pressure beats to work in naturally: ${s.script}

CONVERSATION SO FAR:
${transcript}

Reply with the next line only — 1-3 sentences, realistic, emotionally true to the character. If the Demand Specialist is clear, specific and backs points with documents and page cites, you may soften or agree. If they are vague, state a case value, give legal advice, share settlement amounts, or give in to pressure, push harder.`;
  try{ const reply = await callAIText(prompt, 220);
    toolState.cr.chatHistory = toolState.cr.chatHistory.filter(m=>!m.pending); toolState.cr.chatHistory.push({role:"client", text: reply.trim().replace(/^["“]+|["”]+$/g,"")});
  }catch(e){ toolState.cr.chatHistory = toolState.cr.chatHistory.filter(m=>!m.pending); toolState.cr.chatHistory.push({role:"client", text:"[Connection issue — try sending again.]"}); }
  crRenderChatWindow();
};

/* ================================================================
   LESSON CARDS — render the slide's table/process/compare visual
   and the Skill Builder call-to-action on Part 1 of each topic.
   ================================================================ */
const _origLessonCard = window.renderLessonCard;
window.renderLessonCard = function(l, i, d, unused, part){
  if(!l || !l.fourPart || (!l.layout && !l.skill)) return _origLessonCard(l, i, d, unused, part);
  let extra = l.layout ? `<div class="md-lesson-visual">${renderLessonVisual(l)}</div>` : "";
  if(l.skill){
    const t = PRACTICE_TOOLS.find(x=>x.id===l.skill.tool);
    if(t) extra += `<div class="md-skill-cta"><div><b>🧪 Skill Builder: ${E(t.title)}</b><p>Practice this on Dana Whitfield's case file${l.skill.cms?" and log your work in the CMS":""}.</p></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-navy btn-sm" onclick="goto('tool','${t.id}')">Open Skill Builder</button>${l.skill.cms?`<button class="btn btn-ghost btn-sm" onclick="openCms()">Open CMS</button>`:""}</div></div>`;
  }
  return _origLessonCard(Object.assign({}, l, {svgDiagram: extra}), i, d, unused, part);
};

/* ================================================================
   VIEWS: Case Documents · Training Tools · Simulators · Handouts · Case File
   ================================================================ */
const DOC_FILTERS = [["all","All"],["file","Day 1: the file"],["records","Day 2: medical records"],["bills","Day 3: bills & wages"],["demand","Day 4–5: demand & responses"],["templates","Templates"]];
const DOC_FILTER_FOLDERS = {file:["intake","police","insurance"], records:["records"], bills:["bills","damages"], demand:["demand","response"], templates:["templates"]};
window.renderCaseDocuments = function(){
  const f = state.docFilter || "all";
  const docs = MD_DOCS.filter(d=> f==="all" || (DOC_FILTER_FOLDERS[f]||[]).includes(d.folder));
  const byFolder = MD_DOC_FOLDERS.filter(fo=>fo.id!=="handouts").map(fo=>({fo, items:docs.filter(d=>d.folder===fo.id)})).filter(x=>x.items.length);
  return `<p class="eyebrow">Case Documents</p>
    <h1 style="color:var(--navy);font-size:26px;margin:6px 0 8px">📁 Case Document Library</h1>
    <p style="color:var(--ink-soft);font-size:14px;max-width:78ch;margin:0 0 14px">A demand is only as good as the paper behind it. These are the working files for <b>Dana Whitfield's case</b> (rear-end collision 03/14/2026): records Bates-numbered WHITFIELD 0001–0066, every bill, the insurer's letters, the draft demand and the responses. Every Skill Builder points to the exact documents it uses. Each file shows the <b>CMS upload category</b> to use when you add it to her case in the CMS. They are simulated training documents — and some contain deliberate errors you are expected to catch.</p>
    <div class="md-filter">${DOC_FILTERS.map(([k,lab])=>`<button class="btn btn-sm ${f===k?"btn-navy":"btn-ghost"}" onclick="state.docFilter='${k}';render()">${lab}</button>`).join("")}
      <button class="btn btn-sm btn-ghost" onclick="openCms()">🗂 Open CMS</button></div>
    ${state.isAdmin ? `<div class="card" style="padding:12px 16px;margin-bottom:16px;border-left:4px solid var(--danger);font-size:12.8px">🔑 <b>Trainer view:</b> the red notes under each document are the audit key — planted errors and what a strong trainee should catch. Trainees don't see them.</div>` : ""}
    ${byFolder.map(({fo,items})=>`<div class="card md-lib-folder" style="padding:14px 18px"><h3>${fo.icon} ${E(fo.label)} <span style="font-weight:500;color:var(--ink-soft);font-size:12px">(${items.length})</span></h3>
      ${items.map(d=>`<div class="md-doc-row"><div><span class="t">${E(d.title)}</span> <span style="font-size:11px;color:var(--ink-soft)">· Day ${d.day}</span><div class="d">${E(d.desc)}</div>${state.isAdmin && d.key ? `<div class="md-key">🔑 ${E(d.key)}</div>` : ""}</div>
        <div style="display:flex;gap:6px;align-items:center"><span class="cms">CMS: ${E(d.cms)}</span><a class="btn btn-ghost btn-sm" href="${mdDocUrl(d)}" target="_blank" rel="noopener">Open</a></div></div>`).join("")}</div>`).join("")}`;
};

window.renderTrainingTools = function(){
  const log = Object.entries(state.cmsLog||{});
  const toolTitle = (id)=> (PRACTICE_TOOLS.find(t=>t.id===id)||{}).title || id;
  const tools = MD_TOOL_DEFAULTS.map(d=>mdTool(d.id));
  return `<p class="eyebrow">Training Tools</p>
    <h1 style="color:var(--navy);font-size:26px;margin:6px 0 8px">🧰 LSH Training Tools</h1>
    <p style="color:var(--ink-soft);font-size:14px;max-width:80ch;margin:0 0 16px">This portal is your home base. The platforms you'll use on the job are built in here: open one <b>inside the portal</b> and it stays signed in while you go back and forth between lessons and Skill Builders. You can also open it on its own in a new tab. Skill Builders tell you exactly what to do in each tool, then ask for the ID or score it gives you so your trainer can review your work.</p>
    <div class="md-tools">${tools.map(t=>`<div class="card md-tool${t.live?"":" soon"}">
      <div class="md-tool-h"><span class="md-tool-ic">${t.icon}</span><div><b>${E(t.name)}</b><div><span class="md-badge ${t.live?"live":"soon"}">${t.live?"● Live":"Coming soon"}</span></div></div></div>
      <p>${E(t.desc)}</p>
      ${t.live?`<div class="md-tool-act"><button class="btn btn-primary btn-sm" onclick="openTool('${t.id}')">Open in portal</button><button class="btn btn-ghost btn-sm" onclick="openTool('${t.id}','tab')">New tab ↗</button></div>
        <div class="md-tool-url">${E(t.url.replace(/^https:\/\//,""))}</div>`
      :`<p class="md-tool-note">Until it's live, Skill Builder steps for this tool are logged as <b>Tasks</b> in the CMS.</p>`}
    </div>`).join("")}</div>
    <div class="card" style="padding:16px 20px;margin-bottom:16px"><b style="color:var(--navy)">How the portal and the tools work together</b>
      <ol style="font-size:13px;margin:8px 0 0;padding-left:20px"><li>Learn it in the day's lessons here.</li><li>Open the Skill Builder. It gives you the case documents and the exercise.</li><li>Do the file work in the tool. In the CMS: open (or <b>Start a New Case</b> for) the client's case, keep the provider list, upload each document under the <b>CMS category</b> shown in 📁 Documents (records under <b>Medical</b>, bills under <b>Bills</b>), save your chronology, summary, itemization and demand, and add Tasks and Notes for every follow-up. Then <b>Save Case</b> to get your permanent Case ID.</li><li>Practice the calls in 🔥 <b>Live Roleplay</b> and each Skill Builder's live call.</li><li>Come back and log the Case ID or score in the Skill Builder. Your trainer reviews your work.</li></ol>
      <p style="font-size:12.3px;color:var(--ink-soft);margin:10px 0 0">Signed in, but the tool asks you to sign in again inside the portal? Some browsers block sign-in inside an embedded page. Use <b>New tab ↗</b>. Your training portal stays open here.</p></div>
    <div class="card" style="padding:16px 20px;margin-bottom:16px"><b style="color:var(--navy)">My tool work log</b>
      ${log.length ? `<table class="md-table"><thead><tr><th>Skill Builder</th><th>Tool</th><th>ID / score</th><th>Logged</th></tr></thead><tbody>${log.map(([k,v])=>`<tr><td>${E(toolTitle(v.tool||k.split(":")[0]))}</td><td>${E((mdTool(v.platform||"cms")||{}).short||"CMS")}</td><td><b>${E(v.caseId)}</b></td><td>${fmtDate(v.at)}</td></tr>`).join("")}</tbody></table>` : `<p style="font-size:13px;color:var(--ink-soft);margin:6px 0 0">Nothing logged yet. Skill Builders will ask for your Case ID or call score.</p>`}</div>
    ${state.isAdmin ? `<div class="card" style="padding:16px 20px;border-left:4px solid var(--orange)"><b style="color:var(--navy)">Admin: tool addresses</b>
      <p style="font-size:12.8px;color:var(--ink-soft);margin:4px 0 10px">Saved for every trainee. Switch a tool to <b>Live</b> once its address works. Each tool also stays reachable on its own at its address.</p>
      ${tools.map(t=>`<div class="md-tool-admin"><span>${t.icon} <b>${E(t.short)}</b></span>
        <input id="toolUrl_${t.id}" value="${E(t.url)}" placeholder="https://…">
        <select id="toolStatus_${t.id}"><option value="live"${t.status==="live"?" selected":""}>Live</option><option value="coming"${t.status!=="live"?" selected":""}>Coming soon</option></select></div>`).join("")}
      <button class="btn btn-navy btn-sm" style="margin-top:8px" onclick="saveToolSettings()">Save tool settings</button></div>` : ""}`;
};
window.renderCmsSimulator = window.renderTrainingTools;

/* 🛠 Simulators: the shared simulators on the LSH Training Portal, opened for Medsum & Demand. */
window.renderCallSimulator = function(){
  const calls = mdTool("calls"), mail = mdTool("email");
  const card = (t, extra)=> `<div class="card md-tool${t.live?"":" soon"}">
      <div class="md-tool-h"><span class="md-tool-ic">${t.icon}</span><div><b>${E(t.name.replace(/ \(LSH Training Portal\)$/,""))}</b><div><span class="md-badge ${t.live?"live":"soon"}">${t.live?"● Live on the LSH Training Portal":"Coming soon"}</span></div></div></div>
      <p>${E(t.desc)}</p>${extra||""}
      ${t.live?`<div class="md-tool-act"><button class="btn btn-primary btn-sm" onclick="openTool('${t.id}')">Open here</button><button class="btn btn-ghost btn-sm" onclick="openTool('${t.id}','tab')">New tab ↗</button></div>`:""}
    </div>`;
  return `<p class="eyebrow">Simulators</p>
    <h1 style="color:var(--navy);font-size:26px;margin:6px 0 8px">🛠 Simulators</h1>
    <p style="color:var(--ink-soft);font-size:14px;max-width:80ch;margin:0 0 16px">Phone and email practice live on the <b>LSH Training Portal</b>, shared by every program. They open here set to <b>Medsum &amp; Demand</b> and carrying your name and batch, so your scores reach your trainer. The Call Simulator's Medsum &amp; Demand call pack isn't live yet — until it is, practise the calls in 🔥 Live Roleplay and in each Skill Builder's live call.</p>
    <div class="md-tools">${card(calls)}${card(mail)}</div>
    <div class="card" style="padding:14px 18px;font-size:12.8px;color:var(--ink-soft)">Want more? Live Roleplay (🔥) has the client, adjuster and provider-office calls from the lessons, and every Skill Builder has a live call built in.${state.isAdmin?` <b>Admin:</b> results appear on the Training Portal's Simulators page when you're signed in there as admin. Addresses are set in 🧰 Tools.`:""}</div>`;
};
window.saveToolSettings = async function(){
  const out = {};
  for(const d of MD_TOOL_DEFAULTS){
    const url = ((document.getElementById("toolUrl_"+d.id)||{}).value||"").trim().replace(/\/+$/,"");
    const status = (document.getElementById("toolStatus_"+d.id)||{}).value || d.status;
    if(url && !/^https:\/\/[^\s]+$/i.test(url)){ toast(`${d.short}: enter the full https:// address.`); return; }
    if(status==="live" && !url){ toast(`${d.short}: add its address before switching it to Live.`); return; }
    out[d.id] = {url, status};
  }
  state.toolSettings = out;
  await sharedSet("settings:tools", {tools:out, at:new Date().toISOString()});
  toast("Tool settings saved for everyone."); render();
};

/* The Canva training deck behind each day (the course follows these decks). */
const MD_DECKS = {
  1:{title:"Medsum and Demand Training", url:"https://www.canva.com/design/DAG49oTZgSA/FLzIgWiJOxxOjjhMTqi0ow/view?utm_content=DAG49oTZgSA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h03952907ff"},
  2:{title:"Medical Chronology // Medical Summary", url:"https://www.canva.com/design/DAG49g8gzJw/HsuSiHTvURf9iRcoQX1YOA/view?utm_content=DAG49g8gzJw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd4d7febee7"},
  3:{title:"Bills Itemization", url:"https://www.canva.com/design/DAG49iALOAk/BFPrc1teDZ8iBwclArd3yw/view?utm_content=DAG49iALOAk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h80dcb5b8df"},
  4:{title:"Demand Overview", url:"https://www.canva.com/design/DAG6R08r6x8/4Mwi4dv7aBlU6UWyLEd_Vw/view?utm_content=DAG6R08r6x8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf93a596f5a"},
  5:{title:"Demand Packet and Responses", url:"https://www.canva.com/design/DAG9AEyAJx4/QDp5yyiUQ8gDbI238IWffw/view?utm_content=DAG9AEyAJx4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9d9834736b"}
};
window.MD_DECKS = MD_DECKS;
const deckLink = (n)=> MD_DECKS[n] ? `<a class="btn btn-ghost btn-sm" style="font-family:'Inter',system-ui,sans-serif;font-size:12px" href="${E(MD_DECKS[n].url)}" target="_blank" rel="noopener">🎨 Canva deck ↗</a>` : "";

window.renderHandouts = function(){
  const byDay = [1,2,3,4,5].map(n=>({n, items:MD_HANDOUTS.filter(h=>h.day===n)}));
  const tpl = MD_DOCS.filter(d=>d.folder==="templates");
  return `<p class="eyebrow">Reference Library</p>
    <h1 style="color:var(--navy);font-size:26px;margin:6px 0 8px">📚 Handouts & Templates</h1>
    <p style="color:var(--ink-soft);font-size:14px;max-width:78ch;margin:0 0 16px">One printable handout and one Canva training deck per training day, plus the working templates and checklists you'll use in the Skill Builders.</p>
    <div class="card" style="padding:14px 18px;margin-bottom:14px;border-left:4px solid var(--orange)"><h3 style="font-size:14px;color:var(--navy);margin:0 0 6px">🎨 Training decks (Canva)</h3>
      ${[1,2,3,4,5].map(n=>`<div class="md-doc-row"><div><span class="t">${E(MD_DECKS[n].title)}</span><div class="d">Day ${n} — ${E((DAYS.find(d=>d.id===n)||{}).title||"")}</div></div>${deckLink(n)}</div>`).join("")}</div>
    ${byDay.map(({n,items})=>`<div class="card" style="padding:14px 18px;margin-bottom:14px"><h3 style="font-size:14px;color:var(--navy);margin:0 0 6px;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;align-items:center"><span>Day ${n} — ${E((DAYS.find(d=>d.id===n)||{}).title||"")}</span>${deckLink(n)}</h3>
      ${items.map(h=>`<div class="md-doc-row"><span class="t">${E(h.title)}</span><a class="btn btn-ghost btn-sm" href="documents/${h.file.split("/").map(encodeURIComponent).join("/")}" target="_blank" rel="noopener">Open</a></div>`).join("")}</div>`).join("")}
    <div class="card" style="padding:14px 18px"><h3 style="font-size:14px;color:var(--navy);margin:0 0 6px">📝 Templates & checklists</h3>
      ${tpl.map(d=>`<div class="md-doc-row"><div><span class="t">${E(d.title)}</span><div class="d">${E(d.desc)}</div></div><a class="btn btn-ghost btn-sm" href="${mdDocUrl(d)}" target="_blank" rel="noopener">Open</a></div>`).join("")}</div>`;
};

window.renderClientProfile = function(){
  return `<h1 style="color:var(--navy);font-size:28px;margin:0 0 10px">📂 Case File: Dana Whitfield — Medsum &amp; Demand</h1>
    <p>The working case for all five days. Every fact below comes from the documents in 📁 Documents — when a Skill Builder asks you to verify something, verify it against the document, not this summary.</p>
    <div class="client-intro-banner"><div class="cib-tag">📌 Read This First</div><h2>One case, from the file handoff to the settlement</h2>
      <p>Treatment is finished and Dana is at maximum medical improvement. Your week: audit the file and request what's missing on Day 1, build the chronology and summary on Day 2, itemize the bills on Day 3, audit and finish the demand on Day 4, and send the packet and work Keystone's responses on Day 5. The errors you catch early — the wrong date of incident, the prior injury, the duplicate charge — are the ones that protect the demand later.</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px"><button class="btn btn-navy btn-sm" onclick="goto('casedocs')">📁 Open the Case Documents</button><button class="btn btn-ghost btn-sm" onclick="openCms()">🗂 Open the CMS</button></div></div>
    <div class="profile-grid">${CLIENT_PROFILE_DOC.map(sec=>`<div class="card profile-section"><h3>${E(sec.section)}</h3><ul>${sec.items.map(i=>`<li>${E(i)}</li>`).join("")}</ul></div>`).join("")}</div>`;
};
window.clientAvatarSvg = function(){ return `<div class="client-photo-img" style="display:flex;align-items:center;justify-content:center;font-size:42px;background:#EEF0F6">🩺</div>`; };

/* Day 1 "meet the client" slide → meet the case */
window.renderMeetClientSlide = function(){
  return `<div class="card meet-client-card"><div class="mc-tag">🩺 Meet the Case</div><h3>Dana Whitfield — rear-end collision, 03/14/2026</h3>
    <p>Saturday, March 14, 2026, about 4:15 PM. Dana was stopped at a red light on Oak Street when Grant Mercer, looking at his phone, drove his F-150 into the back of her car. She went to the emergency room that day with neck and back pain, then had five months of treatment: chiropractic care, an MRI, an orthopedic surgeon, pain management and an injection. On 08/21/2026 her doctor placed her at maximum medical improvement.</p>
    <p>For the next five days you're her Demand Specialist — from the file handoff to the adjuster's response. Start with the handoff memo.</p>
    ${docPacket(["DW01","DW02","DW04"], "Start here")}
    <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-navy btn-sm" onclick="goto('clientprofile')">Read the Case File</button><button class="btn btn-ghost btn-sm" onclick="goto('casedocs')">📁 All documents</button></div></div>`;
};

/* ---- 🧰 Tools menu in the course's top bar (rendered by renderTopbar in md-updates.js) ---- */
window.mdToolsMenuHTML = function(){
  const tools = MD_TOOL_DEFAULTS.map(d=>mdTool(d.id)).filter(t=>t.live);
  const open = currentFrame && frameShell && !frameShell.hidden;
  return `<div class="nav-tools" id="navTools">
    <button type="button" class="${open?"active":""}" aria-haspopup="true" onclick="mdToggleToolsMenu(event)">🧰 Tools ▾</button>
    <div class="nav-tools-menu" role="menu">${tools.map(t=>`<button type="button" role="menuitem" class="${open && t.id===currentFrame?"on":""}" onclick="mdPickTool('${t.id}')">${t.icon} ${E(t.short)}</button>`).join("")}
      <button type="button" class="more" onclick="mdPickTool(null)">All tools, sign-in help &amp; my work log</button></div></div>`;
};
window.mdToggleToolsMenu = function(e){ if(e) e.stopPropagation(); const n = document.getElementById("navTools"); if(n) n.classList.toggle("open"); };
window.mdPickTool = function(id){
  const n = document.getElementById("navTools"); if(n) n.classList.remove("open");
  if(state.mobileNavOpen && typeof toggleMobileNav==="function") toggleMobileNav();
  if(id) openTool(id); else goto("tools");
};
document.addEventListener("click", e=>{ const n = document.getElementById("navTools"); if(n && !n.contains(e.target)) n.classList.remove("open"); });
function repaintToolsMenu(){
  const n = document.getElementById("navTools"); if(!n) return;
  const wasOpen = n.classList.contains("open");
  n.outerHTML = mdToolsMenuHTML();
  if(wasOpen){ const m = document.getElementById("navTools"); if(m) m.classList.add("open"); }
}
// Going anywhere in the course closes the tool (its session is kept; "Return to …" reopens it).
const _gotoForFrame = window.goto;
window.goto = function(){ if(frameShell && !frameShell.hidden) closeToolFrame(); return _gotoForFrame.apply(this, arguments); };
// A re-render can change the top bar's height.
const _renderForFrame = window.render;
window.render = function(){ const r = _renderForFrame.apply(this, arguments); placeFrame(); return r; };

/* The building blocks, for js/md-practice.js (the 🧪 Practice hub). */
window.__mdKit = {TOOLS, part, scenario, flagTable, sorter, checklist, calc, choice, choiceText, aiTask, docPacket, toolStep, cmsStep, E, money, scorePart, mdState, MD_UI, toolOfKey, dayOfTool};

/* ---------- startup ---------- */
window.addEventListener("load", ()=>{
  setTimeout(async ()=>{
    try{ state.cmsLog = (await storeGet("cms-log")) || state.cmsLog || {}; }catch(e){}
    await loadToolSettings(); if(typeof render==="function" && (state.view==="tools"||state.view==="cms")) render();
  }, 300);
});
})();
