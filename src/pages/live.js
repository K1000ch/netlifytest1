import React from "react"
import Layout from "../components/layout"
import { Link } from 'gatsby'
import LiveList from "../components/liveList"

export default () => (
  <Layout currentPage="live">
      <h1>
        Lives
      </h1>
      <LiveList />
  </Layout>
)