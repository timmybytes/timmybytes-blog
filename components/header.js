import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
