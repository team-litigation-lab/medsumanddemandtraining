#!/usr/bin/env python3
"""The Dana Whitfield file "as received", for the Google Workspace case exercise.

    python3 build/workspace/make_received.py      # writes build/workspace/html/*.html + jobs.json
    node build/workspace/render-pdfs.cjs          # renders them to workspace/files/*.pdf

What a Demand Specialist really gets: one PDF per provider or sender, unsorted, with generic
fax / scanner names, no Bates numbers yet, a fax header on what came by fax, and a duplicate
(the MRI report faxed twice). The medical records are written one page per future Bates page,
so a correctly arranged set runs WHITFIELD 0001–0066 exactly as in the rest of the course.

Everything else (letters, bills, wages, the impact statement) is the course's own document,
rendered without the website banner. Every page carries a TRAINING — SIMULATED footer.
The answer key (build/workspace/answer_key.json) says what each file is and where it belongs;
it stays in build/, which is never deployed.
"""
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, os.path.dirname(HERE))
import make_documents as md  # noqa: E402  (the case's numbers and visit data)

OUT_HTML = os.path.join(HERE, "html")
DOCS = os.path.join(ROOT, "documents")
CLIENT, DOB = md.CLIENT, md.DOB
FIRM_FAX = "(555) 318-1001"

PAGE_CSS = md.CSS + """
@page{size:Letter;margin:0.75in 0.7in 0.7in}
body{background:#fff;font:13.5px/1.5 Georgia,'Times New Roman',serif}
.pg{break-after:page;min-height:8.6in;position:relative}
.pg:last-child{break-after:auto}
.ph{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:2px solid #262B45;padding-bottom:6px;margin-bottom:10px;font:12px/1.35 Arial,sans-serif}
.ph .co{font:800 15px Arial,sans-serif;color:#262B45}
.pt{font:12px Arial,sans-serif;background:#F4F5F8;border:1px solid #D5D9E4;padding:5px 8px;margin:0 0 12px;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap}
.form td{height:22px}
.box{border:1px solid #9AA0B4;min-height:70px;padding:6px 8px;margin:6px 0 10px;font:12.5px Arial,sans-serif}
.chk{font:12.5px Arial,sans-serif;line-height:1.9}
.sigline{margin-top:28px;border-top:1px solid #1B1E2E;width:55%;padding-top:3px;font:11.5px Arial,sans-serif}
.body-diagram{display:flex;gap:30px;justify-content:center;margin:16px 0}
.body-diagram svg{width:180px;height:330px}
"""
# documents/*.html pages printed as PDFs: no website banner, no site footer, no Bates stamps
PRINT_CSS = """
.sim,.foot{display:none !important}
.doc{max-width:none;margin:0;padding:0;border:0;box-shadow:none}
body{background:#fff}
.bates{display:none !important}
"""


def esc(s):
    return str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def record_html(title, pages):
    body = "".join(f'<section class="pg">{p}</section>' for p in pages)
    return f"""<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>{esc(title)}</title>
<style>{PAGE_CSS}</style></head><body>{body}</body></html>"""


def head(co, sub, right):
    return f'<div class="ph"><div><div class="co">{co}</div><div>{sub}</div></div><div style="text-align:right">{right}</div></div>'


def pt(extra=""):
    return f'<div class="pt"><span><b>Patient:</b> {CLIENT}</span><span><b>DOB:</b> {DOB}</span>{extra}</div>'


# ---------------------------------------------------------------- the six record sets, page by page
def riverside():
    h = head("Riverside Medical Center", "Emergency Department · 2400 Riverside Pkwy, Lakeside, ST 90311", "MRN RMC-0731582<br>Acct 26073144")
    p = pt("<span><b>DOS:</b> 03/14/2026</span>")
    pages = [
        "<h2>Face Sheet</h2>" + md.kv([["Patient", f"{CLIENT} · DOB {DOB} · F"], ["Address", "2417 Maple Ridge Ct, Lakeside, ST 90318"], ["Arrival", "03/14/2026 16:52 · private vehicle"], ["Chief complaint", "Neck and back pain after rear-end MVC"], ["Primary insurance", "BlueHarbor Health PPO · member ID BHH-448120937"], ["Secondary", "Summit Ridge Insurance — PIP"], ["Emergency contact", "Husband (on file)"]]),
        "<h2>Triage</h2><p>16:58 · BP 132/84 · HR 92 · RR 16 · SpO2 99% RA · Temp 98.4 °F</p><p><b>Pain:</b> neck 7/10, low back 5/10.</p><p>Restrained driver, stopped at a light, rear-ended approximately 1 hr PTA. Airbags not deployed. No LOC. Ambulatory at scene. Acuity: ESI 3.</p><p>Triage RN: K. Moreno, RN</p>",
        "<h2>Physician Note</h2><p><b>HPI:</b> 42 y/o F restrained driver, rear-ended while stopped at a light. c/o neck pain radiating to the R trapezius and low back pain. Denies numbness, weakness, LOC, headache at this time.</p><p><b>PMH:</b> none reported. <b>Meds:</b> none. <b>Allergies:</b> NKDA.</p><p><b>ROS:</b> negative except as in HPI.</p>",
        "<h2>Physical Examination</h2><p>General: alert, in mild distress. HEENT: atraumatic.</p><p><b>Neck:</b> cervical paraspinal TTP R&gt;L, ROM limited by pain; no midline step-off.</p><p><b>Back:</b> lumbar paraspinal TTP; no midline tenderness.</p><p><b>Neuro:</b> intact; strength 5/5 all extremities; sensation intact; reflexes 2+ symmetric.</p><p>Physician: Paul Hendricks, MD</p>",
        "<h2>Radiology — CT Cervical Spine Without Contrast</h2><p>Indication: MVC, neck pain.</p><p><b>Findings:</b> Normal alignment. No acute fracture. Prevertebral soft tissues normal.</p><p><b>IMPRESSION:</b> No acute fracture or malalignment.</p><p>Read by: S. Lindqvist, MD · 03/14/2026 18:20</p>",
        "<h2>Orders / ED Course</h2>" + md.table(["Time", "Order / event"], [["17:20", "CT cervical spine w/o contrast"], ["17:25", "Ibuprofen 800 mg PO — given"], ["18:20", "CT resulted — negative"], ["18:45", "Reassessed: pain 6/10, ambulating"]]),
        "<h2>Diagnoses</h2><ul><li>Strain of muscle, fascia and tendon at neck level (cervical strain) — S16.1XXA</li><li>Strain of muscle, fascia and tendon of lower back (lumbar strain) — S39.012A</li><li>Motor vehicle collision</li></ul>",
        "<h2>Discharge Instructions</h2><p>Rest, ice/heat. <b>Off work until cleared by your follow-up provider.</b> Follow up with your primary care provider or an orthopedic/spine provider in 2–3 days. Return for numbness, weakness or worsening pain.</p><p>Discharged 19:05, condition stable.</p><div class=\"sigline\">Patient signature (on file)</div>",
        "<h2>Prescriptions</h2>" + md.table(["Medication", "Sig", "Qty"], [["Cyclobenzaprine 10 mg", "1 PO at bedtime PRN spasm", "#20"], ["Ibuprofen 800 mg", "1 PO TID with food", "#30"]]) + "<p>Prescriber: Paul Hendricks, MD</p>",
    ]
    return [h + p + x for x in pages]


HS_HEAD = head("Harbor Spine &amp; Chiropractic", "Kevin Ames, DC · 1180 Harbor Rd, Lakeside, ST 90312 · (555) 318-7700", "Chart # HSC-20250108")


def harbor_2025():
    p = pt()
    return [HS_HEAD + p + "<h2>New Patient Examination — 01/08/2025</h2><p><b>CC:</b> low back pain x 2 days after lifting moving boxes. No radiation. No neck complaints.</p><p><b>Exam:</b> lumbar paraspinal spasm, ROM mildly limited.</p><p><b>Dx:</b> lumbar strain. <b>Plan:</b> chiropractic care x 3 visits.</p><p>Kevin Ames, DC</p>",
            HS_HEAD + p + "<h2>Daily Notes — January 2025</h2>" + md.table(["Date", "Visit", "Low back", "Note"], [["01/15/2025", "2", "3/10", "Improving."], ["01/29/2025", "3", "0/10", "Full ROM. <b>Released from care — resolved.</b>"]])]


def harbor_2026():
    p = pt()
    v, neck, lbp = md.VISITS, md.NECK, md.LBP

    def note(i, long=True):
        t = "CMT 98941, therapeutic exercise 97110, soft tissue 97140"
        s = f"<p><b>S:</b> neck {neck[i]}/10, low back {lbp[i]}/10. " + ("Still stiff in the mornings; headaches less frequent." if i < 10 else "Better overall; tingling in the R arm after long computer days.") + "</p>"
        o = "<p><b>O:</b> " + ("TTP C5–C7 paraspinals, R upper trapezius; cervical ROM reduced." if i < 7 else "Mild TTP C5–C6; cervical ROM improving.") + "</p>"
        a = "<p><b>A:</b> cervical and lumbar sprain/strain, improving.</p>"
        pl = f"<p><b>P:</b> {t}. Next visit per plan.</p>"
        return f"<h3>Daily Note — {v[i]}/2026 · visit {i + 1}</h3>" + s + o + a + pl

    def flow(i):
        return f"<h3>Treatment Record — {v[i]}/2026 · visit {i + 1}</h3>" + md.table(["Code", "Service", "Region", "Units"], [["98941", "Chiropractic manipulative treatment, 3–4 regions", "C, T, L", "1"], ["97110", "Therapeutic exercise", "Cervical", "1"], ["97140", "Manual therapy / soft tissue", "Cervical, R trapezius", "1"]]) + "<p>Treating on a letter of protection — LSH Law Group.</p><p>Kevin Ames, DC</p>"

    pages = [
        "<h2>Initial Examination — 03/17/2026 (visit 1)</h2><p><b>History:</b> Rear-ended while stopped on 03/14/2026; seen at Riverside ED. c/o neck pain 7/10 radiating to the R shoulder, low back pain 5/10, headaches.</p><p><b>Prior:</b> lumbar strain 01/2025 treated here, resolved.</p>",
        "<h2>Initial Examination — Findings</h2><p><b>Exam:</b> Cervical ROM reduced ~40% (flexion, extension, R rotation). TTP C5–C7 paraspinals and R upper trapezius. Lumbar paraspinal TTP. Foraminal compression mildly positive R.</p>",
        "<h2>Initial Examination — Assessment</h2><p><b>Assessment:</b> cervical sprain/strain; lumbar sprain/strain; post-traumatic headache.</p><p>MRI cervical spine ordered.</p>",
        "<h2>Plan of Care &amp; Work Status</h2><p><b>Plan:</b> chiropractic care 3x/week for 8 weeks (24 visits); re-evaluate 03/31.</p><p><b>Work status:</b> off work; re-evaluate 03/31.</p><p>Treating on a letter of protection from LSH Law Group.</p><p>Kevin Ames, DC</p>",
    ]
    for i in range(1, 6):            # visits 2–6: a note page and a treatment-record page each
        pages += [note(i), flow(i)]
    pages.append("<h2>Re-evaluation — 03/31/2026 (visit 7)</h2><p>Neck 5/10, LBP 3/10; ROM improved (reduced ~25%).</p><p><b>Work status:</b> released to return to work 04/03/2026, no lifting over 15 lb. Continue plan.</p><p>Kevin Ames, DC</p>")
    rest = list(range(7, 23))         # visits 8–23 on 11 pages: two notes on each of the first five, then one each
    for k in range(5):
        pages.append(note(rest[2 * k], False) + note(rest[2 * k + 1], False))
    for i in rest[10:]:
        pages.append(note(i))
    pages.append("<h2>Discharge — 05/14/2026 (visit 24 of 24)</h2><p>Neck 4/10, intermittent R arm tingling with prolonged computer work; LBP 2/10. The 8-week plan is complete.</p><p><b>Recommended:</b> continue care 2x/week for 4 more weeks. Patient declines further visits at this time: her mother, who provides childcare for her 3-year-old son, has been hospitalized and she cannot arrange care.</p><p><b>Discharged, improved,</b> with a home exercise program; return if symptoms worsen.</p><p>Kevin Ames, DC</p>")
    assert len(pages) == 27, len(pages)
    return [HS_HEAD + p + x for x in pages]


def clearview():
    h = head("Clearview Imaging", "Diagnostic imaging · 77 Clearview Ave, Lakeside, ST 90310", "Accession CVI-26-118207")
    p = pt("<span><b>DOS:</b> 03/30/2026</span>")
    return [h + p + "<h2>Order</h2><p>MRI cervical spine without contrast.</p><p>Ordering provider: Kevin Ames, DC. Indication: neck pain with R upper-extremity symptoms after MVC 03/14/2026.</p>",
            h + p + "<h2>Technique</h2><p>Multiplanar, multisequence MRI of the cervical spine without contrast, 03/30/2026. No prior studies for comparison.</p>",
            h + p + "<h2>Report</h2><p><b>Findings:</b> Alignment normal. Vertebral body heights preserved; no fracture or marrow edema. C2-3 through C4-5: no disc herniation or stenosis. <b>C5-6: 3 mm central disc protrusion abutting the ventral thecal sac</b>; no cord compression or cord signal abnormality; mild right neural foraminal narrowing. C6-7, C7-T1: unremarkable.</p><p><b>IMPRESSION:</b> 3 mm central disc protrusion at C5-6 abutting the ventral thecal sac, with mild right foraminal narrowing. No fracture.</p><p>Electronically signed: Ruth Okafor, MD, Radiologist · 03/30/2026</p>"]


def summit():
    h = head("Summit Orthopedic Associates", "Anita Patel, MD · Spine · 300 Summit Blvd, Lakeside, ST 90311", "Patient # SOA-48812")
    p = pt()
    body_svg = ('<svg viewBox="0 0 120 230"><circle cx="60" cy="22" r="16" fill="none" stroke="#555"/><path d="M60 38 L60 120 M60 55 L20 100 M60 55 L100 100 M60 120 L35 200 M60 120 L85 200" stroke="#555" fill="none"/>'
                '<path d="M54 40 l12 0 l0 14 l-12 0 z" fill="none" stroke="#B54A3F" stroke-width="2.5"/><path d="M62 56 L98 98" stroke="#B54A3F" stroke-width="4" opacity=".6"/></svg>')
    paperwork = [
        "<h2>New Patient Registration</h2>" + md.kv([["Name", CLIENT], ["DOB", DOB], ["Address", "2417 Maple Ridge Ct, Lakeside, ST 90318"], ["Phone", "(555) 318-4420"], ["Employer", "Lakeside Unified School District — Administrative Coordinator"], ["Referred by", "Kevin Ames, DC"], ["Reason for visit", "Neck pain into the right arm since a car accident 03/14/2026"]]),
        "<h2>Patient Questionnaire (1 of 2)</h2><p><b>Where is your pain?</b> Neck, right shoulder, right arm to the thumb.</p><p><b>When did it start?</b> 03/14/2026 — I was rear-ended.</p><p><b>Rate your pain today (0–10):</b> 5</p><p><b>What makes it worse?</b> Computer work, looking up, carrying my son.</p>",
        "<h2>Patient Questionnaire (2 of 2) — Past History</h2><p><b>Prior injuries to the neck or back?</b> “Low back strain in January 2025 from lifting boxes — got better after 3 chiropractor visits.” No prior neck injury.</p><p><b>Surgeries:</b> none. <b>Other conditions:</b> none.</p>",
        "<h2>Pain Diagram</h2><p>Mark where you feel symptoms.</p><div class=\"body-diagram\">" + body_svg + "</div><p>Patient marked: neck, R shoulder, R arm (tingling) to thumb/index finger.</p>",
        "<h2>Medications &amp; Allergies</h2>" + md.table(["Medication", "Dose", "How often"], [["Ibuprofen", "800 mg", "As needed"], ["Cyclobenzaprine", "10 mg", "At bedtime as needed"]]) + "<p><b>Allergies:</b> none known.</p>",
        "<h2>Review of Systems</h2><p class=\"chk\">☐ Fever ☐ Weight loss ☑ Neck pain ☑ Arm tingling (R) ☐ Weakness ☐ Bladder/bowel changes ☑ Headaches (improving) ☐ Chest pain ☐ Shortness of breath</p>",
        "<h2>Consent to Evaluate and Treat</h2><p>I consent to evaluation and treatment by Summit Orthopedic Associates.</p><div class=\"sigline\">Dana Whitfield · 04/20/2026</div>",
        "<h2>Notice of Privacy Practices — Acknowledgment</h2><p>I acknowledge receiving the Notice of Privacy Practices.</p><div class=\"sigline\">Dana Whitfield · 04/20/2026</div>",
        "<h2>Financial Policy</h2><p>Copays are due at the time of service. Your insurance plan is billed for covered services.</p><div class=\"sigline\">Dana Whitfield · 04/20/2026</div>",
        "<h2>Insurance Card (copy)</h2><div class=\"box\"><b>BlueHarbor Health — PPO</b><br>Member: Dana Whitfield · ID BHH-448120937 · Group 40917</div>",
    ]
    visit = [
        "<h2>Consultation — 04/20/2026 · Anita Patel, MD</h2><p><b>HPI:</b> 42 y/o F rear-ended 03/14/2026. Neck pain 5/10 radiating to the R arm with tingling in the R thumb and index finger. Chiropractic care 3x/week since 03/17 with partial improvement.</p>",
        "<h2>Consultation — Examination</h2><p><b>Exam:</b> Spurling test positive on the R. Decreased sensation R C6 dermatome. Biceps reflex 1+ R, 2+ L. Strength 5/5 except R wrist extension 4+/5.</p>",
        "<h2>Consultation — Imaging</h2><p><b>Imaging:</b> MRI 03/30/2026 personally reviewed — 3 mm central disc protrusion at C5-6 with mild R foraminal narrowing, correlating with symptoms.</p>",
        "<h2>Consultation — Assessment &amp; Plan</h2><p><b>Assessment:</b> C5-6 disc protrusion with right C6 radiculopathy (M50.122). <b>Plan:</b> continue therapy; refer to pain management for a C5-6 epidural steroid injection if no improvement.</p><p><b>Causation:</b> Within a reasonable degree of medical probability, the C5-6 injury is causally related to the 03/14/2026 MVC. Her January 2025 low back strain resolved and is unrelated to her current cervical condition.</p><p>Anita Patel, MD</p>",
        "<h2>Follow-up — 08/21/2026 · Anita Patel, MD</h2><p>Neck pain 3/10, intermittent; R arm tingling rare since the C5-6 ESI on 07/10/2026 at Bayside Pain Management. Exam: Spurling negative; sensation intact.</p>",
        "<h2>Follow-up — Assessment</h2><p><b>Assessment:</b> C5-6 disc protrusion with R C6 radiculopathy, improved. <b>Patient has reached maximum medical improvement (MMI).</b></p><p><b>Future care:</b> up to two additional C5-6 interlaminar epidural steroid injections over the next 24 months if symptoms recur, estimated at $3,900.00 each.</p>",
        "<h2>Follow-up — Plan</h2><p>Home exercise program; ergonomic workstation; follow up as needed.</p><p>Anita Patel, MD</p>",
        "<h2>Referral — 04/20/2026</h2><p>To: Bayside Pain Management (Luis Romero, MD).</p><p>Reason: C5-6 disc protrusion with R C6 radiculopathy; consider C5-6 ESI if symptoms persist despite conservative care.</p><p>Anita Patel, MD</p>",
    ]
    pages = paperwork + visit
    assert len(pages) == 18, len(pages)
    return [h + p + x for x in pages]


def bayside():
    h = head("Bayside Pain Management", "Luis Romero, MD · 900 Bayside Dr, Lakeside, ST 90313", "MRN BPM-22914")
    p = pt()
    pages = [
        "<h2>New Patient Evaluation — 06/26/2026 · Luis Romero, MD</h2><p><b>HPI:</b> Neck pain 6/10 with right-arm tingling <b>since the MVC of 03/14/2026</b>. Improved with chiropractic care; stopped care in mid-May because of family circumstances (her mother was hospitalized and she had no childcare). Neck pain and arm tingling worsened over the following weeks. Referred by Dr. Patel.</p>",
        "<h2>Examination</h2><p><b>Exam:</b> Cervical ROM limited in extension and R rotation; Spurling positive R; decreased sensation R C6.</p>",
        "<h2>Imaging &amp; Assessment</h2><p><b>Imaging:</b> MRI 03/30/2026 reviewed.</p><p><b>Assessment:</b> cervical radiculopathy, C5-6 disc protrusion.</p>",
        "<h2>Plan</h2><p><b>Plan:</b> C5-6 interlaminar epidural steroid injection under fluoroscopy. Risks and benefits discussed; consent obtained.</p><p>Treating on a letter of protection.</p>",
        "<h2>Procedure Note — 07/10/2026</h2><p><b>Procedure:</b> C5-6 interlaminar epidural steroid injection under fluoroscopic guidance (CPT 62321). Pre-procedure pain 6/10.</p>",
        "<h2>Procedure Note (continued)</h2><p>Loss-of-resistance technique; contrast confirmed epidural spread; steroid and local anesthetic injected. No complications.</p>",
        "<h2>Post-Procedure</h2><p>Post-procedure pain 2/10. Tolerated well. Discharged home with instructions; follow up with Dr. Patel.</p><p>Luis Romero, MD</p>",
    ]
    return [h + p + x for x in pages]


# ---------------------------------------------------------------- the incoming file
# id: what it is (answer key) · name: the file name as received · fax: fax header (None = mailed/emailed)
FAX = lambda when, who, num: f"{when}  FROM: {who} {num}  TO: LSH Law Group {FIRM_FAX}"
RECORDS = [
    # id, name, builder, fax header, bates range, belongs in
    ("DW10", "FAX_2026-08-26_0931.pdf", riverside, FAX("08/26/2026 09:31", "Riverside Medical Center HIM", "(555) 318-2200"), (1, 9)),
    ("DW11", "HarborSpine_old records.pdf", harbor_2025, FAX("08/27/2026 14:02", "Harbor Spine & Chiropractic", "(555) 318-7701"), (10, 11)),
    ("DW12", "scan0042.pdf", harbor_2026, None, (12, 38)),
    ("DW13", "Clearview MRI report.pdf", clearview, FAX("08/28/2026 10:15", "Clearview Imaging Records", "(555) 318-4101"), (39, 41)),
    ("DW13-DUP", "FAX_2026-09-02_1415.pdf", clearview, FAX("09/02/2026 14:15", "Clearview Imaging Records", "(555) 318-4101"), None),
    ("DW14", "SOA records Whitfield.pdf", summit, FAX("08/31/2026 16:40", "Summit Orthopedic Assoc.", "(555) 318-6651"), (42, 59)),
    ("DW15", "Bayside_PM_records.pdf", bayside, FAX("09/03/2026 11:08", "Bayside Pain Management", "(555) 318-9902"), (60, 66)),
]
# the course's own documents, printed as received
OTHERS = [
    ("DW01", "intake/DW_01_Case_Handoff_Memo.html", "Handoff memo - Whitfield (M. Webb).pdf", None, "01 Intake & Retainer"),
    ("DW02", "intake/DW_02_Client_Intake_Summary.html", "Intake_Whitfield_Dana.pdf", None, "01 Intake & Retainer"),
    ("DW03", "intake/DW_03_Retainer_and_HIPAA_Authorization.html", "Retainer+HIPAA signed.pdf", None, "01 Intake & Retainer"),
    ("DW04", "police/DW_04_Police_Report_LPD-26-031477.html", "LPD report 26-031477.pdf", None, "02 Police & Liability"),
    ("DW05", "police/DW_05_Photo_Log.html", "Photos log.pdf", None, "02 Police & Liability"),
    ("DW06", "insurance/DW_06_Keystone_Liability_Acceptance.html", "Keystone ltr 04-02-2026.pdf", None, "03 Insurance & Payers"),
    ("DW07", "insurance/DW_07_Keystone_Policy_Limits_Letter.html", "Keystone limits ltr.pdf", None, "03 Insurance & Payers"),
    ("DW08", "insurance/DW_08_Summit_Ridge_PIP_Payment_Log.html", "SummitRidge PIP log.pdf", None, "03 Insurance & Payers"),
    ("DW09", "insurance/DW_09_BlueHarbor_Reimbursement_Notice.html", "BlueHarbor notice.pdf", None, "03 Insurance & Payers"),
    ("DW16", "bills/DW_16_Riverside_Medical_Center_Itemized_Statement.html", "RMC UB04.pdf", FAX("09/04/2026 08:47", "Riverside Medical Center PFS", "(555) 318-2210"), "05 Medical Bills"),
    ("DW17", "bills/DW_17_Riverside_Emergency_Physicians_Statement.html", "REP 1500.pdf", None, "05 Medical Bills"),
    ("DW18", "bills/DW_18_Corner_Pharmacy_Receipt.html", "receipt - corner pharmacy.pdf", None, "05 Medical Bills"),
    ("DW19", "bills/DW_19_Harbor_Spine_Ledger.html", "HSC ledger LOP.pdf", FAX("09/04/2026 13:30", "Harbor Spine & Chiropractic", "(555) 318-7701"), "05 Medical Bills"),
    ("DW20", "bills/DW_20_Clearview_Imaging_Ledger.html", "Clearview acct ledger.pdf", FAX("09/05/2026 09:12", "Clearview Imaging Billing", "(555) 318-4102"), "05 Medical Bills"),
    ("DW21", "bills/DW_21_Summit_Orthopedic_Ledger.html", "SOA ledger.pdf", FAX("09/08/2026 15:55", "Summit Orthopedic Assoc.", "(555) 318-6651"), "05 Medical Bills"),
    ("DW22", "bills/DW_22_Bayside_Balance_Due_Statement.html", "Bayside stmt 08-28.pdf", None, "05 Medical Bills"),
    ("DW24", "bills/DW_24_Northgate_Family_Practice_Statement.html", "Northgate FP stmt.pdf", None, "05 Medical Bills"),
    ("DW25", "damages/DW_25_Lakeside_USD_Wage_Verification.html", "LUSD wage verif.pdf", None, "06 Wages & Damages"),
    ("DW26", "damages/DW_26_Client_Impact_Statement.html", "Impact statement signed.pdf", None, "06 Wages & Damages"),
]
# Wednesday of the training week: the itemized bill requested on Day 1
WEDNESDAY = [
    ("DW23", "bills/DW_23_Bayside_Itemized_Bill.html", "Bayside itemized 10-07.pdf", FAX("10/07/2026 10:41", "Bayside Pain Management", "(555) 318-9902"), "05 Medical Bills"),
]
AFTER_DEMAND = [
    ("DW29", "response/DW_29_Keystone_Response_and_Offer.html", "Keystone response 11-04-2026.pdf", None, "08 Correspondence"),
    ("DW30", "response/DW_30_Keystone_Prior_Records_Request.html", "Keystone records request 11-04-2026.pdf", None, "08 Correspondence"),
]
INCOMING, WEDNESDAY_FOLDER, LATER = "01 Incoming — unsorted", "04 Received Wednesday — open on Day 3", "05 Received after the demand — open on Day 5"
WHAT = {
    "DW01": "Case handoff memo from Marcus Webb, 10/05/2026", "DW02": "Client intake summary, 03/18/2026 (gives the DOI as 03/15; prior injuries: “None really, maybe a strain a while back”)",
    "DW03": "Retainer and HIPAA authorization, signed 03/18/2026", "DW04": "Police report LPD-26-031477, 03/14/2026", "DW05": "Photo log, scene and vehicles",
    "DW06": "Keystone liability acceptance, 04/02/2026", "DW07": "Keystone policy limits letter, 07/15/2026", "DW08": "Summit Ridge PIP payment log",
    "DW09": "BlueHarbor Health reimbursement claim notice", "DW10": "Riverside Medical Center ED record, 03/14/2026",
    "DW11": "Harbor Spine & Chiropractic 2025 prior records (low back strain, 01/08–01/29/2025)", "DW12": "Harbor Spine & Chiropractic 2026 records, 03/17–05/14/2026",
    "DW13": "Clearview Imaging MRI cervical spine report, 03/30/2026", "DW14": "Summit Orthopedic Associates records, 04/20 and 08/21/2026",
    "DW15": "Bayside Pain Management records, 06/26 and 07/10/2026", "DW16": "Riverside Medical Center itemized statement (UB-04), 03/14/2026",
    "DW17": "Riverside Emergency Physicians statement (CMS-1500)", "DW18": "Corner Pharmacy receipt, 03/14/2026",
    "DW19": "Harbor Spine ledger (LOP; includes the 2025 charges)", "DW20": "Clearview Imaging ledger (lists the MRI twice)",
    "DW21": "Summit Orthopedic ledger", "DW22": "Bayside balance-due statement, 08/28/2026 (not itemized)", "DW23": "Bayside itemized bill with CPT codes, 10/07/2026",
    "DW24": "Northgate Family Practice statement, 05/02/2026 wellness exam (unrelated)", "DW25": "Lakeside USD wage and time-loss verification",
    "DW26": "Client impact statement, signed 09/30/2026", "DW29": "Keystone response and $18,500.00 offer, 11/04/2026", "DW30": "Keystone request for 5 years of prior records, 11/04/2026",
}


RUBRIC = {
    "1": ["Files sorted: intake/retainer/handoff memo → 01 Intake & Retainer; police report and photo log → 02 Police & Liability; Keystone letters, PIP log, BlueHarbor notice → 03 Insurance & Payers; the six record sets → 04 Medical Records; the eight bills, ledgers and statements → 05 Medical Bills; wage verification and impact statement → 06 Wages & Damages; the duplicate MRI fax → 09 Duplicates & not used. 01 Incoming is empty; 04 and 05 stay closed until their day.",
          "Names follow YYYY-MM-DD Source – Document, using each document's own date.",
          "Medical records in Bates order with ranges at the front of each name: WHITFIELD 0001-0009 Riverside Medical Center ED (03/14/2026); 0010-0011 Harbor Spine 2025 prior records; 0012-0038 Harbor Spine 2026; 0039-0041 Clearview Imaging MRI; 0042-0059 Summit Orthopedic; 0060-0066 Bayside Pain Management. The duplicate MRI fax gets no Bates numbers.",
          "Audit catches: the intake gives the DOI as 03/15/2026 but the police report and ED record say 03/14/2026; the intake gives no detail on prior injuries (“None really, maybe a strain a while back”) but Harbor Spine treated a low back strain 01/08–01/29/2025 (WHITFIELD 0010–0011); the MRI report was faxed twice (keep one); Bayside's 08/28 statement is balance-due only, so the itemized bill with CPT codes must be requested; Clearview's ledger lists the same MRI twice; Harbor Spine's ledger includes 2025 charges; the Northgate 05/02/2026 wellness exam is unrelated; the 43-day gap 05/14 → 06/26/2026 (reasons at WHITFIELD 0038 and 0060).",
          "Actions go to the right person: corrections and legal questions to Attorney Bennett, treatment-phase questions to Marcus Webb; nothing is deleted."],
    "2": ["Chronology: one row per encounter in date order, starting with the 2025 prior visits (WHITFIELD 0010–0011), then ED 03/14/2026 (0001–0009), Harbor Spine 03/17 initial exam (0012–0015), daily visits (0016–0025, 0027–0037), Clearview MRI 03/30 (0039–0041), re-evaluation 03/31 with return to work 04/03 (0026), Summit consult 04/20 (0052–0055) and referral (0059), Harbor Spine discharge 05/14 (0038), Bayside 06/26 (0060–0063), ESI 07/10 (0064–0066), Summit follow-up/MMI 08/21 (0056–0058). Daily visits may be grouped by date range with their page range.",
          "Provider's words: the MRI is a “3 mm central disc protrusion at C5-6” (0041), never a herniation; Dx C5-6 disc protrusion with right C6 radiculopathy (0055).",
          "Flags: prior injury (0010–0011); gap in treatment 05/14 → 06/26/2026, 43 days, with the reasons (childcare, 0038; continuing and worsening symptoms, 0060); objective findings (MRI 0041; Spurling, reflexes, sensation 0053); causation opinion (0055); procedure (ESI 07/10, 0064–0066); MMI and future care: up to 2 ESIs at $3,900.00 each = $7,800.00 (0057). The Northgate wellness exam is not in the injury chronology.",
          "Medical summary: the six sections (overview, initial treatment, diagnostics, treatment course, prior history and gaps, current status and future care), neutral and factual, a Bates cite for every statement, no opinions on value or causation beyond quoting Dr. Patel."],
    "3": ["Wednesday's Bayside itemized bill (10/07/2026, from 04 Received Wednesday) renamed and filed in 05 Medical Bills; its two lines are on the itemization.",
          "Related lines only, billed amounts: Riverside Medical Center $4,850.00; Riverside Emergency Physicians $1,120.00; Corner Pharmacy $86.40; Harbor Spine 24 visits × $240.00 = $5,760.00; Clearview MRI (CPT 72141) $2,400.00; Summit 04/20 $650.00; Bayside 06/26 $425.00; Bayside ESI 07/10 (CPT 62321) $3,900.00; Summit 08/21 $325.00.",
          "Totals tie out: billed $19,516.40; adjustments $2,675.00; BlueHarbor paid $2,575.00; PIP paid $2,500.00 (Riverside Emergency Physicians $1,120.00 + Clearview $1,380.00); client paid $661.40; balance $11,105.00.",
          "Exclusions with reasons: Harbor Spine 2025 prior charges $285.00 (before the DOI); Clearview duplicate MRI line $2,400.00 (duplicate); Northgate 05/02/2026 wellness exam $275.00 (unrelated). The all-lines total would be $22,476.40.",
          "Balances & liens: Harbor Spine LOP $5,760.00; Bayside LOP $4,325.00; Clearview balance after PIP $1,020.00; BlueHarbor reimbursement claim $2,575.00 to date (final figure after settlement). PIP has no reimbursement claim under the training state's rule.",
          "Every line has its source (file and page). Payments are in the right payer column (PIP is not health insurance)."],
    "4": ["Heading facts: Tom Reyes, Keystone Mutual Insurance Co.; insured Grant Mercer; claim KM-26-0418823; client Dana Whitfield; date of loss 03/14/2026 (not 03/15).",
          "Liability: stopped at a red light at Oak St & 5th Ave; rear-ended; Mercer “looked down at my phone for a second”; cited for Following Too Closely; Keystone accepted liability 04/02/2026. Cites the police report and photos as exhibits.",
          "Injuries and treatment in date order with exhibit and Bates cites; the MRI described as a 3 mm central disc protrusion at C5-6 (never “herniated”); Dr. Patel's causation opinion quoted with WHITFIELD 0055; MMI and future care with 0057.",
          "Damages tie out: past medical $19,516.40 (billed, related lines only, no Northgate exam); future medical $7,800.00; lost wages 14 workdays × $224.00 = $3,136.00; total economic $30,452.40; non-economic examples from the signed impact statement (couldn't lift her 3-year-old son or turn her head to check her blind spot for six weeks; stopped her Saturday 5K runs; still wakes at night with neck pain).",
          "Addresses the January 2025 low back strain (resolved, different body part; Dr. Patel 0055) and the 43-day gap (childcare 0038; continuing symptoms 0060) truthfully. No “never had neck or back problems”.",
          "Demand $85,000.00 with 30 days to respond, as Attorney Bennett instructed; signed by the attorney; exhibits listed; no opinions about value or the law of its own."],
    "5": ["Exhibit index in the LSH standard order: A police report; B photos; C medical summary and chronology; D itemized medical specials; E medical records and bills by provider in date order (WHITFIELD 0001–0066, then the bills); F wage verification; G client impact statement. Ranges and page counts correct; no duplicate or unrelated records.",
          "07 Demand Packet holds shortcuts named Ex. A … Ex. G in order.",
          "The two 11/04/2026 Keystone letters filed in 08 Correspondence with the naming convention.",
          "Reply draft answers each of Keystone's five arguments with the record: the 43-day gap (childcare 0038; continuing symptoms 0060); the 2025 low back history (resolved, different body part, Dr. Patel 0055); “excessive” chiropractic (plan 3x/week for 8 weeks, 0012–0015; discharged improved, 0038); paid-not-billed (the attorney's legal question; both columns on the itemization); “speculative” future injections (Dr. Patel's MMI note, 0057; the first ESI took pain from 6/10 to 2/10, 0064–0066).",
          "Leaves the $18,500.00 offer, any counter and the scope of the 5-year prior-records request to Attorney Bennett, with the facts she needs."],
}


def main():
    import random
    os.makedirs(OUT_HTML, exist_ok=True)
    jobs, key = [], []
    for rid, name, build, fax, bates in RECORDS:
        pages = build()
        path = os.path.join(OUT_HTML, f"{rid}.html")
        open(path, "w", encoding="utf8").write(record_html(name, pages))
        jobs.append({"html": path, "pdf": f"workspace/files/{rid}.pdf", "fax": fax})
        if bates: assert bates[1] - bates[0] + 1 == len(pages), (rid, len(pages))
        key.append({"id": rid, "name": name, "drive": INCOMING, "file": f"workspace/files/{rid}.pdf", "pages": len(pages),
                    "is": "Duplicate fax of the Clearview MRI report (same 3 pages): keep one copy, don't Bates it twice" if rid.endswith("DUP") else WHAT[rid],
                    "belongs": None if rid.endswith("DUP") else "04 Medical Records", "bates": f"WHITFIELD {bates[0]:04d}–{bates[1]:04d}" if bates else None})
    for group, folder in ((OTHERS, INCOMING), (WEDNESDAY, WEDNESDAY_FOLDER), (AFTER_DEMAND, LATER)):
        for rid, src, name, fax, belongs in group:
            html = open(os.path.join(DOCS, src), encoding="utf8").read()
            html = html.replace("</head>", f"<style>{PRINT_CSS}</style></head>")
            html = re.sub(r'href="(\.\./)*doc\.css"', f'href="file://{DOCS}/doc.css"', html)
            if rid == "DW01":   # the memo, as Marcus wrote it: the records arrive unstamped, so no Bates ranges yet
                html = re.sub(r"Received — WHITFIELD \d{4}–\d{4}(?:; also \d{4}–\d{4} \(2025\))?", "Received", html)
            path = os.path.join(OUT_HTML, f"{rid}.html")
            open(path, "w", encoding="utf8").write(html)
            jobs.append({"html": path, "pdf": f"workspace/files/{rid}.pdf", "fax": fax})
            key.append({"id": rid, "name": name, "drive": folder, "file": f"workspace/files/{rid}.pdf", "belongs": belongs, "bates": None, "is": WHAT[rid]})
    # neutral public names, in shuffled order: the web addresses don't say which file is which
    order = list(range(len(key))); random.Random(20261005).shuffle(order)
    for n, i in enumerate(order, 1):
        pub = f"workspace/files/f{n:02d}.pdf"
        jobs[i]["pdf"] = pub; key[i]["file"] = pub
    json.dump(jobs, open(os.path.join(HERE, "jobs.json"), "w"), indent=1)
    manifest = {"about": "Files the Case Workspace setup script imports into the master folder (see build/workspace/apps-script/Code.gs).",
                "files": sorted(({"folder": k["drive"], "name": k["name"], "url": k["file"]} for k in key), key=lambda x: (x["folder"], x["name"].lower()))}
    os.makedirs(os.path.join(ROOT, "workspace"), exist_ok=True)
    json.dump(manifest, open(os.path.join(ROOT, "workspace", "manifest.json"), "w", encoding="utf8"), ensure_ascii=False, indent=1)
    json.dump({"incoming": INCOMING, "wednesday": WEDNESDAY_FOLDER, "later": LATER, "files": key, "rubric": RUBRIC}, open(os.path.join(HERE, "answer_key.json"), "w", encoding="utf8"), ensure_ascii=False, indent=1)
    print(f"{len(jobs)} documents → build/workspace/html/ · answer key: build/workspace/answer_key.json")


if __name__ == "__main__":
    main()
