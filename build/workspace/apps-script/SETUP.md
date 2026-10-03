# Case Workspace: one-time setup (about 5 minutes)

The portal gives every trainee their own copy of the Dana Whitfield case folder in Google Drive. A small
Google Apps Script, running as **team-litigation@legalsupporthelp.com**, does the Drive work.

The master folder is already in that account's Drive: **LSH Medsum & Demand — Case Workspace**. It has the
folder structure, the Start Here guide and five Google Docs templates. `setup()` adds the 29 case PDFs and
the two Google Sheets.

## 1. Create the script
1. Signed in as **team-litigation@legalsupporthelp.com**, open <https://script.google.com> → **New project**.
   Name it **LSH Case Workspace**.
2. Replace everything in `Code.gs` with the contents of `Code.gs` from this folder.
3. **Project Settings** (gear) → tick **Show "appsscript.json" manifest file in editor**. Open `appsscript.json`
   and replace it with the one from this folder.

## 2. Run setup once
1. In the editor, choose the function **setup** and press **Run**.
2. Approve the permissions it asks for (Drive, Docs, Sheets, connect to an external service). They're for your
   own account.
3. When it finishes, open **Execution log**. Copy the line **WORKSPACE_SECRET for the Worker: …**.

Open the master folder: `01 Incoming — unsorted` now holds 26 PDFs, `04 Received Wednesday — open on Day 3`
holds 1, `05 Received after the demand — open on Day 5` holds 2, and `03 Work Product` holds the five Docs and
the two Sheets. `setup()` also makes **_records** next to the master: the script keeps one small file per trainee
there. Leave it alone.

## 3. Deploy it as a web app
1. **Deploy → New deployment** → type **Web app**.
2. **Execute as: Me (team-litigation@…)** · **Who has access: Anyone**. The portal calls it from Cloudflare,
   and every call must carry the secret, so "Anyone" without the secret gets "Not allowed".
3. **Deploy**, then copy the **Web app URL** (it ends in `/exec`).

## 4. Connect the portal
In Cloudflare → Workers → **medsumanddemandtraining** → Settings → Variables and Secrets, add two **Secrets**:

| Name | Value |
|---|---|
| `WORKSPACE_URL` | the Web app URL from step 3 |
| `WORKSPACE_SECRET` | the secret from step 2 |

The portal must be in secure mode (the Worker has an admin password); the workspace stays off otherwise.
Trainees use their **@legalsupporthelp.com** accounts. To use another domain, change `CONFIG.DOMAIN` in `Code.gs`
and `WS_DOMAIN` in `worker.js` together.

That's it. Trainees see **🗂 Workspace** in the portal's top bar: they enter their company Google account and
get their own folder (their trainer must have approved their portal account first). You'll find every trainee's
folder in **Trainee Workspaces** in Drive, and on the same **🗂 Workspace** page when you're signed in as admin:
each trainee's folder as it is now, their submissions, the AI pre-reviews and the answer key.

## Notes
- Each trainee is an **editor** of their own folder only, and can't share it onward. The firm's account owns it.
- Drive emails the trainee a share notice when their folder is created.
- A trainee can't change the Google account their folder is shared with. On the 🗂 Workspace page (Trainer view),
  **Change Google account…** moves the folder to a new address, and **Start over…** moves the folder to the Drive
  trash so the trainee can create a fresh copy (restore it from the trash if that was a mistake).
- The script keeps one small record per trainee in **_records** (the folder, the files to review and the name each
  received file arrived with). Several trainees can create their folders at the same time; a copy that fails part
  way is moved to the trash, never left behind.
- To let other trainers see every folder, share **LSH Medsum & Demand — Case Workspace** with them.
- After changing `Code.gs`, use **Deploy → Manage deployments → Edit → New version** so the URL stays the same.
- The answer key the AI pre-review uses lives in the portal (`build/workspace/answer_key.json`), never in Drive.
