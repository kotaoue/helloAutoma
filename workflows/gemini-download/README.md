# gemini-download

現在開いているGeminiの会話をスクレイプし、Markdownファイルとしてローカルに保存するワークフローです。

## Workflows

| File | Description |
|---|---|
| [`gemini-download.json`](gemini-download.json) | 会話をスクレイプしてMarkdownとしてダウンロード |
| [`gemini-debug.json`](gemini-debug.json) | Automa実行環境の診断用（動作確認に使用） |

---

## gemini-download

**Blocks:** Trigger → Active Tab → Scrape → Download

### How to use

1. [Automa](https://chromewebstore.google.com/detail/automa/infppggnoaenmfagbfknfkancpbljcca) をインストールする。
2. Automa ダッシュボード → **Import** (⭳) で `gemini-download.json` をインポートする。
3. Gemini で会話ページを開く（URLが `https://gemini.google.com/app/XXXXXXXXX` の形式）。
4. Automa 拡張ポップアップから **"Gemini → Markdown Download"** を手動実行する。
5. ブラウザのダウンロードフォルダに `<会話タイトル>.md` が保存される。

### Notes

- ホームページ（`/app` のみ）では会話が存在しないため、プレースホルダーコメントのみのファイルが生成されます。
- Active Tab ブロックが必要です。手動トリガーではタブが自動登録されないため、省略するとJSブロックが `no-tab` エラーで停止します。
- DOM セレクターは3段階のフォールバック付き: カスタム要素 → `data-message-author-role` → クラス名。

---

## gemini-debug

**Blocks:** Trigger → Active Tab → JS

動作確認用の最小ワークフロー。実行すると `alert()` でAutoma実行環境の状態を表示します。

### How to use

1. `gemini-debug.json` をインポートする。
2. 任意のタブで **"Gemini Download — Debug"** を手動実行する。
3. alert に表示された内容を確認する。

### How to read the result

| alert shows … | Meaning |
|---|---|
| `automaNextBlock: true` | 正常動作 — メインワークフローを再インポートして再試行 |
| `automaNextBlock: false` | Automaヘルパーが注入されていない — 拡張機能の再インストールを試みる |
| Alert が表示されない | JSが実行されていない — ページへのAutoma権限を確認する |
