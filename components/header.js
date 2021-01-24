import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <Link href='/'>
      <a>
        <header className='header'>
          <img className='header__img' src='/Logo.svg' />
          <h1 className='header__title' ariaRole='title'>
            timmybytes
          </h1>
          <h2 className='header__subheading'>a byte-sized blog</h2>
        </header>
      </a>
    </Link>
  );
};

export default Header;
