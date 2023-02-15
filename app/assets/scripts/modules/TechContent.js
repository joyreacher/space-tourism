import React from 'react'
import data from '../../data/data.json'
function TechContent() {
  return data.technology.map((item) => {
    console.log(item)
    // let name = item.name.split(' ')
    return(
      <div className='page__technology--content' >
        <div className='page__technology--main'>
        
          <div className='page__technology--menu-container'>
            <ul className="page__technology--menu">
              {
                data.technology.map((index, i) => {
                  return(
                    <li technology-index={i+1} className='page__technology--pagination-number' key={Math.floor((Math.random() * 100) + 1)}>
                      <span className='page__technology--marker'></span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </div>
          
        </div>
        
        <img className='page__technology--image' src={item.images.landscape} alt={`Image of crew member ${item.name}`} />
      </div>
    )
  })
}

export default TechContent