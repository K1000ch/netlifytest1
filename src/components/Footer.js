import React from 'react'
import Nav from "./globalNavigation"
import "../css/components/footer.scss"

// import { Link } from 'gatsby'

// import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

const footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="footerModal">
          <div className="nav">
            <Nav />
          </div>
          <div className="buttonWrap">
            <div className="button">
              =
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default footer