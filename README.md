# Timeless Gatsby

このリポジトリは、買取サロンタイムレス（Kaitori Salon Timeless）のウェブサイト用のGatsbyベースの検証環境です。

## 🚀 プロジェクト概要

このプロジェクトは、Gatsbyを使用して、microCMSからデータを取得し、静的サイトを生成するための検証環境です。主に以下の機能を提供します：

- microCMSからショップデータを取得
- ショップ一覧ページと詳細ページの動的生成
- レスポンシブデザインのサポート
- Netlifyへの自動デプロイ

## 🧐 プロジェクト構成

```
.
├── src/
│   ├── components/     # 再利用可能なコンポーネント
│   │   ├── Header.js   # サイトヘッダー
│   │   ├── Footer.js   # サイトフッター
│   │   └── Layout.js   # レイアウトコンポーネント
│   ├── templates/      # ページテンプレート
│   │   ├── ShopsIndex.js  # ショップ一覧ページ
│   │   └── ShopDetail.js  # ショップ詳細ページ
│   ├── pages/          # 静的ページ
│   │   ├── index.js    # トップページ
│   │   └── 404.js      # 404ページ
│   ├── img/            # 画像ファイル
│   └── styles/         # SCSSスタイルファイル
├── gatsby-config.js    # Gatsbyの設定ファイル
├── gatsby-node.js      # ページ生成ロジック
└── .env               # 環境変数（APIキーなど）
```

## 🔧 開発環境のセットアップ

1. **リポジトリのクローン**

   ```shell
   git clone https://github.com/buysell-technologies/timeless-gatsby.git
   cd timeless-gatsby
   ```

2. **依存関係のインストール**

   ```shell
   npm install
   ```

3. **環境変数の設定**

   `.env`ファイルを作成し、以下の環境変数を設定します：

   ```
   GATSBY_MICROCMS_API_KEY=your_api_key
   GATSBY_MICROCMS_SERVICE_ID=your_service_id
   ```

4. **開発サーバーの起動**

   ```shell
   npm run develop
   ```

   サイトは `http://localhost:8000` で実行されます。

## 🛠️ 主要な機能

### microCMS統合

`gatsby-node.js`ファイルでは、microCMSからショップデータを取得し、動的にページを生成します：

```javascript
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  try {
    const data = await client.get({ endpoint: "shops" })
    
    // ショップ一覧ページの生成
    createPage({
      path: "/shops",
      component: path.resolve("./src/templates/ShopsIndex.js"),
      context: {
        shops: data.contents,
      },
    })
    
    // ショップ詳細ページの生成
    for (const shop of data.contents) {
      // ...
    }
  } catch (error) {
    console.error("Error fetching shops data:", error)
  }
}
```

### テンプレート

- **ShopsIndex.js**: ショップ一覧を表示するテンプレート
- **ShopDetail.js**: 個別のショップ詳細を表示するテンプレート

### PHPからGatsbyへの移行

このプロジェクトは、既存のPHPベースのウェブサイトからGatsbyへの移行検証環境としても機能しています。テンプレートファイル（特にShopsIndex.js）には、まだPHPコードの一部が残っており、これらは段階的にReactコンポーネントに置き換えられる予定です。

## 📦 デプロイ

このプロジェクトはNetlifyに自動デプロイされます。mainブランチへのプッシュ時にGitHub Actionsが実行され、ビルドとデプロイが行われます。

## 🧪 検証環境としての使用方法

このリポジトリは、以下の検証目的で使用できます：

1. **Gatsbyの機能検証**: 新しいGatsbyの機能やプラグインのテスト
2. **microCMS統合のテスト**: コンテンツモデルの変更やAPIの動作確認
3. **パフォーマンス最適化**: ビルド時間やページロード速度の改善
4. **新機能の開発**: 本番環境に影響を与えずに新機能を開発
5. **PHPからReactへの移行**: 既存のPHPコードをReactコンポーネントに段階的に置き換える

## 📝 注意事項

- 環境変数（`.env`）はGitにコミットしないでください
- 本番環境にデプロイする前に、`npm run build`でビルドエラーがないことを確認してください
- コードの変更後は`npm run format`を実行して、コードスタイルを統一してください
