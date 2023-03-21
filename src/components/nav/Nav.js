import React from 'react'
import {Link} from "react-router-dom"

import './nav.css'

const Nav = () => {
  return (
    <div className='nav header_container'>
      <div className='logo'>
        <img src="https://cdn.dribbble.com/users/677572/screenshots/16492805/media/2668c6eb70a7e77319c489b842b97be7.png?compress=1&resize=768x576&vertical=top" alt="logo" />
      </div>
      <div className='nav-items side_menu'>
        <ul>
            <Link to='#'
            onClick={(e) => {
                window.location.href = "mailto:anto19103.ei@rmkec.ac.in";
                e.preventDefault();
            }}>
            <li>Contact</li>
            </Link>
            <Link to="/info">
              <li>About</li>
            </Link>
            <Link to="/">
              <li>Home</li>
            </Link>
        </ul>
      </div>
    </div>
  )
}

export default Nav