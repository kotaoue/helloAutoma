# github-import

**File:** [`github-import.json`](github-import.json)

GitHub の**ファイルページ**（URL に `/blob/` を含むページ）でコードビューア外を右クリックすると **"Import to Automa"** が表示されます。クリックすると **"Download raw file"** ボタンを自動クリックしてワークフロー JSON をダウンロードします。

- URL に `/blob/` を含む**ファイルページ**のみ動作します（`/tree/` のフォルダページは不可）。
- 例: `https://github.com/kotaoue/helloAutoma/blob/main/workflows/hello-world/hello-world.json`

## Blocks used

| Block | Description |
| --- | --- |
| **Trigger** (context-menu) | ファイルページのコードビューア外で右クリック → "Import to Automa" で起動 |
| **JavaScript Code** | URL に `/blob/` が含まれることを確認し、"Download raw file" ボタンをクリック |

## How to use

1. Automa のダッシュボードを開き **Import** ボタン (⭳) で `github-import.json` をインポートする。
2. GitHub でインポートしたいワークフローの**ファイルページ**（URL に `/blob/` を含むページ）を開く。  
   例: `https://github.com/kotaoue/helloAutoma/blob/main/workflows/hello-world/hello-world.json`
3. ページ上の**コードビューア外**（ファイル名のヘッダー行など）で**右クリック** → **"Import to Automa"** を選択する。  
   ⚠️ コードビューアの中で右クリックするとテキスト編集メニューが出て Automa の項目が表示されません。
4. ブラウザのダウンロードフォルダに JSON が保存される。
5. Automa ダッシュボード → ⭳ Import でそのファイルをインポートする。

## Notes

- "Download raw file" ボタンが見つからない場合はページをリロードしてから再実行してください。
