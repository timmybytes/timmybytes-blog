import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [menuHidden, setMenuHidden] = useState(true);
  const [navShow, setNavShow] = useState({ display: 'none' });

  React.useEffect(() => {
    setScreenWidth(window.innerWidth);
  });

  // /* Open */
  // function openNav() {
  //   document.getElementById('myNav').style.display = 'block';
  // }

  // /* Close */
  // function closeNav() {
  //   document.getElementById('myNav').style.display = 'none';
  // }

  return (
    <>
      {/* <button
        style={
          screenWidth > 800
            ? { display: 'none' }
            : {
                position: 'sticky',
                left: '92%',
                top: '5%',
                height: '40px',
                width: '100%',
                background: 'none',
                border: 'none',
              }
        }
        onClick={() => setMenuHidden(!menuHidden)}>
        +
      </button> */}
      <div id='myNav' className='overlay' style={navShow}>
        <a
          href='javascript:void(0)'
          className='closebtn'
          onClick={() => setNavShow({ display: 'none' })}>
          &times;
        </a>
        <div className='overlay-content'>
          <a href='#'>About</a>
          <a href='#'>Services</a>
          <a href='#'>Clients</a>
          <a href='#'>Contact</a>
        </div>
      </div>
      <button
        className='mynav-button'
        style={{
          position: 'fixed',
          height: '40px',
          top: '0',
          right: '0',
          padding: '5px 15px',
          background: '#444444',
          border: '1px solid #444444',
          color: '#f5668c',
          margin: '10px',
          borderRadius: '50px',
          cursor: 'pointer',
          boxShadow: '4px 4px 10px rgba(0,0,0,0.3)',
          fontSize: '1rem',
          fontWeight: '600',
        }}
        onClick={() => setNavShow({ display: 'block' })}>
        Menu
      </button>
    </>
  );
};

export default NavBar;
