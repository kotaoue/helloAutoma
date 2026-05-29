# github-download

**File:** [`github-download.json`](github-download.json)

GitHub の**ファイルページ**（URL に `/blob/` を含むページ）で右クリックすると **"Download JSON for Automa"** が表示されます。クリックすると、そのページのワークフロー JSON をダウンロードします。

この workflow は**ダウンロード専用**です。Automa へ直接登録する処理は行いません。ダウンロードした JSON は、必要に応じて Automa ダッシュボードから手動で追加してください。

- URL に `/blob/` を含む**ファイルページ**のみ動作します（`/tree/` のフォルダページは不可）。
- 例: `https://github.com/kotaoue/helloAutoma/blob/main/workflows/hello-world/hello-world.json`

## Blocks used

| Block | Description |
| --- | --- |
| **Trigger** (context-menu) | ファイルページで右クリック → "Download JSON for Automa" で起動 |
| **JavaScript Code** | URL に `/blob/` が含まれることを確認し、GitHub の raw JSON をダウンロード |

## How to use

1. Automa のダッシュボードを開き **Import** ボタン (⭳) で `github-download.json` を追加する。
2. GitHub でダウンロードしたいワークフロー JSON の**ファイルページ**（URL に `/blob/` を含むページ）を開く。  
   例: `https://github.com/kotaoue/helloAutoma/blob/main/workflows/hello-world/hello-world.json`
3. ページ上で**右クリック** → **"Download JSON for Automa"** を選択する。  
   Automa の項目が表示されない場合は、インポート後に Automa でこの workflow を開いて保存し直し、Chrome の拡張機能設定で Automa の `contextMenus` 権限と GitHub へのサイトアクセスを許可してください。
4. ブラウザのダウンロードフォルダに JSON が保存される。
5. Automa に追加したい場合は、Automa ダッシュボード → ⭳ Import でダウンロードした JSON を選択する。

## Notes

- 右クリックメニューは `page` / `selection` / `link` / `editable` / `image` の対象で表示されるようにしています。
- GitHub の "Download raw file" ボタンが見つからない場合は、現在の `/blob/` URL から `/raw/` URL を作ってダウンロードします。
- この workflow 自体は、Automa への直接登録ではなく JSON のダウンロードだけを担当します。
