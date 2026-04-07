# AGENTS.md

このリポジトリは [Automa](https://chromewebstore.google.com/detail/automa/infppggnoaenmfagbfknfkancpbljcca) のワークフロー集です。  
AI コーディングエージェントがこのリポジトリで作業する際のガイドラインを以下にまとめます。

---

## Automa とは

Automa はブラウザ上の繰り返し作業を自動化するノーコード拡張機能です。  
クリック・フォーム入力・データ抽出・スケジュール実行などを「ブロック」を繋ぎ合わせて実現します。  
ワークフローは JSON ファイルとして保存・エクスポート・インポートできます。

- 公式サイト: <https://www.automa.site>
- ドキュメント: <https://docs.extension.automa.site>
- Chrome Web Store: <https://chromewebstore.google.com/detail/automa/infppggnoaenmfagbfknfkancpbljcca>

---

## リポジトリ構成

```
workflows/          # Automa ワークフロー JSON ファイルの置き場所
  README.md         # 各ワークフローの説明一覧
  <name>/
    <name>.json     # ワークフロー本体
README.md           # リポジトリ概要
AGENTS.md           # このファイル（AI エージェント向けガイド）
cspell.json         # スペルチェック設定
```

---

## ワークフロー JSON の追加・編集ルール

1. `workflows/<ワークフロー名>/` ディレクトリを作成し、その中に JSON ファイルを置く。
2. ファイル名はディレクトリ名と揃える（例: `workflows/my-workflow/my-workflow.json`）。
3. JSON の内容は Automa 拡張機能からエクスポートしたものをそのまま使用する。
4. ワークフローを追加・更新したら `workflows/README.md` にも説明を追記する。

---

## Automa Chrome Extension Builder（CEB）の使い方

Automa CEB を使うと、ワークフローを**スタンドアロンの Chrome 拡張機能**としてパッケージ化し、  
他のユーザーへ配布したり Chrome Web Store へ公開したりできます。

> **Note**  
> Automa CEB は現在 **Beta** です。バグや不足機能は [Automa Discord](https://discord.gg/C6khwwTE84) へ報告してください。

### 1. 拡張機能の新規作成

1. [automa.site](https://www.automa.site) の **"My extension"** ボタンをクリックして [拡張機能一覧ページ](https://extension.automa.site/extensions) を開く。
2. **"New extension"** ボタンをクリックし、拡張機能の名前と説明を入力する。

### 2. ダッシュボードの構成

拡張機能を選択するとダッシュボードが開く。主なセクションは以下の 5 つ。

| セクション | 説明 |
|---|---|
| **Workflows** | ワークフローの追加・更新・削除 |
| **Details** | 名前・説明・アイコンの編集 |
| **Customize** | UI のカスタマイズ・カスタムスクリプトの注入 |
| **Crash Logs** | ワークフロー実行時のエラーログ確認 |
| **Analytics** | インストール数・アクティブユーザー・実行回数の確認 |

ヘッダーでは以下の操作ができる。

- ドラフトバージョンの切り替え
- 拡張機能ファイルの生成
- 変更の保存
- 拡張機能の公開（Publish）

### 3. ワークフローの追加

1. ダッシュボードの **Workflows** タブを開き **"+ Workflow"** をクリック。
2. 追加方法を選択する。
   - **From JSON file** — Automa 拡張機能からエクスポートした JSON ファイルを選択する。
   - **From Automa extension** — Automa v1.24.0 以降がインストールされている場合、直接インポートできる。

#### ワークフローの更新・削除

- **更新**: ワークフロー横の更新アイコンをクリックし、新しい JSON またはインポート元を選択する。  
  追加・更新・削除した内容は、インストール済みのすべてのユーザーに自動で反映される。
- **削除**: 削除ボタンをクリック。複数選択してまとめて削除することも可能。
- **Invisible**: チェックを入れると、ユーザーはそのワークフローを手動実行できなくなる。

### 4. 拡張機能のパッケージ化と公開

1. ダッシュボードの **"Publish"** ボタンをクリックして拡張機能を公開する。
2. 公開後、**Details** タブのバージョン履歴セクションに表示されるダウンロードボタンから ZIP ファイルを取得する。

### 5. 拡張機能のインストール

ダウンロードした ZIP ファイルを Chromium 系ブラウザ（Chrome・Edge・Brave など）にインストールする手順。

1. `chrome://extensions` を開く。
2. 右上の **"Developer mode"** スイッチを有効にする（Google Chrome の場合）。
3. ZIP ファイルをそのページにドラッグ＆ドロップする。

---

## AI エージェントへの注意事項

- ワークフロー JSON は **Automa 独自のスキーマ**を持つ。スキーマを勝手に変更しないこと。
- JSON の内容を変更する場合は、実際に Automa 拡張機能でインポートして動作確認を行うこと。
- 新しいワークフローを追加する場合は必ず `workflows/README.md` に説明を追記すること。
- このリポジトリにはビルドスクリプトやテストスイートは存在しない。コード品質の確認は `cspell.json` によるスペルチェックのみ行う（`npx cspell "**"`）。
