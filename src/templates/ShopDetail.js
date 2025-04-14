import React, { useRef, useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import "../styles/kaitori_common.scss"
import "../styles/kaitori_lp.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "gatsby"

const ShopDetail = ({ pageContext }) => {
  const shop = pageContext.shop

  // Hooks はコンポーネントのトップレベルで呼び出す
  const mainSliderRef = useRef(null);
  const thumbSliderRef = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(mainSliderRef.current);
    setNav2(thumbSliderRef.current);
  }, []);

  if (!shop) return <p>Loading...</p>;

  const mainSliderSettings = {
    infinite: true,
    fade: true,
    arrows: true,
    prevArrow: <div className="slick-prev"></div>,
    nextArrow: <div className="slick-next"></div>,
    asNavFor: nav2,
  };

  const thumbSliderSettings = {
    infinite: false,
    slidesToShow: 4,
    focusOnSelect: true,
    asNavFor: nav1,
    arrows: false,
  };

  return (
    <>
      <Helmet htmlAttributes={{ lang: "ja", class: "kaitori" }}>
        <title>{shop.title} - 買取サロンタイムレス</title>
        <meta name="description" content={shop.description} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Layout>
        <div className="breadcrumbs">
          <span>
            <Link to="/">総合買取サロン タイムレス</Link>
          </span>{" "}
          ／{" "}
          <span>
            <Link to="/shops/">店舗一覧</Link>
          </span>{" "}
          ／{" "}
          <span className="breadcrumb_last" aria-current="page">
            {shop.title}
          </span>
        </div>
        <div className="container">
          <h1 className="article_title">{shop.title}</h1>
          {shop.shop_event && (
            <div className="shop_single_shop_event">
              {shop.shop_event}
            </div>
          )}

          {shop.shop_slider && (
            <div className="shop_box">
              <Slider {...mainSliderSettings} ref={mainSliderRef} className="shop_box_mv js_shop_slider">
                {shop.shop_slider.map((img, index) => (
                  <div key={index}>
                    <img
                      className="shop_box_mv_img"
                      src={img.url}
                      alt={`${shop.title} - ${index + 1}`}
                      width="1000"
                      height="618"
                    />
                  </div>
                ))}
              </Slider>
              <Slider {...thumbSliderSettings} ref={thumbSliderRef} className="thumb_shop">
                {shop.shop_slider.map((img, index) => (
                  <div key={index}>
                    <img
                      className="thumb_shop_img"
                      src={img.url}
                      alt={`${shop.title} - ${index + 1}`}
                      width="224"
                      height="138"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          )}

          <div className="shop_single">
            <div className="shop_single_text">
              <h3 className="shop_single_ttl" id="shop_info">店舗情報</h3>
              <dl className="shop_single_info_item">
                <dt className="shop_single_info_item_title">営業時間</dt>
                <dd className="shop_single_info_item_data">{shop.shop_time}</dd>
                {shop.other_time && (
                  <dd className="shop_single_info_item_data">{shop.other_time}</dd>
                )}
              </dl>
              <dl className="shop_single_info_item">
                <dt className="shop_single_info_item_title">住所</dt>
                <dd className="shop_single_info_item_data">
                  〒{shop.shop_zipcode}<br />
                  {shop.shop_address}<br />
                </dd>
              </dl>
              <dl className="shop_single_info_item">
                <dt className="shop_single_info_item_title">電話番号</dt>
                <dd className="shop_single_info_item_data">
                  {shop.tel_switching ? (
                    shop.shop_tel
                  ) : (
                    <a href="tel:0120972798" className="tel_link">0120-972-798</a>
                  )}
                  {!shop.tel_switching && (
                    <p className="shop_annotation">※全国共通コールセンター：10時～19時</p>
                  )}
                </dd>
              </dl>
              {shop.shop_service && (
                <dl className="shop_single_info_item">
                  <dt className="shop_single_info_item_title">ドリンクサービス</dt>
                  <dd className="shop_single_info_item_data">{shop.shop_service}</dd>
                </dl>
              )}
              {shop.shop_woman && (
                <dl className="shop_single_info_item">
                  <dt className="shop_single_info_item_title">女性査定員</dt>
                  <dd className="shop_single_info_item_data">{shop.shop_woman}</dd>
                </dl>
              )}
              <dl className="shop_single_info_item">
                <dt className="shop_single_info_item_title">アクセス</dt>
                <dd className="shop_single_info_item_data">
                  {shop.shop_access}
                  <a className="btn" href={shop.shop_gmap} target="_blank" rel="noopener">
                    <span className="btn_text">GoogleMapで見る</span>
                  </a>
                </dd>
              </dl>
            </div>
            <div className="shop_single_map">
              <div dangerouslySetInnerHTML={{ __html: shop.shop_if_gmap }} />
              <div className="f-map">
                <img src={shop.shop_floor_map.url} alt="フロアマップ" style={{ maxWidth: "100%" }} />
              </div>
            </div>
          </div>

          <div className="appeal_banner">
            <a className="banner_link" href="/items/gold/">
              <img className="img_responsive" src="/img/lp/gold_banner.jpg" alt="金価格高騰中 貴金属を売るなら今！" width="1400" height="304" />
            </a>
          </div>

          {shop.shop_buyers && (
            <div className="section_box">
              <p className="title_copy">バイヤー紹介</p>
              {shop.shop_buyers.map((buyer, index) => (
                <div className="buyer" key={index}>
                  <div className="buyer_m">
                    <div className="buyer_img">
                      <img
                        className="img_responsive"
                        src={buyer.buyer_photo.url}
                        alt="バイヤー"
                        width="180"
                        height="180"
                      />
                    </div>
                    <div className="buyer_text">
                      <p className="buyer_name">バイヤー {buyer.buyer_name}</p>
                      {buyer.buyer_introduction}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="section_box shop_coupon">
            <div className="text_center">
              <p className="title_copy quote">ご来店時にクーポン画面をご提示ください</p>
            </div>
            {shop.shop_coupon_list && shop.shop_coupon_list.map((coupon, index) => (
              <p key={index}>{coupon}</p>
            ))}
          </div>

          <div className="box_item_ttl">お買い取りの流れ</div>
          <div className="kaitori_flow">
            <div className="kaitori_flow_img">
              <img className="img_responsive" src="/img/lp/kaitori-flow.jpg" alt="お買い取りの流れ" width="570" height="352" />
            </div>
            <div className="kaitori_flow_text">
              <p className="kaitori_flow_step">❶ 事前のご予約は不要です。</p>
              <p className="kaitori_flow_step">❷ <span className="attention">{shop.shop_flow}</span>の店舗受付までお越しください。</p>
              <p className="kaitori_flow_step">❸ 空いていましたらすぐにご案内します。込み合っている場合は受付後、百貨店内を楽しみながらお待ちください。</p>
              <p className="kaitori_flow_step">❹ 担当バイヤーが査定を承り、買取価格をご提示いたします。</p>
              <ul className="notes">
                <li className="notes_li">※買取成立の場合は身分証を頂きます。</li>
                <li className="notes_li">※売却キャンセルも可能です。キャンセル代は無料です。</li>
                <li className="notes_li">※電話による事前のご予約でスムーズにご案内することも可能です。</li>
              </ul>
            </div>
          </div>

          <div className="box_item">
            <div className="box_item_ttl-mibun">※重要　買取の際にはご本人確認書類が必要となります。</div>
            <div className="box_item_flex">
              <div className="box_item_flex_img">
                <img src="/img/lp/honninkakunin.png" width="544" height="128" alt="本人確認書類" className="img_responsive" />
              </div>
              <ul className="box_item_flex_ul">
                <li className="box_item_li">●運転免許証</li>
                <li className="box_item_li">●住民基本台帳カード</li>
                <li className="box_item_li">●運転経歴証明書</li>
                <li className="box_item_li">●個人番号カード</li>
                <li className="box_item_li">●健康保険証　　など</li>
              </ul>
            </div>
          </div>

          {shop.shop_kaitori_item && (
            <div>
              <div className="box_item_ttl">買取対象品目</div>
              <ul className="item_list-lp">
                {shop.shop_kaitori_item.map((item, index) => {
                  let className = "";
                  switch (item) {
                    case "バッグ・小物":
                      className = "brand";
                      break;
                    case "時計":
                      className = "watch";
                      break;
                    case "貴金属":
                      className = "jewelry";
                      break;
                    case "ジュエリー・アクセサリー":
                      className = "brandjewelry";
                      break;
                    case "切手・テレホンカード":
                      className = "stamp";
                      break;
                    case "その他":
                      className = "other";
                      break;
                    default:
                      className = "other";
                  }
                  return (
                    <li className={`item_list_item item_${className}`} key={index}>{item}</li>
                  );
                })}
              </ul>
              <div className="item_copy">
                <span className="item_copy_text">
                  {shop.shop_kaitori_other}
                  <br />
                  ※また、未成年者からの買取はできません。酒類の買取に関しては20歳以上のお客様のみ対象となります。
                </span>
              </div>
              <div className="not_copy">
                <span className="not_copy_text">
                  {shop.shop_kaitori_not}
                </span>
              </div>
              <p className="title_copy">古くても、傷んでいてもOKです。<br className="sp" />ぜひご相談ください。</p>
              <ul class="ok_item_list">
                <li class="ok_list_item"><p class="item_ttl">壊れた時計</p><img src="/img/lp/ok-item-1.jpg" alt="壊れた時計" width="230" height="179" /></li>
                <li class="ok_list_item"><p class="item_ttl">状態の悪いバッグ</p><img src="/img/lp/ok-item-2.jpg" alt="状態の悪いバッグ&lt;" width="230" height="179" /></li>
                <li class="ok_list_item"><p class="item_ttl">切れたネックレス</p><img src="/img/lp/ok-item-3.jpg" alt="切れたネックレス" width="230" height="179" /></li>
                <li class="ok_list_item"><p class="item_ttl">片方のピアス</p><img src="/img/lp/ok-item-4.jpg" alt="片方のピアス" width="230" height="179" /></li>
                <li class="ok_list_item"><p class="item_ttl">金歯</p><img src="/img/lp/ok-item-5.jpg" alt="金歯" width="230" height="179" /></li>
              </ul>
            </div>
          )}

          <div className="event_freespace" id="event_freespace">
            {shop.content}
          </div>
          <div className="guide_btn">
            <a className="contact_item_btn" href="/shop/">店舗一覧はこちら</a>
          </div>
        </div>
        <div className="breadcrumbs">
          <span>
            <Link to="/">総合買取サロン タイムレス</Link>
          </span>{" "}
          ／{" "}
          <span>
            <Link to="/shops/">店舗一覧</Link>
          </span>{" "}
          ／{" "}
          <span className="breadcrumb_last" aria-current="page">
            {shop.title}
          </span>
        </div>
      </Layout>
    </>
  )
}

export default ShopDetail