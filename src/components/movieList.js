import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(
    graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "movie-post"}}}
      sort: {order: ASC, fields: frontmatter___date}
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "YYYY-MM-DD dddd")
              title
              link
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
            <div className="youtube-wrap">
              <iframe 
                src={node.frontmatter.link}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
          </li>
      ))} 
    </ul>
  )
}