import React,{useState} from 'react'

import {ReactComponent as DownArrow} from "../../../assets/icons/mdi_arrow_drop_down.svg"

const CollapsableMenu = ({Icon, name, subMenus}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`sidebar__collapsable-menu ${isActive?'active':''}`}  onClick={()=>{ setIsActive(isActive=>!isActive)}}>
      <div className={`sidebar__collapsable-menu__header ${isActive?'active':''}`}>
        <Icon/>
        <p className="sidebar__collapsable-menu__header__name">{name}</p>
        <DownArrow/>
      </div>
      <div className="sidebar__collapsable-menu__sub-menu">
        {subMenus.map((name, index)=>(
          <p key={index}>{name}</p>
        ))}
      </div>
    </div>
  )
}

export default CollapsableMenu
