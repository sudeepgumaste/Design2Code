import React from 'react'
import DailyVisitors from './components/DailyVisitors'
import Statistics from './components/Statistics'
import Traffic from './components/Traffic'

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <DailyVisitors/>
        <Statistics />
        <Traffic />
      </div>
    </div>
  ) 
}

export default Home
