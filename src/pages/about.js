import React from "react"
import Layout from "../components/layout"
import { Link } from 'gatsby'
import { graphql } from "gatsby"


export default ({data}) => (
  <Layout>
    <div>
      <h1>
        About
      </h1>
      <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
    </div>
  </Layout>

)

export const query = graphql`
{
  allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: {
            eq: "about-page"
          }
        }
      }
    ) {
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