import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavBar from './navBar';
import HeaderRefactor from './headerRefactor';
import Nav from './nav';

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState('100%');

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  });

  return (
    <>
      <header>
        <Nav />
        {/* <NavBar /> */}
      </header>
    </>
  );
};

export default Header;
