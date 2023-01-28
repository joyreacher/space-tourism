import React from 'react';

const Header = ({ tab }) => {
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
                  <p className='header__nav-item-text'>Home</p>
                </li>
                <li className='header__nav-item'>
                  <span className='header__nav-item-order'>01</span> 
                  <p className='header__nav-item-text'>Destination</p>
                </li>
                <li className='header__nav-item'>
                  <span className='header__nav-item-order'>02</span> 
                  <p className='header__nav-item-text'>Crew</p>
                  </li>
                <li className='header__nav-item'>
                  <span className='header__nav-item-order'>03</span> 
                  <p className='header__nav-item-text'>Technology</p>
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