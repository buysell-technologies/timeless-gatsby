import React, { useState } from "react";
import "../styles/kaitori_footer.scss";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer_navi">
          <ul className="footer_navi_list">
            <li className="footer_navi_list_item"><a className="link" href="/company/">会社概要</a></li>
            <li className="footer_navi_list_item"><a className="link" href="https://timeless-co.com/privacypolicy/" target="_blank">プライバシーポリシー</a></li>
            <li className="footer_navi_list_item"><a className="link" href="/terms/">利用規約</a></li>
            <li className="footer_navi_list_item"><a className="link" href="/customer/">お客様相談室</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer_logo">
        <a className="link" href="/">
          <img
            src="../img/logo_white.svg"
            formats="auto"
            alt="総合買取サロンタイムレス"
            className="img_responsive"
            width="100"
            height="101"
          />
        </a>
      </div>

      <dl className="footer_shop_list">
        <dt>買取店舗 : </dt>
        <dd>
            <ul>
              <li>吉祥寺</li>
              <li>戸塚</li>
              <li>聖蹟桜ヶ丘</li>
              <li>池袋</li>
              <li>千葉</li>
              <li>埼玉</li>
              <li>群馬</li>
              <li>大阪</li>
              <li>奈良</li>
              <li>和歌山</li>
              <li>京都</li>
              <li>岡山</li>
              <li>広島</li>
              <li>熊本</li>
              <li>大分</li>
              <li>福岡</li>
              <li>北海道</li>
            </ul>
        </dd>
      </dl>
      <div className="footer_text">
        〈古物営業法に基づく表示〉<br />
        東京都公安委員会許可 第 301100907630 号 ㈱タイムレス
      </div>
      <div className="footer_privacy">
        <StaticImage
          src="../img/privacymark.png"
          formats={["auto", "webp", "avif"]}
          loading="lazy"
          width="80"
          height="80"
          alt="プライバシーマーク"
          className="pmark_img"
        />
      </div>
      <div className="copyright">&copy; 2025 TIMELESS</div>
    </footer>
  );
};

export default Footer;
