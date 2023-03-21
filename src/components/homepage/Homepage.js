import React from 'react'
import {Link} from "react-router-dom"
import {GrFormNextLink} from "react-icons/gr"


import './homepage.css'


const Homepage = () => {
  
  return (
    <div className='homepage'>
        <div>
        <div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div classNAme="wave"></div>
        </div>
          <div className='welcome-message'>
              <h1>Explore</h1>
              <div className="typewriter">Cows rumination process</div>
          </div>
          <ul className='d-flex gap-3'>
            <li className="drop-text"><h5 className='drop-text-1'>Rumination</h5></li>
            <li className="drop-text"><h5 className='drop-text-2'>Detection</h5></li>
            <li className="drop-text"><h5 className='drop-text-3'>LSTM</h5></li>
          </ul>
        </div>
        <Link to="/info">
          <div className='navigation-btn'>
            <GrFormNextLink className='next-btn'/>
          </div>
        </Link>
        
    </div>
  )
}

export default Homepage