const path = require("path")
require("dotenv").config({
  path: ".env",
})
const { createClient } = require("microcms-js-sdk")

const client = createClient({
  serviceDomain: process.env.GATSBY_MICROCMS_SERVICE_ID,
  apiKey: process.env.GATSBY_MICROCMS_API_KEY,
})

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  try {
    const data = await client.get({ endpoint: "shops" })

    // 一覧ページ生成
    createPage({
      path: "/shops",
      component: path.resolve("./src/templates/ShopsIndex.js"),
      context: {
        shops: data.contents,
      },
    })

    // 詳細ページ用に、一つずつ details を取得する
    for (const shop of data.contents) {
      // 個別のコンテンツを取得 (imagesなど詳しいデータも含む)
      const ShopDetail = await client.get({
        endpoint: "shops",
        contentId: shop.id,
      })

      createPage({
        path: `/shops/${shop.slug}`,
        component: path.resolve("./src/templates/ShopDetail.js"),
        context: {
          shop: ShopDetail, // テンプレートにまるごと渡す
        },
      })
    }
  } catch (error) {
    console.error("Error fetching shops data:", error)
  }
}