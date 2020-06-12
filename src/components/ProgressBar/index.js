import React from 'react'

const ProgressBar = ({barWidth, completionPercent}) =>{
  return(
    <div className="progress-bar" style={{width: barWidth}}>
      <div className="progress-bar__completed" style={{width: completionPercent}}>
      </div>
    </div>
  )
}

export default ProgressBar;