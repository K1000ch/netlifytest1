import React from "react"
import Layout from "../components/layout"
// import { Link } from 'gatsby'
import { graphql } from "gatsby"

import "../css/pages/about.scss"


export default ({data}) => (
  <Layout　currentPage="about">
    <div className="aboutPage">
      <img src={data.allMarkdownRemark.edges[0].node.frontmatter.featuredimage} alt=""/>
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
          featuredimage
        }
        excerpt(format: PLAIN)
      }
    }
  }
}
`