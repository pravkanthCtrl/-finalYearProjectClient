import React from 'react'
import Header from '../header/Header';
import {Link} from "react-router-dom"

const Upload = () => {
  return (
    <div>
        <Header/>
        <Link to="https://1de874ae9dcd2a5f8d.gradio.live">
            <button className='btn btn-primary'>Click</button>
        </Link>

    </div>
  )
}

export default Upload