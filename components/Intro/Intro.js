import {
  SiKoFi,
  SiLinkedin,
  SiDevDotTo,
  SiTwitter,
  SiDribbble,
  SiGithub,
} from 'react-icons/si';
import { IoDocumentTextOutline } from 'react-icons/io5';
import React, { useState } from 'react';
import Highlight from '../Highlight/Highlight';
import styles from './intro.module.scss';
import About from '../Intro/About/About';
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
      {/* <button className='rainbow-gradient' onClick={handleClick}>
        <strong>{isClicked ? 'Less about me' : 'More about me'}</strong>
      </button>
      {isClicked === true && (
        <About onChange={handleClickScroll}>
          <button className='rainbow-gradient' onClick={handleClickScroll}>
            <strong>Less</strong>
          </button>
        </About>
      )} */}
      <ul className={styles.social}>
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
        <li>
          <a href='./Resume.pdf' target='_blank'>
            <IoDocumentTextOutline style={{ background: colors.secondary }} />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default IntroCard;
