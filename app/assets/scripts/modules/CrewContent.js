import React from 'react'
import data from '../../data/data.json'
function CrewContent() {
  return data.crew.map((item) => {
    let name = item.name.split(' ')
    return(
      <div className='page__crew--content' key={item.name}>
        <div className='page__crew--main'>
          <h1 className='page__crew--text-role'>{item.role.toLocaleUpperCase()}</h1>
          <h1 className='page__crew--text-name'>{item.name.toLocaleUpperCase()}</h1>
          <p className='page__crew--text-bio'>{item.bio}</p>
          <div className='page__crew--menu-container'>
            <ul className="page__crew--menu">
              {
                data.crew.map((index, i) => {
                  return(
                    <li crew-index={i+1} className='page__crew--pagination-number' key={i}>
                      <span className='page__crew--marker'></span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <svg version="1.1" className={`page__crew--line page__crew--line-${name[1].toLocaleLowerCase()}`}  x="0px" y="0px"  >
          <path className="path2"  strokeWidth="2.3" d="M0 0 l1120 0" />
        </svg>
        <img className={`page__crew--image`} id={name[1].toLocaleLowerCase()} src={`assets/images/crew/image-${name[0].toLocaleLowerCase()}-${name[1].toLocaleLowerCase()}.webp`} alt={`Image of crew member ${item.name}`} />
      </div>
    )
  })
}

export default CrewContent