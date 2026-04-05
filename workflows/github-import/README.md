# Workflows

## [GitHub → Automa Import](github-import.json)

Fetches an Automa workflow JSON from the current GitHub page, downloads it to your PC, and shows step-by-step instructions to finish importing it into Automa.

### How it works

1. **Trigger** — Manual execution while viewing a GitHub page for a `.json` workflow file
2. **Active Tab** — Registers the current browser tab so the JS block can execute on it
3. **Fetch & Download** — Converts the GitHub page URL to a raw URL, fetches the JSON, validates it is an Automa workflow, and triggers a browser file download. An alert then guides you through the final import step.

### Import & usage steps

1. Import `github-import.json` into Automa once via the dashboard **"Import workflow"** button (⭳)
2. Open any GitHub page that shows an Automa workflow JSON file, for example:
   ```
   https://github.com/kotaoue/helloAutoma/blob/<branch>/workflows/<name>.json
   ```
3. Run **"GitHub → Automa Import"** manually from the Automa extension popup **while that tab is active**
4. The workflow downloads the JSON file and shows an alert with the final steps:
   - Click the Automa extension icon → Open Dashboard
   - Click the import button (⭳) in the toolbar
   - Select the downloaded file

> **Note:** The workflow works on any `github.com/…/blob/…/*.json` URL. It converts the page URL to the corresponding `raw.githubusercontent.com` URL automatically.

### How to check logs

The workflow emits step-by-step console logs so you can trace exactly where execution stopped.

**Browser DevTools (F12 → Console tab)**

Filter by `[Automa Import]` to see only this workflow's messages.  
If everything works you should see all 7 steps in order:

| Step | Message | Meaning |
|------|---------|---------|
| 1 | `Step 1: Workflow started. URL = …` | Workflow JS block started |
| 2 | `Step 2: Converted to raw URL = …` | GitHub URL converted to raw URL |
| 3 | `Step 3: URL OK — fetching JSON…` | URL ends with `.json`, fetch started |
| 4 | `Step 4: Fetch response — status 200 OK` | Server responded successfully |
| 5 | `Step 5: JSON parsed — keys: name, drawflow, …` | JSON parsed and validated |
| 6 | `Step 6: Triggering download — <filename>.json` | Download link clicked |
| 7 | `Step 7: SUCCESS — file download triggered: …` | Done ✅ |

If execution stopped before a step, the last message shown tells you where it failed.  
Common failure messages:

- `Step 3: FAIL — URL does not end with .json` → You are not on a `.json` file page
- `Step 4: Fetch response — status 404` → The file does not exist at that URL
- `Step 5: FAIL — missing fields` → The JSON is not an Automa workflow format

**Automa Dashboard → Logs**

Open the Automa extension → Dashboard → Logs.  
The most recent run is at the top. The result column shows the final `data` value:

- `Downloaded: <filename>.json` → success
- `Error: …` → the error message from whichever step failed
