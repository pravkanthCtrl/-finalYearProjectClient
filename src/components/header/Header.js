import React from 'react'

const Header = ({darkMode}) => {
  return (
    <div className={darkMode?'header':'header dark'}>
        <h3>CATTLE HEALTH MONITORING BY RUMINATION DETECTION </h3>
    </div>
  )
}

export default Header
