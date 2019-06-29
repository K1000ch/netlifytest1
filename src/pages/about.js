import React from "react"
import Layout from "../components/layout"
import { Link } from 'gatsby'
import { graphql } from "gatsby"


export default ({data}) => (
  <Layout>
    <div>
      <h1>
H1About
      </h1>
      <h2>
H2About
      </h2>
      <h3>
H3About
      </h3>
      <h4>
H4About
      </h4>
      <h5>
H5About
      </h5>
      <h6>
H6About
      </h6>
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