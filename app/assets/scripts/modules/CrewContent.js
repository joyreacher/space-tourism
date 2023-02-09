import React from 'react'
import data from '../../data/data.json'
function CrewContent() {
  return data.crew.map((item) => {
    let name = item.name.split(' ')
    return(
      <div className='page__crew--content' key={item.name}>
        <div className='page__crew--main'>
          <h1>{item.role.toLocaleUpperCase()}</h1>
          <h1>{item.name}</h1>
          <p>{item.bio}</p>
          <div className='page__crew--menu-container'>
            <ul className="page__crew--menu">
              {
                data.crew.map((index, i) => {
                  return(
                    <li crew-index={i+1} className='page__crew--pagination-number' key={Math.floor((Math.random() * 100) + 1)}>
                      <span className='page__crew--marker'></span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        
        <img className='page__crew--image' src={`assets/images/crew/image-${name[0].toLocaleLowerCase()}-${name[1].toLocaleLowerCase()}.webp`} alt={`Image of crew member ${item.name}`} />
      </div>
    )
  })
}

export default CrewContent