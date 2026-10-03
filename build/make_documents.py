#!/usr/bin/env python3
"""Writes the Medsum & Demand course's simulated case documents (documents/*.html).

Every page is marked TRAINING — SIMULATED DOCUMENT. The figures match
build/md_casefile.js (the single source for the Dana Whitfield file); the
lessons and Skill Builders use the same numbers, and the asserts below stop
the build if the bill totals drift. Run: python3 build/make_documents.py
"""
import os
from decimal import Decimal, ROUND_HALF_UP

B = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(os.path.dirname(B), "documents")


def c(x):
    return Decimal(x).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)


def m(x):
    return "${:,.2f}".format(c(x))


def page(path, title, body, kind="Case file"):
    full = os.path.join(OUT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    depth = path.count("/")
    css = "../" * depth + "doc.css"
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — LSH Medsum &amp; Demand Training</title>
<link rel="stylesheet" href="{css}">
</head>
<body>
<div class="sim">TRAINING — SIMULATED DOCUMENT · LSH Medsum &amp; Demand Training · {kind}</div>
<main class="doc">
{body.strip()}
</main>
<p class="foot">Fictional people, companies, providers, policies and numbers created for LSH training. Not a real case file or medical record.</p>
</body>
</html>
"""
    with open(full, "w", encoding="utf8") as f:
        f.write(html)


def table(headers, rows, cls=""):
    h = "".join(f"<th>{x}</th>" for x in headers)
    r = "".join("<tr>" + "".join(f"<td>{x}</td>" for x in row) + "</tr>" for row in rows)
    return f'<table class="{cls}"><thead><tr>{h}</tr></thead><tbody>{r}</tbody></table>'


def kv(rows):
    return '<table class="kv"><tbody>' + "".join(f"<tr><th>{k}</th><td>{v}</td></tr>" for k, v in rows) + "</tbody></table>"


CSS = """
:root{--navy:#262B45;--orange:#DB8437;--ink:#1B1E2E;--soft:#5B6178;--line:#D5D9E4;--paper:#fff;--bg:#EEF0F6}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:15px/1.55 Georgia,'Times New Roman',serif}
.sim{background:#B54A3F;color:#fff;font:700 12px/1.4 Arial,sans-serif;letter-spacing:.06em;text-transform:uppercase;text-align:center;padding:7px 12px}
.doc{max-width:860px;margin:22px auto;background:var(--paper);padding:34px 40px;border:1px solid var(--line);box-shadow:0 6px 24px -14px rgba(0,0,0,.35)}
.doc h1{font:700 22px/1.25 Arial,sans-serif;color:var(--navy);margin:0 0 4px}
.doc h2{font:700 15px/1.3 Arial,sans-serif;color:var(--navy);margin:22px 0 8px;text-transform:uppercase;letter-spacing:.04em;border-bottom:2px solid var(--navy);padding-bottom:4px}
.doc .sub{font:13px Arial,sans-serif;color:var(--soft);margin:0 0 14px}
.doc .hdr{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;border-bottom:3px solid var(--orange);padding-bottom:12px;margin-bottom:16px}
.doc .hdr .co{font:800 18px Arial,sans-serif;color:var(--navy)}
.doc .hdr .meta{font:12.5px/1.5 Arial,sans-serif;color:var(--soft);text-align:right}
table{width:100%;border-collapse:collapse;margin:8px 0 14px;font:13px/1.45 Arial,sans-serif}
th,td{border:1px solid var(--line);padding:6px 8px;text-align:left;vertical-align:top}
thead th{background:#F1F3F8;color:var(--navy)}
table.kv th{width:34%;background:#F7F8FB;color:var(--navy);font-weight:700}
td.num,th.num{text-align:right;white-space:nowrap}
tr.total td{font-weight:700;background:#FFF6EC}
.note{border-left:4px solid var(--orange);background:#FFF8EF;padding:10px 14px;margin:12px 0;font:13.5px/1.5 Arial,sans-serif}
.stamp{display:inline-block;border:2px solid #B54A3F;color:#B54A3F;font:800 12px Arial,sans-serif;letter-spacing:.08em;padding:3px 9px;transform:rotate(-2deg);margin:6px 0}
.sig{margin-top:26px;display:grid;grid-template-columns:1fr 1fr;gap:26px;font:13px Arial,sans-serif}
.sig div{border-top:1px solid var(--ink);padding-top:4px}
ol,ul{padding-left:22px}
li{margin-bottom:4px}
.clause{margin:10px 0;padding-left:34px;text-indent:-34px}
.clause b{display:inline-block;width:30px;text-indent:0}
.foot{max-width:860px;margin:0 auto 26px;font:12px Arial,sans-serif;color:var(--soft);text-align:center;padding:0 16px}
@media(max-width:640px){.doc{margin:0;padding:20px 16px;border:0}.sig{grid-template-columns:1fr}table{font-size:12px}th,td{padding:5px}.doc .hdr .meta{text-align:left}}
.bates{font:700 11px/1 "Courier New",monospace;color:var(--soft);text-align:right;border-top:1px dashed var(--line);margin:22px 0 8px;padding-top:6px;letter-spacing:.06em}
.bates:first-child{border-top:0;margin-top:0;padding-top:0}
h3{font:700 14px/1.3 Arial,sans-serif;color:var(--navy);margin:14px 0 6px}
.draft{border:2px dashed #B54A3F;padding:4px 10px;display:inline-block;color:#B54A3F;font:800 12px Arial,sans-serif;letter-spacing:.08em}
@media print{body{background:#fff}.doc{box-shadow:none;border:0;margin:0}}
"""


def hdr(company, meta):
    return f'<div class="hdr"><div class="co">{company}</div><div class="meta">{meta}</div></div>'



# ------------------------------------------------------------------ the file's numbers
FIRM = "LSH Law Group"
FIRM_META = "500 Lakeview Plaza, Suite 1200 · Lakeside, ST 90310 · (555) 318-1000"
CLIENT = "Dana Whitfield"
DOB = "01/09/1984"
DOI = "03/14/2026"
CLAIM = "KM-26-0418823"


def bates(n):
    return f'<div class="bates">WHITFIELD {n:04d}</div>'


# Related bill lines: (provider, dos, description, billed, adj, health ins, pip, client)
LINES = [
    ("Riverside Medical Center", "03/14/2026", "ED visit (Level 4) + CT cervical spine", "4850.00", "2210.00", "2140.00", "0", "500.00"),
    ("Riverside Emergency Physicians", "03/14/2026", "ED physician services", "1120.00", "0", "0", "1120.00", "0"),
    ("Corner Pharmacy", "03/14/2026", "Cyclobenzaprine, ibuprofen", "86.40", "0", "0", "0", "86.40"),
    ("Harbor Spine & Chiropractic", "03/17/2026 – 05/14/2026", "Chiropractic care, 24 visits (LOP)", "5760.00", "0", "0", "0", "0"),
    ("Clearview Imaging", "03/30/2026", "MRI cervical spine w/o contrast (CPT 72141)", "2400.00", "0", "0", "1380.00", "0"),
    ("Summit Orthopedic Associates", "04/20/2026", "New patient consultation", "650.00", "310.00", "290.00", "0", "50.00"),
    ("Bayside Pain Management", "06/26/2026", "New patient evaluation (LOP)", "425.00", "0", "0", "0", "0"),
    ("Bayside Pain Management", "07/10/2026", "C5-6 interlaminar ESI (CPT 62321) (LOP)", "3900.00", "0", "0", "0", "0"),
    ("Summit Orthopedic Associates", "08/21/2026", "Follow-up visit", "325.00", "155.00", "145.00", "0", "25.00"),
]
EXCLUDED = [("Harbor Spine 2025 prior treatment", "285.00"), ("Clearview duplicate MRI line", "2400.00"), ("Northgate wellness exam", "275.00")]
D = lambda x: Decimal(x)
BILLED = sum(D(l[3]) for l in LINES)
ADJ = sum(D(l[4]) for l in LINES)
INS = sum(D(l[5]) for l in LINES)
PIP = sum(D(l[6]) for l in LINES)
PT = sum(D(l[7]) for l in LINES)
BAL = BILLED - ADJ - INS - PIP - PT
ALL_LINES = BILLED + sum(D(x) for _, x in EXCLUDED)
FUTURE = D("3900.00") * 2
WAGES = D("224.00") * 14
ECON = BILLED + FUTURE + WAGES
# must match build/md_casefile.js
assert BILLED == D("19516.40"), BILLED
assert ADJ == D("2675.00") and INS == D("2575.00") and PIP == D("2500.00") and PT == D("661.40"), (ADJ, INS, PIP, PT)
assert INS + PIP + PT == D("5736.40") and BAL == D("11105.00"), BAL
assert ALL_LINES == D("22476.40") and FUTURE == D("7800.00") and WAGES == D("3136.00") and ECON == D("30452.40"), (ALL_LINES, ECON)

# Harbor Spine 2026 visit dates (24): Tue/Thu/Sat to 04/11, then Tue/Thu (+ two Saturdays) to 05/14
VISITS = ["03/17", "03/19", "03/21", "03/24", "03/26", "03/28", "03/31", "04/02", "04/04", "04/07", "04/09", "04/11",
          "04/14", "04/16", "04/18", "04/21", "04/23", "04/25", "04/28", "04/30", "05/05", "05/07", "05/12", "05/14"]
assert len(VISITS) == 24 and D("240.00") * 24 == D("5760.00")
NECK = [7, 7, 7, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4]
LBP = [5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]


def firm_letter(to, date, re_lines, body, sign="Laura Bennett, Esq."):
    re = "<br>".join(re_lines)
    return (hdr(FIRM, FIRM_META) + f'<p>{date}</p><p>{to}</p><p><b>RE:</b> {re}</p>' + body +
            f'<p>Sincerely,</p><p style="margin-top:28px"><b>{sign}</b><br>{FIRM}</p>')


def keystone_letter(date, body):
    return (hdr("Keystone Mutual Insurance Co.", "Bodily Injury Claims · 2200 Commerce Pkwy · Lakeside, ST 90312<br>(555) 610-7720 · fax (555) 610-7799") +
            f'<p>{date}</p><p>Laura Bennett, Esq.<br>{FIRM}<br>500 Lakeview Plaza, Suite 1200<br>Lakeside, ST 90310</p>'
            f'<p><b>RE:</b> Claimant: {CLIENT} · Insured: Grant Mercer · Claim No.: {CLAIM} · Date of loss: {DOI}</p>' + body +
            '<p>Sincerely,</p><p style="margin-top:24px"><b>Tom Reyes</b><br>Bodily Injury Adjuster, ext 233<br>treyes@keystonemutual.example</p>')


def build():
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, "doc.css"), "w", encoding="utf8") as f:
        f.write(CSS.strip() + "\n")

    # ================================================================ INTAKE
    prov = [
        ["Riverside Medical Center (ED)", "03/14/2026", "Received — WHITFIELD 0001–0009", "UB-04 itemized statement received", ""],
        ["Riverside Emergency Physicians", "03/14/2026", "In the ED record", "CMS-1500 statement received", "PIP paid"],
        ["Corner Pharmacy", "03/14/2026", "—", "Receipt received", "Dana paid"],
        ["Harbor Spine &amp; Chiropractic", "03/17/2026 – 05/14/2026", "Received — WHITFIELD 0012–0038; also 0010–0011 (2025)", "Ledger received", "LOP"],
        ["Clearview Imaging", "03/30/2026", "Received — WHITFIELD 0039–0041", "Ledger received", "PIP paid part"],
        ["Summit Orthopedic Associates", "04/20/2026 · 08/21/2026", "Received — WHITFIELD 0042–0059", "Ledger received", ""],
        ["Bayside Pain Management", "06/26/2026 · 07/10/2026", "Received — WHITFIELD 0060–0066", "Balance-due statement (08/28/2026)", "LOP"],
        ["Northgate Family Practice", "05/02/2026", "—", "Statement came in with the bills", "Check"],
    ]
    page("intake/DW_01_Case_Handoff_Memo.html", "Case Handoff Memo — Dana Whitfield", hdr(FIRM, "Internal memo · Confidential") +
         "<h1>Case Handoff Memo</h1><p class='sub'>From: Marcus Webb, Case Manager · To: Demand Specialist · Date: Monday, 10/05/2026 · cc: Laura Bennett, Esq.</p>" +
         kv([["Client", f"{CLIENT} (DOB {DOB})"], ["File", "MVA-DW-2026-031"], ["Date of incident", DOI + " — rear-end MVC, Oak St &amp; 5th Ave"],
             ["At-fault carrier", f"Keystone Mutual · claim {CLAIM} · adjuster Tom Reyes, ext 233"], ["Liability", "Accepted 100% (Keystone letter 04/02/2026)"],
             ["Policy limits", "$100,000 / $300,000 (Keystone letter 07/15/2026)"], ["Treatment status", "Released at MMI by Dr. Patel on 08/21/2026; future care recommended"],
             ["Requests", "Records and itemized bills requested from every provider on 08/24/2026"]]) +
         "<h2>Provider list — status as of 10/05/2026</h2>" + table(["Provider", "Dates", "Records", "Bills", "Note"], prov) +
         "<h2>Other items</h2><ul><li>Summit Ridge PIP ($2,500) is exhausted — payment log in the file.</li><li>BlueHarbor Health sent a reimbursement notice.</li>"
         "<li>Lakeside USD wage and time-loss verification received.</li><li>Client impact statement signed 09/30/2026.</li>"
         "<li>Per the intake summary, no prior neck or back problems.</li></ul>"
         "<div class='note'>Attorney Bennett would like the demand out by <b>Friday 10/09/2026</b>. The file is yours for the medsum, the bills itemization and the demand — let me know what's missing.</div>")

    page("intake/DW_02_Client_Intake_Summary.html", "Client Intake Summary — Dana Whitfield", hdr(FIRM, "Intake · 03/18/2026 · taken by J. Ortiz") +
         "<h1>New Client Intake Summary</h1>" +
         kv([["Client", f"{CLIENT} · DOB {DOB} · 2417 Maple Ridge Ct, Lakeside, ST 90318 · (555) 318-4420 · dana.whitfield@example.com"],
             ["Date of incident", "03/15/2026, about 4:15 PM"], ["Location", "Oak St &amp; 5th Ave, Lakeside"],
             ["How it happened", "Stopped at a red light in her 2019 Honda CR-V; rear-ended by a pickup (Grant Mercer, F-150). Police came; the other driver was ticketed."],
             ["Injuries", "Neck pain (worse on the right, into the shoulder), low back pain, headaches"],
             ["Treatment so far", "Riverside Medical Center ER same day (husband drove her). Starting chiropractic at Harbor Spine &amp; Chiropractic 03/17."],
             ["Prior injuries / treatment", "“None really, maybe a strain a while back.”"],
             ["Employer", "Lakeside Unified School District — Administrative Coordinator, $28.00/hr, 8 hrs/day. Off work since the accident."],
             ["Health insurance", "BlueHarbor Health PPO · member BHH-448120937"],
             ["Auto insurance", "Summit Ridge Insurance · SRI-AU-7730412 (PIP)"],
             ["Other driver's insurer", "Keystone Mutual Insurance Co. (claim number to follow)"],
             ["Witnesses", "A woman at the crosswalk gave her name to the officer"],
             ["Notes", "Son, 3. Her mother watches him while Dana works. Prefers email; calls after 3:30 PM."]]))

    page("intake/DW_03_Retainer_and_HIPAA_Authorization.html", "Retainer & HIPAA Authorization — Dana Whitfield", hdr(FIRM, "Signed 03/18/2026") +
         "<h1>Retainer Agreement (Summary) &amp; HIPAA Authorization</h1><h2>Retainer</h2><ul>"
         "<li>Client: Dana Whitfield. Matter: bodily injury claim arising from the motor vehicle collision of 03/14/2026.</li>"
         "<li>Contingency fee per the signed agreement; costs advanced by the firm.</li>"
         "<li>All communication with insurers goes through the firm. The client will not give statements without the attorney.</li>"
         "<li>The attorney communicates every settlement offer to the client; only the client can accept or reject.</li></ul>"
         "<h2>Authorization to release protected health information (HIPAA)</h2>" +
         kv([["Patient", f"{CLIENT} · DOB {DOB}"], ["Released to", f"{FIRM} (Laura Bennett, Esq. and staff)"],
             ["Information", "Complete medical records and itemized billing, including prior records relevant to the claim"],
             ["Purpose", "Evaluation and resolution of a legal claim"], ["Expires", "One year from signing (03/18/2027) or on written revocation"],
             ["Signed", "Dana Whitfield · 03/18/2026"]]) +
         "<p style='font-size:13px'>The patient may revoke this authorization in writing. Information disclosed may be re-disclosed by the recipient and may no longer be protected by federal privacy rules. Treatment and payment are not conditioned on signing.</p>")

    # ================================================================ POLICE
    page("police/DW_04_Police_Report_LPD-26-031477.html", "Police Report LPD-26-031477", hdr("Lakeside Police Department", "Traffic Collision Report · LPD-26-031477<br>Officer R. Alvarez #1842") +
         "<h1>Traffic Collision Report</h1>" +
         kv([["Date / time", "Saturday 03/14/2026 · 16:15"], ["Location", "Oak St at 5th Ave, Lakeside, ST"], ["Conditions", "Daylight · dry · clear"],
             ["Unit 1", "Grant Mercer · 2021 Ford F-150 · insurer Keystone Mutual, policy KMI-AU-5521907"],
             ["Unit 2", f"{CLIENT} · DOB {DOB} · 2019 Honda CR-V · insurer Summit Ridge Insurance"],
             ["Citation", "Unit 1 — Following Too Closely"], ["Injuries", "Unit 2 driver complains of neck and back pain; declined ambulance; to Riverside Medical Center by private vehicle"],
             ["Witness", "Priya Desai, (555) 318-2291"]]) +
         "<h2>Narrative</h2><p>Unit 2 was stopped for a red signal eastbound on Oak St at 5th Ave. Unit 1, also eastbound, struck the rear of Unit 2. Driver of Unit 1 stated he “looked down at my phone for a second.” Witness Desai, waiting to cross 5th Ave, stated Unit 2 “had been stopped for a few seconds” before the impact. Unit 2: rear bumper, liftgate and rear body panel damage. Unit 1: front bumper and grille damage. Both vehicles driven from the scene.</p>")

    photos = [["1", "Scene — Oak St &amp; 5th Ave, looking east, signal red", "03/14/2026"], ["2", "CR-V rear bumper pushed in, liftgate misaligned", "03/14/2026"],
              ["3", "CR-V rear body panel buckled below the liftgate", "03/14/2026"], ["4", "F-150 front bumper and grille", "03/14/2026"],
              ["5", "CR-V interior — driver seat back, headrest", "03/15/2026"], ["6", "Repair estimate photo sheet — Lakeside Collision ($6,480.00 repair)", "03/20/2026"]]
    page("police/DW_05_Photo_Log.html", "Photo Log — Scene and Vehicles", hdr(FIRM, "Photo log · Exhibit B") + "<h1>Photo Log</h1>" +
         table(["#", "Photo", "Date taken"], photos) + "<p style='font-size:13px'>Originals on file. Photos 1–5 taken by the client and her husband; photo 6 from the property damage estimate (PD claim paid separately).</p>")

    # ================================================================ INSURANCE
    page("insurance/DW_06_Keystone_Liability_Acceptance.html", "Keystone — Liability Acceptance (04/02/2026)",
         keystone_letter("April 2, 2026", "<p>We have completed our liability investigation. Keystone Mutual accepts <b>100% liability</b> on behalf of our insured for the collision of March 14, 2026.</p>"
                         "<p>Please forward your client's medical records and bills when treatment is complete so we may evaluate the bodily injury claim.</p>"))
    page("insurance/DW_07_Keystone_Policy_Limits_Letter.html", "Keystone — Policy Limits Letter (07/15/2026)",
         keystone_letter("July 15, 2026", "<p>In response to your request of July 2, 2026, the bodily injury liability limits of policy KMI-AU-5521907 (named insured Grant Mercer) in effect on March 14, 2026 are:</p>" +
                         kv([["Bodily injury — each person", "$100,000"], ["Bodily injury — each accident", "$300,000"]]) +
                         "<p>We are not aware of other policies issued by Keystone that may apply.</p>"))
    page("insurance/DW_08_Summit_Ridge_PIP_Payment_Log.html", "Summit Ridge — PIP Payment Log", hdr("Summit Ridge Insurance", "PIP · policy SRI-AU-7730412 · adjuster Kim Osei") +
         "<h1>Personal Injury Protection — Payment Log</h1>" + kv([["Insured", CLIENT], ["Date of loss", DOI], ["PIP limit", "$2,500.00"]]) +
         table(["Paid", "Provider", "DOS", "Amount"], [["04/10/2026", "Riverside Emergency Physicians", "03/14/2026", m(1120)],
                                                       ["04/22/2026", "Clearview Imaging", "03/30/2026", m(1380)],
                                                       ["", "<b>Total paid</b>", "", f"<b>{m(PIP)}</b>"], ["", "Remaining benefit", "", "$0.00 — EXHAUSTED"]]))
    page("insurance/DW_09_BlueHarbor_Reimbursement_Notice.html", "BlueHarbor Health — Reimbursement Claim Notice", hdr("BlueHarbor Health", "Recovery Unit · (555) 800-2210 · ref. BHR-26-77104") +
         "<h1>Notice of Reimbursement Claim</h1><p>BlueHarbor Health paid the following benefits for injuries our member reports resulted from an accident on 03/14/2026. Under the plan terms, BlueHarbor asserts a right of reimbursement from any recovery.</p>" +
         kv([["Member", f"{CLIENT} · BHH-448120937"], ["Plan", "PPO (fully insured)"]]) +
         table(["DOS", "Provider", "Paid"], [["03/14/2026", "Riverside Medical Center", m(2140)], ["04/20/2026", "Summit Orthopedic Associates", m(290)],
                                           ["08/21/2026", "Summit Orthopedic Associates", m(145)], ["", "<b>Paid to date</b>", f"<b>{m(INS)}</b>"]]) +
         "<p>Please notify us before any settlement is disbursed. A final reimbursement figure will be issued after we are notified of the settlement.</p>")

    # ================================================================ RECORDS (WHITFIELD 0001–0066)
    ed = (bates(1) + "<h3>Face sheet</h3>" + kv([["Patient", f"{CLIENT} · DOB {DOB}"], ["Arrival", "03/14/2026 16:52 · private vehicle"], ["Chief complaint", "Neck and back pain after rear-end MVC"]]) +
          bates(2) + "<h3>Triage</h3><p>BP 132/84 · HR 92 · RR 16 · SpO2 99% · Pain: neck 7/10, low back 5/10. Restrained driver, stopped, rear-ended ~1 hr PTA. No LOC. Ambulatory.</p>" +
          bates(3) + "<h3>Physician note</h3><p><b>HPI:</b> 42 y/o F restrained driver, rear-ended while stopped at a light. c/o neck pain radiating to the R trapezius and low back pain. Denies numbness, weakness, LOC. <b>PMH:</b> none reported.</p>" +
          bates(4) + "<p><b>Exam:</b> Cervical paraspinal TTP R&gt;L, ROM limited by pain; no midline step-off. Lumbar paraspinal TTP. Neuro intact, strength 5/5, sensation intact.</p>" +
          bates(5) + "<h3>CT cervical spine without contrast</h3><p><b>Impression:</b> No acute fracture or malalignment.</p>" +
          bates(6) + "<h3>Orders / ED course</h3><p>Ibuprofen 800 mg PO given. Reassessed: pain 6/10.</p>" +
          bates(7) + "<h3>Diagnoses</h3><ul><li>Strain of muscle, fascia and tendon at neck level (cervical strain) — S16.1XXA</li><li>Strain of muscle, fascia and tendon of lower back (lumbar strain) — S39.012A</li><li>Motor vehicle collision</li></ul>" +
          bates(8) + "<h3>Discharge instructions</h3><p>Rest, ice/heat. Off work until cleared by your follow-up provider. Follow up with your primary care provider or an orthopedic/spine provider in 2–3 days. Return for numbness, weakness or worsening pain.</p>" +
          bates(9) + "<h3>Prescriptions</h3><p>Cyclobenzaprine 10 mg, #20, 1 PO at bedtime PRN spasm · Ibuprofen 800 mg, #30, 1 PO TID with food.</p>")
    page("records/DW_10_Riverside_ED_Record_0001-0009.html", "Riverside Medical Center — ED Record (WHITFIELD 0001–0009)", hdr("Riverside Medical Center", "Emergency Department · DOS 03/14/2026") + "<h1>Emergency Department Record</h1>" + ed, kind="Medical record")

    prior = (bates(10) + "<h3>New patient exam — 01/08/2025</h3><p>c/o low back pain x 2 days after lifting moving boxes. No radiation, no neck complaints. Lumbar paraspinal spasm, ROM mildly limited. <b>Dx:</b> lumbar strain. Plan: chiropractic care x 3 visits.</p>" +
             bates(11) + "<h3>Visits 01/15/2025 and 01/29/2025</h3><p>01/15: LBP 3/10, improving. 01/29: LBP 0/10, full ROM. <b>Released from care — resolved.</b></p>")
    page("records/DW_11_Harbor_Spine_2025_Prior_Records_0010-0011.html", "Harbor Spine & Chiropractic — 2025 Records (WHITFIELD 0010–0011)",
         hdr("Harbor Spine &amp; Chiropractic", "Kevin Ames, DC · 1180 Harbor Rd, Lakeside") + "<h1>Chiropractic Records — January 2025</h1>" + prior, kind="Medical record")

    rows_a = [[f"{VISITS[i]}/2026", str(i + 1), f"{NECK[i]}/10", f"{LBP[i]}/10", "CMT 98941, therapeutic exercise 97110, soft tissue 97140"] for i in range(1, 6)]
    rows_b = [[f"{VISITS[i]}/2026", str(i + 1), f"{NECK[i]}/10", f"{LBP[i]}/10", "CMT 98941, therapeutic exercise 97110, soft tissue 97140"] for i in range(7, 23)]
    chiro = (bates(12) + "<h3>Initial examination — 03/17/2026 (visit 1)</h3><p><b>History:</b> Rear-ended while stopped on 03/14/2026; seen at Riverside ED. c/o neck pain 7/10 radiating to the R shoulder, low back pain 5/10, headaches. Prior: lumbar strain 01/2025 treated here, resolved.</p>" +
             bates(13) + "<p><b>Exam:</b> Cervical ROM reduced ~40% (flexion, extension, R rotation). TTP C5–C7 paraspinals and R upper trapezius. Lumbar paraspinal TTP. Foraminal compression mildly positive R.</p>" +
             bates(14) + "<p><b>Assessment:</b> cervical sprain/strain; lumbar sprain/strain; post-traumatic headache. MRI cervical spine ordered.</p>" +
             bates(15) + "<p><b>Plan:</b> chiropractic care 3x/week for 8 weeks (24 visits); re-evaluate 03/31. <b>Work status:</b> off work; re-evaluate 03/31. Treating on a letter of protection from LSH Law Group.</p>" +
             bates(16) + "<h3>Daily notes — visits 2–6 (WHITFIELD 0016–0025)</h3>" + table(["Date", "Visit", "Neck", "Low back", "Treatment"], rows_a) +
             bates(26) + "<h3>Re-evaluation — 03/31/2026 (visit 7)</h3><p>Neck 5/10, LBP 3/10; ROM improved (reduced ~25%). <b>Work status:</b> released to return to work 04/03/2026, no lifting over 15 lb. Continue plan.</p>" +
             bates(27) + "<h3>Daily notes — visits 8–23 (WHITFIELD 0027–0037)</h3>" + table(["Date", "Visit", "Neck", "Low back", "Treatment"], rows_b) +
             bates(38) + "<h3>Discharge — 05/14/2026 (visit 24 of 24)</h3><p>Neck 4/10, intermittent R arm tingling with prolonged computer work; LBP 2/10. The 8-week plan is complete. <b>Recommended:</b> continue care 2x/week for 4 more weeks. Patient declines further visits at this time: her mother, who provides childcare for her 3-year-old son, has been hospitalized and she cannot arrange care. <b>Discharged, improved,</b> with a home exercise program; return if symptoms worsen.</p>")
    page("records/DW_12_Harbor_Spine_2026_Records_0012-0038.html", "Harbor Spine & Chiropractic — 2026 Records (WHITFIELD 0012–0038)",
         hdr("Harbor Spine &amp; Chiropractic", "Kevin Ames, DC · 1180 Harbor Rd, Lakeside") + "<h1>Chiropractic Records — 2026</h1>" + chiro, kind="Medical record")

    mri = (bates(39) + "<h3>Order</h3><p>MRI cervical spine without contrast. Ordering provider: Kevin Ames, DC. Indication: neck pain with R upper-extremity symptoms after MVC 03/14/2026.</p>" +
           bates(40) + "<h3>Technique</h3><p>Multiplanar, multisequence MRI of the cervical spine without contrast, 03/30/2026. No prior studies for comparison.</p>" +
           bates(41) + "<h3>Findings</h3><p>Alignment normal. Vertebral body heights preserved; no fracture or marrow edema. C2-3 through C4-5: no disc herniation or stenosis. <b>C5-6: 3 mm central disc protrusion abutting the ventral thecal sac</b>; no cord compression or cord signal abnormality; mild right neural foraminal narrowing. C6-7, C7-T1: unremarkable.</p>"
           "<p><b>IMPRESSION:</b> 3 mm central disc protrusion at C5-6 abutting the ventral thecal sac, with mild right foraminal narrowing. No fracture.</p><p>Electronically signed: Ruth Okafor, MD, Radiologist · 03/30/2026</p>")
    page("records/DW_13_Clearview_Imaging_MRI_0039-0041.html", "Clearview Imaging — MRI Cervical Spine (WHITFIELD 0039–0041)",
         hdr("Clearview Imaging", "Diagnostic imaging · DOS 03/30/2026") + "<h1>MRI Cervical Spine Without Contrast</h1>" + mri, kind="Medical record")

    ortho = (bates(42) + "<h3>New patient paperwork (WHITFIELD 0042–0051)</h3><p>Patient questionnaire, pain diagram (neck and R arm marked), medication list, consent forms. Past history: “low back strain in January 2025 from lifting boxes — got better after 3 chiropractor visits.” No prior neck injury.</p>" +
             bates(52) + "<h3>Consultation — 04/20/2026 · Anita Patel, MD</h3><p><b>HPI:</b> 42 y/o F rear-ended 03/14/2026. Neck pain 5/10 radiating to the R arm with tingling in the R thumb and index finger. Chiropractic care 3x/week since 03/17 with partial improvement.</p>" +
             bates(53) + "<p><b>Exam:</b> Spurling test positive on the R. Decreased sensation R C6 dermatome. Biceps reflex 1+ R, 2+ L. Strength 5/5 except R wrist extension 4+/5.</p>" +
             bates(54) + "<p><b>Imaging:</b> MRI 03/30/2026 personally reviewed — 3 mm central disc protrusion at C5-6 with mild R foraminal narrowing, correlating with symptoms.</p>" +
             bates(55) + "<p><b>Assessment:</b> C5-6 disc protrusion with right C6 radiculopathy (M50.122). <b>Plan:</b> continue therapy; refer to pain management for a C5-6 epidural steroid injection if no improvement.</p>"
             "<p><b>Causation:</b> Within a reasonable degree of medical probability, the C5-6 injury is causally related to the 03/14/2026 MVC. Her January 2025 low back strain resolved and is unrelated to her current cervical condition.</p>" +
             bates(56) + "<h3>Follow-up — 08/21/2026 · Anita Patel, MD</h3><p>Neck pain 3/10, intermittent; R arm tingling rare since the C5-6 ESI on 07/10/2026 at Bayside Pain Management. Exam: Spurling negative; sensation intact.</p>" +
             bates(57) + "<p><b>Assessment:</b> C5-6 disc protrusion with R C6 radiculopathy, improved. <b>Patient has reached maximum medical improvement (MMI).</b></p>"
             "<p><b>Future care:</b> up to two additional C5-6 interlaminar epidural steroid injections over the next 24 months if symptoms recur, estimated at $3,900.00 each.</p>" +
             bates(58) + "<p>Home exercise program; ergonomic workstation; follow up as needed.</p>" +
             bates(59) + "<h3>Referral — 04/20/2026</h3><p>To: Bayside Pain Management (Luis Romero, MD). Reason: C5-6 disc protrusion with R C6 radiculopathy; consider C5-6 ESI if symptoms persist despite conservative care.</p>")
    page("records/DW_14_Summit_Orthopedic_Records_0042-0059.html", "Summit Orthopedic Associates — Records (WHITFIELD 0042–0059)",
         hdr("Summit Orthopedic Associates", "Anita Patel, MD · Spine") + "<h1>Orthopedic Records</h1>" + ortho, kind="Medical record")

    pain = (bates(60) + "<h3>New patient evaluation — 06/26/2026 · Luis Romero, MD</h3><p><b>HPI:</b> Neck pain 6/10 with right-arm tingling <b>since the MVC of 03/14/2026</b>. Improved with chiropractic care; stopped care in mid-May because of family circumstances (her mother was hospitalized and she had no childcare). Neck pain and arm tingling worsened over the following weeks. Referred by Dr. Patel.</p>" +
            bates(61) + "<p><b>Exam:</b> Cervical ROM limited in extension and R rotation; Spurling positive R; decreased sensation R C6.</p>" +
            bates(62) + "<p><b>Imaging:</b> MRI 03/30/2026 reviewed. <b>Assessment:</b> cervical radiculopathy, C5-6 disc protrusion.</p>" +
            bates(63) + "<p><b>Plan:</b> C5-6 interlaminar epidural steroid injection under fluoroscopy. Risks and benefits discussed; consent obtained. Treating on a letter of protection.</p>" +
            bates(64) + "<h3>Procedure note — 07/10/2026</h3><p><b>Procedure:</b> C5-6 interlaminar epidural steroid injection under fluoroscopic guidance. Pre-procedure pain 6/10.</p>" +
            bates(65) + "<p>Loss-of-resistance technique; contrast confirmed epidural spread; steroid and local anesthetic injected. No complications.</p>" +
            bates(66) + "<p>Post-procedure pain 2/10. Tolerated well. Discharged home with instructions; follow up with Dr. Patel.</p>")
    page("records/DW_15_Bayside_Pain_Management_Records_0060-0066.html", "Bayside Pain Management — Records (WHITFIELD 0060–0066)",
         hdr("Bayside Pain Management", "Luis Romero, MD") + "<h1>Pain Management Records</h1>" + pain, kind="Medical record")

    # ================================================================ BILLS
    def stmt(company, meta, title, headers, rows, totals, note=""):
        return hdr(company, meta) + f"<h1>{title}</h1>" + kv([["Patient", f"{CLIENT} · DOB {DOB}"]]) + table(headers, rows) + \
            "<table><tbody>" + "".join(f"<tr class='{'total' if i == len(totals) - 1 else ''}'><td>{a}</td><td class='num'>{b}</td></tr>" for i, (a, b) in enumerate(totals)) + "</tbody></table>" + note
    rmc = [["03/14/2026", "0450", "99284", "Emergency room — level 4", m(2120)], ["03/14/2026", "0351", "72125", "CT cervical spine without contrast", m(2380)],
           ["03/14/2026", "0250", "", "Pharmacy", m(95)], ["03/14/2026", "0270", "", "Medical/surgical supplies", m(255)]]
    assert sum(D(r[4].replace("$", "").replace(",", "")) for r in rmc) == D("4850.00")
    page("bills/DW_16_Riverside_Medical_Center_Itemized_Statement.html", "Riverside Medical Center — Itemized Statement (UB-04)",
         stmt("Riverside Medical Center", "Patient accounts · UB-04 claim · statement period 03/14/2026", "Itemized Statement (UB-04)",
              ["Date", "Rev. code", "CPT/HCPCS", "Description", "Charge"], rmc,
              [["Total charges", m(4850)], ["Contractual adjustment", "−" + m(2210)], ["BlueHarbor Health paid", "−" + m(2140)], ["Patient paid (ER copay / deductible)", "−" + m(500)], ["Balance", "$0.00"]]))
    page("bills/DW_17_Riverside_Emergency_Physicians_Statement.html", "Riverside Emergency Physicians — Statement (CMS-1500)",
         stmt("Riverside Emergency Physicians", "Professional services · CMS-1500", "Statement of Account",
              ["Date", "CPT", "Description", "Charge"], [["03/14/2026", "99284", "Emergency department visit — physician", m(1120)]],
              [["Total charges", m(1120)], ["Summit Ridge PIP paid 04/10/2026", "−" + m(1120)], ["Balance", "$0.00"]]))
    page("bills/DW_18_Corner_Pharmacy_Receipt.html", "Corner Pharmacy — Receipt",
         stmt("Corner Pharmacy", "03/14/2026 · 19:40", "Receipt", ["Rx", "Item", "Qty", "Price"],
              [["RX-55120", "Cyclobenzaprine 10 mg", "20", m("54.20")], ["RX-55121", "Ibuprofen 800 mg", "30", m("32.20")]],
              [["Total paid (card ending 4471)", m("86.40")]]))
    hs = [["01/08/2025", "99203", "New patient exam — low back", m(145), ""], ["01/15/2025", "98940", "Chiropractic manipulation", m(70), ""],
          ["01/29/2025", "98940", "Chiropractic manipulation", m(70), ""], ["03/2025", "", "BlueHarbor Health payment", "", "−" + m(210)], ["03/2025", "", "Patient payment", "", "−" + m(75)]]
    hs += [[f"{d}/2026", "98941 · 97110 · 97140", f"Visit {i + 1} — chiropractic care (LOP)", m(240), ""] for i, d in enumerate(VISITS)]
    assert D("145") + 70 + 70 == D("285.00")
    page("bills/DW_19_Harbor_Spine_Ledger.html", "Harbor Spine & Chiropractic — Patient Ledger",
         stmt("Harbor Spine &amp; Chiropractic", "Billing: Tasha Greene · (555) 318-7702 · Letter of protection on file (LSH Law Group)", "Patient Ledger",
              ["Date", "Code(s)", "Description", "Charge", "Payment"], hs,
              [["Total charges", m(6045)], ["Total payments", "−" + m(285)], ["Balance due", m(5760)]]))
    page("bills/DW_20_Clearview_Imaging_Ledger.html", "Clearview Imaging — Patient Ledger",
         stmt("Clearview Imaging", "Patient accounts · (555) 318-4100", "Patient Ledger", ["Date", "CPT", "Description", "Charge / (payment)"],
              [["03/30/2026", "72141", "MRI cervical spine without contrast", m(2400)], ["03/30/2026", "72141", "MRI cervical spine without contrast", m(2400)],
               ["04/22/2026", "", "Summit Ridge PIP payment", "−" + m(1380)]],
              [["Total charges", m(4800)], ["Payments", "−" + m(1380)], ["Balance due", m(3420)]]))
    page("bills/DW_21_Summit_Orthopedic_Ledger.html", "Summit Orthopedic Associates — Patient Ledger",
         stmt("Summit Orthopedic Associates", "Billing · (555) 318-6650", "Patient Ledger", ["Date", "CPT", "Description", "Charge", "Adj.", "BlueHarbor", "Patient"],
              [["04/20/2026", "99204", "New patient consultation", m(650), m(310), m(290), m(50)], ["08/21/2026", "99213", "Follow-up visit", m(325), m(155), m(145), m(25)]],
              [["Total charges", m(975)], ["Adjustments", "−" + m(465)], ["BlueHarbor Health paid", "−" + m(435)], ["Patient paid", "−" + m(75)], ["Balance", "$0.00"]]))
    page("bills/DW_22_Bayside_Balance_Due_Statement.html", "Bayside Pain Management — Balance-Due Statement",
         hdr("Bayside Pain Management", "Billing: Carla Ruiz · (555) 318-9014 · statement date 08/28/2026") + "<h1>Statement — Balance Due</h1>" +
         kv([["Patient", f"{CLIENT}"], ["Account", "BPM-20931"], ["Amount due", f"<b>{m(4325)}</b>"]]) + "<p>Please remit the balance due. Thank you for choosing Bayside Pain Management.</p>")
    page("bills/DW_23_Bayside_Itemized_Bill.html", "Bayside Pain Management — Itemized Bill",
         stmt("Bayside Pain Management", "Billing: Carla Ruiz · (555) 318-9014 · itemized statement sent 10/07/2026 · account BPM-20931 · letter of protection on file", "Itemized Statement",
              ["Date", "CPT", "Description", "Charge"], [["06/26/2026", "99204", "New patient evaluation", m(425)], ["07/10/2026", "62321", "Interlaminar epidural injection, cervical, with imaging guidance (C5-6)", m(3900)]],
              [["Total charges", m(4325)], ["Payments", "$0.00"], ["Balance due", m(4325)]]))
    page("bills/DW_24_Northgate_Family_Practice_Statement.html", "Northgate Family Practice — Statement",
         stmt("Northgate Family Practice", "Primary care · statement 06/15/2026", "Statement", ["Date", "CPT", "Description", "Charge"],
              [["05/02/2026", "99396", "Periodic preventive visit, established patient, age 40–64 (annual wellness exam)", m(275)]],
              [["Total charges", m(275)], ["Adjustment", "−" + m(95)], ["BlueHarbor Health paid", "−" + m(180)], ["Balance", "$0.00"]]))

    # ================================================================ DAMAGES
    page("damages/DW_25_Lakeside_USD_Wage_Verification.html", "Lakeside USD — Wage & Time-Loss Verification",
         hdr("Lakeside Unified School District", "Payroll · Denise Fox · (555) 318-5500") + "<h1>Employer Wage &amp; Time-Loss Verification</h1>" +
         kv([["Employee", f"{CLIENT} · Administrative Coordinator · employed since 08/2017"], ["Rate of pay", "$28.00 per hour · 8 hours per day · Monday–Friday"],
             ["Time lost", "03/16/2026 – 04/02/2026 · 14 workdays · unpaid leave"], ["Lost wages", f"14 × $224.00 = <b>{m(WAGES)}</b>"],
             ["Returned to work", "04/03/2026 (light duty: no lifting over 15 lb until 05/01/2026)"], ["Signed", "Denise Fox, Payroll Supervisor · 09/22/2026"]]))
    page("damages/DW_26_Client_Impact_Statement.html", "Client Impact Statement — Dana Whitfield", hdr(FIRM, "Client statement · signed 09/30/2026") +
         "<h1>How the Collision Changed My Life</h1><p>My name is Dana Whitfield. I'm 42, I work for the Lakeside school district, and I have a 3-year-old son.</p>"
         "<p>For about six weeks after the crash I couldn't lift my son. He would reach for me and I had to ask my husband to pick him up. I couldn't turn my head to check my blind spot, so my husband drove me to work and to my appointments until the end of April.</p>"
         "<p>I missed almost three weeks of work. When I went back, I couldn't carry the supply boxes I usually carry, and sitting at the computer all day made my arm tingle.</p>"
         "<p>Before the accident I ran a 5K every Saturday morning with a group of friends. I haven't run since.</p>"
         "<p>In May my mother, who watches my son while I work, went into the hospital. I had no one to watch him, so I had to stop going to the chiropractor. My neck got worse in June and I went to a pain doctor, who gave me an injection in my neck in July. It helped a lot.</p>"
         "<p>Today my neck still hurts a few days a week, and I still wake up at night with neck pain once or twice a week. My doctor says I may need more injections.</p>"
         "<p style='margin-top:20px'>I have read this statement and it is true. — <b>Dana Whitfield</b>, 09/30/2026</p>")

    # ================================================================ DEMAND
    draft_specials = [["Riverside Medical Center", "03/14/2026", m(4850)], ["Riverside Emergency Physicians", "03/14/2026", m(1120)], ["Corner Pharmacy", "03/14/2026", m("86.40")],
                      ["Harbor Spine &amp; Chiropractic", "03/17/2026 – 05/14/2026", m(5760)], ["Clearview Imaging", "03/30/2026", m(2400)],
                      ["Summit Orthopedic Associates", "04/20/2026, 08/21/2026", m(975)], ["Northgate Family Practice", "05/02/2026", m(275)],
                      ["Bayside Pain Management", "06/26/2026, 07/10/2026", m(4325)]]
    assert sum(D(r[2].replace("$", "").replace(",", "")) for r in draft_specials) == D("19791.40")   # the planted Northgate line
    draft = ("<p class='draft'>DRAFT — NOT FOR RELEASE · for attorney review</p>" + hdr(FIRM, FIRM_META) +
             "<p>October 8, 2026</p><p>VIA EMAIL AND CERTIFIED MAIL<br>Tom Reyes, Bodily Injury Adjuster<br>Keystone Mutual Insurance Co.<br>2200 Commerce Pkwy, Lakeside, ST 90312</p>"
             "<p><b>RE:</b> Our client: Dana Whitfield<br>Your insured: Grant Mercer · Claim No.: KM-26-0418832 · Date of loss: March 15, 2026</p>"
             "<p>Dear Mr. Reyes:</p><p>As you know, this office represents Dana Whitfield for injuries she sustained in the collision with your insured. Please accept this letter as our demand for settlement.</p>"
             "<h2>Facts and liability</h2><p>Ms. Whitfield was stopped at a red light at Oak Street and 5th Avenue when your insured struck her vehicle from behind; your insured was cited for Following Too Closely (Ex. A). Keystone accepted liability on April 2, 2026.</p>"
             "<h2>Injuries and treatment</h2><p>Prior to this collision, Ms. Whitfield had never experienced neck or back problems. She went to the Riverside Medical Center emergency department the same day with neck and low back pain (Ex. E, WHITFIELD 0001–0009) and began chiropractic care on March 17, 2026 (Ex. E, WHITFIELD 0012–0015).</p>"
             "<p>A cervical MRI on March 30, 2026 revealed a herniated disc at C5-6 (Ex. E, WHITFIELD 0041). Dr. Anita Patel concluded that the C5-6 injury is causally related to this collision. She required a C5-6 epidural steroid injection on July 10, 2026 (Ex. E, WHITFIELD 0064). Dr. Patel placed her at maximum medical improvement on August 21, 2026.</p>"
             "<h2>Medical specials</h2>" + table(["Provider", "Dates of service", "Amount"], draft_specials) +
             "<p><b>Total past medical expenses: $19,666.40</b> (Ex. D)</p>"
             "<p>Future medical care: two additional C5-6 injections, $7,800.00 (Ex. E, WHITFIELD 0057).</p>"
             "<h2>Lost wages</h2><p>Lost wages: 14 workdays at $224.00 per day, $3,136.00 (Ex. F).</p>"
             "<h2>Pain and suffering</h2><p>[To be written — use the client impact statement, Ex. G.]</p>"
             "<h2>Demand</h2><p>We are authorized to resolve this claim for $85,000.00. This offer remains open for thirty (30) days.</p>"
             "<p>Enclosures: Exhibits A–G</p><p>Sincerely,</p><p style='margin-top:24px'><b>Laura Bennett, Esq.</b><br>LSH Law Group</p>")
    page("demand/DW_27_Draft_Demand_Letter.html", "Draft Demand Letter — Dana Whitfield (for audit)", draft, kind="Draft — for audit")
    page("demand/DW_28_Exhibit_Index.html", "Exhibit Index — Whitfield Demand", hdr(FIRM, "Demand packet · sent 10/09/2026") + "<h1>Exhibit Index</h1>" +
         table(["Exhibit", "Document", "Pages"], [["—", "Demand letter (signed 10/09/2026)", ""], ["—", "Exhibit index", ""],
                                                   ["A", "Police report LPD-26-031477", ""], ["B", "Photo log — scene and vehicles", "6 photos"],
                                                   ["C", "Medical summary and medical chronology", ""], ["D", "Itemized medical specials", ""],
                                                   ["E", "Medical records and bills by provider, in date order", "WHITFIELD 0001–0066, then the bills"],
                                                   ["F", "Wage and time-loss verification — Lakeside USD", ""], ["G", "Client impact statement (signed 09/30/2026)", ""]]))

    # ================================================================ RESPONSES
    page("response/DW_29_Keystone_Response_and_Offer.html", "Keystone — Response & Offer $18,500 (11/04/2026)",
         keystone_letter("November 4, 2026", "<p>We have reviewed your demand of October 9, 2026. Our evaluation considered the following:</p><ol>"
                         "<li><b>Gap in treatment.</b> Your client had no treatment from May 14 to June 26, 2026 — 43 days. We question whether the pain management treatment after the gap is related to this accident.</li>"
                         "<li><b>Prior condition.</b> The records show chiropractic treatment for the back in January 2025. We consider her complaints at least partly pre-existing.</li>"
                         "<li><b>Chiropractic treatment.</b> Twenty-four chiropractic visits is excessive for a soft-tissue injury.</li>"
                         "<li><b>Medical expenses.</b> We evaluate the amounts actually paid ($5,736.40), not the amounts billed.</li>"
                         "<li><b>Future care.</b> Future injections “if symptoms recur” are speculative.</li></ol>"
                         "<p>Based on the above, Keystone offers <b>$18,500.00</b> in full and final settlement of all bodily injury claims. This offer remains open for 30 days.</p>"))
    page("response/DW_30_Keystone_Prior_Records_Request.html", "Keystone — Request for Prior Records (11/04/2026)",
         keystone_letter("November 4, 2026", "<p>To complete our evaluation, please provide your client's complete medical records from <b>all providers for the five (5) years before</b> March 14, 2026, together with a signed authorization (enclosed) so we may obtain records directly.</p>"))
    page("response/DW_31_Keystone_Second_Offer.html", "Keystone — Second Offer $31,000 (11/24/2026)",
         keystone_letter("November 24, 2026", "<p>Thank you for your letter of November 12, 2026 and the records cited, and for your counter-demand of $72,500.00. Having reconsidered the gap and the prior low back treatment in light of the records you cited, Keystone increases its offer to <b>$31,000.00</b> in full and final settlement of all bodily injury claims.</p>"))
    page("response/DW_32_Settlement_Confirmation.html", "Settlement Confirmation — $47,500 (12/03/2026)",
         firm_letter("Tom Reyes, Keystone Mutual Insurance Co.", "December 3, 2026", [f"Claimant: {CLIENT} · Claim No.: {CLAIM}"],
                     "<p>This confirms our telephone conversation today: with our client's authority, the bodily injury claim is settled for <b>$47,500.00</b>. Please send the proposed release for our review; our client will not sign until the attorney has approved it. The settlement check should be payable to “Dana Whitfield and LSH Law Group.”</p>"
                     "<p>Liens and outstanding balances will be resolved by this office from the settlement proceeds.</p>"))

    # ================================================================ TEMPLATES
    blank = lambda n, cols: table(cols, [[""] * len(cols) for _ in range(n)])
    page("templates/TP_01_Medical_Chronology_Template.html", "Template — Medical Chronology", hdr(FIRM, "Template") + "<h1>Medical Chronology</h1><p class='sub'>One row per encounter, in date order, in the provider's words. Every row cites its Bates page(s).</p>" +
         kv([["Client / DOI", ""], ["Records reviewed", "WHITFIELD ____ – ____"]]) + blank(8, ["Date of service", "Provider / facility", "Visit type", "Summary (complaints, findings, diagnosis, plan)", "Flag", "Bates"]) +
         "<p style='font-size:13px'><b>Flags:</b> prior injury · gap in treatment (30+ days) · objective finding · causation opinion · procedure · MMI / future care.</p>", kind="Template")
    page("templates/TP_02_Medical_Summary_Template.html", "Template — Medical Summary", hdr(FIRM, "Template") + "<h1>Medical Summary</h1><ol>"
         "<li><b>Overview</b> — client, DOI, how it happened, treatment span, providers, number of visits.</li><li><b>Initial treatment</b> — ED / first visit: complaints, tests, diagnoses.</li>"
         "<li><b>Diagnostics</b> — imaging in the radiologist's words.</li><li><b>Treatment course</b> — by provider or phase; response to treatment.</li>"
         "<li><b>Gaps and prior history</b> — stated plainly with the reasons in the records.</li><li><b>Current status</b> — MMI, restrictions, future care and cost.</li></ol>"
         "<p style='font-size:13px'>Neutral and factual. Cite a Bates page for every statement.</p>", kind="Template")
    page("templates/TP_03_Bills_Itemization_Template.html", "Template — Bills Itemization", hdr(FIRM, "Template") + "<h1>Bills Itemization — Medical Specials</h1>" +
         blank(8, ["Provider", "DOS", "Description / CPT", "Billed", "Adj.", "Health ins.", "PIP / MedPay", "Client", "Balance", "Source"]) +
         "<p style='font-size:13px'>Balance = Billed − Adjustments − all Payments. List exclusions (pre-DOI, duplicates, unrelated) below with the reason. Keep billed and paid columns — the attorney decides which the demand uses.</p>" +
         "<h2>Balances &amp; liens</h2>" + blank(4, ["Holder", "Type (LOP, balance, reimbursement)", "Amount", "Confirmed", "Source"]), kind="Template")
    page("templates/TP_04_Demand_Letter_Template.html", "Template — Demand Letter", hdr(FIRM, "Template") + "<h1>Demand Letter — Structure</h1><ol>"
         "<li>Heading: adjuster, carrier, claim #, insured, claimant, date of loss.</li><li>Introduction and representation.</li><li>Facts and liability (Ex. A, B).</li>"
         "<li>Injuries and treatment — from the medical summary, with record cites (Ex. C, E).</li><li>Medical specials — from the itemization (Ex. D).</li>"
         "<li>Lost wages and other economic losses (Ex. F).</li><li>Non-economic damages — specific, truthful examples (Ex. G).</li>"
         "<li>Weaknesses addressed with the records (gaps, prior history).</li><li>Demand amount and deadline — set by the attorney.</li><li>Enclosures.</li></ol>", kind="Template")
    page("templates/TP_05_Exhibit_Index_and_Packet_Checklist.html", "Template — Exhibit Index & Packet Checklist", hdr(FIRM, "Template") + "<h1>Exhibit Index &amp; Packet Checklist</h1>" +
         table(["#", "Item", "✓"], [["1", "Demand letter (signed)", ""], ["2", "Exhibit index", ""], ["A", "Police / incident report", ""], ["B", "Photos", ""],
                                    ["C", "Medical summary &amp; chronology", ""], ["D", "Itemized medical specials", ""], ["E", "Medical records &amp; bills by provider, date order", ""],
                                    ["F", "Wage / time-loss verification", ""], ["G", "Client impact statement", ""]]) +
         "<ul><li>Every cite in the letter lands on the right page.</li><li>Figures match the itemization to the cent.</li><li>PDF bookmarked by exhibit; Bates-numbered; within the size limit.</li>"
         "<li>Sent by a method with proof of delivery; exact copy saved; deadline and follow-ups calendared.</li></ul>", kind="Template")

    # ================================================================ HANDOUTS
    H = [
        ("handouts/Day1_Demand_Specialist_Day_One_Playbook.html", "Day 1 — Demand Specialist Day-One Playbook", "<h1>Demand Specialist Day-One Playbook</h1><ol>"
         "<li>Read the handoff memo, then verify it against the documents — not the other way around.</li><li>Build the provider list: records received? bills received? itemized?</li>"
         "<li>Confirm the HIPAA authorization is in force before any request.</li><li>Request what's missing (itemized bills with CPT codes and dates of service), with a follow-up date.</li>"
         "<li>Bates-number the records and check the set is complete.</li><li>Flag prior injuries and wrong facts (like a date of incident) to the attorney.</li>"
         "<li>PHI: minimum necessary, firm systems only.</li><li>Log everything in the CMS the same day.</li></ol>"),
        ("handouts/Day2_Chronology_and_Summary_Guide.html", "Day 2 — Chronology & Summary Guide", "<h1>Chronology &amp; Summary Guide</h1><h2>Chronology</h2><p>One row per encounter · date order · the provider's words · a Bates cite on every row · the flags.</p>"
         "<h2>Summary</h2><p>Overview → initial treatment → diagnostics → treatment course → gaps &amp; prior history → current status/MMI/future care.</p><h2>Abbreviations</h2>" +
         table(["Abbr.", "Meaning", "Abbr.", "Meaning"], [["c/o", "complains of", "ROM", "range of motion"], ["Dx", "diagnosis", "TTP", "tender to palpation"], ["Tx", "treatment", "LBP", "low back pain"],
                                                           ["Rx", "prescription", "ESI", "epidural steroid injection"], ["s/p", "status post", "MMI", "maximum medical improvement"], ["HPI", "history of present illness", "MVC", "motor vehicle collision"],
                                                           ["PRN", "as needed", "R / L", "right / left"]])),
        ("handouts/Day3_Bills_Itemization_Checklist.html", "Day 3 — Bills Itemization Checklist", "<h1>Bills Itemization Checklist</h1><ol>"
         "<li>Itemized bills from every provider (UB-04 for facilities, CMS-1500 for professionals).</li><li>One line per charge; billed, adjustments, each payer, balance, source.</li>"
         "<li>Balance = Billed − Adjustments − all Payments.</li><li>Leave out (with a note): pre-DOI, duplicates, unrelated care.</li>"
         "<li>Reconcile with the chronology: every visit has a bill; every bill has a visit.</li><li>Keep billed AND paid columns; the attorney decides.</li>"
         "<li>List balances, LOPs and reimbursement claims for the attorney and Case Manager — never negotiate or share settlement amounts.</li>"
         "<li>Specials summary: past medical + future medical + lost wages + out-of-pocket.</li></ol>"),
        ("handouts/Day4_Demand_Letter_Checklist.html", "Day 4 — Demand Letter Checklist", "<h1>Demand Letter Checklist</h1><ol>"
         "<li>Ready: MMI or treatment complete; records and bills complete; limits known; attorney review scheduled.</li><li>Heading: claim number and date of loss checked letter by letter.</li>"
         "<li>Every fact cited to an exhibit and page.</li><li>Diagnoses in the provider's words.</li><li>No false or overstated statements (priors, severity).</li>"
         "<li>Numbers match the itemization and wage verification exactly.</li><li>Weaknesses addressed with the records.</li><li>Amount and deadline set by the attorney; attorney signs.</li></ol>"),
        ("handouts/Day5_Packet_and_Response_Playbook.html", "Day 5 — Packet & Response Playbook", "<h1>Packet &amp; Response Playbook</h1><h2>Send</h2><p>LSH order: letter · index · A police · B photos · C summary &amp; chronology · D specials · E records &amp; bills · F wages · G impact statement. Proof of delivery, exact copy saved, deadline and follow-ups calendared.</p>"
         "<h2>Respond</h2>" + table(["Response", "Your first step"], [["Offer", "Log it; to the attorney the same day"], ["Argument (gap, prior, treatment, future care)", "Pull the records; draft a rebuttal with page cites"],
                                                                     ["Request for records", "Route to the attorney — scope is her call"], ["Billed vs paid", "Route to the attorney with both columns"],
                                                                     ["Silence near the deadline", "Follow up in writing; alert the attorney"]]) +
         "<p>Never accept, reject or counter an offer; never share settlement amounts; protect the statute of limitations.</p>"),
    ]
    for path, title, body in H:
        page(path, title, hdr(f"{FIRM} — Medsum &amp; Demand Training", "Handout") + body, kind="Handout")

    print(f"related billed {m(BILLED)} · adj {m(ADJ)} · paid {m(INS + PIP + PT)} · balance {m(BAL)} · all lines {m(ALL_LINES)} · economic {m(ECON)}")


if __name__ == "__main__":
    build()
