import styled from 'styled-components';
import {
  SiKoFi,
  SiLinkedin,
  SiDevDotTo,
  SiTwitter,
  SiDribbble,
  SiGithub,
} from 'react-icons/si';
import React, { useState } from 'react';
import Highlight from '../Highlight/Highlight';
import styles from './intro.module.scss';
import About from '../Intro/About/About';
import { colors } from '../utils';

const SocialLinks = styled.ul`
  align-items: center;
  display: flex;
  justify-items: stretch;
  list-style: inside none;
  margin: 1rem auto;
  padding: 1rem 0;
  li {
    & a:hover {
      border: none;
    }
    & a:visited {
      color: none;
    }
    svg {
      border-radius: 4px;
      color: ${colors.dark};
      height: auto;
      margin: 1rem;
      padding: 7px 10px;
      transition: 0.3s;
      width: 38px;
      &:hover {
        box-shadow: 4px 4px 0 0 ${colors.dark};
        transform: translate(-4px, -4px);
      }
      @media screen and (max-width: 400px) {
        margin: 0.25rem;
        padding: 2px 5px;
      }
    }
  }
`;
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
    <section id='about' className={styles.intro_card}>
      <h1>
        Timothy Merritt <br />
        <span>is a...</span>
      </h1>
      <h2 className={styles.tags}>
        <Highlight color='primary'>developer</Highlight>
        <Highlight color='secondary'>designer</Highlight>
        <Highlight color='tertiary'>writer</Highlight>
        <Highlight color='quaternary'>musician</Highlight>
      </h2>
      <button className='rainbow-gradient' onClick={handleClick}>
        <strong>{isClicked ? 'Less about me' : 'More about me'}</strong>
      </button>
      {isClicked === true && (
        <About onChange={handleClickScroll}>
          <button className='rainbow-gradient' onClick={handleClickScroll}>
            <strong>Less</strong>
          </button>
        </About>
      )}
      <SocialLinks>
        <li>
          <a href='https://twitter.com/timmybytes' target='_blank'>
            <SiTwitter style={{ background: colors.primary }} />
          </a>
        </li>
        <li>
          <a href='https://github.com/timmybytes' target='_blank'>
            <SiGithub style={{ background: colors.secondary }} />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/timmybytes' target='_blank'>
            <SiLinkedin style={{ background: colors.tertiary }} />
          </a>
        </li>
        <li>
          <a href='https://dev.to/timmybytes' target='_blank'>
            <SiDevDotTo style={{ background: colors.quaternary }} />
          </a>
        </li>
        <li>
          <a href='https://dribbble.com/timmybytes' target='_blank'>
            <SiDribbble style={{ background: colors.primary }} />
          </a>
        </li>
        <li>
          <a href='https://ko-fi.com/O4O82TAZB' target='_blank'>
            <SiKoFi style={{ background: colors.secondary }} />
          </a>
        </li>
      </SocialLinks>
    </section>
  );
};

export default IntroCard;
