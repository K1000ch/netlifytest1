import React from 'react'
import { Link } from 'gatsby'

class GlobalNavigation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentPage: props.currentPage,
      linksUpper:{
        index: "Top",
        about: "About",
        music: "Music",
        news: "News",
        live: "Live",
        movie: "Movie",
        lyric: "Lyric",
        contact: "Contact"
      },
      links:[
        "index",
        "about",
        "music",
        "news",
        "live",
        "movie",
        "lyric",
        "contact"
      ]
    }
  }

  render(){
    return(
    <nav className="globalNavigation">
      <ul>
        {this.state.links.map((value) =>
          <li className={value === this.state.currentPage ? value + " activePage" : value}>
            <Link to={value === "index" ? "/" : value}>
              {this.state.linksUpper[value]}
            </Link>
          </li>
        )}
      </ul>
    </nav>
    )
  }
}

export default GlobalNavigation