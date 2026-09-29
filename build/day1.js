const DAY1 = {
  id: 1,
  title: "Medsum & Demand Foundations: the File, the Records and the Bills",
  theme: "What a Demand Specialist Owns · The PI Case Lifecycle · Treatment Phase vs Demand Phase · The Case Handoff · The Provider List · HIPAA Authorizations & Records Requests · Requesting Bills: UB-04, CMS-1500 & Ledgers · Following Up on Missing Records & Bills · Reading a Medical Record · Medical Terminology & Abbreviations · Bates Numbering & Organizing the File · PHI & Secure Handling · Day-One Red Flags",
  objective: "Understand what a Demand Specialist owns and where the medsum and demand fit in a personal-injury case, receive and audit the file at handoff, get every record and itemized bill with a valid authorization, read and organize the records with Bates numbers, protect PHI, and catch the day-one red flags — all documented in the CMS.",
  taskOverview: [
    { label: "File Intake & Records Audit", tasks: [
        "Read the Case Manager's handoff memo and confirm what was requested, when, and what is still open.",
        "Build the provider list: every provider, date of service, record range and bill.",
        "Check every core fact — DOI, names, claim number — against the source documents, not the intake.",
        "Request missing records and itemized bills with a valid HIPAA authorization, and follow up until they arrive."
      ], sample: "Sample task: Marcus Webb hands you Dana Whitfield's file on 10/05/2026. The intake says the DOI is 03/15/2026 — confirm 03/14/2026 from the police report and ED record and correct the CMS." },
    { label: "Medical Chronology & Summary", tasks: [
        "Put every record in date order and write one chronology row per encounter, with its Bates page.",
        "Use the providers' own words for diagnoses, imaging findings and opinions.",
        "Flag prior injuries, gaps, objective findings, causation opinions, procedures, MMI and future care.",
        "Write a neutral, cited medical summary from the chronology."
      ], sample: "Sample task: write the chronology row for Dr. Patel's 04/20/2026 consult, quoting her causation opinion word for word with the cite WHITFIELD 0055." },
    { label: "Bills Itemization & Specials", tasks: [
        "Itemize every related bill: provider, dates, CPT codes, billed, adjustments, paid and balance.",
        "Leave out prior, duplicate and unrelated charges — with a note explaining each.",
        "Reconcile the bills with the chronology, date by date.",
        "Add future medical, lost wages and out-of-pocket costs from the documents that prove them."
      ], sample: "Sample task: Clearview's ledger lists the 03/30/2026 MRI (CPT 72141, $2,400.00) twice — keep one line and note why the other is left out." },
    { label: "The Demand Letter", tasks: [
        "Draft the demand from the firm's template once the attorney says the file is ready.",
        "Cite every fact to an exhibit and page, e.g., (Ex. E, WHITFIELD 0055).",
        "Address the weak points (prior injury, gaps) plainly, so the adjuster doesn't raise them first.",
        "Leave the demand amount and any time limit to the attorney."
      ], sample: "Sample task: the draft says “herniated disc”; the MRI report says “3 mm central disc protrusion” — correct it and cite (Ex. E, WHITFIELD 0041)." },
    { label: "Demand Packet & Responses", tasks: [
        "Assemble the packet in the LSH standard order with an exhibit index.",
        "Send it only after the attorney signs, with proof of delivery, and calendar the response date.",
        "Log every response and route every offer to the attorney the same day.",
        "Draft rebuttals with record cites for the attorney's review."
      ], sample: "Sample task: Keystone's response arrives with an offer and a request for prior records — log both and send them to Attorney Bennett the same day." },
    { label: "Communication & Documentation", tasks: [
        "Keep every request, call and follow-up in a same-day CMS note with a next date.",
        "Work with records and billing offices politely and in writing, with names and dates.",
        "Never give legal advice, state a case value, respond to an offer or agree to a lien reduction.",
        "Handle PHI only through the firm's secure systems."
      ], sample: "Sample task: Bayside's billing office asks what Dana's case will settle for — explain you can't discuss that, get the date the itemized bill will be sent, and log the call." }
  ],
  lessons: [
    { h: "Training Agenda & What a Demand Specialist Owns",
      layout: "ICONLIST",
      icons: [
        { icon: "📥", label: "File intake & records audit", desc: "Every provider, record and bill in the file — checked against the source documents." },
        { icon: "🩺", label: "Medical chronology", desc: "One row per encounter, in date order, with a page cite for every fact." },
        { icon: "📝", label: "Medical summary", desc: "The neutral, cited story of the injuries and treatment — the medsum." },
        { icon: "🧾", label: "Bills itemization", desc: "The medical specials: billed, adjusted, paid and still owed, by provider." },
        { icon: "✉", label: "Demand letter & packet", desc: "Drafted from the firm's template; sent only after the attorney approves." },
        { icon: "📬", label: "Responses", desc: "Log every insurer response, route it to the attorney the same day, prepare rebuttals." }
      ],
      fourPart: {
        corePrinciples: [
          "Today's agenda: 01 Your role and where it fits · 02 The file you receive, and the records and bills you request · 03 Reading, organizing and protecting the records.",
          "A Demand Specialist turns a finished treatment file into the proof of the injury claim: the chronology, the medical summary, the itemized specials and a draft demand.",
          "The attorney decides; you prepare. Laura Bennett, Esq. sets the demand amount, evaluates offers, decides what records are disclosed and advises the client."
        ],
        howTo: [
          "Receive the file from the Case Manager and audit it against the documents.",
          "Get every record and every itemized bill — and follow up until you have them.",
          "Build the chronology and the medical summary with a page cite for every fact.",
          "Itemize the bills and draft the demand for the attorney's review.",
          "Assemble and send the packet once the attorney approves; log and route every response."
        ],
        bestPractices: [
          "Treat the file as evidence: the adjuster will check every date, number and word against the records.",
          "Know your lane: you can say what the records show; only the attorney says what the case is worth or what the client should do.",
          "Pitfall: telling a provider, adjuster or client what the case “should settle for.” That is legal advice and the attorney's call — never yours."
        ],
        discussionCase: "Dana Whitfield's file reaches you on Monday 10/05/2026. Which parts of the work above are yours, which are Attorney Bennett's, and which still belong to Case Manager Marcus Webb?"
      },
      trainerCue: "Set the frame: the demand is only as strong as the file behind it. Every lesson this week works one case — Dana Whitfield — from the handoff to the insurer's responses."
    },
    { h: "The PI Case Lifecycle: Where the Medsum and Demand Fit",
      layout: "PROCESS",
      processSteps: [
        { label: "Intake & retainer", desc: "Facts, retainer, HIPAA authorization." },
        { label: "Claims & liability", desc: "Claims opened; liability decided." },
        { label: "Treatment", desc: "Case Manager tracks care, LOPs and payers." },
        { label: "MMI / end of care", desc: "Treatment ends or plateaus." },
        { label: "Records & bills", desc: "Request, follow up, audit." },
        { label: "Medsum & specials", desc: "Chronology, summary, itemization." },
        { label: "Demand & negotiation", desc: "Attorney approves; responses routed." },
        { label: "Resolution", desc: "Settlement (or suit); liens and disbursement." }
      ],
      fourPart: {
        corePrinciples: [
          "A personal-injury (PI) case moves from intake through treatment to a demand, negotiation and resolution — a settlement, or a lawsuit if it doesn't settle.",
          "The medsum and the demand sit in the middle: after treatment has ended or plateaued, and before negotiation.",
          "The statute of limitations (SOL) runs the whole time. In the training state (ST) it is 2 years from the DOI — for Dana, 03/14/2028 — and it is calendared from day one."
        ],
        howTo: [
          "01 Intake & retainer — Dana signed the retainer and HIPAA authorization on 03/18/2026.",
          "02–03 Claims, liability and treatment — Keystone accepted liability on 04/02/2026; her care ran from 03/14 to 08/21/2026, and Marcus Webb tracked it from the day the firm was retained (03/18/2026).",
          "04–05 MMI, records and bills — Dr. Patel placed Dana at MMI on 08/21/2026; records and bills were requested on 08/24/2026.",
          "06–07 Medsum, specials and demand — your work, for Attorney Bennett's review and signature.",
          "08 Resolution — settlement or suit (the attorney's call); the Case Manager handles liens and disbursement."
        ],
        bestPractices: [
          "Know which stage each of your files is in and what it is waiting on.",
          "Watch the SOL on every file. If a file is getting close, the attorney needs to know early — only the attorney decides whether to file suit.",
          "Pitfall: pushing a demand out before treatment ends. Bills keep growing and future care isn't known yet — the attorney decides when the file is ready."
        ],
        discussionCase: "Dana reached MMI on 08/21/2026 and her SOL is 03/14/2028. Why does the firm usually wait for MMI before the demand, and what could go wrong if the file sat too long?"
      },
      trainerCue: "Walk the eight boxes with Dana's real dates. Point to boxes 5–7: that is this course."
    },
    { h: "Treatment Phase vs Demand Phase: the Handoff",
      layout: "COMPARE",
      compareLeft: { label: "Treatment phase (Case Manager)", items: ["The client is still in care", "Owned by Marcus Webb", "Treatment and appointment check-ins", "LOPs, PIP and health insurance set up", "Ends at MMI or end of care — Dana: 08/21/2026"] },
      compareRight: { label: "Demand phase (Demand Specialist)", items: ["Treatment done; future care documented", "Owned by you, for the attorney", "Records, bills and the medsum", "Specials itemized; demand drafted", "Packet out; responses logged and routed"] },
      fourPart: {
        corePrinciples: [
          "The treatment phase is about getting the client care; the demand phase is about proving the care, the costs and the harm.",
          "The handoff is where information gets lost. A good handoff memo says what is done, what is pending and what looks wrong.",
          "After the handoff, the Case Manager still owns treatment questions with the client — and takes the file back after settlement for liens and disbursement."
        ],
        howTo: [
          "Read the Case Handoff Memo (DW01) before you touch anything else.",
          "Confirm the treatment status: has care ended, and is any future care documented?",
          "List what the Case Manager already requested and when (Dana: records and bills on 08/24/2026).",
          "Ask the Case Manager about anything unclear the same day, while the file is fresh in their mind.",
          "Log the handoff in the CMS: the date, who handed it off, and the open items you now own."
        ],
        bestPractices: [
          "Treat the handoff memo as a starting point, not the truth — check it against the documents.",
          "Keep the Case Manager in the loop on anything that touches LOPs, liens or the client's care.",
          "Pitfall: assuming everything was requested because the memo says “records requested.” Check each provider, one by one."
        ],
        discussionCase: "Marcus's memo says “all records and bills requested 08/24.” What three things do you check before you rely on that?"
      },
      trainerCue: "Stress that the two roles meet twice: at the handoff now, and again after settlement, when the file goes back to Marcus for liens and disbursement."
    },
    { h: "The Case Handoff: What You Receive and What You Check",
      layout: "TABLE",
      tableHeaders: ["What you receive", "What you check"],
      tableRows: [
        ["Case Handoff Memo (DW01, 10/05/2026)", "Treatment status, what was requested and when, open items"],
        ["Client Intake Summary (DW02, 03/18/2026)", "Every fact against a source — its DOI says 03/15/2026"],
        ["Retainer & HIPAA Authorization (DW03)", "Signed 03/18/2026; valid to 03/18/2027; covers the providers you need"],
        ["Police report & photo log (DW04–DW05)", "DOI 03/14/2026, place, parties, citation, witness"],
        ["Insurance letters & payer logs (DW06–DW09)", "Claim # KM-26-0418823, liability accepted 04/02/2026, limits, PIP and BlueHarbor payments"],
        ["Records WHITFIELD 0001–0066 (DW10–DW15)", "Every provider and date of service; no missing pages"],
        ["Bills & ledgers (DW16–DW24)", "An itemized bill for every provider; nothing unrelated or duplicated"]
      ],
      fourPart: {
        corePrinciples: [
          "The handoff gives you the file; your first job is to find out whether the file is right.",
          "Every fact is checked against its source: the police report and ED record for the date, the records for the treatment, the bills for the charges.",
          "What you find on day one shapes the week: what to request, what to fix and what to tell the attorney."
        ],
        howTo: [
          "Read the memo, then the intake, then the source documents.",
          "Check the core facts against the sources: DOI, client name and DOB, claim number, providers, dates of service.",
          "Build the provider list and compare it with the records and bills you actually have.",
          "Write down each discrepancy with both versions and the page where the correct one is found.",
          "Log a same-day CMS note: what's complete, what's missing, what's wrong, and your next steps with dates."
        ],
        bestPractices: [
          "The intake was written four days after the crash from the client's memory; the police report and ED record were made that day. Trust the documents.",
          "Write discrepancies neutrally: “Intake lists DOI 03/15/2026; police report and ED record show 03/14/2026.”",
          "Pitfall: copying the DOI from the intake into the CMS, the chronology and the demand. One wrong date repeats everywhere."
        ],
        discussionCase: "Dana's intake gives the DOI as 03/15/2026. Where do you confirm the date, what do you correct, and who needs to know?"
      },
      trainerCue: "Have trainees open DW02 and DW04 side by side (📁 Documents) and find the DOI mismatch themselves."
    },
    { h: "The Provider List: Every Provider, Records and Bills",
      layout: "TABLE",
      tableHeaders: ["Provider", "Dates of service", "Records", "Bill"],
      tableRows: [
        ["Riverside Medical Center (ED)", "03/14/2026", "WHITFIELD 0001–0009", "UB-04 itemized statement"],
        ["Riverside Emergency Physicians", "03/14/2026", "Same ED visit", "CMS-1500 statement"],
        ["Corner Pharmacy", "03/14/2026", "ED prescriptions", "Receipt, $86.40"],
        ["Harbor Spine & Chiropractic", "Prior: 01/08–01/29/2025 · 03/17–05/14/2026", "0010–0011 (prior) · 0012–0038", "Ledger — includes the 2025 charges"],
        ["Clearview Imaging", "03/30/2026", "0039–0041", "Ledger — MRI listed twice"],
        ["Summit Orthopedic Associates", "04/20/2026 · 08/21/2026", "0042–0059", "Ledger"],
        ["Bayside Pain Management", "06/26/2026 · 07/10/2026", "0060–0066", "Balance-due statement only — itemized bill needed"],
        ["Northgate Family Practice", "05/02/2026", "Not accident care", "Statement — unrelated wellness exam"]
      ],
      fourPart: {
        corePrinciples: [
          "The provider list is the map of the file: every provider who treated the client, with the dates, the records and the bill for each.",
          "Every provider needs two things: the records (what was done) and an itemized bill (what it cost). One without the other is a hole in the demand.",
          "The list also shows providers that won't be in the demand — prior and unrelated care — so you can explain why they're left out."
        ],
        howTo: [
          "Build it from every source: the intake, the handoff memo, the records, the bills and the payer logs.",
          "Add each provider with the dates of service, the Bates range of the records, and the type and status of the bill.",
          "Follow every referral: Dr. Patel referred Dana to Bayside (p. 59), so Bayside must be on the list.",
          "Mark each line: complete, missing records, missing itemized bill, prior, or unrelated.",
          "Keep the list in the CMS and update it the day records and bills arrive."
        ],
        bestPractices: [
          "Payer logs find hidden providers: a PIP or health-plan payment to a provider you don't know means a provider is missing from the list.",
          "One ED visit can create several bills — the hospital, the ER physicians' group and sometimes a radiology group. Dana's visit has two. List each billing entity.",
          "Pitfall: listing only the providers the client remembers. The intake is not the provider list."
        ],
        discussionCase: "Which providers on Dana's list won't appear in her injury story or her specials, and why do they still belong on the list?"
      },
      trainerCue: "Build the list together from DW10–DW24. Ask: which line is prior care, which is unrelated, and which bill isn't good enough yet?"
    },
    { h: "HIPAA Authorizations and Requesting Records",
      layout: "ICONLIST",
      icons: [
        { icon: "✍️", label: "Valid authorization", desc: "Signed, dated, unexpired, naming the provider, the firm and the records. Dana's: 03/18/2026, valid to 03/18/2027." },
        { icon: "📨", label: "Request letter", desc: "Patient name, DOB, date range, the records you need and where to send them." },
        { icon: "📅", label: "Date range", desc: "From the DOI forward (03/14/2026 to present). Prior records only when the attorney says so." },
        { icon: "📜", label: "Custodian certification", desc: "The records custodian certifies the copies are true and complete business records." },
        { icon: "🏥", label: "Right department", desc: "Records come from medical records (HIM); bills come from billing. Two requests." },
        { icon: "📋", label: "Request log", desc: "Date sent, method, any fee, follow-up date and what arrived." }
      ],
      fourPart: {
        corePrinciples: [
          "Providers release records to the firm because the client signed a HIPAA authorization. Without a valid one, they can refuse — and should.",
          "A valid authorization describes the information, names who may release it and who receives it, states the purpose and an expiration date or event, and has the patient's signature and date, plus required statements such as the right to revoke.",
          "A records custodian certification (or affidavit) states the copies are true, complete and kept in the ordinary course of business. In many courts it lets the records be used without calling the custodian as a witness. The form depends on the state — use the firm's."
        ],
        howTo: [
          "Check the authorization before every request: signed, dated, unexpired and covering this provider.",
          "Write the request: patient name and DOB, dates of service, and exactly what you need — complete records, including office notes, imaging reports, procedure notes, referrals and work notes.",
          "Ask for the custodian certification with the records.",
          "Send the request the way the provider accepts it (portal, fax, email or mail), and log the date, method and any fee.",
          "Calendar the follow-up the day you send it."
        ],
        bestPractices: [
          "Some records need special authorization language — psychotherapy notes, substance-use treatment records, and some HIV or mental-health records under state law. Ask the attorney before you request them.",
          "Some providers insist on their own form or a recently signed authorization. Ask what they need instead of arguing, and get the client's signature through the firm's usual process.",
          "Pitfall: requesting “all records, any date.” The date range and scope follow the attorney's direction — prior records only when the attorney asks for them."
        ],
        discussionCase: "Bayside's records office says it won't release anything without its own authorization form. What do you do, who signs it, and what do you log?"
      },
      trainerCue: "Put DW03 on screen and walk its elements. Stress that the authorization protects the client's privacy — requesting more than the file needs is not “being thorough.”"
    },
    { h: "Requesting Bills: UB-04, CMS-1500 and Itemized Ledgers",
      layout: "COMPARE",
      compareLeft: { label: "UB-04 (facility)", items: ["Institutional claim form (also called CMS-1450)", "Hospitals, ERs, surgery centers — the facility's charges", "Revenue codes (e.g., 0450 emergency room) with CPT/HCPCS codes", "ICD-10 diagnosis codes", "Dana: Riverside Medical Center — ED Level 4 + CT, $4,850.00"] },
      compareRight: { label: "CMS-1500 (professional)", items: ["Professional claim form", "Physicians, chiropractors, therapists and many clinics", "One line per service: date, CPT code, charge", "ICD-10 codes linked to each line", "Dana: Riverside Emergency Physicians — $1,120.00"] },
      fourPart: {
        corePrinciples: [
          "Hospitals bill facility charges on a UB-04; doctors and other professionals bill on a CMS-1500. One ED visit usually produces both — that is not a duplicate.",
          "For a demand you need an itemized bill or ledger: every date of service, CPT code, description, charge, payment, adjustment and the balance.",
          "A balance-due statement only says what is owed. It doesn't show what was done or what each service cost — Bayside's first statement is not enough."
        ],
        howTo: [
          "Send bill requests to the billing office, separately from the records request.",
          "Ask for an itemized statement (or UB-04 / CMS-1500 copies) from the DOI forward, with CPT and ICD-10 codes, payments by payer, adjustments and the balance.",
          "Ask for a billing custodian certification, or the affidavit form the attorney tells you to use — some states have their own form for medical bills.",
          "Check each bill when it arrives: right patient, dates after the DOI, codes present, every visit listed.",
          "Update the provider list and note anything that needs a second request."
        ],
        bestPractices: [
          "Know two code sets: CPT says what was done (72141 is an MRI of the cervical spine without contrast); ICD-10 says why (the diagnosis).",
          "Ledgers can include charges that don't belong: Harbor Spine's includes the 2025 care, and Clearview's lists the same MRI twice. Note them now; Day 3 itemizes them.",
          "Pitfall: accepting a balance-due statement because “the number is right.” The adjuster needs to see the services behind the number."
        ],
        discussionCase: "Bayside has sent a balance-due statement for $4,325.00. Exactly what do you ask Carla Ruiz in billing to send, and why?"
      },
      trainerCue: "Put DW16 (UB-04) and DW17 (CMS-1500) side by side. Point out the revenue codes on the UB-04 and the CPT code on each CMS-1500 line."
    },
    { h: "Following Up on Missing Records and Bills",
      layout: "PROCESS",
      processSteps: [
        { label: "Log", desc: "Every request: date, method, what was asked." },
        { label: "Calendar", desc: "A follow-up date for each request." },
        { label: "Call", desc: "The right department; get a name and a date." },
        { label: "Resolve", desc: "Fee, form or wrong address — fix it." },
        { label: "Check", desc: "Complete? Itemized? Right dates?" },
        { label: "Escalate", desc: "Stalled or refused: tell the attorney." },
        { label: "Update", desc: "Provider list and CMS, the same day." }
      ],
      fourPart: {
        corePrinciples: [
          "A request isn't done when it's sent. It's done when the complete record or itemized bill is in the file and checked.",
          "Most delays can be fixed: an unpaid copy fee, a missing form, the wrong department or an expired authorization.",
          "Every follow-up is written down: who you spoke to, what they said and the date they promised."
        ],
        howTo: [
          "Follow the firm's follow-up schedule (for example, a call 10–14 days after the request, then weekly) and log each attempt.",
          "Call the right department: medical records (HIM) for records, billing for bills.",
          "Ask: Was it received? Is anything missing — a fee, a form, a signature? When will it be sent, and how?",
          "Check what arrives against the request: every date of service, every page, the certification, the itemized charges.",
          "Escalate to the attorney when a provider refuses, keeps missing its dates, or the delay threatens the demand timeline."
        ],
        bestPractices: [
          "Get a name and a date on every call: “Carla Ruiz, billing, will email the itemized bill by Wednesday.”",
          "When a request stalls, send it again in writing — the paper trail shows the firm did its part.",
          "Pitfall: logging “called Bayside” with no name, no answer and no next date. Nobody can pick that up."
        ],
        discussionCase: "On 10/05/2026 you call Bayside about the itemized bill requested on 08/24/2026. What do you ask, what do you log, and when is your next follow-up?"
      },
      trainerCue: "Bayside's itemized bill arrives on 10/07/2026, two days after the handoff. Use it to show a follow-up that works: the right person, a promised date, a logged note."
    },
    { h: "Reading a Medical Record: SOAP Notes and Where the Facts Live",
      layout: "TABLE",
      tableHeaders: ["Part", "What it holds", "Dana example"],
      tableRows: [
        ["S — Subjective", "What the patient reports: complaints, pain scores, history, how it happened", "Neck pain 7/10 radiating to the right shoulder (Harbor Spine, 03/17/2026)"],
        ["O — Objective", "What the provider observes or measures: exam, range of motion, tenderness, tests", "Cervical ROM reduced 40%; TTP C5–C7"],
        ["A — Assessment", "The diagnosis and the provider's impression — causation opinions often appear here", "Dr. Patel: C5-6 disc protrusion with right C6 radiculopathy (pp. 52–55)"],
        ["P — Plan", "Treatment, medications, referrals, work status, next visit", "Chiropractic 3x/week for 8 weeks; off work, re-evaluate 03/31 (p. 15)"],
        ["ED record", "Triage, chief complaint, history (HPI), exam, tests, diagnosis, discharge instructions", "CT cervical spine: no acute fracture; cervical and lumbar strain (pp. 1–9)"],
        ["Imaging report", "Technique, Findings (the detail) and Impression (the radiologist's conclusion)", "MRI: 3 mm central disc protrusion at C5-6 (p. 41)"],
        ["Procedure note", "Diagnosis, procedure, level, guidance, pain before and after", "C5-6 interlaminar ESI under fluoroscopy; 6/10 → 2/10 (pp. 64–66)"]
      ],
      fourPart: {
        corePrinciples: [
          "Most office notes follow the SOAP pattern: Subjective, Objective, Assessment, Plan. Knowing it tells you where each fact lives.",
          "Subjective is what the patient says; objective is what the provider finds. Adjusters give objective findings more weight.",
          "The facts the demand needs sit in predictable places: the history for prior injuries, the assessment for diagnoses and causation, the plan for referrals, work status and future care."
        ],
        howTo: [
          "Read the history on each provider's first visit: how the injury happened and any prior injury.",
          "Take pain scores and complaints from the Subjective section, in the patient's reported terms.",
          "Take exam and test results from the Objective section and the imaging Impression.",
          "Take the diagnosis, any causation opinion, the plan, referrals and work status from the Assessment and Plan.",
          "Note the Bates page for each fact as you read — not afterward."
        ],
        bestPractices: [
          "Read every page, including the last one: Dr. Patel's causation opinion is on p. 55, the last page of her 04/20 consult (pp. 52–55).",
          "Prior injuries show up in past medical history sections, intake questionnaires and the ED history — read them.",
          "Pitfall: reading only the diagnosis line. The reason for the gap (p. 38) and the causation opinion (p. 55) are in the body of the notes, not the headings."
        ],
        discussionCase: "Open Harbor Spine's initial exam (pp. 12–15). Which facts are subjective, which are objective, and where is Dana's work status?"
      },
      trainerCue: "Read one real note together (DW12, pp. 12–15) and have trainees call out S, O, A and P line by line."
    },
    { h: "Medical Terminology & Abbreviations",
      layout: "TABLE",
      tableHeaders: ["Abbreviation", "Means", "In Dana's file"],
      tableRows: [
        ["MVC · DOI · DOS", "Motor vehicle collision · date of incident · date of service", "MVC on 03/14/2026 (the DOI)"],
        ["c/o · Hx · HPI · PMH", "Complains of · history · history of present illness · past medical history", "Where a prior injury like the 2025 low back strain shows up"],
        ["LBP · ROM · TTP", "Low back pain · range of motion · tender to palpation", "Cervical ROM reduced 40%; TTP C5–C7"],
        ["Dx · Rx · Tx · Fx", "Diagnosis · prescription · treatment · fracture", "Rx cyclobenzaprine and ibuprofen; no acute Fx on CT"],
        ["C5-6 · R / L · b/l", "The disc level between the C5 and C6 vertebrae · right / left · bilateral", "Right C6 radiculopathy"],
        ["CT · MRI · ESI", "Computed tomography · magnetic resonance imaging · epidural steroid injection", "C5-6 interlaminar ESI on 07/10/2026"],
        ["s/p · r/o · f/u · RTW", "Status post (after) · rule out (NOT a diagnosis) · follow-up · return to work", "RTW 04/03/2026, no lifting over 15 lb"],
        ["MMI · 3x/wk · PRN", "Maximum medical improvement · three times a week · as needed", "Chiropractic 3x/week for 8 weeks; MMI on 08/21/2026"]
      ],
      fourPart: {
        corePrinciples: [
          "Medical records are written in shorthand. You don't need to be a clinician, but you must read the shorthand correctly — and never guess.",
          "Some abbreviations change the meaning of a sentence: “r/o” (rule out) means the provider was checking for something, not that the patient has it; “denies” means the patient said no.",
          "Radiculopathy means an irritated nerve root: pain, numbness, tingling or weakness that travels along the nerve — into the arm when the problem is in the neck."
        ],
        howTo: [
          "Keep the course abbreviations list (in the Day 2 Chronology & Summary Guide) open while you read.",
          "Look up any unfamiliar term in a reliable medical dictionary — never guess from context.",
          "Write spine levels exactly as the record does: C5-6 is the disc between C5 and C6; C5–C7 is a range of levels.",
          "In the summary, spell an abbreviation out the first time you use it: “epidural steroid injection (ESI).”"
        ],
        bestPractices: [
          "Watch right and left: Dana's radiculopathy is on the RIGHT. A flipped side is an error the adjuster will catch.",
          "When an abbreviation is unclear, quote it and ask — don't translate it into something the provider didn't write.",
          "Pitfall: skimming past “Hx of LBP.” It means a history of low back pain — a prior-injury flag."
        ],
        discussionCase: "A note reads “Pt c/o neck pain s/p MVC 03/14/2026, r/o radiculopathy, f/u 2 wks.” Translate it, and say which part is NOT a diagnosis."
      },
      trainerCue: "Quick drill: read the eight rows aloud, then give trainees three made-up lines to translate. The Day 2 handout has the full abbreviation list."
    },
    { h: "Bates Numbering and Organizing the File",
      layout: "PROCESS",
      processSteps: [
        { label: "Gather", desc: "Every record, as received." },
        { label: "Keep originals", desc: "Save an untouched copy of each file." },
        { label: "Order", desc: "By provider, then by date." },
        { label: "Stamp", desc: "One prefix, one sequence: WHITFIELD 0001…" },
        { label: "Index", desc: "Provider, dates and Bates range." },
        { label: "Cite", desc: "Every fact points to its page." }
      ],
      fourPart: {
        corePrinciples: [
          "Bates numbering gives every page a unique, permanent number with a case prefix — WHITFIELD 0001 to WHITFIELD 0066 — so any fact can be found in seconds.",
          "The chronology, the summary, the demand and any rebuttal all cite the same numbers, e.g., (Ex. E, WHITFIELD 0055).",
          "Once a page is numbered and cited, its number never changes. Documents that arrive later get the next numbers — nothing is renumbered."
        ],
        howTo: [
          "Save the records exactly as received; stamp a working copy.",
          "Order the records by provider, then by date within each provider — the order they take in the packet.",
          "Stamp every page, blank pages included, with one prefix and one continuous sequence — a skipped page breaks the chain.",
          "Build a Bates index: provider, document, dates of service and page range (Riverside ED 0001–0009, Harbor Spine prior 0010–0011, and so on).",
          "Name each file so the range shows, e.g., “WHITFIELD 0060–0066 Bayside Pain Management.”"
        ],
        bestPractices: [
          "Make the PDF searchable (OCR) so you can find words like “MVC,” “prior” or “history” quickly.",
          "Check page counts: Harbor Spine's 2026 records are 0012–0038, which is 27 pages. Compare that with what the provider sent.",
          "Pitfall: re-stamping the set after you've cited it. Every cite in the chronology and the demand would point to the wrong page."
        ],
        discussionCase: "Dr. Patel's causation opinion is on WHITFIELD 0055. Write the cite as it will appear in the demand, and explain why “Dr. Patel's 04/20 note” isn't enough."
      },
      trainerCue: "Show the Bates index for WHITFIELD 0001–0066. Ask why the 2025 Harbor Spine pages (0010–0011) sit right before the 2026 ones (provider first, then date)."
    },
    { h: "PHI, Minimum Necessary and Secure Handling",
      layout: "COMPARE",
      compareLeft: { label: "Do", items: ["Use the firm's secure portal or encrypted email", "Keep records in the CMS and firm systems only", "Send only what the claim needs — the attorney decides the scope", "Check every page before it leaves: right patient, right dates", "Lock your screen; work where no one can see or hear"] },
      compareRight: { label: "Don't", items: ["Use personal email, texts or personal cloud storage", "Download records to a personal device or print at home", "Send unrelated records or bills (e.g., the Northgate wellness exam)", "Send pages that belong to another patient", "Discuss the client's health where others can hear"] },
      fourPart: {
        corePrinciples: [
          "Protected health information (PHI) is health information that identifies a person: name, DOB, member ID, diagnoses, treatment and bills. Dana's whole file is PHI.",
          "“Minimum necessary” is HIPAA's rule that providers and health plans use and share only the PHI needed for the purpose (a release under the patient's signed authorization is limited by the authorization's own scope instead). The firm applies the same idea to what it requests, stores and sends.",
          "Once records reach the firm, they're protected by the firm's duty of confidentiality, privacy laws and firm policy. Handle them as PHI at every step."
        ],
        howTo: [
          "Request only the dates and records the claim needs; the attorney decides whether prior records are requested.",
          "Store records only in the CMS or the firm's secure drive — never on a personal device.",
          "Send records only through approved secure channels, to the right person, after confirming the address.",
          "Before anything goes out, check every page for the wrong patient, unrelated treatment or extra identifiers (such as an SSN), and ask the attorney what to remove.",
          "If PHI goes to the wrong place, tell your supervisor or the attorney immediately — never try to fix it quietly."
        ],
        bestPractices: [
          "What is disclosed to an insurer is the attorney's decision. You log the request and route it.",
          "Find another patient's page in a provider's records? Stop reading, set it aside, and tell the attorney so it can be returned to the provider under firm procedure.",
          "Pitfall: emailing records to yourself “to work on tonight.” A personal inbox is a privacy breach waiting to happen."
        ],
        discussionCase: "A Northgate Family Practice statement for a 05/02/2026 wellness exam is in Dana's file. Does it go in the demand packet? What do you do with it, and who confirms?"
      },
      trainerCue: "Stress speed on mistakes: misdirected PHI reported right away can often be contained; hidden, it only gets worse. Reporting is never the wrong move."
    },
    { h: "Day-One Red Flags",
      layout: "ICONLIST",
      icons: [
        { icon: "📅", label: "Date mismatch", desc: "The intake says DOI 03/15/2026; the police report and ED record say 03/14/2026." },
        { icon: "🦴", label: "Prior injury", desc: "Intake: “none really, maybe a strain a while back.” Records: a 2025 low back strain (pp. 10–11)." },
        { icon: "⏸", label: "Gap in treatment", desc: "43 days, 05/14 → 06/26/2026 — the reasons are at pp. 38 and 60." },
        { icon: "🧾", label: "Bill not itemized", desc: "Bayside sent a balance-due statement — request the itemized bill with CPT codes." },
        { icon: "🔁", label: "Ledger problems", desc: "Clearview lists the MRI twice; Harbor Spine's ledger includes the 2025 charges." },
        { icon: "🚫", label: "Unrelated care", desc: "Northgate's 05/02/2026 wellness exam isn't accident treatment." },
        { icon: "📄", label: "Missing pages or providers", desc: "Every referral, date of service and page accounted for." },
        { icon: "🔐", label: "Authorization limits", desc: "Dana's is valid to 03/18/2027 — check the date and scope before each request." }
      ],
      skill: { tool: "mdIntake1", cms: true },
      fourPart: {
        corePrinciples: [
          "Most problems in a demand were visible the day the file arrived — if someone looked.",
          "A red flag doesn't stop the work. It changes what you request, what you flag and who you tell.",
          "Bad facts are never hidden. Prior injuries and gaps are flagged, cited and sent to the attorney, who decides how to address them."
        ],
        howTo: [
          "Check every core fact (DOI, names, claim number) against the source documents.",
          "Compare the client's intake answers with the records — especially about prior injuries.",
          "Count the days between treatment dates and note any gap of 30 days or more, with its dates.",
          "Check every bill: itemized, related, after the DOI, not duplicated.",
          "Write each flag and your action in the CMS note, and tell the attorney about anything that affects the claim."
        ],
        bestPractices: [
          "Write flags as facts with sources, not judgments: “Intake: prior back problems ‘none really’; Harbor Spine 01/08–01/29/2025, low back strain (pp. 10–11).”",
          "Tell the attorney early. A prior injury found on day one is a strategy question; found first by the adjuster, it becomes a credibility problem.",
          "Pitfall: fixing a discrepancy quietly without noting it. The attorney needs to know the intake and the records disagree."
        ],
        discussionCase: "Which of these red flags are on Dana Whitfield's file, and what is your first action for each?"
      },
      trainerCue: "Launch the Day 1 Skill Builder — File Intake & Records Audit. Trainees audit Dana's file against the documents, decide today's actions, write the request for Bayside's itemized bill, call the billing office and set up the demand work in the CMS. Hand out the Demand Specialist Day-One Playbook."
    }
  ],
  quickChecks: [
    { afterIndex: 3, q: "Dana's intake summary gives the DOI as 03/15/2026. The police report and the ED record say 03/14/2026. You:", opts: ["Use 03/15/2026 — the client knows best", "Use 03/14/2026 from the source documents, correct the CMS and note the discrepancy", "Leave the DOI blank until the client confirms", "Use both dates in the chronology"], a: 1, r: "The police report and ED record were made on the day of the crash. Use the documented date and note the discrepancy for the attorney." },
    { afterIndex: 7, q: "Bayside has sent a balance-due statement for $4,325.00. For the demand you still need:", opts: ["Nothing — the total is enough", "A letter from Dr. Romero confirming the total", "Dana's receipt", "The itemized bill: each date of service, CPT code, charge, payment, adjustment and balance"], a: 3, r: "A balance-due statement shows what is owed, not what was done. The demand needs the itemized bill." },
    { afterIndex: 11, q: "A Northgate Family Practice statement for a 05/02/2026 wellness exam is in Dana's file. You:", opts: ["Leave it out of the injury file and the specials, note why, and confirm with the attorney", "Add it to the specials — it's dated after the DOI", "Send it to Keystone so they see everything", "Delete it from the CMS"], a: 0, r: "A wellness exam isn't accident treatment. It stays out, with a note, and disclosing unrelated PHI is never “being thorough.”" }
  ],
  quiz: [
    { q: "A Demand Specialist's work product includes:", opts: ["Setting the demand amount", "The medical chronology, medical summary, bills itemization and draft demand", "Accepting or rejecting the adjuster's offers", "Advising the client whether to settle"], a: 1, r: "You prepare the proof; the attorney sets the amount, evaluates offers and advises the client." },
    { q: "The demand is usually prepared once the client:", opts: ["Has reached MMI or finished treatment, so the full picture of care and costs is known", "Has signed the retainer", "Has had the first ED visit", "Has filed a lawsuit"], a: 0, r: "Before MMI, the bills are still growing and future care isn't known. The attorney decides when the file is ready." },
    { q: "Under the training state (ST) rule, Dana's statute of limitations date is:", opts: ["03/15/2028", "03/14/2027", "03/18/2027", "03/14/2028"], a: 3, r: "Two years from the DOI of 03/14/2026. 03/18/2027 is when her HIPAA authorization expires; 03/15 is the intake's wrong DOI." },
    { q: "A valid HIPAA authorization includes:", opts: ["The settlement amount", "The adjuster's name and claim number", "A description of the information, who releases and receives it, an expiration date or event, and the patient's signature and date", "The client's Social Security number"], a: 2, r: "Those are core elements, together with the required statements such as the right to revoke." },
    { q: "A records custodian certification (or affidavit) states that:", opts: ["The treatment was medically necessary", "The copies are true and complete records kept in the ordinary course of the provider's business", "The client was not at fault", "The bill has been paid in full"], a: 1, r: "It authenticates the records as business records. The exact form depends on the state; use the firm's." },
    { q: "Riverside Medical Center billed its ED facility charges on a UB-04. The ED physicians' charges come on:", opts: ["A CMS-1500", "The same UB-04", "A pharmacy receipt", "The police report"], a: 0, r: "Facilities bill on the UB-04; professionals bill on the CMS-1500." },
    { q: "Dana's 03/14/2026 ED visit has two bills: Riverside Medical Center ($4,850.00) and Riverside Emergency Physicians ($1,120.00). They are:", opts: ["A duplicate — drop the smaller one", "An error — ask both providers to cancel", "Normal: one bill for the facility, one for the physicians", "Unrelated treatment"], a: 2, r: "One visit, two billing entities. A true duplicate is the same provider, date, code and amount twice." },
    { q: "Bayside's balance-due statement isn't enough for the demand because:", opts: ["It is too recent", "Dr. Romero didn't sign it", "Balance statements aren't allowed", "It doesn't show each date of service, CPT code, charge, payment and adjustment"], a: 3, r: "The adjuster needs to see the services behind the balance. Request the itemized bill." },
    { q: "In a SOAP note, “cervical ROM reduced 40%; TTP C5–C7” belongs in:", opts: ["Subjective", "Objective", "Assessment", "Plan"], a: 1, r: "Range of motion and tenderness are exam findings the provider records." },
    { q: "“r/o fracture” in a record means:", opts: ["The provider was checking whether there was a fracture — it's not a diagnosis", "The patient has a fracture", "The fracture was repaired", "A fracture on the right side"], a: 0, r: "“Rule out” means the provider was testing for something. Dana's CT showed no acute fracture." },
    { q: "Bates numbers:", opts: ["Change each time the file is reorganized", "Go only on bills", "Give every page one permanent, unique number so every fact can be cited to its page", "Are assigned by the insurer"], a: 2, r: "WHITFIELD 0001–0066 is fixed; every cite in the chronology and demand depends on it." },
    { q: "Records that arrive after the set was stamped:", opts: ["Get the next numbers in the sequence; pages already cited are never renumbered", "Are renumbered together with the whole set", "Aren't stamped", "Replace pages 0001–0009"], a: 0, r: "Renumbering breaks every cite already written." },
    { q: "Which is a PHI mistake?", opts: ["Sending records through the firm's secure portal", "Emailing Dana's MRI report to a personal email account to work on at home", "Locking your screen when you step away", "Leaving the unrelated Northgate statement out of the packet"], a: 1, r: "Records stay in the firm's secure systems. A personal inbox is a breach risk." },
    { q: "An adjuster asks for “all prior medical records.” Deciding what to disclose is:", opts: ["Your call, to be helpful", "The provider's call", "The adjuster's call", "The attorney's call — you log the request and route it the same day"], a: 3, r: "The scope of any records disclosure is an attorney decision." },
    { q: "Dana's intake says prior back problems were “none really, maybe a strain a while back.” Harbor Spine's 2025 records (pp. 10–11) show a low back strain. You:", opts: ["Leave pp. 10–11 out — the client said there was nothing", "Ask Dana to sign a statement that there were no prior problems", "Keep the records, flag the prior injury and tell the attorney about the difference", "Remove pp. 10–11 and renumber the set"], a: 2, r: "Prior injuries are included and flagged, never buried. The attorney decides how to address them." }
  ],
  discussionQuestion: "It's Monday 10/05/2026 and Marcus Webb has just handed you Dana Whitfield's file. You find: the intake gives the DOI as 03/15/2026; the intake says “none really” about prior back problems, but Harbor Spine's 2025 records (pp. 10–11) show a low back strain; Bayside has sent only a balance-due statement; Clearview's ledger lists the MRI twice; and a Northgate wellness-exam statement is in the stack. In what order do you handle them today, what goes in your CMS note, and which ones does Attorney Bennett need to hear about?"
};
