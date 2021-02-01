import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavBar from './navBar';
import HeaderRefactor from './headerRefactor';
import Nav from './nav';

const Header = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
    </>
  );
};

export default Header;
