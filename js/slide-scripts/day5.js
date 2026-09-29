/* Day 5 — hand-written spoken scripts, one per slide (see slideScript() in build/slide_script_engine.js).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "5::Assembling the Packet: the LSH Standard Order": {
  "p1": {
   "why": "The letter makes the claims and the packet proves them, so every proof has to be exactly where the adjuster expects it.",
   "talk": "Think of the packet as the letter plus its evidence. At LSH we build it in the same order on every file, so the adjuster, the attorney and whoever picks up the file after you always know where to look. The table on this slide is that order, with Dana's packet in the right-hand column. The signed letter and the exhibit index come first, then Exhibits A through G: the police report, the photo log, the medsum, the itemized specials, the records and bills, the wage verification and Dana's impact statement. And only what Attorney Bennett approved goes in: the related records and bills, the approved medsum, and nothing unrelated.",
   "walk": [
    "First, start from the exhibit index, DW28, and TP05, our Exhibit Index and Packet Checklist. The index is your map, and the checklist makes sure nothing gets skipped.",
    "Next, put the signed letter on top, then the index, then Exhibits A through G in order. Dana's letter was signed by Attorney Bennett on 10/09/2026, the day it went out.",
    "Then, build Exhibit E by provider, in the order Dana first saw each one after the crash, with each provider's pages in Bates order. That's WHITFIELD 0001 through 0066, with the bills behind them.",
    "Finally, check every exhibit off against the index: the title, the page range and the page count. If the index and the PDF disagree by even one page, stop and find out why."
   ],
   "ask": "Ask the room: why do you think the exhibit index sits right behind the letter, before any of the evidence?"
  },
  "p2": {
   "why": "Put one exhibit in the wrong slot, and every cite after it sends the adjuster to the wrong place.",
   "talk": "The letter already cites exhibits by letter, so the packet has to match it exactly. On Dana's file, the letter cites Exhibit F for her wages and Exhibit G for her impact statement. If those two swap places, the adjuster opens Exhibit F looking for payroll records and finds Dana's personal story instead. These three practices keep that from happening.",
   "walk": [
    "First, keep excluded and unrelated items out. The Northgate wellness exam isn't accident treatment, so it stays out, and so do internal notes and draft comments.",
    "Next, use the final, signed letter. Never a draft with comments or tracked changes showing, because that hands our internal thinking straight to the insurer.",
    "Finally, the pitfall: an index that says Exhibit F is the wage verification while the PDF has the impact statement there. From that point on, every cite is wrong."
   ],
   "ask": "Your turn: Dana's wage verification arrives late, and someone suggests just adding it at the end as Exhibit H. What's the problem with that, and what do you do instead?"
  }
 },
 "5::Exhibits, Bookmarks and Page Numbers": {
  "p1": {
   "why": "An adjuster should get from any sentence in the letter to the page that proves it in seconds.",
   "talk": "The six icons on this slide are what make that possible. Slip sheets and bookmarks let the adjuster jump straight to any exhibit, and to any provider inside Exhibit E. Bates numbers, WHITFIELD 0001 through 0066, are the packet's permanent page addresses: once they're stamped they don't change, because every cite in the letter depends on them. The cite test, clean pages and one searchable file finish the job. A sideways page or a duplicate looks careless, and another patient's record in Dana's packet isn't just sloppy, it's a privacy breach.",
   "walk": [
    "First, add a slip sheet before each exhibit, like “Exhibit E — Medical Records & Bills,” and bookmark every exhibit, plus every provider inside Exhibit E with its page range.",
    "Next, confirm the Bates run is complete and in order: 0001 to 0066, nothing skipped and nothing repeated.",
    "Then, test every cite. Click (Ex. E, WHITFIELD 0055) and you should land on Dr. Patel's causation sentence; WHITFIELD 0057 should open to her future-care estimate. Those are the two most important pages in the whole demand.",
    "After that, run text recognition, what we call OCR, so the PDF is searchable, and check the file size against the insurer's email limit.",
    "Finally, if a provider's ledger in Exhibit E still shows lines we excluded, like Harbor Spine's 2025 charges or Clearview's duplicate MRI, flag it. Exhibit D explains the exclusions, and Attorney Bennett decides whether to ask for a corrected ledger."
   ],
   "ask": "Ask the room: why do you think we test every single cite, instead of spot-checking a few?"
  },
  "p2": {
   "why": "Bates numbers are addresses: change them after the letter is written, and every cite points to the wrong page.",
   "talk": "These practices protect the packet at the very end, when it's most tempting to rush. A last page-through catches what software won't, like another patient's name on a stray fax page. And the pitfall is one that feels harmless: re-stamping the pages to tidy them up after the letter is done.",
   "walk": [
    "First, page through the whole packet one last time, looking only for another patient's name or records. One stray page is a privacy breach.",
    "Next, redact what firm policy requires, like Social Security and account numbers. Anything beyond that is Attorney Bennett's decision, not ours.",
    "Finally, the pitfall: re-stamping the Bates numbers after the letter is written. Every cite in the letter now points to the wrong page."
   ],
   "ask": "Your turn: you test the cites, and (Ex. E, WHITFIELD 0060) opens to a Summit Orthopedic page instead of Bayside. What might have happened, and what do you check before anything goes out?"
  }
 },
 "5::Sending the Demand: Method, Proof and a Copy": {
  "p1": {
   "why": "Sending the demand is a legal event, so the firm has to be able to prove what went out, to whom, how and when.",
   "talk": "The demand's deadline runs from the day it's sent, so “I'm sure I sent it” won't hold up if anyone questions it. The left side of this slide is a send with proof: signed first, recipient checked, email with a delivery receipt plus certified mail, the exact packet saved and receipt confirmed. The right side is the version that falls apart the first time someone asks a question. The delivery method is the attorney's call, and in some states the rules for time-limited demands spell out how they must be sent. Dana's packet went to Tom Reyes on 10/09/2026, by email with a delivery receipt and by certified mail.",
   "walk": [
    "First, confirm the letter is signed and the packet is final: the index done, the exhibits in order and every cite tested.",
    "Next, check the recipient against Keystone's most recent letter, not an old email: Tom Reyes, treyes@keystonemutual.example, claim KM-26-0418823.",
    "Then, send it with a short cover email naming the claimant, the claim number and the enclosures. The terms of the demand stay in the letter, not the email.",
    "After that, mail the certified copy the same day and write down the tracking number.",
    "Finally, save it all in the CMS: the exact PDF as sent, the email, the delivery receipt and the certified mail receipt. Then log the send."
   ],
   "ask": "Ask the room: why do you think we save the exact PDF that went out, and not just the final letter?"
  },
  "p2": {
   "why": "Only the exact copy that went out counts, so protect it and confirm it landed.",
   "talk": "The send isn't finished when you click the button. We confirm it arrived, we have a plan for packets too big to email, and we protect the sent copy from later edits. If anything's disputed months from now, that saved copy is the firm's proof.",
   "walk": [
    "First, confirm receipt with the adjuster within a business day or two, and log it.",
    "Next, if the packet is too large to email, use the firm's secure file link and keep its access record.",
    "Finally, the pitfall: saving a later, edited version as “sent.” If anything's disputed, only the exact copy that went out counts."
   ],
   "ask": "Your turn: suppose Tom Reyes called on 10/20/2026 and said Keystone never received the demand. What do you pull from the CMS, and who do you tell?"
  }
 },
 "5::Calendaring and Follow-Up": {
  "p1": {
   "why": "Every demand creates dates, and a date only protects Dana if someone owns it and gets warned in time.",
   "talk": "The timeline on this slide starts the day Dana's packet went out, 10/09, then runs through the receipt check on 10/13, a mid-point check if firm practice calls for one, a one-week warning on 11/02 and the response deadline on 11/09. After that, every response creates new dates of its own. And at the far end sits the hardest deadline on the file: the statute of limitations, or SOL, the last day to file a lawsuit. Under our training state's two-year rule, Dana's is 03/14/2028, and negotiating doesn't pause that clock.",
   "walk": [
    "First, calendar the response deadline from the letter's terms. It went out 10/09/2026, open 30 days; the 30th day is a Sunday, so the response is due Monday, 11/09/2026.",
    "Next, add the supporting entries: a receipt check, a reminder a week before the deadline, and a same-day alert to Attorney Bennett if nothing arrives.",
    "Then, whenever a response comes in, calendar the new dates it creates, like records to send or the next follow-up.",
    "Finally, confirm the SOL and its early warnings are in the CMS, for example at 180, 90 and 30 days out."
   ],
   "ask": "Ask the room: why does a calendar entry need both an owner and a reminder ahead of time?"
  },
  "p2": {
   "why": "Deadlines the attorney can't see don't protect the client.",
   "talk": "These practices make sure the calendar actually does its job: the attorney is on every deadline, and every follow-up leaves a trail. The pitfall is the quiet one, an adjuster who simply stops answering. Silence is a response too, and it needs action from us.",
   "walk": [
    "First, put Attorney Bennett on every deadline entry, so nothing depends on you alone.",
    "Next, log every follow-up the same day: the date, the method, who you spoke with and what was said.",
    "Finally, the pitfall: the adjuster goes quiet and weeks slip by. Silence needs a written follow-up and an update to the attorney."
   ],
   "ask": "Your turn: suppose it's 11/09/2026 and Keystone hasn't responded. What do you do today, and just as important, what don't you do?"
  }
 },
 "5::Types of Adjuster Responses": {
  "p1": {
   "why": "Every adjuster response is one of a handful of types, and every one ends the same way for you: logged, routed and calendared.",
   "talk": "The table on this slide covers the six you'll see: an offer, a request for information, a dispute, a request for more time, a denial and silence. The middle column shows what each one looks like, and the right column shows your move. Notice how many of those moves say “route it.” Here's the catch: one letter can be several types at once, and Keystone's 11/04/2026 letter was an offer of $18,500.00, a dispute of Dana's treatment and bills, and a request for five years of prior records, all in one.",
   "walk": [
    "First, read the whole response and label every part: the offer, each argument, each request and any deadline.",
    "Next, log each part in the CMS with the date it came in and how it arrived.",
    "Then, route it to Attorney Bennett the same day with a short summary.",
    "Finally, start the prep she'll need: record cites for each argument and a list of what's being requested."
   ],
   "ask": "Ask the room: which type of response do you think is easiest to miss when it's buried in a longer letter?"
  },
  "p2": {
   "why": "The part you don't label is the part that gets missed.",
   "talk": "These practices are about capturing the response exactly as it came in. Letters and emails are easy to save; phone calls are the ones that slip, and they count just as much. And the classic miss is logging the dollar figure and overlooking the request that came with it.",
   "walk": [
    "First, save the response exactly as received, whether it's an email, a letter, a fax or your notes from a call.",
    "Next, treat a phone call as a response too. Write down what was said and confirm it in writing.",
    "Finally, the pitfall: logging the offer and missing the records request that came with it."
   ],
   "ask": "Your turn: take Keystone's 11/04/2026 response and label every part of it. For each part, tell us what you do next."
  }
 },
 "5::Common Adjuster Arguments": {
  "p1": {
   "why": "Adjusters use the same handful of arguments on almost every injury claim, and the answers are already in Dana's records.",
   "talk": "The table on this slide lines up six common arguments with where the answer lives in Dana's file. Keystone's 11/04 letter uses almost all of them: the 43-day gap, the 2025 low back history, “excessive” chiropractic, paid-not-billed amounts, and it calls the future injections speculative. The only one it doesn't raise is low property damage. Your job is to find the page that answers each argument. Deciding the legal argument and the strategy is Attorney Bennett's job.",
   "walk": [
    "First, list each argument exactly as the adjuster wrote it, in their words, not ours.",
    "Next, match each one to the chronology flag and the record page that answers it. For the gap, that's WHITFIELD 0038 for the childcare problem and 0060 for symptoms that continued and got worse.",
    "Then, mark which answers are factual and which are legal. The records answer the gap; whether billed or paid amounts count depends on the state, so that one belongs to the attorney.",
    "Finally, put it all in a one-page argument-and-cite table for Attorney Bennett."
   ],
   "ask": "Ask the room: looking at this table, which argument do you think Dana's records answer most convincingly, and why?"
  },
  "p2": {
   "why": "Build the argument-and-cite table the day the offer arrives, because it's the backbone of the rebuttal.",
   "talk": "These practices keep you in your lane while still giving the attorney everything she needs. Your strength is the records. The legal questions, and any back-and-forth with the adjuster, belong to Attorney Bennett.",
   "walk": [
    "First, build the table the day the offer comes in, so the attorney has it while the letter is still fresh.",
    "Next, don't debate the adjuster on the phone. Take notes and say the firm will respond in writing.",
    "Finally, the pitfall: answering a legal argument yourself. Whether billed or paid amounts count depends on the state, and it's the attorney's call."
   ],
   "ask": "Your turn: Keystone says 24 chiropractic visits were “excessive.” Which pages answer that, and what do they show?"
  }
 },
 "5::An Offer Arrives: Log It and Route It": {
  "p1": {
   "why": "Every offer goes to the attorney the same day it arrives, however it arrives.",
   "talk": "Lawyers' ethics rules require them to tell clients about settlement offers promptly, so a day's delay on our end matters. The process on this slide has six steps: read it all, log it, route it today, calendar the dates, prep the cites, then wait for direction. That last step is the key one. Attorney Bennett tells Dana about the offer and advises her on it. You never accept, reject, counter or comment on its value, not to the adjuster, not to Dana and not to a provider.",
   "walk": [
    "First, log the offer in the CMS: $18,500.00, from Tom Reyes, received 11/04/2026, with the letter attached.",
    "Next, send Attorney Bennett a same-day summary: the amount, the arguments Keystone raised, the records request and any deadline.",
    "Then, if the adjuster calls with an offer, write it down, read it back and say: “I'll get this to Attorney Bennett today.”",
    "Finally, if Dana calls asking about the offer, tell her Attorney Bennett will speak with her, and let the attorney know she called."
   ],
   "ask": "Ask the room: why isn't it our place to tell Dana about the offer, even when she calls and asks us directly?"
  },
  "p2": {
   "why": "Your summary gives the attorney the facts; the value is hers to discuss.",
   "talk": "These practices keep the summary useful and the numbers private. The pitfall is a very human one: an offer comes in low, and you want to say so. But even “that's way too low” is a response on value.",
   "walk": [
    "First, keep the summary to one screen: the number, what they argued, what they want and what's due when.",
    "Next, keep settlement numbers inside the firm. Never share them with providers, lienholders or anyone else.",
    "Finally, the pitfall: telling the adjuster “that's way too low.” That's a response on value, and it belongs to the attorney."
   ],
   "ask": "Your turn: Tom Reyes calls on 11/04/2026 and says, “$18,500 — can you tell me today if she'll take it?” What exactly do you say? Let's hear it word for word."
  }
 },
 "5::Drafting a Rebuttal with Record Cites": {
  "p1": {
   "why": "A strong rebuttal answers the adjuster with Dana's own records, calmly and point by point, with a page cite for every fact.",
   "talk": "On the left of this slide is the weak rebuttal: “Your offer is insulting,” “Her back was fine before.” Those are opinions, and an adjuster can wave them away. On the right, the strong one answers each argument in order with a cite for every fact: childcare at WHITFIELD 0038, worsening symptoms at 0060, the 2025 low back visits at 0010 to 0011, and neck causation at 0055. And notice the last line: the counter is left for the attorney. You draft the facts; Attorney Bennett adds the legal points, sets any counter and signs, and on Dana's file that rebuttal went out on 11/12/2026 with her $72,500.00 counter.",
   "walk": [
    "First, use your argument-and-cite table as the outline: one short section per argument, in the adjuster's order.",
    "Next, state the fact, then the cite. Where the exact words matter, quote the record, like Dr. Romero's note that her symptoms had been there “since the MVC of 03/14/2026,” at WHITFIELD 0060.",
    "Then, leave a clearly marked place for the attorney's legal points, like billed versus paid, and for her counter.",
    "Finally, cite the same Bates pages the adjuster already has in the packet, so they can check every fact in seconds."
   ],
   "ask": "Ask the room: why is a sentence with a page cite so much harder for an adjuster to dismiss than an opinion?"
  },
  "p2": {
   "why": "Explain the gap; don't deny it.",
   "talk": "These practices keep the rebuttal professional and believable. Remember who might read it later: a mediator, maybe even a judge. The pitfall is overreaching. The records show a 43-day gap, from 05/14 to 06/26/2026, and if we pretend it isn't there, we lose credibility on everything else.",
   "walk": [
    "First, stay professional. The adjuster is a counterpart, and the letter may later be read by a mediator or a judge.",
    "Next, answer what was raised, without repeating the whole demand, and add a new record only with the attorney's approval.",
    "Finally, the pitfall: calling the gap “no gap at all.” The records show 43 days, so explain it, don't deny it."
   ],
   "ask": "Your turn: draft the two-sentence answer to Keystone's gap argument, with cites. Then we'll compare yours with the model."
  }
 },
 "5::Requests for More Information and Prior Records": {
  "p1": {
   "why": "When an insurer asks for more, the attorney decides what they get, and the answer is only what the purpose requires.",
   "talk": "Insurers often ask for more, like prior records, more years, a signed authorization or a recorded statement, and every one of those requests goes to the attorney. The process on this slide shows the order: log it, route it today, let the attorney set the scope, request within that scope, review before release, then send and log. The idea behind it is “minimum necessary”: share only what the purpose requires. Keystone asked for five years of prior records; Attorney Bennett limited it to the neck and low back, 2021 to 2026. And we never hand an insurer a blanket medical authorization or Dana's whole medical history on our own.",
   "walk": [
    "First, log the request and route it the same day, with what the file already shows. Dana's 2025 Harbor Spine records are already in Exhibit E at WHITFIELD 0010 to 0011.",
    "Next, once the attorney sets the scope, list the providers who might have records within it, using the intake, the records and, as the attorney directs, Dana herself.",
    "Then, request those records and check that the authorization covers them. Dana's HIPAA authorization runs to 03/18/2027.",
    "After that, review every page before release: right patient, right body part, right dates, and nothing outside the scope.",
    "Finally, send only what's approved, with a cover letter describing it, and log exactly what went out."
   ],
   "ask": "Ask the room: why would handing Keystone a blanket authorization be such a risk for Dana?"
  },
  "p2": {
   "why": "The scope is the attorney's decision, not the insurer's.",
   "talk": "These practices protect Dana's privacy and keep the negotiation moving. Unrelated records stay out, and every request gets a written answer, even when that answer is a narrower scope. The pitfall is being too helpful and passing the insurer's request straight on to every provider.",
   "walk": [
    "First, unrelated records, like the Northgate wellness exam, don't go out unless the attorney decides otherwise.",
    "Next, make sure the firm answers every request in writing, even when the answer is “the request has been limited to…” Silence looks like stalling.",
    "Finally, the pitfall: forwarding the insurer's request to every provider as written. The scope is the attorney's decision, not the insurer's."
   ],
   "ask": "Your turn: DW30 asks for five years of prior records. What do you do on 11/04/2026, and what goes out after Attorney Bennett decides?"
  }
 },
 "5::Counteroffers and the Attorney's Authority": {
  "p1": {
   "why": "The decision to settle belongs to Dana, advised by her attorney; your job is keeping the record that helps them decide.",
   "talk": "The two columns on this slide draw the line. On the left is what you can do: log and route every offer the same day, keep the negotiation log, and draft and send the counter letter once the attorney approves it. On the right is what only the attorney, with the client, can do: decide whether to counter and at what number, get Dana's authority, accept or reject, advise her, and agree to anything that changes the demand's terms. Here's how Dana's file actually moved: demand $85,000.00, offer $18,500.00 on 11/04, counter $72,500.00 on 11/12, offer $31,000.00 on 11/24, and settled at $47,500.00 on 12/03 with Dana's authority. Every one of those moves was the attorney's.",
   "walk": [
    "First, keep the negotiation log in the CMS: the date, who it's from, the amount, the method, the arguments and the attachments.",
    "Next, prepare the counter letter from the attorney's instructions: her number, her words.",
    "Then, send it only after she approves it, with proof of delivery, and log it.",
    "Finally, route each new offer the same day and add it to the log."
   ],
   "ask": "Ask the room: why does a clean log of every number and date matter so much when the attorney sits down to advise Dana?"
  },
  "p2": {
   "why": "However hard an adjuster pushes, you never counter, accept or reject.",
   "talk": "Adjusters will try to negotiate with you directly, and it often sounds friendly and reasonable. But any hint about what Dana “might take” is a guess you're not entitled to make. And any meet-in-the-middle is a counter only the attorney can make.",
   "walk": [
    "First, never hint at what the client “might take.” You don't know it, and it isn't yours to share.",
    "Next, confirm any phone offer in writing the same day.",
    "Finally, the pitfall: “splitting the difference” with an adjuster to be helpful. That's a counter, and only the attorney can make it."
   ],
   "ask": "Your turn: on 11/24/2026, Tom Reyes offers $31,000.00 and says, “Meet me in the middle and we're done today.” What do you do? Say it out loud."
  }
 },
 "5::When Negotiations Stall: the SOL, Mediation, Litigation": {
  "p1": {
   "why": "Negotiations can stall, but the statute of limitations never does.",
   "talk": "Stalls happen: offers stop moving, the adjuster goes quiet, or the numbers stay far apart. The icons on this slide show what keeps the file safe while that happens, starting with the SOL, which is 03/14/2028 for Dana under the training state's rule. Unless the claim settles, or the attorney arranges another protection, like a written tolling agreement that pauses the deadline where that's allowed, suit has to be filed before that date. Then come written follow-ups, a supervisor review, mediation, where a neutral person helps both sides negotiate, and filing suit. All of those are the attorney's calls; your part is the last icon, a file that's ready for any of them.",
   "walk": [
    "First, track how long it's been since the last movement, and flag a stall to Attorney Bennett with the negotiation log.",
    "Next, keep the SOL warnings in the CMS, and confirm the attorney has actually seen them.",
    "Then, keep the file current. If Dana resumes treatment, like the future injections Dr. Patel described, update the medsum and the specials.",
    "Finally, if the attorney chooses mediation or suit, hand over a clean, complete file."
   ],
   "ask": "Ask the room: what's the danger when an adjuster keeps saying “we're still reviewing it” for months?"
  },
  "p2": {
   "why": "Waiting on a promised callback is how a strong claim runs out of time.",
   "talk": "These practices keep you in your role when things get frustrating. Talk of a lawsuit or mediation is strategy, and strategy is the attorney's. What you can do is notice things: new treatment, time slipping by, and the SOL getting closer.",
   "walk": [
    "First, never threaten a lawsuit or mediation to the adjuster. That's the attorney's strategy.",
    "Next, if Dana restarts treatment during negotiations, tell the attorney, because it may change the damages.",
    "Finally, the pitfall: waiting on an adjuster who “promised to call back” while the SOL gets closer."
   ],
   "ask": "Your turn: suppose Keystone had stopped responding after 11/24/2026 and nothing moved into mid-2027. What would you track, and what would you raise with Attorney Bennett?"
  }
 },
 "5::Settlement: Confirmation, Release Review and the Handoff": {
  "p1": {
   "why": "A settlement isn't finished when the number is agreed; it's finished when it's confirmed, the release is reviewed and signed, and the file is handed off.",
   "talk": "The process on this slide starts with Dana's authority: she authorized $47,500.00 through Attorney Bennett on 12/03/2026. Then Keystone's written confirmation, DW32, gets checked against the file. The release, the legal document that ends the claim, goes to the attorney, who reviews every term and explains it to Dana before she signs. Then the file goes to Marcus Webb, because liens and disbursement belong to him and the attorney. You hand over the numbers; you never negotiate a lien or tell a provider what the case settled for.",
   "walk": [
    "First, check Keystone's settlement confirmation, DW32, against the file: $47,500.00, Dana Whitfield, insured Grant Mercer, claim KM-26-0418823, date of incident 03/14/2026. Watch that date, because the intake had it wrong as 03/15.",
    "Next, route the release to Attorney Bennett the day it arrives, with a note of anything that doesn't match the file.",
    "Then, prepare Marcus's handoff: Harbor Spine's letter of protection, or LOP, $5,760.00; Bayside's LOP, $4,325.00; Clearview's balance, $1,020.00; BlueHarbor's reimbursement claim, $2,575.00 paid so far with the final figure after settlement; and PIP, which has no reimbursement claim under our training rule.",
    "Finally, attach the final itemization and the negotiation log, and write the CMS note that closes the demand phase."
   ],
   "ask": "Ask the room: why does the attorney, and not you, explain the release to Dana?"
  },
  "p2": {
   "why": "The settlement amount stays inside the firm, even when a provider asks nicely.",
   "talk": "These practices protect Dana at the finish line. Releases sometimes carry extra terms, and providers who are owed money will call, some of them having already heard the case settled. Your answer is always the same: you can't discuss it, and Marcus handles balances and liens.",
   "walk": [
    "First, flag anything in the release that goes beyond this claim or adds terms, like confidentiality or indemnity. The attorney decides.",
    "Next, tell providers nothing about the settlement. Lien and balance calls go to Marcus Webb and the attorney.",
    "Finally, the pitfall: a billing office calls asking “how much did it settle for?” and gets an answer."
   ],
   "ask": "Your turn: Carla Ruiz from Bayside calls on 12/04/2026: “I heard Dana's case settled — how much, and when do we get our $4,325?” What do you say? Let's hear it."
  }
 },
 "5::Skill Builder: The Packet & Response Desk": {
  "p1": {
   "why": "Packet and response work is where accuracy meets deadlines: the right order, proof of sending, and every response routed the same day.",
   "talk": "The icons on this slide are the five tasks waiting for you in today's Skill Builder: assemble Dana's packet, triage Keystone's responses, rebut the gap and the prior injury with cites, take Tom Reyes's call on the low offer, and log it all in the CMS. It's the whole day in one exercise. You'll notice almost every next step starts with the attorney, and that's the point. Your value is a file Attorney Bennett can act on right away: logged, cited and calendared.",
   "walk": [
    "First, assemble the packet from the documents in the LSH standard order, and check it against the exhibit index.",
    "Next, sort each Keystone document, DW29 through DW32, by response type and choose the next step.",
    "Then, draft the rebuttal paragraphs on the gap and the prior injury, with WHITFIELD cites.",
    "Finally, take Tom Reyes's call on the $18,500.00 offer without valuing, countering or accepting."
   ],
   "ask": "Ask the room: of those four tasks, which one do you expect to be the hardest, and why?"
  },
  "p2": {
   "why": "Name the attorney and a time frame on every call, and you'll never be stuck answering what isn't yours.",
   "talk": "These are the habits the Skill Builder is checking for. Only promise what you control, which is getting it to the attorney today. And read every response twice, because Keystone's 11/04 letter carried an offer, a list of arguments and a records request all at once.",
   "walk": [
    "First, name the attorney and a time frame on every call: “I'll get this to Attorney Bennett today.”",
    "Next, read each response twice. Keystone's 11/04 response carried an offer, its arguments and a records request.",
    "Finally, the pitfall: promising the adjuster an answer “tomorrow” on what Dana will take. You don't know, and it isn't yours to say."
   ],
   "ask": "Your turn: open the Packet & Response Desk Skill Builder and work it start to finish. When Keystone's 11/04 offer and its prior-records request arrive together, decide which you route first and what goes in your summary to Attorney Bennett."
  }
 }
});
