import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import "../styles/shops.scss"

const ShopsIndex = ({ pageContext }) => {
  const { shops, shopsByRegion } = pageContext

  // Add a default "すべて" (All) region that includes all shops
  const allShopsByRegion = {
    すべて: shops || [],
    ...(shopsByRegion || {}),
  }

  const regions = Object.keys(allShopsByRegion).sort()
  const [activeRegion, setActiveRegion] = useState("すべて")
  const [displayedShops, setDisplayedShops] = useState([])

  // Update displayed shops when active region changes
  useEffect(() => {
    if (activeRegion && allShopsByRegion[activeRegion]) {
      setDisplayedShops(allShopsByRegion[activeRegion])
    }
  }, [activeRegion, allShopsByRegion])

  // Handle region tab click
  const handleRegionClick = region => {
    setActiveRegion(region)
  }

  return (
    <>
      <Helmet htmlAttributes={{ lang: "ja" }}>
        <title>店舗一覧 - 買取サロンタイムレス</title>
        <meta
          name="description"
          content="当社、総合買取サロンタイムレス〈TIMELESS〉の店舗一覧をご紹介します。全国の店舗で貴金属、ブランド品、時計、金券など幅広いアイテムを高価買取しております。"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Layout>
        <div className="shops-container">
          <h1 className="shops-title">店舗一覧</h1>

          {/* Region tabs */}
          {regions.length > 0 && (
            <div className="region-tabs">
              {regions.map(region => (
                <button
                  key={region}
                  className={`region-tab ${
                    activeRegion === region ? "active" : ""
                  }`}
                  onClick={() => handleRegionClick(region)}
                  aria-pressed={activeRegion === region}
                >
                  {region}
                </button>
              ))}
            </div>
          )}

          {/* Shop listings by region */}
          {displayedShops && displayedShops.length > 0 ? (
            <div className="region-section">
              <h2 className="region-title">{activeRegion}</h2>
              <div className="shop-list">
                {displayedShops.map(shop => (
                  <div key={shop.slug} className="shop-card">
                    <div className="shop-image">
                      {shop.shop_slider && shop.shop_slider.length > 0 ? (
                        <img src={shop.shop_slider[0].url} alt={shop.title} />
                      ) : (
                        <div className="no-image">No Image</div>
                      )}
                    </div>
                    <div className="shop-info">
                      <h3 className="shop-name">{shop.title}</h3>
                      {shop.shop_zipcode && (
                        <p className="shop-address">
                          〒{shop.shop_zipcode} {shop.shop_address}
                        </p>
                      )}
                      {shop.shop_time && (
                        <p className="shop-hours">
                          <strong>営業時間:</strong> {shop.shop_time}
                        </p>
                      )}
                      <Link
                        to={`/shops/${shop.slug}`}
                        className="shop-details-link"
                      >
                        詳細はコチラ
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="no-shops">
              <p>この地域に店舗はありません。</p>
            </div>
          )}

          {/* Add a note about shop locations */}
          <div className="shop-note">
            <p>※店舗は随時増設中です。最新情報はこちらでご確認ください。</p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ShopsIndex
