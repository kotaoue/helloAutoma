# github-import

**File:** [`github-import.json`](github-import.json)

GitHub で**ファイルを表示しているページ**（URL に `/blob/` を含むページ）で右クリックすると **"Import to Automa"** が表示され、クリックすると GitHub の **"Download raw file"** ボタンを自動クリックしてワークフロー JSON をダウンロードします。

## GitHub「ファイルページ」とは

GitHub には大きく 2 種類のページがあります。

| 種類 | URL の形式 | 動作 |
| --- | --- | --- |
| **ファイルページ** ✅ | `github.com/.../blob/<branch>/path/to/file.json` | ファイルの中身を表示する画面。このワークフローが動作します |
| フォルダページ ❌ | `github.com/.../tree/<branch>/path/to/folder` | フォルダの一覧を表示する画面。動作しません |

**具体例（ファイルページ）:**

```
https://github.com/kotaoue/helloAutoma/blob/main/workflows/hello-world/hello-world.json
```

上の URL をブラウザで開くと、JSON ファイルの中身がハイライトされて表示されます。その状態で右クリック → "Import to Automa" を実行してください。

## Blocks used

| Block | Description |
| --- | --- |
| **Trigger** (context-menu) | ファイルページで右クリック → "Import to Automa" で起動 |
| **JavaScript Code** | URL に `/blob/` が含まれることを確認し、"Download raw file" ボタンをクリック |

## How to use

1. [Automa](https://chromewebstore.google.com/detail/automa/infppggnoaenmfagbfknfkancpbljcca) をインストールする。
2. Automa のダッシュボードを開き **Import** ボタン (⭳) で `github-import.json` をインポートする。
3. GitHub でインポートしたいワークフローの **ファイルページ**（URL に `/blob/` を含むページ）を開く。  
   例: `https://github.com/kotaoue/helloAutoma/blob/main/workflows/hello-world/hello-world.json`
4. ページ上で**右クリック** → **"Import to Automa"** を選択する。
5. ブラウザのダウンロードフォルダに JSON が保存される。
6. Automa ダッシュボード → ⭳ Import でそのファイルをインポートする。

## Notes

- `/tree/` のフォルダページでは動作しません。必ず `/blob/` のファイルページで実行してください。
- "Download raw file" ボタンが見つからない場合はページをリロードしてから再実行してください。
