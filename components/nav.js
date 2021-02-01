import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [showMobileNav, setShowMobileNav] = useState(false);
  // TODO: Add onScroll effect for nav to shrink to mobile style on scroll
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
    });
    console.log(scrollPosition);
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

  const handleClick = () => {
    setShowMobileNav(!showMobileNav);
  };

  // FIXME: Consolidate to SASS
  /* Temporary inline styles */
  const nav__desktop = {
    background: '#fdfdfd',
    color: '#444444',
    margin: '0 auto',
    padding: '30px 0 10px 0',
    position: 'fixed',
    textAlign: 'center',
    top: '0',
    transition: '0.3s',
    width: '100%',
    img: {
      height: 'auto',
      margin: '0 auto',
      maxWidth: '450px',
      width: '100%',
    },
    ul: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      listStyle: 'none outside',
      margin: '0 auto',
      padding: '1rem 0 0 0',
      li: {
        fontSize: '1.5rem',
        textTransform: 'lowercase',
      },
    },
  };

  const nav__mobile = {
    alignItems: 'center',
    background: '#fdfdfd',
    boxShadow: '4px 4px 5px rgba(0,0,0,0.2)',
    color: '#444444',
    display: 'flex',
    flexFlow: 'column wrap',
    fontSize: '2rem',
    justifyContent: 'center',
    position: 'fixed',
    top: '0',
    transition: '0.3s',
    width: '100%',
    zIndex: '1',
    div: {
      display: 'flex',
      flexFlow: 'row wrap',
    },
    a: {
      img: {
        height: 'auto',
        margin: '0 auto',
        maxWidth: '250px',
        padding: '10px',
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
      width: '15px',
    },
    ul: {
      alignItems: 'center',
      display: 'flex',
      flexFlow: 'column wrap',
      justifyContent: 'space-evenly',
      listStyle: 'none outside',
      margin: '2rem auto',
      padding: '1rem 0',
      li: {
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
            <button style={nav__mobile.button} onClick={handleClick}>
              {/* If hamburger clicked, show `X` to close */}
              {showMobileNav ? <span>&times;</span> : <span>&#9776;</span>}
            </button>
          </div>
          {/* If hamburger clicked, show mobile link menu */}
          {showMobileNav ? (
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
          ) : null}
        </nav>
      )}
    </>
  );
};

export default Nav;

{
  /* <div className='overlay'>
  <a
    href='javascript:void(0)'
    className='closebtn'
    onClick={() => setNavShow({ display: 'block' })}>
    &times;
  </a>
  <div>links
    <ul className='overlay-content'>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href='/work'>
          <a>Work</a>
        </Link>
      </li>
      <li>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
      </li>
    </ul>
  </div>
</div> */
}
