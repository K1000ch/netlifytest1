import React from "react"
import Layout from "../components/layout"
import MovieList from "../components/movieList"

export default () => (
  <Layout currentPage="movie">
      <h1>
        Lives
      </h1>
      <MovieList />
  </Layout>
)