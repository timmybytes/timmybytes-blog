import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from './navBar';

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  React.useEffect(() => {
    setScreenWidth(window.innerWidth);
  });

  return (
    <>
      <NavBar />
      <header>
        <nav
          className='navbar'
          style={
            // screenWidth <= 800 ? { position: 'relative', top: '-100px' } : {}
            screenWidth <= 800 ? { display: 'none' } : {}
          }>
          <div className='button-primary'>
            <Link href='/about'>
              <a className=''>About</a>
            </Link>
          </div>
          <div className='button-secondary'>
            <Link href='/work'>
              <a className=''>Work</a>
            </Link>
          </div>
          <div className='button-tertiary'>
            <Link href='/contact'>
              <a className=''>Contact</a>
            </Link>
          </div>
        </nav>
        <Link href='/'>
          <a>
            <header className='header'>
              <img
                className='header__img'
                src='/Logo.svg'
                alt='timmybytes logo'
              />
              <h1 className='header__title' ariaRole='title'>
                timmybytes
              </h1>
              <h2 className='header__subheading'>a byte-sized blog</h2>
            </header>
          </a>
        </Link>
      </header>
    </>
  );
};

export default Header;
