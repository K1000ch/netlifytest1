import React from 'react'
import { Link } from 'gatsby'
import ClassNames from 'classnames'

class GlobalNavigation extends React.Component{
  constructor(props){
    super(props)
    let classNames = {
      index: "index",
      about: "about",
      music: "music",
      news: "news",
      live: "live",
      movie: "movie",
      lyric: "lyric",
      contact: "contact"
    }
    this.state = {
      currentPage: props.currentPage,
      classNames: classNames
    }
  }

  componentDidMount(){
    // if(this.state.currentPage !== null){
    //   let arr = this.state.classNames;
    //   arr.map(function(value,index){
    //     if(value == this.state.currentPage){
    //       arr[index] = value + " active"
    //       this.setState({classNames: arr})
    //     }
    //   })
    // }

    let neclassNames = {
      index: "index2",
      about: "about",
      music: "music",
      news: "news",
      live: "live",
      movie: "movie",
      lyric: "lyric",
      contact: "contact"
    }
    this.setState({classNames: neclassNames});
  }

  render(){
    return(
    <nav className="globalNavigation">
      <ul>
        <li className={this.state.classNames.index}>
          <Link to="/">
            Top{this.state.currentPage}
          </Link>
        </li>
        <li className={this.state.classNames.about}>
          <Link to="/about">
            About
          </Link>
        </li>
        <li className={this.state.classNames.music}>
          <Link to="/music">
            Music
          </Link>
        </li>
        <li className={this.state.classNames.news}>
          <Link to="/news">
            News
          </Link>
        </li>
        <li className={this.state.classNames.live}>
          <Link to="/live">
            Live
          </Link>
        </li>
        <li className={this.state.classNames.movie}>
          <Link to="/movie">
            Movie
          </Link>
        </li>
        <li className={this.state.classNames.lyric}>
          <Link to="/lyric">
            Lyric
          </Link>
        </li>
        <li className={this.state.classNames.contact}>
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    )
  }
}

export default GlobalNavigation


/*
export default () => (
  <nav className="globalNavigation">
    <ul>
      <li className="index">
        <Link to="/">
          Top
        </Link>
      </li>
      <li className="about">
        <Link to="/about">
          About
        </Link>
      </li>
      <li className="music">
        <Link to="/music">
          Music
        </Link>
      </li>
      <li className="news">
        <Link to="/news">
          News
        </Link>
      </li>
      <li className="live">
        <Link to="/live">
          Live
        </Link>
      </li>
      <li className="movie">
        <Link to="/movie">
          Movie
        </Link>
      </li>
      <li className="lyric">
        <Link to="/lyric">
          Lyric
        </Link>
      </li>
      <li className="contact">
        <Link to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
*/