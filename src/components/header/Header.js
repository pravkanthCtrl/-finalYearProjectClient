import React from 'react'

const Header = ({darkMode}) => {
  return (
    <div className={darkMode?'header':'header dark'}>
        <h3>Cows rumination process</h3>
    </div>
  )
}

export default Header
