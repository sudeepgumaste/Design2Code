import React from 'react'

import {ReactComponent as IncreaseIcon} from "../../../assets/icons/mdi_trending_up.svg";
import {ReactComponent as DecreaseIcon} from "../../../assets/icons/mdi_trending_down.svg";

const Statistics = () => {
  return (
    <div className="home__statistics">
      <div className="home__statistics__section">
        <div className="home__statistics__section__header">
          Realtime Users
        </div>
        <div className="home__statistics__section__counter">
          56
        </div>
        <div className="home__statistics__section__change up">
          +9.8 %
          <IncreaseIcon />
        </div>
      </div>
      <div className="home__statistics__section">
        <div className="home__statistics__section__header">
          Total Users
        </div>
        <div className="home__statistics__section__counter">
          54,598
        </div>
        <div className="home__statistics__section__change down">
          -11.9 %
          <DecreaseIcon />
        </div>
      </div>
      <div className="home__statistics__section">
        <div className="home__statistics__section__header">
          Bounce Rate
        </div>
        <div className="home__statistics__section__counter">
          73.67%
        </div>
        <div className="home__statistics__section__change up">
          +12.2 %
          <IncreaseIcon />
        </div>
      </div>
      <div className="home__statistics__section">
        <div className="home__statistics__section__header">
          Visit Duration
        </div>
        <div className="home__statistics__section__counter">
          1m 4s
        </div>
        <div className="home__statistics__section__change up">
          +19.6 %
          <IncreaseIcon />
        </div>
      </div>
    </div>
  )
}

export default Statistics
