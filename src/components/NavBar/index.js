import React from 'react'
import SelectMenu from '../SelectMenu'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__header">
        Dashboard
      </div>
      <SelectMenu options={[<p>ENG</p>, <p>ESP</p>]} width="100px"/>
    </div>
  )
}

export default Navbar
