import React from "react"
import Layout from "../components/layout"
// import { Link } from 'gatsby'
import NewsList from "../components/newsList"
import "../css/pages/news.scss"

export default () => (
  <Layout currentPage="news">
    <div className="news">
      <h2>
        News
      </h2>
      <NewsList />
    </div>
  </Layout>
)