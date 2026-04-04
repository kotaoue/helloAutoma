# Workflows

## [GitHub → Automa Import](github-import/github-import.json)

Fetches an Automa workflow JSON from the current GitHub page, downloads it to your PC, and shows step-by-step instructions to finish importing it into Automa.

### How it works

1. **Trigger** — Manual execution while viewing a GitHub page for a `.json` workflow file
2. **Active Tab** — Registers the current browser tab so the JS block can execute on it
3. **Fetch & Download** — Converts the GitHub page URL to a raw URL, fetches the JSON, validates it is an Automa workflow, and triggers a browser file download. An alert then guides you through the final import step.

### Import & usage steps

1. Import `github-import/github-import.json` into Automa once via the dashboard **"Import workflow"** button (⭳)
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
