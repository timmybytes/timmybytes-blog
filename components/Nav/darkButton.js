import React, { useState } from 'react';
import style from './darkbutton.module.scss';
import { useAppContext } from '../../contexts/AppContext';

const DarkButton = () => {
  const [clicked, setClicked] = useState(false);
  // const { isLightTheme } = useAppContext();
  const { toggleTheme } = useAppContext();

  const handleClick = () => {
    setClicked(!clicked);
    // console.log(`Light: ${isLightTheme}`);
    toggleTheme();
  };

  return (
    <button className={style.darkbutton} onClick={handleClick}>
      {clicked ? '🌞' : '🌙'}
    </button>
  );
};

export default DarkButton;
