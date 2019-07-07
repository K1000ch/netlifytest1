import React from "react"
import Layout from "../components/layout"
import MovieList from "../components/movieList"
import "../css/pages/movie.scss"

export default () => (
  <Layout currentPage="movie">
      <h1>
        movie
      </h1>
      <MovieList />
  </Layout>
)