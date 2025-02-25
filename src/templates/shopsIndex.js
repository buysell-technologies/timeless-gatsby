import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const ShopsIndex = ({ pageContext }) => {
  const { shops } = pageContext; // gatsby-node.js の createPage(context) から受け取ったデータ

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
        <h1>店舗一覧</h1>
        <ul>
          {shops.map((shop) => (
            <li key={shop.slug}>
              <Link to={`/shops/${shop.slug}`}>{shop.title}</Link>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export default ShopsIndex;
