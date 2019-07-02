import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "music-post"}}}) {
          edges {
            node {
              html
              frontmatter {
                date(formatString: "YYYY-MM-DD dddd")
                title
                featuredimage
              }
            }
          }
        }
      }
    `
  )
  return (
    <ul>
      {data.allMarkdownRemark.edges.map(
        ({ node }, index) => (
          <li key={index}>
            <div>
              <h3>
                {node.frontmatter.title}
              </h3>
            </div>
            <div dangerouslySetInnerHTML={{__html : node.html}} />
          </li>
      ))} 
    </ul>
  )
}