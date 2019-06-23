import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <nav>
    <ul>
      <li>
        <Link to="/">
          Top
        </Link>
      </li>
      <li>
        <Link to="/about">
          About
        </Link>
      </li>
      <li>
        <Link to="/music">
          Music
        </Link>
      </li>
      <li>
        <Link to="/news">
          News
        </Link>
      </li>
      <li>
        <Link to="/live">
          Live
        </Link>
      </li>
      <li>
        <Link to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)