import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"


let qwer = () =>{
    alert("qwer");
}

export default ({data}) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
    <div
        onClick={() => qwer()}
    >
        e
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`