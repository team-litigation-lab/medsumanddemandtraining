/* Day 1 — hand-written spoken scripts, one per slide (see slideScript() in build/slide_script_engine.js).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "1::Training Agenda & What a Demand Specialist Owns": {
  "p1": {
   "why": "The demand is only as strong as the file behind it, and building that file is your job.",
   "talk": "Today has three parts: your role and where it fits, the file you receive and the records and bills you request, and then reading, organizing and protecting those records. Here's the job in one sentence: you take a finished treatment file and turn it into the proof of the injury claim. The six icons on this slide are that proof, in the order you build it: the file audit, the medical chronology, the medical summary we call the medsum, the bills itemization, the demand letter and packet, and the insurer's responses. And one line to remember all week: the attorney decides, you prepare. Laura Bennett, our handling attorney, sets the demand amount, weighs offers, decides what records go out and advises the client.",
   "walk": [
    "First, you receive the file from the Case Manager and audit it against the documents. For us, that's Marcus Webb handing you Dana Whitfield's file on Monday, 10/05/2026.",
    "Next, you get every record and every itemized bill, and you keep following up until they're actually in the file, not just requested.",
    "Then, you build the chronology and the medical summary, with a page cite for every single fact, so anyone can check it in seconds.",
    "After that, you itemize the bills and draft the demand, and it goes to Attorney Bennett for review. A draft stays a draft until she signs it.",
    "Finally, once she approves, you assemble and send the packet, then log every response and route it to her. Every offer reaches her the same day."
   ],
   "ask": "Which of these six pieces do you think takes the most time, and which one do you think the adjuster reads first?"
  },
  "p2": {
   "why": "The adjuster will check every date, number and word against the records, so treat the file as evidence from minute one.",
   "talk": "Two habits carry this whole role. First, you work as if the other side is going to check everything, because they will. Second, you stay in your lane: you can always say what the records show, but only the attorney says what the case is worth or what the client should do. The pressure to cross that line comes from providers, adjusters and sometimes the client, so let's be clear about it on day one.",
   "walk": [
    "First, treat the file as evidence. If the demand says 03/14/2026, a 3 mm disc protrusion and $19,516.40, each one has to match a page the adjuster can open.",
    "Next, know your lane. “The MRI shows a 3 mm central disc protrusion at C5-6” is yours to say. What the case is worth never is.",
    "Finally, the pitfall: telling a provider, an adjuster or the client what the case “should settle for.” That's legal advice and it's Attorney Bennett's call. Your answer is always, “I can't speak to that, but I'll pass your question to the attorney.”"
   ],
   "ask": "Your turn: Dana Whitfield's file reaches you on Monday 10/05/2026. Sort the work into three piles: what's yours, what's Attorney Bennett's, and what still belongs to Case Manager Marcus Webb."
  }
 },
 "1::The PI Case Lifecycle: Where the Medsum and Demand Fit": {
  "p1": {
   "why": "If you know where a case is in its life, you know what it's waiting on, and the medsum and demand sit right in the middle.",
   "talk": "A personal-injury case, PI for short, moves from intake through treatment to a demand, then negotiation, and finally resolution: a settlement, or a lawsuit if it doesn't settle. The eight boxes on this slide are that journey, and boxes five, six and seven, records and bills, the medsum and specials, and the demand, are this course. Notice where they sit: after treatment has ended or plateaued, and before negotiation. Underneath all of it runs the statute of limitations, the SOL, which is the legal deadline to file a lawsuit. In the training state we use in this course, ST, it's two years from the date of incident, so Dana's is 03/14/2028, and it goes on the calendar on day one; real states set their own deadlines.",
   "walk": [
    "First, intake and retainer. Dana signed the retainer and her HIPAA authorization on 03/18/2026, four days after the crash.",
    "Next, claims, liability and treatment. Keystone accepted liability on 04/02/2026, meaning they agreed their driver was at fault, and Marcus Webb tracked Dana's care, which ran from 03/14 to 08/21/2026.",
    "Then, MMI, records and bills. MMI, maximum medical improvement, means she's recovered as much as she's expected to. Dr. Patel placed Dana there on 08/21/2026, and her records and bills were requested on 08/24/2026.",
    "After that, the medsum, the specials and the demand. That's your work, and it goes to Attorney Bennett for her review and signature.",
    "Finally, resolution: settlement or suit, and that's the attorney's call. After settlement, the Case Manager takes the file back for liens and disbursement."
   ],
   "ask": "Point to the box Dana's file is in on the morning of 10/05/2026. What is it waiting on?"
  },
  "p2": {
   "why": "Every file is waiting on something, and the SOL keeps running whether anyone's watching it or not.",
   "talk": "A good Demand Specialist can tell you, for every file on the desk, what stage it's in and what it's waiting on. Timing matters just as much. A demand that goes out too early can't tell the whole story, because the bills are still growing and nobody knows yet what future care the client needs. For Dana, the future-care plan, up to two more injections at $3,900.00 each, only came in Dr. Patel's 08/21/2026 note.",
   "walk": [
    "First, know which stage each file is in and what it's waiting on. On 10/05, one thing Dana's file is waiting on is Bayside's itemized bill.",
    "Next, watch the SOL on every file. If one is getting close, tell the attorney early. Only the attorney decides whether to file suit.",
    "Finally, the pitfall: pushing a demand out before treatment ends. The bills keep growing and future care isn't known yet, so the attorney decides when the file is ready, not us."
   ],
   "ask": "Your turn: Dana reached MMI on 08/21/2026 and her SOL is 03/14/2028. Why does the firm usually wait for MMI before the demand, and what could go wrong if her file just sat?"
  }
 },
 "1::Treatment Phase vs Demand Phase: the Handoff": {
  "p1": {
   "why": "The handoff is where information gets lost, so you read it slowly and check it hard.",
   "talk": "On the left is the treatment phase, which Marcus Webb owns as Case Manager. The client's still in care, and the job is getting her that care: appointment check-ins, plus setting up LOPs, PIP and health insurance. An LOP, a letter of protection, is the firm's written promise that the provider will be paid from any settlement, and PIP is the no-fault medical coverage on the client's own auto policy. On the right is the demand phase, which you own, for the attorney: care is done, and the job becomes proving the care, the costs and the harm. For Dana, the line between the two is 08/21/2026, the day she reached MMI.",
   "walk": [
    "First, read the Case Handoff Memo, DW01, before you touch anything else. It tells you what Marcus believes is done, what's pending and what looks wrong.",
    "Next, confirm the treatment status. Has care ended, and is future care documented? For Dana, yes: MMI on 08/21/2026, and Dr. Patel's note documents up to two more injections.",
    "Then, list what the Case Manager already requested and when. Dana's records and bills were requested on 08/24/2026.",
    "After that, ask Marcus about anything unclear the same day, while the file is still fresh in his mind.",
    "Finally, log the handoff in the CMS, our case management system: the date, who handed it off, and the open items you now own."
   ],
   "ask": "Why do you think the handoff is the moment information is most likely to go missing?"
  },
  "p2": {
   "why": "The handoff memo is a starting point, not the truth.",
   "talk": "Marcus is good at his job, and his memo is still a summary written by a busy person. So you check it against the documents. And the two of you aren't done with each other: he still owns treatment questions with Dana, and he takes the file back after settlement for liens and disbursement.",
   "walk": [
    "First, treat the handoff memo as a starting point. Every line gets checked against the documents behind it.",
    "Next, keep Marcus in the loop on anything that touches LOPs, liens or Dana's care. Those stay his, even while the file is with you.",
    "Finally, the pitfall: assuming everything was requested because the memo says “records requested.” Check each provider, one by one."
   ],
   "ask": "Your turn: Marcus's memo says “all records and bills requested 08/24.” Name three things you check before you rely on that."
  }
 },
 "1::The Case Handoff: What You Receive and What You Check": {
  "p1": {
   "why": "The handoff gives you the file; your first job is to find out whether the file is right.",
   "talk": "The table on this slide is your checklist: the left column is what Marcus hands you, and the right column is what you check in each one. It runs from the handoff memo and the client intake through the police report, the insurance letters and payer logs, the records and the bills. Look at the intake row: it gives the DOI as 03/15/2026, and that's wrong. Every fact gets checked against its source: the police report and ED record for the date, the records for the treatment, the bills for the charges. What you find today shapes your whole week: what to request, what to fix and what to tell the attorney.",
   "walk": [
    "First, read the memo, then the intake, then the source documents, so you know what you're testing before you test it.",
    "Next, check the core facts against the sources: the DOI, Dana's name and date of birth, the claim number KM-26-0418823, the providers and the dates of service.",
    "Then, build the provider list and compare it with the records and bills you actually have in hand.",
    "After that, write down each discrepancy with both versions and the page where the correct one is found.",
    "Finally, log a same-day CMS note: what's complete, what's missing, what's wrong, and your next steps with dates."
   ],
   "ask": "Looking at the right-hand column, which check do you think gets skipped most often, and why?"
  },
  "p2": {
   "why": "When the intake and the documents disagree, trust the documents.",
   "talk": "Here's why. Dana's intake was written on 03/18/2026, four days after the crash, from her memory. The police report and the ED record were made on the day it happened, 03/14/2026. That's no criticism of Dana; people misremember dates all the time. But one wrong date, copied once, ends up everywhere.",
   "walk": [
    "First, trust the documents made at the time. The police report and the ED record say 03/14/2026, so that's the DOI.",
    "Next, write the discrepancy neutrally: “Intake lists DOI 03/15/2026; police report and ED record show 03/14/2026.” Facts and sources, no blame.",
    "Finally, the pitfall: copying the DOI from the intake into the CMS, the chronology and the demand. One wrong date repeats everywhere, and the adjuster only has to find it once."
   ],
   "ask": "Your turn: open DW02 and DW04 side by side in Documents. Dana's intake gives the DOI as 03/15/2026, so where do you confirm the right date, what do you correct, and who needs to know?"
  }
 },
 "1::The Provider List: Every Provider, Records and Bills": {
  "p1": {
   "why": "The provider list is the map of the file, and a provider missing from the map is a hole in the demand.",
   "talk": "The provider list shows every provider who treated the client, with the dates, the records and the bill for each. Every provider needs two things: the records, which show what was done, and an itemized bill, which shows what it cost, and one without the other is a hole in the demand. Look at Dana's eight lines: most are in good shape, but Bayside has only a balance-due statement, and Clearview's ledger lists the MRI twice. The list also holds care that won't be in the demand, like Harbor Spine's 2025 visits and the Northgate wellness exam, so you can explain why they're left out.",
   "walk": [
    "First, build it from every source: the intake, the handoff memo, the records, the bills and the payer logs. No single document has all of it.",
    "Next, add each provider with the dates of service, the Bates range of the records, and the type and status of the bill. Riverside's ED line, for example, is 03/14/2026, WHITFIELD 0001 to 0009, with a UB-04.",
    "Then, follow every referral. Dr. Patel referred Dana to Bayside on page 59, so Bayside has to be on the list.",
    "After that, mark each line: complete, missing records, missing itemized bill, prior, or unrelated.",
    "Finally, keep the list in the CMS and update it the day records and bills arrive."
   ],
   "ask": "Looking at Dana's eight lines, which one would you chase first, and why?"
  },
  "p2": {
   "why": "The intake is not the provider list; the documents are.",
   "talk": "Clients remember the big visits and forget the rest, and that's normal. So we find the hidden providers ourselves. Two places help a lot: the payer logs and the ED visit itself.",
   "walk": [
    "First, payer logs find hidden providers. If PIP or BlueHarbor paid someone you don't recognize, a provider is missing from your list.",
    "Next, one ED visit can create several bills: the hospital, the ER physicians' group and sometimes a radiology group. Dana's visit has two, Riverside Medical Center and Riverside Emergency Physicians, so list each billing entity.",
    "Finally, the pitfall: listing only the providers the client remembers. Build from the intake alone and you'll miss someone."
   ],
   "ask": "Your turn: which providers on Dana's list won't show up in her injury story or her specials, and why do they still belong on the list?"
  }
 },
 "1::HIPAA Authorizations and Requesting Records": {
  "p1": {
   "why": "Providers release records because the client signed a valid HIPAA authorization; without one, they can refuse, and they should.",
   "talk": "HIPAA is the federal health-privacy law, and the authorization is the client's written permission for providers to release her records to us. A valid one describes the information, names who releases it and who receives it, states the purpose and an expiration date or event, and has the patient's signature and date, plus required statements like the right to revoke. Dana signed hers on 03/18/2026, and it's good until 03/18/2027. The icons on this slide walk through a clean request, from the authorization and the request letter to the date range, the right department and the request log. One of them is the custodian certification: the records keeper's statement that the copies are true and complete business records, which in many courts means nobody has to come in to testify about them, though the form depends on the state, so use the firm's.",
   "walk": [
    "First, check the authorization before every request: signed, dated, unexpired and covering this provider. Dana's is valid to 03/18/2027.",
    "Next, write the request: patient name and date of birth, dates of service, and exactly what you need. Ask for the complete record, including office notes, imaging reports, procedure notes, referrals and work notes.",
    "Then, ask for the custodian certification with the records, so you're not going back for it later.",
    "After that, send it the way the provider accepts it, whether that's portal, fax, email or mail, and log the date, the method and any fee.",
    "Finally, calendar the follow-up the same day you send it. A request with no follow-up date is a request that gets forgotten."
   ],
   "ask": "Why do you think records and bills need two separate requests to two different departments?"
  },
  "p2": {
   "why": "The authorization protects the client's privacy; asking for more than the file needs isn't being thorough.",
   "talk": "Most requests go smoothly. The trouble comes with sensitive records, with providers that have their own rules, and with requests that are too broad. Each one has a simple answer, and twice the answer is: ask the attorney.",
   "walk": [
    "First, some records need special authorization language: psychotherapy notes, substance-use treatment records, and some HIV or mental-health records under state law. Ask the attorney before you request them.",
    "Next, some providers insist on their own form or a recently signed authorization. Don't argue. Ask what they need, and get the client's signature through the firm's usual process.",
    "Finally, the pitfall: requesting “all records, any date.” The date range and scope follow the attorney's direction. Dana's requests run from 03/14/2026 forward, and prior records only when the attorney asks for them."
   ],
   "ask": "Your turn: Bayside's records office says it won't release anything without its own authorization form. What do you do, who signs it, and what do you log?"
  }
 },
 "1::Requesting Bills: UB-04, CMS-1500 and Itemized Ledgers": {
  "p1": {
   "why": "One ED visit usually produces two bills, and knowing why keeps you from calling the second one a duplicate.",
   "talk": "On the left is the UB-04, also called the CMS-1450: the facility form hospitals, ERs and surgery centers use for their own charges, with revenue codes like 0450 for the emergency room. On the right is the CMS-1500, the professional form that physicians, chiropractors, therapists and many clinics use, with one line per service. Dana's ED visit shows both: Riverside Medical Center billed $4,850.00 on a UB-04, and Riverside Emergency Physicians billed $1,120.00 on a CMS-1500, and that's not a duplicate, it's two billers for one visit. For a demand, though, you need the itemized version: every date of service, CPT code, description, charge, payment, adjustment and the balance.",
   "walk": [
    "First, send bill requests to the billing office, separately from the records request. Medical records doesn't send bills.",
    "Next, ask for an itemized statement, or UB-04 and CMS-1500 copies, from the DOI forward, with CPT and ICD-10 codes, payments by payer, adjustments and the balance.",
    "Then, ask for a billing custodian certification, or the affidavit form the attorney tells you to use. Some states have their own form for medical bills.",
    "After that, check each bill when it arrives: right patient, dates after 03/14/2026, codes present and every visit listed.",
    "Finally, update the provider list and note anything that needs a second request."
   ],
   "ask": "What's the difference between a duplicate charge and two bills for the same visit?"
  },
  "p2": {
   "why": "The adjuster needs to see the services behind the number, not just the number.",
   "talk": "A balance-due statement only tells you what's owed. It doesn't say what was done or what each service cost, and that's why Bayside's first statement isn't enough. You also need two code sets in your head, and an eye for charges that don't belong.",
   "walk": [
    "First, know two code sets. CPT says what was done; 72141, for example, is an MRI of the cervical spine without contrast. ICD-10 says why, meaning the diagnosis.",
    "Next, watch for charges that don't belong. Harbor Spine's ledger includes the 2025 care, and Clearview's lists the same MRI twice. Note them now; on Day 3 we itemize them properly.",
    "Finally, the pitfall: accepting a balance-due statement because “the number is right.” Without the itemization, nobody can check the number."
   ],
   "ask": "Your turn: Bayside has sent a balance-due statement for $4,325.00. Exactly what do you ask Carla Ruiz in billing to send, and why?"
  }
 },
 "1::Following Up on Missing Records and Bills": {
  "p1": {
   "why": "A request isn't done when it's sent; it's done when the complete record or itemized bill is in the file and checked.",
   "talk": "The seven boxes on this slide are the loop: log it, calendar it, call, resolve whatever's stuck, check what arrives, escalate if it stalls, and update the file the same day. Most delays can be fixed: an unpaid copy fee, a missing form, the wrong department or an expired authorization. And every follow-up gets written down: who you spoke to, what they said and the date they promised.",
   "walk": [
    "First, follow the firm's follow-up schedule, for example a call 10 to 14 days after the request, then weekly, and log each attempt.",
    "Next, call the right department: medical records, which hospitals often call HIM, health information management, for records, and billing for bills.",
    "Then, ask three things. Was it received? Is anything missing, like a fee, a form or a signature? And when will it be sent, and how?",
    "After that, check what arrives against the request: every date of service, every page, the certification and the itemized charges.",
    "Finally, escalate to the attorney when a provider refuses, keeps missing its dates, or the delay threatens the demand timeline."
   ],
   "ask": "In your experience, what's the most common reason a request stalls?"
  },
  "p2": {
   "why": "If your note doesn't have a name and a date, nobody can pick it up after you.",
   "talk": "Bayside is our example. The itemized bill was requested on 08/24/2026, and at the handoff on 10/05 there's still only a balance-due statement. A good call gets you the right person and a promised date, and in our file the itemized bill arrives on 10/07, two days later. That's a follow-up that works.",
   "walk": [
    "First, get a name and a date on every call: “Carla Ruiz, billing, will email the itemized bill by Wednesday.”",
    "Next, when a request stalls, send it again in writing. The paper trail shows the firm did its part.",
    "Finally, the pitfall: logging “called Bayside” with no name, no answer and no next date. Nobody can pick that up, including you next week."
   ],
   "ask": "Your turn: on 10/05/2026 you call Bayside about the itemized bill requested on 08/24/2026. What do you ask, what do you log, and when is your next follow-up?"
  }
 },
 "1::Reading a Medical Record: SOAP Notes and Where the Facts Live": {
  "p1": {
   "why": "Once you know the SOAP pattern, you know where every fact in a note lives.",
   "talk": "Most office notes follow the same pattern, SOAP: Subjective, Objective, Assessment, Plan. Subjective is what the patient says, like Dana's neck pain at 7 out of 10; Objective is what the provider finds, like cervical range of motion reduced 40 percent, and adjusters give those findings more weight. Assessment is the diagnosis and the provider's impression, and it's often where a causation opinion shows up; Plan is treatment, medications, referrals, work status and the next visit. The bottom rows of the table cover the other formats you'll read: the ED record, the imaging report with its Findings and its Impression, and the procedure note.",
   "walk": [
    "First, read the history on each provider's first visit. That's where you find how the injury happened and any prior injury.",
    "Next, take pain scores and complaints from the Subjective section, in the patient's own reported terms.",
    "Then, take exam and test results from the Objective section and from the imaging Impression, the radiologist's conclusion. For Dana, that's the 3 mm central disc protrusion at C5-6 on page 41.",
    "After that, take the diagnosis, any causation opinion, the plan, referrals and work status from the Assessment and the Plan.",
    "Finally, note the Bates page for each fact as you read, not afterward. Hunting for pages later doubles the work."
   ],
   "ask": "Why do you think an adjuster gives an objective finding more weight than a pain score?"
  },
  "p2": {
   "why": "The most important sentences in a record are rarely in the headings.",
   "talk": "Two of the most important sentences in Dana's whole file are in the body of the notes. The reason for her treatment gap is on page 38, and Dr. Patel's causation opinion, her view on whether the crash caused the injury, is on page 55. Read only the diagnosis lines and you miss both.",
   "walk": [
    "First, read every page, including the last one. Dr. Patel's causation opinion is on page 55, the last page of her 04/20 consult, which runs from page 52 to 55.",
    "Next, look for prior injuries in past medical history sections, intake questionnaires and the ED history. That's where they tend to show up.",
    "Finally, the pitfall: reading only the diagnosis line. The reason for the gap on page 38 and the causation opinion on page 55 are in the body of the notes, not the headings."
   ],
   "ask": "Your turn: open Harbor Spine's initial exam, pages 12 to 15. Which facts are subjective, which are objective, and where's Dana's work status?"
  }
 },
 "1::Medical Terminology & Abbreviations": {
  "p1": {
   "why": "You don't have to be a clinician, but you do have to read the shorthand correctly, and you never guess.",
   "talk": "Medical records are written in shorthand, and the table on this slide gives you the common ones, each with an example from Dana's file. Some abbreviations flip the meaning of a sentence: “r/o” means rule out, so the provider was checking for something, not saying the patient has it, and “denies” means the patient said no. You'll also hear radiculopathy all week. It means an irritated nerve root: pain, numbness, tingling or weakness that travels along the nerve, into the arm when the problem's in the neck, and Dana's is a right C6 radiculopathy.",
   "walk": [
    "First, keep the course abbreviations list open while you read. It's in the Day 2 Chronology & Summary Guide.",
    "Next, look up any unfamiliar term in a reliable medical dictionary. Never guess from context.",
    "Then, write spine levels exactly as the record does. C5-6 is the disc between C5 and C6; C5–C7 is a range of levels.",
    "Finally, in the summary, spell an abbreviation out the first time you use it: “epidural steroid injection (ESI).” After that, the short form is fine."
   ],
   "ask": "Which abbreviation on this table would be the most dangerous to misread, and why?"
  },
  "p2": {
   "why": "One flipped side or one misread abbreviation is an error the adjuster will catch.",
   "talk": "Shorthand mistakes look small on the page and loom large in the demand. A wrong side, a “rule out” read as a diagnosis, or a history note skimmed past can each cost the file credibility.",
   "walk": [
    "First, watch right and left. Dana's radiculopathy is on the right. Flip it, and the adjuster will catch it.",
    "Next, when an abbreviation is unclear, quote it and ask. Don't translate it into something the provider didn't write.",
    "Finally, the pitfall: skimming past “Hx of LBP.” That's a history of low back pain, which is a prior-injury flag."
   ],
   "ask": "Your turn: a note reads “Pt c/o neck pain s/p MVC 03/14/2026, r/o radiculopathy, f/u 2 wks.” Translate it out loud, and tell us which part is NOT a diagnosis."
  }
 },
 "1::Bates Numbering and Organizing the File": {
  "p1": {
   "why": "Bates numbers give every page a permanent address, so any fact can be found in seconds.",
   "talk": "Bates numbering stamps every page with a unique, permanent number and a case prefix, and Dana's set runs from WHITFIELD 0001 to WHITFIELD 0066. The chronology, the summary, the demand and any rebuttal all cite those same numbers, like Exhibit E, WHITFIELD 0055, the page with Dr. Patel's causation opinion. The six boxes on the slide are the process: gather, keep originals, order, stamp, index and cite. And the rule underneath it all: once a page is numbered and cited, its number never changes, and anything that arrives later just gets the next numbers.",
   "walk": [
    "First, save the records exactly as received, and stamp a working copy. The originals stay untouched.",
    "Next, order the records by provider, then by date within each provider. That's the order they'll take in the packet.",
    "Then, stamp every page, blank pages included, with one prefix and one continuous sequence. A skipped page breaks the chain.",
    "After that, build a Bates index: provider, document, dates of service and page range. Riverside ED is 0001 to 0009, Harbor Spine's prior care is 0010 to 0011, and so on.",
    "Finally, name each file so the range shows, like “WHITFIELD 0060–0066 Bayside Pain Management.”"
   ],
   "ask": "Why do the 2025 Harbor Spine pages, 0010 and 0011, sit right before the 2026 ones instead of at the very front of the set?"
  },
  "p2": {
   "why": "Every cite in the file depends on the numbers staying put.",
   "talk": "Once your chronology and demand cite page 55, that page is page 55 for good. The practices on this slide protect that, and two of them also make the set much faster to work with.",
   "walk": [
    "First, make the PDF searchable with OCR, optical character recognition, so you can find words like “MVC,” “prior” or “history” in seconds.",
    "Next, check page counts. Harbor Spine's 2026 records are 0012 to 0038, which is 27 pages. Compare that with what the provider actually sent.",
    "Finally, the pitfall: re-stamping the set after you've cited it. Every cite in the chronology and the demand would point to the wrong page."
   ],
   "ask": "Your turn: Dr. Patel's causation opinion is on WHITFIELD 0055. Write the cite exactly as it'll appear in the demand, and tell us why “Dr. Patel's 04/20 note” isn't enough."
  }
 },
 "1::PHI, Minimum Necessary and Secure Handling": {
  "p1": {
   "why": "Dana's whole file is PHI, so every step you take with it is a privacy step.",
   "talk": "PHI, protected health information, is health information that identifies a person: name, date of birth, member ID, diagnoses, treatment and bills. “Minimum necessary” is HIPAA's rule that providers and health plans use and share only the PHI the purpose needs, and the firm applies the same idea to what it requests, stores and sends. Once records reach us, they're protected by the firm's duty of confidentiality, privacy laws and firm policy, so you handle them as PHI at every step. The slide splits it simply: on the left, what you do, like using the secure portal and checking every page before it leaves; on the right, what you don't, like personal email, printing at home or sending the unrelated Northgate exam.",
   "walk": [
    "First, request only the dates and records the claim needs. The attorney decides whether prior records are requested.",
    "Next, store records only in the CMS or the firm's secure drive, never on a personal device.",
    "Then, send records only through approved secure channels, to the right person, after you've confirmed the address.",
    "After that, before anything goes out, check every page for the wrong patient, unrelated treatment or extra identifiers like a Social Security number, and ask the attorney what to remove.",
    "Finally, if PHI goes to the wrong place, tell your supervisor or the attorney immediately. Never try to fix it quietly; reported fast, it can often be contained."
   ],
   "ask": "Which item in the Don't column do you think happens most often in a busy office?"
  },
  "p2": {
   "why": "Reporting a privacy mistake is never the wrong move; hiding one always is.",
   "talk": "Two decisions here aren't yours to make: what gets disclosed to an insurer, and what happens to a page that belongs to another patient. You catch it, log it and route it. And one habit that feels harmless is one of the easiest ways for PHI to leak.",
   "walk": [
    "First, what's disclosed to an insurer is the attorney's decision. You log the request and route it to Attorney Bennett.",
    "Next, if you find another patient's page in a provider's records, stop reading, set it aside and tell the attorney, so it can go back to the provider under firm procedure.",
    "Finally, the pitfall: emailing records to yourself “to work on tonight.” A personal inbox is a privacy breach waiting to happen."
   ],
   "ask": "Your turn: a Northgate Family Practice statement for a 05/02/2026 wellness exam is in Dana's file. Does it go in the demand packet? What do you do with it, and who confirms?"
  }
 },
 "1::Day-One Red Flags": {
  "p1": {
   "why": "Most problems in a demand were visible the day the file arrived, if someone looked.",
   "talk": "The eight icons on this slide are the red flags to look for on day one, and Dana's file has most of them. There's the date mismatch, 03/15 on the intake against 03/14 in the documents, and a 2025 low back strain on pages 10 and 11 that the intake calls “none really.” There's the 43-day gap from 05/14 to 06/26, with the reasons on pages 38 and 60, plus Bayside's bill that isn't itemized, Clearview's MRI listed twice and the unrelated Northgate exam. A red flag doesn't stop the work; it changes what you request, what you flag and who you tell. And bad facts are never hidden: they're flagged, cited and sent to the attorney, who decides how to address them.",
   "walk": [
    "First, check every core fact, the DOI, the names and the claim number, against the source documents.",
    "Next, compare the client's intake answers with the records, especially about prior injuries.",
    "Then, count the days between treatment dates and note any gap of 30 days or more, with its dates. Dana's is 43 days, 05/14 to 06/26/2026.",
    "After that, check every bill: itemized, related, after the DOI and not duplicated.",
    "Finally, write each flag and your action in the CMS note, and tell the attorney about anything that affects the claim."
   ],
   "ask": "Which of these eight flags do you think an adjuster would jump on first?"
  },
  "p2": {
   "why": "A prior injury found on day one is a strategy question; found first by the adjuster, it becomes a credibility problem.",
   "talk": "How you write a flag matters as much as finding it: facts and sources, never judgments. Timing matters too, because the earlier Attorney Bennett knows, the more room she has to decide how to handle it. After these three habits, it's your turn to find the flags yourself.",
   "walk": [
    "First, write flags as facts with sources: “Intake: prior back problems ‘none really’; Harbor Spine 01/08–01/29/2025, low back strain (pp. 10–11).” Not “the client lied,” just what each document says.",
    "Next, tell the attorney early. A prior injury you find on day one gives her time to plan; one the adjuster finds first makes the whole file look less credible.",
    "Finally, the pitfall: fixing a discrepancy quietly without noting it. Even when you're right about the DOI, the attorney needs to know the intake and the records disagree."
   ],
   "ask": "Open the Day 1 Skill Builder, File Intake & Records Audit, and audit Dana Whitfield's file against the documents: decide today's actions, write the request for Bayside's itemized bill, call the billing office and set up the demand work in the CMS. As you go, note which of these red flags are on her file and your first action for each."
  }
 }
});
