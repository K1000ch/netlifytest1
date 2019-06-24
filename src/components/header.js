import React from 'react'
import { Link } from 'gatsby'
import GloalNav from "./globalNavigation"
import { StaticQuery, graphql } from "gatsby"


import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

/*
const header = class extends React.Component ()
  render() {
    return (
        <header>
          <h1>
            Some Band
          </h1>
          <GloalNav />
        </header>
    )
  }
}

export default header
*/



export default () => (
  <StaticQuery
    query={
      graphql`
        {
          site {
            siteMetadata {
              title
            }
          }
        }      
      `
    }
    render = {
      data => (
        <header>
          <h1>
            {data.site.siteMetadata.title}
          </h1>
          <GloalNav />
        </header>
      )
    }

  />
)