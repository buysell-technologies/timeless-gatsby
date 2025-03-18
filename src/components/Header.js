import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import "../styles/kaitori_header.scss";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (menuName) => {
    setOpenMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
  };

  const isMenuOpen = (menuName) => openMenu === menuName;

  return (
    <header id="header" className="header">
      <div className="header_navi">
        <div className="header_logo">
          <a className="link" href="/">
            <img
              src="/img/header_logo.svg"
              alt="総合買取サロンタイムレス"
              className="header_logo_img"
              width="175"
              height="87"
            />
          </a>
        </div>
        <div className="sp header_shop_shortcut">
          <a href="/shops/">店舗一覧</a>
        </div>
        <div className="navi_btn js_menu">
          <span className="navi_btn_bar"></span>
          <span className="navi_btn_bar"></span>
        </div>
        <nav className="header_gnavi">
          <ul className="header_gnavi_list">
            <li className="header_gnavi_list_item">
              <a className="link" href="/news/">お知らせ</a>
            </li>
            <li className="header_gnavi_list_item">
              <a className="link" href="/shop/">店舗一覧</a>
            </li>
            <li className="header_gnavi_list_item">
              <a className="link" href="/event/">催事一覧</a>
            </li>
            <li className="header_gnavi_list_item">
              <span
                className={`link js_menu_trigger${isMenuOpen("買取品目") ? " is_active" : ""}`}
                onClick={() => handleToggle("買取品目")}
                style={{ cursor: "pointer" }}
              >
                買取品目
              </span>
              <div
                className="accordion_menu"
                style={{ display: isMenuOpen("買取品目") ? "block" : "none" }}
              >
                <div className="accordion_menu_title"></div>
                <ul className="accordion_menu_list cf">
                  <li className="accordion_menu_list_item">
                    <Link className="link" to="/brand/">バッグ・小物</Link>
                  </li>
                  <li className="accordion_menu_list_item">
                    <Link className="link" to="/watch/">時計</Link>
                  </li>
                  <li className="accordion_menu_list_item">
                    <Link className="link" to="/brandjewelry/">ジュエリーアクセサリー</Link>
                  </li>
                  <li className="accordion_menu_list_item">
                    <Link className="link" to="/jewelry/">ジュエリー</Link>
                  </li>
                  <li className="accordion_menu_list_item">
                    <Link className="link" to="/items/gold/">貴金属</Link>
                  </li>
                  <li className="accordion_menu_list_item">
                    <Link className="link" to="/apparel/">アパレル</Link>
                  </li>
                  <li className="accordion_menu_list_item">
                    <Link className="link" to="/stamp/">切手・テレカ</Link>
                  </li>
                  <li className="accordion_menu_list_item">
                    <Link className="link" to="/other/">その他</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header_gnavi_list_item">
              <span
                className={`link js_menu_trigger${isMenuOpen("買取方法") ? " is_active" : ""}`}
                onClick={() => handleToggle("買取方法")}
                style={{ cursor: "pointer" }}
              >
                買取方法
              </span>
              <div
                className="accordion_menu"
                style={{ display: isMenuOpen("買取方法") ? "block" : "none" }}
              >
                <div className="accordion_menu_title"></div>
                <ul className="accordion_menu_list cf">
                  <li className="accordion_menu_list_item">
                    <a className="link" href="/tento/">店頭買取</a>
                  </li>
                  <li className="accordion_menu_list_item">
                    <a className="link" href="/shuccho/">出張買取</a>
                  </li>
                  <li className="accordion_menu_list_item">
                    <a className="link" href="/takuhai/">宅配買取</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header_gnavi_list_item">
              <a className="link" href="/faq/">よくあるご質問</a>
            </li>
            <li className="header_gnavi_list_item">
              <a className="link" href="/contact/">お問合せ</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
