/* ============================================================
   The trainer's Canva decks as the day's lesson slides.
   Each day opens with its Canva deck, page by page, exactly as designed
   (images in slides/dayN/, captured by build/canva/capture.cjs; page text
   and titles in js/md-canva-decks.js). Then "Apply it to Dana's file"
   takes the same skills through the running case (the day's topics),
   before the Skill Builders and the Knowledge Check.
   Presenter view, Trainer Cues and the Speaker Notes PDF read each page's
   script from js/slide-scripts/canva-dayN.js (window.CANVA_SCRIPTS["day:page"]).
   Loaded after js/md-updates.js.
   ============================================================ */
(function(){
  const deckFor = (id)=>{ const k = (window.MD_CANVA || {})[id]; return k && k.pages && k.pages.length ? k : null; };
  const scriptFor = (id, n)=> (window.CANVA_SCRIPTS || {})[`${id}:${n}`] || null;
  const E = (s)=> String(s == null ? "" : s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  window.mdCanvaDeck = deckFor;

  const css = document.createElement("style"); css.id = "md-canva-css"; css.textContent = `
.lesson-stage #lessonSlideWrap:has(> .canva-slide){padding:0 !important;background:#10131f !important;height:auto !important;aspect-ratio:16/9;max-height:calc(100vh - 150px);min-height:0 !important;overflow:hidden !important;display:flex;align-items:center;justify-content:center;}
.lesson-stage #lessonSlideWrap:has(> .canva-slide)::before{display:none;}
.lesson-stage #lessonSlideWrap > .canva-slide{width:100%;max-width:none !important;height:100%;display:flex;align-items:center;justify-content:center;margin:0;}
.lesson-stage:fullscreen #lessonSlideWrap:has(> .canva-slide){aspect-ratio:auto;height:100% !important;max-height:none;}
.canva-slide img{display:block;width:100%;height:100%;object-fit:contain;user-select:none;-webkit-user-drag:none;}
.canva-slide .cv-tag{position:absolute;right:12px;bottom:10px;font:700 11px/1 'IBM Plex Mono',monospace;letter-spacing:.06em;color:#fff;background:rgba(16,19,31,.55);padding:5px 8px;border-radius:99px;pointer-events:none;}
.md-apply{text-align:center;}
.md-apply h2{font-family:'Fraunces',Georgia,serif;color:var(--navy);font-size:clamp(28px,2.6vw,40px);margin:4px 0 12px;}
.md-apply p{max-width:62ch;margin:0 auto 14px;color:var(--ink-soft);font-size:16px;line-height:1.55;}
.md-apply ol{display:inline-block;text-align:left;margin:0 auto;padding-left:22px;columns:2;column-gap:36px;font-size:14px;line-height:1.7;color:var(--navy);}
@media (max-width:760px){ .md-apply ol{columns:1;} .canva-slide .cv-tag{display:none;} }
.cue-deck summary{font-weight:700;}
`;
  document.head.appendChild(css);

  /* ---------- the day's slides: opening slides → Canva deck → "Apply it" → the day's topics → … ---------- */
  const baseBuild = window.buildDaySlides;
  window.buildDaySlides = function(d){
    const slides = baseBuild(d), deck = deckFor(d.id);
    if(!deck) return slides;
    let at = slides.findIndex(s=>s.type==="topic");
    if(at < 0) at = slides.findIndex(s=>["video","practiceLab","discussion"].includes(s.type));
    if(at < 0) at = slides.length;
    const pages = deck.pages.map((p,i)=>({type:"canva", page:i}));
    if(slides.some(s=>s.type==="topic")) pages.push({type:"applyCase"});
    slides.splice(at, 0, ...pages);
    return slides;
  };

  const baseTitle = window.daySlideTitle;
  window.daySlideTitle = function(d, slide){
    if(slide && slide.type==="canva"){ const p = (deckFor(d.id)||{pages:[]}).pages[slide.page]; return p ? p.title || `Slide ${slide.page+1}` : "Slide"; }
    if(slide && slide.type==="applyCase") return "Apply it to Dana Whitfield's file";
    return baseTitle(d, slide);
  };

  const baseContent = window.renderDaySlideContent;
  window.renderDaySlideContent = function(d, slide, idx){
    if(slide && slide.type==="canva"){
      const deck = deckFor(d.id), p = deck && deck.pages[slide.page];
      if(!p) return "";
      // load the next page ahead, so Next is instant
      const nx = deck.pages[slide.page+1]; if(nx){ const im = new Image(); im.decoding = "async"; im.src = nx.img; }
      const alt = (p.title + ". " + String(p.text||"").replace(/\s+/g," ")).slice(0, 900);
      return `<div class="canva-slide"><img src="${E(p.img)}" alt="${E(alt)}" width="1600" height="900" decoding="async" draggable="false"><span class="cv-tag">${slide.page+1} / ${deck.pages.length}</span></div>`;
    }
    if(slide && slide.type==="applyCase"){
      return `<div class="card md-apply"><div class="topic-separator">DAY ${d.id} &middot; APPLY IT</div>
        <h2>Now apply it to Dana Whitfield's file</h2>
        <p>You've seen how it works. Next, the same skills on the case you'll use in today's Skill Builder, one topic at a time.</p>
        <ol>${d.lessons.map(l=>`<li>${E(l.h)}</li>`).join("")}</ol></div>`;
    }
    return baseContent(d, slide, idx);
  };

  /* ---------- Presenter view: the page's spoken script ---------- */
  const scriptBlock = (where, s, fallbackText)=>{
    const say = s && s.say ? s.say : "", ask = s && s.ask ? s.ask : "";
    const paras = [say || `Give the room a moment with this page, then explain it in your own words: ${String(fallbackText||"").replace(/\s+/g," ").slice(0,400)}`, ask].filter(Boolean);
    return `<div class="pn"><div class="script-block"><div class="script-head"><span>🎙 Script — read aloud${where}</span></div>
      ${paras.map((x,i)=>`<p class="script-say${i && ask && i===paras.length-1 ? " script-ask" : ""}">${E(x)}</p>`).join("")}</div></div>`;
  };
  const baseCues = window.presenterCues;
  window.presenterCues = function(d, slide){
    if(slide && slide.type==="canva"){
      const deck = deckFor(d.id), p = deck && deck.pages[slide.page];
      if(!p) return baseCues(d, slide);
      return `<h3>${E(p.title)} <small style="font-size:12px;color:var(--ink-soft);">Canva slide ${slide.page+1} of ${deck.pages.length}</small></h3>` +
        scriptBlock(` · Canva slide ${slide.page+1} of ${deck.pages.length}`, scriptFor(d.id, slide.page+1), p.text);
    }
    if(slide && slide.type==="applyCase"){
      return `<h3>Apply it to Dana Whitfield's file</h3>` + scriptBlock("", {
        say: `That's the deck. Now let's take the same skills and use them on a real file: Dana Whitfield's, the case you'll work in today's Skill Builder. We'll go topic by topic, and every example comes straight from her records.`,
        ask: `Before we start, which idea from the deck do you think will be hardest to apply to a real file?`}, "");
    }
    return baseCues(d, slide);
  };

  /* ---------- Speaker Notes PDF: the deck's scripts come first ---------- */
  const baseLines = window.buildDayScriptLines;
  window.buildDayScriptLines = function(d){
    const lines = baseLines(d), deck = deckFor(d.id);
    if(!deck) return lines;
    const add = [`## Canva deck — ${deck.deck}`];
    deck.pages.forEach((p,i)=>{
      const s = scriptFor(d.id, i+1);
      add.push(`## ${String(i+1).padStart(2,"0")}. ${p.title}  ·  Canva slide ${i+1} of ${deck.pages.length}`);
      if(s && s.say) add.push(s.say); else add.push(`ON THIS SLIDE: ${String(p.text||"").replace(/\s+/g," ").slice(0,500)}`);
      if(s && s.ask) add.push(`ASK: ${s.ask}`);
      add.push("---");
    });
    add.push(`## Apply it to Dana Whitfield's file`);
    return [lines[0], ...add, ...lines.slice(1)];
  };

  /* ---------- Admin → Trainer Cues: the deck's scripts above the day's topics ---------- */
  const baseCuesPage = window.renderAdminTrainerCues;
  if(typeof baseCuesPage === "function"){
    window.renderAdminTrainerCues = function(){
      const html = baseCuesPage(), d = DAYS.find(x=>x.id===(state.cuesDay||1)) || DAYS[0], deck = deckFor(d.id);
      if(!deck) return html;
      const block = `<details class="cue-item cue-deck" open><summary><span class="cue-num">🎨</span>Canva deck — ${E(deck.deck)}<span class="cue-steps">${deck.pages.length} slides</span></summary>
        <div class="cue-body">${deck.pages.map((p,i)=>`<div class="pn-part">${i+1}. ${E(p.title)}</div>${scriptBlock("", scriptFor(d.id, i+1), p.text)}`).join("")}</div></details>`;
      const at = html.indexOf(`<details class="cue-item"`);
      return at < 0 ? html + block : html.slice(0, at) + block + html.slice(at);
    };
  }
})();
