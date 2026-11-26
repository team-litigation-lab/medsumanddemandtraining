/* ============================================================
   🎨 The lesson deck, in the LSH Training Portal's look (LSH Academy Index, LSH Elev8, LSH Atlas).
   Design only: nothing here adds, removes, rewords or reorders anything on a slide. It restyles
   the deck a trainee steps through for each day: the stage and its frame, the slide card, the
   headings and tags, the step / do-and-watch / compare / table blocks, the Quick Check options,
   the Canva pages, and the deck's chrome (the tool row above the stage, the progress dots, the
   step counter and Previous / Next).
   - The stage wears the LSH frame: a thick rounded outline, navy along the top fading to gold at
     the bottom, around a deep-navy face with a soft warm glow.
   - Clean modern sans-serif headings (IBM Plex Sans, as on the Portal) in place of the serif;
     the small tags are IBM Plex Mono, set as pills.
   - Soft elevation on the slide card and the boxes on it; dark-navy primary buttons with an
     orange underline, as the Portal's Launch buttons.
   - Sizes are kept: font sizes, paddings and gaps stay what they were (a border that is added is
     taken back out of the padding), so a slide splits into the same pages and still fits its
     screen. Small orange lettering is darkened to #9A5414 so it clears AA (4.5:1) on white.
   - Motion follows the page's own prefers-reduced-motion rule (index.html), which already stops
     every animation and transition.
   Loaded after js/md-canva.js, so its rules come after the deck's own (md-updates, md-canva).
   ============================================================ */
(function(){
  if(document.getElementById("md-deck-style")) return;
  // IBM Plex Sans, the Portal's typeface; Inter (already loaded by the page) and the system sans stand in until it arrives
  if(!document.querySelector('link[href*="IBM+Plex+Sans:"]')){
    const f = document.createElement("link"); f.rel = "stylesheet";
    f.href = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;600;700;800&display=swap";
    document.head.appendChild(f);
  }
  const NAVY = "#1E2340", GOLD = "#DB8437", TAG = "#9A5414";
  const FRAME = `linear-gradient(180deg,${NAVY} 0%,#2c3360 30%,#a8692f 78%,${GOLD} 100%)`;
  const SANS = `'IBM Plex Sans','Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif`;
  const MONO = `'IBM Plex Mono',ui-monospace,SFMono-Regular,Menlo,monospace`;
  const S = "body .lesson-stage";              // one step more specific than the deck's own rules
  const W = `${S} #lessonSlideWrap`;
  const st = document.createElement("style"); st.id = "md-deck-style"; st.textContent = `
/* ---------- the stage: the LSH frame around a deep-navy face ---------- */
${S}{border:4px solid transparent;padding:14px 18px 12px;border-radius:22px;
  background:radial-gradient(900px 340px at 100% -12%,rgba(219,132,55,.17),transparent 60%) padding-box,
    radial-gradient(760px 320px at -6% 112%,rgba(120,132,190,.20),transparent 62%) padding-box,
    linear-gradient(160deg,${NAVY} 0%,#252B52 55%,#2D3462 100%) padding-box,
    ${FRAME} border-box;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.06),0 26px 50px -26px rgba(16,19,38,.75),0 8px 18px -10px rgba(16,19,38,.35);}
${S}:fullscreen{border-width:0;border-radius:0;padding:2.5vh 3vw;}
@media(max-width:760px){ ${S}{border-width:3px;padding:9px 7px;border-radius:16px;} }

/* ---------- progress: small dots, gold as you go, the current step a glowing gold pill ---------- */
${S} .slide-dots{gap:5px;}
${S} .slide-dot{width:8px;height:8px;background:rgba(255,255,255,.22);box-shadow:inset 0 0 0 1px rgba(255,255,255,.06);}
${S} .slide-dot:hover{background:rgba(240,192,138,.85);}
${S} .slide-dot.visited{background:rgba(240,192,138,.62);}
${S} .slide-dot.active{width:26px;border-radius:999px;background:linear-gradient(90deg,#F0C08A,${GOLD});box-shadow:0 0 0 3px rgba(219,132,55,.20),0 0 12px rgba(219,132,55,.45);}
${S} .slide-dot.locked{background:rgba(255,255,255,.10);}
@media(max-width:760px){ ${S} .slide-dots{gap:4px;} ${S} .slide-dot{width:6px;height:6px;} ${S} .slide-dot.active{width:18px;} }

/* ---------- the slide card: a crisp white face, a fine ring and a soft lift ---------- */
${W}{background:linear-gradient(180deg,#FFFFFF 0%,#F8FAFC 100%);border-radius:16px;font-family:${SANS};
  box-shadow:inset 0 0 0 1px rgba(30,35,64,.08),0 22px 40px -26px rgba(0,0,0,.6),0 4px 10px -6px rgba(0,0,0,.25);}
${W}::before{height:4px;background:linear-gradient(90deg,${NAVY} 0%,#2c3360 32%,#a8692f 74%,${GOLD} 100%);}

/* headings: one clean sans, heavy and tight, LSH navy */
${W} .lesson-card h4, ${W} h2.section-title, ${W} .meet-client-card h3, ${W} > .card > b:first-child,
${W} .quiz-q, ${W} .md-apply h2{font-family:${SANS} !important;font-weight:800;letter-spacing:-.02em;color:${NAVY} !important;}
${W} .lesson-card h4 .lnum{display:inline-block;font-family:${MONO};font-weight:700;color:#F0C08A;background:${NAVY};border-radius:8px;padding:.32em .6em;line-height:1;letter-spacing:.06em;box-shadow:inset 0 -2px 0 ${GOLD};}

/* the small mono tags (DAY 1 · TOPIC 1 OF 13 …, Quick Check, Meet the Case): pills */
${W} .topic-separator{display:block !important;width:fit-content !important;max-width:100%;margin:0 auto !important;padding:2px 12px !important;border-radius:999px !important;
  background:#FFF4E8 !important;border:1px solid rgba(219,132,55,.38) !important;color:${TAG} !important;font-family:${MONO};}
${W} .qc-tag, ${W} .mc-tag{color:${TAG};font-family:${MONO};}
${W} .fp-label{color:${TAG};font-family:${MONO};}
${W} .fp-label::after{background:linear-gradient(90deg,rgba(219,132,55,.45),rgba(30,35,64,.08) 60%,transparent);}
${W} .fp-num{background:linear-gradient(180deg,#2a3058,${NAVY}) !important;color:#fff !important;box-shadow:0 0 0 2px rgba(219,132,55,.35);}
${W} .pg-badge{font-family:${MONO};color:${TAG};background:#FFF4E8;border:1px solid rgba(219,132,55,.38);}

/* bullets and body copy */
${W} .fp-body li, ${W} .fp-section p{color:#1B1E2E;}
${W} .fp-body ul li::marker{color:${GOLD};}

/* step cards (Step-by-Step How-To) */
${W} ol.fp-howto-list > li, ${W} .fp-section ol > li{background:#fff;border-color:#E2E8F0;border-top-color:${NAVY};
  box-shadow:0 12px 22px -18px rgba(30,35,64,.55),0 2px 4px -2px rgba(30,35,64,.10);}
${W} ol.fp-howto-list > li:nth-child(even), ${W} .fp-section ol > li:nth-child(even){border-top-color:${GOLD};}
${W} ol.fp-howto-list > li::before, ${W} .fp-section ol > li::before{background:linear-gradient(180deg,#2a3058,${NAVY});box-shadow:0 0 0 2px #fff,0 0 0 3.5px rgba(219,132,55,.55);}

/* do this / watch out */
${W} .vis-card{background:#fff;border-color:#E2E8F0;border-left-color:#3F7D58;box-shadow:0 12px 22px -18px rgba(30,35,64,.5);}
${W} .vis-card.bad{background:linear-gradient(180deg,#FFFBF6,#FFF6EC);border-left-color:${GOLD};}
${W} .vis-badge{font-family:${MONO};color:#1F6B3F;}
${W} .vis-card.bad .vis-badge{color:${TAG};}

/* process, compare, icon list */
${W} .lesson-process .pstep{background:linear-gradient(160deg,#2a3058,${NAVY});box-shadow:inset 0 -3px 0 ${GOLD},0 12px 20px -16px rgba(30,35,64,.7);}
${W} .lesson-process .pstep:nth-child(4n+2), ${W} .lesson-process .pstep:nth-child(4n+4){background:linear-gradient(160deg,#3C4268,#2c3360);}
${W} .lesson-process .plabel{font-family:${SANS};font-weight:700;}
${W} .lesson-compare .cbox{background:#fff;border-color:#E2E8F0;border-radius:12px;box-shadow:0 12px 22px -18px rgba(30,35,64,.5);}
${W} .lesson-compare .chead{font-family:${SANS};font-weight:700;letter-spacing:-.01em;}
${W} .lesson-compare .cbox:first-child .chead{background:linear-gradient(180deg,#2a3058,${NAVY});}
${W} .lesson-compare .cbox:last-child .chead{background:linear-gradient(180deg,#A85E1C,${TAG});}
${W} .lesson-iconlist .il-item{background:#fff;border-color:#E2E8F0;border-radius:12px;box-shadow:0 10px 20px -18px rgba(30,35,64,.5);}
${W} .lesson-iconlist .il-body b{font-family:${SANS};font-weight:700;}

/* tables: a navy head row, fine rules, a rounded frame */
${W} .mini-table-wrap{border:1px solid #E2E8F0;border-radius:12px;background:#fff;box-shadow:0 12px 22px -20px rgba(30,35,64,.5);}
${W} .mini-table th{background:linear-gradient(180deg,#2a3058,${NAVY});box-shadow:inset 0 -2px 0 ${GOLD};font-family:${SANS};}
${W} .mini-table td{border-bottom-color:#EDF0F5;color:#1B1E2E;}
${W} .mini-table tr:nth-child(even) td{background:#F8FAFC;}
${W} .mini-table tr:last-child td{border-bottom:0;}
${W} .svg-diagram-card .mini-table-wrap{border:0;box-shadow:none;border-radius:10px;}

/* diagrams and callouts */
${W} .svg-diagram-card{background:#fff;border-color:#E2E8F0;box-shadow:0 14px 26px -22px rgba(30,35,64,.55);}
${W} .callout{box-shadow:0 10px 20px -18px rgba(30,35,64,.5);}

/* Quick Check: answer tiles that lift a little under the pointer */
${W} .quiz-opt{background:#fff;border-color:#E2E8F0;box-shadow:0 8px 16px -14px rgba(30,35,64,.5);transition:border-color .15s ease,box-shadow .15s ease;}
${W} .quiz-opt:not([disabled]):hover{border-color:${NAVY};box-shadow:0 12px 20px -14px rgba(30,35,64,.55);}
${W} .quiz-opt.selected{border-color:${NAVY};background:#EEF0F8;box-shadow:inset 0 0 0 1px ${NAVY};}

/* the Canva pages: a dark mat with a fine gold ring; the page counter a mono pill */
${S} #lessonSlideWrap:has(> .canva-slide){background:#0E1122 !important;box-shadow:inset 0 0 0 1px rgba(240,192,138,.22),0 22px 40px -26px rgba(0,0,0,.7);}
${S} .canva-slide .cv-tag{font-family:${MONO};color:#F0C08A;background:rgba(30,35,64,.82);border:1px solid rgba(240,192,138,.45);}
/* On a laptop or desktop the stage is capped to the screen (js/lsh-one-screen.js): the page fills the room the stage
   leaves and the picture sits inside it, whole, rather than a 16:9 box taller than that room spilling over the stage. */
@media (min-width:1001px) and (min-height:620px){
  ${S}:not(:fullscreen) #lessonSlideWrap:has(> .canva-slide){aspect-ratio:16/9;height:100% !important;max-height:100% !important;width:auto;max-width:100%;justify-self:center;}
}

/* ---------- the deck's chrome ---------- */
/* Previous / Next: a glass ghost button and a dark-navy primary with an orange underline, as the Portal's Launch */
${S} .slide-nav .btn{font-family:${SANS};font-weight:700;border-radius:12px;}
${S} .slide-nav .btn-ghost{background:rgba(255,255,255,.96);color:${NAVY};border:1px solid rgba(255,255,255,.7);box-shadow:0 8px 16px -12px rgba(0,0,0,.6);}
${S} .slide-nav .btn-ghost:not([disabled]):hover{background:#fff;border-color:#F0C08A;}
${S} .slide-nav .btn-primary{background:linear-gradient(180deg,#2E356A 0%,#151A36 100%);background-image:linear-gradient(180deg,#2E356A 0%,#151A36 100%);color:#fff;
  border:1px solid rgba(240,192,138,.55);box-shadow:inset 0 1px 0 rgba(255,255,255,.12),inset 0 -2px 0 ${GOLD},0 10px 20px -12px rgba(0,0,0,.7);}
${S} .slide-nav .btn-primary:not([disabled]):hover{background-image:linear-gradient(180deg,#383F78 0%,#1C2244 100%);color:#fff;border-color:#F0C08A;}
${S} .slide-nav .btn:focus-visible{outline:3px solid ${GOLD};outline-offset:2px;}
${S} .slide-counter{font-family:${MONO};font-weight:600;letter-spacing:.08em;color:#E3E6F3;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14);border-radius:999px;padding:5px 12px;}
@media(max-width:760px){ ${S} .slide-counter{color:#fff;background:rgba(30,35,64,.92);border-color:rgba(240,192,138,.45);} }   /* on a phone the bar floats over the white slide */
${S} .slide-done-banner{background:linear-gradient(135deg,#252B52,${NAVY});border:1px solid rgba(240,192,138,.4);box-shadow:inset 0 -2px 0 ${GOLD};}

/* the day's Objectives page (the stage before the first slide) */
${S}.day-intro .lesson-slide > .card.lesson-card{background:linear-gradient(180deg,#FFFFFF 0%,#F8FAFC 100%) !important;box-shadow:inset 0 0 0 1px rgba(30,35,64,.08),0 22px 40px -26px rgba(0,0,0,.6);}
${S}.day-intro .lesson-card::before{height:4px;background:linear-gradient(90deg,${NAVY} 0%,#2c3360 32%,#a8692f 74%,${GOLD} 100%);}
${S}.day-intro .lesson-card h2{font-family:${SANS};font-weight:800;letter-spacing:-.02em;color:${NAVY};}
${S}.day-intro .di-kicker{font-family:${MONO};color:${TAG};}

/* the day's header and tool row above the stage */
main .day-head-compact .dhc-title{font-family:${SANS};font-weight:800;letter-spacing:-.01em;color:${NAVY};}
main .day-head-compact .dhc-eyebrow{color:${TAG};}
main .ls-top .btn{font-family:${SANS};border-radius:999px;}
main .ls-top .btn-ghost{background:rgba(255,255,255,.92);border-color:rgba(30,35,64,.16);color:${NAVY};}
main .ls-top .btn-ghost:hover{border-color:${NAVY};background:#fff;}
main .ls-top .btn-navy{background-image:linear-gradient(180deg,#2a3058 0%,${NAVY} 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.12),inset 0 -2px 0 ${GOLD},0 8px 16px -10px rgba(30,35,64,.8);}
main .ls-top .pv-open{background-image:linear-gradient(180deg,#F5CB98 0%,#EBA867 100%);color:${NAVY};border:1px solid rgba(168,105,47,.45);}
main .ls-top .audio-rate{border-radius:999px;border-color:rgba(30,35,64,.16);}
`;
  document.head.appendChild(st);
})();
