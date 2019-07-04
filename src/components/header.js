import React from 'react'
//import { Link } from 'gatsby'
import GloalNav from "./globalNavigation"
// import { useSiteMetadata } from "../hooks/site-meta-data"
import headerStyles from "../css/components/header.module.css"


import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

class Header extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: "Room Number 404",
      currentPage: props.currentPage
    }
  }

  render(){
    return(
      <header className={headerStyles.header}>
        <h1>
          {this.state.title}
        </h1>
        <GloalNav currentPage={this.state.currentPage} className={headerStyles.nav}/>
      </header>
    )
  }
}

export default Header


/*
function header(){
  const metadata = useSiteMetadata()
  return (
    <header className={headerStyles.header}>
      <h1>
        {metadata.title}
      </h1>
      <GloalNav className={headerStyles.nav}/>
    </header>
  )
}

export default header;
*/