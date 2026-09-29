/* Day 3 — hand-written spoken scripts, one per slide (see slideScript() in build/slide_script_engine.js).
   p1 = the topic's first slide, p2 = its second slide. Each follows four beats:
   why (the punchline) · talk (plain spoken explanation) · walk (the points in order: first, next, then, finally) · ask (an action or question). */
window.SLIDE_SCRIPTS = Object.assign(window.SLIDE_SCRIPTS || {}, {
 "3::What the Itemization Is and Why It Matters": {
  "p1": {
   "why": "Every dollar in Dana's demand has to be provable, and the itemization is where we prove it.",
   "talk": "The itemization, which you'll also hear called the specials or the bills summary, is one list of every accident-related charge: one line per provider and date of service, with what was billed, written off, paid and still owed. The five icons on this slide are its five jobs: list each charge, show who paid what, feed Exhibit D and the specials figure in the demand, show who has to be paid from the settlement, and point every number back to a bill and a record page. That last job is why it matters so much. The adjuster checks it line by line against the bills, and one wrong number makes them doubt every other number we send. And it works for us too: Attorney Bennett and Marcus Webb use it to see which providers and plans are waiting to be paid.",
   "walk": [
    "First, open the Bills Itemization Template, TP03, next to the provider list you built on Day 1. The provider list tells you whose bills you should have.",
    "Next, work one provider at a time from its itemized bill or ledger. Never from a phone quote and never from a balance-due statement, because neither one shows the dates, the codes and the charges.",
    "Then, enter one line per date of service. For a run of identical visits, one line with the date range and the count is fine: Harbor Spine is 24 visits times $240.00, from 03/17 to 05/14/2026.",
    "Finally, total the columns and check the totals against the bills before anyone else uses the numbers."
   ],
   "ask": "If the adjuster finds one wrong number on our itemization, what happens to how they read the rest of it?"
  },
  "p2": {
   "why": "One set of numbers, taken from the bills, in one dated file that everyone works from.",
   "talk": "These practices keep the itemization honest as it travels through the file. Dana's specials get copied into the summary, Exhibit D and the demand letter, so every copy has to match the one working file. The pitfall is the shortcut we're all tempted by: a number from the client's memory or from a friendly billing clerk on the phone.",
   "walk": [
    "First, keep the working itemization in a spreadsheet so the totals recalculate on their own, then copy the final figures into the demand. Don't retype them; retyping is where digits get swapped.",
    "Next, put the date in every version's name, like “Whitfield specials v2 — 10/07/2026”, so nobody works from last week's numbers.",
    "Finally, the pitfall: building the specials from the client's memory or a billing office's phone quote. The adjuster will ask for the bill, and if we don't have it, the number doesn't hold up."
   ],
   "ask": "Your turn: Dana's related bills total $19,516.40, but her providers' ledgers add up to $22,476.40. Before you look at a single line, what could explain a $2,960.00 difference? Call out every idea you've got."
  }
 },
 "3::Reading a UB-04 and a CMS-1500": {
  "p1": {
   "why": "One ER visit usually means two bills, so you need to know which form is which before you throw away a real charge.",
   "talk": "You'll see these two claim forms over and over. On the left, the UB-04, also called the CMS-1450, is the facility's form: the building, the staff, the equipment and supplies, laid out in numbered form locators with revenue codes. On the right, the CMS-1500, which everyone still calls the HCFA, is the professional's form: the doctor's, chiropractor's or therapist's own services, in numbered boxes with a CPT code on each line. One ER visit usually produces both, and Dana's did: Riverside Medical Center's UB-04 for $4,850.00 and Riverside Emergency Physicians' CMS-1500 for $1,120.00, two providers and two real charges. Whichever form you're holding, you pull the same four things: who billed, the date of service, the code and description, and the charge.",
   "walk": [
    "First, identify the form. Revenue codes and form locators mean a UB-04; numbered boxes with a CPT code on every line mean a CMS-1500.",
    "Next, read the provider name and the dates of service before anything else, and make sure they're on or after the DOI, 03/14/2026.",
    "Then, read each line's code, description and charge, add the lines up and compare your total with the form's own total.",
    "Finally, remember that a claim form only shows charges. The ledger, or the insurer's explanation of benefits, the EOB, shows what was paid and written off, so you need both."
   ],
   "ask": "Riverside's UB-04 has a line with revenue code 045X. What part of Dana's visit is that line billing for?"
  },
  "p2": {
   "why": "The same date and the same name on two bills doesn't make one of them a duplicate.",
   "talk": "These practices are about asking for the right paper and knowing the two codes that matter on this file. The pitfall is an expensive one: someone sees two “Riverside” bills dated 03/14/2026, decides the second one is a duplicate and deletes $1,120.00 of real specials.",
   "walk": [
    "First, from a hospital, ask for the UB-04 and the detailed itemized statement. The UB-04 groups charges by revenue code; the statement lists each charge on its own line.",
    "Next, learn this file's two key codes: CPT 72141 is the MRI of the cervical spine without contrast, and CPT 62321 is the cervical interlaminar epidural injection with imaging guidance.",
    "Finally, the pitfall: treating the ER physician's CMS-1500 as a duplicate of the hospital's UB-04. That throws away $1,120.00 of real charges."
   ],
   "ask": "Your turn: Dana's file has two bills dated 03/14/2026 from “Riverside.” Put DW16 and DW17 side by side and prove they're two separate charges, not the same visit billed twice. What exactly do you point to?"
  }
 },
 "3::The Itemization's Columns": {
  "p1": {
   "why": "Every line answers the same questions, so anyone can check any number in seconds.",
   "talk": "The table on this slide is the itemization's set of columns, with Clearview Imaging's MRI as the worked example. Read across and every line answers the same questions: who, when, what, how much was charged, how much was written off, who paid, what's left and where to find it. Notice the payments get one column per payer, health insurance, PIP or MedPay, and the client, because each one is treated differently at settlement. For Clearview, PIP paid $1,380.00 of the $2,400.00, so $1,020.00 is still owed. And the source column, here the Clearview ledger and the MRI report at WHITFIELD 0041, is what lets anyone check a number in seconds.",
   "walk": [
    "First, set up the columns from the Bills Itemization Template, TP03, before you type a single number.",
    "Next, fill each line from the itemized bill, then fill the payment columns from the ledgers, the EOBs and the Summit Ridge PIP payment log, DW08.",
    "Then, type $0.00 only when you know the amount is zero. If you don't know yet, write “pending”, so a missing EOB can't hide behind a zero.",
    "Finally, use a Notes column for anything the attorney should see: LOP, duplicate removed, itemized bill requested."
   ],
   "ask": "The adjuster already has the bills. So why does our itemization need a source column at all?"
  },
  "p2": {
   "why": "Tidy formatting and one column per payer are what make the totals trustworthy.",
   "talk": "These three habits look small, but they're what let the attorney and the Case Manager use your numbers without redoing them. The pitfall is the one that seems harmless: a single “Paid” column looks tidier, and it quietly wipes out the information we need most at settlement.",
   "walk": [
    "First, keep one date format, MM/DD/YYYY, and always show the cents: $86.40, never $86.4.",
    "Next, total every money column at the bottom. The totals are what the demand uses.",
    "Finally, the pitfall: one combined “Paid” column. You lose who paid what, and nobody can check BlueHarbor's reimbursement claim against it."
   ],
   "ask": "Your turn: Corner Pharmacy's receipt shows Dana paid $86.40 at the counter on 03/14/2026 for cyclobenzaprine and ibuprofen. Fill in every column for that line, including the source."
  }
 },
 "3::The Balance Formula: Billed − Adjustments − Payments": {
  "p1": {
   "why": "One formula checks every line and every total: billed, minus adjustments, minus every payment, equals the balance.",
   "talk": "The six boxes on this slide run Dana's totals through the formula. We start with $19,516.40 billed, take off $2,675.00 in adjustments, then BlueHarbor's $2,575.00, PIP's $2,500.00 and the $661.40 Dana paid herself, and we land on $11,105.00 still owed to providers. An adjustment, or write-off, is money the provider will never collect, usually the discount an in-network provider accepts under the health plan's contract. It lowers the balance, but it isn't a payment, because nobody paid it. The same formula works on every single line and on the column totals, so if a line doesn't balance, something's missing: a payment, an adjustment or a charge. Find it before you move on.",
   "walk": [
    "First, calculate the balance on each line and compare it with the balance on the provider's own ledger.",
    "Next, check the payments by payer: $2,575.00 plus $2,500.00 plus $661.40 is $5,736.40.",
    "Then, run the formula on the totals: $19,516.40 minus $2,675.00 minus $5,736.40 equals $11,105.00.",
    "Finally, if your balance and the provider's balance don't agree, ask the billing office for an updated ledger. Don't force the number to fit."
   ],
   "ask": "When a line doesn't balance, where do you look first: the payments, the adjustments or the charge?"
  },
  "p2": {
   "why": "Let the spreadsheet do the math, then prove it by hand.",
   "talk": "A formula is only as good as what you feed it. So we check one line by hand, we make sure the totals follow the same rule as the lines, and we watch for the classic mistake of counting write-offs as money paid.",
   "walk": [
    "First, let the spreadsheet calculate, then check one line by hand. Summit Orthopedic on 04/20/2026: $650.00 minus $310.00 minus $290.00 minus $50.00 is $0.00.",
    "Next, the column totals have to obey the same formula as each line. If they don't, one of the lines is wrong.",
    "Finally, the pitfall: counting the $2,675.00 in adjustments as money paid. Nobody paid it, and the paid total jumps from $5,736.40 to $8,411.40."
   ],
   "ask": "Your turn: Riverside Medical Center billed $4,850.00, wrote off $2,210.00, and BlueHarbor paid $2,140.00. Riverside's ledger shows a $0.00 balance. What else has to be on that line for the formula to work? Show us the math."
  }
 },
 "3::Who Paid? Health Insurance, PIP/MedPay and the Client": {
  "p1": {
   "why": "Who paid decides what happens at settlement, so every payment goes in its own payer's column.",
   "talk": "The icons on this slide are everyone who has paid, or hasn't yet, on Dana's file. BlueHarbor Health, her health plan, paid $2,575.00 and wants it back; Summit Ridge PIP paid $2,500.00, its whole benefit; Dana paid $661.40 herself; and Harbor Spine and Bayside haven't been paid at all, because they treated on letters of protection. PIP, personal injury protection, and MedPay are the client's own auto coverage for medical bills, no matter who caused the crash. In our training state, ST, the $2,500 PIP benefit pays first and has no reimbursement claim, but other states and policies work differently. A health plan payment usually comes with an adjustment too, because the in-network provider accepts the plan's rate and writes off the rest. The last icon is a warning: if a client has Medicare or Medicaid, tell the attorney right away, because those payers have recovery rights set by law.",
   "walk": [
    "First, get proof from each payer: BlueHarbor's EOBs or payment history, the PIP payment log, DW08, and Dana's receipts.",
    "Next, post each payment to the right line and the right payer column.",
    "Then, check PIP against its limit. $1,120.00 plus $1,380.00 is $2,500.00, so Summit Ridge PIP is exhausted and won't pay anything more.",
    "Finally, ask Dana what she paid out of pocket, get the receipts and match them to the ledgers."
   ],
   "ask": "Why does it matter at settlement whether a payment came from BlueHarbor, from PIP or from Dana herself?"
  },
  "p2": {
   "why": "Check the health plan's list against your own column, and date every payment you post.",
   "talk": "Health plans send a list of what they paid and want back, and usually it's right, but sometimes it sweeps in claims that have nothing to do with the accident. Your health-insurance column is how we catch that. The pitfall shows how one payment in the wrong column makes a claim look bigger than it is.",
   "walk": [
    "First, compare BlueHarbor's reimbursement claim notice, DW09, with your health-insurance column. If the plan lists unrelated claims, flag them to Attorney Bennett and Marcus Webb.",
    "Next, note the date and source of every payment. The balances get confirmed again before settlement, and you'll want to know where each number came from.",
    "Finally, the pitfall: posting a PIP payment in the health-insurance column. Put Clearview's $1,380.00 there by mistake and BlueHarbor's column shows $3,955.00 instead of $2,575.00, so its claim looks bigger than it really is."
   ],
   "ask": "Your turn: Dana asks you why BlueHarbor “wants its money back” when she pays her premiums. Who answers that question, and what exactly do you say to her today?"
  }
 },
 "3::What to Leave Out: Pre-DOI, Duplicate, Unrelated": {
  "p1": {
   "why": "The specials hold only charges for the accident injuries, and every line you take out gets a note.",
   "talk": "The specials only include charges for the accident injuries, on or after the DOI, 03/14/2026, and the table shows the three kinds of charge that come out. There are pre-DOI charges, like Harbor Spine's 2025 visits at $285.00; a duplicate, like Clearview's MRI listed twice at $2,400.00; and unrelated care, like Northgate's 05/02/2026 wellness exam at $275.00. That's $2,960.00 out, and $22,476.40 minus $2,960.00 gets us to $19,516.40. Leaving a line out is never silent: the last column says we always note what we removed, the amount and why, so nobody can say the firm padded the bills. And a pre-DOI charge leaves the specials, not the file: Dana's 2025 low back care stays flagged in the chronology at WHITFIELD 0010 to 0011.",
   "walk": [
    "First, sort every ledger by date of service and stop at anything dated before 03/14/2026.",
    "Next, look for repeated lines, same provider, date, CPT code and amount, and check the records to confirm there was only one service. For Clearview, there's one MRI report, at WHITFIELD 0041.",
    "Then, ask of every visit: is this treatment for the neck and back injuries from the collision? If it isn't, or you're not sure, flag it for the attorney.",
    "Finally, list the exclusions in a note under the itemization, with the amount and the reason for each one."
   ],
   "ask": "The Northgate visit is dated after the DOI. Why isn't that enough to put it in the specials?"
  },
  "p2": {
   "why": "When a charge is unclear, we flag it rather than decide it, and we never hide the history.",
   "talk": "These practices protect the case in both directions. We don't pad the specials with charges that don't belong, and we don't hide records the adjuster will find anyway. Dana's 2025 low back treatment is the example: the $285.00 comes out, and the records stay in, flagged.",
   "walk": [
    "First, when a charge is mixed or unclear, say a visit that treated the accident injuries and something else, don't decide it yourself. Flag it for the attorney.",
    "Next, check that related plus excluded equals the ledgers: $19,516.40 plus $2,960.00 is $22,476.40.",
    "Finally, the pitfall: dropping the 2025 Harbor Spine records along with the $285.00 charge. The adjuster will find the prior treatment anyway, and hiding it hurts the case far more than showing it."
   ],
   "ask": "Your turn: Clearview's ledger shows two MRI lines on 03/30/2026, both CPT 72141 and $2,400.00, and the records have one MRI report, WHITFIELD 0041. What goes in the itemization, what goes in the note, and what do you ask Clearview for?"
  }
 },
 "3::Reconciling Bills to the Chronology": {
  "p1": {
   "why": "The chronology proves the bills, and the bills test the chronology.",
   "talk": "This is where Day 2 meets Day 3. The table lines up each bill with its chronology entry and record pages, and most rows say “Match”: Riverside's two bills are one ED visit, and Harbor Spine billed 24 visits with 24 documented, through visit 24 of 24 on page 38. The rows that don't simply match are the interesting ones: Clearview's second MRI line has no second report, the 2025 Harbor Spine care is in the chronology but not the specials, and Northgate is in neither. The rule is that every bill line should match a visit, and every visit should have a bill, or a note saying why not. When they don't match, you've found either a billing error or a hole in the records request.",
   "walk": [
    "First, put the chronology next to the itemization and go provider by provider, date by date.",
    "Next, for a series of visits like chiropractic, count the visits in the records and count the charges on the ledger. They should be the same number.",
    "Then, fix what doesn't match. A bill with no record means you request the record; a record with no bill means you request the bill; dates that don't agree mean you call the billing office.",
    "Finally, note each fix in the itemization's notes and update the provider list."
   ],
   "ask": "A bill shows up for a visit that isn't anywhere in the chronology. What are the two things that could mean?"
  },
  "p2": {
   "why": "Reconcile every time a new document lands, not once at the very end.",
   "talk": "Records and bills don't all arrive on the same day; Bayside's itemized bill only came in on Wednesday, 10/07/2026. If you wait until the end to reconcile, you're matching everything at once under deadline pressure. Filling the source-page column as you go does half the work for you.",
   "walk": [
    "First, reconcile every time a new document arrives. Bayside's itemized bill gets matched to WHITFIELD 0060 to 0066 the same day it comes in.",
    "Next, fill the source-page column as you go. A line with a record page next to it is already reconciled.",
    "Finally, the pitfall: trusting a ledger's visit count without counting the notes. If the records and the ledger disagree, the adjuster will question every single visit."
   ],
   "ask": "Your turn: Harbor Spine's ledger totals $6,045.00, but 24 visits times $240.00 is $5,760.00. What explains the $285.00 difference, and what do you do with it on the itemization and in the chronology?"
  }
 },
 "3::Billed vs Paid: Keep Both Columns": {
  "p1": {
   "why": "We always keep both the billed and the paid numbers, and the attorney decides which one goes in the demand.",
   "talk": "On the left is billed, the provider's full charge before any discount: $19,516.40 for Dana. On the right is paid and still owed: $5,736.40 paid plus $11,105.00 owed, which is $16,841.40, and the gap between the two is exactly the $2,675.00 in adjustments. Whether a client recovers the billed amount or only what was paid or owed depends on the state's collateral source rule, meaning whether insurance payments reduce what the at-fault side owes, and on case law, and it varies a lot from state to state. Adjusters use the paid figure to argue the specials are lower, and some states do limit past medical damages to amounts paid or incurred. In our training state, ST, the demand uses billed amounts, and on any file it's the attorney's call. Our job is to keep both numbers accurate on every itemization.",
   "walk": [
    "First, fill the billed, adjustment and payment columns on every line. Never drop the adjustments to make the page look cleaner.",
    "Next, show both totals together: billed $19,516.40, and paid or still owed $16,841.40.",
    "Then, use the billed total in the draft demand, because the ST training rule and Attorney Bennett say so. On a file in another state, ask the attorney.",
    "Finally, keep the EOBs in the file. They're the proof of the payments and the adjustments."
   ],
   "ask": "If the demand uses billed amounts, why do we bother keeping the paid column at all?"
  },
  "p2": {
   "why": "When the adjuster pushes on paid versus billed, the attorney answers, and you've already got both numbers ready.",
   "talk": "You can count on the adjuster raising this; Keystone does it in its 11/04/2026 response, which we'll see on Day 5. With both columns ready, the attorney's reply is quick. What we never do is argue collateral source law ourselves.",
   "walk": [
    "First, expect the paid-not-billed argument. When Keystone makes it on 11/04/2026, Attorney Bennett will want both columns in front of her, and they'll already be there.",
    "Next, don't explain collateral source law to the client or the adjuster. That's legal advice, and it's the attorney's job.",
    "Finally, the pitfall: typing the health plan's “allowed amount” into the billed column. The three in-network lines shrink, and past medical drops by $2,675.00, down to $16,841.40."
   ],
   "ask": "Your turn: the adjuster tells you, “We only consider what was actually paid on Ms. Whitfield's bills.” What do you say back, who do you tell, and what do you have ready for Attorney Bennett?"
  }
 },
 "3::Liens, LOPs and Reimbursement Claims": {
  "p1": {
   "why": "Everyone with a right to be paid from the settlement goes on one list, and our job is to list them, not negotiate them.",
   "talk": "A lien or reimbursement claim is someone's right to be paid out of the settlement, and the table shows the kinds you'll meet. A letter of protection, or LOP, is the firm's promise to pay a provider from the settlement, so the provider waits: that's Harbor Spine at $5,760.00 and Bayside at $4,325.00, and Dana still owes those bills. Clearview's $1,020.00 is a plain unpaid balance, and BlueHarbor's $2,575.00 to date is a health plan reimbursement claim, with the final figure coming after settlement. PIP reimbursement depends on the state and the policy, and in ST there isn't one; there's no Medicare, Medicaid or statutory lien on this file. Attorney Bennett and Marcus Webb negotiate and pay liens. We list them and confirm them, and we never agree to a reduction or tell a provider or a plan the settlement amount.",
   "walk": [
    "First, build a Balances & Liens list under the itemization: the holder, the type, the amount, the date you confirmed it and the source.",
    "Next, confirm each provider's balance with an updated ledger before the demand goes out.",
    "Then, log BlueHarbor's claim with its reference number and the amount paid to date, and note the plan type if the notice gives it, like employer self-funded or insured. The attorney needs that to evaluate the claim.",
    "Finally, send the list with the itemization to Attorney Bennett and Marcus Webb."
   ],
   "ask": "What's the total the firm has to protect on Dana's file, provider balances plus BlueHarbor's claim to date?"
  },
  "p2": {
   "why": "Your list has to add up, and when anyone asks what the case is worth, you don't discuss it.",
   "talk": "Providers and plans will call you, because you're the one asking for their bills. Some will ask what the case is worth, or offer a discount in exchange for a number. That's exactly where the line between our jobs matters most.",
   "walk": [
    "First, check that the provider balances add up to the itemization's balance total: $5,760.00 plus $4,325.00 plus $1,020.00 is $11,105.00.",
    "Next, if a provider or plan asks what the case will settle for, or offers a reduction, don't answer. Take the details and route them to Marcus Webb and Attorney Bennett.",
    "Finally, the pitfall: a billing office offers “20% off if you tell us the settlement.” Agreeing isn't your call, and sharing case figures without the attorney's OK breaches Dana's confidentiality."
   ],
   "ask": "Your turn: Tasha Greene from Harbor Spine billing calls: “What's Dana's case worth? We'd take $4,500 on our $5,760 if it settles soon.” Say your answer out loud, then tell us who hears about the call and what you note in the file."
  }
 },
 "3::Future Medical Expenses": {
  "p1": {
   "why": "Future care goes on the specials only when a treating provider wrote it down: what, how many, over what period and at what cost.",
   "talk": "The five boxes on this slide take you from a doctor's note to a future medical figure. It starts with a written recommendation from the treating provider, in the records and never from the client, then what and how many, the cost of each, the math, and finally a cite, listed on its own line. Dr. Patel's 08/21/2026 note covers all of it: up to 2 more C5-6 epidural steroid injections, or ESIs, over the next 24 months if symptoms recur, at about $3,900.00 each, so 2 times $3,900.00 is $7,800.00, at WHITFIELD 0057. That was her MMI visit, maximum medical improvement, which means Dana's condition has leveled off and the doctor is looking ahead. Future care hasn't been billed, so it never goes in the billed, paid or balance columns; it's listed separately from the past specials.",
   "walk": [
    "First, find the recommendation through the chronology's MMI and future care flag, and read the exact words on the page.",
    "Next, record the item, the number, the timeframe, the cost and the page: 2 times $3,900.00 is $7,800.00, Exhibit E, WHITFIELD 0057.",
    "Then, if a recommendation gives no cost, ask the provider's office for a written estimate. Don't invent a number; if you point to a past bill for the same service, say so and let the attorney decide.",
    "Finally, copy the conditions, like “if symptoms recur”, into your note. The attorney decides how to present them."
   ],
   "ask": "Dr. Patel wrote “up to” 2 more ESIs “if symptoms recur.” Why do those exact words matter when you write the future medical line?"
  },
  "p2": {
   "why": "Quote the doctor exactly, keep future care separate, and never add care that isn't written down.",
   "talk": "Future medical is where it's easiest to overstate things without meaning to. The doctor writes “up to” and “if,” and by the time it reaches a draft it's turned into “she needs.” These practices keep us accurate, and the pitfall is the surgery someone mentioned on the phone that never made it into a record.",
   "walk": [
    "First, quote the provider and don't upgrade the words. “Up to 2 more ESIs if symptoms recur” is not “she needs 2 more injections.”",
    "Next, keep future care out of the past total: $19,516.40 past plus $7,800.00 future, never $27,316.40 of “past medical.”",
    "Finally, the pitfall: adding care the client mentioned on the phone, like “maybe surgery someday.” No written recommendation, no future-medical line."
   ],
   "ask": "Your turn: Dana tells you her chiropractor once mentioned she “might need maintenance visits.” Nothing in the records says so. Does it go in the future medical figure, and what do you do with what she told you?"
  }
 },
 "3::Lost Wages and Out-of-Pocket Costs": {
  "p1": {
   "why": "Lost wages need two kinds of proof: a medical reason to be off work, and the employer's confirmation of the days and the pay.",
   "talk": "The icons on this slide are the pieces of Dana's wage claim. She missed 14 workdays, 03/16 to 04/02/2026, and went back on 04/03, at $28.00 an hour for 8 hours, which is $224.00 a day. Lakeside Unified's payroll office confirmed the days and the rate in its Wage and Time-Loss Verification, DW25, and her providers' work-status notes, the ED record and Harbor Spine's pages 15 and 26, back it up. So 14 workdays times $224.00 is $3,136.00. The last icon is out-of-pocket costs, meaning accident expenses the client paid that aren't already on a provider's bill. Careful here: the $661.40 Dana paid her providers is already inside the $19,516.40 billed, so it doesn't get added again.",
   "walk": [
    "First, request the employer's wage and time-loss verification with the client's authorization. Dana's is on file from Lakeside USD payroll, DW25.",
    "Next, match the days to the medical notes. The 03/14 ED visit took her off work, Harbor Spine's 03/17 exam kept her off on page 15, and the 03/31 re-evaluation released her to return on 04/03 on page 26.",
    "Then, calculate days times the daily rate, or hours times the hourly rate, and show the math in the specials summary.",
    "Finally, ask the client for receipts for any other accident costs, and let the attorney decide what's claimed."
   ],
   "ask": "Why do we need both the doctor's note and the employer's letter? What goes wrong if we only have one of them?"
  },
  "p2": {
   "why": "Count workdays, not calendar days, and never count the same dollar twice.",
   "talk": "Wage math looks easy, which is exactly why mistakes slip through. Two errors come up again and again: counting calendar days instead of workdays, and adding the client's own copays a second time. And if leave was used, that's a question for the attorney, not for us.",
   "walk": [
    "First, if the verification shows sick leave or vacation was used, note it. Whether used leave can be claimed depends on the state, and that's the attorney's call.",
    "Next, count workdays, not calendar days. 03/16 to 04/02/2026 is 18 calendar days but only 14 workdays.",
    "Finally, the pitfall: adding Dana's copays and pharmacy receipt as a separate “out-of-pocket” line. That double-counts $661.40 that's already in the billed total."
   ],
   "ask": "Your turn: suppose Dana says she also left work early for Dr. Patel's 04/20/2026 appointment. The payroll verification only covers 03/16 to 04/02/2026. What do you need before that time can be added, and who decides whether it goes in?"
  }
 },
 "3::The Specials Summary": {
  "p1": {
   "why": "One page rolls up Dana's economic damages, and every number on it has to match the itemization to the cent.",
   "talk": "The six boxes on this slide build the summary from top to bottom. Past medical at $19,516.40, future medical at $7,800.00 and lost wages at $3,136.00 add up to $30,452.40 in total economic damages. Under that sit the balances and liens: $11,105.00 owed to providers and BlueHarbor's $2,575.00 to date. Then the whole package goes to Attorney Bennett with the itemization and the sources, because it feeds the demand's damages section and Exhibit D and has to match to the cent. It's a draft for the attorney: she decides what goes in the letter and sets the demand amount. The summary never says what the case is worth.",
   "walk": [
    "First, pull the totals from the finished itemization: past medical billed $19,516.40, with the $5,736.40 paid and the $11,105.00 still owed shown underneath.",
    "Next, add future medical, $7,800.00, and lost wages, $3,136.00, as separate lines with their record and exhibit cites.",
    "Then, total the economic damages: $19,516.40 plus $7,800.00 plus $3,136.00 is $30,452.40.",
    "After that, leave out property damage. Dana's $6,480.00 CR-V repair was paid on the separate property damage claim.",
    "Finally, attach the exclusions note and the Balances & Liens list, and send the whole package to Attorney Bennett for review."
   ],
   "ask": "Attorney Bennett set Dana's demand at $85,000.00. Why doesn't that number appear anywhere on the specials summary?"
  },
  "p2": {
   "why": "The same number everywhere it appears, with the math shown.",
   "talk": "The past medical figure will show up in at least four places: the summary, the itemization, Exhibit D and the letter. If any one of them is different, the adjuster gets to pick the lowest, or argue we're padding. So we tie out, we show our work and we keep the excluded lines out.",
   "walk": [
    "First, tie out: the past medical figure has to be the same number in the summary, the itemization, Exhibit D and the draft letter.",
    "Next, show the math on each line, 14 times $224.00 and 2 times $3,900.00, so the adjuster can check it without asking.",
    "Finally, the pitfall: a total that sneaks the excluded lines back in. Using $22,476.40 instead of $19,516.40 turns $30,452.40 into $33,412.40 and hands the adjuster a padding argument."
   ],
   "ask": "Your turn: Attorney Bennett stops by and asks, “What are Dana's total economic damages, and how much of her past medical is still owed?” Answer both from the summary, out loud, with the sources."
  }
 },
 "3::Final Tie-Out & Red Flags → Skill Builder": {
  "p1": {
   "why": "Before the itemization leaves your desk, every line balances, every total matches, and every number agrees with the chronology and the summary.",
   "talk": "Before the itemization leaves your desk, it has to tie out: each line balances, the columns total, the totals match the bills, and the numbers match the chronology and the summary. The six icons are that checklist on Dana's file: itemized bills from everyone, with Bayside's arriving 10/07/2026; $2,960.00 of exclusions noted; the formula landing on $11,105.00; every line matched to a record page; the liens listed; and $30,452.40 the same everywhere. Most itemization errors are predictable: a balance-due statement instead of an itemized bill, a pre-DOI or duplicate line left in, an unrelated visit, a payment in the wrong column, or a double count. And this last check is also a handoff. The attorney gets the itemization, the exclusions note, the Balances & Liens list and the specials summary, all together.",
   "walk": [
    "First, re-add every column and run the balance formula on the totals.",
    "Next, check related plus excluded against the ledgers: $19,516.40 plus $2,960.00 is $22,476.40.",
    "Then, check each line against the chronology, and each lien against the balance column.",
    "Finally, save the final version with its date, upload it to the CMS, and route it to Attorney Bennett, copying Marcus Webb on the Balances & Liens list."
   ],
   "ask": "Of the predictable errors on this slide, which one do you think you'd be most likely to miss on a busy day?"
  },
  "p2": {
   "why": "Read the totals back against the bills one last time, because transposed digits are the most common error in a finished itemization.",
   "talk": "These last practices keep the file consistent after you think you're done. A bill arrives late, someone updates one document and not the other, and suddenly the packet has two different totals. A final read-back and a note in the CMS are what stop that.",
   "walk": [
    "First, read the totals back against the source bills one more time. Transposed digits are the most common error in a finished itemization.",
    "Next, log in the CMS what you excluded and why, so nobody adds it back later.",
    "Finally, the pitfall: updating the itemization when a new bill arrives but not the summary. Now there are two different totals in the same packet."
   ],
   "ask": "Your turn: open the Day 3 Skill Builder, the Bills Itemization Workbench. It's Wednesday 10/07/2026 and Bayside's itemized bill, DW23, has just arrived, so sort Dana's billing lines, total the itemization, list the balances and liens to protect and build the specials summary, then tell us which lines, totals and lists the new bill made you check and who you told."
  }
 }
});
