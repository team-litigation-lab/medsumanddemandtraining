"""Read the Canva decks' page text from their public "view" pages.

    python3 build/canva/extract.py            # fetch the 5 decks (curl) and write build/canva/dayN.json + js/md-canva-decks.js

The view page embeds the design as JSON (window['bootstrap']). Each page is a list of elements;
text elements carry their text runs and font sizes. We keep, per page: a title (the largest text)
and the text in reading order (top to bottom, then left to right). The page images themselves are
captured by build/canva/capture.cjs.
"""
import json, os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
# Template text layers that aren't visible on the slides (left over from the Canva template)
HIDDEN_TEXT = {"history project"}
# Pages whose largest text isn't the best title (e.g. the title is split over a script font)
TITLE_FIX = {
    (1, 11): "Do’s and Don’ts in Preparing a Medical Chronology",
    (1, 26): "How to Check if a Medical Record Is Related to the Subject Incident — Steps",
    (1, 32): "Loss of Enjoyment of Life — Proof and Valuation",
    (1, 33): "Loss of Enjoyment of Life — Common Examples",
    (1, 34): "Integrating Loss of Enjoyment of Life Into Demand Letters",
    (1, 39): "Impairment Rating — Tips",
    (1, 40): "Impairment Rating — Sample",
    (1, 53): "Handling Missing Records / Bills — Why It Matters",
    (2, 1): "Medical Summary",
    (2, 10): "SOAP: Subjective, Objective, Assessment, Plan",
    (2, 22): "Common Mistakes to Avoid — 4. Mixing Pre-Existing and Incident-Related Injuries",
    (3, 10): "Pain and Suffering — How Bills Help Show It",
    (3, 11): "Pain and Suffering — Computation Methods",
    (3, 13): "Loss of Enjoyment of Life — Computation Methods",
    (3, 15): "Emotional Distress — Computation Methods",
    (3, 17): "Duties Under Duress — Computation Methods",
    (3, 26): "Net Sheet Components — A. Total Medical Expenses · B. Liens & Payback",
    (3, 27): "Net Sheet Components — C. Out-of-Pocket · D. Lost Wages",
    (3, 28): "Net Sheet Components — E. Future Medical · F. Non-Economic Damages",
    (3, 29): "Net Sheet Components — G. Attorney Fees · H. Case Costs",
    (3, 30): "Net Sheet — Sample Computation",
    (4, 30): "Required Supporting Documents — a. Client · b. Defendant · c. Insurance",
    (4, 31): "Required Supporting Documents — d. Dec Page · e. Crash Report · f. Citation",
    (4, 32): "Required Supporting Documents — g. Wage Loss · h. Bills and Records · i. Impact Statement",
    (5, 14): "Red Flags to Watch For",
}
# Branding text on many pages — never a title
NOT_TITLE = {"legal support help"}
SMALL = {"a", "an", "and", "as", "at", "by", "for", "from", "in", "of", "on", "or", "the", "to", "vs", "vs.", "with"}
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"


def deck_urls():
    src = open(os.path.join(ROOT, "js", "md-skillbuilders.js"), encoding="utf8").read()
    block = src[src.index("const MD_DECKS = {"):src.index("};", src.index("const MD_DECKS = {"))]
    return {int(n): (t, u) for n, t, u in re.findall(r'(\d):\{title:"([^"]*)", url:"([^"]*)"\}', block)}


def load_bootstrap(html):
    a = html.index("window['bootstrap'] = JSON.parse('") + len("window['bootstrap'] = JSON.parse('")
    raw = html[a:html.index("');", a)]
    return json.loads(raw.encode("utf-8").decode("unicode_escape").encode("latin-1").decode("utf-8"))


def find_doc(o):
    if isinstance(o, dict):
        a = o.get("A")
        if isinstance(a, list) and a and isinstance(a[0], dict) and a[0].get("A?") == "i" and isinstance(o.get("D"), str):
            return o
        for v in o.values():
            r = find_doc(v)
            if r: return r
    elif isinstance(o, list):
        for v in o:
            r = find_doc(v)
            if r: return r
    return None


def px(v):
    m = re.match(r"([\d.]+)px", str(v or ""))
    return float(m.group(1)) if m else 0.0


def text_items(o, top=0.0, left=0.0, out=None):
    """(top, left, size, text) for every text element, with group offsets added."""
    if out is None: out = []
    if isinstance(o, dict):
        t = top + (o["A"] if isinstance(o.get("A"), (int, float)) else 0)
        l = left + (o["B"] if isinstance(o.get("B"), (int, float)) else 0)
        a = o.get("a")
        if isinstance(a, dict) and isinstance(a.get("C"), dict) and isinstance(a["C"].get("A"), list) and all(isinstance(x, str) for x in a["C"]["A"]):
            txt = "".join(a["C"]["A"]).replace("\\n", "\n")
            size = max([px(s.get("G")) for s in (a["C"].get("C") or []) if isinstance(s, dict)] or [0])
            txt = re.sub(r"[ \t ]+", " ", txt)
            txt = "\n".join(x.strip() for x in txt.split("\n")).strip()
            if txt: out.append((t, l, size, txt))
        for k, v in o.items():
            if k != "a" and isinstance(v, (dict, list)): text_items(v, t, l, out)
    elif isinstance(o, list):
        for v in o: text_items(v, top, left, out)
    return out


def smart_title(t):
    t = re.sub(r"\s+", " ", t.replace("`", "’")).strip().strip(":").strip()
    # Canva shows many headings in capitals; the stored text can be any case ("wHAT IS…")
    if t.isupper() or t.islower() or re.search(r"\b[a-z][A-Z]", t):
        words = t.lower().split(" ")
        t = " ".join(w if (i and w in SMALL) else (w[:1].upper() + w[1:]) for i, w in enumerate(words))
    return t


def page_record(p, n, day):
    items = [x for x in text_items(p.get("E", [])) if re.sub(r"\s+", " ", x[3]).strip().lower() not in HIDDEN_TEXT]
    items = sorted(items, key=lambda x: (round(x[0] / 40), x[1]))
    title, sub = "", ""
    if items:
        ranked = sorted([x for x in items if re.sub(r"\s+", " ", x[3]).strip().lower() not in NOT_TITLE] or items, key=lambda x: (-x[2], x[0]))
        title = smart_title(ranked[0][3])
        for x in ranked[1:]:
            line = smart_title(x[3].split("\n")[0])
            if line and line.lower() != title.lower() and len(line) <= 60:
                sub = line; break
    title = TITLE_FIX.get((day, n), title)
    body, seen = [], set()
    for _, _, _, txt in items:
        k = re.sub(r"\s+", " ", txt).lower()
        if k in seen: continue        # Canva layers the same text twice for outline effects
        seen.add(k); body.append(txt)
    return {"n": n, "title": title[:90], "sub": sub, "text": "\n\n".join(body)}


def main():
    decks = deck_urls()
    out_js = {}
    for n, (label, url) in sorted(decks.items()):
        html = subprocess.run(["curl", "-sS", "-L", "--max-time", "60", "-A", UA, url], capture_output=True, text=True, check=True).stdout
        doc = find_doc(load_bootstrap(html))
        pages = [page_record(p, i + 1, n) for i, p in enumerate(doc["A"])]
        # a heading used on several pages ("Types", "Key Components…") gets its page's own subtitle
        counts = {}
        for pg in pages: counts[pg["title"].lower()] = counts.get(pg["title"].lower(), 0) + 1
        for pg in pages:
            if counts[pg["title"].lower()] > 1 and pg["sub"]: pg["title"] = f"{pg['title']} — {pg['sub']}"[:90]
            pg.pop("sub")
        rec = {"day": n, "deck": doc["D"].strip(), "label": label, "url": url, "pages": pages}
        json.dump(rec, open(os.path.join(HERE, f"day{n}.json"), "w", encoding="utf8"), ensure_ascii=False, indent=1)
        out_js[n] = {"deck": rec["deck"], "url": url,
                     "pages": [{"img": f"slides/day{n}/{p['n']:02d}.webp", "title": p["title"], "text": p["text"]} for p in pages]}
        print(f"day {n}: {len(pages)} pages — {rec['deck']}")
    js = ("/* The Canva training decks, one per day, as the day's lesson slides (see js/md-canva.js).\n"
          "   Generated by build/canva/extract.py from the decks' view links — don't edit by hand.\n"
          "   img: the page captured by build/canva/capture.cjs · title/text: the page's own words (alt text, titles, search). */\n"
          "window.MD_CANVA = " + json.dumps(out_js, ensure_ascii=False, indent=1) + ";\n")
    open(os.path.join(ROOT, "js", "md-canva-decks.js"), "w", encoding="utf8").write(js)


if __name__ == "__main__":
    main()
