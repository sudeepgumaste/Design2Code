import React from 'react'

import AvatarImage from "../../../assets/avatar/avatar.png"

const Avatar = () => {
  return (
    <div className="sidebar__avatar">
      <img src={AvatarImage} alt="avatar.png"/>
      <div className="sidebar__avatar__name">
        Martha Blair
        <span className="active"></span>
      </div>
      <p className="sidebar__avatar__position">
        Developer
      </p>
    </div>
  )
}

export default Avatar
