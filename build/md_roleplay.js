const ROLEPLAY_CATEGORIES = [
  {id:"client", icon:"🤝", label:"Client Communication", topics:[
    {id:"worth", label:"“What's My Case Worth?”", context:"Dana Whitfield calls after hearing the demand is being prepared and asks how much her case is worth and whether she'll get at least $100,000 because that's the policy limit. The Demand Specialist must explain what's happening and when, give no value or advice, and set a call with the attorney."},
    {id:"gapcall", label:"Asking About the Gap", context:"The chart shows no treatment from 05/14 to 06/26. The Demand Specialist calls Dana to confirm why she stopped (the chiropractor's note says childcare) and whether her symptoms continued — sensitively, without coaching her answers — so the attorney can address the gap in the demand."},
    {id:"impact", label:"The Client Impact Statement", context:"The Demand Specialist interviews Dana for her impact statement: what she couldn't do, for how long, and what still bothers her. The goal is specific, truthful examples in her own words — not adjectives, not exaggeration."},
    {id:"lowoffer", label:"“Why Is the Offer So Low?”", context:"Attorney Bennett told Dana about Keystone's $18,500 offer. Dana calls the Demand Specialist upset and asks whether she should take it or fire the insurance company. The Demand Specialist must acknowledge her, explain the next steps in the process, give no opinion on the offer, and route her decision questions to the attorney."}
  ]},
  {id:"adjuster", icon:"🛡", label:"Adjusters & Insurers", topics:[
    {id:"takeit", label:"$18,500 — “Take It or Leave It”", context:"Tom Reyes at Keystone calls to push the $18,500 offer and wants an answer today. The Demand Specialist must log it, confirm the offer and its terms in writing, route it to the attorney the same day, and not argue value or respond for the client."},
    {id:"priorrecords", label:"The 5-Year Prior Records Ask", context:"Keystone demands five years of Dana's prior medical records before it will re-evaluate. The Demand Specialist must get the request in writing, explain the attorney will respond on scope, and not send or promise any records."},
    {id:"paidbilled", label:"“We Only Consider What Was Paid”", context:"The adjuster says Keystone will only evaluate the $5,736.40 actually paid, not the $19,516.40 billed. The Demand Specialist must not argue the law, get the position in writing, and prepare the billed-vs-paid breakdown for the attorney."},
    {id:"deadline", label:"The Deadline Is Tomorrow", context:"The 30-day demand deadline is tomorrow and Keystone hasn't responded. The Demand Specialist calls to confirm receipt and the response date, documents the call, follows up in writing, and makes sure the attorney knows today."}
  ]},
  {id:"providers", icon:"🏥", label:"Providers, Records & Billing", topics:[
    {id:"itemized", label:"“We Only Send Balance Statements”", context:"Bayside Pain Management's billing office says it only sends balance-due statements. The Demand Specialist needs the itemized bill with dates of service, CPT codes and charges (and a billing affidavit if the attorney wants one), with a date it will be sent."},
    {id:"recordsfee", label:"The Records Fee and the 30-Day Wait", context:"A records department says the complete chart will take 30 days and asks for a fee before it releases anything. The Demand Specialist must confirm the HIPAA authorization is on file, ask what can be sent sooner, handle the fee through the firm's process, and calendar the follow-up."},
    {id:"lopcall", label:"“When Do We Get Paid?”", context:"Harbor Spine's billing manager, treating on a letter of protection, calls asking when they'll be paid and what the case is settling for. The Demand Specialist confirms the balance and the LOP, never discusses settlement amounts, and routes payment questions to the attorney and Case Manager."},
    {id:"wrongpatient", label:"Another Patient's Pages", context:"A records packet from a provider contains three pages about a different patient. The Demand Specialist must handle it as a privacy incident: stop using the pages, notify the provider and the firm's privacy contact per policy, and not share or keep them."}
  ]}
];

const ROLEPLAY_PERSONAS = [
  {id:"adjuster", label:"Keystone Mutual Adjuster", sub:"Polite / hard-line", desc:"Friendly but firm; leans on “company guidelines,” the gap, the prior low back history and paid amounts; moves only on documented facts and deadlines."},
  {id:"client", label:"Client", sub:"Worried / impatient", desc:"Hurting, tired of the process and worried about bills; may ask for a number, advice or a guarantee; needs honest next steps and dates."},
  {id:"vendor", label:"Provider Office Staff", sub:"Busy and procedural", desc:"Records or billing staff who follow their own rules; need the authorization, the patient identifiers and a clear written request before doing anything."}
];

const CRISIS_SCENARIO_SETS = {
  mdIntake1: [
    {id:"billing", title:"Bayside's Balance-Only Statement",
     setup:"The file has only a balance-due statement from Bayside Pain Management ($4,325.00, no dates of service or codes). You call the billing office for the itemized bill.",
     stakes:"Without the itemized bill, the ESI — the largest single charge — can't be itemized, and the demand waits.",
     script:`OPENING LINE (Carla Ruiz, Bayside billing, rushed): "Bayside billing, this is Carla. We sent your office a statement already — the balance is forty-three twenty-five."
FOLLOW-UP PRESSURE: "We don't do itemized for attorney accounts. The balance is the balance."
CURVEBALL: "Can you just tell me when the case is settling? Our office manager wants to know when we'll see the money."`,
     objective:{recommendation:"Confirm the patient (name, DOB, account), explain the firm needs an itemized statement with dates of service, CPT codes and charges for each visit (and a billing affidavit if the attorney requires one), point to the HIPAA authorization on file, get a send date and her direct contact, and don't discuss settlement timing or amounts.",
       risksTradeoffs:"Accepting the balance-only statement leaves the specials unverifiable; discussing settlement timing or amounts breaks confidentiality.",
       blufStatement:`"For the file we need Bayside's itemized statement — every date of service with its CPT code and charge — not just the balance. The HIPAA authorization is on file; can you send it by Wednesday, and who should I follow up with?"`}},
    {id:"providers", title:"Confirming the Provider List with Dana",
     setup:"Before you start the medsum, you call Dana to confirm every provider she saw since the collision and any earlier treatment to her neck or back. The intake summary says prior problems were “none really.”",
     stakes:"A provider left off the list means missing records and bills; an undisclosed prior injury surprises the attorney later.",
     script:`OPENING LINE (Dana, friendly but busy): "Hi, it's Dana. Marcus said someone new would be working on my demand — is something wrong?"
FOLLOW-UP PRESSURE: "I already told the intake person everything. Do we really have to go through this again?"
CURVEBALL: "Oh — I did go to a chiropractor once, last year, for my back after moving boxes. That doesn't count, right?"`,
     objective:{recommendation:"Explain your role and why you're calling, confirm each provider and date range from the list, ask open questions about anyone else she saw (urgent care, pharmacy, therapist), take down the 2025 chiropractic visit neutrally and tell her the attorney needs to know about it, and tell her what happens next and when.",
       risksTradeoffs:"Telling her a prior visit “doesn't count” or suggesting what to say shapes her account; skipping the call risks a missing provider.",
       blufStatement:`"You're not in trouble — I'm building your medical summary and I want every provider on it. Thank you for mentioning last year's chiropractor; I'll note it and let Attorney Bennett know."`}}
  ],
  mdChron2: [
    {id:"brief", title:"The Attorney's 60-Second Medical Briefing",
     setup:"Attorney Laura Bennett stops you before a meeting: “Give me Dana's medical story in one minute — and tell me anything that's going to hurt us.”",
     stakes:"The attorney values the case from what you say; leaving out the prior injury or the gap means she hears it first from the adjuster.",
     script:`OPENING LINE (Attorney Bennett, direct): "Sixty seconds on Whitfield. What happened medically, where is she now, and what's the ugly part?"
FOLLOW-UP PRESSURE: "Is the MRI finding a herniation? Can I say herniated disc in the demand?"
CURVEBALL: "Do we have a doctor who says it's from the crash, or am I guessing?"`,
     objective:{recommendation:"Give a clear timeline (ED same day → chiropractic 24 visits → MRI 03/30 C5-6 protrusion → ortho 04/20 → pain management and ESI 07/10 → MMI 08/21 with future ESIs), state the weaknesses plainly (2025 low back strain, 43-day gap and its reason), answer from the records (the radiologist says protrusion, not herniation; Dr. Patel's causation opinion is on p. 55), with page references.",
       risksTradeoffs:"Upgrading the diagnosis or hiding the weaknesses feels helpful now but damages credibility with the adjuster later.",
       blufStatement:`"Neck injury, C5-6 protrusion on MRI, one injection, MMI in August with two future injections at $7,800. Two weak spots: a 2025 low back strain and a 43-day gap explained by childcare. Dr. Patel ties it to the crash on page 55."`}},
    {id:"gapcall", title:"Asking Dana About the Gap",
     setup:"You need to confirm the reason for the gap between 05/14 and 06/26. The chiropractor's discharge note says childcare; the pain-management intake says her symptoms continued.",
     stakes:"The rebuttal to the adjuster depends on an accurate, documented reason — not a coached one.",
     script:`OPENING LINE (Dana, a little defensive): "Is this about why I stopped going? I know it looks bad."
FOLLOW-UP PRESSURE: "Should I just say I was still in pain the whole time? Is that what you need me to say?"
CURVEBALL: "My mom was in the hospital for three weeks. I didn't want to tell anyone about that."`,
     objective:{recommendation:"Reassure her, ask open questions, don't suggest answers, confirm the facts already in the records (childcare because her mother was hospitalized; symptoms continued), ask how to handle the personal detail respectfully, document the call and tell the attorney.",
       risksTradeoffs:"Telling her what to say is improper and can backfire; skipping the call leaves the gap unexplained.",
       blufStatement:`"Just tell me what happened in your own words — there's no right answer. The records already mention childcare; I only want to make sure we describe it accurately and respectfully."`}}
  ],
  mdBills3: [
    {id:"lop", title:"“When Do We Get Paid?”",
     setup:"Tasha Greene, Harbor Spine's billing manager, calls about the $5,760.00 letter-of-protection balance.",
     stakes:"Providers treating on an LOP are paid from the settlement; discussing the case value or promising payment dates creates problems.",
     script:`OPENING LINE (Tasha Greene, friendly but pushy): "Hi, it's Tasha at Harbor Spine. We've carried Dana Whitfield's balance since March. When are we getting paid?"
FOLLOW-UP PRESSURE: "Just ballpark it for me — what's the case settling for?"
CURVEBALL: "And while I have you, can you send us her MRI report? Our doctor wants it."`,
     objective:{recommendation:"Confirm the balance ($5,760.00, 24 visits 03/17–05/14/2026) and that the LOP is on file, explain the demand is in progress and the Case Manager handles payment at resolution, never discuss amounts or timing of settlement, and handle the MRI request through the proper records process (the provider can get it through channels/authorization — don't just send it).",
       risksTradeoffs:"Guessing a settlement or payment date creates an expectation the firm can't control; sending records casually is a PHI problem.",
       blufStatement:`"I can confirm we have your balance of $5,760.00 and the letter of protection. I can't discuss settlement, but Marcus Webb handles provider payments at resolution and will be in touch."`}},
    {id:"duplicate", title:"The Duplicate MRI Charge",
     setup:"Clearview Imaging's ledger lists the 03/30/2026 cervical MRI (CPT 72141, $2,400.00) twice. You call billing to confirm and get a corrected ledger.",
     stakes:"A duplicate in the specials overstates the demand and hurts credibility; the right balance is $1,020.00 after PIP.",
     script:`OPENING LINE (Clearview billing, neutral): "Clearview Imaging billing. What can I help you with?"
FOLLOW-UP PRESSURE: "The system shows two charges, so there were two charges."
CURVEBALL: "PIP paid thirteen-eighty on one of them. Do you want me to move it to the other one?"`,
     objective:{recommendation:"Identify the patient and account, point to the two identical lines (same date, CPT 72141, same amount, one MRI report), ask them to confirm it's a duplicate and send a corrected ledger showing one charge, the PIP payment and the $1,020.00 balance, and note the call.",
       risksTradeoffs:"Including both lines inflates the specials by $2,400.00; deleting the line without documentation leaves no audit trail.",
       blufStatement:`"Your ledger shows the 03/30 cervical MRI twice with the same code and amount, but there's one report. Can you confirm it's a duplicate and send a corrected ledger showing the PIP payment and a $1,020.00 balance?"`}}
  ],
  mdDemand4: [
    {id:"impact", title:"The Impact Statement Interview",
     setup:"You interview Dana for her client impact statement before the demand goes to the attorney.",
     stakes:"Specific, truthful examples persuade adjusters; exaggeration damages credibility.",
     script:`OPENING LINE (Dana, unsure): "I don't really know what you want me to say. It hurt?"
FOLLOW-UP PRESSURE: "Should I say I can't work at all? My friend said that gets more money."
CURVEBALL: "I stopped running my Saturday 5Ks. Is that even important?"`,
     objective:{recommendation:"Ask open, specific questions (daily tasks, work, family, sleep, hobbies, how long each limit lasted, what still bothers her), use her words, never suggest exaggeration, and confirm she'll review and sign the statement.",
       risksTradeoffs:"Leading questions or exaggeration make the statement unreliable; vague answers make it useless.",
       blufStatement:`"The best statement is specific and true. Tell me about a normal day in the first six weeks — what couldn't you do that you usually do?"`}},
    {id:"review", title:"The Attorney's Draft Review",
     setup:"Attorney Bennett is reviewing the draft demand and quizzes you on the numbers before she signs.",
     stakes:"One wrong figure in a demand undermines everything else in it.",
     script:`OPENING LINE (Attorney Bennett, crisp): "Walk me through the specials. The draft says nineteen-six-six-six — is that right?"
FOLLOW-UP PRESSURE: "Why isn't the wellness exam in there? She was in pain in May."
CURVEBALL: "What's our total economic number, and does the letter deal with the gap?"`,
     objective:{recommendation:"Correct the total to $19,516.40 and explain the error, explain why the 05/02 wellness exam is unrelated (routine annual exam, not accident treatment), give total economic damages $30,452.40 (past $19,516.40 + future $7,800.00 + wages $3,136.00), and flag that the gap needs a paragraph with the p. 38 and p. 60 cites.",
       risksTradeoffs:"Defending a wrong number or adding unrelated charges to inflate the specials costs credibility.",
       blufStatement:`"The draft total is wrong — it should be $19,516.40, and I've removed the unrelated wellness exam. Total economic damages are $30,452.40, and I've added a paragraph on the gap with the page cites."`}}
  ],
  mdPacket5: [
    {id:"takeit", title:"The $18,500 Phone Call",
     setup:"Tom Reyes calls about Keystone's letter: $18,500 to resolve Dana's claim, citing the gap, the 2025 low back history, 24 chiropractic visits and paid amounts.",
     stakes:"The offer must reach the attorney today; responding on the merits or for the client is not your call.",
     script:`OPENING LINE (Tom Reyes, friendly): "Hi, Tom Reyes at Keystone. You got our letter? Eighteen-five is a fair number with that gap and her back history."
FOLLOW-UP PRESSURE: "I need an answer by Friday or I'm closing my file."
CURVEBALL: "Between us — is she going to take it?"`,
     objective:{recommendation:"Thank him, confirm the offer amount and any deadline in writing, say you'll get it to Attorney Bennett today, don't argue the merits or speculate about the client, then log it and route it with a one-line summary.",
       risksTradeoffs:"Rejecting, countering or hinting at the client's view is unauthorized; ignoring the Friday deadline risks the file.",
       blufStatement:`"Thanks, Tom — I have the $18,500 offer and your Friday date. I'll get both to Attorney Bennett today, and she'll respond."`}},
    {id:"records", title:"The Prior-Records Push",
     setup:"Tom Reyes says Keystone won't re-evaluate until it gets five years of Dana's prior medical records.",
     stakes:"Disclosing more records than necessary is a privacy and strategy problem; the attorney decides the scope.",
     script:`OPENING LINE (Tom Reyes, firm): "We need five years of priors. All providers. Nothing moves until I have them."
FOLLOW-UP PRESSURE: "If you've got nothing to hide, just send the whole chart."
CURVEBALL: "Your client already admitted the chiropractor last year — so send me everything from that office."`,
     objective:{recommendation:"Ask for the request in writing (it came as a letter — confirm it), explain the attorney will respond on the scope, don't send or promise any records, calendar the follow-up, and route it to the attorney with the note that the known prior is the 2025 low back treatment.",
       risksTradeoffs:"Sending everything overshares PHI; refusing outright without routing stalls the claim.",
       blufStatement:`"I'll pass your request to Attorney Bennett today — she decides what records are appropriate to provide and will respond in writing."`}}
  ]
};
