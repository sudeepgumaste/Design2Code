import React from 'react'

const Menu = ({Icon, name}) => {
  return (
    <div className="sidebar__menu">
      <Icon/>
      <p className="sidebar__menu__name">{name}</p>
    </div>
  )
}

export default Menu
