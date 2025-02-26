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

    // Group shops by region
    const shopsByRegion = {}
    data.contents.forEach(shop => {
      // Extract region from address or use a default region if not available
      const region = getRegionFromAddress(shop.shop_address || "")
      if (!shopsByRegion[region]) {
        shopsByRegion[region] = []
      }
      shopsByRegion[region].push(shop)
    })

    // 一覧ページ生成
    createPage({
      path: "/shops",
      component: path.resolve("./src/templates/ShopsIndex.js"),
      context: {
        shops: data.contents,
        shopsByRegion: shopsByRegion,
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

// Helper function to extract region from address
function getRegionFromAddress(address) {
  if (address.includes("北海道")) return "北海道"
  if (
    address.includes("青森") ||
    address.includes("岩手") ||
    address.includes("宮城") ||
    address.includes("秋田") ||
    address.includes("山形") ||
    address.includes("福島")
  )
    return "東北"
  if (
    address.includes("東京") ||
    address.includes("神奈川") ||
    address.includes("埼玉") ||
    address.includes("千葉") ||
    address.includes("茨城") ||
    address.includes("栃木") ||
    address.includes("群馬") ||
    address.includes("山梨")
  )
    return "関東"
  if (
    address.includes("新潟") ||
    address.includes("富山") ||
    address.includes("石川") ||
    address.includes("福井") ||
    address.includes("長野") ||
    address.includes("岐阜") ||
    address.includes("静岡") ||
    address.includes("愛知")
  )
    return "中部"
  if (
    address.includes("三重") ||
    address.includes("滋賀") ||
    address.includes("京都") ||
    address.includes("大阪") ||
    address.includes("兵庫") ||
    address.includes("奈良") ||
    address.includes("和歌山")
  )
    return "近畿"
  if (
    address.includes("鳥取") ||
    address.includes("島根") ||
    address.includes("岡山") ||
    address.includes("広島") ||
    address.includes("山口")
  )
    return "中国"
  if (
    address.includes("徳島") ||
    address.includes("香川") ||
    address.includes("愛媛") ||
    address.includes("高知")
  )
    return "四国"
  if (
    address.includes("福岡") ||
    address.includes("佐賀") ||
    address.includes("長崎") ||
    address.includes("熊本") ||
    address.includes("大分") ||
    address.includes("宮崎") ||
    address.includes("鹿児島") ||
    address.includes("沖縄")
  )
    return "九州"
  return "その他"
}
