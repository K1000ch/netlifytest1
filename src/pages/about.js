import React from "react"
import Layout from "../components/layout"
import { Link } from 'gatsby'
import { graphql } from "gatsby"


export default ({data}) => (
//  console.log(data)

  <Layout>
    <div>
      <h1>
        About
      </h1>
      <p>
        {data.allMarkdownRemark.edges[0].node.excerpt}
      </p>
    </div>
  </Layout>

)

export const query = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "about-page"}}}) {
    edges {
      node {
        html
        frontmatter {
          title
          templateKey
        }
        excerpt(format: PLAIN)
      }
    }
  }
}
`