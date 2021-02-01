import React, { useState, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';

const NavBar = () => {
  // const [screenWidth, setScreenWidth] = useState(0);
  const [menuHidden, setMenuHidden] = useState(true);
  const [navShow, setNavShow] = useState({ display: 'none' });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
    });
  });

  useEffect(() => {
    window.addEventListener('onresize', () => {
      setScreenWidth(window.innerWidth);
    });
  });

  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  function useCurrentWidth() {
    // save current window width in the state object
    // let [width, setWidth] = useState(getWidth());
    let [width, setWidth] = useState(
      useEffect(() => {
        return (
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
        );
      })
    );

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
      // timeoutId for debounce mechanism
      let timeoutId = null;
      const resizeListener = () => {
        // prevent execution of previous setTimeout
        clearTimeout(timeoutId);
        // change width from the state object after 150 milliseconds
        timeoutId = setTimeout(() => setWidth(getWidth()), 200);
      };
      window.addEventListener('resize', resizeListener);

      // clean up function
      return () => {
        window.removeEventListener('resize', resizeListener);
      };
    }, []);
    return width;
  }

  return (
    <>
      <header>
        <div
          className='header'
          style={
            useCurrentWidth() > 800 ? { display: 'flex' } : { display: 'none' }
          }>
          <div
            style={
              scrollPosition < 20
                ? {
                    alignItems: 'center',
                    background: '#fdfdfd',
                    border: '4px solid #fdfdfd',
                    display: 'flex',
                    flexDirection: 'row',
                    flexFlow: 'wrap',
                    justifyContent: 'center',
                    padding: '1.75rem 0',
                    position: 'fixed',
                    top: '.25rem',
                    // transition: '0.3s',
                    width: '100%',
                  }
                : {
                    alignItems: 'center',
                    background: '#fdfdfd',
                    border: '4px solid #fdfdfd',
                    boxShadow: '4px 4px 10px rgba(0,0,0,0.4)',
                    display: 'flex',
                    flexDirection: 'row',
                    flexFlow: 'wrap',
                    justifyContent: 'center',
                    padding: '0.25rem 0',
                    position: 'fixed',
                    top: '0',
                    // transition: '0.3s',
                    width: '100%',
                  }
            }>
            <img
              className='header__img header__full-width--logo'
              src='/Logo.svg'
              alt='timmybytes logo'
              style={
                scrollPosition < 20
                  ? {
                      width: '40%',
                      minWidth: '200px',
                      padding: '0',
                      margin: '0',
                      transition: '.1s',
                    }
                  : {
                      width: '20%',
                      minWidth: '130px',
                      padding: '0',
                      margin: '0',
                      transition: '.1s',
                    }
              }
            />
            <div className='header__full-width--links'>
              <Link href='/'>
                <a className='header__full-width--link'>Home</a>
              </Link>
              <Link href='/about'>
                <a className='header__full-width--link'>About</a>
              </Link>
              <Link href='/work'>
                <a className='header__full-width--link'>Work</a>
              </Link>
            </div>
          </div>
          <h1 className='header__title' ariaRole='title'>
            timmybytes
          </h1>
        </div>
        <div
          className='header__mobile'
          style={
            useCurrentWidth() <= 800
              ? { display: 'flex', flexDirection: 'row' }
              : { display: 'none' }
          }>
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
                    padding: '0 .75rem',
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
        </div>
      </header>
    </>
  );
};

export default NavBar;
