import React from 'react';

const Header = ({ active }) => {
  return (
    <header className='header'>
      <div className='header__container-outer'>
        <div className='header__container-inner'>
          <section className='header__section-left'>
            <img className='header__image' src="assets/images/shared/logo.svg" alt="logo" />
            
          </section>
          <section className='header__section-right'>
            <svg version="1.1" className="header__divider-line" x="0px" y="0px"  >
              <path className="path2" strokeWidth="2.3" d="M0 0 l1120 0" />
            </svg>
            <nav className='header__nav-outer'>
              <ul className='header__nav-inner'>
                <li className='header__nav-item'>
                  <span className='header__nav-item-order'>00</span> 
                  <a href="index.html" className='header__nav-item-text'>HOME</a>
                  <span className={`${active() == 'Home' ? 'header__nav-item-marker--active' : ''} header__nav-item-marker`}></span>
                </li>
                <li className='header__nav-item'>
                  <span className='header__nav-item-order'>01</span> 
                  <a href='destination-moon.html' className='header__nav-item-text'>DESTINATION</a>
                  <span className={`${active() == 'Destination' ? 'header__nav-item-marker--active' : ''} header__nav-item-marker`}></span>
                </li>
                <li className='header__nav-item'>
                  <span className='header__nav-item-order'>02</span> 
                  <a href='crew.html' className='header__nav-item-text'>CREW</a>
                  <span className={`${active() == 'Crew' ? 'header__nav-item-marker--active' : ''} header__nav-item-marker`}></span>
                  </li>
                <li className='header__nav-item'>
                  <span className='header__nav-item-order'>03</span> 
                  <a href='technology.html' className='header__nav-item-text'>TECHNOLOGY</a>
                  <span className={`${active() == 'Technology' ? 'header__nav-item-marker--active' : ''} header__nav-item-marker`}></span>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header