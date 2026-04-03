# Workflows

## [Gemini → Markdown Download](gemini-download.json)

Scrapes the currently open Gemini conversation and saves it as a Markdown file to your PC.

### How it works

1. **Trigger** — Manual execution (run while a Gemini conversation page is open)
2. **Notification** — "Starting — scraping conversation..." (confirms the workflow has launched)
3. **Scrape** — Extracts the page title and user/Gemini messages, formats them as Markdown, and stores them as workflow variables; logs details to the browser console (`[Gemini Download] ...`)
4. **Notification** — "Scraped N messages from …" (shows how many turns were found)
5. **Download** — Saves the formatted Markdown file to your PC
6. **Notification** — "Done! Saved …" (confirms the file was created)

> **Note:** The workflow must be run on a conversation page, not the Gemini home page.  
> A conversation URL looks like `https://gemini.google.com/app/XXXXXXXXXXXXXXXXX`.  
> On the home page no messages exist, so the output file will contain a placeholder comment.

### Import steps

1. Copy the contents of `gemini-download.json` and import it via Automa's "Import workflow"
2. Open a Gemini conversation (the URL must contain a conversation ID after `/app/`)
3. Run the workflow manually — three browser notifications will confirm each stage

### Troubleshooting

If no file appears and no notifications show:
- Open the browser console (F12 → Console) and look for `[Gemini Download]` log lines
- Check the Automa workflow log — each block (Notification, JavaScript Code) should show SUCCESS or an error message
- Make sure you are on a conversation page, not `gemini.google.com/app` (the home page)
- If browser notifications are blocked, allow them for the Automa extension in your browser settings

