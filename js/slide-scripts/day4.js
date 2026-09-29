/* Day 4 — hand-written spoken scripts, one per slide (see slideScript() in build/slide_script_engine.js).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "4::What a Demand Letter Is": {
  "p1": {
   "why": "The demand letter is usually the adjuster's first full look at Dana's injury claim, so it has to be easy to evaluate and hard to argue with.",
   "talk": "A demand letter is our written settlement proposal to the at-fault driver's insurer, which for Dana means Keystone Mutual and its adjuster, Tom Reyes. It lays out liability and damages, attaches the proof, and asks for a specific amount by a deadline. The six icons on this slide are the six jobs it does: tell the story, prove liability, prove the injury, prove the damages, make the demand, and carry the proof in Exhibits A through G. The adjuster often needs a supervisor's authority to pay more, so he has to be able to hand our letter up the chain and have it hold up. That only works when every fact traces to an exhibit page and nothing is exaggerated.",
   "walk": [
    "First, open the firm's template, TP04. Never start from a blank page, and never start from another client's letter.",
    "Next, pull your facts from the source documents: the police report, the medsum, the itemization, the wage verification and Dana's impact statement.",
    "Then, write each section in plain, confident language, and cite the exhibit page after every fact so Tom Reyes can check it in seconds.",
    "After that, leave the demand amount and the deadline exactly as Attorney Bennett sets them. For Dana that's $85,000.00, open 30 days, and it's her number, not ours.",
    "Finally, send the draft to Attorney Bennett for review. Nothing goes to Keystone until she signs it."
   ],
   "ask": "If you were Tom Reyes with a stack of files on your desk, what would make you trust a demand letter in the first two minutes?"
  },
  "p2": {
   "why": "Facts persuade adjusters; adjectives make them suspicious.",
   "talk": "Adjusters read a lot of demand letters, and plenty of them shout. The ones that work are calm, organized and exact. So these practices are about writing for a busy reader and letting the records do the persuading. And the pitfall is one that's embarrassed a lot of firms: the recycled letter.",
   "walk": [
    "First, write for a busy adjuster: short paragraphs, clear headings, and dates and page cites he can scan.",
    "Next, let the facts carry the weight. “A 3 mm central disc protrusion at C5-6” does more for Dana than “a severe, devastating injury” ever could.",
    "Finally, the pitfall: reusing an old letter from another file. One leftover name or number wrecks our credibility, and it exposes another client's private information."
   ],
   "ask": "Your turn: Keystone accepted liability on 04/02/2026. So why does Dana's demand still need a facts-and-liability section? Talk it over with your neighbor for thirty seconds, then tell us."
  }
 },
 "4::When to Send: MMI and the Pre-Demand Checklist": {
  "p1": {
   "why": "Settlement is final, so a demand sent too early leaves the client's later care out for good.",
   "talk": "A demand usually goes out once the client has finished treating or reached MMI — maximum medical improvement — the point where the doctor says she's as good as she's going to get. Before that, nobody knows the full damages, and settlement is final: care nobody knew about when the claim settles, like another injection next year, can't be added later. The process on this slide is the pre-demand checklist, eight gates in order, from MMI all the way to the attorney's approval. On Dana's file, Dr. Patel documented MMI on 08/21/2026. And the attorney decides when to send: she may go before MMI in some cases, like when the injuries clearly exceed the policy limits, but that's her call, not the calendar's.",
   "walk": [
    "First, confirm MMI or discharge in the records and note the page. For Dana, that's Dr. Patel's 08/21/2026 visit, WHITFIELD 0056 to 0058.",
    "Next, go provider by provider: complete records, and itemized bills with dates of service and CPT codes, the billing codes for each procedure. A statement that only says “balance due” doesn't count.",
    "Then, make sure the medsum, the itemization and the specials summary all agree with each other. For Dana, they all say $19,516.40 billed.",
    "After that, confirm liability, limits, liens and the statute of limitations are recorded in the CMS: liability accepted 04/02/2026, limits of $100,000/$300,000 confirmed 07/15/2026, and the SOL on 03/14/2028.",
    "Finally, send Attorney Bennett a short readiness note: what's complete, what's missing, and when she'll have the draft."
   ],
   "ask": "Why is a demand sent before MMI a risk for the client, even if it would get her money faster?"
  },
  "p2": {
   "why": "A ready file beats a fast file, because whatever's missing when we send stays missing.",
   "talk": "Two habits and one trap. Keep an eye on the statute of limitations, the legal deadline to file a lawsuit, so we know how much room there is to negotiate. Wait for the last real bill. And never let the age of a file push a demand out the door while the client is still treating.",
   "walk": [
    "First, check the statute of limitations every time. Under our training state's rule, Dana's is 03/14/2028, so there's time to negotiate. A demand sent a few weeks before the SOL leaves almost none.",
    "Next, hold the draft for the last bill. Bayside's balance-due statement wasn't enough; the itemized bill came in on 10/07/2026.",
    "Finally, the pitfall: sending a demand while the client is still treating because “the file is getting old.” Whatever care comes after that is left out for good."
   ],
   "ask": "Your turn: it's 10/05/2026. Dana's file has MMI, limits and wage proof, but Bayside has sent only a balance-due statement. Is the demand ready? Write the two-line note you'd send Attorney Bennett."
  }
 },
 "4::Your Role vs the Attorney's": {
  "p1": {
   "why": "We build the letter; Attorney Bennett owns it, and her signature makes it the firm's legal position.",
   "talk": "The two columns on this slide split the work. On the left is you, the Demand Specialist: you build the medsum, the chronology and the itemization, draft from the template, cite every fact, assemble the exhibits and flag what's weak or missing. On the right is Attorney Laura Bennett: she decides when the demand goes out, sets the amount and the deadline, writes the legal arguments, signs the letter and advises Dana on every offer. Her signature is what turns our draft into the firm's legal position. So valuation and advice are hers alone. You never state what a case is worth, predict a result or tell a client what to do, not in the letter and not on the phone.",
   "walk": [
    "First, draft every factual section completely, with its cites, so the attorney is reviewing a finished draft, not filling holes.",
    "Next, clearly mark the parts that are hers: the amount, the deadline and any legal argument.",
    "Then, put your open questions and the weaknesses you found in a short cover note that travels with the draft.",
    "Finally, make her edits exactly. If an edit changes a fact, check it against the records and tell her what you found."
   ],
   "ask": "Have you ever been tempted to “just fill it in” when the decision really belonged to someone else? What happened?"
  },
  "p2": {
   "why": "When anyone asks what the case is worth, the answer always comes from the attorney.",
   "talk": "These practices keep that line clean. Clients ask about value all the time, and it's a fair thing for them to wonder. Your job is to acknowledge the question warmly, not answer it, and get it to Attorney Bennett the same day.",
   "walk": [
    "First, make the attorney's review fast: what's in, what's flagged, and what needs her decision.",
    "Next, if a client, a provider or an adjuster asks “how much are you asking for?”, route it to the attorney.",
    "Finally, the pitfall: filling in a demand number because the template has a blank. The amount is always the attorney's."
   ],
   "ask": "Your turn: Dana emails, “What do you think my case is worth? My friend got $100,000.” Say your reply out loud: acknowledge her, don't value it, and tell her what happens next."
  }
 },
 "4::The Parts of a Demand Letter": {
  "p1": {
   "why": "Every demand has the same backbone, and the order walks the adjuster from fault, to injury, to money.",
   "talk": "The table on this slide lays out the parts in order: what each one does, and where Dana's version gets its facts. The heading comes straight from Keystone's own letters: claim number KM-26-0418823, adjuster Tom Reyes, and the date of incident, 03/14/2026. Then the letter walks the adjuster through the facts and liability, the injuries and treatment, the medical specials, the other economic losses and the non-economic harm. It closes with the attorney's demand and the enclosure list, Exhibits A through G. The template gives you the structure and the firm's standard language; your job is to supply the facts from the file.",
   "walk": [
    "First, open TP04 and fill the heading from Keystone's own letters: the claim number, the insured, Grant Mercer, and the adjuster. Copy them; don't type them from memory.",
    "Next, write the facts from the police report, the injuries from the medsum, and the specials from the itemization.",
    "Then, put the economic damages in a table: past medical $19,516.40, future medical $7,800.00, lost wages $3,136.00, and the total, $30,452.40.",
    "After that, leave the demand paragraph with the attorney's amount and deadline exactly as she gives them: $85,000.00, open 30 days.",
    "Finally, end with an enclosure list that matches the exhibit index, DW28, so Exhibits A through G line up with the packet."
   ],
   "ask": "Why do you think the facts and liability come before the injuries, and the injuries before the money?"
  },
  "p2": {
   "why": "Adjusters often go straight to the numbers and the causation opinion, so those have to be flawless.",
   "talk": "Most adjusters don't read a demand front to back. They flip to the specials and the doctor's causation opinion, the sentence that says the crash caused the injury. So make those easy to find, keep out what doesn't belong, and make sure the total matches the exhibit.",
   "walk": [
    "First, use headings the adjuster can scan. Many go straight to the specials and the causation opinion.",
    "Next, keep property damage out. Dana's $6,480.00 repair was handled and paid separately.",
    "Finally, the pitfall: a specials total that doesn't match the itemization exhibit. The adjuster will find that before anything else."
   ],
   "ask": "Your turn: which section of Dana's letter do you expect Tom Reyes to read first, and what has to be perfect in it?"
  }
 },
 "4::Facts & Liability": {
  "p1": {
   "why": "The insured's own words prove fault better than any adjective we could write.",
   "talk": "The facts section tells the crash in a few clear sentences: where, when, what each driver was doing and who was at fault. The table on this slide pairs each fact with its source, and almost all of it comes from the police report, Exhibit A. Dana was stopped at a red light, eastbound on Oak St at 5th Ave, on 03/14/2026 at about 4:15 PM, when Grant Mercer's F-150 hit the rear of her CR-V. He told Officer Alvarez he “looked down at my phone for a second,” and he was cited for Following Too Closely. Keystone accepted liability on 04/02/2026, but these facts still matter, because a stopped car, a distracted driver and a citation show fault and the kind of impact the adjuster has to weigh.",
   "walk": [
    "First, write the facts in time order, in the past tense, with the date, time and location.",
    "Next, quote the insured and the witness exactly, with the cite. Mercer's phone quote and Priya Desai's “had been stopped for a few seconds” both come from the police report, Exhibit A.",
    "Then, state the citation and Keystone's acceptance of liability in its letter of 04/02/2026.",
    "Finally, point to the photo log, Exhibit B, for the damage to the rear of the CR-V."
   ],
   "ask": "Which is stronger in front of an adjuster: “your insured was driving carelessly,” or “he told the officer he looked down at his phone”? Why?"
  },
  "p2": {
   "why": "Say exactly what the documents say, and nothing they don't.",
   "talk": "A misquote, an invented detail or a wrong date gives the adjuster a reason to doubt everything else in the letter. And Dana's file has a trap sitting right in the intake summary.",
   "walk": [
    "First, quote short and exact. Never paraphrase inside quotation marks.",
    "Next, state what the documents say, not what you imagine. No speed estimates, and no “slammed into her,” unless a record says so.",
    "Finally, the pitfall: the wrong date. The intake summary, DW02, says 03/15/2026. The police report and the ED record say 03/14/2026, and we use the records."
   ],
   "ask": "Your turn: DW27's facts sentence says Dana “was stopped at a red light at Oak Street and 5th Avenue when your insured struck her vehicle from behind; your insured was cited for Following Too Closely (Ex. A).” Is it OK as written? What could you add, and what's the cite for each addition?"
  }
 },
 "4::Injuries & Treatment (from the Medsum)": {
  "p1": {
   "why": "This section retells the medsum as a story, in the doctors' own words, with a page cite for every key finding.",
   "talk": "The process on this slide is Dana's treatment in date order, eight stops from the emergency department on 03/14 to MMI on 08/21. The injuries section tells that story: what hurt, what the doctors found, what they did, and where she ended up. Use the providers' exact words. The radiologist wrote “3 mm central disc protrusion,” so our letter says protrusion, not herniation. And three kinds of sentences matter most: the objective findings like the MRI, Dr. Patel's causation opinion, and the future-care plan, each one with its page cite.",
   "walk": [
    "First, work from the approved medsum, Exhibit C, not from memory.",
    "Next, give each provider a short paragraph: dates, complaints and pain scores, findings, diagnosis, treatment and result.",
    "Then, quote Dr. Patel's causation sentence word for word and cite it: Exhibit E, WHITFIELD 0055.",
    "Finally, close with MMI and the future-care plan, up to two more C5-6 injections at $7,800.00, cited to Exhibit E, WHITFIELD 0057."
   ],
   "ask": "Why is Dr. Patel's causation sentence on page 55 one of the most important sentences in the whole letter?"
  },
  "p2": {
   "why": "One upgraded diagnosis is enough to make the adjuster stop trusting the letter.",
   "talk": "Dana's records already tell a strong, honest story, so let them. Show her recovery with her own pain scores, keep unrelated care out, and never make an injury sound bigger than the doctor said it was. The adjuster will open the page you cite, so the words have to match.",
   "walk": [
    "First, show the recovery curve with the records' own pain scores: neck 7/10 at the ED, 4/10 at discharge, 6/10 after the gap, 2/10 after the injection, and 3/10 and intermittent at MMI.",
    "Next, leave unrelated care out of the story. The Northgate wellness exam on 05/02/2026 is not accident treatment.",
    "Finally, the pitfall: upgrading the diagnosis. DW27 says “herniated disc” and cites WHITFIELD 0041, which says “3 mm central disc protrusion.” The adjuster opens the page and stops trusting the letter."
   ],
   "ask": "Your turn: DW27 says, “Dr. Anita Patel concluded that the C5-6 injury is causally related to this collision.” What's wrong with it? Rewrite it with her exact words and the cite."
  }
 },
 "4::Medical Specials & Economic Damages": {
  "p1": {
   "why": "The adjuster should be able to check Dana's specials in a minute and land on $19,516.40 to the cent.",
   "talk": "“Specials” — short for special damages — are the losses you can put an exact dollar figure on, like medical bills. The table on this slide is Dana's specials section: each related provider, the dates, and what they billed, adding up to $19,516.40, the same total as the itemization, Exhibit D. Economic damages are past medical plus future medical plus lost wages, so for Dana that's $19,516.40 plus $7,800.00 plus $3,136.00, or $30,452.40. Under our training state's rule, the letter uses the full billed amounts and the itemization keeps the paid amounts. Other states treat billed versus paid differently, and either way the attorney decides what goes in the letter.",
   "walk": [
    "First, copy the lines from the final itemization. Never retype totals from a draft or a provider's ledger.",
    "Next, leave out what the itemization leaves out: the 2025 Harbor Spine charges of $285.00, Clearview's duplicate MRI line, and Northgate's $275.00 wellness exam.",
    "Then, add future medical with its basis: two C5-6 injections at $3,900.00 each, $7,800.00, cited to Exhibit E, WHITFIELD 0057.",
    "After that, add lost wages with the math and the proof: 14 workdays, 03/16 to 04/02/2026, at $224.00 a day is $3,136.00, Exhibit F.",
    "Finally, re-add every column yourself and match the total to Exhibit D, to the cent."
   ],
   "ask": "Dana still owes providers $11,105.00. Why isn't that the number in the specials table?"
  },
  "p2": {
   "why": "Show the math on every number, because the adjuster is going to check it.",
   "talk": "Numbers are where a demand loses credibility fastest. If the adjuster has to guess how you got a figure, he'll assume the worst. And DW27, the draft you'll audit today, has a specials table with two problems in it.",
   "walk": [
    "First, show the math on every derived number, so the adjuster never has to guess how you got it.",
    "Next, remember that the $6,480.00 property damage was paid separately. It's not a bodily injury special.",
    "Finally, the pitfall: DW27's table lists “Northgate Family Practice · 05/02/2026 · $275.00” and a total of $19,666.40. Neither one matches the itemization."
   ],
   "ask": "Your turn: the draft's total is $19,666.40 and the itemization says $19,516.40. Start by subtracting. Does the Northgate line explain the difference on its own? Tell us how you'd find the error and what you'd fix."
  }
 },
 "4::Non-Economic Damages: the Human Story": {
  "p1": {
   "why": "Non-economic damages have no bill attached, so specific, true details are the only proof we have.",
   "talk": "Non-economic damages are the losses that don't come with a bill: pain, limits on daily life, lost activities, lost sleep, worry, and what the future might hold. The icons on this slide are Dana's version of that, and every one comes from her signed impact statement, Exhibit G, or her records. For six weeks she couldn't lift her 3-year-old son or turn her head to check her blind spot, she stopped her Saturday 5K runs, and she still wakes with neck pain once or twice a week. The records back her up: 24 chiropractic visits, an MRI, an injection in her neck, and up to two more if her symptoms come back. Notice how specific that is. “Couldn't lift her son for six weeks” proves more than “suffered greatly” ever will.",
   "walk": [
    "First, read Dana's impact statement, DW26, signed 09/30/2026, and pick out the concrete, specific facts.",
    "Next, pair each life fact with a record where you can, like the neck pain and 40 percent loss of motion at WHITFIELD 0012 to 0015, or the injection at WHITFIELD 0064.",
    "Then, write it in the third person, in plain words, keeping Dana's own terms.",
    "Finally, don't put a dollar figure on her pain. The demand amount is the attorney's."
   ],
   "ask": "Of Dana's four details, which one do you think an adjuster will still remember the next day, and why?"
  },
  "p2": {
   "why": "Dana's story is strong because it's true and specific; exaggeration only weakens it.",
   "talk": "This is the section where writers are most tempted to overdo it. Don't. Use only what Dana told us, show the before and after, and let the adjuster reach his own conclusion.",
   "walk": [
    "First, use the client's facts exactly as she gave them. Never add a detail she didn't give.",
    "Next, show before and after. She ran a 5K every Saturday; after the crash, she stopped.",
    "Finally, the pitfall: melodrama. “Her life was destroyed” invites the adjuster to discount the whole section."
   ],
   "ask": "Your turn: write two sentences about Dana's life after the crash, using only Exhibit G and one record cite. Then we'll hear a few read aloud."
  }
 },
 "4::Addressing Weaknesses Before the Adjuster Does": {
  "p1": {
   "why": "The adjuster will find the weaknesses anyway; the only question is who explains them first.",
   "talk": "Every file has weaknesses, and Dana's has two: a low back strain in January 2025, at WHITFIELD 0010 to 0011, and a 43-day gap in treatment, from 05/14 to 06/26/2026. The left side of this slide is DW27 hiding them: it claims she'd “never experienced neck or back problems” and says nothing about the gap. The right side is the honest version, and every line has a cite. Her only prior care was three chiropractic visits for her low back, and she was released; the injury Dr. Patel ties to this crash is in her neck, at C5-6. As for the gap, she finished all 24 scheduled chiropractic visits, couldn't add the extra ones because her mother, who watched her son, was hospitalized, and her neck got worse until she started pain management on 06/26.",
   "walk": [
    "First, list the weaknesses from the chronology's flags: a prior injury, a gap, missed visits, anything unrelated.",
    "Next, for each one, find the record that explains it. The page, not a guess. For Dana's gap, that's WHITFIELD 0038 for childcare and 0060 for the continuing symptoms.",
    "Then, write it in one or two neutral sentences, with the cite, at the right point in the story.",
    "Finally, mark the paragraph for Attorney Bennett. She decides how to frame it and whether to add a legal argument."
   ],
   "ask": "Why is it better for Dana if we raise the gap ourselves, instead of waiting for Keystone to bring it up?"
  },
  "p2": {
   "why": "Honest and cited beats silent every time, and a false statement isn't a strategy problem; it's an ethics problem.",
   "talk": "Addressing a weakness doesn't mean apologizing for it. It means stating it accurately and letting the records explain it. And when Keystone does respond in November, its first offer leans on exactly these two points, so the letter needs to have answered them already.",
   "walk": [
    "First, state a prior injury accurately, not minimized: the body part, the dates, the number of visits and the outcome.",
    "Next, explain the gap with the records' own reasons, childcare at WHITFIELD 0038 and continuing symptoms at WHITFIELD 0060. Never use a reason the client didn't give.",
    "Finally, the pitfall: DW27 says Dana “had never experienced neck or back problems,” while Exhibit E contains her 2025 low back records. A false statement of fact in a letter the attorney signs is an ethics problem, not just a strategy problem."
   ],
   "ask": "Your turn: rewrite DW27's “never experienced neck or back problems” sentence so it's true, cited, and still helps Dana. Then write the missing sentence about the gap."
  }
 },
 "4::Policy Limits, Time-Limited Demands & Deadlines": {
  "p1": {
   "why": "Limits and deadlines carry real legal weight, so we confirm them, calendar them and copy the attorney's terms word for word.",
   "talk": "Policy limits are the most the at-fault driver's policy will pay. Keystone's are $100,000 per person and $300,000 per accident, and the per-person limit caps what Keystone will pay on Dana's claim. A policy-limits or time-limited demand asks the insurer to settle within its limits by a set date. In many states, an insurer that unreasonably turns one down can be exposed to a judgment above its limits, which is why these demands are powerful and closely regulated. The rules differ by state: some, like Georgia and California, set by statute what these demands must say, how long they stay open and how they're delivered, so only the attorney writes these terms. Dana's demand went out 10/09/2026, open 30 days, and because the 30th day fell on a Sunday, the response is due Monday, 11/09/2026.",
   "walk": [
    "First, confirm the limits in writing before the demand and record them in the CMS. For Dana, we asked on 07/02/2026 and Keystone confirmed on 07/15/2026.",
    "Next, check the demand against the limits and note any other coverage. Dana's own UM/UIM — uninsured and underinsured motorist coverage — of $50,000/$100,000 isn't needed, because Keystone's limits are adequate.",
    "Then, copy the attorney's amount, deadline and terms word for word. Never shorten, extend or reword them.",
    "After that, send it by the delivery method the attorney specifies and keep proof of delivery. Dana's packet went to Tom Reyes by email with a delivery receipt and by certified mail.",
    "Finally, calendar the deadline with a reminder before it, and tell the attorney the moment a response or a question comes in."
   ],
   "ask": "Why would one changed word in a time-limited demand matter so much?"
  },
  "p2": {
   "why": "In a time-limited demand, one changed word can change its legal effect, so the terms are never ours to touch.",
   "talk": "We're the ones watching the calendar and the mail, so we're usually the first to see a problem. These practices make sure we spot it. Our job is to flag it to Attorney Bennett, not to fix it ourselves.",
   "walk": [
    "First, whether an insurer has to disclose its limits before a lawsuit depends on the state, so record how and when you got them.",
    "Next, know what the attorney's terms require, like a date, what gets released or a payment deadline, and flag any response that doesn't match.",
    "Finally, the pitfall: changing “thirty (30) days,” or any other condition, in a time-limited demand without the attorney. One word can change its legal effect."
   ],
   "ask": "Your turn: Dana's demand is $85,000.00, open 30 days, and Keystone's limit is $100,000 per person. Is it a policy-limits demand? What do you calendar, and what do you never change?"
  }
 },
 "4::Cite Every Fact: Persuasive and Accurate": {
  "p1": {
   "why": "An adjuster who checks three cites and finds them exact will trust the rest of the letter.",
   "talk": "Every fact in the letter needs a source the adjuster can open: the exhibit letter plus the Bates page. Bates numbers are the page stamps on the records, WHITFIELD 0001 through 0066 on Dana's file, so a cite looks like “Ex. E, WHITFIELD 0055.” On the left of this slide are facts written the way people talk: “a herniated disc,” “about three weeks of work,” “bills total about $19,500.” On the right are the same facts, exact and cited: a 3 mm central disc protrusion at WHITFIELD 0041, 14 workdays for $3,136.00 at Exhibit F, and $19,516.40 at Exhibit D. The right side isn't just more accurate; it's more persuasive, and one overstated fact costs more than it gains.",
   "walk": [
    "First, after each factual sentence, add the cite: the exhibit letter, then the Bates page or range.",
    "Next, open the page and confirm it says exactly what your sentence says.",
    "Then, quote the key medical sentences word for word: causation, MMI and future care.",
    "Finally, use the exhibit letters from the exhibit index, DW28, so the cites match the packet."
   ],
   "ask": "Look at the left column. Which of those sentences would worry you most if you were the attorney signing the letter?"
  },
  "p2": {
   "why": "A wrong cite is worse than no cite, because it looks careless or misleading.",
   "talk": "Good cites are narrow, consistent and right. The adjuster should land on the exact page that proves the point, in the same format every time. And he will notice when a cite doesn't hold up.",
   "walk": [
    "First, cite the narrowest page that proves the point: WHITFIELD 0055, not WHITFIELD 0042 to 0059.",
    "Next, use one cite format throughout the letter.",
    "Finally, the pitfall: a cite that points to the wrong page. That's worse than no cite at all, because it looks careless or misleading."
   ],
   "ask": "Your turn: find the three medical statements in DW27 that fail the cite test, and say what each one needs."
  }
 },
 "4::Quality Control: Numbers, Names, Dates, Exhibits": {
  "p1": {
   "why": "The errors that hurt most are the small ones, and you only catch them with the source documents open.",
   "talk": "Quality control is a separate pass, done after you draft, with the source documents open next to you. It isn't a re-read of your own sentences, because your eyes will see what you meant to write. The table on this slide is the checklist: what to check, what to check it against, and in the right-hand column, what DW27 actually got wrong. Look how small those errors are: two digits swapped in the claim number, March 15 instead of March 14, a total that's off by $150.00. Small errors like that do the most damage, so nothing goes to Attorney Bennett for signature until every number, name, date and cite ties to a document.",
   "walk": [
    "First, check the heading against Keystone's letters digit by digit: KM-26-0418823.",
    "Next, check every date against the records. The DOI is 03/14/2026 everywhere in the letter.",
    "Then, re-add every table and match each total to the itemization.",
    "After that, open every cite and confirm the page says what the sentence says.",
    "Finally, check the enclosure list against the exhibit index and the packet itself."
   ],
   "ask": "What's your own trick for catching a mistake in a number you've already read five times?"
  },
  "p2": {
   "why": "Your brain autocorrects familiar numbers, so check them in a way it can't.",
   "talk": "These habits catch what a normal read misses. You have to slow yourself down on purpose, look for things that don't belong, and remember where the facts came from in the first place.",
   "walk": [
    "First, read numbers aloud or check them backwards. A transposition like 8823 versus 8832 hides from a normal read.",
    "Next, search the draft for any leftover name, claim number or date from the template or another file.",
    "Finally, the pitfall: trusting the intake summary. DW02 has the DOI as 03/15/2026, so any draft built from it inherits the error."
   ],
   "ask": "Your turn: DW27's heading reads, “RE: Your insured: Grant Mercer · Claim No.: KM-26-0418832 · Date of loss: March 15, 2026.” How many errors are there, and which documents prove each one?"
  }
 },
 "4::Skill Builder: The Demand Draft Audit": {
  "p1": {
   "why": "An audit reads the draft against the documents, line by line, and every correction comes with its proof.",
   "talk": "This is where today comes together. A demand audit reads the draft line by line against the documents and sorts every statement: OK, wrong so we fix it, or missing so we add it. Every correction comes with its proof, the document and page that shows the right fact. The six steps on this slide are the Skill Builder you're about to do: check readiness, audit DW27, sort the sentences, write the human story, report to the attorney and log it in the CMS. Done right, the audit protects Dana, Attorney Bennett's signature and the firm's credibility with Keystone.",
   "walk": [
    "First, open DW27, the medsum, the itemization, the police report and Keystone's letters side by side.",
    "Next, mark each statement OK, Fix or Missing, and write the correction with its cite.",
    "Then, check that the demand paragraph matches the attorney's amount and terms exactly, $85,000.00, open thirty days, and leave it alone.",
    "Finally, send the markup to Attorney Bennett with a short cover note, then log it in the CMS."
   ],
   "ask": "Of everything we covered today, which kind of error do you think you're most likely to miss in your own audit?"
  },
  "p2": {
   "why": "The hardest error to catch is the one that isn't on the page at all.",
   "talk": "A few habits make an audit reliable. Check the sentences that look right, not just the ones that look wrong. Keep your findings in a table so the attorney sees each fix and its proof at a glance. And look for what's missing, because in DW27 the 43-day gap never comes up at all.",
   "walk": [
    "First, audit the sentences that look right, too. A correct statement still needs its cite.",
    "Next, keep the audit as a table: statement, status, correction, proof.",
    "Finally, the pitfall: fixing the obvious number and missing what isn't there. DW27 never mentions the 43-day gap."
   ],
   "ask": "Open the Day 4 Skill Builder, the Demand Draft Audit, and work through all four parts: Ready to Send, Audit the Draft, Sections and Non-Economic Damages, then save your work in Dana's CMS case. As you audit DW27's twelve statements, decide which are OK as written and which error would do the most damage if the letter went out, and be ready to defend your pick."
  }
 }
});
