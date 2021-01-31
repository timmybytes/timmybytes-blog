import React, { useState, useEffect } from 'react';

const Nav = () => {
  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  function useCurrentWidth() {
    let [width, setWidth] = useState(
      useEffect(() => {
        return (
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
        );
      })
    );

    useEffect(() => {
      let timeoutId = null;
      const resizeListener = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setWidth(getWidth()), 100);
      };
      window.addEventListener('resize', resizeListener);
      return () => {
        window.removeEventListener('resize', resizeListener);
      };
    }, []);
    console.log(width);
    return width;
  }

  const navClass = {
    background: '#333333',
    color: '#f7f7f7',
    position: 'fixed',
    top: '0',
    padding: '30px',
    transition: '0.3s',
    width: '100%',
  };

  return (
    <nav>
      {useCurrentWidth() > 800 ? (
        <div style={navClass}>Desktop</div>
      ) : (
        <div style={navClass}>Mobile</div>
      )}
    </nav>
  );
};

export default Nav;
