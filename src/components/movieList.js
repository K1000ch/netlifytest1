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
  /*
  return (
    <ul className="movieList">
      {data.allMarkdownRemark.edges.map(
        ({ node }, index) => (
          <li key={index}>
            <div className="date">
              <h3>
                {node.frontmatter.title} 
              </h3>
            </div>
            <div className="article">
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
            </div>
          </li>
      ))} 
    </ul>
  )
  */

 return (
  <ul className="movieList">
    <li>
      <div className="date">
        <h3>
          Radiohead - Just
        </h3>
      </div>
      <div className="article">
        <div className="movieWraper">
          <div className="iframeWrap">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/oIFLtNYI3Ls"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>

            </iframe>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div className="date">
        <h3>
          TTNG - Adventure, Stamina & Anger - Audiotree Live
        </h3>
      </div>
      <div className="article">
        <div className="movieWraper">
          <div className="iframeWrap">
            <iframe 
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/E6t3_XwDvkg"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            >
            </iframe>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div className="date">
        <h3>
          Joy Division - Transmission [OFFICIAL MUSIC VIDEO]
        </h3>
      </div>
      <div className="article">
        <div className="movieWraper">
          <div className="iframeWrap">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6dBt3mJtgJc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </li>
  </ul>
  )
}