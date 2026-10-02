#!/usr/bin/env python3
"""Builds the Medsum & Demand course's index.html from the Case Management course's index.html + this course's content.

Usage (from the repository root):
    python3 build/build.py <path to Case-Management-Training/index.html>

The CM course's index.html is itself generated from the EA/PA portal (EA-PA-TRAINING)
by Case-Management-Training/build/build.py, so the chain is EA/PA -> CM -> Medsum & Demand
(the same way the Property Damage course is built). The course keeps the CM course's shell
(Skill Builder kit, Tools hub, Practice page, Presenter view, SOP) and swaps in the content from build/:

    day1.js – day5.js        lessons, quick checks, Knowledge Checks (one day per Canva deck)
    md_practice_tools.js     the five Skill Builders (registry; the tools are in js/md-skillbuilders.js)
    md_casefile.js           the Dana Whitfield case file (also what the AI grader reads)
    md_roleplay.js           Live Roleplay categories, personas and in-tool scenarios
    md_calendar.js           a Demand Specialist's week (calendar data)

Every edit checks that its anchor exists, so the script stops with an error if the CM
page changed that part: update the anchor here and run it again. Writes ../index.html.
"""
import re, sys, os, datetime
B = os.path.dirname(os.path.abspath(__file__))
if len(sys.argv) != 2:
    sys.exit("usage: python3 build/build.py <Case-Management-Training/index.html>")
SRC = sys.argv[1]
OUT = os.path.join(os.path.dirname(B), "index.html")
s = open(SRC, encoding="utf8").read()
rd = lambda f: open(os.path.join(B, f), encoding="utf8").read().strip()


def replace_block(start, end, new):
    global s
    i = s.index(start)
    j = s.index(end, i) + len(end)
    s = s[:i] + new + s[j:]


def rep(old, new, min_count=1):
    global s
    n = s.count(old)
    if n < min_count:
        sys.exit(f"MISSING ({n}): {old[:100]!r}")
    s = s.replace(old, new)


def rep_re(pattern, new, min_count=1):
    global s
    s, n = re.subn(pattern, new, s)
    if n < min_count:
        sys.exit(f"MISSING ({n}): {pattern[:100]!r}")


# The Canva training deck behind each day (the trainer's SOP shows it for the day).
DECKS = ["", "Medsum and Demand Training", "Medical Chronology // Medical Summary", "Bills Itemization",
         "Demand Overview", "Demand Packet and Responses"]

# ---------- 1. wording: CM -> Medsum & Demand (before the course content goes in, so it isn't touched) ----------
rep("<title>LSH Case Management Training</title>", "<title>LSH Medsum &amp; Demand Training</title>")
rep("LSH Case Management — Platform Orientation", "LSH Medsum & Demand — Platform Orientation")
rep("5-Day Legal Case Management Professional Development Training", "5-Day Medsum & Demand Professional Development Training")
rep("Case Management Professional Development Workshop", "Medsum & Demand Professional Development Workshop")
rep("LEGAL CASE MANAGEMENT ACCELERATOR", "LEGAL MEDSUM & DEMAND ACCELERATOR")
rep('const DAY_ICONS = {1:"🗂",2:"📅",3:"💬",4:"📨",5:"🛡",', 'const DAY_ICONS = {1:"📥",2:"🩺",3:"🧾",4:"✉",5:"📦",')
rep("<p>Run a personal-injury file from intake to disbursement: verify every document, keep treatment on the map, audit before demand, negotiate the net, and stay trial-ready.</p>",
    "<p>Turn a finished personal-injury file into a demand: audit the records and bills, build the medical chronology and summary, itemize the specials, write and assemble the demand, and handle the insurer's response.</p>")
rep('["Case File","John Doe v. Apex — the working case. Read it first."],["📁 Case Documents","Every record, bill, lien letter and pleading — with its CMS upload category."],["🧪 Practice","Every practice tool, organized the same way for each day: 🧠 Skill Builders on the case documents, 🗣 Communication (live calls, roleplay, email) and 🗂 Systems (the CMS, docket, medical records, e-filing, calendar and trust ledger). Each day\'s tools open with that day."]',
    '["Case File","Dana Whitfield — the working case. Read it first."],["📁 Documents","Every record (WHITFIELD 0001–0066), bill, insurer letter, draft demand and response — with its CMS upload category."],["🧪 Practice","Every practice tool, organized the same way for each day: 🧠 Skill Builders on the case documents, 🗣 Communication (live roleplay calls with the client, providers and the adjuster) and 🗂 Systems (the CMS). Each day\'s tools open with that day."]')
_i = s.index('{k:"Client", h:"Meet the case: John Doe v. Apex Delivery Services", body:`')
_j = s.index('</div>`},', _i) + len('</div>`},')
s = s[:_i] + ('{k:"Client", h:"Meet the case: Dana Whitfield — from the file handoff to the settlement", body:`\n'
  '      <div class="or-client">\n        <div class="or-avatar">DW</div>\n'
  '        <div><p class="or-lead" style="margin-top:0">Stopped at a red light, rear-ended by a driver looking at his phone. Same-day ER, five months of treatment — chiropractic care, an MRI, an orthopedic surgeon, pain management and an injection — and maximum medical improvement on 08/21/2026. Now her file comes to you for the medsum and the demand. Every lesson, Skill Builder, call and CMS exercise works this one case.</p>\n'
  '        <ul class="or-list"><li>Read the <b>Case File</b> before Day 1, then open the records and bills in <b>📁 Documents</b>.</li><li>The documents contain real-world errors — a wrong date of incident, a prior injury the intake missed, a duplicate charge — catching them is the job.</li><li>Medical records are protected health information: treat everything as confidential, like a real client file.</li></ul></div>\n'
  '      </div>`},') + s[_j:]
rep('${step(2,"📂","Case File","Read the John Doe v. Apex file.")}', '${step(2,"📂","Case File","Read Dana Whitfield\'s case file.")}')
rep("CASE BACKGROUND (John Doe v. Apex — the caller may be the client, an adjuster, a provider, a lienholder, opposing counsel or the handling attorney):",
    "CASE BACKGROUND (Dana Whitfield's personal-injury case — the caller may be the client, the insurance adjuster, a provider's records or billing office, or the handling attorney):")
rep('"Metro Radiology\'s records department calls: John Doe\'s authorization has the wrong DOB and they won\'t release the MRI.",', '"Bayside Pain Management\'s billing office calls: they only send balance-due statements and want to know when the case will settle.",')
rep('"John Doe\'s wife Jane calls asking whether she needs her own claim for her neck pain.",', '"Dana Whitfield emails: she heard the policy limit is $100,000 and wants to know if that\'s what she\'ll get.",')
rep('"The attorney needs the updated lien totals for the Doe file in the next 10 minutes.",', '"Attorney Bennett needs Dana Whitfield\'s specials, future medical and wage totals for a call in the next 10 minutes.",')
rep('"A court clerk leaves a voicemail: the Answer in another matter was rejected for a missing signature page."', '"Keystone\'s adjuster leaves a voicemail: he needs five years of Dana\'s prior records before he\'ll re-evaluate the demand."')
rep("Program: LSH (Legal Support Help) 5-day Case Management Training for personal-injury Case Managers (many are remote VAs supporting US law firms). Running case: John Doe v. Apex Delivery Services (commercial T-bone, facial scarring, L4-L5 microdiscectomy).",
    "Program: LSH (Legal Support Help) 5-day Medsum & Demand Training for Demand Specialists at personal-injury law firms (many are remote VAs supporting US law firms): medical chronologies and summaries, bills itemization, demand letters, demand packets and insurer responses. Running case: Dana Whitfield, rear-end collision 03/14/2026 (Keystone Mutual, C5-6 disc protrusion, 24 chiropractic visits, an ESI, MMI 08/21/2026, demand $85,000).")
rep("Apply the Day ${id} concepts to the John Doe v. Apex case file.", "Apply the Day ${id} concepts to Dana Whitfield's case file.")
rep("ppt:`Revised CM Training Day ${id}`, canvaLabel:`CM Day ${id}`",
    "ppt:`Medsum & Demand Training Day ${id}`, canvaLabel:(" + repr(DECKS).replace("'", '"') + ")[id] || `Medsum & Demand Day ${id}`")
rep('"If this landed on your John Doe file today, what would your first move be?"', '"If this landed on Dana Whitfield\'s file today, what would your first move be?"')
rep("from the John Doe v. Apex file", "from Dana Whitfield's case")
rep("John Doe case scenarios are realistic.", "Dana Whitfield case scenarios are realistic.")
rep('if(slide.type==="meetClient") return "Meet the Case — John Doe v. Apex";', 'if(slide.type==="meetClient") return "Meet the Case — Dana Whitfield";')
rep("Every Skill Builder comes from the Skill Building slides and runs on the actual case documents — then sends you into the CMS to do the file work.",
    "Every Skill Builder runs on Dana Whitfield's case documents — then sends you into the CMS to do the file work.", min_count=0)
rep('certId:`LSH-CM-', 'certId:`LSH-MD-')
rep('"Case Management Trainee"', '"Medsum & Demand Trainee"')
rep("of the 5-day LSH Case Management program.", "of the 5-day LSH Medsum & Demand program.")
rep("const SOP_DATA = []; // CM: SOP is generated", "const SOP_DATA = []; // Medsum & Demand: SOP is generated")
# AI prompts: who the trainee is
rep("a trainee personal-injury Case Manager's", "a trainee Demand Specialist's (personal-injury medsum and demand work)")
rep("for a legal-industry Case Management training program", "for a legal-industry Medsum & Demand training program")
rep("training call for a personal-injury Case Manager.", "training call for a Demand Specialist at a personal-injury law firm.")
rep("drop on a personal-injury Case Manager's desk", "drop on a Demand Specialist's desk")
rep("for a personal-injury Case Manager trainee", "for a Demand Specialist trainee (personal-injury medsum and demand work)")
rep("in a personal-injury Case Management training program", "in a Medsum & Demand training program at a personal-injury law firm")
rep("Six areas cover most of what a personal-injury Case Manager handles day to day.", "Six areas cover most of what a Demand Specialist handles day to day.")
# everything else that names the course or the role
rep("LSH Case Management Training", "LSH Medsum & Demand Training")
rep("Case Management Training", "Medsum & Demand Training")
rep("CASE MANAGER: ", "DEMAND SPECIALIST: ")
rep("Case Manager", "Demand Specialist")
rep('var APP_BUILD = "cm-', 'var APP_BUILD = "md-')

# ---------- 2. the course content ----------
days = "\n\n".join(rd(f"day{i}.js") for i in range(1, 6))
i = s.index("const DAY1 = {")
j = s.index("const DAYS = [DAY1, DAY2, DAY3, DAY4, DAY5];")
s = s[:i] + days + "\n\n" + s[j:]
replace_block("const PRACTICE_TOOLS = [", "\n];\n", rd("md_practice_tools.js") + "\n")
replace_block("const DAY_ORDER = [", "\n];\n", rd("md_calendar.js") + "\n")
replace_block("const CLIENT_PROFILE_DOC = [", "\n];\n", rd("md_casefile.js") + "\n")
rp = rd("md_roleplay.js")
cats_personas, crisis = rp.split("const CRISIS_SCENARIO_SETS = ")
cats, personas = cats_personas.split("const ROLEPLAY_PERSONAS")
replace_block("const ROLEPLAY_CATEGORIES = [", "\n];\n", cats.strip() + "\n")
replace_block("const ROLEPLAY_PERSONAS= [", "\n];\n", "const ROLEPLAY_PERSONAS" + personas.strip() + "\n")
replace_block("const CRISIS_SCENARIO_SETS = {", "\n};\n", "const CRISIS_SCENARIO_SETS = " + crisis.strip() + "\n")
replace_block("const QUICK_PRACTICE_TOPIC_IDS = [", "];", 'const QUICK_PRACTICE_TOPIC_IDS = ["worth","gapcall","impact","takeit","priorrecords","paidbilled","itemized","recordsfee","lopcall"];')
rep(".script-row p{margin:0;font-size:13px;line-height:1.5;}",
    ".script-row p{margin:0;font-size:13px;line-height:1.5;white-space:pre-line;}   /* numbered step scripts keep their lines */")
rep(".script-row{margin-top:8px;}\n",
    ".script-row{margin-top:8px;}\n.script-say{margin:6px 0 0;font-size:14px;line-height:1.6;} .script-say.script-ask{margin-top:10px;font-weight:600;color:var(--navy);} .script-next{margin:10px 0 0;font-size:12px;color:var(--orange-deep);font-weight:700;} .pn-cue{margin-top:10px;} .pn-cue p{font-size:12.5px;}\n")
# The day intro page and the Orientation cards count the day's Canva deck too (js/md-canva.js)
rep("const mins = Math.round(n*2.5 + 25);",
    "const cvDeck = (typeof mdCanvaDeck===\"function\") ? mdCanvaDeck(d.id) : null;\n  const mins = Math.round(n*2.5 + 25 + (cvDeck ? cvDeck.pages.length*0.75 : 0));")
rep('<ul class="di-topics">${d.lessons.slice(0,8).map(l=>`<li>${esc(l.h)}</li>`).join("")}${n>8?`<li class="more">…and ${n-8} more topics</li>`:""}</ul>',
    '<ul class="di-topics">${cvDeck ? `<li><span style=\"font-weight:700\">🎨 Canva deck: ${esc(cvDeck.deck.replace(/^Day \\d+:\\s*/,""))}</span> (${cvDeck.pages.length} slides)</li><li><span style=\"font-weight:700\">Then apply it to Dana Whitfield\'s file:</span></li>` : ""}${d.lessons.slice(0,cvDeck?6:8).map(l=>`<li>${esc(l.h)}</li>`).join("")}${n>(cvDeck?6:8)?`<li class="more">…and ${n-(cvDeck?6:8)} more topics</li>`:""}</ul>')
rep("<div><span>📚</span><b>${n} topics</b><em>${slides} slides</em></div>",
    "<div><span>📚</span><b>${cvDeck ? `${cvDeck.pages.length}-slide deck + ${n} topics` : `${n} topics`}</b><em>${slides} slides</em></div>")
rep("<em>${d.lessons.length} topics${relatedTools(d.id)[0]",
    "<em>${(typeof mdCanvaDeck===\"function\" && mdCanvaDeck(d.id)) ? mdCanvaDeck(d.id).pages.length + \"-slide Canva deck · \" : \"\"}${d.lessons.length} topics${relatedTools(d.id)[0]")
# The Presenter view / Speaker Notes script engine from the EA/PA course: every slide reads
# one flowing paragraph to read aloud (why, explanation, the points in order), then the closing question.
i = s.index("/* ---------- trainer speaker notes (hardcoded in js/presenter-notes.js) ----------")
j = s.index("function downloadDayScriptsPdf(dayId){", i)
s = s[:i] + rd("slide_script_engine.js") + "\n" + s[j:]

# ---------- 3. scripts: this course's pack (relative paths, so the page also works from a subfolder) ----------
rep_re(r'<script src="/js/cm-mindset\.js[^"]*"></script>\n?', '', min_count=0)
rep_re(r'<script src="/js/cm-updates\.js\?v=[^"]*"></script>',
       "".join(f'<script src="js/slide-scripts/day{n}.js?v=2"></script>\n' for n in range(1, 6)) +
       "".join(f'<script src="js/slide-scripts/canva-day{n}.js?v=1"></script>\n' for n in range(1, 6)) +
       '<script src="js/md-canva-decks.js?v=1"></script>\n<script src="js/md-updates.js?v=5"></script>')
rep_re(r'<script src="/js/cm-documents\.js\?v=[^"]*"></script>', '<script src="js/md-documents.js?v=2"></script>')
rep_re(r'<script src="/js/cm-skillbuilders\.js\?v=[^"]*"></script>', '<script src="js/md-skillbuilders.js?v=2"></script>')
rep_re(r'<script src="/js/cm-practice\.js\?v=[^"]*"></script>', '<script src="js/md-practice.js?v=1"></script>')
rep_re(r'<script src="/js/daily-activities\.js\?v=[^"]*"></script>', '<script src="js/daily-activities.js?v=1"></script>\n<script src="js/md-workspace.js?v=1"></script>\n<script src="js/md-canva.js?v=1"></script>')   # the Canva decks as the day's slides (last: it wraps other functions)
# 🗂 Case Workspace (js/md-workspace.js): each trainee's own Google Drive copy of the case file.
rep('  else if(state.view==="activities") body = typeof renderActivitiesPage==="function" ? renderActivitiesPage() : "";',
    '  else if(state.view==="activities") body = typeof renderActivitiesPage==="function" ? renderActivitiesPage() : "";\n'
    '  else if(state.view==="workspace") body = typeof renderCaseWorkspace==="function" ? renderCaseWorkspace() : "";')
s = re.sub(r'var APP_BUILD = "md-[^"]*";', f'var APP_BUILD = "md-{datetime.date.today().isoformat().replace("-", ".")}-a";', s, count=1)

open(OUT, "w", encoding="utf8").write(s)
visible = re.sub(r'data:[a-z/+-]+;base64,[A-Za-z0-9+/=]+', '', s)
left = {w: len(re.findall(w, visible)) for w in ["John Doe", "Doe v", "Apex", "Jordan Davies", "Angela", r"\bCM\b", "cm-", "PD Specialist"]}
print("wrote", OUT, f"{len(s)/1e6:.2f} MB", "leftovers:", left)
