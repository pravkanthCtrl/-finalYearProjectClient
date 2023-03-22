import React from 'react'
import {Link} from "react-router-dom"
import {BsArrowRightShort} from "react-icons/bs"

import { GiNightSleep } from 'react-icons/gi';
import { BsSun } from 'react-icons/bs';

import './homepage.css'


const Homepage = ({darkMode,setDarkMode}) => {
  
  return (
    <div className={darkMode?'homepage':'homepage dark'}>
        <div className={darkMode?`darkMode-btn`:`darkMode-btn dark`} onClick={()=>setDarkMode(darkMode => !darkMode)}>{!darkMode?<GiNightSleep/>:<BsSun/>}</div>
        <div>
          <div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div classNAme="wave"></div>
          </div>
          <div className='welcome-message'>
              <h1>Explore</h1>
              <div className={darkMode?"typewriter":"typewriter dark"}>Cows rumination process</div>
          </div>
          <ul className='d-flex gap-3'>
            <li className="drop-text"><h5 className={darkMode?'drop-text-1':'drop-text-1 dark'}>Rumination</h5></li>
            <li className="drop-text"><h5 className={darkMode?'drop-text-2':'drop-text-2 dark'}>Detection</h5></li>
            <li className="drop-text"><h5 className={darkMode?'drop-text-3':'drop-text-3 dark'}>LSTM</h5></li>
          </ul>
        </div>
        <Link to="/info">
          <div className='navigation-btn'>
            <BsArrowRightShort className='next-btn'/>
          </div>
        </Link>
        
    </div>
  )
}

export default Homepage
