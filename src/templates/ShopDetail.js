import React from "react"
import { Helmet } from "react-helmet"

const ShopDetail = ({ pageContext }) => {
  // createPage の context.shop を受け取る
  const shop = pageContext.shop
  if (!shop) return <p>Loading...</p>

  return (
    <>
      <Helmet htmlAttributes={{ lang: "ja", class: "kaitori" }}>
        <title>{shop.title} - 買取サロンタイムレス</title>
        <meta name="description" content={shop.description} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div>
        <h1>{shop.title}</h1>

        {shop.shop_slider && (
          <div>
            {shop.shop_slider.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt={`${shop.title} - ${index + 1}`}
                style={{ maxWidth: "100%", marginBottom: "1rem" }}
              />
            ))}
          </div>
        )}

        <p>
          <strong>営業時間:</strong> {shop.shop_time}
        </p>
        <p>
          <strong>郵便番号:</strong> 〒{shop.shop_zipcode}
        </p>
        <p>
          <strong>住所:</strong> {shop.shop_address}
        </p>
        <p>
          <strong>アクセス:</strong> {shop.shop_access}
        </p>
        <p>
          <strong>電話番号:</strong> {shop.shop_tel}
        </p>

        {shop.shop_if_gmap && (
          <div
            dangerouslySetInnerHTML={{ __html: shop.shop_if_gmap }}
            style={{ margin: "2rem 0" }}
          />
        )}
        {shop.shop_gmap && (
          <a href={shop.shop_gmap} target="_blank" rel="noopener noreferrer">
            Google Map で開く
          </a>
        )}
        {shop.shop_floor_map && (
          <img
            src={shop.shop_floor_map.url}
            alt={`${shop.title} - 店内マップ`}
            style={{ maxWidth: "100%", margin: "2rem 0" }}
          />
        )}

        <p>
          <strong>ドリンクサービス:</strong>{" "}
          {shop.shop_service ? "あり" : "なし"}
        </p>
        <p>
          <strong>女性査定員:</strong> {shop.shop_woman ? "在籍" : "不在"}
        </p>
        <p>
          <strong>生前整理アドバイザー:</strong>{" "}
          {shop.shop_organizing ? "在籍" : "不在"}
        </p>

        {shop.shop_buyer && (
          <div>
            {shop.shop_buyer.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt={`${shop.title} - ${index + 1}`}
                style={{ maxWidth: "100%", marginBottom: "1rem" }}
              />
            ))}
          </div>
        )}

        <p>
          <strong>クーポン:</strong> {shop.shop_coupon_list}
        </p>
        <p>
          <strong>買取対象品目:</strong> {shop.shop_kaitori_item}
        </p>
        <p>
          <strong>その他買取対象品目:</strong> {shop.shop_kaitori_other}
        </p>
        <p>
          <strong>お取り扱い対象外:</strong> {shop.shop_kaitori_not}
        </p>
      </div>
    </>
  )
}

export default ShopDetail
