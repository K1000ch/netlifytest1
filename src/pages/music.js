import React from "react"
import Layout from "../components/layout"
import { Link } from 'gatsby'
import MusicList from "../components/musicList"


export default () => (
  <Layout>
    <h1>
      Music
    </h1>
    <MusicList />
  </Layout>
)