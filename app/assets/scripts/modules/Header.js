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
              <path className="path2" fill="#979797" strokeWidth="3" stroke="#979797" d="M0 0 l1120 0" />
            </svg>
            <nav className='header__nav-outer'>
              <ul className='header__nav-inner'>
                <li className='header__nav-item'>00 Home</li>
                <li className='header__nav-item'>01 Destination</li>
                <li className='header__nav-item'>02 Crew</li>
                <li className='header__nav-item'>03 Technology</li>
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header