# Workflows

## [GitHub → Automa Import](github-import.json)

Clicks the **"Download raw file"** button on a GitHub file page to save the workflow JSON to your PC.

### How it works

1. **Trigger** — Manual execution while viewing a GitHub file (blob) page
2. **Active Tab** — Registers the current browser tab so the JS block can execute on it
3. **Click Download** — Finds GitHub's native "Download raw file" button and clicks it

### Import & usage steps

1. Import `github-import.json` into Automa once via the dashboard **"Import workflow"** button (⭳)
2. Open any GitHub page that shows an Automa workflow JSON file, for example:
   ```
   https://github.com/kotaoue/helloAutoma/blob/<branch>/workflows/<name>.json
   ```
3. Run **"GitHub → Automa Import"** manually from the Automa extension popup **while that tab is active**
4. The JSON file is downloaded via GitHub's own download button
5. To import into Automa:
   - Click the Automa extension icon → Open Dashboard
   - Click the import button (⭳) in the toolbar
   - Select the downloaded file

### How to check logs

**Browser DevTools (F12 → Console tab)**

Filter by `[Automa Import]` to see only this workflow's messages.  
If everything works you should see all 4 steps in order:

| Step | Message | Meaning |
|------|---------|---------|
| 1 | `Step 1: Workflow started. URL = …` | Workflow JS block started |
| 2 | `Step 2: GitHub blob page confirmed` | URL is a valid GitHub file page |
| 3 | `Step 3: Found "Download raw file" button, clicking…` | Button found and clicked |
| 4 | `Step 4: SUCCESS — download triggered` | Done ✅ |

If execution stopped before a step, the last message shown tells you where it failed.  
Common failure messages:

- `Step 2: FAIL — not on a GitHub blob page` → You are not on a GitHub file view page (URL must contain `/blob/`)
- `Step 3: FAIL — "Download raw file" button not found` → The page did not load the GitHub toolbar yet; try refreshing the page

**Automa Dashboard → Logs**

Open the Automa extension → Dashboard → Logs.  
The most recent run is at the top. The result column shows:

- `Downloaded` → success
- `Error: …` → the error message from whichever step failed
