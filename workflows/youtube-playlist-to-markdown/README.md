# youtube-playlist-to-markdown

**File:** [`youtube-playlist-to-markdown.json`](youtube-playlist-to-markdown.json)

YouTubeのプレイリストページにアクセスすると自動で起動し、プレイリスト内の全動画を Markdown のリスト形式でダウンロードします。

## Blocks used

| Block | Description |
|---|---|
| **Trigger** (visit-web, SPA対応) | `https://www.youtube.com/playlist*` へのアクセスで自動起動 |
| **JavaScript Code** | 動画リストを全件スクロール取得し、`<プレイリスト名>.md` をダウンロード |

## How to use

1. Install the [Automa](https://chromewebstore.google.com/detail/automa/infppggnoaenmfagbfknfkancpbljcca) browser extension.
2. Open the Automa extension and go to **Workflows**.
3. Click **Import** and select `youtube-playlist-to-markdown.json`.
4. Open any YouTube playlist page (e.g. `https://www.youtube.com/playlist?list=...`).
5. Automa automatically triggers and downloads `<playlist name>.md` to your browser's default **Downloads** folder.

## Output format

```markdown
- [動画タイトル](https://www.youtube.com/watch?v=...&list=...&index=1)
- [動画タイトル2](https://www.youtube.com/watch?v=...&list=...&index=2)
```

## Notes

- The workflow scrolls to the bottom repeatedly until all lazy-loaded videos appear (capped at 100 iterations or 2 minutes).
- `supportSPA` is enabled so the trigger also fires during in-page YouTube navigation (not only on hard reloads).
- The downloaded file is saved to your browser's default Downloads folder.
