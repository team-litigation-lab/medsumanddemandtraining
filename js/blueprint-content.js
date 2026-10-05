/* 🛠 The Medsum & Demand course's Trainer blueprint (lsh-blueprint.js draws it; lsh-blueprint-course.js adds it
   to 🧭 Orientation). The Trainee blueprint is the Orientation deck itself (orientSlides), at /blueprint.pdf.
   A slide is { icon, title, points: [...], where, tip }. Change the wording here; the page and the PDF are made
   from it each time, stamped with the deployed build. README → Blueprints. */
window.LSH_BLUEPRINT = {
  product: 'Medsum & Demand Training',
  site: 'LSH Medsum & Demand Training (5-Day)',
  file: 'LSH_MD',
  trainer: {
    sub: 'Running the 5-day Medsum & Demand course: the trainer side of the portal',
    slides: [
      { icon: '🔑', title: 'Signing in as a trainer', points: [
          'Admin sign-in with the admin password. The server checks it, and every request after it needs your signed session.',
          'Your top bar adds 🧭 Orientation, the Facilitator Guide and 👁 Trainee view.',
          'Admin is your trainer dashboard: Trainee Audit, 📁 Batch Folders, Rankings, SOP Reference, Trainer Cues, Content Studio, Trainee Feedback, 📋 Activities and 🗣 Feedback Style.',
          'Every day is open to you, so you can preview it before you teach it.'],
        where: 'Admin sign-in · Admin in the top bar.',
        tip: 'Approve the class before the first session, so nobody waits at the start.' },
      { icon: '✅', title: 'Trainees and the Trainee Audit', points: [
          'Approve new trainees, or reject them. Revoke a trainee to close their access.',
          'Each trainee\'s day, Knowledge Check scores and Skill Builder work, by batch.',
          'Generate an AI review of their work, and reset a tool\'s attempts when they need another try.'],
        where: 'Admin → Trainee Audit.',
        tip: 'Check the audit at the end of each day, before you write the day\'s feedback.' },
      { icon: '💬', title: 'Day feedback', points: [
          'Write each day\'s feedback for a trainee, or let ✨ Suggest wording (AI) pre-fill it for you to edit.',
          'Save each day, or send all the drafts together. Trainees read it under 💬 Feedback.',
          'Trainee Feedback shows what trainees said about each day.'],
        where: 'Admin → Trainee Audit → a trainee · Admin → Trainee Feedback.',
        tip: 'One thing they did well, one thing to change: short and specific.' },
      { icon: '🎲', title: 'Surprise tasks and roleplays', points: [
          'Send a 🎲 Surprise Task built on the day\'s lessons and Dana Whitfield\'s file. It\'s graded, and you can end it from Admin.',
          'Assign a 🔥 Live Roleplay: the client, records and billing offices, and the adjuster.',
          'Both show up on the trainee\'s screen straight away.'],
        where: 'Admin → Trainee Audit → a trainee.',
        tip: 'Use a surprise task to check what the class found hard that morning.' },
      { icon: '🩺', title: 'The Case File and the documents', points: [
          'Every lesson, Skill Builder and roleplay works one case: Dana Whitfield, from the file handoff to the settlement.',
          '📁 Documents: 32 case documents (records Bates-numbered WHITFIELD 0001–0066), 5 templates and 5 handouts.',
          'Signed in as a trainer, documents show their 🔑 audit key: the problems planted in them. Trainees never see it.'],
        where: 'Top bar → Case File · 📁 Documents.',
        tip: 'Use the 🔑 keys to check what a trainee caught and what they missed.' },
      { icon: '🗂', title: 'The Case Workspace (Google Drive)', points: [
          'Each trainee works the file in their own Google Drive folder: sort the incoming PDFs, then build the work product.',
          'Submitting a day\'s work returns an AI pre-review, scored against the answer key.',
          'You see every trainee\'s folder as it is now, with a ✓ or ✗ for where each file belongs; re-run a review and read the answer key.',
          'The answer key never goes into Drive or the public site.'],
        where: 'Top bar → 🗂 Workspace.',
        tip: 'Until the Worker has its workspace settings, the page says the workspace isn\'t switched on yet.' },
      { icon: '🧪', title: 'Practice and the Skill Builders', points: [
          '🧪 Practice: every day has a 🧠 Skill Builder, 🗣 Communication (a live roleplay) and 🗂 Systems (the CMS).',
          'One Skill Builder a day, 4 parts each: the file audit, the chronology and summary, the itemized bills, the demand, then Keystone\'s replies.',
          'Written parts are graded by the AI rubric, in the facilitator\'s voice.'],
        where: 'Top bar → 🧪 Practice.',
        tip: 'Assign the day\'s Skill Builder right after its lesson, while it\'s fresh.' },
      { icon: '🖥', title: 'Presenter view and the decks', points: [
          'Each day\'s slides are its Canva deck, with a spoken script for every slide in the four-beat format.',
          'Share only the slides window in Google Meet; your console shows the script.',
          'The shared window never flickers or reloads mid-class.'],
        where: 'A day → 🖥 Presenter view · Admin → Trainer Cues.',
        tip: 'Open it 15 minutes early, and share the slides window, not your screen.' },
      { icon: '📋', title: 'SOP Reference and Trainer Cues', points: [
          'SOP Reference: each day\'s session plan, run of show and script, with the day\'s Canva deck named.',
          'Trainer Cues: the cues and the script for each topic, and the speaker notes PDF.',
          'The Facilitator Guide (top bar): how the course runs and what to say when.'],
        where: 'Admin → SOP Reference · Trainer Cues · top bar → Facilitator Guide.',
        tip: 'Read the next day\'s run of show the evening before.' },
      { icon: '📁', title: 'Batch Folders, Rankings and Content Studio', points: [
          '📁 Batch Folders: each class in its own folder. Archive a finished batch to clear the list.',
          'Rankings: the class side by side, by progress and scores.',
          'Content Studio: each day\'s lessons, what\'s published and what\'s a draft; add or expand topics and publish them.'],
        where: 'Admin → 📁 Batch Folders · Rankings · Content Studio.',
        tip: 'Preview a change in 👁 Trainee view before the class sees it.' },
      { icon: '📝', title: 'Activities, the feedback style and Trainee view', points: [
          '📋 Activities: publish each day\'s activities and review the submissions.',
          '🗣 Feedback Style learns how you write feedback, from your own reviews; AI drafts use that voice.',
          '👁 Trainee view shows the portal exactly as trainees see it.',
          '🧭 Orientation is the Trainee blueprint to share on day one; it\'s also /blueprint.pdf, in trainees\' Handouts.'],
        where: 'Admin → 📋 Activities · 🗣 Feedback Style · 👁 Trainee view · 🧭 Orientation.',
        tip: 'The Trainee blueprint PDF republishes itself after every update; nothing to do by hand.' }
    ]
  }
};

/* The Trainee blueprint (Orientation, /blueprint.pdf) and the Handouts card describe this course: the shared engine
   still carries the EA/PA course's opening ("Ten days … Executive & Personal Assistant", a 10-day roadmap). Done here,
   not in index.html, so a rebuild of the page keeps it. */
(function () {
  const days = () => (typeof DAYS !== 'undefined' ? DAYS.length : 5);
  const fix = (s) => String(s)
    .replace(/Ten days to work like a strategic, trusted Executive &amp; Personal Assistant to an attorney — built around one realistic client, from Day 1 to Day 10\./,
      'Five days to work like a confident Demand Specialist — built around one realistic case, Dana Whitfield\'s, from the file handoff to the settlement.')
    .replace(/short topics across 10 days/g, `short topics across ${days()} days`)
    .replace(/Your 10-day roadmap/g, `Your ${days()}-day roadmap`)
    .replace(/Days 1–10 ·/g, `Days 1–${days()} ·`)
    .replace(/How the portal works — the 10-day roadmap, how each day runs, grading, certificate and ground rules\./,
      `How the portal works: the ${days()}-day roadmap, how each day runs, the Case File, the Workspace, practice, grading, the certificate and the ground rules.`);
  const wrap = (name, each) => {
    const f = window[name];
    if (typeof f !== 'function' || f.__lbpFix) return;
    window[name] = function () { const r = f.apply(this, arguments); return each(r); };
    window[name].__lbpFix = true;
  };
  function apply() {
    wrap('orientSlides', (slides) => Array.isArray(slides) ? slides.map(sl => Object.assign({}, sl, { h: fix(sl.h), body: fix(sl.body) })) : slides);
    wrap('renderHandouts', fix);
  }
  apply();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply); else setTimeout(apply, 0);
})();
