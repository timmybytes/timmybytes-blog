import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import navmobile from './navmobile.module.scss';
import navdesktop from './navdesktop.module.scss';
import DarkButton from './darkButton';

const Nav = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
    });
  });

  const setCurrentScreenWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  function getScreenWidthOnResize() {
    // Assign `screenWidth` accurate width if value is currently 0 (default), else move on.
    useEffect(() => {
      screenWidth === 0
        ? setScreenWidth(
            window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth
          )
        : null;
      // Listen for resizing events at 100ms intervals, update `screenWidth` on resize.
      let timeoutId = null;
      const resizeListener = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(
          () => setScreenWidth(setCurrentScreenWidth()),
          100
        );
      };
      window.addEventListener('resize', resizeListener);
    });
    return screenWidth;
  }

  return (
    <>
      {getScreenWidthOnResize() > 800 ? (
        <nav
          className={navdesktop.nav}
          style={
            scrollPosition > 20
              ? {
                  boxShadow: '4px 4px 5px rgba(0,0,0,0.2)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                }
              : { boxShadow: 'none', display: 'initial', padding: '30px 0 0 0' }
          }>
          <Link href='/'>
            <a>
              <img
                className={navdesktop.logo__img}
                style={
                  scrollPosition > 20
                    ? { maxWidth: '250px', padding: '0 10vw' }
                    : { maxWidth: '450px', padding: 'initial' }
                }
                src='/Logo.svg'
                alt='timmybytes logo'
              />
            </a>
          </Link>
          <ul
            className={navdesktop.links}
            style={
              scrollPosition > 20
                ? { justifyContent: 'stretch', padding: '0' }
                : { justifyContent: 'space-evenly', padding: '1rem 0' }
            }>
            <li
              className={navdesktop.link}
              style={
                scrollPosition > 20 ? { padding: '0 10px' } : { padding: '0' }
              }>
              <Link href='/'>
                <a>Home{'  '}</a>
              </Link>
            </li>

            <li
              className={navdesktop.link}
              style={
                scrollPosition > 20 ? { padding: '0 10px' } : { padding: '0' }
              }>
              <Link href='#about'>
                <a>About </a>
              </Link>
            </li>

            <li
              className={navdesktop.link}
              style={
                scrollPosition > 20 ? { padding: '0 10px' } : { padding: '0' }
              }>
              <Link href='#work'>
                <a>Work{'  '}</a>
              </Link>
            </li>

            <li
              className={navdesktop.link}
              style={
                scrollPosition > 20 ? { padding: '0 10px' } : { padding: '0' }
              }>
              <Link href='#blog'>
                <a>Blog</a>
              </Link>
            </li>
            {/* TODO: Dark Mode via Context */}
            {/* <li
              className={navdesktop.link}
              style={
                scrollPosition > 20 ? { padding: '0 10px' } : { padding: '0' }
              }>
              <DarkButton />
            </li> */}
          </ul>
        </nav>
      ) : (
        <nav
          className={navmobile.nav}
          // Show navbar shadow on scroll or when menu is open
          style={
            scrollPosition > 20 || showMobileNav
              ? { boxShadow: '4px 4px 5px rgba(0,0,0,0.2)' }
              : { boxShadow: 'none' }
          }>
          <div className={navmobile.wrapper}>
            <Link href='/'>
              <a className={navmobile.logo}>
                <img
                  className={navmobile.logo__img}
                  src='/Logo.svg'
                  alt='timmybytes logo'
                />
              </a>
            </Link>
            <button
              className={navmobile.button}
              // Toggle menu hamburger/close button icon
              onClick={() => setShowMobileNav(!showMobileNav)}>
              {showMobileNav ? <span>&times;</span> : <span>&#9776;</span>}
            </button>
          </div>
          <ul
            className={navmobile.links}
            style={showMobileNav ? { display: 'flex' } : { display: 'none' }}
            // Hide hamburger menu after link is clicked
            onClick={() => {
              setShowMobileNav(!showMobileNav);
            }}>
            <li className={navmobile.link}>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li className={navmobile.link}>
              <Link href='#about'>
                <a>About</a>
              </Link>
            </li>
            <li className={navmobile.link}>
              <Link href='#work'>
                <a>Work</a>
              </Link>
            </li>
            <li className={navmobile.link}>
              <Link href='#blog'>
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;
