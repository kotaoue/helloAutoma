# Workflows

## [Gemini → Markdown Download](gemini-download.json)

Scrapes the currently open Gemini conversation and saves it as a Markdown file to your PC.

### How it works

1. **Trigger** — Manual execution (run while the Gemini page is open)
2. **Scrape** — Extracts the page title and user/Gemini messages, formats them as Markdown, and stores them as workflow variables
3. **Download** — Saves the formatted Markdown file to your PC

### Import steps

1. Copy the contents of `gemini-download.json` and import it via Automa's "Import workflow"
2. Open the Gemini conversation you want to save and run the workflow manually

