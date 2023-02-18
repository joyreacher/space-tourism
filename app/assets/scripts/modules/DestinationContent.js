import React from 'react';
import data from '../../data/data.json'


function DestinationContent() {
  return data.destinations.map((item) =>{
    return (
      <div className='page__destination--content' key={item.name}>
        <img className="page__destination--image" src={item.images.webp} alt="Moon" />
        <div className='page__destination--menu-container-outer'>
          <div className="page__destination--menu-container">
            <ul className="page__destination--menu">
              <li destination-index="1" aria-label="Destination 1" className="page__destination--pagination-number">
                Moon
                <span className="page__destination--marker"></span>
              </li>
              <li destination-index="2" aria-label="Destination 2" className="page__destination--pagination-number">
                Mars
                <span className="page__destination--marker"></span>
              </li>
              <li destination-index="3" aria-label="Destination 3" className="page__destination--pagination-number">
                Europa
                <span className="page__destination--marker"></span>
              </li>
              <li destination-index="4" aria-label="Destination 4" className="page__destination--pagination-number">
                Titan
                <span className="page__destination--marker"></span>
              </li>
            </ul>
          </div>
          <div className="page__destination--main">
            <h1 className='page__destination--main-title'>{item.name.toUpperCase()}</h1>
            <p className="page__destination--description">{item.description}</p>
            <svg className="page__destination--line" version="1.1" x="0px" y="0px" >
                <path  strokeWidth="2.3" d="M0 0 l1120 0" />
              </svg>
            <div className="page__destination--details-container">
              <div className="page__destination--details-1">
                <h1 className="page__destination--title-distance">AVG DISTANCE</h1>
                <p className="page__destination--text-distance">{item.distance}</p>
              </div>
              <div className="page__destination--details-2">
                <h1 className="page__destination--title-travel">EST. TRAVEL TIME</h1>
                <p className="page__destination--text-travel">{item.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  
  })
}

export default DestinationContent