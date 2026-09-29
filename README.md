# LSH Medsum & Demand Training (5-Day)

The Medsum & Demand version of the LSH training portal, for **Demand Specialists** at personal-injury law firms. A Demand Specialist builds the medical chronology and medical summary ("medsum"), itemizes the bills, drafts the demand letter, assembles and sends the demand packet, and handles the insurer's responses.

It runs on the same engine as the EA/PA, Case Management and Property Damage portals: sign-in and approvals, lessons as slides, Knowledge Checks, the random Task simulator, AI-graded practice, Live Roleplay, Presenter view, SOP run of show, feedback, rankings, certificates and admin tools. All the content is medsum and demand work, built around one running case.

It is a separate training module with its own repository and its own Cloudflare Worker, like the Case Management and Property Damage courses.

## The running case: Dana Whitfield

On Saturday 03/14/2026, Dana was stopped at a red light when Grant Mercer, looking at his phone, rear-ended her. Keystone Mutual (the at-fault carrier) accepted liability, and its limits are $100,000 / $300,000.

Her treatment:

- the ER the same day;
- 24 chiropractic visits;
- an MRI showing a C5-6 disc protrusion;
- an orthopedic consult, with a causation opinion;
- a 43-day gap in treatment;
- pain management and a C5-6 epidural injection;
- maximum medical improvement on 08/21/2026, with two future injections recommended.

Over five days the trainee takes the file from the handoff to the settlement:

1. Audit the file.
2. Build the chronology and summary.
3. Itemize the bills. The related total is $19,516.40; three lines are left out.
4. Audit and finish the $85,000 demand.
5. Send the packet and work Keystone's responses. Keystone offers $18,500, the firm counters at $72,500, Keystone offers $31,000, and the case settles at $47,500.

The facts are in `build/md_casefile.js` (the Case File page). The AI grader reads the same file.

## What's in it

| Area | Where |
|---|---|
| **Days 1–5 lessons** (13 topics a day, 3 Quick Checks and 15 Knowledge Check questions per day) | `build/day1.js` – `build/day5.js` |
| **Skill Builders** (one per day, 4 parts each) | registry in `build/md_practice_tools.js`; the exercises are in `js/md-skillbuilders.js` |
| **📁 Documents** (32 case documents with records Bates-numbered WHITFIELD 0001–0066, 5 templates, 5 handouts) | generated into `documents/` by `build/make_documents.py`; metadata and trainer audit keys in `js/md-documents.js` |
| **🎨 Canva decks** | one deck per day, linked on the Handouts page and named in each day's SOP (`MD_DECKS` in `js/md-skillbuilders.js`) |
| **🧪 Practice** | `js/md-practice.js`: every day has three columns — 🧠 Skill Builder, 🗣 Communication (live roleplay), 🗂 Systems (the CMS) |
| **🔥 Live Roleplay** | `build/md_roleplay.js`: 12 situations with the client, records and billing offices and the adjuster, plus a live call inside each Skill Builder |
| **🎙 Presenter view scripts** (the trainer's spoken script for every slide, in the EA/PA format) | `js/slide-scripts/day1.js` – `day5.js`; see below |
| Portal features (Presenter view, SOP, top bar) | `js/md-updates.js`, a copy of the PD course's `js/pd-updates.js` |

### The days

| Day | Topic | Canva deck | Skill Builder |
|---|---|---|---|
| 1 | Medsum & Demand foundations: the file, the records and the bills | Medsum and Demand Training | **File Intake & Records Audit** (4 parts): audit the handed-off file against the documents (wrong date of incident, a prior injury the intake missed, Bayside's balance-only bill); choose today's actions; write the itemized-bill request; make a live call; set up the work in the CMS |
| 2 | Medical chronology & medical summary | Medical Chronology // Medical Summary | **Chronology & Summary Builder** (4 parts): put the records in date order; flag each entry (prior injury, the gap, causation, imaging, the injection, MMI and future care); pull the key facts; write the medical summary |
| 3 | Bills itemization & medical specials | Bills Itemization | **Bills Itemization Workbench** (4 parts): decide which lines are related (a pre-accident charge, a duplicate MRI and an unrelated exam are not); total billed, adjusted, paid and owed; list the balances and liens; build the specials summary |
| 4 | The demand letter | Demand Overview | **Demand Draft Audit** (4 parts): decide what must be true before sending; audit the draft line by line (claim number, date, "herniated" vs protrusion, a false "no prior problems", a missing cite, a wrong total, an unrelated charge, the unaddressed gap); sort sentences into sections; write the non-economic damages section |
| 5 | The demand packet & responses | Demand Packet and Responses | **Packet & Response Desk** (4 parts): order the packet (LSH standard order, Exhibits A–G); choose the next step for each of Keystone's responses; draft the rebuttal; take the adjuster's call and log it in the CMS |

**Grading:**

- **Auto-graded parts** check against keys taken from the case file and the documents. Every key scores 100% when answered correctly; this was tested with `window.__mdUI`.
- **Written parts** use the portal's 100-point AI rubric with criteria specific to this course.

### Presenter view scripts

Every lesson slide has a spoken script, written in the same format as the EA/PA course. The trainer sees it in **🖥 Presenter view** under "🎙 Script — read aloud", on the admin **Trainer Cues** page, and in the day's **Speaker Notes PDF**. Each slide follows four beats:

| Beat | What it is |
|---|---|
| **① The why** | the punchline: why this slide matters, in one sentence |
| **② Talk it through** | the slide explained in plain spoken words, not the bullets read out |
| **③ Walk through it** | the points in order ("First… Next… Then… Finally…"): one line per Step-by-Step How-To on slide 1, and one per Best Practice on slide 2, with the pitfall last |
| **④ Ask the room / Your turn** | a question on slide 1; on slide 2, a task on Dana's file (the day's last topic sends trainees into its Skill Builder) |

They're written in a teacher's voice, like the course's own Canva speaker notes. They say "you" and "we", use short sentences, and explain jargon on the way ("MMI — maximum medical improvement — means…"). Every figure, date and page cite matches `build/md_casefile.js`.

- **Where:** `js/slide-scripts/dayN.js` sets `window.SLIDE_SCRIPTS["<day>::<exact lesson title>"] = {p1:{why, talk, walk:[…], ask}, p2:{…}}`. If you rename a lesson, rename its key too.
- **Engine:** `build/slide_script_engine.js` is the EA/PA engine, swapped in by `build.py`. When a long slide is split over pages, the script follows the page: page 1 has the why and the talk, the walk-through is shared across the pages that show the steps, and the last page ends with the question.
- **Fallback:** a topic with no script, such as one added later in the Content Studio, gets the same four beats built from what's on the slide.
- **Check:** `check-data.mjs` fails if a lesson has no script, if a key doesn't match a lesson title, or if the number of walk lines doesn't match the How-To steps or the Best Practices.

**Content source:** the lessons were written for this build from standard personal-injury medsum and demand practice. The Canva decks the course follows couldn't be opened from the build environment. Before the first live batch, compare `build/day1.js`–`day5.js` with the decks and adjust.

## Building

`index.html` is generated from the **Case Management course's** `index.html` (Case-Management-Training, built from its `main` at `6993a3a`). That page is itself generated from the EA/PA portal, so the chain is EA/PA → CM → Medsum & Demand, the same as the Property Damage course.

To pick up engine changes:

```
python3 build/make_documents.py                                     # only if the case documents changed
python3 build/build.py ../Case-Management-Training/index.html      # path to the CM course's index.html
```

`build.py` rewords the CM page for this course, then inserts the content from `build/`. Every edit checks that its anchor exists, so the script stops with an error if the CM page changed that part. When that happens, update the anchor in `build.py` and run it again.

Carry new features by hand:

- from the PD course's `js/pd-updates.js` and `js/pd-skillbuilders.js` (or the CM originals) into `js/md-updates.js` and `js/md-skillbuilders.js`;
- `js/daily-activities.js` is the same file as in the CM course.

## Checks

`.github/workflows/checks.yml` runs on every pull request and every push to `main`:

- JavaScript syntax, local files and JSON (`check-site.mjs`)
- every case document and handout exists, every document packet points at a real document, and every lesson has its Presenter view script (`check-data.mjs`)
- `wrangler deploy --dry-run`
- a browser smoke test that signs in and renders every slide (and its Presenter view script), Knowledge Check, page and Skill Builder part at desktop and phone width (`smoke.cjs`)

To run them locally:

```
node .github/scripts/check-site.mjs
node .github/scripts/check-data.mjs
node .github/scripts/server.mjs 8787 &
node .github/scripts/smoke.cjs http://localhost:8787/
```

The smoke test needs Playwright.

## Deploy (Cloudflare Workers)

1. **Worker:** the Worker is `medsumanddemandtraining` (the `name` in `wrangler.json` must match the Worker's name in Cloudflare). It deploys from `main` with `npx wrangler deploy`.
2. **KV:** the Worker binds the same `LSH_KV` namespace as EA/PA, CM and PD. **All keys for this course are stored under an `md:` prefix**, so its trainees, progress and settings never mix with EA/PA (no prefix), CM (`cm:`) or PD (`pd:`). To use a separate namespace, change the `id` in `wrangler.json`.
3. **Secrets** (the same as the other courses):
   - `ADMIN_PASSPHRASE`: admin sign-in; turns on secure mode.
   - `GEMINI_API_KEY`: AI grading and roleplays. The name must be exactly this.
   - `SESSION_SECRET`: optional.
4. **Training Portal (optional):**
   - To have the Training Portal's **Progress & Feedback** page list this course's trainees, add the program to `PROGRAMS` in the portal's `functions/api/program-progress.js` with key prefix `md:`, 5 days and the course address.
   - The shared Call Simulator has no Medsum & Demand call pack yet, so it shows as "coming soon" in 🧰 Tools. Admins can switch it to Live there once a pack exists.
