# github-import

**File:** [`github-import.json`](github-import.json)

GitHubのファイルページで右クリックすると **"Import to Automa"** が表示され、クリックすると GitHub の **"Download raw file"** ボタンを自動クリックしてワークフロー JSON をダウンロードします。

## Blocks used

| Block | Description |
| --- | --- |
| **Trigger** (context-menu) | 任意のページで右クリック → "Import to Automa" で起動 |
| **JavaScript Code** | GitHubのblob URLであることを確認し、"Download raw file" ボタンをクリック |

## How to use

1. [Automa](https://chromewebstore.google.com/detail/automa/infppggnoaenmfagbfknfkancpbljcca) をインストールする。
2. Automa のダッシュボードを開き **Import** ボタン (⭳) で `github-import.json` をインポートする。
3. GitHub でインポートしたいワークフローの JSON ファイルページを開く。  
   例: `https://github.com/kotaoue/helloAutoma/blob/<branch>/workflows/<name>.json`
4. ページ上で**右クリック** → **"Import to Automa"** を選択する。
5. ブラウザのダウンロードフォルダに JSON が保存される。
6. Automa ダッシュボード → ⭳ Import でそのファイルをインポートする。

## Notes

- GitHub のファイルページ (URL に `/blob/` を含む) 以外では動作せずアラートが表示されます。
- "Download raw file" ボタンが見つからない場合はページをリロードしてから再実行してください。
