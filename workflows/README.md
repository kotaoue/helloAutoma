# ワークフロー一覧

## [Gemini → Journal インポート](gemini-github-import.json)

現在開いている Gemini の会話をスクレイプし、GitHub API 経由で Journal リポジトリにブランチ・ファイル作成・PR オープンまで自動で行います。

### 処理の流れ

1. **トリガー** — 手動実行（Gemini のページを開いた状態で起動）
2. **スクレイプ** — ページタイトルとユーザー／Gemini の発言を取得し、Markdown 形式に整形して変数へ保存
3. **GitHub 連携** — GitHub API でブランチ作成・ファイルコミット・PR オープンを実行

### 事前設定

ワークフローの **globalData** に以下の JSON を入力してください:

```json
{
  "github_token": "ghp_YOUR_PERSONAL_ACCESS_TOKEN",
  "github_owner": "kotaoue",
  "github_repo":  "Journal",
  "base_branch":  "main"
}
```

> **注意:** トークンには `repo` スコープ（contents + pull-requests の読み書き）が必要です。トークンをソースコードにコミットしないでください。

### インポート方法

1. [Automa](https://chromewebstore.google.com/detail/automa/infppggnoaenmfagbfknfkancpbljcca) をインストールする
2. `gemini-github-import.json` の内容をコピーし、Automa の「Import workflow」からインポートする
3. ワークフローの globalData に上記 JSON（`github_token` を実際のトークンに書き換えたもの）を設定する
4. [Gemini](https://gemini.google.com/) でダウンロードしたい会話を開き、ワークフローを手動実行する
