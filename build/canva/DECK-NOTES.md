# Canva decks: things to fix

These were found while writing the speaker notes for each page of the five Canva decks. The course shows the decks
exactly as they are in Canva, so fix them there and then re-capture (see the README, "The Canva decks are the day's
slides"). The speaker notes already teach the corrected version wherever a page conflicts with the course.

## Day 1: Medical Summary / Chronology Overview

- **Pages 13–15, sample templates: privacy.** These pages show real demand letters. Page 13 has the client's,
  the insured's and the adjuster's names and the adjuster's email. Page 15 has a client name with a date of birth
  and the other driver's name. Page 14 is partly anonymised, but the claim number and citation number are still
  there. The course blurs these areas (`build/canva/redact.json`). Replace them in Canva with redacted or made-up
  letters. Also on these pages:
  - The page 13 title says "MEAGER", but the letterhead says "MEAGHER".
  - The IMW letter shows a Word error ("Error! No text of specified style…") and labels ICD-10 codes as "ICD9".
  - The Hess letter lists "54.5" where it should say M54.5.
- **Page 59, mileage:** the formula "round-trip miles × number of visits" leaves out the mileage rate. Step 2 never
  says to work out the distance.
- **Pages 42 and 44, gaps:** page 42 says a gap starts on the first day without care, but its example uses the last
  PT visit (03/10/2025). Page 44 says March 11 – April 4, 2025.
- **Page 9:** "Date-driven:", "Objective:", "Detailed but concise:" and "Useful for spotting patterns:" have nothing
  after the colon.
- **Pages 45–47:** "Common Body Parts Injured in an MVA" and "Common Medical Terminologies" are title-only pages with
  no content after them, which makes three section pages in a row.
- **Page 12:** an orange block covers "Detail-oriented" and "Supports medical specials and causation".
- **Pages 11 and 55:** backticks are used as apostrophes ("DO`S AND DON`TS").
- **Page 57:** the sample tells the adjuster that records "were missing". Whether to say that is the attorney's call.

## Day 2: Medical Summary

- **Page 20:** the example marked correct explains a herniated disc as "a bulging of the disc". A bulge, a protrusion
  and a herniation are different findings, and we use the radiologist's word. This conflicts with the course.
- **Page 13:**
  - The model causation sentence ("consistent with trauma…") is weaker than a probability opinion.
  - "This is where medical causation is established" overstates it: not every Assessment section contains one.
- **Pages 9, 17 and 18:** "client" means the law firm here, but everywhere else it means the injured person.
- **Page 18:** "For each visit or treatment episode, include:" doesn't match the bullets under it.
- **Page 19:** "Summarize only other medical history if…" should read "Summarize other medical history only if…".
- **Pages 17 and 18:** "client`s" uses a backtick. Page 17 also has a stray comma ("John Dela Cruz, reported").
- **Page 8:** "3. Narrative Format" sits next to three sub-points numbered 1–3.
- **Pages 13 and 14:** the logo in the corner is cut off. On page 14 the check mark sits above "Example:".

## Day 3: Bills Itemization

- **Page 28, section E (future medical costs):** the text is a copy of section C's out-of-pocket list.
- **Page 23, "Confirming Client's Desired Amount":** it reads as if the client picks billed or adjusted amounts. The
  attorney decides. Consider "Confirming Which Amount to Use (Attorney's Decision)".
- **Page 25:** a net sheet (fees, liens, client net) is internal. It isn't something to give the adjuster.
- **Page 30:**
  - The demand is shown as "$75.000".
  - The client net deducts both the $18,000 medical payable and a $3,200 health-insurance lien. If the plan paid
    part of that $18,000, the lien is counted twice.
  - A real net is worked out on the settlement, not on the demand.
  - The last line, "= $28,750 NET to Client", doesn't show on the page: its text box is clipped in Canva.
- **Pages 11, 13, 15, 17 and 30:** separate multipliers for pain and suffering, loss of enjoyment of life,
  emotional distress and duties under duress are each applied to the same $11,900 and then added together. Many
  treat one multiplier as covering all general damages, so this invites double counting. Confirm it's intended.
- **Page 9:** "SUFFFERING" is misspelled, and "of life" is clipped on the loss-of-enjoyment card.
- **Page 21:**
  - It calls Demand Specialists "legal and medical VAs".
  - 72148 is a lumbar MRI without contrast, not just "MRI".
- **Page 29:** the fee agreement controls the percentage, not "typically 33% / 40%".

## Day 4: Demand Overview

- **Page 20, "Duties Under Duress" (most important):** the page defines it as coercion (the client pressured into
  signing or giving statements). Day 1 (pages 27–29) and Day 3 (page 16) teach it as the everyday duties a client
  kept doing through pain, which is the usual meaning in injury claims. Rewrite page 20 to match.
- **Page 25:** the sample "$50,000" demand doesn't say who sets the amount (the attorney).
- **Page 31:** "May determine comparative fault" overstates a citation. It supports liability, and whether it can
  be used in a civil case depends on the state.
- **Page 14:** "expert reports estimating future pain and suffering". Experts project care and limitations; putting
  a value on pain and suffering is the attorney's job.
- **Page 8, UIM:** the "citing policy terms and state law" argument is the attorney's.
- **Page 19:** S13.4XXA is a cervical sprain; a cervical strain is S16.1XXA.
- **Pages 10 and 32:** "Premise Liability" should be "Premises Liability".
- **Page 18:** the sample "$3,500" lost wages doesn't show its math (days × daily rate).

## Day 5: Demand Packet and Responses

- **Page 5:** "Emergency Medical Condition" and "PIP Log" apply only in some no-fault states. The $1,000
  vehicle-estimate cutoff and the 60-day PIP-log rule aren't labelled as firm policy.
- **Page 4:** "complete understanding of the client's … value" can read as if the specialist sets the value.
- **Pages 12 and 13:** neither says who decides the counteroffer, the new demand or the deadline (the attorney).
- **Page 9:** "Counteroffer" and "Partial Denial" overlap.
- **Page 8:** "Below is a complete, practical guide from receipt to strategy." looks like leftover text.
- **Page 14:** "Flags" in the title is only an emoji, so the page's text reads "Red to Watch For".
