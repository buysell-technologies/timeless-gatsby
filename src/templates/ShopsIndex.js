import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
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
      <Helmet htmlAttributes={{ lang: "ja", class: "kaitori" }}>
        <title>店舗 - 買取サロンタイムレス</title>
        <meta
          name="description"
          content="当社、総合買取サロンタイムレス〈TIMELESS〉の店舗一覧をご紹介します。...（省略）"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Layout>
        <div class="breadcrumbs"><span><span><a href="https://timeless-kaitori.com/">総合買取サロン タイムレス</a></span> ／ <span class="breadcrumb_last" aria-current="page">店舗</span></span></div>
        <div
          className="mv"
          style={{ backgroundImage: "url(/img/mv_shop.webp)" }}
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
            <section class="service section">
              <div class="container_kaitori">
                <h2 class="section_title service_title">選べる買取方法</h2>
                <p class="service_desc">タイムレスでは、お客様のご都合に合わせた様々な査定・買取方法をお選びいただけます。</p>
                <div class="service_list">
                  <div class="service_list_item">
                    <a class="service_item_link" href="<?php echo home_url(); ?>/tento/">
                      <div class="service_item_image">
                        <StaticImage
                          src="../img/service_01.jpg"
                          formats={["auto", "webp", "avif"]}
                          loading="lazy"
                          width="740"
                          height="540"
                          class="img_responsive"
                        />
                      </div>
                      <div class="service_item_body">
                        <h3 class="service_item_title">店舗買取</h3>
                        <div class="service_item_text">
                          タイムレス各店にて買取を承ります。<br />
                          明るく、落ち着きのある空間をご用意し、初めての方でも安心してご利用頂けます。<br />
                          <div class="more">詳しくはコチラ</div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div class="service_list_item">
                    <a class="service_item_link" href="/shuccho/">
                      <div class="service_item_image">
                        <StaticImage
                          src="../img/service_02.jpg"
                          formats={["auto", "webp", "avif"]}
                          loading="lazy"
                          width="740"
                          height="540"
                          className="img_responsive"
                        />
                      </div>
                      <div class="service_item_body">
                        <h3 class="service_item_title">出張買取</h3>
                        <div class="service_item_text">
                          お客様のご自宅にて買取を承ります。<br />
                          お約束の日時にタイムレスのバイヤーがお客様のご自宅にお伺いいたします。<br />
                          <div class="more">詳しくはコチラ</div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div class="service_list_item">
                    <a class="service_item_link" href="<?php echo home_url(); ?>/takuhai/">
                      <div class="service_item_image">
                        <StaticImage
                          src="../img/service_03.jpg"
                          formats={["auto", "webp", "avif"]}
                          loading="lazy"
                          width="740"
                          height="540"
                          class="img_responsive"
                        />
                      </div>
                      <div class="service_item_body">
                        <h3 class="service_item_title">宅配買取</h3>
                        <div class="service_item_text">
                          ご自宅からお品物を送って買取が可能。<br />
                          ご自宅にいながらラクラク買取サービスをご利用ください。<br />
                          <div class="more">詳しくはコチラ</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </Layout>
    </>
  )
}

export default ShopsIndex
