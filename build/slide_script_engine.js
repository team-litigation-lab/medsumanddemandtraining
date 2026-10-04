/* ---------- Trainer speaker notes + the spoken slide scripts (same engine as the EA/PA course) ----------
   Swapped in by build/build.py. Hand-written scripts: js/slide-scripts/dayN.js (window.SLIDE_SCRIPTS). */
/* ---------- trainer speaker notes (hardcoded in js/presenter-notes.js) ----------
   One note per slide: "On this slide" (what's on screen), the script (Say / Ask /
   Wrap) and, on the topic's last slide, the scenario to run with the room.
   No AI writes these while a session runs. */
function presenterNote(d, l, part){
  const n = (window.PRESENTER_NOTES || {})[`${d.id}::${l.h}`];
  if(n) return l.singleSlide ? Object.assign({}, n.p1, {wrap: n.p2 && n.p2.wrap, scenario: n.p2 && n.p2.scenario}) : (part===2 ? n.p2 : n.p1) || {};
  // A topic added later in the Content Studio has no written note yet: use the lesson's own lines.
  const sc = buildDiscussionScript(d, l, d.lessons.indexOf(l)), unq = t=>String(t||"").replace(/^"|"$/g,"");
  const scen = (l.fourPart && l.fourPart.discussionCase) || "";
  // (A course built on this engine keeps its own trainer cue, e.g. the CM deck's speaker notes.)
  const cue = l.trainerCue || "";
  if(part===1 || l.singleSlide) return {cue, say: unq(sc.open), ask: unq(sc.ask), wrap: l.singleSlide ? unq(sc.wrap) : "", scenario: l.singleSlide ? scen : ""};
  return {say: sc.correct || "", wrap: unq(sc.wrap), scenario: scen};
}
/* ---------- Full spoken script for a slide ----------
   Built from exactly what is on the slide (the same data the slide renders), so it always matches
   what the room sees — including topics added later in the Content Studio. Part 1 covers ① Core
   Principles and ② Step-by-Step; Part 2 covers ③ Best Practices & Pitfalls and ④ Go Deeper.
   A hand-written "steps" script in presenter-notes.js (Day 3) replaces the generated ② section. */
const SCRIPT_ORDINALS = ["First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth"];
function scriptSentence(t){
  let x = String(t||"").replace(/\s+/g," ").trim();
  if(!x) return "";
  if(!/[.!?:"”')]$/.test(x)) x += ".";
  return x;
}
function scriptSoften(t){
  // "First, the calendar…" reads better than "First, The calendar…" for ordinary opening words.
  const x = scriptSentence(t);
  return /^(A|An|The|This|That|These|Those|Every|Each|Your|You|It|Its|If|When|Most|Many|Some|Good|Always|Never|Once|Before|After|Treat|Use|Keep|Build|Set|Make|Don't|Do|Know|Ask|Check|Write|Log|Map|Track|Confirm|Identify|Review|Protect|Name|Plan)\b/.test(x)
    ? x.charAt(0).toLowerCase() + x.slice(1) : x;
}
function scriptList(items, intro){
  const xs = (items||[]).map(scriptSentence).filter(Boolean);
  if(!xs.length) return "";
  if(xs.length===1) return (intro ? intro+" " : "") + xs[0];
  return (intro ? intro+"\n" : "") + xs.map((x,i)=>{
    const lead = i===xs.length-1 && xs.length>2 ? "And finally" : (SCRIPT_ORDINALS[i]||"Next");
    const soft = scriptSoften(x);
    // A point that opens with a name or a label ("Five categories: …") keeps its capital: "Second point: Five categories…"
    return soft !== x ? `${lead}, ${soft}` : `${lead === "And finally" ? "And finally" : lead + " point"}: ${x}`;
  }).join("\n");
}
function scriptLabelled(items, pick){
  return (items||[]).map(pick).filter(Boolean).map(scriptSentence).join("\n");
}
function slideScriptSections(d, l, part){
  const out = {};
  const notes = (window.PRESENTER_NOTES || {})[`${d.id}::${l.h}`] || {};
  const fp = l.fourPart || null;
  const topic = `"${l.h}"`;
  if(part !== 2){
    // ① Core Principles
    let core = "";
    if(fp && fp.corePrinciples && fp.corePrinciples.length){
      core = scriptList(fp.corePrinciples, `Let's start with the core principles behind ${topic}.`);
    }else if(l.layout==="QUADRANT" && l.quadrants){
      core = `This slide breaks ${topic} into ${l.quadrants.length} areas. Let's walk through each one.\n` + scriptLabelled(l.quadrants, q=>q.label ? `${q.label}: ${q.desc||""}` : q.desc);
    }else if(l.layout==="COMPARE" && l.compareLeft && l.compareRight){
      core = `This slide puts two approaches side by side.\n` +
        `On the left, ${l.compareLeft.label}:\n${(l.compareLeft.items||[]).map(scriptSentence).join("\n")}\n` +
        `On the right, ${l.compareRight.label}:\n${(l.compareRight.items||[]).map(scriptSentence).join("\n")}\n` +
        `Notice the difference between the two columns: that contrast is the point of this topic.`;
    }else if(l.layout==="THREEBOX" && l.boxes){
      core = `There are ${l.boxes.length} pieces to ${topic}. Let's take them one at a time.\n` + scriptLabelled(l.boxes, x=>x.label ? `${x.label}: ${x.desc||""}` : x.desc);
    }else if(l.layout==="STAT"){
      core = `Take a look at the number on this slide: ${l.statNumber}${l.statLabel ? ` ${l.statLabel}` : ""}. Keep that figure in mind as we go through ${topic}.`;
    }else if(l.layout==="ICONLIST" && l.icons){
      core = `This slide lays out ${l.icons.length} parts of ${topic}.\n` + scriptLabelled(l.icons, x=>x.label ? `${x.label}: ${x.desc||""}` : x.desc);
    }else if(l.layout==="PALETTE" && l.palette){
      core = `Here is the palette, color by color.\n` + scriptLabelled(l.palette, c=>`${c.name}${c.hex ? ` (${c.hex})` : ""}: ${c.use||""}`);
    }else if(l.layout==="TABLE" && l.tableHeaders && l.tableRows){
      const h = l.tableHeaders;
      core = `This table compares ${h.slice(1).join(" and ")}, row by row.\n` + l.tableRows.map(r=>scriptSentence(`${r[0]}: ${h.slice(1).map((hh,k)=>`${hh}, ${r[k+1]}`).join("; ")}`)).join("\n");
    }else if(l.layout==="PROCESS"){
      core = `${topic} is a sequential skill. The core principle is to follow the steps in order, not to treat them as optional or interchangeable.`;
    }else if((l.b||[]).length){
      core = `Here's the core idea behind ${topic}. ${scriptSentence(l.b[0])}`;
    }
    if(core) out[1] = core;
    // ② Step-by-Step How-To Framework
    let steps = "";
    if(notes.steps) steps = notes.steps;
    else{
      const list = (fp && fp.howTo && fp.howTo.length) ? fp.howTo
        : (l.layout==="PROCESS" && l.processSteps) ? l.processSteps.map(x=>x.label ? `${x.label}: ${x.desc||""}` : x.desc)
        : (l.howTo || []);
      if(list.length) steps = `Continuing on, here is our step-by-step how-to framework for putting ${topic} into practice:\n` + list.map((x,i)=>`${i+1}. ${scriptSentence(x)}`).join("\n");
    }
    if(steps) out[2] = steps;
  }
  if(part === 2 || l.singleSlide){
    if(l.singleSlide && part !== 2){ /* single-slide topics show only ① and ② */ }
    else{
      // ③ Best Practices & Pitfalls
      const bp = (fp && fp.bestPractices) ? fp.bestPractices : ((!l.layout && (l.b||[]).length > 1) ? l.b.slice(1) : (l.b||[]));
      const lines = [];
      const plain = bp.map(x=>String(x||"").trim()).filter(t=>t && !/^(pitfall|discussion prompt):/i.test(t));
      const LEAD = ["To begin with,","Next,","Also,","On top of that,","Another key point:","Keep in mind,","Beyond that,"];
      let n = 0;
      bp.forEach(x=>{
        const t = String(x||"").trim(); if(!t) return;
        if(/^pitfall:/i.test(t)) lines.push(`Here's a pitfall to watch out for: ${scriptSentence(t.replace(/^pitfall:\s*/i,""))}`);
        else if(/^discussion prompt:/i.test(t)) lines.push(`Let's discuss this as a group: ${scriptSentence(t.replace(/^discussion prompt:\s*/i,""))}`);
        else{ const lead = plain.length>1 && n===plain.length-1 ? "And finally," : LEAD[Math.min(n, LEAD.length-1)]; n++;
          const soft = scriptSoften(t);
          // Points that open with a label or a name are read as they are, without a connector in front.
          lines.push(plain.length===1 || (soft===scriptSentence(t) && !/:$/.test(lead)) ? scriptSentence(t) : `${lead} ${/:$/.test(lead) ? scriptSentence(t) : soft}`); }
      });
      if(l.callout && l.callout.text) lines.push(`Notice the ${l.callout.label ? `"${l.callout.label}"` : "highlighted"} box on this slide: ${scriptSentence(l.callout.text)}`);
      if(lines.length) out[3] = `Now let's move on to the practices that make ${topic} work, and the pitfalls to avoid.\n` + lines.join("\n");
      // ④ Go Deeper
      const extra = typeof LESSON_EXTRA_LEARNING!=="undefined" && LESSON_EXTRA_LEARNING[d.id+"::"+l.h];
      if(extra && extra.p && extra.p.length) out[4] = `To go deeper, let's look at ${extra.t}.\n` + extra.p.map((x,i)=>`${i===0 ? "" : (i===extra.p.length-1 ? "Finally, " : "Also, ")}${i===0 ? scriptSentence(x) : scriptSoften(x)}`).join("\n");
    }
  }
  return out;
}
// Section scripts: PRESENTER_NOTES["day::title"].s1 … s4 = {on, say, ask} for ① Core Principles,
// ② Step-by-Step, ③ Best Practices & Pitfalls, ④ Go Deeper (used for the "On this page" summary when
// a slide is split over pages).
const PN_SECTION_NAMES = {1:"Core Principles", 2:"Step-by-Step Framework", 3:"Best Practices & Pitfalls", 4:"Go Deeper"};
/* ---------- The spoken script for one slide ----------
   Every slide's script follows the same four beats:
     ① The why      — the punchline: why this slide matters, in one quick sentence
     ② Talk it through — what's on the slide, in plain spoken words (not the bullets read out)
     ③ Walk through it — the steps or points in order: first, next, then, finally
     ④ Ask the room / Your turn — an action or a question, so it ends as a conversation
   Hand-written scripts live in js/slide-scripts/dayN.js (window.SLIDE_SCRIPTS["day::title"].p1 / .p2).
   A topic without one (e.g. added later in the Content Studio) gets the same four beats built from
   what is on the slide. */
function scriptInline(t){
  // A point read mid-sentence: "Perform the check" → "perform the check"; a label or a name keeps its capitals.
  const x = scriptSentence(t), w = x.split(/\s+/);
  const head = x.split(/\s[—–-]\s|:/)[0].split(/\s+/).filter(v=>!/^(of|the|and|a|an|to|for|in|on|with|or|vs\.?|&)$/i.test(v) && !/^[A-Z0-9/&().-]{2,}$/.test(v));
  const label = head.length >= 2 && head.every(v=>/^[A-Z“"(]/.test(v));
  if(label || /^[A-Z][A-Z0-9]|^[A-Z][a-z]+[A-Z]/.test(w[0]) || /^(I|Dana|Whitfield|Keystone|Reyes|Laura|Bennett|Marcus|Webb|Harbor|Summit|Bayside|Patel|Medicare|Medicaid|ERISA|Bates|Exhibit|Excel|Gemini|Claude)\b/.test(w[0])) return x;
  return x.charAt(0).toLowerCase() + x.slice(1);
}
function scriptWalk(items){
  const xs = (items||[]).map(x=>String(x||"").replace(/^\s*\d+[.)]\s*/,"").trim()).filter(Boolean);
  return xs.map((x,i)=>{
    const lead = xs.length===1 ? "" : i===0 ? "First, " : i===xs.length-1 ? "Finally, " : (i===1 ? "Next, " : (i%2 ? "After that, " : "Then, "));
    return lead ? lead + scriptInline(x) : scriptSentence(x);
  });
}
function slideScript(d, l, part){
  const key = (part===2 && !l.singleSlide) ? "p2" : "p1";
  const hand = ((window.SLIDE_SCRIPTS || {})[`${d.id}::${l.h}`] || {})[key];
  if(hand) return {why: hand.why||"", talk: hand.talk||"", walk: hand.walk||[], ask: hand.ask||"", hand: true};
  const n = presenterNote(d, l, part), secs = slideScriptSections(d, l, part);
  let walk = [];
  if(secs[2]) walk = scriptWalk(secs[2].split("\n").slice(1));
  const talk = [secs[1], secs[3], secs[4]].filter(Boolean).join("\n\n");
  const ask = key==="p1" ? (n.ask || (l.singleSlide ? n.wrap : "")) : (n.wrap || n.ask || "");
  return {why: n.say || "", talk, walk, ask, hand: false};
}
/* When a long slide is split over pages, each page gets its own part of the slide's script:
   page 1 opens with the why and the explanation, the pages that show the steps (slide 1) or the
   practices (slide 2) share the walk-through in order, and the last page ends with the question. */
function slideScriptForPage(s, l, part, pg){
  const P = pg && pg.pages > 1 && Array.isArray(pg.secsByPage) && pg.secsByPage.length===pg.pages ? pg.pages : 1;
  if(P===1) return Object.assign({}, s, {more: false, cont: false});
  const k = Math.max(0, Math.min(pg.page||0, P-1));
  const walkSecs = (part===2 && !l.singleSlide) ? [3,4] : [2];
  // a page with no numbered section on it (e.g. only a diagram) carries on from the page before
  let prev = [];
  const byPage = pg.secsByPage.map(ss=>{ const x = (ss && ss.length) ? ss : prev; prev = x; return x; });
  let wp = byPage.map((ss,i)=>ss.some(x=>walkSecs.includes(x)) ? i : -1).filter(i=>i>=0);
  if(!wp.length) wp = [P-1];
  const n = s.walk.length, pos = wp.indexOf(k);
  let walk = [];
  let from = 0;
  if(pos >= 0){ from = Math.round(n*pos/wp.length); const to = Math.round(n*(pos+1)/wp.length); walk = s.walk.slice(from, to); }
  return {why: k===0 ? s.why : "", talk: k===0 ? s.talk : "", walk, ask: k===P-1 ? s.ask : "",
    more: k < P-1, cont: from > 0, hand: s.hand, page: k, pages: P};
}
/* The script reads like speaker notes: one flowing paragraph the trainer can say out loud (the
   why, the explanation and the points in order), then the closing question on its own line. */
function scriptProse(s){
  const body = [s.why, String(s.talk||"").replace(/\s*\n+\s*/g, " "), (s.walk||[]).join(" ")].filter(Boolean).join(" ");
  return [body, s.ask].filter(Boolean);
}
function renderPresenterNote(d, l, part, secs, allSecs, pg){
  const n = presenterNote(d, l, part);
  const s = slideScriptForPage(slideScript(d, l, part), l, part, pg);
  const lastSlide = l.singleSlide || part===2;
  const where = (l.singleSlide ? "" : ` · slide ${part===2 ? 2 : 1} of 2`) + (s.pages > 1 ? ` · page ${s.page+1} of ${s.pages}` : "");
  let paras = scriptProse(s);
  if(!paras.length) paras = ["Give the room a moment to read this page, then ask which point here matters most in their own work."];
  return `<div class="pn">
    <div class="script-block"><div class="script-head"><span>🎙 Script — read aloud${where}</span></div>
      ${paras.map((x,i)=>`<p class="script-say${i && s.ask && i===paras.length-1 ? " script-ask" : ""}">${esc(x)}</p>`).join("")}
      ${s.more ? `<p class="script-next">Continues on the next page →</p>` : ""}
    </div>
    ${n.cue && s.page ? "" : (n.cue ? `<div class="pn-on pn-cue"><b>Trainer note — not read aloud</b><p>${esc(n.cue)}</p></div>` : "")}
    ${lastSlide && !s.more && n.scenario && !s.hand ? `<div class="pn-scen"><b>🎬 Scenario</b><p>${esc(n.scenario)}</p></div>` : ""}
  </div>`;
}
function buildDayScriptLines(d){
  const lines = [`## Day ${d.id} — ${d.title}: Trainer Speaker Notes`];
  d.lessons.forEach((l,i)=>{
    const parts = l.singleSlide ? [1] : [1,2];
    lines.push(`## ${String(i+1).padStart(2,"0")}. ${l.h}  ·  ${slideLabel(d, i)}`);
    parts.forEach(p=>{
      const n = presenterNote(d, l, p), s = slideScript(d, l, p);
      if(parts.length > 1) lines.push(`SLIDE ${p} OF 2`);
      const paras = scriptProse(s);
      if(paras[0]) lines.push(paras[0]);
      if(paras[1]) lines.push(`ASK: ${paras[1]}`);
      if((l.singleSlide || p===2) && n.scenario && !s.hand) lines.push(`SCENARIO: ${n.scenario}`);
    });
    lines.push("---");
  });
  if(d.discussionQuestion){ lines.push("## End-of-Day Discussion"); lines.push(`SAY: "Before we close Day ${d.id}, let's step back and talk about this together."`); lines.push(`ASK: "${d.discussionQuestion}"`); lines.push(`WRAP: "Thank you — hold onto those examples; we'll build on them tomorrow."`); }
  return lines;
}
