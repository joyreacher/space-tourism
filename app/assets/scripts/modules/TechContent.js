import React from 'react'
import data from '../../data/data.json'
function TechContent() {
  return data.technology.map((item) => {
    // let name = item.name.split(' ')
    return(
      <div className='page__technology--content' key={item.name}>
        <div className='page__technology--main'>
        
          <div className='page__technology--menu-container'>
            <ul className="page__technology--menu">
              {
                data.technology.map((index, i) => {
                  return(
                    <li technology-index={i+1} className='page__technology--pagination-number' key={i+1}>
                      <span className='page__technology--marker'>{i+1}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="page__technology--copy-container">
            <p className="page__technology--copy">THE TERMINOLOGY...</p>
            <h1 className="page__technology--name">{item.name.toLocaleUpperCase()}</h1>
            <p className="page__technology--description">{item.description}</p>
          </div>
          
        </div>
        
        <img className='page__technology--image' src={item.images.portrait} alt={`Image of crew member ${item.name}`} />
      </div>
    )
  })
}

export default TechContent