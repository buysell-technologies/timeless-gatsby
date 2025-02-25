import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ThankYouPage = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "ja" }}>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Layout>
        <main style={{ textAlign: "center", padding: "2rem" }}>
          <h1>お問い合わせありがとうございます！</h1>
          <p>ご送信いただいた内容を確認後、担当者よりご連絡いたします。</p>
          <Link to="/">トップページへ戻る</Link>
        </main>
      </Layout>
    </>
  )
}

export default ThankYouPage
