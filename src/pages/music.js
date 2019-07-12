import React from "react"
import Layout from "../components/layout"
import MusicList from "../components/musicList"
import "../css/pages/music.scss"


export default () => (
  <Layout currentPage="music">
    <div className="musicPage">
      <MusicList />
    </div>
  </Layout>
)