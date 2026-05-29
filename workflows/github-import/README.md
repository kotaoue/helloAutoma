# github-import

**File:** [`github-import.json`](github-import.json)

GitHub の**ファイルページ**（URL に `/blob/` を含むページ）で右クリックすると **"Import to Automa"** が表示されます。クリックするとワークフロー JSON の raw ファイルをダウンロードします。

- URL に `/blob/` を含む**ファイルページ**のみ動作します（`/tree/` のフォルダページは不可）。
- 例: `https://github.com/kotaoue/helloAutoma/blob/main/workflows/hello-world/hello-world.json`

## Blocks used

| Block | Description |
| --- | --- |
| **Trigger** (context-menu) | ファイルページで右クリック → "Import to Automa" で起動 |
| **JavaScript Code** | URL に `/blob/` が含まれることを確認し、GitHub の raw ファイルをダウンロード |

## How to use

1. Automa のダッシュボードを開き **Import** ボタン (⭳) で `github-import.json` をインポートする。
2. GitHub でインポートしたいワークフローの**ファイルページ**（URL に `/blob/` を含むページ）を開く。  
   例: `https://github.com/kotaoue/helloAutoma/blob/main/workflows/hello-world/hello-world.json`
3. ページ上で**右クリック** → **"Import to Automa"** を選択する。  
   Automa の項目が表示されない場合は、インポート後に Automa でこの workflow を開いて保存し直し、Chrome の拡張機能設定で Automa の `contextMenus` 権限と GitHub へのサイトアクセスを許可してください。
4. ブラウザのダウンロードフォルダに JSON が保存される。
5. Automa ダッシュボード → ⭳ Import でそのファイルをインポートする。

## Notes

- 右クリックメニューは `page` / `selection` / `link` / `editable` / `image` の対象で表示されるようにしています。
- GitHub の "Download raw file" ボタンが見つからない場合は、現在の `/blob/` URL から `/raw/` URL を作ってダウンロードします。
