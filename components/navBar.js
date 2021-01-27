import React, { useState, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [menuHidden, setMenuHidden] = useState(true);
  const [navShow, setNavShow] = useState({ display: 'none' });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
    });
  });

  useLayoutEffect(() => {
    window.addEventListener('onresize', () => {
      console.log(screenWidth);
      setScreenWidth(window.innerWidth);
    });
  });

  return (
    <>
      <div id='myNav' className='overlay' style={navShow}>
        <a
          href='javascript:void(0)'
          className='closebtn'
          onClick={() => setNavShow({ display: 'none' })}>
          &times;
        </a>
        <div className='overlay-content'>
          <Link href='/'>
            <a className=''>Home</a>
          </Link>
          <Link href='/about'>
            <a className=''>About</a>
          </Link>
          <Link href='/work'>
            <a className=''>Work</a>
          </Link>
          <Link href='/contact'>
            <a className=''>Contact</a>
          </Link>
        </div>
      </div>
      <button
        className='mynav-button'
        style={
          scrollPosition < 20
            ? {
                boxShadow: 'none',
                background: '#fdfdfd',
                border: 'none',
                color: '#444444',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '1.5rem',
                fontWeight: '600',
                width: '100%',
                height: '12%',
                position: 'fixed',
                right: '0',
                top: '0',
                transition: '0.1s',
              }
            : {
                background: '#fdfdfd',
                border: 'none',
                boxShadow: '4px 4px 10px rgba(0,0,0,0.3)',
                color: '#444444',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '1.5rem',
                fontWeight: '600',
                width: '100%',
                height: '8%',
                position: 'fixed',
                right: '0',
                top: '0',
                transition: '0.1s',
              }
        }
        onClick={() => setNavShow({ display: 'block' })}>
        <img
          className='header__img'
          style={
            scrollPosition < 20
              ? {
                  width: '20%',
                  minWidth: '200px',
                  padding: '0',
                  margin: '0',
                  transition: '0.1s',
                }
              : {
                  width: '10%',
                  minWidth: '130px',
                  padding: '0',
                  margin: '0',
                  transition: '0.1s',
                }
          }
          src='/Logo.svg'
          alt='timmybytes logo'
        />
        &#9776;
      </button>
    </>
  );
};

export default NavBar;
