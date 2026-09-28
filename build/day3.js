const DAY3 = {
  id: 3,
  title: "Bills Itemization & Medical Specials",
  theme: "What the Itemization Is and Why It Matters · Reading a UB-04 and a CMS-1500 · The Itemization's Columns · The Balance Formula: Billed − Adjustments − Payments · Who Paid? Health Insurance, PIP/MedPay and the Client · What to Leave Out: Pre-DOI, Duplicate, Unrelated · Reconciling Bills to the Chronology · Billed vs Paid: Keep Both Columns · Liens, LOPs and Reimbursement Claims · Future Medical Expenses · Lost Wages and Out-of-Pocket Costs · The Specials Summary · Final Tie-Out & Red Flags → Skill Builder",
  objective: "Read facility and professional bills, build a line-by-line itemization with billed, adjusted, paid and balance columns, leave out (and note) what doesn't belong, reconcile the bills with the chronology, list the balances and reimbursement claims to protect, and roll past medical, future medical and lost wages into a specials summary that ties out to the cent.",
  lessons: [
    { h: "What the Itemization Is and Why It Matters",
      layout: "ICONLIST",
      icons: [
        { icon: "🧾", label: "One line per charge", desc: "Provider, date of service, what was done and what it cost — from the itemized bill." },
        { icon: "💵", label: "Who paid what", desc: "Billed, adjusted, paid by each payer, and what is still owed." },
        { icon: "📑", label: "Feeds the demand", desc: "Becomes Exhibit D and the medical specials figure in the letter." },
        { icon: "🔒", label: "Protects the balances", desc: "Shows every provider and plan that must be paid from the settlement." },
        { icon: "🔎", label: "Traceable", desc: "Every number points back to a bill and a record page." }
      ],
      fourPart: {
        corePrinciples: [
          "The itemization (also called the medical specials or bills summary) lists every accident-related charge, one line per provider and date of service, with what was billed, adjusted, paid and still owed.",
          "It is the proof behind the medical expenses in the demand. The adjuster checks it line by line against the bills, and one wrong number costs the firm credibility on every other number.",
          "It also tells the attorney and the Case Manager who must be paid from the settlement: the LOP providers, the unpaid balances and the health plan's reimbursement claim."
        ],
        howTo: [
          "Open the Bills Itemization Template (TP03) and the provider list you built on Day 1.",
          "Work one provider at a time from its itemized bill or ledger — never from a phone quote or a balance-due statement.",
          "Enter one line per date of service, or one line for a series of identical visits with the date range and count (Harbor Spine: 24 visits × $240.00).",
          "Total the columns and check them against the bills before anyone uses the numbers."
        ],
        bestPractices: [
          "Keep the working itemization in a spreadsheet so the totals recalculate, then copy the final figures into the demand — never retype them.",
          "Name each version with its date (“Whitfield specials v2 — 10/07/2026”) so everyone works from the same numbers.",
          "Pitfall: building the specials from the client's memory or a billing office's phone quote — the adjuster will ask for the bill."
        ],
        discussionCase: "Dana's related bills total $19,516.40, but her providers' ledgers add up to $22,476.40. Before you look at a single line, what could explain a $2,960.00 difference?"
      },
      trainerCue: "Show the finished Whitfield itemization: 9 related lines, $19,516.40 billed, $11,105.00 still owed. Hand out the Day 3 Bills Itemization Checklist — today's job is to build that itemization and prove every number."
    },
    { h: "Reading a UB-04 and a CMS-1500",
      layout: "COMPARE",
      compareLeft: { label: "UB-04 (CMS-1450) — facility", items: ["Hospitals, ERs and other facilities bill the facility's own charges", "Statement period (FL 6) and a service date on each line (FL 45)", "Revenue codes (FL 42), e.g. 045X emergency room, 035X CT", "CPT/HCPCS codes (FL 44) and the charge on each line (FL 47)", "Payer (FL 50), prior payments (FL 54), diagnosis codes (FL 67)", "Dana: Riverside Medical Center, 03/14/2026, $4,850.00"] },
      compareRight: { label: "CMS-1500 (HCFA) — professional", items: ["Physicians, chiropractors, therapists, imaging centers and pain doctors bill their services", "Date of service on each line (Box 24A)", "CPT/HCPCS code and modifier (24D), charge (24F), units (24G)", "Diagnosis codes (Box 21) and the rendering provider's NPI (24J)", "Total charge (Box 28) and amount paid (Box 29)", "Dana: Riverside Emergency Physicians, 03/14/2026, $1,120.00"] },
      fourPart: {
        corePrinciples: [
          "A UB-04 is the facility's claim form (the building, staff, equipment and supplies). A CMS-1500, still called the HCFA, is the professional claim form (the doctor's, chiropractor's or therapist's own services).",
          "One ER visit usually produces both. Dana's 03/14/2026 visit has a Riverside Medical Center UB-04 ($4,850.00) and a Riverside Emergency Physicians CMS-1500 ($1,120.00) — two providers, two real charges, not a duplicate.",
          "The fields that matter for the itemization are the same on both forms: who billed, the date of service, the code and description, and the charge."
        ],
        howTo: [
          "Identify the form: revenue codes and numbered form locators (FL) mean a UB-04; numbered boxes with a CPT code on each line mean a CMS-1500.",
          "Read the provider name and the dates of service first, and confirm they are on or after the DOI (03/14/2026).",
          "Read each line's code, description and charge; add the lines and compare with the form's total.",
          "Remember that a claim form shows charges. The ledger or the insurer's explanation of benefits (EOB) shows what was paid and written off — get both."
        ],
        bestPractices: [
          "For a hospital, ask for the UB-04 and the detailed itemized statement: the UB-04 groups charges by revenue code; the statement lists each charge.",
          "Learn the file's two key codes: CPT 72141 (MRI cervical spine without contrast) and CPT 62321 (cervical interlaminar epidural injection with imaging guidance).",
          "Pitfall: treating the ER physician's CMS-1500 as a duplicate of the hospital's UB-04 and deleting $1,120.00 of real specials."
        ],
        discussionCase: "Dana's file has two bills dated 03/14/2026 from “Riverside.” How do you prove to yourself they are two separate charges and not the same visit billed twice?"
      },
      trainerCue: "Put DW16 (Riverside UB-04) and DW17 (Riverside Emergency Physicians CMS-1500) side by side. Have trainees find the provider, date of service, code and charge on each before moving on."
    },
    { h: "The Itemization's Columns",
      layout: "TABLE",
      tableHeaders: ["Column", "What goes in it", "Dana's example (Clearview Imaging)"],
      tableRows: [
        ["Provider", "The billing provider's name, exactly as on the bill", "Clearview Imaging"],
        ["Date(s) of service", "The DOS, or the first and last dates of a series", "03/30/2026"],
        ["Description / CPT", "What was done, with the code", "MRI cervical spine w/o contrast, CPT 72141"],
        ["Billed", "The full charge before any discount", "$2,400.00"],
        ["Adjustments / write-offs", "What the provider wrote off and won't collect", "$0.00"],
        ["Paid: health ins. · PIP/MedPay · client", "One column per payer", "PIP $1,380.00"],
        ["Balance", "Billed − adjustments − all payments", "$1,020.00"],
        ["Source page", "Where each number comes from", "Clearview ledger; MRI report WHITFIELD 0041"]
      ],
      fourPart: {
        corePrinciples: [
          "Every line answers the same questions: who, when, what, how much was charged, how much was written off, who paid, what is left, and where to find it.",
          "Payments get a separate column for each payer — health insurance, PIP/MedPay and the client — because each one is treated differently at settlement.",
          "The source column makes the itemization traceable: anyone can check a number against the bill and the record in seconds."
        ],
        howTo: [
          "Set up the columns from the Bills Itemization Template (TP03) before you enter anything.",
          "Fill each line from the itemized bill, then fill the payment columns from the ledgers, the EOBs and the Summit Ridge PIP payment log (DW08).",
          "Enter $0.00 only when you know the amount is zero; mark an unknown amount “pending” so a missing EOB can't hide.",
          "Use a Notes column for anything the attorney should see: LOP, duplicate removed, itemized bill requested."
        ],
        bestPractices: [
          "Keep one date format (MM/DD/YYYY) and always show cents ($86.40, not $86.4).",
          "Total every money column at the bottom — the totals are what the demand uses.",
          "Pitfall: one combined “Paid” column — you lose who paid, and no one can check the health plan's reimbursement claim."
        ],
        discussionCase: "Corner Pharmacy's receipt shows Dana paid $86.40 at the counter on 03/14/2026 for cyclobenzaprine and ibuprofen. How do you fill each column for that line?"
      },
      trainerCue: "Fill the Clearview line together, column by column. Then have trainees fill Corner Pharmacy alone: billed $86.40, adjustments $0.00, client paid $86.40, balance $0.00, source DW18."
    },
    { h: "The Balance Formula: Billed − Adjustments − Payments",
      layout: "PROCESS",
      processSteps: [
        { label: "Billed", desc: "$19,516.40 — every related charge." },
        { label: "− Adjustments", desc: "$2,675.00 — in-network write-offs." },
        { label: "− Health insurance", desc: "$2,575.00 — BlueHarbor Health." },
        { label: "− PIP / MedPay", desc: "$2,500.00 — Summit Ridge PIP (exhausted)." },
        { label: "− Client", desc: "$661.40 — what Dana paid herself." },
        { label: "= Balance", desc: "$11,105.00 — still owed to providers." }
      ],
      fourPart: {
        corePrinciples: [
          "Balance = Billed − Adjustments − all payments (health insurance + PIP/MedPay + client). It works on every line and on the column totals.",
          "An adjustment is money the provider wrote off and will never collect — usually the discount an in-network provider accepts under the health plan's contract. It is not a payment.",
          "If a line doesn't balance, something is missing: a payment, an adjustment or a charge. Find it before you move on."
        ],
        howTo: [
          "Calculate the balance on each line and compare it with the balance on the provider's ledger.",
          "Check the payments by payer: $2,575.00 + $2,500.00 + $661.40 = $5,736.40.",
          "Run the formula on the totals: $19,516.40 − $2,675.00 − $5,736.40 = $11,105.00.",
          "When your balance and the provider's balance differ, ask the billing office for an updated ledger — don't force the number."
        ],
        bestPractices: [
          "Let the spreadsheet do the math, then check one line by hand: Summit Orthopedic 04/20/2026 — $650.00 − $310.00 − $290.00 − $50.00 = $0.00.",
          "The column totals must obey the same formula as each line — if they don't, a line is wrong.",
          "Pitfall: counting the $2,675.00 in adjustments as money paid — no one paid it, and the paid total becomes $8,411.40 instead of $5,736.40."
        ],
        discussionCase: "Riverside Medical Center billed $4,850.00, wrote off $2,210.00, and BlueHarbor paid $2,140.00. Riverside's ledger shows a $0.00 balance. What else must be on that line for the formula to work?"
      },
      trainerCue: "Walk the six boxes with the Whitfield totals, then do the Riverside line out loud: $4,850.00 − $2,210.00 − $2,140.00 − $500.00 (Dana) = $0.00."
    },
    { h: "Who Paid? Health Insurance, PIP/MedPay and the Client",
      layout: "ICONLIST",
      icons: [
        { icon: "🏥", label: "Health insurance", desc: "BlueHarbor Health paid $2,575.00 on three lines and has a reimbursement claim." },
        { icon: "🚗", label: "PIP / MedPay", desc: "Summit Ridge PIP paid $2,500.00: Riverside Emergency Physicians $1,120.00 + Clearview $1,380.00. Exhausted." },
        { icon: "👛", label: "The client", desc: "Dana paid $661.40: Riverside $500.00, Corner Pharmacy $86.40, Summit Orthopedic $50.00 + $25.00." },
        { icon: "📝", label: "No one yet (LOP)", desc: "Harbor Spine and Bayside treated on letters of protection — to be paid from the settlement." },
        { icon: "🏛️", label: "Medicare / Medicaid", desc: "Government payers with recovery rights set by law — tell the attorney at once if the client has either." }
      ],
      fourPart: {
        corePrinciples: [
          "Every payment has a source, and the source decides what happens at settlement: a health plan may claim reimbursement, a PIP or MedPay carrier may or may not, and what the client paid is her own loss.",
          "PIP (no-fault) and MedPay are the client's own auto coverage for medical bills, regardless of fault. In ST (training rule), the $2,500 PIP benefit pays first and has no reimbursement claim — other states and policies differ.",
          "A health insurance payment usually comes with an adjustment: the in-network provider accepts the plan's rate and writes off the rest."
        ],
        howTo: [
          "Get proof from each payer: the health plan's EOBs or payment history, the PIP payment log (DW08) and the client's receipts.",
          "Post each payment to the right line and the right payer column.",
          "Check PIP against its limit: $1,120.00 + $1,380.00 = $2,500.00, so Summit Ridge PIP is exhausted and will pay nothing more.",
          "Ask the client what she paid out of pocket, get the receipts, and match them to the ledgers."
        ],
        bestPractices: [
          "Compare the health plan's list of payments (BlueHarbor's reimbursement claim notice, DW09) with your health-insurance column; plans' lists sometimes include unrelated claims — flag any to the attorney and the Case Manager.",
          "Note the date and source of every payment — the balances will be confirmed again before settlement.",
          "Pitfall: posting a PIP payment in the health-insurance column — BlueHarbor's column then shows $3,955.00 instead of $2,575.00, and its claim looks bigger than it is."
        ],
        discussionCase: "Dana asks why BlueHarbor “wants its money back” when she pays premiums. Who answers that question, and what do you tell her today?"
      },
      trainerCue: "Have trainees sort Dana's $5,736.40 in payments into three piles: BlueHarbor $2,575.00, PIP $2,500.00, Dana $661.40. Questions about the plan's rights go to Attorney Bennett."
    },
    { h: "What to Leave Out: Pre-DOI, Duplicate, Unrelated",
      layout: "TABLE",
      tableHeaders: ["Leave out", "How you spot it", "Dana's file", "Always note"],
      tableRows: [
        ["Pre-DOI charges", "Dates of service before the DOI", "Harbor Spine 01/08–01/29/2025, $285.00", "Out of the specials; the prior low back care stays flagged in the chronology"],
        ["Duplicate lines", "Same provider, date, code and amount twice", "Clearview MRI 03/30/2026, CPT 72141, $2,400.00 listed twice", "Keep one line; note the $2,400.00 duplicate removed"],
        ["Unrelated care", "Care for something other than the accident injuries", "Northgate Family Practice 05/02/2026 wellness exam, $275.00", "Out of the specials; note why"],
        ["Total left out", "Add the excluded lines", "$285.00 + $2,400.00 + $275.00 = $2,960.00", "$22,476.40 − $2,960.00 = $19,516.40"]
      ],
      fourPart: {
        corePrinciples: [
          "The specials include only charges for the accident injuries, on or after the DOI (03/14/2026). Everything else comes out.",
          "Leaving a line out is never silent: note what you removed, the amount and why, so the attorney can see it and no one can say the firm padded the bills.",
          "A pre-DOI charge leaves the specials but not the file: Dana's 2025 Harbor Spine care stays in the chronology, flagged as a prior injury (WHITFIELD 0010–0011)."
        ],
        howTo: [
          "Sort every ledger by date of service and stop at anything dated before 03/14/2026.",
          "Look for repeated lines — same provider, date, CPT code and amount — and check the record to confirm there was only one service.",
          "Ask of every visit: is this treatment for the neck and back injuries from the collision? If it isn't, or you aren't sure, flag it for the attorney.",
          "List the exclusions in a note under the itemization, with the amount and the reason for each."
        ],
        bestPractices: [
          "When a charge is mixed or unclear (a visit that treated the accident injuries and something else), don't decide — flag it for the attorney.",
          "Check that related plus excluded equals the ledgers: $19,516.40 + $2,960.00 = $22,476.40.",
          "Pitfall: dropping the 2025 Harbor Spine records along with the $285.00 charge — the adjuster will find the prior treatment, and hiding it hurts the case."
        ],
        discussionCase: "Clearview's ledger shows two MRI lines on 03/30/2026, both CPT 72141 and $2,400.00, and the records have one MRI report (WHITFIELD 0041). What goes in the itemization, and what do you ask Clearview for?"
      },
      trainerCue: "Planted in the documents: DW19 (Harbor Spine ledger) includes the 2025 charges, DW20 (Clearview ledger) lists the MRI twice, and DW24 (Northgate) is the unrelated wellness exam. $22,476.40 − $2,960.00 = $19,516.40."
    },
    { h: "Reconciling Bills to the Chronology",
      layout: "TABLE",
      tableHeaders: ["Bill line", "Chronology entry (record pages)", "Result"],
      tableRows: [
        ["Riverside Medical Center + Riverside Emergency Physicians, 03/14/2026", "ED visit, WHITFIELD 0001–0009", "Match — one visit, two bills (facility and physician)"],
        ["Corner Pharmacy, 03/14/2026, $86.40", "ED prescriptions: cyclobenzaprine, ibuprofen", "Match"],
        ["Harbor Spine, 03/17–05/14/2026, 24 visits × $240.00", "Visits 1–24, WHITFIELD 0012–0038 (visit 24 of 24, p. 38)", "Match — 24 visits billed, 24 documented"],
        ["Clearview Imaging, 03/30/2026, CPT 72141", "Cervical MRI report, WHITFIELD 0041", "One MRI — the second ledger line is a duplicate"],
        ["Summit Orthopedic, 04/20/2026 and 08/21/2026", "Dr. Patel's consult (0052–0055) and follow-up (0056–0058)", "Match"],
        ["Bayside, 06/26/2026 and 07/10/2026 (CPT 62321)", "New patient evaluation (0060–0063); C5-6 ESI (0064–0066)", "Match — once the itemized bill arrives"],
        ["Harbor Spine 2025, $285.00", "Prior-injury entry, WHITFIELD 0010–0011", "In the chronology (flagged), not in the specials"],
        ["Northgate, 05/02/2026, $275.00", "No entry — unrelated wellness exam", "In neither"]
      ],
      fourPart: {
        corePrinciples: [
          "Every bill line should match a visit in the chronology, and every visit in the chronology should have a bill — or a note saying why not.",
          "Reconciling catches billing errors (duplicates, wrong dates, visits never documented) and record gaps (a bill with no record means the records request is incomplete).",
          "Dates and counts must agree: 24 Harbor Spine visits in the records means 24 visits on the itemization."
        ],
        howTo: [
          "Put the chronology next to the itemization and go provider by provider, date by date.",
          "For a series of visits (chiropractic, therapy), count the visits in the records and the charges on the ledger.",
          "Bill with no record → request the record. Record with no bill → request the bill. Dates that don't agree → ask the billing office.",
          "Note each fix in the itemization's notes and update the provider list."
        ],
        bestPractices: [
          "Reconcile every time a new document arrives — Bayside's itemized bill (10/07/2026) gets matched to WHITFIELD 0060–0066 the same day.",
          "Fill the source-page column as you go: a line with a record page next to it is already reconciled.",
          "Pitfall: trusting a ledger's visit count without counting the notes — if the records and the ledger disagree, the adjuster will question every visit."
        ],
        discussionCase: "Harbor Spine's ledger totals $6,045.00, but 24 visits × $240.00 is $5,760.00. What explains the $285.00 difference, and what do you do with it?"
      },
      trainerCue: "This is where Day 2 meets Day 3: the chronology proves the bills and the bills test the chronology. Harbor Spine's $6,045.00 ledger = $5,760.00 related + $285.00 from 2025."
    },
    { h: "Billed vs Paid: Keep Both Columns",
      layout: "COMPARE",
      compareLeft: { label: "Billed (charged)", items: ["The provider's full charge before any discount", "Dana: $19,516.40", "ST training rule: the demand's past medical uses billed amounts", "Many states' collateral source rules don't reduce damages for insurance payments", "Adjusters often call billed amounts inflated"] },
      compareRight: { label: "Paid (and still owed)", items: ["What was actually paid, plus what is still owed", "Dana: $5,736.40 paid + $11,105.00 owed = $16,841.40", "Some states limit past medical damages to amounts paid or incurred", "Adjusters use it to argue the specials are lower", "Needed for liens, reimbursement claims and the settlement statement"] },
      fourPart: {
        corePrinciples: [
          "The billed amount is what the provider charged; the paid amount is what insurers and the client actually paid. On Dana's file the gap between billed and paid-or-owed is the $2,675.00 in adjustments.",
          "Whether a client recovers the full billed amount or only what was paid or owed depends on the state's collateral source rule and case law, and it varies a lot from state to state.",
          "You keep both on every itemization. The attorney decides which figure goes in the demand; in ST (training rule) the demand uses the billed amounts."
        ],
        howTo: [
          "Fill the billed, adjustment and payment columns on every line — never drop the adjustments to make the page look cleaner.",
          "Show both totals together: billed $19,516.40, and paid or still owed $16,841.40 ($19,516.40 − $2,675.00).",
          "Use the billed total in the draft demand because the ST rule and Attorney Bennett say so; on a file in another state, ask the attorney.",
          "Keep the EOBs in the file — they prove the payments and the adjustments."
        ],
        bestPractices: [
          "Expect the paid-not-billed argument (Keystone raises it in its 11/04/2026 response — Day 5). With both columns ready, the attorney's reply is quick.",
          "Don't explain collateral source law to the client or the adjuster — that's the attorney's job.",
          "Pitfall: typing the health plan's “allowed amount” in the billed column — the three in-network lines shrink and past medical drops by $2,675.00, to $16,841.40."
        ],
        discussionCase: "The adjuster tells you, “We only consider what was actually paid on Ms. Whitfield's bills.” What do you do with that statement, and what do you have ready for the attorney?"
      },
      trainerCue: "Stress the split: the Demand Specialist keeps both numbers accurate; the attorney decides which one the demand uses. Dana: $19,516.40 billed vs $16,841.40 paid or owed."
    },
    { h: "Liens, LOPs and Reimbursement Claims",
      layout: "TABLE",
      tableHeaders: ["Type", "What it is", "Dana's file"],
      tableRows: [
        ["Letter of protection (LOP)", "The firm's promise to pay the provider from the settlement; the provider waits for payment", "Harbor Spine $5,760.00 · Bayside $4,325.00 ($425.00 + $3,900.00)"],
        ["Unpaid provider balance", "A bill still owed, with no LOP", "Clearview Imaging $1,020.00 (after PIP)"],
        ["Health plan reimbursement", "The plan's right to be repaid from the recovery, under the plan terms and the law", "BlueHarbor Health $2,575.00 paid to date — final figure after settlement"],
        ["PIP / MedPay reimbursement", "Depends on the state and the policy", "Summit Ridge PIP — none in ST (training rule)"],
        ["Medicare / Medicaid", "Recovery rights set by statute; must be resolved from the settlement", "None on file (Dana has a private PPO)"],
        ["Statutory hospital or provider lien", "A lien some states give hospitals or providers by law, usually with a notice requirement", "None on file"]
      ],
      fourPart: {
        corePrinciples: [
          "A lien or reimbursement claim is someone's right to be paid from the settlement. The balance and payer columns are how the firm knows who they are and how much each one claims.",
          "LOP providers (Harbor Spine and Bayside) treated without payment up front. The client still owes the bill, and the firm has promised to pay it from the recovery.",
          "The attorney and the Case Manager negotiate and pay liens. The Demand Specialist lists and confirms them — never agrees to a reduction and never tells a provider or a plan the settlement amount."
        ],
        howTo: [
          "Build a Balances & Liens list under the itemization: holder, type, amount, the date you confirmed it, and the source.",
          "Confirm each provider's balance with an updated ledger before the demand goes out.",
          "Log the health plan's claim with its reference number and the amount paid to date, and note the plan type if the notice gives it (employer self-funded, insured) — the attorney needs it to evaluate the claim.",
          "Send the list with the itemization to Attorney Bennett and Marcus Webb."
        ],
        bestPractices: [
          "Check that the provider balances add up to the itemization's balance total: $5,760.00 + $4,325.00 + $1,020.00 = $11,105.00.",
          "If a provider or plan asks what the case will settle for, or offers a reduction, don't answer — take the details and route them to the Case Manager and the attorney.",
          "Pitfall: a billing office offers “20% off if you tell us the settlement” — agreeing isn't your call, and sharing case figures without the attorney's OK breaches the client's confidentiality."
        ],
        discussionCase: "Tasha Greene at Harbor Spine billing calls: “What's Dana's case worth? We'd take $4,500 on our $5,760 if it settles soon.” What do you say, and who hears about the call?"
      },
      trainerCue: "Total to protect on Dana's file: provider balances $11,105.00 plus BlueHarbor's $2,575.00 claim to date = $13,680.00. Negotiation and payoff belong to Laura Bennett and Marcus Webb."
    },
    { h: "Future Medical Expenses",
      layout: "PROCESS",
      processSteps: [
        { label: "Written recommendation", desc: "From the treating provider, in the records — not from the client." },
        { label: "What and how many", desc: "Dana: up to 2 more C5-6 ESIs over 24 months, if symptoms recur." },
        { label: "Cost per item", desc: "About $3,900.00 each, per Dr. Patel." },
        { label: "Calculate", desc: "2 × $3,900.00 = $7,800.00." },
        { label: "Cite and list separately", desc: "WHITFIELD 0057; never inside the past specials." }
      ],
      fourPart: {
        corePrinciples: [
          "Future medical expenses are care a provider says the client is likely to need. At LSH they go on the specials only when a treating provider recommends them in writing.",
          "A good recommendation says what care, how much, over what period and at what cost. Dr. Patel's 08/21/2026 note (MMI visit) does all four: up to 2 more C5-6 ESIs over 24 months if symptoms recur, about $3,900 each.",
          "Future medical is listed separately from past specials. It hasn't been billed, so it never goes in the billed, paid or balance columns."
        ],
        howTo: [
          "Find the recommendation through the chronology's MMI / future care flag and read the exact words on the page.",
          "Record the item, the number, the timeframe, the cost and the page: 2 × $3,900.00 = $7,800.00 (Ex. E, WHITFIELD 0057).",
          "If a recommendation gives no cost, ask the provider's office for a written estimate. Don't make up a number — if you point to a past bill for the same service, say so and let the attorney decide.",
          "Copy the conditions (“if symptoms recur”) into your note — the attorney decides how to present them."
        ],
        bestPractices: [
          "Quote the provider; don't upgrade the words — “up to 2 more ESIs if symptoms recur” is not “she needs 2 more injections.”",
          "Keep future care out of the past total: $19,516.40 past + $7,800.00 future — never $27,316.40 “past medical.”",
          "Pitfall: adding care the client mentioned on the phone (“maybe surgery someday”) — no written recommendation, no future-medical line."
        ],
        discussionCase: "Dana tells you her chiropractor once mentioned she “might need maintenance visits.” Nothing in the records says so. Does it go in the future medical figure? What do you do with the information?"
      },
      trainerCue: "Future medical on Dana's file: $7,800.00 from Dr. Patel's 08/21/2026 note (WHITFIELD 0057). It's the only future-care line — Harbor Spine discharged her improved (p. 38) with no further plan."
    },
    { h: "Lost Wages and Out-of-Pocket Costs",
      layout: "ICONLIST",
      icons: [
        { icon: "📆", label: "Days missed", desc: "Dana: 14 workdays, 03/16/2026–04/02/2026; back to work 04/03/2026." },
        { icon: "💲", label: "Rate of pay", desc: "$28.00 an hour × 8 hours = $224.00 a workday." },
        { icon: "🏢", label: "Employer verification", desc: "Lakeside USD payroll's Wage & Time-Loss Verification (DW25) confirms the days and the rate." },
        { icon: "🩺", label: "Off-work notes", desc: "The providers took her off work: ED record; Harbor Spine pp. 15 and 26." },
        { icon: "🧾", label: "Out-of-pocket costs", desc: "Receipts for accident costs not already on a provider's bill." }
      ],
      fourPart: {
        corePrinciples: [
          "Lost wages are the pay the client lost because the injuries kept her from working. They need two kinds of proof: a medical reason to be off work and the employer's confirmation of the days and the pay.",
          "Dana's wage loss is 14 workdays × $224.00 = $3,136.00, verified by Lakeside USD payroll, with Harbor Spine's off-work notes (pp. 15, 26) and her return to work on 04/03/2026.",
          "Out-of-pocket costs are accident expenses the client paid that aren't already on a provider's bill. Dana's $661.40 in payments to her providers is already inside the $19,516.40 billed — don't add it again."
        ],
        howTo: [
          "Request the employer's wage and time-loss verification with the client's authorization (Dana's is on file from Lakeside USD payroll, DW25).",
          "Match the days to the medical notes: off work from the 03/14 ED visit, Harbor Spine's 03/17 exam kept her off (p. 15), and the 03/31 re-evaluation released her to return 04/03 (p. 26).",
          "Calculate days × daily rate (or hours × hourly rate) and show the math in the specials summary.",
          "Ask the client for receipts for any other accident costs, and let the attorney decide what is claimed."
        ],
        bestPractices: [
          "If the verification shows sick leave or vacation was used, note it — whether used leave is claimed depends on the state and is the attorney's call.",
          "Count workdays, not calendar days: 03/16–04/02/2026 is 18 calendar days but 14 workdays.",
          "Pitfall: adding Dana's copays and pharmacy receipt as a separate “out-of-pocket” line — it double-counts $661.40 already in the billed total."
        ],
        discussionCase: "Suppose Dana says she also left work early for Dr. Patel's 04/20/2026 appointment. The payroll verification covers only 03/16–04/02/2026. What do you need before that time can be added, and who decides?"
      },
      trainerCue: "The math: $28.00 × 8 = $224.00 a day; 14 × $224.00 = $3,136.00 (Ex. F). The client's own medical payments are already in the specials — the most common double count."
    },
    { h: "The Specials Summary",
      layout: "PROCESS",
      processSteps: [
        { label: "Past medical (billed)", desc: "$19,516.40 — 9 related lines, exclusions noted." },
        { label: "Future medical", desc: "$7,800.00 — 2 C5-6 ESIs × $3,900.00 (WHITFIELD 0057)." },
        { label: "Lost wages", desc: "$3,136.00 — 14 workdays × $224.00 (Ex. F)." },
        { label: "Total economic damages", desc: "$30,452.40." },
        { label: "Balances & liens", desc: "Provider balances $11,105.00; BlueHarbor $2,575.00 to date." },
        { label: "Review & hand off", desc: "To Attorney Bennett with the itemization and sources." }
      ],
      fourPart: {
        corePrinciples: [
          "The specials summary is the one-page roll-up of the economic damages: past medical, future medical, lost wages and any proven out-of-pocket costs, each with its source.",
          "It feeds the demand's damages section and Exhibit D (Itemized medical specials), so every number must match the itemization to the cent.",
          "It is a draft for the attorney. Attorney Bennett decides what goes in the letter and sets the demand amount; the summary never says what the case is worth."
        ],
        howTo: [
          "Pull the totals from the finished itemization: past medical billed $19,516.40, with paid $5,736.40 and still owed $11,105.00 shown beneath it.",
          "Add future medical ($7,800.00) and lost wages ($3,136.00) as separate lines with their record and exhibit cites.",
          "Total the economic damages: $19,516.40 + $7,800.00 + $3,136.00 = $30,452.40.",
          "Leave out property damage — Dana's $6,480.00 CR-V repair was paid on the separate PD claim.",
          "Attach the exclusions note and the Balances & Liens list, and send the package to Attorney Bennett for review."
        ],
        bestPractices: [
          "Tie out: the past medical figure must be the same number in the summary, the itemization, Exhibit D and the draft letter.",
          "Show the math on each line (14 × $224.00; 2 × $3,900.00) so the adjuster can check it without asking.",
          "Pitfall: a total that includes the excluded lines — $22,476.40 instead of $19,516.40 turns $30,452.40 into $33,412.40 and hands the adjuster a padding argument."
        ],
        discussionCase: "Attorney Bennett asks: “What are Dana's total economic damages, and how much of her past medical is still owed?” Answer both from the summary, with the sources."
      },
      trainerCue: "Past $19,516.40 + future $7,800.00 + wages $3,136.00 = $30,452.40. The demand amount ($85,000.00) is Attorney Bennett's decision — it never appears on the specials summary."
    },
    { h: "Final Tie-Out & Red Flags → Skill Builder",
      layout: "ICONLIST",
      icons: [
        { icon: "📄", label: "Itemized, not balance-due", desc: "Every provider has an itemized bill — Bayside's arrived 10/07/2026." },
        { icon: "🚫", label: "Exclusions noted", desc: "$285.00 pre-DOI, $2,400.00 duplicate, $275.00 unrelated — $2,960.00 out." },
        { icon: "🧮", label: "The formula balances", desc: "$19,516.40 − $2,675.00 − $5,736.40 = $11,105.00." },
        { icon: "🔗", label: "Matches the chronology", desc: "Every line has a record page; every visit has a bill." },
        { icon: "🔒", label: "Liens listed", desc: "Harbor Spine $5,760.00, Bayside $4,325.00, Clearview $1,020.00, BlueHarbor $2,575.00." },
        { icon: "📊", label: "Summary ties out", desc: "$30,452.40 total economic damages — the same number everywhere." }
      ],
      skill: { tool: "mdBills3", cms: true },
      fourPart: {
        corePrinciples: [
          "Before the itemization leaves your desk it must tie out: each line balances, the columns total, the totals match the bills, and the numbers match the chronology and the summary.",
          "Most itemization errors are predictable: a balance-due statement instead of an itemized bill, a pre-DOI or duplicate line left in, an unrelated visit, a payment in the wrong column, or a double count.",
          "The final check is also a handoff: the attorney gets the itemization, the exclusions note, the Balances & Liens list and the specials summary together."
        ],
        howTo: [
          "Re-add every column and run the balance formula on the totals.",
          "Check related plus excluded against the ledgers: $19,516.40 + $2,960.00 = $22,476.40.",
          "Check each line against the chronology, and each lien against the balance column.",
          "Save the final version with its date, upload it to the CMS, and route it to Attorney Bennett (copy Marcus Webb on the Balances & Liens list)."
        ],
        bestPractices: [
          "Read the totals back against the source bills one more time — transposed digits are the most common error in a finished itemization.",
          "Log in the CMS what you excluded and why, so no one adds it back later.",
          "Pitfall: updating the itemization when a new bill arrives but not the summary — two different totals in the same packet."
        ],
        discussionCase: "It's Wednesday 10/07/2026 and Bayside's itemized bill (DW23) has just arrived. Which lines, totals and lists do you check or update, and who do you tell?"
      },
      trainerCue: "Launch the Day 3 Skill Builder — Bills Itemization Workbench: decide which billing lines belong in Dana's specials, total the itemization (billed, adjusted, paid, still owed), list the balances and liens to protect, and build the specials summary with future medical and lost wages."
    }
  ],
  quickChecks: [
    { afterIndex: 3, q: "Summit Orthopedic, 08/21/2026: billed $325.00, adjustment $155.00, BlueHarbor paid $145.00, Dana paid $25.00. The balance is:", opts: ["$170.00", "$25.00", "$0.00", "$145.00"], a: 2, r: "$325.00 − $155.00 − $145.00 − $25.00 = $0.00. Every payment comes off, including the client's." },
    { afterIndex: 5, q: "Clearview's ledger lists the 03/30/2026 MRI (CPT 72141, $2,400.00) twice; the records have one MRI report. You:", opts: ["Keep one line, note the duplicate you removed, and ask Clearview for a corrected ledger", "Include both lines — the ledger is the provider's record", "Delete the second line without a note", "Leave Clearview out of the specials until it's fixed"], a: 0, r: "One MRI was done (WHITFIELD 0041). Keep $2,400.00 once, note the $2,400.00 duplicate, and get a corrected ledger." },
    { afterIndex: 10, q: "Dana missed 14 workdays. She earns $28.00 an hour, 8 hours a day. Her lost wages are:", opts: ["$392.00", "$3,136.00", "$2,688.00", "$4,032.00"], a: 1, r: "$28.00 × 8 = $224.00 a day; 14 × $224.00 = $3,136.00, verified by Lakeside USD payroll. $4,032.00 counts calendar days." }
  ],
  quiz: [
    { q: "An itemized bill differs from a balance-due statement because it shows:", opts: ["Each date of service, the service and code, and the charge, payments and adjustments", "Only what the patient owes today", "The provider's causation opinion", "The total the insurer agreed to pay"], a: 0, r: "The demand needs line-by-line detail. A balance-due statement (like Bayside's first one) shows only what is owed." },
    { q: "A hospital emergency department's facility charges are billed on the:", opts: ["CMS-1500", "EOB", "UB-04", "PIP payment log"], a: 2, r: "The UB-04 (CMS-1450) is the facility form. The ER physician's services come on a separate CMS-1500." },
    { q: "Dana's related bills: billed $19,516.40, adjustments $2,675.00, payments $5,736.40. The balance still owed is:", opts: ["$13,780.00", "$11,105.00", "$16,841.40", "$8,411.40"], a: 1, r: "$19,516.40 − $2,675.00 − $5,736.40 = $11,105.00. $13,780.00 forgets the adjustments; $16,841.40 forgets the payments." },
    { q: "Summit Ridge PIP paid Riverside Emergency Physicians $1,120.00 and Clearview Imaging $1,380.00. Those payments go in the:", opts: ["Adjustments column", "Health insurance column", "Client column", "PIP/MedPay column"], a: 3, r: "PIP is the client's own auto medical coverage — its own column. Together: $2,500.00, the ST PIP limit, so PIP is exhausted." },
    { q: "An adjustment (write-off) on a bill is:", opts: ["A payment by the health plan", "An amount the provider won't collect, usually under a network contract", "A charge the client still owes", "A lien"], a: 1, r: "Adjustments reduce the balance but are not payments — no one paid that money." },
    { q: "Harbor Spine's ledger includes $285.00 in 2025 charges for low back care. You:", opts: ["Leave them out of the specials, note it, and keep the 2025 care flagged in the chronology", "Include them — it's the same provider", "Leave them out and remove the 2025 records from the file", "Include them because the back was hurt again"], a: 0, r: "Pre-DOI charges aren't accident specials, but the prior injury must stay visible (WHITFIELD 0010–0011)." },
    { q: "Dana's providers' ledgers total $22,476.40, including the lines that don't belong. Her related past medical specials are:", opts: ["$22,476.40", "$22,191.40", "$19,516.40", "$19,791.40"], a: 2, r: "$22,476.40 − ($285.00 + $2,400.00 + $275.00) = $19,516.40. $19,791.40 leaves the Northgate exam in." },
    { q: "The Northgate Family Practice wellness exam on 05/02/2026 ($275.00):", opts: ["Goes in the specials because it's after the DOI", "Goes in the future medical figure", "Goes in as an out-of-pocket cost", "Is left out of the specials as unrelated, with a note"], a: 3, r: "A date after the DOI doesn't make a charge related. An annual wellness exam isn't treatment for the accident injuries." },
    { q: "Reconciling the bills to the chronology means:", opts: ["Adding the bills twice to check the math", "Matching every bill line to a documented visit, and every visit to a bill", "Sending the bills to the adjuster before the records", "Checking each provider is in-network"], a: 1, r: "Mismatches reveal duplicates, undocumented visits and missing records or bills." },
    { q: "Who decides whether Dana's demand uses billed or paid amounts for past medical?", opts: ["Attorney Bennett (under ST's training rule, the demand uses billed amounts)", "The Demand Specialist", "The adjuster", "BlueHarbor Health"], a: 0, r: "Collateral source rules vary by state. Keep both columns; the attorney decides." },
    { q: "Harbor Spine's billing office offers to cut its $5,760.00 LOP balance if you tell them what Dana's case will settle for. You:", opts: ["Accept — the reduction helps the client", "Give a range so they can decide", "Don't discuss value or the reduction; note the offer and route it to the Case Manager and the attorney", "Share the demand amount only"], a: 2, r: "Lien reductions and settlement figures belong to the attorney and the Case Manager. Never share or agree." },
    { q: "Dr. Patel recommends up to 2 more C5-6 ESIs over 24 months, about $3,900 each. The future medical figure is:", opts: ["$3,900.00", "$11,700.00", "$27,316.40", "$7,800.00"], a: 3, r: "2 × $3,900.00 = $7,800.00, cited to WHITFIELD 0057 and listed apart from the past specials." },
    { q: "Dana's total economic damages are:", opts: ["$30,452.40", "$27,316.40", "$33,412.40", "$22,652.40"], a: 0, r: "$19,516.40 past medical + $7,800.00 future medical + $3,136.00 lost wages = $30,452.40." },
    { q: "Dana paid $661.40 to her providers (Riverside, Corner Pharmacy, Summit Orthopedic). In the specials summary, you:", opts: ["Add $661.40 as a separate out-of-pocket line", "Don't add it again — it's already inside the $19,516.40 billed", "Subtract it from the billed total", "Move it to lost wages"], a: 1, r: "Those payments are already part of the billed charges. Adding them again double-counts." },
    { q: "On Dana's Balances & Liens list, BlueHarbor Health's $2,575.00 is:", opts: ["A letter of protection", "An unpaid provider balance", "A reimbursement claim for what it paid — final figure after settlement", "Part of the $11,105.00 in provider balances"], a: 2, r: "BlueHarbor seeks repayment of what it paid. The provider balances ($5,760.00 + $4,325.00 + $1,020.00 = $11,105.00) are separate." }
  ],
  discussionQuestion: "Dana's providers' ledgers total $22,476.40, but her related specials are $19,516.40 with $11,105.00 still owed. Walk Attorney Bennett through the difference (what you left out and why), show how the $5,736.40 in payments splits among BlueHarbor, PIP and Dana, list the balances and reimbursement claims to protect from the settlement, and explain why you kept both the billed and the paid figures even though the demand will use billed amounts."
};
