import React from "react"
import Layout from "../components/layout"
// import { Link } from 'gatsby'
import { graphql } from "gatsby"

import aboutStyle from "../css/pages/about.css"
import "../css/pages/about.css"


export default ({data}) => (
  <Layout　currentPage="about" className={aboutStyle}>
    <div>
      <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
    </div>
  </Layout>

)

export const query = graphql`
{
  allMarkdownRemark(
      filter: {
        frontmatter: {
          title: {
            eq: "about"
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