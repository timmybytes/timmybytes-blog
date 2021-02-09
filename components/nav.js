import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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

  // FIXME: Consolidate to SASS/CSS Modules/Styled Componenets/etc
  /* Temporary inline styles */
  const nav__desktop = {
    background: '#fdfdfd',
    boxShadow: scrollPosition > 20 ? '4px 4px 5px rgba(0,0,0,0.2)' : 'none',
    color: '#444444',
    display: scrollPosition > 20 ? 'flex' : 'initial',
    justifyContent: scrollPosition > 20 ? 'space-between' : '',
    margin: '0 auto',
    padding: scrollPosition > 20 ? '10px 0 10px 0' : '30px 0 0 0',
    position: 'fixed',
    textAlign: 'center',
    top: '0',
    transition: '0.3s',
    width: '100%',
    zIndex: '1',
    img: {
      height: 'auto',
      margin: '0 auto',
      maxWidth: scrollPosition > 20 ? '250px' : '450px',
      padding: scrollPosition > 20 ? '0 10vw' : '',
      transition: '0.3s',
      width: '100%',
    },
    ul: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: scrollPosition > 20 ? 'stretch' : 'space-evenly',
      listStyle: 'none outside',
      margin: '0 auto',
      maxWidth: '450px',
      padding: scrollPosition > 20 ? '0' : '1rem 0',
      transition: '0.3s',
      li: {
        fontSize: '1.5rem',
        padding: scrollPosition > 20 ? '0 10px' : '0',
        textTransform: 'lowercase',
      },
    },
  };

  const nav__mobile = {
    alignItems: 'center',
    background: '#fdfdfd',
    boxShadow: scrollPosition > 20 ? '4px 4px 5px rgba(0,0,0,0.2)' : 'none',
    color: '#444444',
    display: 'flex',
    flexFlow: 'column wrap',
    fontSize: '2rem',
    justifyContent: 'center',
    overflow: 'scroll',
    position: 'fixed',
    top: '0',
    transition: '0.3s',
    width: '100%',
    zIndex: '1',
    div: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-between',
      width: '300.95px',
    },
    a: {
      img: {
        height: 'auto',
        margin: '0 auto',
        maxWidth: scrollPosition > 20 ? '200px' : '250px',
        padding: '10px',
        transition: '0.3s',
        width: '100%',
      },
    },
    button: {
      background: 'inherit',
      border: '0',
      cursor: 'pointer',
      fontSize: 'inherit',
      margin: '0',
      padding: '0',
      transition: '0.3s',
      // width: '15px',
    },
    ul: {
      alignItems: 'center',
      display: showMobileNav ? 'flex' : 'none',
      flexFlow: 'column wrap',
      justifyContent: 'space-evenly',
      listStyle: 'none outside',
      margin: '0 auto',
      overflowY: 'scroll',
      padding: '1rem 0',
      transition: '0.3s',
      li: {
        fontSize: '1.25rem',
        fontWeight: '900',
        marginTop: '1rem',
        textTransform: 'lowercase',
      },
    },
  };

  return (
    <>
      {getScreenWidthOnResize() > 800 ? (
        <nav style={nav__desktop}>
          <Link href='/'>
            <a>
              <img
                style={nav__desktop.img}
                src='/Logo.svg'
                alt='timmybytes logo'
              />
            </a>
          </Link>
          <ul style={nav__desktop.ul}>
            <li style={nav__desktop.ul.li}>
              <Link href='/'>
                <a>Home{'  '}</a>
              </Link>
            </li>

            <li style={nav__desktop.ul.li}>
              <Link href='/about'>
                <a>About </a>
              </Link>
            </li>

            <li style={nav__desktop.ul.li}>
              <Link href='/work'>
                <a>Work{'  '}</a>
              </Link>
            </li>

            <li style={nav__desktop.ul.li}>
              <Link href='/blog'>
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav style={nav__mobile}>
          <div style={nav__mobile.div}>
            <Link href='/'>
              <a style={nav__mobile.a} className='hoverless'>
                <img
                  style={nav__mobile.a.img}
                  src='/Logo.svg'
                  alt='timmybytes logo'
                />
              </a>
            </Link>
            <button
              style={nav__mobile.button}
              onClick={() => setShowMobileNav(!showMobileNav)}>
              {/* Toggle menu hamburger/close button */}
              {showMobileNav ? <span>&times;</span> : <span>&#9776;</span>}
            </button>
          </div>
          <ul style={nav__mobile.ul}>
            <li style={nav__mobile.ul.li}>
              <Link href='/'>
                <a>Home{'  '}</a>
              </Link>
            </li>
            <li style={nav__mobile.ul.li}>
              <Link href='/about'>
                <a>About </a>
              </Link>
            </li>
            <li style={nav__mobile.ul.li}>
              <Link href='/work'>
                <a>Work{'  '}</a>
              </Link>
            </li>
            <li style={nav__mobile.ul.li}>
              <Link href='/blog'>
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
