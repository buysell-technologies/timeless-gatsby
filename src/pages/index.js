import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/express_common.scss"

const IndexPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://timeless-express.com/",
        url: "https://timeless-express.com/",
        name: "タイムレスエクスプレス - 【タイムレス】の査定システムが 買取事業への参入障壁を解決します",
        isPartOf: { "@id": "https://timeless-express.com/#website" },
        description:
          "【タイムレス】の査定システムが 買取事業への参入障壁を解決します",
        breadcrumb: { "@id": "https://timeless-express.com/#breadcrumb" },
        inLanguage: "ja",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://timeless-express.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "ホーム",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://timeless-express.com/#website",
        url: "https://timeless-express.com/",
        name: "タイムレスエクスプレス",
        description:
          "【タイムレス】の査定システムが 買取事業への参入障壁を解決します",
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://timeless-express.com/?s={search_term_string}",
            },
            "query-input": {
              "@type": "PropertyValueSpecification",
              valueRequired: true,
              valueName: "search_term_string",
            },
          },
        ],
        inLanguage: "ja",
      },
    ],
  }

  useEffect(() => {
    const fadeElements = document.querySelectorAll(".js_fadeup_trigger")

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeup")
        } else {
          entry.target.classList.remove("fadeup")
        }
      })
    }, observerOptions)

    fadeElements.forEach(element => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <>
      <Helmet htmlAttributes={{ lang: "ja", class: "express" }}>
        <title>
          タイムレスエクスプレス - 【タイムレス】の査定システムが
          買取事業への参入障壁を解決します
        </title>
        <meta
          name="description"
          content="【タイムレス】の査定システムが 買取事業への参入障壁を解決します"
        />
        <meta name="robots" content="noindex, nofollow" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* ヘッダー */}
      <div className="header">
        <div className="mv_top">
          <div className="pc">
            <StaticImage
              src="../img/top_img_pc.jpg"
              loading="eager"
              formats={["auto", "webp", "avif"]}
              alt="タイムレスが商品の買取価格を一瞬で算出オンライン環境があれば初期投資は不要さぁ、ブランド買取を始めてみよう"
              className="img_responsive"
            />
          </div>
          <div className="sp">
            <StaticImage
              src="../img/top_img_sp.jpg"
              loading="eager"
              formats={["auto", "webp", "avif"]}
              alt="タイムレスが商品の買取価格を一瞬で算出オンライン環境があれば初期投資は不要さぁ、ブランド買取を始めてみよう"
              className="img_responsive"
            />
          </div>
        </div>
      </div>

      <main className="main">
        {/* INTROセクション */}
        <section className="intro section">
          <h2 className="section_title">
            買取事業を
            <br />
            誰でも簡単導入
          </h2>
          <div className="intro_text">
            <span>ブランドバッグ、時計、宝石のプロフェッショナル</span>
            <span>【タイムレス】の査定システムが</span>
            <span>買取事業への参入障壁を解決します。</span>
          </div>
        </section>

        {/* ベネフィットセクション */}
        <section className="benefit section js_fadeup_trigger">
          <h2 className="section_title">
            大がかりな設備投資は不要！
            <br />
            ブランド買取ビジネスをすぐにスタートできます
          </h2>
          <div className="benefit_list container">
            <div className="benefit_list_item">
              <h3 className="benefit_item_title">
                初期投資不要！<sup className="sup">※1</sup>
              </h3>
              <StaticImage
                src="../img/icon_benefit01.svg"
                loading="lazy"
                alt="初期投資不要"
                className="img_icon"
              />
              <div className="benefit_item_text">
                既存のスペース、
                <br />
                人材でサービス開始可能です。
              </div>
            </div>
            <div className="benefit_list_item">
              <h3 className="benefit_item_title">
                仕入保証！<sup className="sup">※2</sup>
              </h3>
              <StaticImage
                src="../img/icon_benefit02.svg"
                loading="lazy"
                alt="仕入保証"
                className="img_icon"
              />
              <div className="benefit_item_text">
                買い取った商品は
                <br />
                タイムレスが仕入れます。
                <br />
                商品到着後すぐに代金を支払います。
              </div>
            </div>
            <div className="benefit_list_item">
              <h3 className="benefit_item_title">
                買取価格保障<sup className="sup">※3</sup>
              </h3>
              <StaticImage
                src="../img/icon_benefit03.svg"
                loading="lazy"
                alt="買取価格保障"
                className="img_icon"
              />
              <div className="benefit_item_text">
                タイムレスは提示した価格を
                <br />
                きちんと保証いたします！
              </div>
            </div>
            <div className="benefit_list_item">
              <h3 className="benefit_item_title">
                真贋保障<sup className="sup">※4</sup>
              </h3>
              <StaticImage
                src="../img/icon_benefit04.svg"
                loading="lazy"
                alt="真贋保障"
                className="img_icon"
              />
              <div className="benefit_item_text">
                タイムレスサポートスタッフにより
                <br />
                お客様は安心して買取ができます。
              </div>
            </div>
          </div>
          <div className="benefit_footer_text">
            フランチャイズ加盟のようなロイヤリティの支払いも不要です。
          </div>
          <div className="attention">
            ※1：PCやインターネット通信費用などはお客様負担となります
            <br />
            ※2：商品到着から3営業日以内の振込になります
            <br />
            ※3：一部の商品(盗品や法令違反品など)をのぞき買取金額を保障させていただきます
            <br />
            ※4：査定時に適切な情報を得られないなどで、保障できない場合もあります
          </div>
        </section>

        {/* リスクパートセクション */}
        <section className="riskpart section js_fadeup_trigger">
          <h2 className="section_title">一般的な買取FCのリスクパート</h2>
          <div className="container">
            <table className="riskpart_table">
              <thead>
                <tr>
                  <th
                    className="riskpart_table_title pc"
                    aria-hidden="true"
                  ></th>
                  <th className="oc riskpart_table_data">一般的な買取FC</th>
                  <th className="tx riskpart_table_data">
                    タイムレス
                    <br className="sp" />
                    エクスプレス
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="pc">加盟料</th>
                  <td className="oc">
                    <span className="sp">
                      加盟料
                      <br />
                    </span>
                    200万円~250万円
                  </td>
                  <td className="tx">
                    <span className="sp">
                      加盟料
                      <br />
                    </span>
                    5万円※
                  </td>
                </tr>
                <tr>
                  <th className="pc">開業準備金</th>
                  <td className="oc">
                    <span className="sp">
                      開業準備金
                      <br />
                    </span>
                    50万円~400万円
                  </td>
                  <td className="tx">
                    <span className="sp">
                      開業準備金
                      <br />
                    </span>
                    無料
                  </td>
                </tr>
                <tr>
                  <th className="pc">研修費用</th>
                  <td className="oc">
                    <span className="sp">
                      研修費用
                      <br />
                    </span>
                    100万円～200万円
                  </td>
                  <td className="tx">
                    <span className="sp">
                      研修費用
                      <br />
                    </span>
                    無料
                  </td>
                </tr>
                <tr>
                  <th className="pc">物件費用</th>
                  <td className="oc">
                    <span className="sp">
                      物件費用
                      <br />
                    </span>
                    100万円～300万円
                  </td>
                  <td className="tx">
                    <span className="sp">
                      物件費用
                      <br />
                    </span>
                    無料
                    <br />
                    既存店舗でサービス開始可能
                  </td>
                </tr>
                <tr>
                  <th className="pc">本部FCロイヤリティ</th>
                  <td className="oc">
                    <span className="sp">
                      本部FCロイヤリティ
                      <br />
                    </span>
                    月々30万円～
                  </td>
                  <td className="tx">
                    <span className="sp">
                      本部FCロイヤリティ
                      <br />
                    </span>
                    無料
                  </td>
                </tr>
                <tr>
                  <th className="riskpart_table_total pc">開業費用合計</th>
                  <td className="oc oc_total">
                    <span className="sp">
                      開業費用合計
                      <br />
                    </span>
                    480万円～1,180万円
                  </td>
                  <td className="tx tx_total">
                    <span className="sp">
                      開業費用合計
                      <br />
                    </span>
                    5万円
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="attention">
              {" "}
              ※一般入会のお客様には加盟金やロイヤリティが発生するケースがございます。
              <br />
              ※ただし加盟料支払いで、のぼり、計りなどスタートに必要なキット5万円相当をお届けします。
            </div>
          </div>
          <div className="riskpart_necessities">
            <div className="text_center">
              <div className="riskpart_necessities_title quote">
                これだけでスタートできます！
              </div>
            </div>
            <ul className="riskpart_necessities_list container">
              <li className="riskpart_necessities_list_item">
                <StaticImage
                  src="../img/icon_necessities01.svg"
                  loading="lazy"
                  alt="店頭告知ツール"
                  className="img_icon"
                />
                <p>
                  店頭告知ツール
                  <br />
                  （のぼり等）
                </p>
              </li>
              <li className="riskpart_necessities_list_item">
                <StaticImage
                  src="../img/icon_necessities02.svg"
                  loading="lazy"
                  alt="ビデオ通話ができるPC"
                  className="img_icon"
                />
                <p>
                  ビデオ通話ができるPC
                  <br />
                  （Skype<sup className="sup">TM</sup>を利用）
                </p>
              </li>
              <li className="riskpart_necessities_list_item">
                <StaticImage
                  src="../img/icon_necessities03.svg"
                  loading="lazy"
                  alt="計りなどの小物類"
                  className="img_icon"
                />
                <p>計りなどの小物類</p>
              </li>
            </ul>
            <div className="attention">
              {" "}
              ※加盟料支払いで、のぼり、計りなどスタートに必要なキット5万円相当をお届けします。PCは自社でご用意願います。{" "}
            </div>
          </div>
        </section>

        {/* サポートセクション */}
        <section className="step section js_fadeup_trigger">
          <h2 className="section_title">
            充実したサポートで
            <br />
            驚くほど簡単な買取ステップ！
          </h2>
          <ol className="step_list container">
            <li className="step_list_item">
              <div className="step_item_title">Step1</div>
              <StaticImage
                src="../img/icon_step01.svg"
                loading="lazy"
                alt="Step01"
                className="img_icon"
              />
              <div className="step_item_text">
                お客様から
                <br />
                査定する品物を預かる
              </div>
            </li>
            <li className="step_list_item">
              <div className="step_item_title">Step2</div>
              <StaticImage
                src="../img/icon_step02.svg"
                loading="lazy"
                alt="Step02"
                className="img_icon"
              />
              <div className="step_item_text">
                タイムレスのシステムを使って
                <br />
                商品確認と買取価格の算出
              </div>
            </li>
            <li className="step_list_item">
              <div className="step_item_title">Step3</div>
              <StaticImage
                src="../img/icon_step03.svg"
                loading="lazy"
                alt="Step03"
                className="img_icon"
              />
              <div className="step_item_text">
                買取価格をもとに
                <br />
                お客様と契約
              </div>
            </li>
            <li className="step_list_item">
              <div className="step_item_title">Step4</div>
              <StaticImage
                src="../img/icon_step04.svg"
                loading="lazy"
                alt="Step04"
                className="img_icon"
              />
              <div className="step_item_text">
                買取した商品を
                <br />
                タイムレスに発送
              </div>
            </li>
          </ol>
          <div className="text_center">
            <div className="step_footer_text quote">検品後、即ご入金！</div>
          </div>
          <div className="attention">
            {" "}
            ※査定のみのご依頼は受け付けておりません（不成立の場合を除く）{" "}
          </div>
        </section>

        {/* 提携パートナーセクション */}
        <section className="alliance section">
          <h2 className="section_title">提携パートナー</h2>
          <ul className="alliance_list">
            <li className="alliance_list_item">
              <a
                href="https://www.carcon.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  src="../img/logo_carcon.co.jp.png"
                  loading="lazy"
                  formats={["auto", "webp", "avif"]}
                  alt="カーコンビニ倶楽部"
                  className="img_responsive"
                />
              </a>
            </li>
          </ul>
        </section>

        {/* タイムレスセクション */}
        <section className="about section">
          <h2 className="section_title">タイムレスとは？</h2>
          <div className="about_desc">
            株式会社BuySell Technologies(東証マザーズ上場）のグループ会社
          </div>
          <div className="about_list container">
            <div className="about_list_item">
              <div className="about_item_title">
                総合買取サロン
                <br />
                TIMELESSの運営
              </div>
              <a
                href="https://timeless-kaitori.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  src="../img/kaitori_logo.svg"
                  loading="lazy"
                  alt="総合買取サロン"
                  className="img_icon"
                />
              </a>
              <div className="about_item_text">
                全国の百貨店に店舗を構え、
                <br />
                高品質な買取サービスを提供。
                <br />
                全国11店舗展開
                <br />
                取引百貨店は50社以上！
              </div>
            </div>
            <div className="about_list_item">
              <div className="about_item_title">
                タイムレスオークションの
                <br />
                運営
              </div>
              <a
                href="https://timeless-auction.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  src="../img/auction_logo.svg"
                  loading="lazy"
                  alt="タイムレスオークション"
                  className="img_icon"
                />
              </a>
              <div className="about_item_text">
                年間取引点数20万点以上の
                <br />
                BtoBオークションを運営。
                <br />
                自社オークションで集まった相場情報をもとに
                <br />
                リアルな買取価格を提供可能！
              </div>
            </div>
            <div className="about_list_item">
              <div className="about_item_title">
                全国の質屋
                <br />
                買取店との取引実績
              </div>
              <StaticImage
                src="../img/icon_japanmap.svg"
                loading="lazy"
                alt="全国の質屋買取店との取引実績"
                className="img_icon"
              />
              <div className="about_item_text">
                タイムレスエクスプレスは
                <br />
                すでに全国500件以上のお客様に
                <br />
                遠隔査定サービスを展開中です
              </div>
            </div>
          </div>
        </section>

        {/* リユース業界についてセクション */}
        <section className="market section js_fadeup_trigger">
          <h2 className="section_title">リユース業界について</h2>
          <div className="container">
            <section className="market_section">
              <div className="market_section_contents">
                <h3 className="market_contents_title">リユース市場推移</h3>
                <div className="market_contents_text">
                  リユース市場は順調に成長基調にあり、2017年で約2兆円。2025年に約3.2兆円規模まで成長。
                </div>
              </div>
              <div className="market_section_images">
                <StaticImage
                  src="../img/graph_1.svg"
                  loading="lazy"
                  alt="リユース市場推移"
                  className="img_responsive"
                />
                <cite className="market_images_cite">
                  出典：「データでみるリユース市場 最新版
                  」リサイクル通信2019年5月11日付調査結果
                </cite>
              </div>
            </section>
            <section className="market_section">
              <div className="market_section_contents">
                <h3 className="market_contents_title">かくれ資産</h3>
                <div className="market_contents_text">
                  潜在的なリユース市場規模を示す、「かくれ資産」の日本における総額は、2018年時点で約37兆円と推計。
                  <br />
                  かくれ資産として今後追加されることになる過去一年間に不要となった品物の規模も約7兆6,000億円と試算され、リユース市場の成長ポテンシャルは大きい。
                  <br />
                  ※かくれ資産：自宅内の一年以上利用されていない不用品の推定価値
                </div>
              </div>
              <div className="market_section_images">
                <StaticImage
                  src="../img/graph_2.svg"
                  loading="lazy"
                  alt="かくれ資産"
                  className="img_responsive"
                />
                <cite className="market_images_cite">
                  出典：「中古ビジネスデータブック2018 」リサイクル通信
                  、経済産業省「平成29年度
                  我が国におけるデータ駆動型社会に係る基盤整備（電子商取引に関する市場調査
                  ）、ニッセイ基礎研究所監修平成30年11月7日付調査結果より当社作成
                </cite>
              </div>
            </section>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section className="contact section">
          <h2 className="section_title">お問い合わせ</h2>
          <div className="contact_desc">
            サービスに関すること、取材のお問い合わせなどお気軽にご連絡くださいませ。
            <br />
            <strong>お申込みは下記お問い合わせから可能です。</strong>
            <br />
            後日、担当者よりご連絡させていただきます。
            <br />
          </div>
          <div className="contact_form">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              action="/thank-you"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <dl className="contact_form_dl">
                <dt className="contact_form_dt required">お問合せ種別</dt>
                <dd className="contact_form_dd">
                  <select
                    name="お問合せ種別"
                    className="contact_input contact_input_select"
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="お申込み">お申込み</option>
                    <option value="取材のご依頼">取材のご依頼</option>
                    <option value="サービスに関するお問い合わせ">
                      サービスに関するお問い合わせ
                    </option>
                    <option value="その他">その他</option>
                  </select>
                </dd>
              </dl>
              <p className="form_title">【法人情報】</p>
              <dl className="contact_form_dl">
                <dt className="contact_form_dt required">お客様種別</dt>
                <dd className="contact_form_dd">
                  <label className="contact_input_radio">
                    <input
                      type="radio"
                      name="お客様種別"
                      value="法人の方"
                      defaultChecked
                    />{" "}
                    法人の方
                  </label>
                  <label className="contact_input_radio">
                    <input
                      type="radio"
                      name="お客様種別"
                      value="個人事業主の方"
                    />{" "}
                    個人事業主の方
                  </label>
                </dd>
              </dl>
              <dl className="contact_form_dl">
                <dt className="contact_form_dt required">
                  店舗名または法人名（「株式会社」等もご記入ください）
                </dt>
                <dd className="contact_form_dd">
                  <input
                    type="text"
                    name="店舗名または法人名"
                    className="contact_input contact_input_text"
                    required
                  />
                </dd>
              </dl>
              <dl className="contact_form_dl">
                <dt className="contact_form_dt required">
                  店舗名または法人名カナ
                </dt>
                <dd className="contact_form_dd">
                  <input
                    type="text"
                    name="店舗名または法人名カナ"
                    className="contact_input contact_input_text"
                    required
                  />
                </dd>
              </dl>
              <dl className="contact_form_dl">
                <dt className="contact_form_dt required">所在地</dt>
                <dd className="contact_form_dd">
                  <input
                    type="text"
                    name="所在地"
                    className="contact_input contact_input_text"
                    required
                  />
                </dd>
              </dl>
              <dl className="contact_form_dl">
                <dt className="contact_form_dt required">電話番号</dt>
                <dd className="contact_form_dd">
                  <input
                    type="tel"
                    name="電話番号"
                    className="contact_input contact_input_text"
                    required
                  />
                </dd>
              </dl>
              <dl className="contact_form_dl">
                <dt className="contact_form_dt">FAX番号</dt>
                <dd className="contact_form_dd">
                  <input
                    type="tel"
                    name="FAX番号"
                    className="contact_input contact_input_text"
                  />
                </dd>
              </dl>
              <dl className="contact_form_dl">
                <dt className="contact_form_dt">代表者名</dt>
                <dd className="contact_form_dd">
                  <input
                    type="text"
                    name="代表者名"
                    className="contact_input contact_input_text"
                  />
                </dd>
              </dl>
              <dl className="contact_form_dl">
                <dt className="contact_form_dt">代表者名カナ</dt>
                <dd className="contact_form_dd">
                  <input
                    type="text"
                    name="代表者名カナ"
                    className="contact_input contact_input_text"
                  />
                </dd>
              </dl>
              <p className="form_title">【担当者情報】</p>
              <dl className="contact_form_dl">
                <dt className="contact_form_dt required">担当者名</dt>
                <dd className="contact_form_dd">
                  <input
                    type="text"
                    name="担当者名"
                    className="contact_input contact_input_text"
                    required
                  />
                </dd>
              </dl>
              <dl className="contact_form_dl">
                <dt className="contact_form_dt required">担当者名カナ</dt>
                <dd className="contact_form_dd">
                  <input
                    type="text"
                    name="担当者名カナ"
                    className="contact_input contact_input_text"
                    required
                  />
                </dd>
              </dl>
              <dl className="contact_form_dl">
                <dt className="contact_form_dt required">連絡先電話番号</dt>
                <dd className="contact_form_dd">
                  <input
                    type="tel"
                    name="連絡先電話番号"
                    className="contact_input contact_input_text"
                    required
                  />
                </dd>
              </dl>
              <dl className="contact_form_dl">
                <dt className="contact_form_dt required">
                  連絡用メールアドレス
                </dt>
                <dd className="contact_form_dd">
                  <input
                    type="email"
                    name="連絡用メールアドレス"
                    className="contact_input contact_input_text"
                    required
                  />
                </dd>
              </dl>
              <dl className="contact_form_dl">
                <dt className="contact_form_dt">お問合せ内容</dt>
                <dd className="contact_form_dd">
                  <textarea
                    name="お問合せ内容"
                    className="contact_input contact_input_textarea"
                  ></textarea>
                </dd>
              </dl>
              <p className="pinfo_head">個人情報の取り扱いについて</p>
              <p>
                下記「個人情報保護方針」をお読みいただき、同意の上、お問い合せいただきますよう
                お願い申し上げます。
              </p>
              <div className="pinfo_box">
                <dl className="pinfo_list">
                  <dt className="pinfo_title">＜利用目的＞</dt>
                  <dd className="pinfo_text">
                    <p>
                      ・このお問い合わせ画面でご提出いただく個人情報は、お問い合わせを頂いた事項に
                      適切に対応し管理するために利用します。
                    </p>
                  </dd>
                </dl>
                <dl className="pinfo_list">
                  <dt className="pinfo_title">＜第三者提供＞</dt>
                  <dd className="pinfo_text">
                    <p>
                      ・法令に基づく場合を除いて、ご本人様の同意なく当個人情報を第三者に提供することは
                      ありません。
                    </p>
                  </dd>
                </dl>
                <dl className="pinfo_list">
                  <dt className="pinfo_title">＜委託＞</dt>
                  <dd className="pinfo_text">
                    <p>
                      ・当個人情報の取扱いを委託することがありますが、委託にあたっては、委託先における
                      個人情報の安全管理が図られるよう、委託先に対する必要かつ適切な監督を行います。
                    </p>
                  </dd>
                </dl>
                <dl className="pinfo_list">
                  <dt className="pinfo_title">＜開示等のお求め＞</dt>
                  <dd className="pinfo_text">
                    <p>
                      ・当個人情報の利用目的の通知、開示、内容の訂正・追加または削除、利用の停止・消去および
                      第三者への提供の停止（「開示等」といいます。）を受け付けております。開示等の求めは、
                      以下の「個人情報苦情及び相談窓口」で受け付けます。
                    </p>
                  </dd>
                </dl>
                <dl className="pinfo_list">
                  <dt className="pinfo_title">
                    ＜個人情報をご入力するにあたっての注意事項＞
                  </dt>
                  <dd className="pinfo_text">
                    <p>
                      ・必要事項が記載されていない場合、最適なご回答ができない場合があります。
                    </p>
                  </dd>
                </dl>
                <dl className="pinfo_list text_right">
                  <dt className="pinfo_title">＜個人情報保護管理者＞</dt>
                  <dd className="pinfo_text">
                    <p>株式会社タイムレス　管理本部本部長</p>
                  </dd>
                </dl>
                <dl className="pinfo_list text_right">
                  <dt className="pinfo_title">＜個人情報苦情及び相談窓口＞</dt>
                  <dd className="pinfo_text">
                    <p>
                      株式会社タイムレス　お客様相談室
                      <br />
                      TEL：03-6455-1712
                      <br />
                      メール：info-tl@timeless-co.com
                    </p>
                  </dd>
                </dl>
              </div>
              <div className="contact_agreement">
                <p className="text_center agreement_check">
                  <label>
                    <input
                      type="checkbox"
                      name="個人情報の取り扱いについて同意する"
                      required
                    />{" "}
                    はい、同意しました。
                  </label>
                </p>
              </div>
              <div className="contact_submit">
                <button type="submit" className="contact_submit_btn">
                  送信する
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default IndexPage
