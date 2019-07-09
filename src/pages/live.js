import React from "react"
import Layout from "../components/layout"
// import { Link } from 'gatsby'
import LiveList from "../components/liveList"
import "../css/pages/live.scss"

export default () => (
  <Layout currentPage="live">
      <h2>
        Lives
      </h2>
      <div className="live">
        <LiveList />
      </div>
  </Layout>
)