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
    <ul className="movieList">
      {data.allMarkdownRemark.edges.map(
        ({ node }, index) => (
          <li key={index}>
            <div>
              <h3>
                {node.frontmatter.title}
              </h3>
            </div>
            <div className="movieWraper">
              <div className="iframeWrap">

                  <iframe
                    title={node.frontmatter.title}
                    src={node.frontmatter.link}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullscreen
                    width="100%"
                    height="100%"
                  >
                  </iframe>
                </div>
            </div>
          </li>
      ))} 
    </ul>
  )
}