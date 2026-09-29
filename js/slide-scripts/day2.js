/* Day 2 — hand-written spoken scripts, one per slide (see slideScript() in build/slide_script_engine.js).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "2::Chronology vs Summary: Two Tools, One Story": {
  "p1": {
   "why": "You'll build two documents from Dana's records, and knowing which one does which job saves you hours later.",
   "talk": "The medical chronology is the complete record: every encounter, in date order, one row per visit, each with its page. The medical summary, the medsum, is a short narrative of a few pages that tells the story of the injury. On the left of this slide is the chronology: complete, routine visits included, and it's your working tool. On the right is the summary: selective, organized by topic, and it feeds the injury section of the demand. What they share is the important part: both are neutral, and every fact points to a Bates page. And the order matters: the chronology comes first, because the summary is only as good as the chronology underneath it.",
   "walk": [
    "First, open the firm's chronology template, TP01, next to the Bates-numbered records, WHITFIELD 0001 through 0066. Starting from the template every time means every chronology in the office reads the same way.",
    "Next, fill one row per encounter as you read, in date order. You write the row while the page is open in front of you, not later from memory.",
    "Then, once the chronology is complete and checked, write the summary from it using TP02. You're writing from the table, not from your memory of the records.",
    "Finally, send both to Attorney Bennett together. Once she approves them, they become Exhibit C of Dana's demand packet, so Keystone's adjuster will read them too."
   ],
   "ask": "Why do you think we build the chronology first, when the summary is the one most people actually read?"
  },
  "p2": {
   "why": "If a stranger can't check every fact in a few minutes, the document isn't finished.",
   "talk": "That stranger is real. It's Tom Reyes, Keystone's adjuster, with the same pages on his desk. He'll check your dates and your quotes against the records, and one fact that doesn't match makes him doubt the rest. So everything on this slide is about making the two documents agree with the records, and with each other.",
   "walk": [
    "First, write so a stranger could check every fact in minutes: a date, a provider, the provider's words and a page, every time. That's exactly the test the adjuster applies.",
    "Next, use the same dates, names and terms in both documents. If the chronology says “Dr. Anita Patel, Summit Orthopedic Associates” and “disc protrusion,” the summary says exactly the same.",
    "Finally, the pitfall: writing the summary from your memory of the records. Without the chronology under it, facts get blended, numbers get rounded and cites go missing, so Dana's 24 Harbor Spine visits turn into “about twenty.”"
   ],
   "ask": "Your turn: Keystone's adjuster asks, “When did Dana's arm symptoms start?” Which document answers faster, the chronology or the summary, and why? Then use it: find the first visit where the arm shows up, and give me the page."
  }
 },
 "2::Building the Chronology: One Row per Encounter": {
  "p1": {
   "why": "Every visit gets its own row, and every row answers the same five questions.",
   "talk": "The table on this slide is the chronology's skeleton. The columns answer when, who, what kind of visit, what the record says and where it says it, and the last column is the flag, which for most rows is plain “Routine entry.” Look at Dana's example on the right: the 03/31/2026 re-evaluation at Harbor Spine, neck 5/10, low back 3/10, back to work 04/03/2026 with no lifting over 15 pounds, page WHITFIELD 0026. One more rule: rows go in strict date order across all providers, not grouped by provider. So the 03/30/2026 MRI comes before Harbor Spine's 03/31/2026 re-evaluation, even though they're different offices.",
   "walk": [
    "First, enter the date of service, the day the visit actually happened. Not the date the record was printed, faxed or received; those dates are all over the records and they'll trip you up.",
    "Next, name the provider the same way every time, like “Dr. Anita Patel, Summit Orthopedic Associates.” If the name changes from row to row, the reader wonders whether it's a different doctor.",
    "Then, summarize the complaints, findings, diagnosis, plan and work status, in the provider's words. Work status matters more than it looks, because it supports the wage claim later.",
    "After that, add the Bates page: the range for the visit, and the exact page for any key sentence. Dr. Patel's consult runs pages 52 to 55, but her causation sentence is on page 55, and that's the page the attorney needs.",
    "Finally, choose the flag from the course list. Most rows are “Routine entry,” and that's exactly right."
   ],
   "ask": "What's the difference between the date of service and the date a record was faxed, and what goes wrong if you mix them up?"
  },
  "p2": {
   "why": "The chronology shows the whole medical picture, including the parts nobody wants to see.",
   "talk": "Two things on this slide surprise new Demand Specialists. Records from before the accident belong in the chronology too, and routine visits aren't skipped just because they're routine. The pitfall shows what happens when you sort the wrong way.",
   "walk": [
    "First, prior records go in the chronology too, in date order and flagged. Dana's 2025 Harbor Spine visits, pages 10 and 11, sit at the top, before the DOI of 03/14/2026.",
    "Next, all 24 Harbor Spine visits get a row. If the firm's template lets you group routine therapy visits, the grouped row still lists every single date and the page range.",
    "Finally, the pitfall: sorting by provider instead of by date. Put all of Harbor Spine together and the recovery story disappears, and so does the 43-day gap between 05/14 and 06/26/2026."
   ],
   "ask": "Your turn: write the chronology row for Dana's 03/30/2026 MRI: date, provider, visit type, summary, page and flag. Keep the radiologist's words exactly."
  }
 },
 "2::Writing Entries in the Provider's Words": {
  "p1": {
   "why": "One changed word can change the claim, so you write what the provider wrote.",
   "talk": "The chronology and the summary report what the records say, not what you think they mean or what would help the case. On the left of this slide are phrases in someone's own words, like “herniated disc at C5-6” or “she quit therapy.” On the right is what the record actually says, with a page: a “3 mm central disc protrusion at C5-6,” and a note that Dana couldn't continue because of childcare and was discharged, improved. Every left-hand phrase sounds close enough, and every one of them is wrong in a way an adjuster will notice. So key findings and opinions get quoted exactly, in quotation marks, with the page, and routine details get described plainly.",
   "walk": [
    "First, copy diagnoses, imaging impressions, causation opinions and future-care recommendations word for word. Those are the sentences the attorney and the adjuster will fight over.",
    "Next, keep the qualifiers. “Up to,” “if symptoms recur,” “intermittent” and “improved” are small words that carry a lot of weight.",
    "Then, say who said it. When Bayside writes that Dana has had neck pain “since the MVC of 03/14/2026,” that's what Dana reported, not a finding by the doctor.",
    "After that, add no adjectives the provider didn't use. No “severe,” no “devastating,” no “excruciating,” unless it's in the record.",
    "Finally, check each quotation against the page before you move on. It takes seconds now and protects the whole document later."
   ],
   "ask": "Look at the left-hand column. Which of those five phrases would do the most damage if it reached the adjuster, and why?"
  },
  "p2": {
   "why": "The adjuster has the same pages, so one overstatement makes every other line suspect.",
   "talk": "This slide is about the hard cases: pages you can't read, findings that come back negative, and the temptation to make the wording a little stronger for the demand. The rule is the same for all three. Report what's on the page, and flag what isn't clear.",
   "walk": [
    "First, if a record is unclear or illegible, write “[illegible]” or quote the unclear part and flag it. Don't fill in what you think it probably says.",
    "Next, negative findings belong too. The ED's CT showed no acute fracture, pages 1 to 9, and that goes in like any other finding.",
    "Finally, the pitfall: “improving” the wording for the demand. Tom Reyes at Keystone has the same pages you do, and once he catches one overstatement, he stops trusting the rest."
   ],
   "ask": "Your turn: a draft entry says “Dana quit therapy against advice on 05/14.” Open page 38. What does it actually support, and how do you rewrite the entry?"
  }
 },
 "2::Pain Scores, Objective Findings and the Recovery Story": {
  "p1": {
   "why": "Pain scores tracked over time tell the story of the injury, and objective findings back that story up.",
   "talk": "A pain score, zero to ten, is subjective: it's what the patient reports. One number on its own doesn't say much, but line them up by date and they show the recovery story. Objective findings are different: range of motion, tenderness, imaging and exam findings, the things the provider measured or saw. The table on this slide puts both together for Dana. Her neck pain starts at 7/10 in the ED, falls to 4/10 by the end of therapy on 05/14/2026, comes back to 6/10 with right-arm tingling at Bayside on 06/26, drops to 2/10 after the injection, and is 3/10, intermittent, at MMI on 08/21/2026. The low back is its own story: 5/10 at the start, 2/10 by 05/14, and no later score recorded.",
   "walk": [
    "First, pull every pain score with its body part, its date and its page. A score without a body part is useless, because Dana's neck and low back hurt differently.",
    "Next, keep each body part in its own column. The neck and the low back tell different stories, and blending them hides both.",
    "Then, leave a cell blank, just a dash, when no score is recorded. Never carry the last number forward; that invents a score the provider never wrote.",
    "After that, note the objective findings next to the scores: on 03/17/2026, neck range of motion reduced 40% and tenderness from C5 to C7, plus the imaging and the work restrictions.",
    "Finally, sum up the trend in one neutral sentence, with cites. For Dana's neck: 7/10 in the ED, 4/10 at the end of therapy, 6/10 after the break in care, 2/10 after the injection and 3/10, intermittent, at MMI, each with its page."
   ],
   "ask": "If we drew Dana's neck scores as a line on the board, where would an adjuster put his finger first?"
  },
  "p2": {
   "why": "Record the good news as faithfully as the bad; the story only works if it's the whole story.",
   "talk": "This slide is about honesty in the numbers. What changes matters as much as the score, improvement belongs in the record just like worsening, and the words you use for pain have to match what the provider wrote.",
   "walk": [
    "First, watch what changes, not just the numbers. Pain radiating to the shoulder on 03/17, then to the arm on 04/20, then tingling on 06/26 tells the attorney something a single number can't.",
    "Next, record improvement as faithfully as worsening. Dana's low back at 2/10 by 05/14/2026 is part of the story, and leaving it out would make the summary look slanted.",
    "Finally, the pitfall: calling pain “constant” or “severe” when the record says 3/10, intermittent. That's the kind of line the adjuster quotes right back at us."
   ],
   "ask": "Your turn: Dana's neck pain was 4/10 on 05/14/2026 and 6/10 on 06/26/2026. Describe that change in one neutral sentence, and name the two pages that explain it."
  }
 },
 "2::Flag: Prior Injuries": {
  "p1": {
   "why": "A prior injury is always included and flagged, because the insurer will find it anyway.",
   "talk": "A prior injury is any injury, treatment or complaint involving the same body part before the date of incident. The slide puts Dana's before and after side by side. On the left: three Harbor Spine visits in January 2025 for a low back strain after lifting boxes, and she was released. On the right: everything from 03/14/2026 onward, for the neck and the low back. Insurers look for prior care through claims databases and prior-records requests, so the attorney needs to hear about it from us first. And whether it matters, whether it had resolved, was unrelated or was made worse by the crash, what's called an aggravation, is a question for the doctors and the attorney, not for the chronology.",
   "walk": [
    "First, put prior records in the chronology in date order, before the DOI, flagged “Prior injury / pre-existing.” For Dana, that's pages 10 and 11, from 01/08 to 01/29/2025.",
    "Next, record the facts: the dates, the body part, the cause, the number of visits and the outcome. Dana's are a low back strain from lifting boxes, three visits, released.",
    "Then, compare the body parts. The 2025 strain was the low back, and after the crash she complained of the neck and the low back, so the overlap is the low back.",
    "After that, note any conflict between the intake and the records neutrally, and cite both. Not “she lied,” but “the intake and the records differ.”",
    "Finally, give prior history its own paragraph in the medical summary, and tell Attorney Bennett directly."
   ],
   "ask": "Why is it better for the attorney to hear about the 2025 strain from us than from Keystone?"
  },
  "p2": {
   "why": "Hiding a prior injury costs more credibility than the injury ever could.",
   "talk": "Prior history turns up in places you don't expect, so you look for it everywhere, and when a provider comments on the earlier condition, the exact words matter. Keystone raises this exact history when it answers the demand, so what you write now is what the attorney works from later.",
   "walk": [
    "First, quote any provider comment about the earlier condition exactly, with its page.",
    "Next, look for prior history everywhere: past medical history sections, intake questionnaires, the ED history and pharmacy records.",
    "Finally, the pitfall: leaving pages 10 and 11 out because “it was a different problem.” That's the attorney's call, not ours, and hiding it costs credibility."
   ],
   "ask": "Your turn: Dana's intake says “none really, maybe a strain a while back,” and Harbor Spine's records show three visits for a low back strain in January 2025. Write the sentence for the medical summary, then tell me what you'd say to Attorney Bennett."
  }
 },
 "2::Flag: Gaps in Treatment and Missed Appointments": {
  "p1": {
   "why": "Adjusters use gaps to argue the client had healed, so you find every gap first and report it straight.",
   "talk": "A gap in treatment is a break in care, and on this course that means 30 or more days between encounters. Missed and cancelled appointments raise the same argument on a smaller scale. The six steps on the slide are the whole method: measure, spot anything 30 days or more, find the why, check for no-shows, flag and cite, and tell the attorney. For Dana, the gap is 05/14 to 06/26/2026, 43 days, and the no-show check comes back clean: the plan was three visits a week for eight weeks, and she made 24 of 24. We don't explain a gap away; we report the dates and the reason the records give, with the pages.",
   "walk": [
    "First, count the days between each encounter and the next. From 05/14 to 06/26, there are 17 days left in May plus 26 in June, so 43 days.",
    "Next, for every interval of 30 days or more, read the last note before it and the first note after it. That's where the reason usually is.",
    "Then, record the reasons the records give. Page 38 says Dana couldn't continue because of childcare, since her mother, who watched her son, was hospitalized; page 60 says her symptoms continued and got worse after she stopped therapy.",
    "After that, flag the row that ends the gap and name both dates: “Gap: 43 days since 05/14/2026 (pp. 38, 60).”",
    "Finally, give the gap its own paragraph in the medical summary."
   ],
   "ask": "Why do the reasons have to come from the records, and not from what we think probably happened?"
  },
  "p2": {
   "why": "Anyone can find a gap in the dates, so the attorney needs to see it first.",
   "talk": "These practices are about being thorough and honest. You measure every interval, not just the obvious one. The reasons come from the records, or from the client through the attorney. And the gap never leaves the summary just because it hurts.",
   "walk": [
    "First, measure every interval, not just the obvious one: 07/10 to 08/21/2026 is 42 days. Note it, note whether the records show it was a planned follow-up, and let the attorney decide how to present it.",
    "Next, reasons must come from the records, or from the client through the attorney. Never from your own guess.",
    "Finally, the pitfall: leaving the gap out of the summary because it's “bad.” Keystone will find it in the dates in a minute, and Attorney Bennett needs to address it first."
   ],
   "ask": "Your turn: look at that second interval, from the 07/10/2026 injection to Dr. Patel's 08/21/2026 follow-up. Is it the same kind of gap as 05/14 to 06/26? Write the note for it, and tell me who decides how it's presented."
  }
 },
 "2::Flag: Causation Opinions and Objective Findings": {
  "p1": {
   "why": "Adjusters give the most weight to what a test showed and what a doctor concluded, so you flag both, word for word.",
   "talk": "The slide splits Dana's file in two. On the left is what the patient reports: pain scores, radiating pain, tingling, her history and the limits she describes. On the right is what the provider finds: the MRI's 3 mm central disc protrusion at C5-6, neck range of motion reduced 40%, tenderness from C5 to C7, and the CT with no fracture. Those are objective diagnostic findings, and adjusters give them the most weight. Then there's the causation opinion, a doctor's opinion that the crash caused the injury, and Dr. Patel's is the key sentence in Dana's file: “within a reasonable degree of medical probability, the C5-6 injury is causally related to the 03/14/2026 MVC,” on page 55. But a patient's history is not a causation opinion: “since the MVC” in Bayside's note on page 60 just records what Dana said.",
   "walk": [
    "First, flag each imaging result and measured exam finding “Objective diagnostic finding,” with the page. The MRI impression on page 41 is the big one.",
    "Next, record negative findings too. The CT with no acute fracture, pages 1 to 9, is part of the picture.",
    "Then, quote a causation opinion word for word, with the doctor's name, the date and the page, and flag it “Causation opinion.” For Dana, that's Dr. Anita Patel, 04/20/2026, page 55.",
    "After that, tell the attorney where the causation opinion is, and if an injury has no causation opinion, say that too. A missing opinion is information the attorney needs.",
    "Finally, never write a causation conclusion of your own, like “the crash caused…,” anywhere in the chronology or the summary. That's a medical and legal judgment, not ours."
   ],
   "ask": "Of everything in the right-hand column, which finding do you think Keystone will have the hardest time arguing with, and why?"
  },
  "p2": {
   "why": "A causation opinion is only as strong as its exact words and the exact injury it covers.",
   "talk": "This slide is about precision. The doctor's phrasing stays intact, you know exactly which injury the opinion covers, and you never let the patient's own words pass for a doctor's opinion.",
   "walk": [
    "First, keep the doctor's phrasing intact. “Within a reasonable degree of medical probability” is the kind of language attorneys look for, but the standard required depends on the state, and that's the attorney's call, not ours.",
    "Next, note exactly which injury the opinion covers. Dr. Patel's covers the C5-6 injury, not every complaint in the file.",
    "Finally, the pitfall: calling “patient states pain since the accident” a causation opinion. The adjuster will point out, correctly, that it's the patient talking."
   ],
   "ask": "Your turn: Dr. Patel's causation opinion on page 55 names the C5-6 injury. Does it cover Dana's low back complaints? Write what goes in the summary, and the one line you'd send Attorney Bennett about it."
  }
 },
 "2::Flag: Procedures, MMI, Impairment and Future Care": {
  "p1": {
   "why": "Procedures, MMI and future care turn a treatment history into damages: what was done, where treatment ended and what's still ahead.",
   "talk": "Each icon on this slide is something the demand will lean on. The procedure is Dana's C5-6 interlaminar ESI, an epidural steroid injection, on 07/10/2026 under fluoroscopy, meaning live X-ray guidance, with pain 6/10 before and 2/10 after. MMI, maximum medical improvement, means the condition has stabilized and isn't expected to improve significantly with more treatment; it doesn't mean healed. Dana reached MMI on 08/21/2026, and Dr. Patel still documented future care: up to two more C5-6 ESIs over the next 24 months if symptoms recur, estimated at $3,900 each, $7,800, on page 57. The impairment rating icon is there to remind you what isn't in this file: Dana has none, and you never add one. And work status feeds the wage claim.",
   "walk": [
    "First, flag each procedure “Procedure,” with the date, the level, the type, the guidance and the pain before and after: C5-6 interlaminar ESI under fluoroscopy, 6/10 to 2/10, pages 64 to 66.",
    "Next, flag the MMI visit “MMI / future care,” with the date and the provider's words: 08/21/2026, neck pain 3/10, intermittent, pages 56 to 58.",
    "Then, copy the future-care recommendation exactly, including “up to” and “if symptoms recur,” with the cost and the page. Those qualifiers are what keep it credible.",
    "After that, record an impairment rating only if a provider gives one, with the percentage, the guide and edition used, and the page. Dana's file has none, so nothing goes in.",
    "Finally, note work status for the wage claim: off work on page 15, and back to work 04/03/2026 with no lifting over 15 pounds on page 26. That's what supports 14 missed workdays at $224.00, $3,136.00."
   ],
   "ask": "Why do you think this slide shows an impairment rating when Dana's file doesn't have one?"
  },
  "p2": {
   "why": "No written estimate from a provider means no future medical number.",
   "talk": "The future-care estimate is what the demand's future medical figure rests on, so it has to be exact. This slide also looks ahead to Day 3, where you'll match procedures to their bills by code.",
   "walk": [
    "First, the future-care estimate is what the demand's future medical figure rests on. Without a provider's written estimate there's no number to use, and Dana's is on page 57: $7,800.",
    "Next, keep the procedure's CPT code in view for Day 3. Dana's ESI is CPT 62321, and you'll see it again on Bayside's itemized bill.",
    "Finally, the pitfall: writing “needs two more injections.” The record says up to two, if symptoms recur, and the adjuster will read page 57."
   ],
   "ask": "Your turn: someone reads Dana's 08/21/2026 note and says, “MMI, so she's healed.” Explain in two sentences what MMI means, then read out the future care Dr. Patel documented, word for word, with the page."
  }
 },
 "2::Diagnostic Imaging Words: Bulge, Protrusion, Herniation": {
  "p1": {
   "why": "Imaging words have specific meanings, so the radiologist's word is the one you use.",
   "talk": "The table on this slide is your cheat sheet. In the standard terminology many radiologists follow, a bulge is broad and shallow, spread over more than about a quarter of the way around the disc, and it isn't a herniation. Herniation is the umbrella word for two shapes: a protrusion, where the base is wider than the part sticking out, and an extrusion, where the part sticking out is wider than its base. The contact words have levels too: abutting means touching, effacing means flattening, and compressing means squeezing. Dana's MRI on page 41 says “3 mm central disc protrusion at C5-6 abutting the ventral thecal sac.” Technically a protrusion is a type of herniation, but the report says protrusion, so protrusion is what we write.",
   "walk": [
    "First, find the Impression section of the report and quote it. Use the Findings section for the detail.",
    "Next, keep the size, the level, the location and the side exactly: 3 mm, C5-6, central.",
    "Then, keep the contact words as written. “Abutting the ventral thecal sac” means touching the front of the sac around the spinal cord, and it is not “compressing.”",
    "After that, add nothing the report doesn't say. Dana's MRI doesn't mention nerve or cord compression, so neither do we.",
    "Finally, in the summary you may explain a term for a lay reader, but keep the radiologist's word right next to it, so the reader always sees what the report actually said."
   ],
   "ask": "Who can explain, in plain English, the difference between a bulge and a protrusion?"
  },
  "p2": {
   "why": "When two documents use different words, you quote both; you never pick the stronger one.",
   "talk": "This slide covers the traps. Office notes and radiology reports don't always use the same word, CT and MRI see different things, and the draft demand already has the classic mistake in it.",
   "walk": [
    "First, if a doctor's office note uses a different word than the radiologist, quote each one with its own page. Don't pick the stronger one.",
    "Next, remember what each scan shows. CT shows bone well and MRI shows soft tissue like discs and nerves, so Dana's CT with no fracture never ruled out a disc injury.",
    "Finally, the pitfall: the draft demand's “herniated disc at C5-6.” Page 41 says “3 mm central disc protrusion,” so use the radiologist's words."
   ],
   "ask": "Your turn: Dr. Patel's diagnosis is “C5-6 disc protrusion with right C6 radiculopathy,” and the MRI says “3 mm central disc protrusion at C5-6.” A colleague wants to write “herniated disc with nerve damage.” What do you write instead, and why?"
  }
 },
 "2::Writing the Medical Summary: the Structure": {
  "p1": {
   "why": "A set structure means the attorney, and later the adjuster, can find anything in seconds.",
   "talk": "The six boxes on this slide are the summary's structure, always in this order: overview, initial treatment, diagnostics, treatment course, gaps and prior history, then current status with MMI and future care. Attorney Bennett reads a lot of summaries, and she knows exactly where to look for each piece. Each section is short, factual and cited, and it's written from the chronology, not from memory. And even though the summary becomes an exhibit to a persuasive demand, it stays neutral. It's a guide to the records, not an argument.",
   "walk": [
    "First, the overview: Dana Whitfield, 42; a rear-end MVC on 03/14/2026; neck and low back injuries; the providers and the dates of care. Just enough to orient the reader.",
    "Next, initial treatment: Riverside ED on 03/14/2026, neck 7/10 and low back 5/10, CT with no acute fracture, cervical and lumbar strain, prescriptions, and off work, pages 1 to 9.",
    "Then, diagnostics: the 03/30/2026 MRI in the radiologist's words, “3 mm central disc protrusion at C5-6 abutting the ventral thecal sac,” page 41.",
    "After that, the treatment course: Harbor Spine, 24 visits from 03/17 to 05/14/2026; Dr. Patel on 04/20/2026 with the causation opinion on page 55; then Bayside on 06/26/2026 and the ESI on 07/10/2026, pages 60 to 66.",
    "Finally, gaps and prior history, then current status: the 43-day gap and its reasons on pages 38 and 60, the 2025 low back strain on pages 10 and 11, and MMI on 08/21/2026 with future care, pages 56 to 58."
   ],
   "ask": "Why do you think gaps and prior history get a section of their own, instead of a line inside the treatment course?"
  },
  "p2": {
   "why": "If the reader ever loses the timeline, the structure has failed.",
   "talk": "These practices keep the summary easy to move around in. The reader always knows when and who, the headings never surprise the attorney, and the hard facts are never hiding.",
   "walk": [
    "First, start each paragraph with the date and the provider, like “On 04/20/2026, Dr. Anita Patel of Summit Orthopedic Associates…,” so the reader never loses the timeline.",
    "Next, use the TP02 headings exactly. The attorney reads many summaries and knows where to look.",
    "Finally, the pitfall: tucking the gap and the prior injury into one vague line at the bottom. They get their own section, stated plainly, with the pages."
   ],
   "ask": "Your turn: draft the two-sentence overview for Dana's medical summary. What belongs in it, and what waits for the later sections?"
  }
 },
 "2::Neutral, Accurate, Traceable: Summary Rules": {
  "p1": {
   "why": "A medical summary earns trust by being neutral, accurate and traceable, and it loses that trust with one overstatement.",
   "talk": "The six icons on this slide are the rules. Neutral means facts, not adjectives or arguments; accurate means exact dates, numbers and terms; traceable means every fact ends with its page. Complete means the hard facts go in too, like the 2025 strain and the gap, and no opinions of your own means no causation, no value and no legal conclusions. Checked means a second read against the pages before the attorney sees it. And neutral doesn't mean weak: Dr. Patel's causation opinion and the MRI finding are strong precisely because they're quoted exactly and cited.",
   "walk": [
    "First, cite every factual sentence to its Bates page, like WHITFIELD 0055.",
    "Next, replace adjectives with the record's measurements: “neck pain 3/10, intermittent,” not “ongoing pain.”",
    "Then, quote opinions exactly, the causation opinion and the future care, and name the doctor who gave them.",
    "After that, state the unhelpful facts plainly, with their pages: the gap, the prior strain, even the 2/10 after the injection.",
    "Finally, read the draft against the chronology and the pages: every date, number, name, side and level."
   ],
   "ask": "Why might the 2/10 after the injection count as an “unhelpful” fact, and why does it still go in?"
  },
  "p2": {
   "why": "Every date, number and name must match everywhere, starting with the DOI: 03/14/2026.",
   "talk": "Dana's intake says 03/15/2026, while the police report and the ED record say 03/14/2026. That one digit is exactly the kind of error that spreads from document to document if nobody checks. These practices keep the summary clean: plain verbs, matching numbers and no argument.",
   "walk": [
    "First, use the client's name and plain verbs: “Dana reported,” “Dr. Patel diagnosed,” “the MRI showed.”",
    "Next, dates, numbers and names must match the chronology and the bills exactly. The DOI is 03/14/2026 everywhere, never the intake's 03/15/2026.",
    "Finally, the pitfall: “Dana has suffered a devastating, life-changing spinal injury.” That's argument, and whether to say anything like it in the demand is Attorney Bennett's decision."
   ],
   "ask": "Your turn: rewrite this line neutrally, with cites: “After the crash, Dana's neck was badly hurt and therapy did nothing, so she needed a spinal injection.” Then tell me which part of it is actually inaccurate, not just slanted."
  }
 },
 "2::Quality Check: Reconciling the Chronology with the Bills": {
  "p1": {
   "why": "Every billed date needs a record and every record needs a bill, and checking both catches errors before the adjuster does.",
   "talk": "The table on this slide lines up Dana's chronology on the left with her bills in the middle, and the result on the right. Most rows match, and the ED visit's two bills, one from the hospital and one from the emergency physicians' group, are normal, not a duplicate. But three lines don't belong in the specials: the 2025 prior care at $285.00, a second MRI line at $2,400.00, and the Northgate wellness exam at $275.00. A mismatch is a question, not an answer: it might mean missing pages, a duplicate, prior care or unrelated care. And the totals have to agree: Dana's related bills come to $19,516.40, not the $22,476.40 you get by adding every line in the stack.",
   "walk": [
    "First, line up each date of service in the chronology with each billed line, side by side.",
    "Next, count repeat services. Harbor Spine shows 24 visits in the records and 24 on the ledger, and 24 times $240.00 is $5,760.00.",
    "Then, mark each bill line: match, missing record, missing bill, duplicate, prior, meaning before the DOI, or unrelated.",
    "After that, request what's missing, and set aside duplicate, prior and unrelated lines with a note for the itemization. Bayside is the example of something missing: until 10/07/2026 we had only a balance-due statement, not the itemized bill.",
    "Finally, tell the attorney about anything that changes the specials."
   ],
   "ask": "Why isn't Riverside's second ED bill a duplicate, when Clearview's second MRI line almost certainly is?"
  },
  "p2": {
   "why": "Adding up every ledger in the stack overstates Dana's specials by $2,960.00.",
   "talk": "This is the bridge to Day 3, where you'll build the itemization. These practices are about confirming before you assume, keeping the two documents in the same order, and knowing exactly why each line is in or out.",
   "walk": [
    "First, the same date, the same CPT code and the same amount twice is a likely duplicate, but confirm it with the billing office instead of assuming. Two bills from two billing entities for one visit are normal.",
    "Next, keep the chronology and the itemization in the same date order, so anyone can read them side by side.",
    "Finally, the pitfall: adding up every ledger in the stack. Dana's pile totals $22,476.40, and the related specials are $19,516.40."
   ],
   "ask": "Your turn: explain the $2,960.00 difference between $22,476.40 and $19,516.40, line by line, with the reason each line is left out."
  }
 },
 "2::Putting It Together: the Seven Flags": {
  "p1": {
   "why": "Seven flags, used consistently, point the attorney straight to the facts that decide the claim.",
   "talk": "Here are all seven flags in one place. Most rows get the first one, “Routine entry,” and that's how it should be. The other six are the special flags: prior injury, gap in treatment, objective diagnostic finding, causation opinion, procedure, and MMI and future care. They only work if they're consistent: the same event gets the same flag in the chronology, in the summary and in your note to the attorney. And the chronology and the summary go to Attorney Bennett together, with a short note listing the flagged items and their pages.",
   "walk": [
    "First, put every record in date order and write one row per encounter, starting with the 2025 prior care.",
    "Next, flag each row and cite its page.",
    "Then, reconcile the rows with the bills, so the chronology and the itemization tell the same story.",
    "After that, write the six-part medical summary from the chronology, using the TP02 headings.",
    "Finally, send both to Attorney Bennett with a note: the flags, the pages, and anything still missing."
   ],
   "ask": "Which of the six special flags do you think is easiest to miss when you're reading fast?"
  },
  "p2": {
   "why": "If everything is flagged, nothing stands out.",
   "talk": "The last check before anything goes to the attorney is short and specific. Six facts go wrong more often than any others, so you check each one against its page. Then you save your work properly and log the handoff.",
   "walk": [
    "First, do a last check of the six facts that most often go wrong: the DOI, 03/14/2026; the gap, 05/14 to 06/26/2026, 43 days; the MRI wording on page 41; the causation page, 55; the ESI date, 07/10/2026; and the future-care cost, $7,800, on page 57.",
    "Next, save the chronology and the summary in the CMS with the date and the version, and log the handoff to the attorney.",
    "Finally, the pitfall: flagging so much that nothing stands out. “Routine entry” is the right flag for most rows."
   ],
   "ask": "Your turn: open the Chronology & Summary Builder, today's Skill Builder, and go through Dana's file row by row. Put her records in date order, give each of the six special flags to the right encounter with the page that proves it, write the row for Dr. Patel's 04/20/2026 consult, and then write the medical summary."
  }
 }
});
