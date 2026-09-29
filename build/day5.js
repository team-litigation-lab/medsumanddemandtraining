const DAY5 = {
  id: 5,
  title: "The Demand Packet & Responses",
  theme: "Assembling the Packet: the LSH Standard Order · Exhibits, Bookmarks and Page Numbers · Sending the Demand: Method, Proof and a Copy · Calendaring and Follow-Up · Types of Adjuster Responses · Common Adjuster Arguments · An Offer Arrives: Log It and Route It · Drafting a Rebuttal with Record Cites · Requests for More Information and Prior Records · Counteroffers and the Attorney's Authority · When Negotiations Stall: the SOL, Mediation, Litigation · Settlement: Confirmation, Release Review and the Handoff · Skill Builder: The Packet & Response Desk",
  objective: "Assemble Dana's demand packet in the LSH standard order with clean exhibits and working cites, send it with proof and a saved copy, calendar every deadline, recognize each type of adjuster response and argument, route every offer to the attorney the same day, draft record-cited rebuttals, handle prior-records requests within the scope the attorney sets, and carry the file from the settlement confirmation to the Case Manager's handoff — without ever valuing, countering or accepting.",
  lessons: [
    { h: "Assembling the Packet: the LSH Standard Order",
      layout: "TABLE",
      tableHeaders: ["Order", "What goes in", "Dana's packet"],
      tableRows: [
        ["1–2", "Demand letter (signed), then the exhibit index", "Signed by Attorney Bennett 10/09/2026 · Exhibit Index (DW28)"],
        ["Ex. A", "Police report", "LPD-26-031477 (DW04)"],
        ["Ex. B", "Photo log", "Scene and vehicle photos (DW05)"],
        ["Ex. C", "Medical summary & chronology", "The attorney-approved medsum"],
        ["Ex. D", "Itemized medical specials", "$19,516.40 billed, by provider"],
        ["Ex. E", "Medical records & bills by provider, in date order", "WHITFIELD 0001–0066, then the bills"],
        ["Ex. F", "Wage & time-loss verification", "Lakeside USD (DW25): 14 workdays, $3,136.00"],
        ["Ex. G", "Client impact statement", "Signed 09/30/2026 (DW26)"]
      ],
      fourPart: {
        corePrinciples: [
          "The packet is the letter plus its proof. The LSH standard order is the same on every file, so adjusters, attorneys and the next assistant always know where to look.",
          "The exhibit letters in the packet must match the cites in the letter — “(Ex. E, WHITFIELD 0055)” has to open to Dr. Patel's causation page.",
          "Only what the attorney approved goes in: the related records and bills, the approved medsum, and nothing unrelated."
        ],
        howTo: [
          "Start from the exhibit index (DW28) and TP05, the Exhibit Index & Packet Checklist.",
          "Put the signed letter first, then the index, then Exhibits A–G in order.",
          "Build Ex. E by provider, in the order Dana first saw each one after the crash, with each provider's pages in Bates order: WHITFIELD 0001–0066, then the bills.",
          "Check each exhibit off against the index: title, page range, page count."
        ],
        bestPractices: [
          "Keep the excluded and unrelated items out: the Northgate wellness exam and any internal notes or draft comments.",
          "Use the final, signed letter — never a draft with comments or tracked changes.",
          "Pitfall: an index that says Ex. F is the wage verification while the PDF has the impact statement there — every cite from that point on is wrong."
        ],
        discussionCase: "The wage verification arrives late, and someone suggests adding it at the end as Exhibit H. What's the problem, and what do you do?"
      },
      trainerCue: "The letter already cites Ex. F for wages. Keep the LSH order (Ex. F = wages, Ex. G = impact statement) so the letter, the index and the packet agree."
    },
    { h: "Exhibits, Bookmarks and Page Numbers",
      layout: "ICONLIST",
      icons: [
        { icon: "📑", label: "Slip sheets", desc: "A cover page before each exhibit: “Exhibit E — Medical Records & Bills.”" },
        { icon: "🔖", label: "Bookmarks", desc: "One per exhibit, and one per provider inside Ex. E, with page ranges." },
        { icon: "🔢", label: "Bates numbers", desc: "WHITFIELD 0001–0066 on the records — the numbers the letter cites." },
        { icon: "✅", label: "Cite test", desc: "Open every cite in the letter and land on the right page." },
        { icon: "🧹", label: "Clean pages", desc: "Upright, readable, no duplicates, no other patient's pages." },
        { icon: "📦", label: "One searchable file", desc: "A single PDF under the size limit — or the firm's secure link." }
      ],
      fourPart: {
        corePrinciples: [
          "An adjuster should be able to go from any sentence in the letter to the page that proves it in seconds.",
          "Bates numbers are the packet's permanent page addresses: once assigned they don't change, and every cite in the letter depends on them.",
          "The packet is a professional product. Sideways pages, duplicates or another patient's record undermine the whole demand — and a stray record is a privacy breach."
        ],
        howTo: [
          "Add a slip sheet before each exhibit, and bookmark every exhibit and every provider in Ex. E (for example, “Ex. E — Summit Orthopedic — WHITFIELD 0042–0059”).",
          "Confirm the Bates run is complete and in order: 0001 to 0066, nothing skipped or repeated.",
          "Test every cite: (Ex. E, WHITFIELD 0055) opens to Dr. Patel's causation sentence; WHITFIELD 0057 to the future-care estimate.",
          "Run text recognition (OCR) so the PDF is searchable, and check the file size against the insurer's email limit.",
          "If a provider ledger in Ex. E still shows excluded lines (Harbor Spine's 2025 charges, Clearview's duplicate MRI), flag it — Ex. D explains the exclusions, and the attorney decides whether to ask for a corrected ledger."
        ],
        bestPractices: [
          "Page through the whole packet one last time, looking for another patient's name or records.",
          "Redact what firm policy requires (for example, Social Security and account numbers); anything beyond that is the attorney's decision.",
          "Pitfall: re-stamping the Bates numbers after the letter is written — every cite in the letter now points to the wrong page."
        ],
        discussionCase: "You test the cites and (Ex. E, WHITFIELD 0060) opens to a Summit Orthopedic page. What might have happened, and what do you check before anything goes out?"
      },
      trainerCue: "Pages out of order or a re-stamp. Bayside's records start at WHITFIELD 0060 — rebuild Ex. E in Bates order and re-test every cite in the letter."
    },
    { h: "Sending the Demand: Method, Proof and a Copy",
      layout: "COMPARE",
      compareLeft: { label: "✅ Sent with proof", items: ["Sent only after the attorney signs", "Recipient checked against Keystone's latest letter", "Email with a delivery receipt, plus certified mail", "The exact packet as sent saved in the CMS", "Receipts and tracking number saved", "Receipt confirmed with the adjuster"] },
      compareRight: { label: "⛔ “I'm sure I sent it”", items: ["Sent from a draft, or before signature", "An old or misspelled email address", "No receipt, no tracking", "Only the letter saved, not the packet", "Nothing logged in the CMS", "No one confirmed it arrived"] },
      fourPart: {
        corePrinciples: [
          "Sending is a legal event: the demand's deadline runs from it, so the firm must be able to prove what was sent, to whom, how and when.",
          "The attorney chooses the delivery method. Dana's packet went to Tom Reyes on 10/09/2026 by email with a delivery receipt and by certified mail.",
          "Some states' rules for time-limited demands require specific delivery methods — one more reason the method is the attorney's call."
        ],
        howTo: [
          "Confirm the letter is signed and the packet is final (index, exhibits, cites tested).",
          "Verify the recipient against Keystone's most recent letter: Tom Reyes, treyes@keystonemutual.example, claim KM-26-0418823.",
          "Send with a short cover email naming the claimant, the claim number and the enclosures — the terms stay in the letter.",
          "Mail the certified copy the same day and record the tracking number.",
          "Save the exact PDF as sent, the email, the delivery receipt and the certified mail receipt in the CMS, and log the send."
        ],
        bestPractices: [
          "Confirm receipt with the adjuster within a business day or two, and log it.",
          "If the packet is too large to email, use the firm's secure file link and keep its access record.",
          "Pitfall: saving a later, edited version as “sent” — if anything is disputed, only the exact copy that went out counts."
        ],
        discussionCase: "Suppose Tom Reyes called on 10/20/2026 and said Keystone never received the demand. What do you pull from the CMS, and who do you tell?"
      },
      trainerCue: "The email with its delivery receipt, the certified mail tracking and return receipt, and the exact PDF as sent — then tell Attorney Bennett the same day. The deadline question is hers."
    },
    { h: "Calendaring and Follow-Up",
      layout: "PROCESS",
      processSteps: [
        { label: "10/09 · Sent", desc: "Log the send, save the proof, calendar everything below." },
        { label: "10/13 · Confirm receipt", desc: "Confirm with Tom Reyes that the packet arrived." },
        { label: "Mid-point check", desc: "A status follow-up partway through, if firm practice calls for one." },
        { label: "11/02 · One week out", desc: "Reminder to you and the attorney: response due next Monday." },
        { label: "11/09 · Response due", desc: "Nothing received? Tell the attorney that day." },
        { label: "Each response", desc: "New dates: records to send, the next follow-up." },
        { label: "03/14/2028 · SOL", desc: "The training-state SOL, with early warnings in the CMS." }
      ],
      fourPart: {
        corePrinciples: [
          "Every demand creates dates: the response deadline, the follow-ups and — always — the statute of limitations.",
          "A calendar entry only protects the client if it has an owner and a reminder ahead of time.",
          "The SOL is the hardest deadline on the file. Dana's is 03/14/2028 under the training state's two-year rule, and negotiating doesn't stop that clock."
        ],
        howTo: [
          "Calendar the response deadline from the letter's terms: sent 10/09/2026, response due 11/09/2026.",
          "Add a receipt check, a reminder a week before the deadline, and a same-day alert to the attorney if nothing arrives.",
          "When a response arrives, calendar the new dates it creates.",
          "Confirm the SOL and its warnings (for example, 180, 90 and 30 days out) are in the CMS."
        ],
        bestPractices: [
          "Put the attorney on every deadline entry — deadlines she can't see don't protect the client.",
          "Log every follow-up the same day: date, method, who, what was said.",
          "Pitfall: the adjuster goes quiet and weeks pass. Silence is a response too — it needs a written follow-up and an attorney update."
        ],
        discussionCase: "Suppose it's 11/09/2026 and Keystone hasn't responded. What do you do today, and what don't you do?"
      },
      trainerCue: "Do: follow up in writing, update the attorney, log it. Don't: extend the deadline, withdraw the demand or change its terms — those are Attorney Bennett's decisions. (On the real file, Keystone answered on 11/04.)"
    },
    { h: "Types of Adjuster Responses",
      layout: "TABLE",
      tableHeaders: ["Response", "What it looks like", "Your move"],
      tableRows: [
        ["Offer", "“We offer $18,500.00” (DW29, 11/04/2026)", "Log it; route it to Attorney Bennett the same day; never respond on value"],
        ["Request for information", "“Send 5 years of prior records” (DW30)", "Route it the same day; the attorney decides the scope"],
        ["Dispute", "Treatment, causation or bills questioned", "Pull the record cites; draft a rebuttal for the attorney"],
        ["Request for more time", "“We need 30 more days to review”", "Route it — only the attorney can extend the deadline"],
        ["Denial", "“We deny the claim”", "To the attorney at once, with the written reason; check the SOL"],
        ["Silence", "Nothing by the deadline (11/09/2026)", "Written follow-up; update the attorney the same day"]
      ],
      fourPart: {
        corePrinciples: [
          "Insurer responses come in a few types: an offer, a request for information, a dispute, a denial, a request for more time — or silence.",
          "One letter can be several types at once. Keystone's 11/04/2026 response was an offer ($18,500.00), a dispute (five arguments) and a request (5 years of prior records).",
          "Every type ends the same way for you: logged, routed to the attorney, calendared."
        ],
        howTo: [
          "Read the whole response and label every part: offer, argument, request, deadline.",
          "Log each part in the CMS with the date received and how it arrived.",
          "Route it to the attorney the same day with a short summary.",
          "Start the prep she'll need: record cites for each argument, a list of what's requested."
        ],
        bestPractices: [
          "Save the response exactly as received — email, letter, fax or your notes of a call.",
          "Treat a phone call as a response too: write down what was said and confirm it in writing.",
          "Pitfall: logging the offer and missing the records request that came with it."
        ],
        discussionCase: "Label every part of Keystone's 11/04/2026 response and say what you do with each one."
      },
      trainerCue: "Offer $18,500.00 → Attorney Bennett today. Arguments (the gap, the 2025 low back, 24 chiropractic visits, paid-not-billed) → cites for the rebuttal. Request (5 years of prior records) → the attorney decides the scope."
    },
    { h: "Common Adjuster Arguments",
      layout: "TABLE",
      tableHeaders: ["Argument", "Where the answer lives (Dana)"],
      tableRows: [
        ["“Gap in treatment — she must have recovered”", "Childcare (WHITFIELD 0038); symptoms continued and worsened (WHITFIELD 0060)"],
        ["“Pre-existing condition”", "2025: 3 visits for the low back, released (WHITFIELD 0010–0011); neck causation (WHITFIELD 0055)"],
        ["“Excessive chiropractic” (24 visits)", "Plan: 3x/week for 8 weeks (WHITFIELD 0012–0015); visit 24 of 24, discharged improved (WHITFIELD 0038)"],
        ["“Paid, not billed”", "A legal question that depends on the state — the attorney answers it; Ex. D shows both columns"],
        ["“Future care is speculative”", "Dr. Patel's MMI note: up to 2 ESIs at $3,900.00 each (WHITFIELD 0057); the first ESI took her from 6/10 to 2/10 (WHITFIELD 0064–0066)"],
        ["“Low property damage, so little injury”", "Photo log (Ex. B), the $6,480.00 repair, the MRI finding (WHITFIELD 0041) — the attorney decides how to argue it"]
      ],
      fourPart: {
        corePrinciples: [
          "Adjusters raise the same arguments on most injury claims: gaps, prior conditions, too much treatment, billed versus paid, speculative future care, and low property damage.",
          "Five of them are in Keystone's 11/04/2026 letter: the 43-day gap, the 2025 low back history, “excessive” chiropractic (24 visits), paid-not-billed amounts and “speculative” future injections.",
          "Your job is to find where the records answer each one; the attorney decides the legal argument and the strategy."
        ],
        howTo: [
          "List each argument exactly as the adjuster wrote it.",
          "Match it to the chronology flag and the record page that answers it.",
          "Mark which answers are factual (the records) and which are legal (billed vs paid) — the legal ones are the attorney's.",
          "Put it all in a one-page argument-and-cite table for the attorney."
        ],
        bestPractices: [
          "Build this table the day the offer arrives — it's the backbone of the rebuttal.",
          "Don't debate the adjuster on the phone; take notes and say the firm will respond in writing.",
          "Pitfall: answering a legal argument yourself — whether billed or paid amounts count depends on the state, and it's the attorney's call."
        ],
        discussionCase: "Keystone says 24 chiropractic visits were “excessive.” Which pages answer that, and what do they show?"
      },
      trainerCue: "The 03/17 plan was 3x/week for 8 weeks — 24 visits (WHITFIELD 0012–0015). She was discharged improved at visit 24 of 24, neck 7/10 down to 4/10 (WHITFIELD 0038)."
    },
    { h: "An Offer Arrives: Log It and Route It",
      layout: "PROCESS",
      processSteps: [
        { label: "Read it all", desc: "Amount, arguments, requests, any deadline." },
        { label: "Log it", desc: "CMS: date received, amount, adjuster, method, the letter itself." },
        { label: "Route it today", desc: "A summary to Attorney Bennett the same day it arrives." },
        { label: "Calendar", desc: "Follow-ups and any date the offer sets." },
        { label: "Prep the cites", desc: "The argument-and-cite table for the rebuttal." },
        { label: "Wait for direction", desc: "The attorney talks with Dana; you act on her instructions." }
      ],
      fourPart: {
        corePrinciples: [
          "Every offer goes to the attorney the same day it arrives — by letter, email or phone. Ethics rules require lawyers to promptly tell clients about settlement offers, so a day's delay matters.",
          "The attorney, not the Demand Specialist, tells the client about the offer and advises her on it.",
          "You never accept, reject, counter or comment on the value of an offer — not to the adjuster, the client or a provider."
        ],
        howTo: [
          "Log the offer in the CMS: $18,500.00, from Tom Reyes, received 11/04/2026, with the letter attached.",
          "Send Attorney Bennett a same-day summary: the amount, the five arguments, the records request, and any deadline.",
          "If the adjuster calls with an offer, write it down, read it back, and say: “I'll get this to Attorney Bennett today.”",
          "If Dana calls asking about it, tell her Attorney Bennett will speak with her, and let the attorney know she called."
        ],
        bestPractices: [
          "Keep the summary to one screen: the number, what they argued, what they want, what's due when.",
          "Keep settlement numbers inside the firm — never share them with providers, lienholders or anyone else.",
          "Pitfall: telling the adjuster “that's way too low” — that's a response on value, and it belongs to the attorney."
        ],
        discussionCase: "Tom Reyes calls on 11/04/2026: “$18,500 — can you tell me today if she'll take it?” What exactly do you say?"
      },
      trainerCue: "“Thank you — I've noted $18,500.00. I'll get it to Attorney Bennett today, and the firm will respond.” Then log the call, confirm the offer in writing and route it."
    },
    { h: "Drafting a Rebuttal with Record Cites",
      layout: "COMPARE",
      compareLeft: { label: "⛔ Weak rebuttal", items: ["“Your offer is insulting.”", "“She had a good reason for the gap.”", "“Her back was fine before.”", "“Chiropractors always do 24 visits.”", "A new number you picked yourself"] },
      compareRight: { label: "✅ Strong rebuttal", items: ["Answers each argument in the adjuster's order", "Gap: childcare (Ex. E, WHITFIELD 0038) and worsening symptoms (Ex. E, WHITFIELD 0060)", "Prior: low back only, 3 visits in 2025, released (Ex. E, WHITFIELD 0010–0011); neck causation (Ex. E, WHITFIELD 0055)", "Chiropractic: 3x/week for 8 weeks, as prescribed (Ex. E, WHITFIELD 0012–0015)", "The counter left for the attorney"] },
      fourPart: {
        corePrinciples: [
          "A rebuttal answers the adjuster's arguments with the records — calmly, point by point, with a page cite for each fact.",
          "The Demand Specialist drafts the factual answers; the attorney adds the legal arguments, sets any counter, and signs.",
          "On Dana's file, the firm's rebuttal went out on 11/12/2026 with Attorney Bennett's counter of $72,500.00."
        ],
        howTo: [
          "Use the argument-and-cite table as your outline: one short section per argument, in the adjuster's order.",
          "State the fact, then the cite; quote the record where the words matter (“since the MVC of 03/14/2026,” WHITFIELD 0060).",
          "Leave a marked place for the attorney's legal points (billed vs paid) and her counter.",
          "Cite the same Bates pages the adjuster already has in the packet."
        ],
        bestPractices: [
          "Stay professional: the adjuster is a counterpart, and the letter may later be read by a mediator or a judge.",
          "Answer what was raised — don't repeat the whole demand. Add a new record only with the attorney's approval.",
          "Pitfall: calling the gap “no gap at all.” The records show 43 days — explain it, don't deny it."
        ],
        discussionCase: "Draft the two-sentence answer to Keystone's gap argument, with cites."
      },
      trainerCue: "Model: At her 24th and final scheduled chiropractic visit on 05/14/2026, Ms. Whitfield was discharged improved; she could not continue care because her mother, who watched her son, had been hospitalized (Ex. E, WHITFIELD 0038). Her neck pain and right-arm tingling continued and worsened after therapy stopped, and she began pain management on 06/26/2026 (Ex. E, WHITFIELD 0060)."
    },
    { h: "Requests for More Information and Prior Records",
      layout: "PROCESS",
      processSteps: [
        { label: "Log it", desc: "What's asked, by whom, by when (DW30, 11/04/2026)." },
        { label: "Route it today", desc: "To the attorney — nothing goes out yet." },
        { label: "The attorney sets the scope", desc: "Dana: neck and low back, 2021–2026 — not 5 years of everything." },
        { label: "Request within the scope", desc: "Under the HIPAA authorization (valid to 03/18/2027)." },
        { label: "Review before release", desc: "Right patient, right body parts, right dates." },
        { label: "Send and log", desc: "Only what the attorney approved, with a cover letter." }
      ],
      fourPart: {
        corePrinciples: [
          "Insurers often ask for more: prior records, more years, a signed authorization, a recorded statement. Every request goes to the attorney — she decides what, if anything, is provided.",
          "Minimum necessary: share only what the purpose requires. Keystone asked for 5 years of prior records; Attorney Bennett limited it to the neck and low back for 2021–2026.",
          "Never give an insurer a blanket medical authorization or the client's whole medical history on your own."
        ],
        howTo: [
          "Log the request and route it the same day, with what the file already shows (the 2025 Harbor Spine records are in Ex. E at WHITFIELD 0010–0011).",
          "Once the attorney sets the scope, list the providers who may have records within it — from the intake, the records, and the client as the attorney directs.",
          "Request those records and check that the authorization covers them (Dana's runs to 03/18/2027).",
          "Review every page before release: right patient, right body part, right dates — nothing outside the scope.",
          "Send only what's approved, with a cover letter describing it, and log exactly what went out."
        ],
        bestPractices: [
          "Unrelated records (like the Northgate wellness exam) don't go out unless the attorney decides otherwise.",
          "Make sure the firm answers every request in writing, even when the answer is “the request has been limited to…” — silence looks like stalling.",
          "Pitfall: forwarding the insurer's request to every provider as written — the scope is the attorney's decision, not the insurer's."
        ],
        discussionCase: "DW30 asks for 5 years of prior records. What do you do on 11/04/2026, and what goes out after Attorney Bennett decides?"
      },
      trainerCue: "11/04: log it and route it to Attorney Bennett. After her decision: only neck and low back records for 2021–2026, reviewed page by page, sent with a cover letter, and logged."
    },
    { h: "Counteroffers and the Attorney's Authority",
      layout: "COMPARE",
      compareLeft: { label: "✍️ You can", items: ["Log and route every offer the same day", "Keep the negotiation log (demand, offers, counters, dates)", "Draft the rebuttal and counter letter from the attorney's instructions", "Send the counter once the attorney approves it", "Say: “I'll get this to Attorney Bennett today.”"] },
      compareRight: { label: "⚖️ Only the attorney (with the client) can", items: ["Decide whether to counter, and at what number", "Get the client's authority to settle", "Accept or reject an offer", "Advise the client on any offer", "Agree to anything that changes the demand's terms"] },
      fourPart: {
        corePrinciples: [
          "Settlement authority belongs to the client, advised by the attorney. The Demand Specialist never counters, accepts or rejects — however hard an adjuster pushes.",
          "Dana's file: demand $85,000.00 → offer $18,500.00 (11/04) → counter $72,500.00 (11/12) → offer $31,000.00 (11/24) → settled at $47,500.00 (12/03), with Dana's authority. Every move was the attorney's.",
          "A clean negotiation log — every number, date and who said it — helps the attorney decide."
        ],
        howTo: [
          "Keep the negotiation log in the CMS: date, from, amount, method, arguments, attachments.",
          "Prepare the counter letter from the attorney's instructions — her number, her words.",
          "Send it only after her approval, with proof of delivery, and log it.",
          "Route each new offer the same day and add it to the log."
        ],
        bestPractices: [
          "Never hint at what the client “might take” — you don't know it, and it isn't yours to share.",
          "Confirm any phone offer in writing the same day.",
          "Pitfall: “splitting the difference” with an adjuster to be helpful — that's a counter only the attorney can make."
        ],
        discussionCase: "On 11/24/2026, Tom Reyes offers $31,000.00 and says, “Meet me in the middle and we're done today.” What do you do?"
      },
      trainerCue: "Note it, confirm it in writing, route it to Attorney Bennett the same day. She discusses it with Dana; the claim settled for $47,500.00 on 12/03/2026 with Dana's authority."
    },
    { h: "When Negotiations Stall: the SOL, Mediation, Litigation",
      layout: "ICONLIST",
      icons: [
        { icon: "⏰", label: "The SOL", desc: "03/14/2028 under the training state's rule — calendared with early warnings." },
        { icon: "📨", label: "Written follow-up", desc: "Dated follow-ups, logged, with the attorney kept informed." },
        { icon: "🧑‍💼", label: "Supervisor review", desc: "The attorney may ask for the adjuster's supervisor." },
        { icon: "🤝", label: "Mediation", desc: "A neutral helps both sides negotiate — the attorney decides." },
        { icon: "⚖️", label: "Filing suit", desc: "Before the SOL, if the claim doesn't settle — the attorney decides." },
        { icon: "📁", label: "A ready file", desc: "Medsum, specials, exhibits and the negotiation log, up to date." }
      ],
      fourPart: {
        corePrinciples: [
          "Negotiations stall: offers stop moving, the adjuster goes quiet, or the numbers stay far apart.",
          "Negotiating doesn't stop the statute of limitations. Unless the claim settles, or the attorney arranges another protection she decides on (such as a written tolling agreement where allowed), suit must be filed before the deadline — Dana's is 03/14/2028 under the training state's rule.",
          "A supervisor review, pre-suit mediation and filing suit are all the attorney's decisions; the Demand Specialist keeps the file ready for any of them."
        ],
        howTo: [
          "Track the time since the last movement and flag a stall to the attorney with the negotiation log.",
          "Keep the SOL warnings in the CMS and confirm the attorney has seen them.",
          "Keep the file current: update the medsum and specials if the client resumes treatment (for example, the future ESIs Dr. Patel described).",
          "If the attorney chooses mediation or suit, hand over a clean, complete file."
        ],
        bestPractices: [
          "Never threaten a lawsuit or mediation to the adjuster — that's the attorney's strategy.",
          "If the client restarts treatment during negotiations, tell the attorney — it may change the damages.",
          "Pitfall: waiting on an adjuster who “promised to call back” while the SOL gets closer."
        ],
        discussionCase: "Suppose Keystone had stopped responding after 11/24/2026 and nothing moved into mid-2027. What would you track, and what would you raise with Attorney Bennett?"
      },
      trainerCue: "Time since the last offer, the SOL (03/14/2028) and its warnings, and whether Dana needed the future ESIs. Mediation or suit is the attorney's decision — made well before the SOL."
    },
    { h: "Settlement: Confirmation, Release Review and the Handoff",
      layout: "PROCESS",
      processSteps: [
        { label: "Client's authority", desc: "Dana authorizes $47,500.00 through Attorney Bennett (12/03/2026)." },
        { label: "Written confirmation", desc: "Keystone's settlement confirmation (DW32) checked against the file." },
        { label: "Release to the attorney", desc: "She reviews every term before Dana sees it." },
        { label: "Client signs", desc: "After the attorney explains the release to her." },
        { label: "Handoff to Marcus Webb", desc: "Liens, balances and the itemization, for disbursement." },
        { label: "Close your part", desc: "CMS note: amount, date, documents, handoff." }
      ],
      fourPart: {
        corePrinciples: [
          "A settlement isn't finished until it's confirmed in writing, the release is reviewed by the attorney and signed by the client, and the file is handed off for liens and disbursement.",
          "The release is the legal document that ends the claim. Only the attorney reviews and approves it, and she explains it to the client.",
          "Liens and disbursement belong to the attorney and the Case Manager. You hand over the numbers; you never negotiate a lien or share the settlement amount with a provider."
        ],
        howTo: [
          "Check Keystone's settlement confirmation (DW32) against the file: $47,500.00, Dana Whitfield, insured Grant Mercer, KM-26-0418823, DOI 03/14/2026.",
          "Route the release to Attorney Bennett the day it arrives, with a note of anything that doesn't match the file.",
          "Prepare the handoff for Marcus Webb: Harbor Spine LOP $5,760.00, Bayside LOP $4,325.00, Clearview balance $1,020.00, BlueHarbor's reimbursement claim ($2,575.00 paid to date; final figure after settlement), and PIP (no reimbursement claim under the training rule).",
          "Attach the final itemization and the negotiation log, and write the CMS note that closes the demand phase."
        ],
        bestPractices: [
          "Flag anything in the release that goes beyond this claim or adds terms (for example, confidentiality or indemnity) — the attorney decides.",
          "Tell providers nothing about the settlement; lien and balance calls go to Marcus Webb and the attorney.",
          "Pitfall: a billing office calls asking “how much did it settle for?” and gets an answer."
        ],
        discussionCase: "Carla Ruiz at Bayside calls on 12/04/2026: “I heard Dana's case settled — how much, and when do we get our $4,325?” What do you say?"
      },
      trainerCue: "“I can't discuss the case. Marcus Webb handles balances and liens — I'll have him contact you.” Then message Marcus and log the call."
    },
    { h: "Skill Builder: The Packet & Response Desk",
      layout: "ICONLIST",
      icons: [
        { icon: "📦", label: "Assemble", desc: "Put Dana's packet in the LSH standard order." },
        { icon: "📬", label: "Triage", desc: "Decide the next step on each of Keystone's responses." },
        { icon: "✍️", label: "Rebut", desc: "Draft the rebuttal on the gap and the prior injury, with cites." },
        { icon: "☎️", label: "Take the call", desc: "Tom Reyes calls with the low offer — log it, route it, don't value it." },
        { icon: "🗂", label: "Log it", desc: "CMS: the send, the responses, the tasks and the handoff." }
      ],
      skill: { tool: "mdPacket5", cms: true },
      fourPart: {
        corePrinciples: [
          "Packet and response work is where accuracy meets deadlines: the right order, proof of sending, and every response routed the same day.",
          "Every response has only a few possible next steps — and almost all of them start with the attorney.",
          "The Demand Specialist's value is a file the attorney can act on at once: logged, cited, calendared."
        ],
        howTo: [
          "Assemble the packet from the documents in the LSH order and check it against the exhibit index.",
          "Sort each Keystone document (DW29–DW32) by response type and choose the next step.",
          "Draft the gap and prior-injury rebuttal paragraphs with WHITFIELD cites.",
          "Take Tom Reyes's call on the $18,500.00 offer without valuing, countering or accepting."
        ],
        bestPractices: [
          "Name the attorney and a time frame on every call: “I'll get this to Attorney Bennett today.”",
          "Read each response twice — Keystone's 11/04 response carried an offer, five arguments and a records request.",
          "Pitfall: promising the adjuster an answer “tomorrow” on what Dana will take — you don't know, and it isn't yours to say."
        ],
        discussionCase: "Keystone's 11/04/2026 offer and its prior-records request arrive together. Which do you route first, and what goes in your summary to Attorney Bennett?"
      },
      trainerCue: "Launch the Day 5 Skill Builder — Packet & Response Desk: assemble the packet, work each Keystone response, draft the rebuttal on the gap and the prior injury, then take Tom Reyes's call on the $18,500.00 offer. Both 11/04 items go to the attorney the same day, in one summary."
    }
  ],
  quickChecks: [
    { afterIndex: 2, q: "Dana's packet went out on 10/09/2026. What should be saved in the CMS?", opts: ["Just a note that says “sent”", "The draft letter", "The exact PDF as sent, the email with its delivery receipt, and the certified mail receipt", "The adjuster's business card"], a: 2, r: "The firm must be able to prove what was sent, to whom, how and when." },
    { afterIndex: 6, q: "Keystone's $18,500.00 offer arrives on 11/04/2026. When does it go to Attorney Bennett?", opts: ["The same day", "At the next weekly file review", "After you finish the rebuttal", "When the 30-day deadline passes"], a: 0, r: "Every offer goes to the attorney the same day; she must promptly tell the client." },
    { afterIndex: 10, q: "Under the training state's rule, the statute of limitations on Dana's claim is:", opts: ["03/14/2027", "03/18/2028", "11/09/2026", "03/14/2028"], a: 3, r: "Two years from the 03/14/2026 DOI. Negotiating doesn't stop the clock; 11/09/2026 was the demand's response date." }
  ],
  quiz: [
    { q: "In the LSH standard packet, what comes right after the signed demand letter?", opts: ["Exhibit A, the police report", "The medical records", "The exhibit index", "The client impact statement"], a: 2, r: "Letter, exhibit index, then Exhibits A–G." },
    { q: "Exhibit E in Dana's packet contains:", opts: ["Medical records and bills by provider, in date order — WHITFIELD 0001–0066, then the bills", "The wage verification", "The photo log", "The client impact statement"], a: 0, r: "Ex. B is the photo log, Ex. F the wages, Ex. G the impact statement." },
    { q: "After the letter is written, someone re-stamps the Bates numbers. The main risk is:", opts: ["The PDF gets bigger", "Nothing — the numbers are cosmetic", "The adjuster gets extra pages", "Every cite in the letter may now point to the wrong page"], a: 3, r: "Bates numbers are fixed page addresses; the letter's cites depend on them." },
    { q: "Dana's demand went to Tom Reyes on 10/09/2026 by:", opts: ["Fax only", "Email with a delivery receipt and certified mail", "Regular mail only", "A phone call"], a: 1, r: "The attorney chose the method; keep the proof of both." },
    { q: "The response deadline calendared for Dana's demand is:", opts: ["10/09/2026", "11/09/2026", "11/04/2026", "03/14/2028"], a: 1, r: "Sent 10/09/2026, open 30 days. 11/04 is when Keystone answered; 03/14/2028 is the SOL." },
    { q: "Keystone's 11/04/2026 response offered $18,500.00, raised five arguments and asked for prior records. It is:", opts: ["Only an offer", "A denial", "An offer, a dispute and a request for information at once", "Silence"], a: 2, r: "Label every part; each one needs its own next step." },
    { q: "Which argument did Keystone NOT raise in its 11/04/2026 response?", opts: ["Low property damage (a “minor impact”)", "The 43-day gap", "The 2025 low back history", "Paid, not billed"], a: 0, r: "Keystone argued the gap, the 2025 low back history, “excessive” chiropractic, paid-not-billed and “speculative” future injections — not low property damage (the CR-V needed $6,480.00 in repairs)." },
    { q: "The pages that answer Keystone's gap argument are:", opts: ["WHITFIELD 0041 and 0055", "WHITFIELD 0010–0011", "WHITFIELD 0001–0009", "WHITFIELD 0038 (childcare) and 0060 (symptoms continued and worsened)"], a: 3, r: "Page 38 and page 60 explain the 05/14 → 06/26/2026 gap." },
    { q: "Tom Reyes calls with an offer. You say:", opts: ["“That's too low — we need at least $50,000.”", "“She'll take it.”", "“I've noted it — I'll get it to Attorney Bennett today.”", "“Call the client directly.”"], a: 2, r: "Log it, route it, never respond on value." },
    { q: "Who tells Dana about Keystone's offer and advises her on it?", opts: ["Attorney Bennett", "The Demand Specialist", "Tom Reyes", "Marcus Webb"], a: 0, r: "The attorney communicates offers to the client and advises her." },
    { q: "Keystone asked for 5 years of prior records. Attorney Bennett's decision was to:", opts: ["Send everything in the file", "Limit it to the neck and low back for 2021–2026", "Withdraw the demand", "Let Keystone use a blanket authorization"], a: 1, r: "Minimum necessary — the attorney sets the scope." },
    { q: "Who decided the $72,500.00 counter on 11/12/2026?", opts: ["The Demand Specialist", "Tom Reyes", "Marcus Webb", "Attorney Bennett"], a: 3, r: "Counters are the attorney's, with the client." },
    { q: "Whether a demand may use billed rather than paid amounts is:", opts: ["A legal question that depends on the state — the attorney answers it", "Always billed, everywhere", "Always paid, everywhere", "The adjuster's decision"], a: 0, r: "The training state uses billed amounts and keeps paid amounts on the itemization; real states differ." },
    { q: "After the settlement, the release is:", opts: ["Signed by the Demand Specialist", "Sent straight to the client to sign", "Reviewed by the attorney, who explains it to the client before she signs", "Filed without review"], a: 2, r: "The release ends the claim — attorney review, always." },
    { q: "Bayside's billing office asks what Dana's case settled for. You:", opts: ["Tell them $47,500.00", "Don't share it; refer them to Marcus Webb, who handles liens with the attorney", "Tell them to call Keystone", "Offer them a reduced payment"], a: 1, r: "Never share settlement amounts with providers or agree to a lien reduction." }
  ],
  discussionQuestion: "Walk Dana's file from 10/09/2026 to the handoff: how you assembled and sent the packet, what you calendared, how you handled Keystone's 11/04 response — the $18,500.00 offer, its five arguments with the record cites you gave Attorney Bennett, and the prior-records request — what you did (and didn't do) when Tom Reyes offered $31,000.00, and what you handed Marcus Webb after the $47,500.00 settlement."
};
