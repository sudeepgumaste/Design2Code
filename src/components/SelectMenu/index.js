import React, {useState} from 'react'

import {ReactComponent as ExpandIcon} from "../../assets/icons/mdi_expand.svg"; 

const SelectMenu = ({options, width, ...props}) => {
  const [selected, setSelected] = useState(0);
  const [isOptionsTriggered, setIsOptionsTriggered] = useState(false);
  return (
    <>
      {
        isOptionsTriggered &&
        <div className="select-menu__closer" onClick={()=>setIsOptionsTriggered(false)}></div>
      }
      <div className="select-menu" style={{width}} onClick={()=>{setIsOptionsTriggered(true)}} onBlur={()=>{setIsOptionsTriggered(false)}} {...props}>
        <div className="select-menu__selected-option">
          {options[selected]}
        </div>
        <ExpandIcon/>
        {
          isOptionsTriggered &&
          <div className="select-menu__options">
            {
              options.map((Option, index)=>(
                <div key={index} className="select-menu__options__option" 
                  onClick={
                    ()=>{
                      setSelected(_=>index); 
                      queueMicrotask(()=>{
                        setIsOptionsTriggered(_=>false);
                      })
                  }}>
                  {Option}
                </div>
              ))
            }
          </div>
        }
      </div>
    </>
  )
}

export default SelectMenu
