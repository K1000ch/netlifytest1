import React from "react"
import Layout from "../components/layout"
// import { Link } from 'gatsby'
import NewsList from "../components/newsList"

export default () => (
  <Layout currentPage="news">
    <h1>
      News
    </h1>
    <NewsList />
  </Layout>
)