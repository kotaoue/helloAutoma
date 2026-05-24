# youtube-playlist-to-markdown

**File:** [`youtube-playlist-to-markdown.json`](youtube-playlist-to-markdown.json)

YouTubeプレイリストページを開いた状態で Automa ボタンから手動実行すると、プレイリスト内の全動画を Markdown のリスト形式でダウンロードします。

## Blocks used

| Block | Description |
|---|---|
| **Trigger** (manual) | Automa ポップアップの ▶ ボタンで手動起動 |
| **Active Tab** | 現在アクティブなタブ（YouTube プレイリスト）を取得 |
| **JavaScript Code** | 動画リストを全件スクロール取得し、`<プレイリスト名>.md` をダウンロード |

## How to use

1. Install the [Automa](https://chromewebstore.google.com/detail/automa/infppggnoaenmfagbfknfkancpbljcca) browser extension.
2. Open the Automa extension and go to **Workflows**.
3. Click **Import** and select `youtube-playlist-to-markdown.json`.
   - If you have a previous version installed, **delete it first** and re-import the new file.
4. Open a YouTube playlist page in your browser (e.g. `https://www.youtube.com/playlist?list=...`).
5. Click the Automa extension icon, find this workflow, and press the **▶** (run) button.
6. Automa downloads `<playlist name>.md` to your browser's default **Downloads** folder.

## Debugging

If the download does not happen:

1. Open the browser DevTools console (**F12** → **Console** tab) while on the playlist page.
2. Run the workflow — the script logs progress with the `[Automa]` prefix:
   ```
   [Automa] Started. URL: https://www.youtube.com/playlist?list=...
   [Automa] Scroll iteration 0 - items found: 0
   [Automa] Scroll iteration 1 - items found: 100
   ...
   [Automa] Total video items found: 200
   [Automa] Done: MyPlaylist.md (200 videos)
   ```
3. Check the Automa **Logs** panel for the workflow result message.

## Output format

```markdown
- [動画タイトル](https://www.youtube.com/watch?v=...&list=...&index=1)
- [動画タイトル2](https://www.youtube.com/watch?v=...&list=...&index=2)
```

## Notes

- The workflow scrolls to the bottom repeatedly until all lazy-loaded videos appear (capped at 100 iterations or 2 minutes).
- The downloaded file is saved to your browser's default Downloads folder.
