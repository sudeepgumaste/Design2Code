import React from 'react'
import SelectMenu from '../../SelectMenu'

import {Bar} from 'react-chartjs-2';

const DailyVisitors = () => {

  const data = {
    labels : ['1','2','3','4','5','6','7','8','9','10','11','12','13','15','16', '17', '18', '19', '20', '21', '22', '23', '24','25', '26', '27', '28', '29', '30', '31'],
    datasets : [
      {
        data : [12,13,15,12,16,17,14,17,12,13,15,12,16,17,14,17,12,13,15,12,16,17,14,17,12,13,15,12,16, 12],
        backgroundColor : 'rgba(21,101,216,1)',
      }
    ],
  }

  const options = {
    maintainAspectRatio: false,
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
          display: true,
          ticks: {
            stepSize : 1,
            min : 0,
            max: 20,
            beginAtZero: true,
            skip: 4,
          }
        }
      ]
    },
    tooltips: {
      callbacks: {
        title: function(tooltipItem, data) {
          let suffix = 'TH';
          const date = data['labels'][tooltipItem[0]['index']];
          if(date[date.length-1] === '1'){
            suffix = 'ST'
          }else if(date[date.length-1] === '2'){
            suffix = 'ND'
          }else if(date[date.length-1] === '3'){
            suffix = 'RD'
          }
          return `${date}${suffix} JANUARY 2018`;
        },
        label: function(tooltipItem, data) {
          return `Visitors ${data['datasets'][0]['data'][tooltipItem['index']]} k`;
        },
        afterLabel: function(tooltipItem, data) {
          
        }
      },
      backgroundColor: '#FFF',
      xPadding:15,
      yPadding:15,
      borderWidth: 1,
      borderColor:"#EAEDF4",
      titleFontSize: 12,
      titleFontColor: '#9FA0A5',
      titleFontStyle: 'regular',
      bodyFontColor: '#000',
      bodyFontSize: 12,
      titleFontFamily : 'Roboto',
      bodyFontFamily : 'Roboto',
    }
  }

  return (
    <div className="home__daily-visitors">
      <div className="home__daily-visitors__header">
        <p>
          Daily Visitiors   
        </p> 
        <SelectMenu options={["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]} style={{width:"120px", marginRight: "20px"}}/>
        <SelectMenu options={["2018", "2019", "2020"]} width="100px"/>
      </div>
      <div className="home__daily-visitors__body">
        <Bar data={data}  options={options}/>
      </div>
    </div>
  )
}

export default DailyVisitors
