# youtube-playlist-to-markdown

YouTubeプレイリストページを開いた状態で Automa ボタンから手動実行すると、プレイリスト内の全動画を Markdown のリスト形式でダウンロードします。

## Sample Files

1. [input1.html](./sample/input1.html) = <https://www.youtube.com/playlist?list=PLp_4KCODScDE_rMZY5TIUXE3yNhVBxk1W>のソース
1. [input2.html](./sample/input2.html)  = <https://www.youtube.com/playlist?list=PLp_4KCODScDEif3jrINQjbYj_6HX-gWos>のソース

## Usage

1. Install the [Automa](https://chromewebstore.google.com/detail/automa/infppggnoaenmfagbfknfkancpbljcca) browser extension.
2. Open the Automa extension and go to **Workflows**.
3. Click **Import** and select `youtube-playlist-to-markdown.json`.
   - If you have a previous version installed, **delete it first** and re-import the new file.
4. Open a YouTube playlist page in your browser (e.g. `https://www.youtube.com/playlist?list=...`).
5. Click the Automa extension icon, find this workflow, and press the **▶** (run) button.
6. Automa downloads `<playlist name>.md` to your browser's default **Downloads** folder.

## Convert a saved HTML sample to Markdown

[extract-playlist-markdown.js](./sample/extract-playlist-markdown.js)のロジックをベースに、Automaを構築。

```bash
cd workflows/youtube-playlist-to-markdown
node sample/extract-playlist-markdown.js sample/input1.html sample/output1.md

cat sample/output1.md
```
