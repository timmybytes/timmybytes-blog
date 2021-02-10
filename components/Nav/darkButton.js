import React, { useState } from 'react';
import style from './darkbutton.module.scss';

const DarkButton = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <button className={style.darkbutton} onClick={() => setClicked(!clicked)}>
      {clicked ? '🌞' : '🌙'}
    </button>
  );
};

export default DarkButton;
