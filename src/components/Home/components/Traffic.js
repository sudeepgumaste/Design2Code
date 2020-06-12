import React from 'react'

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
    visitors:'3,550'
  },{
    network: 'Facebook',
    visitors:'2,236'
  },{
    network: 'Twitter',
    visitors:'1,795'
  },{
    network: 'LinkedIn',
    visitors:'62'
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
                    <td>{data.pageName}</td>
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
            <tbody className="home__traffic__table__body">
              <tr>
                <td>Instagram</td>
                <td>3550</td>
              </tr>
              {
                socialData.map((data, index)=>(
                  <tr key={index}>
                    <td>{data.network}</td>
                    <td>{data.visitors}</td>
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
