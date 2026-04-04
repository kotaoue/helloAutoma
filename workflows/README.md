# Workflows

## [Gemini → Markdown Download](gemini-download.json)

Scrapes the currently open Gemini conversation and saves it as a Markdown file to your PC.

### How it works

1. **Trigger** — Manual execution (run while a Gemini conversation page is open)
2. **Active Tab** — Registers the current browser tab so that the JS blocks can execute on it
3. **Scrape** — Extracts the page title and user/Gemini messages; logs details to the browser console (`[Gemini Download] …`)
4. **Download** — Saves the formatted Markdown file to your PC

> **Note:** The workflow must be run on a conversation page, not the Gemini home page.  
> A conversation URL looks like `https://gemini.google.com/app/XXXXXXXXXXXXXXXXX`.  
> On the home page no messages exist, so the output file will contain a placeholder comment.

### Import / update steps

1. Copy the contents of `gemini-download.json` and import it via Automa's **"Import workflow"**
2. **Every time this file changes you must re-import it** — Automa does not automatically pick up file changes
3. Open a Gemini conversation (URL must contain a conversation ID after `/app/`)
4. Run the workflow manually from the Automa extension popup **while the Gemini tab is active**

---

## [Gemini Download — Debug](gemini-debug.json)

A minimal diagnostic workflow.  
**Run this if the main workflow does not seem to execute.**

### How it works

1. **Trigger** — Manual execution
2. **Active Tab** — Registers the current browser tab
3. **JS Block** — Shows an `alert()` dialog with the following info:
   - Whether `document` (web context) is available
   - Whether `automaNextBlock` / `automaSetVariable` / `automaRefData` are available
   - Current URL and page title

### How to read the result

| alert shows … | Meaning |
|---|---|
| `automaNextBlock: true` | Everything working — re-import the main workflow and try again |
| `automaNextBlock: false` | Automa helpers not injected — try reinstalling the Automa extension |
| Alert does **not** appear | JS not running — check that Automa has permission for the page |

### Import steps

1. Copy the contents of `gemini-debug.json` and import it via Automa's **"Import workflow"**
2. Open **any** browser tab (does not have to be Gemini)
3. Run the workflow manually and observe the alert dialog

