# Workflows

## [Gemini → Markdown Download](gemini-download.json)

Scrapes the currently open Gemini conversation and saves it as a Markdown file to your PC.

### How it works

1. **Trigger** — Manual execution (run while a Gemini conversation page is open)
2. **Scrape** — Extracts the page title and user/Gemini messages; shows an `alert()` dialog with diagnostic info; logs details to the browser console (`[Gemini Download] …`)
3. **Download** — Saves the formatted Markdown file to your PC

> **Note:** The workflow must be run on a conversation page, not the Gemini home page.  
> A conversation URL looks like `https://gemini.google.com/app/XXXXXXXXXXXXXXXXX`.  
> On the home page no messages exist, so the output file will contain a placeholder comment.

### Import / update steps

1. Copy the contents of `gemini-download.json` and import it via Automa's **"Import workflow"**
2. **Every time this file changes you must re-import it** — Automa does not automatically pick up file changes
3. Open a Gemini conversation (URL must contain a conversation ID after `/app/`)
4. Run the workflow manually

When the Scrape block runs you will see an **alert dialog** in the browser:
- If the alert appears → the JS block is executing correctly; check the console (`F12 → Console`) for `[Gemini Download]` lines
- If no alert appears → the JS block is not running; run the **Debug** workflow below to isolate the cause

---

## [Gemini Download — Debug](gemini-debug.json)

A minimal diagnostic workflow.  
**Run this first if the main workflow does not seem to execute.**

### What it does

It has exactly two blocks:

1. **Trigger** — Manual execution
2. **JS Block** — Shows an `alert()` dialog with the following info:
   - Whether `document` (web context) is available
   - Whether `automaNextBlock` / `automaSetVariable` / `automaRefData` are available
   - Current URL and page title

### How to read the result

| alert shows … | Meaning |
|---|---|
| `automaNextBlock: true` | Automa injection OK — the main workflow's JS is the issue |
| `automaNextBlock: false` | Automa functions are **not** being injected into the page — file an issue on the Automa repo |
| Alert does **not** appear | The JS block itself is not executing — the workflow JSON format may be incompatible with your Automa version |

### Import steps

1. Copy the contents of `gemini-debug.json` and import it via Automa's **"Import workflow"**
2. Open **any** browser tab (does not have to be Gemini)
3. Run the workflow manually and observe the alert dialog

