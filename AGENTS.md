# AGENTS.md

This repository is a collection of [Automa](https://chromewebstore.google.com/detail/automa/infppggnoaenmfagbfknfkancpbljcca) workflows.  
The following guidelines are for AI coding agents working in this repository.

---

## What is Automa

Automa is a no-code browser extension for automating repetitive tasks.  
It lets you chain together "blocks" for clicks, form input, data extraction, scheduled execution, and more.  
Workflows are saved, exported, and imported as JSON files.

- Official site: <https://www.automa.site>
- Documentation: <https://docs.extension.automa.site>
- Chrome Web Store: <https://chromewebstore.google.com/detail/automa/infppggnoaenmfagbfknfkancpbljcca>

---

## Repository Structure

```
workflows/          # Automa workflow JSON files
  README.md         # Description of each workflow
  <name>/
    <name>.json     # Workflow file
README.md           # Repository overview
AGENTS.md           # This file (guide for AI agents)
cspell.json         # Spell-check configuration
```

---

## Rules for Adding and Editing Workflow JSON

1. Create a `workflows/<workflow-name>/` directory and place the JSON file inside it.
2. The file name must match the directory name (e.g. `workflows/my-workflow/my-workflow.json`).
3. Use the JSON exactly as exported from the Automa extension.
4. When adding or updating a workflow, also add a description to `workflows/README.md`.

---

## Using the Automa Chrome Extension Builder (CEB)

Automa CEB lets you package workflows into a **standalone Chrome extension** that can be distributed to other users or published to the Chrome Web Store.

> **Note**  
> Automa CEB is currently in **Beta**. Report bugs or missing features on the [Automa Discord](https://discord.gg/C6khwwTE84).

### 1. Creating a New Extension

1. Click the **"My extension"** button on [automa.site](https://www.automa.site) to open the [extensions page](https://extension.automa.site/extensions).
2. Click **"New extension"** and enter a name and description.

### 2. Dashboard Overview

Selecting an extension opens its dashboard. There are five main sections:

| Section | Description |
|---|---|
| **Workflows** | Add, update, and delete workflows |
| **Details** | Edit the name, description, and icon |
| **Customize** | Customize the UI or inject a custom script |
| **Crash Logs** | View errors that occurred during workflow execution |
| **Analytics** | See install count, active users, and execution count |

From the dashboard header you can:

- Switch the current draft version
- Generate the extension file
- Save changes
- Publish the extension

### 3. Adding Workflows

1. Open the **Workflows** tab in the dashboard and click **"+ Workflow"**.
2. Choose how to add the workflow:
   - **From JSON file** — select a JSON file exported from the Automa extension.
   - **From Automa extension** — available if Automa v1.24.0 or later is installed.

#### Updating and Deleting Workflows

- **Update**: Click the update icon next to the workflow, then select a new JSON or import source.  
  All additions, updates, and deletions are automatically applied to every user who has the extension installed.
- **Delete**: Click the delete button. You can also select multiple workflows and delete them at once.
- **Invisible**: When checked, the workflow is hidden from users so it cannot be run manually.

### 4. Publishing the Extension

1. Click the **"Publish"** button in the dashboard header.
2. After publishing, go to the **Details** tab and click the download button in the version history section to get the ZIP file.

### 5. Installing the Extension

Install the downloaded ZIP file in a Chromium-based browser (Chrome, Edge, Brave, etc.):

1. Open `chrome://extensions`.
2. Enable the **"Developer mode"** switch in the top-right corner (Google Chrome).
3. Drag and drop the ZIP file onto that page.

---

## Notes for AI Agents

- Workflow JSON files use **Automa's own schema**. Do not modify the schema arbitrarily.
- If you change the contents of a JSON file, verify the workflow by importing it into the Automa extension.
- When adding a new workflow, always add a description to `workflows/README.md`.
- This repository has no build scripts or test suite. The only quality check is spell-checking via `cspell.json` (`npx cspell "**"`).
