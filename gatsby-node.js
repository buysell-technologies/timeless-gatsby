require('dotenv').config({
  path: '.env',
});
const { createClient } = require('microcms-js-sdk');

const client = createClient({
  serviceDomain: process.env.GATSBY_MICROCMS_SERVICE_ID,
  apiKey: process.env.GATSBY_MICROCMS_API_KEY,
});

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  try {
    const data = await client.get({ endpoint: 'shops' });

    // 一覧ページ生成
    createPage({
      path: '/shops',
      component: require.resolve('./src/templates/shopsIndex.js'),
      context: {
        shops: data.contents,
      },
    });

    // 詳細ページ用に、一つずつ details を取得する
    for (const shop of data.contents) {
      // 個別のコンテンツを取得 (imagesなど詳しいデータも含む)
      const shopDetail = await client.get({
        endpoint: 'shops',
        contentId: shop.id,
      });

      createPage({
        path: `/shops/${shop.slug}`,
        component: require.resolve('./src/templates/shopDetail.js'),
        context: {
          shop: shopDetail, // テンプレートにまるごと渡す
        },
      });
    }
  } catch (error) {
    console.error('Error fetching shops data:', error);
  }
};
