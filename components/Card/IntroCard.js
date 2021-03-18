import React, { useState } from 'react';
import Highlight from '../Highlight/Highlight';
import { BasicCard } from './Card';
import styled from 'styled-components';
import styles from './card.module.scss';
import About from '../../pages/about';

const IntroHeading = styled.h1`
  text-align: center;
  font-size: 3rem;
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
    <BasicCard
      title={
        <>
          <img
            className='img-avatar rotate'
            src='/images/profile.png'
            alt='Timothy Merritt profile photo'
          />
          <IntroHeading>Hi! I'm Timothy Merritt</IntroHeading>
        </>
      }
      body={
        <>
          <div className='flexRow'>
            <Highlight color='primary'>developer</Highlight>
            <Highlight color='secondary'>designer</Highlight>
            <Highlight color='tertiary'>writer</Highlight>
            <Highlight color='quarternary'>musician</Highlight>*
          </div>
          <sub>
            <sub>* I'm also pretty good at LEGOs.</sub>
          </sub>
        </>
      }
      image={false}>
      <button className={styles.card__button} onClick={handleClick}>
        More About Me
      </button>
      {isClicked === true && <About />}
    </BasicCard>
  );
};

export default IntroCard;
