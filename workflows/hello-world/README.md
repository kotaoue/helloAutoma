# hello-world

**File:** [`hello-world.json`](hello-world.json)

A minimal Hello World workflow to help you understand the basics of Automa.

When triggered manually, it opens [https://example.com](https://example.com) in a new tab and saves the `h1` heading text to the workflow log.

## Blocks used

| Block | Description |
|---|---|
| **Trigger** (manual) | Starts the workflow when you click the run button |
| **New Tab** | Opens `https://example.com` in a new browser tab |
| **Get Text** | Reads the `h1` element text and saves it to the log |

## How to use

1. Install the [Automa](https://chromewebstore.google.com/detail/automa/infppggnoaenmfagbfknfkancpbljcca) browser extension.
2. Open the Automa extension and go to **Workflows**.
3. Click **Import** and select `hello-world.json`.
4. Click the **Run** button to execute the workflow.
5. After it finishes, click **Log** to see the extracted heading text.
