import React from 'react'
import { Link } from 'gatsby'
// import AniLink from "gatsby-plugin-transition-link/AniLink"


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
        contact: "Contact"
      },
      links:[
        "index",
        "about",
        "music",
        "news",
        "live",
        "movie",
        "contact"
      ],
      transitionDuration: 3
    }
  }

  render(){
    return(
    <nav className="globalNavigation">
      <ul>
        {this.state.links.map((value) =>
          <li
            className={value === this.state.currentPage ? value + " activePage" : value + " notActive"}
            key={value}
          >
            
            <Link to={value === "index" ? "/" : "/" + value}>
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