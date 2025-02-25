import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header_navi">
        <div className="header_logo">
          <a className="link" href="https://timeless-kaitori.com/">
            <img
              src="https://timeless-kaitori.com/wp-content/themes/timeless-kaitori/img/lp/header_logo.svg"
              alt="総合買取サロンタイムレス"
              className="header_logo_img"
              width="175"
              height="87"
            />
          </a>
        </div>

        <div className="sp header_shop_shortcut">
          <a href="https://timeless-kaitori.com/shop/">店舗一覧</a>
        </div>

        <div className="navi_btn js_menu">
          <span className="navi_btn_bar" />
          <span className="navi_btn_bar" />
        </div>

        <nav className="header_gnavi">
          <ul className="header_gnavi_list">
            <li className="header_gnavi_list_item">
              <a className="link" href="https://timeless-kaitori.com/news/">
                お知らせ
              </a>
            </li>
            <li className="header_gnavi_list_item">
              <a className="link" href="https://timeless-kaitori.com/shop/">
                店舗一覧
              </a>
            </li>
            <li className="header_gnavi_list_item">
              <a className="link" href="https://timeless-kaitori.com/event/">
                催事一覧
              </a>
            </li>
            <li className="header_gnavi_list_item">
              <span className="link js_menu_trigger">買取品目</span>
              <div className="accordion_menu" style={{ display: "none" }}>
                <div className="accordion_menu_title" />
                <ul className="accordion_menu_list cf">
                  <li className="accordion_menu_list_item">
                    <Link className="link" to="/brand/">
                      バッグ・小物
                    </Link>
                  </li>
                  <li className="accordion_menu_list_item">
                    <a
                      className="link"
                      href="https://timeless-kaitori.com/watch/"
                    >
                      時計
                    </a>
                  </li>
                  {/* ...以下省略... */}
                </ul>
              </div>
            </li>
            {/* ...その他のメニュー... */}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
