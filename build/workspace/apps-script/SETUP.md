# Case Workspace: one-time setup (about 5 minutes)

The portal gives every trainee their own copy of the Dana Whitfield case folder in Google Drive. A small
Google Apps Script, running as **team-litigation@legalsupporthelp.com**, does the Drive work.

The master folder is already in that account's Drive: **LSH Medsum & Demand — Case Workspace**. It has the
folder structure, the Start Here guide and six Google Docs templates. `setup()` adds the 29 case PDFs and
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

Open the master folder: `01 Incoming — unsorted` now holds 27 PDFs, `04 Received after the demand` holds 2,
and `03 Work Product` holds the five Docs and the two Sheets.

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

Optional: `WORKSPACE_DOMAIN` if trainees use a domain other than `legalsupporthelp.com`.

That's it. Trainees see **🗂 Workspace** in the portal's top bar: they enter their company Google account and
get their own folder (their trainer must have approved their portal account first). You'll find every trainee's
folder in **Trainee Workspaces** in Drive, and on the same **🗂 Workspace** page when you're signed in as admin:
each trainee's folder as it is now, their submissions, the AI pre-reviews and the answer key.

## Notes
- Each trainee is an **editor** of their own folder only, and can't share it onward. The firm's account owns it.
- Drive emails the trainee a share notice when their folder is created.
- The script keeps one record per trainee in its **Script Properties** (`ws_<trainee id>`): the folder, the files to
  review and the name each received file arrived with. Deleting a trainee's folder and asking them to create it
  again gives them a fresh copy.
- To let other trainers see every folder, share **LSH Medsum & Demand — Case Workspace** with them.
- After changing `Code.gs`, use **Deploy → Manage deployments → Edit → New version** so the URL stays the same.
- The answer key the AI pre-review uses lives in the portal (`build/workspace/answer_key.json`), never in Drive.
