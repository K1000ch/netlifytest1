import React from 'react'
import { Link } from 'gatsby'

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
          About
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