import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "live-post"}}}, 
        sort: {order: DESC, fields: frontmatter___date}, limit: 20
        ) {
          edges {
            node {
              html
              frontmatter {
                date(formatString: "YYYY-MM-DD")
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
    <ul className="liveList">
      {data.allMarkdownRemark.edges.map(
        ({ node }, index) => (
          <li key={index}>
            <div className="date">
              <h3>
                {node.frontmatter.date} 
              </h3>
            </div>
            <div className="article">
              <h3>{node.frontmatter.title}</h3>
              {(() => {
                if (node.frontmatter.featuredimage !== null) {
                  return  <img src={node.frontmatter.featuredimage} alt="liveImage"/>;
                }
              })()}
              <div className="text" dangerouslySetInnerHTML={{__html : node.html}} />
            </div>
          </li>
      ))} 
    </ul>
  )
}