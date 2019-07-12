import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "music-post"}}} 
        sort: {order: DESC, fields: frontmatter___date}
        ) {
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
    <ul className="musicList">
      {data.allMarkdownRemark.edges.map(
        ({ node }, index) => (
          <li key={index}>
            <div className="left">
              <img src={node.frontmatter.featuredimage} alt="" />
              <h3>
                {node.frontmatter.title}
              </h3>
            </div>
            <div className="article">
              <div className="text" dangerouslySetInnerHTML={{__html : node.html}} />
            </div>
          </li>
      ))} 
    </ul>
  )
}