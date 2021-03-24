import styled from 'styled-components';
import React, { useState } from 'react';
import Highlight from '@components/Highlight/Highlight';
import styles from './card.module.scss';
import About from '@components/About/About';
import { colors } from '../utils';

const IntroCard = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleClickScroll = () => {
    setIsClicked(!isClicked);
    window.scrollTo(0, 0);
  };

  return (
    <section
      id='about'
      className={`${styles.intro_card}

      `}>
      <h1>Timothy Merritt is a...</h1>
      <h2 className='flexRow'>
        <Highlight color='primary'>developer</Highlight>
        <Highlight color='secondary'>designer</Highlight>
        <Highlight color='tertiary'>writer</Highlight>
        <Highlight color='quarternary'>musician</Highlight>
      </h2>
      <button
        className={`${styles.card__button} rainbow-gradient`}
        onClick={handleClick}>
        <strong>{isClicked ? 'Less' : 'More'} About Me</strong>
      </button>
      {isClicked === true && (
        <About onChange={handleClickScroll}>
          <button
            className={`${styles.card__button} rainbow-gradient`}
            onClick={handleClickScroll}>
            <strong>Less About Me</strong>
          </button>
        </About>
      )}
    </section>
  );
};

export default IntroCard;
