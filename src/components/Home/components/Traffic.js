import React from 'react'

import {ReactComponent as LinkIcon} from "../../../assets/icons/mdi_link.svg";
import ProgressBar from "../../ProgressBar";

const visitsData = [
  {
    pageName : '/store/',
    visitors : '4,890',
    uniquePageVisits : '3,985',
    bounceRate : '81.56%'
  },{
    pageName : '/store/symbols-styleguides',
    visitors : '3,785',
    uniquePageVisits : '3,182',
    bounceRate : '62.56%'
  },{
    pageName : '/store/dashboard-ui-kit',
    visitors : '2,985',
    uniquePageVisits : '2,115',
    bounceRate : '58.76%'
  },{
    pageName : '/store/webflow-cards.html',
    visitors : '2, 440',
    uniquePageVisits : '1,789',
    bounceRate : '39.59%'
  },
]

const socialData = [
  {
    network: 'Instagram',
    visitors:'3,550',
    percentage: 90
  },{
    network: 'Facebook',
    visitors:'2,236',
    percentage: 75
  },{
    network: 'Twitter',
    visitors:'1,795',
    percentage: 50
  },{
    network: 'LinkedIn',
    visitors:'62',
    percentage: 10
  },
]

const Traffic = () => {
  return (
    <div className="home__traffic">
      <div className="home__traffic__visited">
        <div className="home__traffic__section">
          <div className="home__traffic__section__header">
            Most Visited Pages
          </div>
          <table className="home__traffic__table">
            <thead className="home__traffic__table__header">
              <th>
                Page Name
              </th>
              <th>
                Visitors
              </th>
              <th>
                Unique Page Visits
              </th>
              <th>
                Bounce Rates
              </th>
            </thead>
            <tbody className="home__traffic__table__body">
              {
                visitsData.map((data, index)=>(
                  <tr key={index}>
                    <td className="flex">{data.pageName} <a href="https://google.com"><LinkIcon/></a></td>
                    <td>{data.visitors}</td>
                    <td>{data.uniquePageVisits}</td>
                    <td>{data.bounceRate}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className="home__traffic__social">
        <div className="home__traffic__section">
          <div className="home__traffic__section__header">
            Social Media Traffic
          </div>
          <table className="home__traffic__table">
            <thead className="home__traffic__table__header">
              <th>
                Network
              </th>
              <th>
                Visitors
              </th>
            </thead>
            <tbody className="home__traffic__table__body home__traffic__table__body--social">
              {
                socialData.map((data, index)=>(
                  <tr key={index}>
                    <td>{data.network}</td>
                    <td className="flex">
                      {data.visitors}
                      <ProgressBar barWidth="120px" completionPercent={`${data.percentage}%`}/>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Traffic
