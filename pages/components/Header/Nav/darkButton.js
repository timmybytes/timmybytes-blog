import React, { useState, useContext } from 'react';
import style from './darkbutton.module.scss';
import { AppContext } from '../../../contexts/AppContext';

const DarkButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    // TODO: Add Context for theme switching
  };

  return (
    <button className={style.darkbutton} onClick={handleClick}>
      {clicked ? '🌞' : '🌙'}
    </button>
  );
};

export default DarkButton;
