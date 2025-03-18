import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import "../styles/kaitori_common.scss"
import "../styles/kaitori_shops.scss"

const ShopsIndex = ({ pageContext }) => {
  const { shops = [] } = pageContext // gatsby-node.js の createPage(context) から受け取ったデータ
  const [selectedArea, setSelectedArea] = useState(null)
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  // Extract unique areas from shops data
  const areas = [...new Set((shops || []).flatMap(shop => shop.area || []))]

  // Group shops by area
  const shopsByArea = areas.reduce((acc, area) => {
    acc[area] = (shops || []).filter(shop => (shop.area || []).includes(area))
    return acc
  }, {})

  // Set first area as selected on initial load
  useEffect(() => {
    if (areas.length > 0 && !selectedArea) {
      setSelectedArea(areas[0])
    }
  }, [areas, selectedArea])

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen)
  }

  return (
    <>
      <Helmet htmlAttributes={{ lang: "ja" }}>
        <title>店舗 - 買取サロンタイムレス</title>
        <meta
          name="description"
          content="当社、総合買取サロンタイムレス〈TIMELESS〉の店舗一覧をご紹介します。...（省略）"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Layout>
        <div
          className="mv"
          style={{ backgroundImage: "url(/img/mv_shop.png)" }}
        >
          <h1 className="mv_title">店舗一覧</h1>
        </div>
        <div className="section area">
          <div className="container">
            <h2 className="article_title">タイムレス 店舗一覧</h2>

            {/* PC Area Selection */}
            <div className="area_wrap pc">
              <div className="area_select">
                <span className="area_select_inner">地域を選択</span>
              </div>
              <ul className="area_list">
                {areas.map((area, index) => (
                  <li key={index} className="area_item">
                    <a
                      href={`#${area}`}
                      className="area_link"
                      onClick={() => setSelectedArea(area)}
                    >
                      {area}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SP Area Selection */}
            <div className="area_wrap sp">
              <div
                className="area_select js_accordion_trigger"
                onClick={toggleAccordion}
              >
                <span className="area_select_inner">地域を選択</span>
              </div>
              <ul
                className="area_list"
                style={{ display: isAccordionOpen ? "block" : "none" }}
              >
                {areas.map((area, index) => (
                  <li key={index} className="area_item">
                    <a
                      href={`#${area}`}
                      className="area_link"
                      onClick={() => {
                        setSelectedArea(area)
                        setIsAccordionOpen(false)
                      }}
                    >
                      {area}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop Listings by Area */}
            {areas.map((area, areaIndex) => (
              <div key={areaIndex}>
                <div className="shop_title" id={area}>
                  {area}
                </div>
                <div className="shop_wrap">
                  {shopsByArea[area].map((shop, shopIndex) => (
                    <div key={shopIndex} className="shop_list_row">
                      <div className="shop_list_col">
                        <span className="shop_item_img">
                          <Link
                            className="shop_item_img_link"
                            to={`/shops/${shop.slug}`}
                          >
                            {shop.shop_slider && shop.shop_slider.length > 0 ? (
                              <img
                                width="320"
                                height="240"
                                src={shop.shop_slider[0].url}
                                alt={shop.title}
                              />
                            ) : (
                              <img
                                width="320"
                                height="240"
                                src="/img/no_image.png"
                                alt="No Image"
                              />
                            )}
                          </Link>
                        </span>
                      </div>
                      <div className="shop_list_col">
                        <div className="shop_item_info">
                          <span className="shop_item_name">{shop.title}</span>
                          <span className="shopp_item_add">
                            〒{shop.shop_zipcode}
                            <br />
                            {shop.shop_address}
                          </span>
                          <span className="shopp_item_biz_hours">
                            営業時間：{shop.shop_time}
                          </span>
                          <span className="shop_other_time">
                            {shop.shop_access}
                          </span>
                        </div>
                      </div>
                      <div className="shop_list_col">
                        <Link
                          className="shop_item_link"
                          to={`/shops/${shop.slug}`}
                        >
                          詳細はコチラ
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* 選べる買取方法 */}
            <div className="kaitori_methods">
              <h3>選べる買取方法</h3>
              <div className="kaitori_methods_list">
                <div className="kaitori_method_item">
                  <h4>店頭買取</h4>
                  <p>お近くの店舗にお持ちください。査定は無料です。</p>
                  <Link to="/tento/">詳細はこちら</Link>
                </div>
                <div className="kaitori_method_item">
                  <h4>出張買取</h4>
                  <p>ご自宅に査定員がお伺いします。査定は無料です。</p>
                  <Link to="/shuccho/">詳細はこちら</Link>
                </div>
                <div className="kaitori_method_item">
                  <h4>宅配買取</h4>
                  <p>宅配便で送るだけ。査定は無料です。</p>
                  <Link to="/takuhai/">詳細はこちら</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ShopsIndex
