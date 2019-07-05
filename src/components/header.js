import React from 'react'
// import { Link } from 'gatsby'
import GloalNav from "./globalNavigation"
import { throttle, debounce } from 'throttle-debounce';
import headerStyles from "../css/components/header.module.css"

// import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

class Header extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: "Room Number 404",
      currentPage: props.currentPage,
      currentPosition: 0,
      headerClass: "display"
    }
  }


  componentDidMount() {
    window.addEventListener('scroll', event => throttle(200,this.watchCurrentPosition()), true)
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll')
  }

  watchCurrentPosition() {
    this.setState({currentPosition:this.scrollTop()});
    if(this.scrollTop() > 5){
      this.setState({headerClass:"hide"})
    }else{
      this.setState({headerClass:"display"})
    }
  }

  scrollTop() {
    return Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
  }

  render(){
    return(
      <header className={headerStyles.header} onScroll={this.handleScroll}>
          <h1 id="header">
            {this.state.title}{this.state.currentPosition}
          </h1>
        <GloalNav currentPage={this.state.currentPage} className={headerStyles.nav}/>
      </header>
    )
  }
}

export default Header