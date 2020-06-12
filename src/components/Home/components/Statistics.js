import React from 'react'

import {ReactComponent as IncreaseIcon} from "../../../assets/icons/mdi_trending_up.svg";
import {ReactComponent as DecreaseIcon} from "../../../assets/icons/mdi_trending_down.svg";

import {Line} from 'react-chartjs-2';

const Statistics = () => {
  const greenData = {
    labels : ['1','2','3','4','5','6','7','8','9','10'],
    datasets : [
      {
        data : [12,13,15,12,15,15,14,15,12,13,15],
        backgroundColor : 'rgba(51,170,70,0.5)',
        borderColor : 'rgba(51,170,70,1)',
      }
    ],
  }

  const blueData = {
    labels : ['1','2','3','4','5','6','7','8','9','10','11','12'],
    datasets : [
      {
        data : [12,13,15,12,15,15,14,15,12,13,15,12,13,],
        backgroundColor : 'rgba(21,101,216,0.5)',
        borderColor : 'rgba(21,101,216,1)',
      }
    ],
  }

  const options = {
    bezierCurve: false,
    maintainAspectRatio: false,
    elements: {
      point:{
          radius: 0
      }
    },
    legend:{
      display: false
    },
    title:{
      display: false
    },
    scales:{
      xAxes:[
        {
          display: false,
          barPercentage: 0.5
        }
      ],
      yAxes:[
        {
          display: false,
          ticks: {
            min:0,
            max: 25,
            stepSize : 1,
          }
        }
      ]
    }

  }

  
  
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
        <div className="home__statistics__section__chart">
          <Line data={blueData} options={options} />
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
        <div className="home__statistics__section__chart">
          <Line data={greenData} options={options} />
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
        <div className="home__statistics__section__chart">
          <Line data={blueData} options={options} />
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
        <div className="home__statistics__section__chart">
          <Line data={greenData} options={options} />
        </div>
      </div>
    </div>
  )
}

export default Statistics
