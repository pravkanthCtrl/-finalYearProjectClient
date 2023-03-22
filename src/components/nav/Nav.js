import React from 'react'
import {Link} from "react-router-dom"

import './nav.css'

const Nav = ({darkMode}) => {
  return (
    <div className={darkMode?'nav header_container':'nav header_container dark'}>
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
            <li className={!darkMode?"dark":""}>Contact</li>
            </Link>
            <Link to="/info">
              <li className={!darkMode?"dark":""}>About</li>
            </Link>
            <Link to="/">
              <li className={!darkMode?"dark":""}>Home</li>
            </Link>
        </ul>
      </div>
    </div>
  )
}

export default Nav
