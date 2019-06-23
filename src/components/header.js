import React from 'react'
import { Link } from 'gatsby'
import GloalNav from "./globalNavigation"

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const header = class extends React.Component {
  render() {
    return (
        <header>
          <h1>
            Joy Division
          </h1>
          <GloalNav />
        </header>
    )
  }
}

export default header