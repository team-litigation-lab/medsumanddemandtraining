const DAY2 = {
  id: 2,
  title: "Medical Chronology & Medical Summary",
  theme: "Chronology vs Summary · One Row per Encounter · The Provider's Words · Pain Scores & the Recovery Story · Flag: Prior Injuries · Flag: Gaps in Treatment · Flag: Causation & Objective Findings · Flag: Procedures, MMI & Future Care · Imaging Words: Bulge, Protrusion, Herniation · The Medical Summary Structure · Neutral, Accurate, Traceable · Reconciling the Chronology with the Bills · Putting It Together: the Seven Flags",
  objective: "Build a complete, date-ordered medical chronology with a page cite for every fact, flag what the attorney must see (prior injuries, gaps, objective findings, causation opinions, procedures, MMI and future care), read imaging terms precisely, and write a neutral, traceable medical summary that reconciles with the bills.",
  lessons: [
    { h: "Chronology vs Summary: Two Tools, One Story",
      layout: "COMPARE",
      compareLeft: { label: "Medical chronology", items: ["Every encounter, in date order", "One row per visit: date, provider, visit type, summary, page", "Complete — routine visits too", "Built first; your working tool", "Used to check the bills and answer adjuster questions"] },
      compareRight: { label: "Medical summary (medsum)", items: ["A short narrative — a few pages", "Organized by topic, from overview to current status", "Selective — what the attorney and adjuster need", "Written from the chronology", "Feeds the demand letter's injury section"] },
      fourPart: {
        corePrinciples: [
          "The chronology is the complete, date-ordered record of every encounter. The medical summary tells the story of the injury in a few pages.",
          "Both are neutral and cited: every fact points to a Bates page.",
          "You build the chronology first. The summary is only as good as the chronology under it."
        ],
        howTo: [
          "Start the chronology from the firm's template (TP01) and the Bates-numbered records.",
          "Fill one row per encounter as you read, in date order.",
          "When the chronology is complete and checked, write the summary from it using TP02.",
          "Send both to the attorney together — they become Exhibit C of the demand packet."
        ],
        bestPractices: [
          "Write so a stranger could check every fact in minutes — that is the test the adjuster applies.",
          "Use the same dates, names and terms in both documents.",
          "Pitfall: writing the summary from your memory of the records. Without the chronology, facts get blended, rounded and left uncited."
        ],
        discussionCase: "Keystone's adjuster asks, “When did Dana's arm symptoms start?” Which document answers faster — the chronology or the summary — and why?"
      },
      trainerCue: "Show TP01 and TP02 side by side. The chronology is the map of the evidence; the summary is the reader's guide to it."
    },
    { h: "Building the Chronology: One Row per Encounter",
      layout: "TABLE",
      tableHeaders: ["Column", "What goes in it", "Dana example"],
      tableRows: [
        ["Date of service", "The day of the encounter, MM/DD/YYYY", "03/31/2026"],
        ["Provider", "Treating provider and facility, named the same way every time", "Harbor Spine & Chiropractic"],
        ["Visit type", "ED visit, initial exam, re-evaluation, therapy, imaging, consult, procedure, follow-up", "Re-evaluation"],
        ["Summary", "Complaints, findings, diagnosis, plan and work status, in the provider's words", "Neck 5/10, LBP 3/10; released to return to work 04/03/2026, no lifting over 15 lb"],
        ["Page", "The Bates page(s) where the facts are found", "WHITFIELD 0026"],
        ["Flag", "One of the seven course flags", "Routine entry"]
      ],
      fourPart: {
        corePrinciples: [
          "One row per encounter: every visit, test, procedure and consult gets its own row, including the routine ones.",
          "Each row answers five questions: when, who, what kind of visit, what the record says, and where it says it.",
          "Rows go in strict date order across all providers, not grouped by provider. The MRI (03/30/2026) comes before Harbor Spine's re-evaluation (03/31/2026)."
        ],
        howTo: [
          "Enter the date of service — not the date the record was printed, faxed or received.",
          "Name the provider the same way every time (e.g., “Dr. Anita Patel, Summit Orthopedic Associates”).",
          "Summarize the complaints, findings, diagnosis, plan and work status in the provider's words.",
          "Add the Bates page: the range for the visit, and the exact page for any key sentence.",
          "Choose the flag that fits from the course list — most rows are “Routine entry.”"
        ],
        bestPractices: [
          "Prior records go in the chronology too, in date order and flagged — the chronology shows the whole medical picture.",
          "All 24 Harbor Spine visits get a row. If the firm's template allows routine therapy visits to be grouped, the grouped row still lists every date and the page range.",
          "Pitfall: sorting by provider instead of by date. The recovery story disappears — and so does the gap."
        ],
        discussionCase: "Write the chronology row for Dana's 03/30/2026 MRI: date, provider, visit type, summary, page and flag."
      },
      trainerCue: "Model one row on screen, then have trainees write the MRI row. Save Dr. Patel's 04/20/2026 consult for the Skill Builder."
    },
    { h: "Writing Entries in the Provider's Words",
      layout: "COMPARE",
      compareLeft: { label: "Not this (your words)", items: ["“Herniated disc at C5-6”", "“Severe, constant neck pain”", "“Bayside confirmed the crash caused her injury”", "“She needs two more injections”", "“She quit therapy”"] },
      compareRight: { label: "This (the record's words)", items: ["“3 mm central disc protrusion at C5-6 abutting the ventral thecal sac” (p. 41)", "Neck pain 7/10 radiating to the right shoulder (pp. 12–15)", "Patient reports neck pain “since the MVC of 03/14/2026” (p. 60)", "Up to 2 more C5-6 ESIs over the next 24 months if symptoms recur (p. 57)", "Could not continue because of childcare; discharged, improved (p. 38)"] },
      fourPart: {
        corePrinciples: [
          "The chronology and the summary report what the providers wrote — not what you think it means or what would help the case.",
          "One word can change the claim: “protrusion” to “herniation,” “intermittent” to “constant,” “if symptoms recur” to “needs.”",
          "Quote key findings and opinions exactly, in quotation marks, with the page. Describe routine details plainly and neutrally."
        ],
        howTo: [
          "Copy diagnoses, imaging impressions, causation opinions and future-care recommendations word for word.",
          "Keep the qualifiers: “up to,” “if symptoms recur,” “intermittent,” “improved.”",
          "Say who said it: what the patient reports is not the provider's finding.",
          "Add no adjectives the provider didn't use — no “severe,” “devastating” or “excruciating.”",
          "Check each quotation against the page before you move on."
        ],
        bestPractices: [
          "If a record is unclear or illegible, write “[illegible]” or quote the unclear part and flag it — don't fill it in.",
          "Negative findings belong too: the CT showed no acute fracture (pp. 1–9).",
          "Pitfall: “improving” the wording for the demand. The adjuster has the same pages, and one overstatement makes every other line suspect."
        ],
        discussionCase: "A draft entry says “Dana quit therapy against advice on 05/14.” What does p. 38 actually support, and how do you rewrite the entry?"
      },
      trainerCue: "Read each left-hand phrase and ask what's wrong with it. The “herniated disc” line comes back in the Day 4 draft demand."
    },
    { h: "Pain Scores, Objective Findings and the Recovery Story",
      layout: "TABLE",
      tableHeaders: ["Date & provider", "Neck", "Low back", "Also recorded", "Page"],
      tableRows: [
        ["03/14/2026 Riverside ED", "7/10", "5/10", "CT: no acute fracture", "0001–0009"],
        ["03/17/2026 Harbor Spine", "7/10, to the right shoulder", "5/10", "ROM reduced 40%; TTP C5–C7", "0012–0015"],
        ["03/31/2026 Harbor Spine", "5/10", "3/10", "Back to work 04/03, no lifting over 15 lb", "0026"],
        ["05/14/2026 Harbor Spine", "4/10", "2/10", "Visit 24 of 24; discharged, improved", "0038"],
        ["06/26/2026 Bayside", "6/10, right-arm tingling", "—", "Worse since stopping therapy", "0060–0063"],
        ["07/10/2026 Bayside ESI", "6/10 before → 2/10 after", "—", "C5-6 interlaminar ESI", "0064–0066"],
        ["08/21/2026 Summit Orthopedic", "3/10, intermittent", "—", "MMI", "0056–0058"]
      ],
      fourPart: {
        corePrinciples: [
          "Pain scores (0–10) are subjective — the patient's report — but tracked over time they show the recovery story.",
          "Objective findings (range of motion, tenderness, imaging, exam findings) back the story up with what the provider measured or saw.",
          "Dana's story in the numbers: neck pain 7/10 falls to 4/10 with therapy, returns to 6/10 with arm tingling after care stops, drops to 2/10 after the injection, and is 3/10, intermittent, at MMI."
        ],
        howTo: [
          "Pull every pain score with its body part, date and page.",
          "Keep each body part in its own column — the neck and the low back tell different stories.",
          "Leave a cell blank (—) when no score is recorded; never carry the last number forward.",
          "Note the objective findings next to the scores: ROM, tenderness, imaging, work restrictions.",
          "Sum up the trend in one neutral sentence, with cites."
        ],
        bestPractices: [
          "Watch what changes, not just the numbers: pain radiating to the shoulder, then the arm, then tingling tells the attorney something.",
          "Record improvement as faithfully as worsening — the low back at 2/10 by 05/14/2026 is part of the story.",
          "Pitfall: calling pain “constant” or “severe” when the record says 3/10, intermittent."
        ],
        discussionCase: "Dana's neck pain was 4/10 on 05/14/2026 and 6/10 on 06/26/2026. How do you describe that change neutrally, and which two pages explain it?"
      },
      trainerCue: "Draw the neck line on the board: 7 → 7 → 5 → 4 → (gap) → 6 → 2 → 3. Ask what an adjuster sees — and what the records say happened during the gap."
    },
    { h: "Flag: Prior Injuries",
      layout: "COMPARE",
      compareLeft: { label: "Before the MVC — Harbor Spine 2025 (pp. 10–11)", items: ["01/08/2025 – 01/29/2025, 3 visits", "Low back strain after lifting boxes", "Released", "Body part: low back", "Intake: “none really, maybe a strain a while back”"] },
      compareRight: { label: "After the MVC — 03/14/2026 onward", items: ["ED: neck 7/10, low back 5/10", "Neck: C5-6 disc protrusion, right C6 radiculopathy", "C5-6 ESI on 07/10/2026", "Low back 2/10 by 05/14/2026", "Neck 3/10, intermittent, at MMI (08/21/2026)"] },
      fourPart: {
        corePrinciples: [
          "A prior injury is an injury, treatment or complaint involving the same body part before the DOI. It is always included and flagged — never buried.",
          "Insurers look for prior care, through claims databases and prior-records requests. The attorney must know about it first.",
          "Whether a prior injury matters — resolved, unrelated, or made worse by the crash (aggravation) — is a question for the doctors and the attorney, not the chronology."
        ],
        howTo: [
          "Put prior records in the chronology in date order, before the DOI, flagged “Prior injury / pre-existing.”",
          "Record the facts: dates, body part, cause, number of visits and outcome (Dana: 3 visits, released).",
          "Compare the body parts: the prior low back strain vs the neck and low back complaints after the crash.",
          "Note any conflict between the intake and the records neutrally, citing both sources.",
          "Give prior history its own paragraph in the medical summary, and tell the attorney."
        ],
        bestPractices: [
          "Quote any provider comment about the earlier condition exactly, with its page.",
          "Look for prior history everywhere: past medical history sections, intake questionnaires, the ED history and pharmacy records.",
          "Pitfall: leaving pp. 10–11 out because “it was a different problem.” That is the attorney's call, and hiding it costs credibility."
        ],
        discussionCase: "Dana's intake says “none really, maybe a strain a while back.” Harbor Spine's records show three visits for a low back strain in January 2025. How do you write this in the medical summary, and what do you tell Attorney Bennett?"
      },
      trainerCue: "Stress the tone: not “the client lied,” but “the intake and the records differ.” Keystone raises this exact history on Day 5."
    },
    { h: "Flag: Gaps in Treatment and Missed Appointments",
      layout: "PROCESS",
      processSteps: [
        { label: "Measure", desc: "Days between every pair of encounters." },
        { label: "Spot 30+", desc: "05/14 → 06/26/2026 = 43 days." },
        { label: "Find the why", desc: "Childcare (p. 38); symptoms continued (p. 60)." },
        { label: "Check no-shows", desc: "Plan: 3x/week × 8 weeks = 24. Visits: 24 of 24." },
        { label: "Flag & cite", desc: "Dates, days, reasons, pages." },
        { label: "Tell the attorney", desc: "The attorney decides how to address it." }
      ],
      fourPart: {
        corePrinciples: [
          "A gap in treatment is a break in care — on this course, 30 or more days between encounters. Adjusters use gaps to argue the client had healed or that something else caused the later care.",
          "Missed and cancelled appointments raise the same argument on a smaller scale. They show up in therapy notes and ledgers.",
          "You don't explain a gap away. You report the dates and the reason the records give, with the pages."
        ],
        howTo: [
          "Count the days between each encounter and the next: 05/14 to 06/26 is 17 days left in May plus 26 in June — 43 days.",
          "For each interval of 30+ days, read the last note before it and the first note after it for the reason.",
          "Record the reasons: Dana could not continue because of childcare — her mother, who watched her son, was hospitalized (p. 38); at Bayside she reported symptoms that continued and got worse after stopping therapy (p. 60).",
          "Flag the row that ends the gap and name both dates: “Gap: 43 days since 05/14/2026 (pp. 38, 60).”",
          "Give the gap its own paragraph in the medical summary."
        ],
        bestPractices: [
          "Measure every interval, not just the obvious one. 07/10 → 08/21/2026 is 42 days: note it, note whether the records show it was a planned follow-up, and let the attorney decide how to present it.",
          "Reasons must come from the records, or from the client through the attorney — never from your own guess.",
          "Pitfall: leaving the gap out of the summary because it's “bad.” Anyone can find it in the dates; the attorney needs to address it first."
        ],
        discussionCase: "Measure the interval from the 07/10/2026 injection to Dr. Patel's 08/21/2026 follow-up. Is it the same kind of gap as 05/14 → 06/26? What do you write, and who decides how it's presented?"
      },
      trainerCue: "Do the day count on the board. There's no single right answer on 07/10 → 08/21: a strong answer measures it (42 days), notes that it followed the injection (pain 2/10) and ended at the referring doctor's follow-up, and raises it with the attorney instead of ignoring it."
    },
    { h: "Flag: Causation Opinions and Objective Findings",
      layout: "COMPARE",
      compareLeft: { label: "Subjective — the patient reports", items: ["Pain scores: neck 7/10, low back 5/10", "Radiating pain; right-arm tingling", "History: pain “since the MVC of 03/14/2026” (p. 60)", "Limits the patient describes: sleep, lifting, driving", "How the crash happened"] },
      compareRight: { label: "Objective — the provider finds", items: ["MRI: 3 mm central disc protrusion at C5-6 (p. 41)", "Cervical ROM reduced 40% (pp. 12–15)", "Tender to palpation C5–C7", "CT cervical spine: no acute fracture (pp. 1–9)", "Exam findings such as strength, reflexes and sensation"] },
      fourPart: {
        corePrinciples: [
          "An objective diagnostic finding is what a test or exam shows: imaging, measured range of motion, neurological findings. Flag it — adjusters give it the most weight.",
          "A causation opinion is a doctor's opinion that the crash caused the injury. Dr. Patel's is the key sentence in Dana's file: “within a reasonable degree of medical probability, the C5-6 injury is causally related to the 03/14/2026 MVC” (p. 55).",
          "A patient's history is not a causation opinion. “Since the MVC” in Bayside's note (p. 60) records what Dana reported."
        ],
        howTo: [
          "Flag each imaging result and measured exam finding “Objective diagnostic finding,” with the page.",
          "Record negative findings too (no acute fracture on CT) — they're part of the picture.",
          "Quote a causation opinion word for word with the doctor's name, the date and the page, and flag it “Causation opinion.”",
          "Tell the attorney where the causation opinion is — and if an injury has no causation opinion, say so.",
          "Never write a causation conclusion of your own (“the crash caused…”) in the chronology or the summary."
        ],
        bestPractices: [
          "Keep the doctor's phrasing intact. “Within a reasonable degree of medical probability” is the kind of language attorneys look for; the standard required depends on the state and is the attorney's call.",
          "Note exactly which injury the opinion covers: Dr. Patel's covers the C5-6 injury — not every complaint in the file.",
          "Pitfall: calling “patient states pain since the accident” a causation opinion. The adjuster will point out that it's the patient talking."
        ],
        discussionCase: "Dr. Patel's causation opinion (p. 55) names the C5-6 injury. Does it cover Dana's low back complaints? What do you write, and what do you point out to the attorney?"
      },
      trainerCue: "The two most important sentences for the demand are Dr. Patel's causation opinion (p. 55) and her future-care estimate (p. 57). Have trainees find both pages."
    },
    { h: "Flag: Procedures, MMI, Impairment and Future Care",
      layout: "ICONLIST",
      icons: [
        { icon: "💉", label: "Procedure", desc: "07/10/2026: C5-6 interlaminar ESI under fluoroscopy; pain 6/10 before, 2/10 after (pp. 64–66)." },
        { icon: "🏁", label: "MMI", desc: "08/21/2026, Dr. Patel: neck pain 3/10, intermittent (pp. 56–58). Stable — not “healed.”" },
        { icon: "📊", label: "Impairment rating", desc: "A percentage a provider assigns using a rating guide. Dana's file has none — never add one." },
        { icon: "🔮", label: "Future care", desc: "Up to 2 more C5-6 ESIs over 24 months if symptoms recur, $3,900 each ($7,800) (p. 57)." },
        { icon: "🛠", label: "Work status", desc: "Off work (p. 15); back to work 04/03/2026, no lifting over 15 lb (p. 26)." }
      ],
      fourPart: {
        corePrinciples: [
          "Procedures, MMI and future care turn a treatment history into damages: what was done, where treatment ended and what is still ahead.",
          "MMI (maximum medical improvement) means the condition has stabilized and isn't expected to improve significantly with more treatment. It does not mean healed — future care can still be needed.",
          "Future care must come from a provider, in writing: what, how often, for how long, the cost and any condition. Dana's is up to 2 more C5-6 ESIs over the next 24 months if symptoms recur, estimated $3,900 each ($7,800) (p. 57)."
        ],
        howTo: [
          "Flag each procedure “Procedure” with the date, level, type, guidance and pain before and after: C5-6 interlaminar ESI under fluoroscopy, 6/10 → 2/10 (pp. 64–66).",
          "Flag the MMI visit “MMI / future care” with the date and the provider's words (08/21/2026, pp. 56–58).",
          "Copy the future-care recommendation exactly — including “up to” and “if symptoms recur” — with the cost and the page.",
          "Record an impairment rating only if a provider gives one, with the percentage, the guide and edition used, and the page. Dana's file has none.",
          "Note work status and restrictions for the wage claim: off work (p. 15); back to work 04/03/2026, no lifting over 15 lb (p. 26)."
        ],
        bestPractices: [
          "The future-care estimate is what the demand's future medical figure rests on. Without a provider's written estimate, there's no number to use.",
          "Keep the procedure's CPT code in view for Day 3: Dana's ESI is CPT 62321.",
          "Pitfall: writing “needs two more injections.” The record says up to two, if symptoms recur — and the adjuster will read p. 57."
        ],
        discussionCase: "Someone reads Dana's 08/21/2026 note and says, “MMI — so she's healed.” What does MMI mean, and what future care did Dr. Patel document?"
      },
      trainerCue: "Point out what's NOT in the file: no impairment rating and no surgery recommendation. Trainees must not add either."
    },
    { h: "Diagnostic Imaging Words: Bulge, Protrusion, Herniation",
      layout: "TABLE",
      tableHeaders: ["Term on the report", "What it generally means", "How you write it"],
      tableRows: [
        ["Disc bulge", "The disc extends a little past its normal edges over a wide area (more than about a quarter of its circumference). Common with age; not a herniation.", "Quote it: “disc bulge”"],
        ["Herniation", "The umbrella term: disc material displaced beyond its normal limits in a limited area. Protrusion and extrusion are the two types.", "Only if the report uses the word"],
        ["Protrusion", "A herniation whose base (where it meets the disc) is wider than the part that sticks out.", "Dana, p. 41: “3 mm central disc protrusion at C5-6”"],
        ["Extrusion", "A herniation whose displaced material is wider than its base in at least one view, or has moved above or below the disc level.", "Only if the report says “extrusion”"],
        ["Sequestration", "An extruded fragment that has broken free from the disc.", "Quote it exactly"],
        ["Abutting · effacing · compressing", "How much a disc touches nearby structures: touching · flattening or indenting · squeezing.", "Dana: “abutting the ventral thecal sac”"],
        ["Stenosis · foraminal narrowing", "Narrowing of the spinal canal, or of the openings where nerve roots exit.", "Quote the level, side and degree"],
        ["Degenerative · chronic · acute", "Wear and tear · long-standing · recent. The radiologist describes; causation is a treating doctor's opinion.", "Quote it; don't argue with it"]
      ],
      fourPart: {
        corePrinciples: [
          "Imaging words have specific meanings. In the standard terminology many radiologists follow, a bulge is not a herniation, and “herniation” covers two shapes: protrusion and extrusion.",
          "The chronology, the summary and the demand use the radiologist's exact words, usually from the Impression. Dana's MRI: “3 mm central disc protrusion at C5-6 abutting the ventral thecal sac” (p. 41).",
          "Swapping in a different word — “herniated” or “ruptured” for “protrusion,” “herniation” for “bulge” — changes how the finding reads. Even though a protrusion is technically a type of herniation, the report's word is the one you use."
        ],
        howTo: [
          "Find the Impression section and quote it; use the Findings for detail.",
          "Keep the size, level, location and side exactly: 3 mm · C5-6 · central.",
          "Keep the contact words as written: “abutting” is not “compressing.”",
          "Add nothing the report doesn't say — for example, don't add nerve or cord compression.",
          "In the summary, you may explain a term for a lay reader, but keep the radiologist's word next to it."
        ],
        bestPractices: [
          "If a doctor's office note uses a different word than the radiologist, quote each one with its own page — don't pick the stronger one.",
          "CT shows bone well; MRI shows soft tissue such as discs and nerves. A CT with no fracture doesn't rule out a disc injury.",
          "Pitfall: the draft demand's “herniated disc at C5-6.” Page 41 says “3 mm central disc protrusion.” Use the radiologist's words."
        ],
        discussionCase: "Dr. Patel's diagnosis is “C5-6 disc protrusion with right C6 radiculopathy,” and the MRI says “3 mm central disc protrusion at C5-6.” A colleague wants to write “herniated disc with nerve damage.” What do you write instead, and why?"
      },
      trainerCue: "Be precise: in the standard terminology a protrusion is a kind of herniation — but the report says “protrusion,” so that's the word. Sketch the shapes: broad and shallow (bulge), wide base (protrusion), narrow neck (extrusion)."
    },
    { h: "Writing the Medical Summary: the Structure",
      layout: "PROCESS",
      processSteps: [
        { label: "Overview", desc: "Who, DOI, how it happened, injuries, providers." },
        { label: "Initial treatment", desc: "The ED on 03/14/2026 and the first days." },
        { label: "Diagnostics", desc: "CT and MRI, in the radiologists' words." },
        { label: "Treatment course", desc: "Chiropractic, orthopedics, pain management, the ESI." },
        { label: "Gaps & prior history", desc: "The 43-day gap; the 2025 low back strain." },
        { label: "Current status", desc: "MMI, future care, restrictions." }
      ],
      fourPart: {
        corePrinciples: [
          "The medical summary follows a set structure so the attorney — and later the adjuster — can find anything fast: overview → initial treatment → diagnostics → treatment course → gaps & prior history → current status, MMI and future care.",
          "Each section is short, factual and cited to the page. It's written from the chronology, not from memory.",
          "The summary is a guide to the records. It stays neutral, even though it becomes an exhibit to a persuasive demand."
        ],
        howTo: [
          "01 Overview — Dana Whitfield, 42; rear-end MVC on 03/14/2026; neck and low back injuries; the providers and dates of care.",
          "02 Initial treatment — Riverside ED: neck 7/10, LBP 5/10; CT no acute fracture; cervical and lumbar strain; prescriptions; off work (pp. 1–9).",
          "03 Diagnostics — MRI on 03/30/2026: “3 mm central disc protrusion at C5-6 abutting the ventral thecal sac” (p. 41).",
          "04 Treatment course — Harbor Spine, 24 visits (03/17–05/14/2026); Dr. Patel on 04/20/2026 with the causation opinion (p. 55); Bayside on 06/26/2026 and the ESI on 07/10/2026 (pp. 60–66).",
          "05–06 Gaps & prior history, then current status — the 43-day gap and its reasons (pp. 38, 60); the 2025 low back strain (pp. 10–11); MMI on 08/21/2026 and future care (pp. 56–58)."
        ],
        bestPractices: [
          "Start each paragraph with the date and the provider so the reader never loses the timeline.",
          "Use the TP02 headings exactly — the attorney reads many summaries and knows where to look.",
          "Pitfall: tucking the gap and the prior injury into one vague line at the bottom. They get their own section, stated plainly, with the pages."
        ],
        discussionCase: "Draft the two-sentence overview for Dana's medical summary. What belongs in it, and what waits for later sections?"
      },
      trainerCue: "Put TP02 on screen and outline the six headings together; trainees write the full summary in the Skill Builder."
    },
    { h: "Neutral, Accurate, Traceable: Summary Rules",
      layout: "ICONLIST",
      icons: [
        { icon: "⚖️", label: "Neutral", desc: "Facts, not adjectives or arguments. Persuasion belongs to the demand and the attorney." },
        { icon: "🎯", label: "Accurate", desc: "Exact dates, numbers and terms: 03/14/2026 · 43 days · 3 mm protrusion." },
        { icon: "🔗", label: "Traceable", desc: "Every fact ends with its page: (WHITFIELD 0055)." },
        { icon: "🧩", label: "Complete", desc: "The hard facts too: the 2025 low back strain and the gap." },
        { icon: "🚫", label: "No opinions of your own", desc: "No causation, no value, no legal conclusions." },
        { icon: "✅", label: "Checked", desc: "A second read against the pages before the attorney sees it." }
      ],
      fourPart: {
        corePrinciples: [
          "A medical summary earns trust by being neutral, accurate and traceable. One overstatement makes the adjuster doubt every other line.",
          "Neutral doesn't mean weak: Dr. Patel's causation opinion and the MRI finding are strong because they're quoted exactly and cited.",
          "The summary never contains your opinion about causation, the value of the case, or what the client should do."
        ],
        howTo: [
          "Cite every factual sentence to its Bates page(s).",
          "Replace adjectives with the record's measurements: “neck pain 3/10, intermittent,” not “ongoing pain.”",
          "Quote opinions (causation, future care) exactly and name the doctor who gave them.",
          "State the unhelpful facts plainly, with their pages — the gap, the prior strain, the 2/10 after the injection.",
          "Read the draft against the chronology and the pages: every date, number, name, side and level."
        ],
        bestPractices: [
          "Use the client's name and plain verbs: “Dana reported,” “Dr. Patel diagnosed,” “the MRI showed.”",
          "Dates, numbers and names must match the chronology and the bills exactly — the DOI is 03/14/2026 everywhere.",
          "Pitfall: “Dana has suffered a devastating, life-changing spinal injury.” That's argument — the attorney decides whether and how to say anything like it in the demand."
        ],
        discussionCase: "Rewrite this line neutrally, with cites: “After the crash, Dana's neck was badly hurt and therapy did nothing, so she needed a spinal injection.”"
      },
      trainerCue: "Ask which part of that line is inaccurate, not just non-neutral. (Therapy did help: neck pain went from 7/10 to 4/10 by 05/14/2026, pp. 12–15 and 38.)"
    },
    { h: "Quality Check: Reconciling the Chronology with the Bills",
      layout: "TABLE",
      tableHeaders: ["In the chronology", "In the bills", "Result"],
      tableRows: [
        ["03/14/2026 Riverside ED (pp. 1–9)", "Riverside Medical Center UB-04 $4,850.00 + Riverside Emergency Physicians CMS-1500 $1,120.00", "Match — facility and physician bills for one visit, not a duplicate"],
        ["ED prescriptions, 03/14/2026", "Corner Pharmacy $86.40", "Match — the drugs prescribed in the ED"],
        ["Harbor Spine, 24 visits 03/17–05/14/2026 (pp. 12–38)", "24 × $240.00 = $5,760.00", "Match — count the visits in both"],
        ["Harbor Spine 2025 prior care (pp. 10–11)", "$285.00 on the same ledger", "Prior — stays in the chronology (flagged), out of the specials"],
        ["MRI 03/30/2026 (pp. 39–41)", "Two lines: CPT 72141, $2,400.00, same date", "One MRI, one charge — the second line is a duplicate"],
        ["Summit Orthopedic 04/20 (pp. 52–55) and 08/21/2026 (pp. 56–58)", "$650.00 and $325.00", "Match"],
        ["Bayside 06/26 and 07/10/2026 (pp. 60–66)", "Balance-due statement only, until the itemized bill arrived on 10/07/2026", "Reconcile to the itemized bill: $425.00 + $3,900.00 (CPT 62321)"],
        ["No accident record", "Northgate Family Practice 05/02/2026, $275.00", "Unrelated wellness exam — leave out, with a note"]
      ],
      fourPart: {
        corePrinciples: [
          "Every billed date of service should have a record, and every treatment record should have a bill. Reconciling the two catches errors before the adjuster does.",
          "A mismatch is a question, not an answer: a bill with no record may mean missing pages, a duplicate, prior care or unrelated care.",
          "Totals must agree across documents: Dana's related bills come to $19,516.40 — not the $22,476.40 you get by adding every line in the stack."
        ],
        howTo: [
          "Line up each date of service in the chronology with each billed line.",
          "Count repeat services: 24 Harbor Spine visits in the records, 24 on the ledger.",
          "Mark each bill line: match, missing record, missing bill, duplicate, prior (before the DOI) or unrelated.",
          "Request what's missing; set aside duplicate, prior and unrelated lines with a note for the itemization.",
          "Tell the attorney about anything that changes the specials."
        ],
        bestPractices: [
          "Same date, same CPT code, same amount twice is a likely duplicate — confirm with the billing office instead of assuming. Two bills from two billing entities for one visit are normal.",
          "Keep the chronology and the itemization in the same date order so they can be read side by side.",
          "Pitfall: adding up every ledger in the stack. Dana's pile totals $22,476.40; the related specials are $19,516.40."
        ],
        discussionCase: "Explain the $2,960.00 difference between $22,476.40 and $19,516.40 line by line, with the reason each line is left out."
      },
      trainerCue: "This is the bridge to Day 3. Trainees should leave able to say why each of the three lines is out: before the DOI ($285.00), a duplicate ($2,400.00), and unrelated ($275.00)."
    },
    { h: "Putting It Together: the Seven Flags",
      layout: "ICONLIST",
      icons: [
        { icon: "📄", label: "Routine entry", desc: "No special flag — most rows, including routine therapy visits." },
        { icon: "🦴", label: "Prior injury / pre-existing", desc: "The same body part, before the DOI." },
        { icon: "⏸", label: "Gap in treatment (30+ days)", desc: "The dates, the days and the reason the records give." },
        { icon: "🩻", label: "Objective diagnostic finding", desc: "Imaging or measured exam findings, quoted exactly." },
        { icon: "⚖️", label: "Causation opinion", desc: "A doctor's opinion that the crash caused the injury, word for word." },
        { icon: "💉", label: "Procedure (injection / surgery)", desc: "Date, level, guidance, pain before and after." },
        { icon: "🏁", label: "MMI / future care", desc: "Where treatment ended and what the doctor says is still ahead." }
      ],
      skill: { tool: "mdChron2", cms: true },
      fourPart: {
        corePrinciples: [
          "Every row in the chronology gets a flag, and most are routine. The six special flags point the attorney to the facts that decide the claim.",
          "Flags only work if they're consistent: the same event gets the same flag in the chronology, the summary and your note to the attorney.",
          "The chronology and the summary go to the attorney together, with a short note listing the flagged items and their pages."
        ],
        howTo: [
          "Put every record in date order and write one row per encounter.",
          "Flag each row and cite its page.",
          "Reconcile the rows with the bills.",
          "Write the six-part medical summary from the chronology.",
          "Send both to Attorney Bennett with a note: the flags, the pages, and anything still missing."
        ],
        bestPractices: [
          "Do a last check of the six facts that most often go wrong: the DOI, the gap's dates and length, the MRI wording, the causation page, the ESI date and the future-care cost.",
          "Save the chronology and summary in the CMS with the date and version, and log the handoff to the attorney.",
          "Pitfall: flagging so much that nothing stands out. “Routine entry” is the right flag for most rows."
        ],
        discussionCase: "Go through Dana's file row by row: which encounter gets each of the six special flags, and which page proves it?"
      },
      trainerCue: "Launch the Day 2 Skill Builder — Chronology & Summary Builder. Trainees put Dana's records in date order, flag the prior injury, the gap, causation, imaging, the injection, MMI and future care, write the chronology row for Dr. Patel's 04/20/2026 consult, and write the medical summary. Hand out the Chronology & Summary Guide."
    }
  ],
  quickChecks: [
    { afterIndex: 2, q: "The MRI report (p. 41) says “3 mm central disc protrusion at C5-6 abutting the ventral thecal sac.” Your chronology entry says:", opts: ["Herniated disc at C5-6", "“3 mm central disc protrusion at C5-6 abutting the ventral thecal sac” (WHITFIELD 0041)", "Bulging disc in the neck", "Serious disc injury caused by the crash"], a: 1, r: "Quote the radiologist's words exactly, with the page. Don't upgrade, downgrade or add causation." },
    { afterIndex: 6, q: "Which of these is a causation opinion you flag?", opts: ["Bayside's note that Dana has had neck pain “since the MVC of 03/14/2026” (p. 60)", "The ED's diagnosis of cervical strain", "Dr. Patel: “within a reasonable degree of medical probability, the C5-6 injury is causally related to the 03/14/2026 MVC” (p. 55)", "The client intake summary"], a: 2, r: "A causation opinion is a doctor's opinion on cause. “Since the MVC” is the patient's history, not an opinion." },
    { afterIndex: 10, q: "Which sentence belongs in Dana's medical summary?", opts: ["Dana stopped chiropractic care on 05/14/2026 because of childcare (WHITFIELD 0038) and next treated on 06/26/2026 (WHITFIELD 0060).", "Dana suffered a devastating spinal injury.", "Dana was a model patient who never missed care.", "This injury is worth six figures."], a: 0, r: "Neutral, accurate, cited. The others are argument, inaccurate, or a value — which is the attorney's call." }
  ],
  quiz: [
    { q: "A medical chronology is:", opts: ["A persuasive letter to the adjuster", "A date-ordered table with one row per encounter, each with its page reference", "A list of bills only", "The attorney's case valuation"], a: 1, r: "The chronology is the complete, cited record of every encounter." },
    { q: "Dana's MRI report says “3 mm central disc protrusion at C5-6.” In the summary you write:", opts: ["“herniated disc”", "“disc bulge”", "“ruptured disc”", "“3 mm central disc protrusion at C5-6,” with the cite"], a: 3, r: "Use the radiologist's words. Changing the term overstates (or understates) the finding." },
    { q: "In the standard terminology many radiologists use, a disc bulge:", opts: ["Extends a little past the disc's edges over a wide area (more than about a quarter of the circumference) and is not a herniation", "Is the most severe type of herniation", "Always means nerve damage", "Is the same as an extrusion"], a: 0, r: "A bulge is broad and shallow; herniations (protrusion, extrusion) are localized." },
    { q: "The gap in Dana's treatment runs:", opts: ["03/31 → 04/20/2026, 20 days", "05/14 → 06/26/2026, 43 days", "04/20 → 06/26/2026, 67 days", "05/02 → 06/26/2026, 55 days"], a: 1, r: "17 days left in May plus 26 in June = 43 days, from the last Harbor Spine visit to the first Bayside visit." },
    { q: "The reasons for the gap that the records give are:", opts: ["None — the records are silent", "A vacation", "Childcare (p. 38) and symptoms that continued and returned (p. 60)", "The insurer denied care"], a: 2, r: "Report the reasons the records give, with the pages — never your own guess." },
    { q: "Dr. Patel's causation opinion is at:", opts: ["WHITFIELD 0041", "WHITFIELD 0038", "WHITFIELD 0064", "WHITFIELD 0055"], a: 3, r: "Page 55, the last page of the 04/20/2026 consult (pp. 52–55)." },
    { q: "Bayside's note that Dana has had neck pain “since the MVC of 03/14/2026” is:", opts: ["The patient's history — record it, but it is not a causation opinion", "A causation opinion from Dr. Romero", "An objective finding", "A legal conclusion"], a: 0, r: "It records what Dana reported. The causation opinion in the file is Dr. Patel's (p. 55)." },
    { q: "Harbor Spine's 2025 records (pp. 10–11) show a low back strain. In the chronology you:", opts: ["Leave them out because they're before the DOI", "Include them in date order, flagged as a prior injury", "Put them in the bills only", "Mention them only if the adjuster asks"], a: 1, r: "Prior injuries are included and flagged. The attorney decides how to address them." },
    { q: "MMI means:", opts: ["The client is fully healed", "The treatment was unnecessary", "The condition has stabilized and isn't expected to improve significantly with more treatment — future care can still be needed", "The case must settle now"], a: 2, r: "Dana reached MMI on 08/21/2026, and Dr. Patel still documented future care." },
    { q: "Dr. Patel's future-care entry should read:", opts: ["Two more injections needed, $7,800", "Up to 2 more C5-6 ESIs over the next 24 months if symptoms recur, estimated $3,900 each ($7,800) (WHITFIELD 0057)", "Lifetime injections", "Surgery likely"], a: 1, r: "Keep the qualifiers (“up to,” “if symptoms recur”), the cost and the page." },
    { q: "Dana's pain went from 6/10 before to 2/10 after the 07/10/2026 ESI. This is:", opts: ["An objective finding", "An impairment rating", "Patient-reported pain recorded in the procedure note — record it with the page", "A causation opinion"], a: 2, r: "Pain scores are subjective, even when a provider records them. They still belong in the chronology." },
    { q: "The correct order for the medical summary is:", opts: ["Overview → initial treatment → diagnostics → treatment course → gaps & prior history → current status, MMI and future care", "Future care → overview → bills → gaps", "Bills → records → police report", "Diagnostics → overview → gaps → initial treatment"], a: 0, r: "The set structure lets the attorney and the adjuster find anything fast." },
    { q: "Clearview's ledger lists the 03/30/2026 MRI twice — same CPT (72141), same amount. The chronology shows:", opts: ["Two MRIs", "No MRI", "One MRI (pp. 39–41), so one charge is related and the second line is a duplicate", "An MRI and a CT"], a: 2, r: "Reconciling the bills with the chronology catches duplicates before the adjuster does." },
    { q: "Which sentence is neutral and traceable?", opts: ["Dana's excruciating pain never stopped.", "Dana clearly needs surgery.", "The adjuster will have to pay for this herniation.", "On 08/21/2026 Dr. Patel recorded neck pain 3/10, intermittent, and placed Dana at MMI (WHITFIELD 0056–0058)."], a: 3, r: "Facts in the record's words, with the date, the provider and the page." },
    { q: "Dana's Northgate Family Practice wellness exam (05/02/2026):", opts: ["Is unrelated — it stays out of the injury story and the specials, with a note", "Ends the gap in treatment", "Is a treatment visit for the neck", "Adds $275.00 to the demand"], a: 0, r: "An annual wellness exam isn't accident treatment. Note why it's left out." }
  ],
  discussionQuestion: "Draft, out loud, the paragraph of Dana Whitfield's medical summary that covers gaps and prior history — neutral, in the providers' words, with a page cite on every fact. Then explain how you'll point Attorney Bennett to the 43-day gap (05/14 → 06/26/2026, pp. 38 and 60), the 2025 low back strain (pp. 10–11) and Dr. Patel's causation opinion (p. 55) without arguing the case yourself."
};
