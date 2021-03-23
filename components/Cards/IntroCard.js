import styled from 'styled-components';
import React, { useState } from 'react';
import styles from './card.module.scss';
import Highlight from '@components/Highlight/Highlight';
import About from '@components/About/About';

const IntroHeading = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 1.4px;
  line-height: 1.1;
  padding: 1rem 0 0 0;
  margin: 0;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

const IntroCard = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section className={styles.intro_card}>
      {/* <img
        className='img-avatar rotate'
        src='/images/profile.png'
        alt='Timothy Merritt profile photo'
      /> */}
      <IntroHeading>
        Hi! I'm
        <br /> Timothy Merritt
      </IntroHeading>
      <h2 className='flexRow'>
        <Highlight color='primary'>developer</Highlight>
        <Highlight color='secondary'>designer</Highlight>
        <Highlight color='tertiary'>writer</Highlight>
        <Highlight color='quarternary'>musician</Highlight>
        <span style={{ fontSize: '200%' }}>*</span>
      </h2>
      <sub>* I'm also pretty good at LEGOs.</sub>
      <button className={styles.card__button} onClick={handleClick}>
        <strong>More About Me</strong>
      </button>
      {isClicked === true && <About />}
    </section>
  );
};

export default IntroCard;
