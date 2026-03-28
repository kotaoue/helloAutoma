# Workflows

## [Gemini → Journal Import](gemini-github-import.json)

Scrapes the currently open Gemini conversation and automatically creates a branch, commits a Markdown file, and opens a PR in the Journal repository via the GitHub API.

### How it works

1. **Trigger** — Manual execution (run while the Gemini page is open)
2. **Scrape** — Extracts the page title and user/Gemini messages, formats them as Markdown, and stores them as workflow variables
3. **GitHub** — Creates a branch, commits the file, and opens a PR via the GitHub API

### Setup

Enter the following JSON into the workflow's **globalData**:

```json
{
  "github_token": "ghp_YOUR_PERSONAL_ACCESS_TOKEN",
  "github_owner": "kotaoue",
  "github_repo":  "Journal",
  "base_branch":  "main"
}
```

> **Note:** The token requires the `repo` scope (read/write for contents and pull-requests). Do not commit your token to source code.

### Import steps

1. Install [Automa](https://chromewebstore.google.com/detail/automa/infppggnoaenmfagbfknfkancpbljcca)
2. Copy the contents of `gemini-github-import.json` and import it via Automa's "Import workflow"
3. Set the globalData above in the workflow (replace `github_token` with your actual token)
4. Open the Gemini conversation you want to save and run the workflow manually

