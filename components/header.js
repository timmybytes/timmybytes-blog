import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavBar from './navBar';

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState('100%');

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  });

  return (
    <>
      <header>
        <NavBar />
        {/* <Link href='/'> */}
        {/* <a> */}
        {/* <header className='header'> */}
        {/* <img
                className='header__img'
                style={{ width: scrollWidth }}
                src='/Logo.svg'
                alt='timmybytes logo'
              />
              <h1 className='header__title' ariaRole='title'>
                timmybytes
              </h1>
              <h2 className='header__subheading'>a byte-sized blog</h2> */}
        {/* </header> */}
        {/* </a> */}
        {/* </Link> */}
      </header>
    </>
  );
};

export default Header;
