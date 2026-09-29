/* Day 1 — spoken scripts for the Canva deck pages ("Day 1: Medical Summary / Chronology Overview"), one per page (see js/md-canva.js).
   say: one paragraph to read aloud · ask: an optional question for the room ("" when the page doesn't need one). */
window.CANVA_SCRIPTS = Object.assign(window.CANVA_SCRIPTS || {}, {
 "1:1": {
  "say": "Welcome to Day 1. Today we learn to read medical records the way a Demand Specialist does, and to turn them into the two tools behind every demand: the medical summary and the medical chronology.",
  "ask": ""
 },
 "1:2": {
  "say": "By the end of today, you'll be able to pull the key facts out of any medical record: the date of service, the provider, the complaint, the diagnosis, the imaging and the plan. You'll know the difference between a summary and a chronology, and you'll be able to tie each record to the accident, or set it aside when it isn't related. You'll learn to spot what's missing, like gaps in treatment or records we never received, and to report it to the legal team right away. And you'll keep old conditions separate from new injuries, in plain English, without guessing. Everything we build today feeds the demand letter, so accuracy matters more than speed.",
  "ask": "Who here has read a medical record before, and what was the most confusing part?"
 },
 "1:3": {
  "say": "Let's start with the two documents you'll produce on almost every file: the medical summary and the medical chronology. They sound alike, but they do very different jobs.",
  "ask": ""
 },
 "1:4": {
  "say": "When we prepare a demand, we're telling the client's medical story to an adjuster who has never met them. We tell it two ways. The summary tells the story in plain paragraphs, and the chronology proves it, visit by visit and date by date. You need both, because a story without proof gets discounted, and proof without a story doesn't persuade anyone.",
  "ask": ""
 },
 "1:5": {
  "say": "First, the medical summary: the narrative side of the client's medical story.",
  "ask": ""
 },
 "1:6": {
  "say": "A medical summary is a narrative. It takes hundreds of pages of records and condenses them into a short, readable story of the injury, the treatment, how the client progressed and what still hurts. It's interpretive only in the sense that we choose what matters and explain it; every sentence still has to come from the records. It stays big-picture, and it's organized by topic, like the neck injury, the course of treatment and the ongoing symptoms, rather than visit by visit. Think of it as the version you'd give someone who has five minutes.",
  "ask": ""
 },
 "1:7": {
  "say": "In the demand, the summary does the persuading. It explains how the crash caused the injury, shows how serious it was through the key imaging and treatment, and describes the symptoms that stayed and how they affect daily life. That's what supports general damages, the money for pain, suffering and emotional distress, and it's what makes the adjuster see a person instead of a claim number. In Dana Whitfield's file, the most important sentence is Dr. Patel's causation opinion at WHITFIELD 0055, so a good summary puts it front and center. We prepare the summary; what the case is worth is the attorney's call.",
  "ask": ""
 },
 "1:8": {
  "say": "Now the second tool: the medical chronology, the timeline that backs the story up.",
  "ask": ""
 },
 "1:9": {
  "say": "A chronology is a strict timeline of every relevant medical event, in date order, one entry per encounter. It's date-driven, so every entry starts with the date of service. It's objective, so we write what the record says, not what we think of it. It's detailed but concise, and it's comprehensive, so nothing relevant gets left out. And because everything sits in order, patterns jump out, like pain scores falling, a new referral, or a long stretch with no treatment at all.",
  "ask": "If a chronology is only facts, what makes one chronology better than another?"
 },
 "1:10": {
  "say": "The chronology is the proof. It shows when treatment started and that it continued, which helps prove causation, meaning the crash caused the injury. It exposes gaps and delays early, so the legal team can prepare an explanation before the adjuster finds them. It makes sure no visit gets left out, because a missing visit is a missing bill, and it's what the medical specials are checked against; on Dana's file, the related specials come to $19,516.40. It's also the reference the attorney reaches for while drafting arguments and negotiating.",
  "ask": ""
 },
 "1:11": {
  "say": "A few rules keep a chronology trustworthy. Keep entries in strict date order, use the same headings for every visit, and never merge two visits into one, even when they look alike. Summarize without changing the meaning: if the MRI says disc protrusion, we don't upgrade it to herniated disc, and that exact mistake shows up in the draft demand on Dana's file. Leave out personal opinions, irrelevant history and long quotes, and explain every abbreviation the first time you use it.",
  "ask": "Why do you think merging two visits into one entry is so risky?"
 },
 "1:12": {
  "say": "Here's the simplest way to hold both in your head. The summary is the narrative: it explains the injuries, tells the story, persuades, and supports general damages. The chronology is the data: it lists the visits, shows the structure, stays factual, and supports the medical specials and causation. The summary makes the claim, and the chronology proves every line of it. If a sentence in your summary can't be traced to an entry in your chronology, it doesn't belong in the summary.",
  "ask": "If you were the adjuster, which one would you read first, and why?"
 },
 "1:13": {
  "say": "Let's see how real firms put this together. The Meagher Law Office sample opens with liability, then lists the injury and treatment codes, the ICD-10 and CPT codes, before telling the treatment story provider by provider, in date order. It closes with a short table: each provider, the dates of service and the charges, with a total at the bottom. The narrative and the numbers sit side by side, which is the summary and the chronology working together.",
  "ask": ""
 },
 "1:14": {
  "say": "The Hess Law sample is built on headings: the facts of the incident, liability, prior and unrelated health conditions, the treatment summary, the diagnosis codes with each condition in plain English, and then the medical specials, stated as one total. Pay attention to the prior-conditions section. The letter deals with them head-on instead of hoping the adjuster won't ask. That matters for Dana, whose 2025 low back treatment at WHITFIELD 0010–0011 has to be flagged, not buried.",
  "ask": ""
 },
 "1:15": {
  "say": "The IMW sample shows another layout. It puts the key facts up front, like date of birth, the medical specials and the date of first treatment, then lists each provider with the number of treatments, the last treatment date and the prognosis. After that comes a history of complaints: each symptom, the doctor who noted it, and the date. Every firm formats differently, and you'll follow your attorney's template, but the building blocks are always the same.",
  "ask": "What do all three samples have in common, even though they look so different?"
 },
 "1:16": {
  "say": "Next, the types of medical records you'll see. Knowing what each one is for tells you what to pull from it.",
  "ask": ""
 },
 "1:17": {
  "say": "EMS reports come from the ambulance crew, like run sheets and paramedic notes, and they're the very first record of the injury, how it happened, the vital signs and what was done at the scene. Not every client has one: Dana went to Riverside Medical Center's emergency department by private car, and her husband drove, so her record starts at the hospital. Hospital and urgent care records cover the acute phase, the first hours and days, with the tests, medications, the doctor's impressions and the first treatment. Physical therapy and chiropractic records track recovery over time, through initial evaluations, SOAP notes, progress reports and a discharge summary. SOAP stands for Subjective, Objective, Assessment and Plan, and you'll see that format everywhere.",
  "ask": ""
 },
 "1:18": {
  "say": "Pain management records show treatments like medications and injections, and how the patient responded, usually with pain scores before and after. In Dana's file, the C5-6 injection on 07/10/2026 took her from 6/10 before to 2/10 after. Orthopedic records matter most for bone, joint and disc injuries, and they hold the surgical notes when surgery happens. Diagnostic imaging, like X-rays, CT scans and MRIs, is the objective evidence: it shows the injury without depending on what the patient says.",
  "ask": ""
 },
 "1:19": {
  "say": "Neurology records look at the nerves and the brain: concussions, numbness, tingling, and tests like EEGs, which record brain activity, and nerve conduction studies, which test how well a nerve carries signals. Mental health records, like therapy notes and psychological evaluations, document anxiety, trauma or depression caused by the incident, and they support emotional distress. Rehabilitation and occupational therapy records show what the client can't do at home or at work. Those are gold when we describe daily life in the demand.",
  "ask": ""
 },
 "1:20": {
  "say": "Last, the other relevant records: pharmacy records, specialist consults, and records from before the accident. Pre-existing records aren't the enemy. We need them to show what's old and what's new, and the defense will ask for them anyway, so it's always better that we find them first.",
  "ask": "Why would we want a client's medical records from before the accident?"
 },
 "1:21": {
  "say": "Now that we know the kinds of records, let's talk about what to pull out of each one. These are the data points that end up in every chronology entry.",
  "ask": ""
 },
 "1:22": {
  "say": "Start with the date of service, the exact day care was given. It builds the timeline, ties treatment to the incident and shows any gaps or delays. Then the provider and facility, who treated the client and where, because the demand cites them by name and a specialist's opinion carries weight. Then the chief complaint, the main reason for the visit, often in the patient's own words. At Dana's first visit, the Riverside emergency department on 03/14/2026, that's neck pain 7/10 and low back pain 5/10.",
  "ask": "Why does a complaint recorded in the patient's own words, on the day of the accident, carry so much weight?"
 },
 "1:23": {
  "say": "The history of present illness, or HPI, tells how the injury happened and how it has developed, and it's often where the accident is described in the patient's own words, which helps with causation. The review of systems, or ROS, is a checklist of symptoms across the whole body; it shows the provider was thorough and can surface symptoms nobody else mentioned. The physical exam is objective: range of motion, swelling, tenderness and nerve checks. At Dana's first chiropractic exam on 03/17/2026, her cervical range of motion was reduced 40%, with tenderness at C5–C7. Findings like that are hard to argue with.",
  "ask": ""
 },
 "1:24": {
  "say": "Imaging confirms the injury with pictures, and we report the radiologist's impression, not our own reading of the scan. Dana's MRI on 03/30/2026 showed a 3 mm central disc protrusion at C5-6. The diagnosis is the provider's formal label for the condition, usually with an ICD-10 code, the standard diagnosis code that also shows up on the bill. The recommendation or plan tells us what comes next, like therapy, injections or a referral, and that's what supports future medical care in the demand.",
  "ask": "Why do we copy the diagnosis word for word instead of putting it in our own words?"
 },
 "1:25": {
  "say": "Next, a question you'll ask of every single record: is this related to the accident, or not?",
  "ask": ""
 },
 "1:26": {
  "say": "For every record, we're confirming one thing: is this treatment connected to the accident? First, check the date of service: care soon after the incident is usually related, a delay needs an explanation in the notes, and anything dated before the incident is pre-existing. Next, check that the chief complaint and the diagnosis match the injuries we're claiming, and separate out anything unrelated. Then look for the accident in the provider's own words; Bayside Pain Management records Dana's neck pain “since the MVC of 03/14/2026,” and MVC means motor vehicle collision. A record that fails these checks, like Dana's 05/02/2026 wellness exam at Northgate Family Practice, stays out of the injury story and out of the specials.",
  "ask": "If a record is dated three weeks after the accident and never mentions it, what would you do next?"
 },
 "1:27": {
  "say": "Next, Duties Under Duress: how we show what the injury did to the client's everyday life.",
  "ask": ""
 },
 "1:28": {
  "say": "Duties Under Duress shows how the injuries affect the client's ability to handle everyday tasks, their job and their personal responsibilities. It illustrates functional limitations, supports non-economic damages, backs up causation and continuity, and gives the attorney a stronger settlement argument, all through a structured, factual narrative. In short, it turns medical findings into real-world consequences an adjuster can picture. A reduced range of motion is a medical finding; not being able to turn your head to check your blind spot, which Dana couldn't do for six weeks, is a duty under duress.",
  "ask": ""
 },
 "1:29": {
  "say": "We identify these duties in four steps. First, we learn the client's baseline: what a normal week looked like before the accident at home, at work and in their free time. Next, we collect what changed, from the client's own account, the medical records and the therapy notes. Then we sort the affected tasks into domestic, household, work and other personal duties. Finally, for each task, we write down why it's hard: pain, limited strength or motion, trouble focusing, anxiety, or fatigue. Dana's impact statement says that for six weeks she couldn't lift her 3-year-old son, and that's a caregiving duty we'd pair with the neck findings in her records.",
  "ask": "Think about your own typical day. Which three tasks would a neck injury make hardest?"
 },
 "1:30": {
  "say": "Next, loss of enjoyment of life: not the pain itself, but the parts of life the injury took away.",
  "ask": ""
 },
 "1:31": {
  "say": "Loss of enjoyment of life, sometimes called hedonic damages, compensates the client for losing the ability to enjoy the activities and pleasures they had before. It's about lifestyle, not just pain or disability. It's part of compensatory damages, which aim to put the person back, as far as money can, where they were before the injury. How it's labeled depends on the jurisdiction: some fold it into general pain and suffering, some treat it as its own category, and some have statutes on it. That's a legal question, so the attorney decides how it's framed; our job is to gather the facts that support it.",
  "ask": ""
 },
 "1:32": {
  "say": "To prove it, there has to be a measurable change in lifestyle. The evidence usually comes from the client's own account, friends and family who noticed the change, medical records showing permanent impairment or chronic pain, and things like photos, videos or a journal. There's no formula for its value; severity, permanence, age, lifestyle impact and credibility all play a part. Valuation is the attorney's call, so what we contribute is clear, documented before-and-after facts.",
  "ask": ""
 },
 "1:33": {
  "say": "These examples show what we're listening for: the runner who can't run anymore, the parent who can't lift their child, the musician who loses fine motor control. Dana fits two of them. She stopped her Saturday 5K runs, and for six weeks she couldn't lift her 3-year-old son. With catastrophic injuries, like paralysis, amputation, severe brain injury or loss of sight or hearing, this part of the claim becomes enormous.",
  "ask": "What questions would you ask a client to find out what they've stopped doing since the accident?"
 },
 "1:34": {
  "say": "In the demand, this section shows how the injury changed the client's life, makes them human to the reader, and gives the attorney solid support when valuing non-economic damages. Unlike a formal complaint filed in court, a demand letter can tell the story. We use before-and-after comparisons and specific, real examples, so the adjuster or defense counsel can actually picture the loss. “She stopped her Saturday 5K runs” lands much harder than “plaintiff's activities are limited.”",
  "ask": ""
 },
 "1:35": {
  "say": "Next, impairment ratings: a number that puts permanent damage into objective terms.",
  "ask": ""
 },
 "1:36": {
  "say": "An impairment rating, or IR, measures the permanent loss of function from an injury, usually as a percentage. It's different from temporary restrictions; it measures what's expected to last, like lost range of motion, lost strength, numbness or chronic pain. Most are calculated with a standard reference, the AMA Guides, short for the American Medical Association's Guides to the Evaluation of Permanent Impairment. Physicians issue them, and some physical therapists and chiropractors do too.",
  "ask": "Why would an adjuster take a percentage more seriously than the words “limited motion”?"
 },
 "1:37": {
  "say": "Impairment ratings can turn up in a few places, so we read with an eye out for them. Physical therapy records document functional limits and sometimes give a number. Chiropractic records note range-of-motion limits, spinal restrictions or chronic pain, and some include a rating. The most formal ratings come from physicians' expert reports, based on objective testing and the standard guides, especially for severe or permanent injuries. Wherever you find one, flag it for the attorney.",
  "ask": ""
 },
 "1:38": {
  "say": "Why does a rating matter so much? It gives objective support to loss of enjoyment of life and to pain and suffering, which otherwise rest mostly on what the client tells us. It also helps project future needs, like ongoing care, therapy or vocational help. In the demand, the rating goes in as an exhibit and gets referenced in the narrative to describe the limitation. We never turn it into a dollar figure ourselves; the demand amount is the attorney's decision.",
  "ask": ""
 },
 "1:39": {
  "say": "A few tips. Some courts and insurers prefer ratings issued by a physician, so if the only rating comes from a PT or a chiropractor, flag that for the attorney; it can still be persuasive when it's objectively documented. Always put the percentage in plain terms, like “10% lumbar spine impairment limits lifting over 15 lbs.” Pair it with the client's lifestyle examples, pain descriptions and medical records, so the number has a story behind it. And comparing the injury with a typical recovery gives the attorney something useful in negotiation.",
  "ask": ""
 },
 "1:40": {
  "say": "Here's what that sounds like in a finished demand. The sample states a 12% permanent impairment to the right shoulder, confirmed by range-of-motion and strength testing at the final physical therapy evaluation. Then it explains right away what that means in real life: no overhead lifting, no recreational basketball, trouble with household chores. That's the pattern to follow: the number, where it came from, and what it takes away from the person.",
  "ask": ""
 },
 "1:41": {
  "say": "Next, gaps in treatment. It's one of the first things an adjuster looks for, so it has to be one of the first things we look for too.",
  "ask": ""
 },
 "1:42": {
  "say": "A gap in treatment is a stretch of time when the client got no care for the injury. Gaps happen for real reasons, like insurance delays, miscommunication or logistics, but an unexplained gap lets the defense say the client got better. To find them, review every visit, therapy session, hospital stay, imaging study and prescription, and compare the spacing with what's normal for that injury. Then log the start and end: in the example, the last PT visit was 03/10/2025 and the next was 04/05/2025, so the days without care ran from March 11 through April 4. Dana's file has a 43-day gap, from 05/14/2026 to 06/26/2026.",
  "ask": "How long does a break have to be before you'd call it a gap worth flagging?"
 },
 "1:43": {
  "say": "Once we find a gap, it goes into the chronological narrative, not into a footnote. If the records explain it, like an insurance authorization delay, travel or missed appointments, we include the reason. An unexplained gap hurts credibility, so we never leave one sitting there silently. And we make sure the attorney and the rest of the legal team know about every gap, because some will need an explanation in the demand or at a deposition, and that strategy is the attorney's call.",
  "ask": ""
 },
 "1:44": {
  "say": "We explain gaps whenever the records let us, and we show that the symptoms continued during the gap. The defense will argue that a gap means a lesser injury, so documentation is our protection. In the sample demand paragraph, treatment paused from March 11 through April 4, 2025, because of an insurance authorization delay, and the plaintiff kept having pain until therapy resumed on April 5. Dana's gap is explained the same way, by what her records say: recommended care was declined because of childcare, at WHITFIELD 0038, and her neck symptoms continued and worsened after therapy stopped, at WHITFIELD 0060.",
  "ask": "Why is “the pain continued during the gap” just as important as the reason for the gap?"
 },
 "1:45": {
  "say": "Now let's go deeper into extraction of information: the skills that make you fast and accurate in a big stack of records.",
  "ask": ""
 },
 "1:46": {
  "say": "Before we read records, it helps to know which body parts come up most after a motor vehicle accident, or MVA, because those are the words you'll be scanning for. In Dana's rear-end collision, she complained of neck and low back pain at the scene.",
  "ask": ""
 },
 "1:47": {
  "say": "Records are written in medical shorthand, so learning the common terms and abbreviations is half the job. When you hit one you don't know, look it up and explain it in plain English in your summary; never guess.",
  "ask": ""
 },
 "1:48": {
  "say": "Understanding medical records is the foundation for everything else today. Records document the client's health history, their treatment and the care they received. When you know how a record is put together, you know where each fact lives, and your extraction becomes accurate, organized and meaningful instead of a pile of copied notes.",
  "ask": ""
 },
 "1:49": {
  "say": "Most records share the same building blocks. Demographics, like name, age and contact details, get checked first, because a wrong name or date of birth can mean you're reading someone else's record. The problem list shows current and past conditions, and it's often where pre-existing issues first show up. The medication list shows what the client takes and how often, and the visit notes carry the diagnoses, test results and plans for each appointment.",
  "ask": "What could go wrong if you didn't notice a record had the wrong date of birth on it?"
 },
 "1:50": {
  "say": "Imaging and test reports usually sort results into normal and abnormal, and the abnormal findings are the ones we need. Surgical and hospital records cover procedures, admissions and discharge summaries. Billing information carries two kinds of codes: ICD-10 codes describe the diagnosis, and CPT codes describe the procedure. For example, Dana's C5-6 injection was billed under CPT 62321, and that code is how we match the bill to the procedure note.",
  "ask": "Why do we check that the code on the bill matches the procedure in the record?"
 },
 "1:51": {
  "say": "Records and bills each have their own checklist. For records, build a timeline first, highlight the key sections, learn the abbreviations, look for cause-and-effect statements that tie symptoms to the accident, and make sure every treatment matches a diagnosis. For bills, verify the patient details, match each date of service to a record, understand the codes, check the charges and payments, and note any adjustments or denials. Keep notes that cross-reference each bill to its record. That's how you catch problems like Clearview's ledger listing the same MRI twice.",
  "ask": ""
 },
 "1:52": {
  "say": "Next, what to do when records or bills are missing, which happens on almost every file.",
  "ask": ""
 },
 "1:53": {
  "say": "Complete documentation is what makes the medical summary accurate, the timeline solid and the damages provable. A missing record leaves a hole in the story, and a missing bill can leave money out of the specials. Either one gives the defense a chance to question credibility. On Dana's file, Bayside Pain Management first sent only a balance-due statement, and the demand needs the itemized bill with CPT codes.",
  "ask": ""
 },
 "1:54": {
  "say": "Missing records usually announce themselves. Providers mention prior visits, labs, imaging or referrals, like “Patient referred to orthopedic clinic for further evaluation,” and every one of those is a document that should be in the file. Compare each reference with what you actually received: office notes, imaging and lab reports, bills and therapy sessions. For Dana, Dr. Patel's referral to Bayside Pain Management at WHITFIELD 0059 tells us Bayside's records and bills have to be in the file. Keep a log of each missing item with the date, provider and type of document, and tell the legal team right away.",
  "ask": "Where in a record would you look for clues that another record exists?"
 },
 "1:55": {
  "say": "These habits keep a record set clean. Organize everything chronologically, include only relevant records, cross-check dates and facts, and summarize concisely. Keep pre-existing conditions separate: Dana's 2025 low back records at WHITFIELD 0010–0011 get included and flagged, never mixed in with the accident injuries and never buried. And don't assume facts, don't skip treatments or gaps, and don't paste in long verbatim excerpts when a clear summary will do.",
  "ask": "Why do we keep pre-existing conditions in the file and flag them, instead of just leaving them out?"
 },
 "1:56": {
  "say": "When something's missing, tell the legal team right away, with a list that includes the provider name, the date of service and the type of document. They'll request it or decide whether other evidence can fill the hole. Then track every request: when it went out, when you followed up and whether it arrived. That log is what lets you say with confidence that the final summary is complete and defensible.",
  "ask": ""
 },
 "1:57": {
  "say": "If a record is still missing when you write, keep the narrative consistent and say so without guessing, like “The record references a follow-up visit on 03/15/25 with Dr. Lee; those records were not provided as of this summary.” Then support the damages with what you do have, linking the available records to show that treatment continued. Whether a sentence about missing records goes into the demand itself is the attorney's call, so flag it and let the attorney decide. What we never do is fill a hole with an assumption.",
  "ask": "Why is it better to say a record wasn't provided than to describe what it probably says?"
 },
 "1:58": {
  "say": "Last section today: two calculations you'll do on almost every file, the client's mileage to treatment and the client's age at the date of loss.",
  "ask": ""
 },
 "1:59": {
  "say": "Mileage to and from treatment is a real out-of-pocket cost, so we calculate it carefully. Get the client's address and each provider's address, find the distance, and double it for a round trip. Count the visits to that provider, then multiply the round-trip miles by the number of visits, and multiply that by the mileage rate. Use the current state or federal rate your firm uses, like the IRS standard mileage rate for medical purposes. Work provider by provider, so every mile ties back to a visit in the chronology.",
  "ask": "If a client drove 12 miles each way to therapy for 10 visits, how many miles would you claim before applying the rate?"
 },
 "1:60": {
  "say": "The client's age at the date of loss goes into every demand. Take the date of birth and the date of loss and run them through an age calculator, like the one at calculator.net, then double-check the result. Dana was born 01/09/1984 and hurt on 03/14/2026, so she was 42. Age matters because it affects future damages, life expectancy and loss of enjoyment of life, which the attorney weighs when valuing the claim.",
  "ask": ""
 },
 "1:61": {
  "say": "That's Day 1. You now know the difference between a summary and a chronology, what to pull from every record, how to tie records to the accident, and how to handle gaps, impairment ratings and missing documents. Everything you build feeds the attorney's demand, so accuracy is the whole job. Next, we'll apply all of this to Dana Whitfield's file.",
  "ask": ""
 }
});
