const DAY4 = {
  id: 4,
  title: "The Demand Letter",
  theme: "What a Demand Letter Is · When to Send: MMI and the Pre-Demand Checklist · Your Role vs the Attorney's · The Parts of a Demand Letter · Facts & Liability · Injuries & Treatment (from the Medsum) · Medical Specials & Economic Damages · Non-Economic Damages: the Human Story · Addressing Weaknesses Before the Adjuster Does · Policy Limits, Time-Limited Demands & Deadlines · Cite Every Fact: Persuasive and Accurate · Quality Control: Numbers, Names, Dates, Exhibits · Skill Builder: The Demand Draft Audit",
  objective: "Know when a file is ready for a demand, draft every part of the letter from the firm's template using the medsum and the itemization, tell Dana's story with the exact figures and a record cite for every fact, address the gap and the prior injury before the adjuster does, leave the amount, limits and deadline terms to the attorney, and audit a draft until every number, name, date and exhibit is right.",
  lessons: [
    { h: "What a Demand Letter Is",
      layout: "ICONLIST",
      icons: [
        { icon: "📖", label: "Tells the story", desc: "What happened, who was at fault, and how the injury changed the client's life." },
        { icon: "⚖️", label: "Proves liability", desc: "The police report, the citation, the witness and the carrier's liability decision." },
        { icon: "🩺", label: "Proves the injury", desc: "Diagnoses, treatment, objective findings and the doctor's causation opinion — from the medsum." },
        { icon: "💵", label: "Proves the damages", desc: "Medical specials, future care, lost wages and the non-economic harm." },
        { icon: "🎯", label: "Makes the demand", desc: "The amount the attorney set, and how long it stays open." },
        { icon: "📎", label: "Carries the proof", desc: "Exhibits A–G, with a page cite for every fact." }
      ],
      fourPart: {
        corePrinciples: [
          "A demand letter is the firm's written settlement proposal to the at-fault driver's insurer: it lays out liability and damages, attaches the proof, and asks for a specific amount by a deadline.",
          "It is usually the adjuster's first full look at the injury claim. The adjuster evaluates the claim from it and often needs a supervisor's authority to pay more — so the letter must be easy to evaluate and hard to argue with.",
          "A good demand is organized, accurate and fully supported: every fact traces to an exhibit page, and nothing is exaggerated."
        ],
        howTo: [
          "Start from the firm's template (TP04 Demand Letter Template) — never from a blank page or another client's letter.",
          "Pull the facts from the police report, the medsum, the itemization, the wage verification and the impact statement.",
          "Write each section in plain, confident language and cite the exhibit page for every fact.",
          "Leave the demand amount and deadline exactly as the attorney sets them.",
          "Send the draft to the attorney for review — it goes out only when she signs it."
        ],
        bestPractices: [
          "Write for a busy adjuster: short paragraphs, headings, dates and page cites.",
          "Persuasive comes from facts, not adjectives — “a 3 mm central disc protrusion at C5-6” does more than “a severe, devastating injury.”",
          "Pitfall: reusing an old letter from another file — one leftover name or number wrecks credibility and exposes another client's information."
        ],
        discussionCase: "Keystone accepted liability on 04/02/2026. Why does Dana's demand still need a facts-and-liability section?"
      },
      trainerCue: "Liability is accepted, but the facts (stopped at a red light, the insured on his phone, the citation) show fault and impact the adjuster must weigh — and the letter has to stand on its own for anyone who reads it later, including a mediator."
    },
    { h: "When to Send: MMI and the Pre-Demand Checklist",
      layout: "PROCESS",
      processSteps: [
        { label: "Treatment complete / MMI", desc: "The doctor documents MMI or discharge — Dana: Dr. Patel, 08/21/2026 (WHITFIELD 0056–0058)." },
        { label: "Records and bills in", desc: "Complete records AND itemized bills from every provider — Bayside's itemized bill arrived 10/07/2026." },
        { label: "Medsum and itemization done", desc: "Chronology, summary and specials reconciled: $19,516.40 billed." },
        { label: "Economic proof", desc: "Wage verification (Lakeside USD) and the future-care estimate ($7,800.00, WHITFIELD 0057)." },
        { label: "Coverage known", desc: "Liability accepted 04/02/2026; limits $100,000/$300,000 confirmed 07/15/2026." },
        { label: "Liens identified", desc: "LOPs, BlueHarbor's reimbursement claim, PIP status — listed, not negotiated." },
        { label: "Impact statement signed", desc: "Dana's statement, signed 09/30/2026." },
        { label: "Attorney approval", desc: "Attorney Bennett sets the amount and deadline, reviews and signs." }
      ],
      fourPart: {
        corePrinciples: [
          "A demand usually goes out once the client has finished treating or reached maximum medical improvement (MMI). Before that, no one knows the full damages.",
          "Settlement is final: care that isn't known when the claim settles (another injection next year, a surgery) can't be added later — so timing protects the client.",
          "The attorney decides when to send. She may send before MMI in some cases — for example, when the injuries clearly exceed the policy limits — but that is her call, not the calendar's."
        ],
        howTo: [
          "Confirm MMI or discharge in the records and note the page (Dana: Dr. Patel, 08/21/2026, WHITFIELD 0056–0058).",
          "Run the checklist provider by provider: complete records, itemized bills with dates and CPT codes, nothing that is only a “balance due.”",
          "Confirm the medsum, the itemization and the specials summary agree with each other.",
          "Confirm liability, limits, liens and the statute of limitations are recorded in the CMS.",
          "Send the attorney a short readiness note: what's complete, what's missing, and when the draft will be ready."
        ],
        bestPractices: [
          "Check the statute of limitations every time. Dana's is 03/14/2028 under the training state's rule, so there is time to negotiate; a demand sent a few weeks before the SOL leaves almost none.",
          "Hold the draft for the last bill — Bayside's balance-due statement wasn't enough; the itemized bill came on 10/07/2026.",
          "Pitfall: sending a demand while the client is still treating because “the file is getting old” — whatever care comes later is left out for good."
        ],
        discussionCase: "On 10/05/2026, Dana's file has MMI, limits and wage proof, but Bayside has sent only a balance-due statement. Is the demand ready? What do you tell Attorney Bennett?"
      },
      trainerCue: "Not ready until the itemized bill arrives (it did, on 10/07). A balance-due statement has no dates of service, CPT codes or line charges — the adjuster would ask for it and the specials couldn't be checked."
    },
    { h: "Your Role vs the Attorney's",
      layout: "COMPARE",
      compareLeft: { label: "✍️ Demand Specialist", items: ["Builds the medsum, chronology and itemization", "Drafts the letter from the firm's template", "Cites an exhibit page for every fact", "Assembles and checks the exhibits", "Flags weaknesses and missing items", "Sends the packet only after the attorney signs"] },
      compareRight: { label: "⚖️ Attorney (Laura Bennett, Esq.)", items: ["Decides when the demand goes out", "Sets the demand amount and the deadline", "Writes the legal arguments (liability law, billed vs paid)", "Decides on any time-limited or limits terms", "Reviews, edits and signs the letter", "Evaluates every offer and advises the client"] },
      fourPart: {
        corePrinciples: [
          "The Demand Specialist builds the letter; the attorney owns it. Her signature makes it the firm's legal position.",
          "Valuation, legal strategy and advice belong to the attorney: the amount, the deadline terms, the legal arguments, and what the client should do.",
          "You never state a case value, predict a result, or tell the client what her case is “worth” — not in the letter, not on the phone."
        ],
        howTo: [
          "Draft every factual section completely, with cites.",
          "Mark the attorney's parts for her: the amount, the deadline and any legal argument.",
          "List your open questions and the weaknesses you found in a short cover note with the draft.",
          "Make the attorney's edits exactly; if an edit changes a fact, re-check it against the records and tell her what you found."
        ],
        bestPractices: [
          "Make the attorney's review fast: what's in, what's flagged, what needs her decision.",
          "If a client, provider or adjuster asks “how much are you asking for?”, route it to the attorney.",
          "Pitfall: filling in a demand number because the template has a blank — the amount is always the attorney's."
        ],
        discussionCase: "Dana emails: “What do you think my case is worth? My friend got $100,000.” What do you write back?"
      },
      trainerCue: "Acknowledge, don't value: “Attorney Bennett sets and explains the demand — I've asked her to call you.” Route it the same day and log it."
    },
    { h: "The Parts of a Demand Letter",
      layout: "TABLE",
      tableHeaders: ["Part", "What it does", "Dana's source"],
      tableRows: [
        ["Heading", "Date, delivery method, adjuster, insured, claimant, claim number, DOI", "Keystone's letters: KM-26-0418823 · Tom Reyes · DOI 03/14/2026"],
        ["Introduction", "Who the firm represents and why it's writing", "Retainer (03/18/2026)"],
        ["Facts & liability", "How the crash happened and who is at fault", "Police report (Ex. A), photo log (Ex. B), Keystone's 04/02/2026 letter"],
        ["Injuries & treatment", "Diagnoses and treatment in date order", "Medsum (Ex. C) and records (Ex. E)"],
        ["Medical specials", "Past bills by provider, and the total", "Itemization (Ex. D): $19,516.40"],
        ["Other economic losses", "Future care and lost wages", "WHITFIELD 0057: $7,800.00 · Ex. F: $3,136.00"],
        ["Non-economic damages", "Pain, limits, daily life — the human story", "Impact statement (Ex. G) and the records"],
        ["Demand, deadline & enclosures", "The amount, how long it's open, the exhibit list", "Attorney: $85,000.00, open 30 days · Ex. A–G"]
      ],
      fourPart: {
        corePrinciples: [
          "Every demand letter has the same backbone: heading, introduction, facts and liability, injuries and treatment, damages, the demand, and the enclosures.",
          "The order walks the adjuster from fault, to injury, to money — each part sets up the next.",
          "The template holds the structure and the firm's standard language; you supply the facts from the file."
        ],
        howTo: [
          "Open TP04 and fill the heading from Keystone's own letters (claim number, insured, adjuster).",
          "Write the facts from the police report, the injuries from the medsum, and the specials from the itemization.",
          "Put the economic damages in a table: past medical, future medical, lost wages, total.",
          "Leave the demand paragraph with the attorney's amount and deadline exactly as she gives them.",
          "End with an enclosure list that matches the exhibit index (DW28)."
        ],
        bestPractices: [
          "Use headings the adjuster can scan — many go straight to the specials and the causation opinion.",
          "Keep property damage out: Dana's $6,480.00 repair was handled and paid separately.",
          "Pitfall: a specials total that doesn't match the itemization exhibit — the adjuster will find it before anything else."
        ],
        discussionCase: "Which section of Dana's letter would you expect Tom Reyes to read first, and what has to be perfect in it?"
      },
      trainerCue: "Most adjusters check the specials and the medical causation first. For Dana: a $19,516.40 total that ties to Ex. D, and Dr. Patel's opinion cited to WHITFIELD 0055."
    },
    { h: "Facts & Liability",
      layout: "TABLE",
      tableHeaders: ["Fact", "Where it comes from"],
      tableRows: [
        ["Dana was stopped at a red light, eastbound on Oak St at 5th Ave, on 03/14/2026 at about 4:15 PM", "Police report LPD-26-031477 (Ex. A)"],
        ["Grant Mercer's 2021 Ford F-150 struck the rear of her 2019 Honda CR-V", "Police report (Ex. A); photo log (Ex. B)"],
        ["Mercer told the officer he “looked down at my phone for a second”", "Police report — Officer R. Alvarez #1842 (Ex. A)"],
        ["Mercer was cited for Following Too Closely", "Police report (Ex. A)"],
        ["Witness Priya Desai: the CR-V “had been stopped for a few seconds”", "Police report (Ex. A)"],
        ["Keystone accepted liability 100% on 04/02/2026", "Keystone's liability letter (DW06)"],
        ["Dana reported neck and low back pain at the scene and went to the ED", "Police report (Ex. A); ED record (Ex. E, WHITFIELD 0001–0009)"]
      ],
      fourPart: {
        corePrinciples: [
          "The facts section tells the crash in a few clear sentences: where, when, what each driver was doing, and who was at fault.",
          "Use the police report's facts and quotes — the insured's own words (“looked down at my phone for a second”) are stronger than any adjective.",
          "Even when liability is accepted, the facts still matter: a stopped car, a distracted driver and a citation show fault and the impact the adjuster must weigh."
        ],
        howTo: [
          "Write the facts in time order, in the past tense, with the date, time and location.",
          "Quote the insured and the witness exactly, with the exhibit cite.",
          "State the citation and Keystone's acceptance of liability (its letter of 04/02/2026).",
          "Point to the photo log (Ex. B) for the damage to the rear of the CR-V."
        ],
        bestPractices: [
          "Quote short and exact — never paraphrase inside quotation marks.",
          "State what the documents say, not what you imagine: no speed estimates or “slammed into her” unless a record says so.",
          "Pitfall: the wrong date. DW02, the intake summary, says 03/15/2026; the police report and ED record say 03/14/2026 — use the records."
        ],
        discussionCase: "DW27's facts sentence reads: “Ms. Whitfield was stopped at a red light at Oak Street and 5th Avenue when your insured struck her vehicle from behind; your insured was cited for Following Too Closely (Ex. A).” Is it OK? What could you add, with cites?"
      },
      trainerCue: "It's accurate and cited — audit row 2 is OK. It gets stronger with the phone quote and the witness (both Ex. A) and Keystone's 04/02/2026 acceptance of liability."
    },
    { h: "Injuries & Treatment (from the Medsum)",
      layout: "PROCESS",
      processSteps: [
        { label: "03/14 · ED", desc: "Riverside: neck 7/10, low back 5/10; CT no fracture; cervical and lumbar strain (WHITFIELD 0001–0009)." },
        { label: "03/17 · Chiropractic", desc: "Harbor Spine: cervical ROM down 40%; 3x/week for 8 weeks; off work (WHITFIELD 0012–0015)." },
        { label: "03/30 · MRI", desc: "3 mm central disc protrusion at C5-6 abutting the ventral thecal sac (WHITFIELD 0041)." },
        { label: "04/20 · Orthopedics", desc: "Dr. Patel: C5-6 protrusion with right C6 radiculopathy; causation opinion (WHITFIELD 0055)." },
        { label: "05/14 · Discharge", desc: "Visit 24 of 24: neck 4/10, discharged improved; childcare (WHITFIELD 0038)." },
        { label: "06/26 · Pain management", desc: "Dr. Romero: neck 6/10 with right-arm tingling, worse since therapy stopped (WHITFIELD 0060)." },
        { label: "07/10 · Injection", desc: "C5-6 interlaminar ESI: 6/10 before, 2/10 after (WHITFIELD 0064–0066)." },
        { label: "08/21 · MMI", desc: "Dr. Patel: MMI; up to 2 more ESIs if symptoms recur, $7,800.00 (WHITFIELD 0057)." }
      ],
      fourPart: {
        corePrinciples: [
          "The injuries section retells the medsum as a story in date order: what hurt, what the doctors found, what they did, and where the client ended up.",
          "Use the providers' words and diagnoses exactly — the radiologist wrote “3 mm central disc protrusion,” so the letter says protrusion, not herniation.",
          "The most important sentences are the objective findings, the causation opinion and the future-care opinion — each one with its page cite."
        ],
        howTo: [
          "Work from the approved medsum (Ex. C), not from memory.",
          "Give each provider a short paragraph: dates, complaints and pain scores, findings, diagnosis, treatment, result.",
          "Quote Dr. Patel's causation sentence and cite it: (Ex. E, WHITFIELD 0055).",
          "Close with MMI and the future-care plan (Ex. E, WHITFIELD 0057)."
        ],
        bestPractices: [
          "Show the recovery curve with the records' own pain scores: neck 7/10 at the ED, 4/10 at discharge, 6/10 after the gap, 2/10 after the injection, 3/10 and intermittent at MMI.",
          "Leave unrelated care out of the story — the Northgate wellness exam is not accident treatment.",
          "Pitfall: upgrading the diagnosis. DW27 says “herniated disc” and cites WHITFIELD 0041, which says “3 mm central disc protrusion.” The adjuster opens the cite and stops trusting the letter."
        ],
        discussionCase: "DW27 says: “Dr. Anita Patel concluded that the C5-6 injury is causally related to this collision.” What's wrong with it, and how would you rewrite it?"
      },
      trainerCue: "No cite (audit row 5). Rewrite with her words and the page: Dr. Patel concluded that, “within a reasonable degree of medical probability, the C5-6 injury is causally related to the 03/14/2026 MVC” (Ex. E, WHITFIELD 0055)."
    },
    { h: "Medical Specials & Economic Damages",
      layout: "TABLE",
      tableHeaders: ["Provider", "Dates", "Billed"],
      tableRows: [
        ["Riverside Medical Center (ED facility)", "03/14/2026", "$4,850.00"],
        ["Riverside Emergency Physicians", "03/14/2026", "$1,120.00"],
        ["Corner Pharmacy", "03/14/2026", "$86.40"],
        ["Harbor Spine & Chiropractic (24 visits)", "03/17–05/14/2026", "$5,760.00"],
        ["Clearview Imaging (cervical MRI)", "03/30/2026", "$2,400.00"],
        ["Summit Orthopedic Associates", "04/20 and 08/21/2026", "$975.00"],
        ["Bayside Pain Management", "06/26 and 07/10/2026", "$4,325.00"],
        ["Total past medical specials", "", "$19,516.40"]
      ],
      fourPart: {
        corePrinciples: [
          "The specials section turns the itemization (Ex. D) into a table the adjuster can check in a minute: provider, dates, amount, total.",
          "Economic damages = past medical + future medical + lost wages (+ any other documented out-of-pocket loss). Dana: $19,516.40 + $7,800.00 + $3,136.00 = $30,452.40.",
          "Under the training state's rule the letter uses the full billed amounts and the itemization keeps the paid amounts — but billed-versus-paid rules differ from state to state, and the attorney decides what goes in the letter."
        ],
        howTo: [
          "Copy the lines from the final itemization — never retype totals from a draft or a provider ledger.",
          "Leave out what the itemization leaves out: the 2025 Harbor Spine charges ($285.00), Clearview's duplicate MRI line, and Northgate's wellness exam ($275.00).",
          "Add future medical with its basis: two C5-6 ESIs × $3,900.00 = $7,800.00 (Ex. E, WHITFIELD 0057).",
          "Add lost wages with the math and the proof: 14 workdays (03/16–04/02/2026) × $224.00 = $3,136.00 (Ex. F).",
          "Re-add every column yourself and match the total to Ex. D to the cent."
        ],
        bestPractices: [
          "Show the math on every derived number — the adjuster should never have to guess how you got it.",
          "The $6,480.00 property damage was paid separately; it is not a bodily injury special.",
          "Pitfall: DW27's specials table lists “Northgate Family Practice · 05/02/2026 · $275.00” and a total of $19,666.40 — neither matches the itemization."
        ],
        discussionCase: "The draft's total is $19,666.40; the itemization says $19,516.40. How do you find where the difference came from, and what do you fix?"
      },
      trainerCue: "The difference is $150.00, so the Northgate line ($275.00) doesn't explain it by itself: the draft's own table lines add up to $19,791.40, so its total is mis-added too. Re-add the draft's table line by line against Ex. D, remove Northgate, and make the total $19,516.40 — never assume one error explains another."
    },
    { h: "Non-Economic Damages: the Human Story",
      layout: "ICONLIST",
      icons: [
        { icon: "🧒", label: "Family", desc: "For six weeks Dana couldn't lift her 3-year-old son (Ex. G)." },
        { icon: "🚗", label: "Daily tasks", desc: "She couldn't turn her head to check her blind spot (Ex. G)." },
        { icon: "🏃", label: "What she gave up", desc: "She stopped her Saturday 5K runs (Ex. G)." },
        { icon: "🌙", label: "Sleep", desc: "She still wakes at night with neck pain once or twice a week (Ex. G)." },
        { icon: "💉", label: "What treatment took", desc: "24 chiropractic visits, an MRI, and an epidural steroid injection in her neck (Ex. E)." },
        { icon: "🔮", label: "The future", desc: "Up to two more injections over 24 months if symptoms recur (Ex. E, WHITFIELD 0057)." }
      ],
      fourPart: {
        corePrinciples: [
          "Non-economic damages are the losses without a bill: pain, limits on daily life, lost activities, lost sleep, worry, and what the future may hold.",
          "The best source is the client's own signed impact statement (Ex. G), backed up by the medical records.",
          "Specific beats general: “couldn't lift her 3-year-old son for six weeks” proves more than “suffered greatly.”"
        ],
        howTo: [
          "Read Dana's impact statement (DW26, signed 09/30/2026) and pick out the concrete, specific facts.",
          "Pair each life fact with a record where you can: the neck pain and 40% loss of motion (WHITFIELD 0012–0015), the injection (WHITFIELD 0064).",
          "Write in the third person, in plain words, keeping the client's own terms.",
          "Don't put a dollar figure on pain — the demand amount is the attorney's."
        ],
        bestPractices: [
          "Use the client's facts exactly as she gave them — never add a detail she didn't give.",
          "Show before and after: she ran a 5K every Saturday; after the crash she stopped.",
          "Pitfall: melodrama. “Her life was destroyed” invites the adjuster to discount the whole section."
        ],
        discussionCase: "Write two sentences about Dana's life after the crash using only Ex. G and one record cite."
      },
      trainerCue: "Model: For six weeks after the collision, Ms. Whitfield could not lift her 3-year-old son or turn her head to check her blind spot, and she stopped her Saturday 5K runs (Ex. G). Even after the 07/10/2026 injection (Ex. E, WHITFIELD 0064), she still wakes with neck pain once or twice a week (Ex. G)."
    },
    { h: "Addressing Weaknesses Before the Adjuster Does",
      layout: "COMPARE",
      compareLeft: { label: "⛔ Hiding it (DW27)", items: ["“Prior to this collision, Ms. Whitfield had never experienced neck or back problems.”", "Silence about the 43 days from 05/14 to 06/26/2026", "Hoping the adjuster skips WHITFIELD 0010–0011", "Letting Keystone tell the gap story first"] },
      compareRight: { label: "✅ Addressing it (with cites)", items: ["Her only documented prior care: 3 chiropractic visits for a low back strain in January 2025, then released (Ex. E, WHITFIELD 0010–0011)", "Dr. Patel relates the C5-6 neck injury to this collision (Ex. E, WHITFIELD 0055)", "At her 24th and final scheduled visit on 05/14/2026 she was discharged improved; she couldn't continue because her mother, who watched her son, was hospitalized (Ex. E, WHITFIELD 0038)", "Her neck pain and right-arm tingling continued and worsened, and she began pain management on 06/26/2026 (Ex. E, WHITFIELD 0060)"] },
      fourPart: {
        corePrinciples: [
          "Every file has weaknesses. The adjuster will find them in the records — the only question is who explains them first.",
          "Addressing a weakness honestly, with the record's own explanation, protects credibility. A false or silent letter hands the adjuster an argument and damages the firm's trust with the carrier.",
          "Dana's file has two: the 2025 low back strain (WHITFIELD 0010–0011) and the 43-day gap in treatment (05/14 → 06/26/2026)."
        ],
        howTo: [
          "List the weaknesses from the chronology's flags: prior injury, gap, missed visits, anything unrelated.",
          "For each one, find the record that explains it — the page, not a guess.",
          "Write it in one or two neutral sentences, with the cite, at the right point in the story.",
          "Mark the paragraph for the attorney — she decides how to frame it and whether to add a legal argument."
        ],
        bestPractices: [
          "State a prior injury accurately, not minimized: body part, dates, number of visits, outcome.",
          "Explain the gap with the records' reasons (childcare, WHITFIELD 0038; continuing symptoms, WHITFIELD 0060) — never with a reason the client didn't give.",
          "Pitfall: DW27 says Dana “had never experienced neck or back problems” while Exhibit E contains her 2025 low back records. A false statement of fact in a letter the attorney signs is an ethics problem, not just a strategy problem."
        ],
        discussionCase: "Rewrite DW27's “never experienced neck or back problems” sentence so it is true, cited, and still helps Dana. Then write the missing sentence about the gap."
      },
      trainerCue: "Model: Ms. Whitfield's only documented prior care was three chiropractic visits for a low back strain in January 2025, after which she was released (Ex. E, WHITFIELD 0010–0011); Dr. Patel relates the C5-6 neck injury to this collision (Ex. E, WHITFIELD 0055). The gap sentence is audit row 11 — DW27 leaves it out entirely."
    },
    { h: "Policy Limits, Time-Limited Demands & Deadlines",
      layout: "ICONLIST",
      icons: [
        { icon: "📄", label: "Know the limits", desc: "Keystone: $100,000 per person / $300,000 per accident, confirmed 07/15/2026." },
        { icon: "🎯", label: "Within the limits", desc: "Dana's $85,000.00 demand is below the $100,000 per-person limit." },
        { icon: "⏳", label: "Time-limited demands", desc: "An offer that expires on a set date — some carry serious legal consequences." },
        { icon: "🗺", label: "State-specific rules", desc: "Some states set by statute what these demands must say and how they are sent." },
        { icon: "⚖️", label: "Attorney only", desc: "The attorney drafts and approves every limits or time-limited term." },
        { icon: "📅", label: "Calendar it", desc: "Sent 10/09/2026, open 30 days; response due 11/09/2026." }
      ],
      fourPart: {
        corePrinciples: [
          "Policy limits are the most the at-fault driver's policy will pay. Keystone's are $100,000 per person and $300,000 per accident; the per-person limit caps what Keystone will pay on Dana's claim.",
          "A policy-limits or time-limited demand asks the insurer to settle within the limits by a set date. In many states, an insurer that unreasonably refuses such an offer can be exposed to a judgment above its limits — which is why these demands are powerful and closely regulated.",
          "The rules differ by state: some states (Georgia and California are examples) set by statute what these demands must contain, how long they must stay open and how they must be delivered. Only the attorney drafts and approves these terms."
        ],
        howTo: [
          "Confirm the limits in writing before the demand (Dana: requested 07/02/2026, confirmed 07/15/2026) and record them in the CMS.",
          "Check the demand against the limits and note other coverage — Dana's own UM/UIM ($50,000/$100,000) isn't needed because Keystone's limits are adequate.",
          "Copy the attorney's amount, deadline and terms word for word — never shorten, extend or reword them.",
          "Send by the delivery method the attorney specifies and keep proof of delivery.",
          "Calendar the deadline with a reminder before it, and tell the attorney the moment a response or question arrives."
        ],
        bestPractices: [
          "Whether an insurer must disclose its limits before suit depends on the state — record how and when you got them.",
          "Know what the attorney's terms require (a date, what is released, a payment deadline) and flag any response that doesn't match them.",
          "Pitfall: changing “thirty (30) days,” or any condition, in a time-limited demand without the attorney — one word can change its legal effect."
        ],
        discussionCase: "Dana's demand is $85,000.00, open 30 days, and Keystone's limit is $100,000 per person. Is it a policy-limits demand? What do you calendar, and what do you never change?"
      },
      trainerCue: "It's a within-limits demand with a 30-day deadline set by Attorney Bennett. Calendar 11/09/2026 with a reminder; the amount and terms are hers and are copied exactly — audit row 12 is OK as written."
    },
    { h: "Cite Every Fact: Persuasive and Accurate",
      layout: "COMPARE",
      compareLeft: { label: "⛔ Unsupported", items: ["“She suffered a herniated disc.”", "“Her doctor says the crash caused it.”", "“She missed about three weeks of work.”", "“She will need more treatment.”", "“Her bills total about $19,500.”"] },
      compareRight: { label: "✅ Cited and exact", items: ["A 3 mm central disc protrusion at C5-6 (Ex. E, WHITFIELD 0041)", "“Within a reasonable degree of medical probability, the C5-6 injury is causally related to the 03/14/2026 MVC” (Ex. E, WHITFIELD 0055)", "14 workdays, 03/16–04/02/2026, at $224.00 a day: $3,136.00 (Ex. F)", "Up to two more C5-6 ESIs over 24 months at $3,900.00 each: $7,800.00 (Ex. E, WHITFIELD 0057)", "Past medical specials: $19,516.40 (Ex. D)"] },
      fourPart: {
        corePrinciples: [
          "Every fact in the letter needs a source the adjuster can open: the exhibit letter plus the Bates page — “(Ex. E, WHITFIELD 0055).”",
          "Cites make the letter persuasive: an adjuster who checks three cites and finds them exact trusts the rest.",
          "Accuracy is the whole game — the right word, the right number, the right page. One overstated fact costs more than it gains."
        ],
        howTo: [
          "After each factual sentence, add the cite: exhibit letter, then the Bates page or range.",
          "Open the page and confirm it says exactly what your sentence says.",
          "Quote the key medical sentences word for word: causation, MMI, future care.",
          "Use the exhibit letters from the exhibit index (DW28) so the cites match the packet."
        ],
        bestPractices: [
          "Cite the narrowest page that proves the point — WHITFIELD 0055, not WHITFIELD 0042–0059.",
          "Use one cite format throughout the letter.",
          "Pitfall: a cite that points to the wrong page — worse than no cite, because it looks careless or misleading."
        ],
        discussionCase: "Find the three medical statements in DW27 that fail the cite test, and say what each one needs."
      },
      trainerCue: "Row 3: false, and disproved by Ex. E itself (WHITFIELD 0010–0011). Row 4: right page, wrong words — protrusion, not herniation (WHITFIELD 0041). Row 5: no cite — needs (Ex. E, WHITFIELD 0055)."
    },
    { h: "Quality Control: Numbers, Names, Dates, Exhibits",
      layout: "TABLE",
      tableHeaders: ["Check", "Against", "DW27"],
      tableRows: [
        ["Claim number", "Keystone's letters (DW06, DW07)", "KM-26-0418832 → KM-26-0418823"],
        ["Date of incident", "Police report, ED record", "March 15 → March 14, 2026"],
        ["Names and spelling", "Police report, records", "Check each: Dana Whitfield, Grant Mercer, Tom Reyes, Dr. Anita Patel, Dr. Luis Romero"],
        ["Medical words", "The page cited", "“herniated disc” → 3 mm disc protrusion (WHITFIELD 0041)"],
        ["Specials lines", "Itemization (Ex. D)", "Northgate $275.00 wellness exam → remove"],
        ["Totals", "Itemization and your own re-add", "$19,666.40 → $19,516.40"],
        ["Cites", "Every Bates page", "Causation sentence → add (Ex. E, WHITFIELD 0055)"],
        ["Weaknesses", "Chronology flags", "Prior strain misstated; the gap missing"]
      ],
      fourPart: {
        corePrinciples: [
          "Quality control is a separate pass, done after drafting, with the source documents open — not a re-read of your own sentences.",
          "The errors that hurt most are small: a transposed claim number, a wrong date, a total that's off by $150.00.",
          "Nothing goes to the attorney for signature until every number, name, date and cite ties to a document."
        ],
        howTo: [
          "Check the heading against Keystone's letters digit by digit (KM-26-0418823).",
          "Check every date against the records; the DOI is 03/14/2026 everywhere.",
          "Re-add every table and match each total to the itemization.",
          "Open every cite and confirm the page says it.",
          "Check the enclosure list against the exhibit index and the packet."
        ],
        bestPractices: [
          "Read numbers aloud or check them backwards — transpositions (…8823 vs …8832) hide from a normal read.",
          "Search the draft for any leftover name, claim number or date from the template or another file.",
          "Pitfall: trusting the intake summary. DW02 has the DOI as 03/15/2026; a draft built from it inherits the error."
        ],
        discussionCase: "DW27's heading reads: “RE: Your insured: Grant Mercer · Claim No.: KM-26-0418832 · Date of loss: March 15, 2026.” How many errors are there, and which documents prove them?"
      },
      trainerCue: "Two errors: the claim number is transposed (KM-26-0418823 in Keystone's letters) and the DOI is 03/14/2026 (police report and ED record). The insured's name is right."
    },
    { h: "Skill Builder: The Demand Draft Audit",
      layout: "PROCESS",
      processSteps: [
        { label: "Ready to send?", desc: "Run the pre-demand checklist on Dana's file." },
        { label: "Audit DW27", desc: "Twelve statements: OK, fix, or missing — each with its proof." },
        { label: "Sort the sentences", desc: "Put each sentence in the right section of the letter." },
        { label: "Write the human story", desc: "Draft the non-economic damages section from Ex. G." },
        { label: "Report to the attorney", desc: "Markup and cover note: what you fixed, what you flagged, what she decides." },
        { label: "Log it in the CMS", desc: "Upload the markup; add the note and the tasks." }
      ],
      skill: { tool: "mdDemand4", cms: true },
      fourPart: {
        corePrinciples: [
          "A demand audit reads the draft line by line against the documents and sorts each statement: OK, wrong (fix it), or missing (add it).",
          "Every correction comes with its proof — the document and page that shows the right fact.",
          "The audit protects the client, the attorney's signature and the firm's credibility with the adjuster."
        ],
        howTo: [
          "Open DW27, the medsum, the itemization, the police report and Keystone's letters side by side.",
          "Mark each statement OK, Fix or Missing, and write the correction with its cite.",
          "Check that the demand paragraph matches the attorney's amount and terms exactly — and leave it alone.",
          "Send the markup to Attorney Bennett with a short cover note, then log it in the CMS."
        ],
        bestPractices: [
          "Audit the sentences that look right, too — a correct statement still needs its cite.",
          "Keep the audit as a table: statement → status → correction → proof.",
          "Pitfall: fixing the obvious number and missing what isn't there — DW27 never mentions the 43-day gap."
        ],
        discussionCase: "Of DW27's twelve statements, which are OK as written, and which error would do the most damage if the letter went out?"
      },
      trainerCue: "Launch the Day 4 Skill Builder — Demand Draft Audit: check readiness, audit DW27 line by line (numbers, dates, words, cites), sort sentences into sections, and write the non-economic section. Rows 2, 6, 9, 10 and 12 are OK; row 3, a false statement disproved by the packet's own Exhibit E, is the most damaging."
    }
  ],
  quickChecks: [
    { afterIndex: 2, q: "The template's demand paragraph has a blank for the amount. You:", opts: ["Fill in three times the medical specials", "Leave it for Attorney Bennett — she sets the amount and the deadline", "Use the amount from a similar case", "Ask the adjuster what he would pay"], a: 1, r: "The demand amount is valuation, and valuation is always the attorney's." },
    { afterIndex: 6, q: "Past medical $19,516.40, future medical $7,800.00, lost wages $3,136.00. Total economic damages:", opts: ["$27,316.40", "$22,652.40", "$30,602.40", "$30,452.40"], a: 3, r: "$19,516.40 + $7,800.00 + $3,136.00 = $30,452.40. ($30,602.40 is what you'd get from DW27's wrong $19,666.40.)" },
    { afterIndex: 10, q: "DW27: “A cervical MRI on March 30, 2026 revealed a herniated disc at C5-6 (Ex. E, WHITFIELD 0041).” The problem is:", opts: ["The date is wrong", "The cite is missing", "The words overstate the finding — the report says a 3 mm central disc protrusion", "Nothing — it's persuasive"], a: 2, r: "Use the radiologist's words; the adjuster will open WHITFIELD 0041." }
  ],
  quiz: [
    { q: "A demand letter is best described as:", opts: ["A lawsuit filed in court", "The firm's written settlement proposal to the insurer, with the proof attached", "A request for the client's medical records", "The insurer's offer letter"], a: 1, r: "It lays out liability and damages, attaches the exhibits, and asks for an amount by a deadline." },
    { q: "A demand usually goes out when:", opts: ["The client's first visit is done", "The police report arrives", "Treatment is complete or the client is at MMI, and the records and bills are in", "The adjuster asks for it"], a: 2, r: "Before MMI the full damages, including future care, aren't known — and settlement is final." },
    { q: "Who sets the demand amount?", opts: ["The attorney", "The Demand Specialist", "The adjuster", "The Case Manager"], a: 0, r: "Valuation is the attorney's decision; you draft everything around it." },
    { q: "Bayside has sent only a balance-due statement. For the demand you need:", opts: ["Nothing more — the balance is enough", "The client's estimate of the cost", "A copy of the LOP", "The itemized bill with dates of service and CPT codes"], a: 3, r: "The adjuster needs line-item charges; Bayside's itemized bill arrived 10/07/2026." },
    { q: "The radiologist wrote “3 mm central disc protrusion at C5-6.” The letter should say:", opts: ["A 3 mm central disc protrusion at C5-6, with the cite", "A herniated disc", "A ruptured disc", "A serious spinal injury"], a: 0, r: "Use the provider's words; WHITFIELD 0041 says protrusion." },
    { q: "Dana's correct past medical specials total is:", opts: ["$19,666.40", "$22,476.40", "$19,516.40", "$11,105.00"], a: 2, r: "$19,516.40 billed (related only). $22,476.40 includes the prior, duplicate and unrelated lines; $11,105.00 is the outstanding balance; $19,666.40 is DW27's error." },
    { q: "The Northgate Family Practice wellness exam ($275.00) belongs:", opts: ["In the specials, because it was in 2026", "Nowhere in the demand — it's unrelated to the crash", "In future medical", "In lost wages"], a: 1, r: "Only accident-related care goes in the specials and the injury story." },
    { q: "Dana's lost wages are shown in the letter as:", opts: ["About three weeks of pay", "$3,136.00, no proof needed", "Her annual salary divided by 12", "14 workdays × $224.00 = $3,136.00, with the wage verification (Ex. F)"], a: 3, r: "Show the math and the proof for every derived number." },
    { q: "The best source for the non-economic damages section is:", opts: ["The client's signed impact statement, backed by the records", "The adjuster's notes", "A standard paragraph from another file", "Your own opinion of how much it hurt"], a: 0, r: "Specific, signed facts from the client (Ex. G), paired with record cites." },
    { q: "Dana's 2025 low back strain should be:", opts: ["Left out — it hurts the case", "Stated accurately with its cite (WHITFIELD 0010–0011), with the records that separate it from the neck injury", "Described as “never had back problems”", "Mentioned only if the adjuster asks"], a: 1, r: "The adjuster will find it in Ex. E. Address it first, honestly." },
    { q: "The 43-day gap (05/14 → 06/26/2026) is best handled by:", opts: ["Ignoring it", "Changing the dates", "Explaining it with the records' reasons: childcare (WHITFIELD 0038) and continuing symptoms (WHITFIELD 0060)", "Adding a reason the client never gave"], a: 2, r: "A record-based explanation turns a weakness into part of the story." },
    { q: "Who drafts and approves the terms of a time-limited or policy-limits demand?", opts: ["The Demand Specialist", "The adjuster", "The Case Manager", "Only the attorney — the rules vary by state"], a: 3, r: "Some states set strict statutory requirements; one wrong word can change the demand's effect." },
    { q: "Keystone's bodily injury limits on Dana's claim are:", opts: ["$100,000 per person / $300,000 per accident", "$50,000 / $100,000", "$2,500", "$85,000"], a: 0, r: "Confirmed in Keystone's 07/15/2026 letter. $50,000/$100,000 is Dana's own UM/UIM, $2,500 her PIP, $85,000 the demand." },
    { q: "Which cite is correct for Dr. Patel's causation opinion?", opts: ["(see records)", "(Ex. E, WHITFIELD 0055)", "(Dr. Patel)", "(Ex. E, WHITFIELD 0041)"], a: 1, r: "Exhibit letter + Bates page. WHITFIELD 0041 is the MRI report." },
    { q: "DW27's heading shows claim no. KM-26-0418832. The correct number is:", opts: ["KM-26-0418832", "KM-26-0481823", "KM-26-0418823", "KMI-AU-5521907"], a: 2, r: "The last two digits are transposed. KMI-AU-5521907 is the policy number, not the claim number." }
  ],
  discussionQuestion: "Attorney Bennett wants DW27 back by the end of the day, ready to sign. Walk through every error you found and the document that proves each one, your rewrites of the prior-injury sentence and the missing gap sentence, the corrected economic damages table ($19,516.40 + $7,800.00 + $3,136.00), and what you would leave exactly as written — and why."
};
