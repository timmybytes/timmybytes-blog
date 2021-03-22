import React, { useState } from 'react';
import styles from './card.module.scss';
import Link from 'next/link';
import { GoCalendar } from 'react-icons/go';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiStyledComponents,
  SiReact,
  SiGnubash,
  SiVim,
  SiV,
  SiGit,
  SiNpm,
  SiNodeDotJs,
  SiPython,
  SiFigma,
  SiApple,
  SiLinux,
  SiTypescript,
  SiJest,
  SiTrello,
  SiNotion,
} from 'react-icons/si';
import { IconContext } from 'react-icons';
import Highlight from '../Highlight/Highlight';
import styled from 'styled-components';
import About from '../../pages/about';
import { PlainButton, colors } from '../utils';

export const BasicCard = ({ children, title, body, date, image, link }) => {
  const randomImage = () => Math.floor(Math.random() * 3);
  return (
    <>
      <article className={styles.card}>
        {/* If image prop exists, use as src for BasicCard img, or fall-back on random gradient */}
        {image && (
          <img
            className={styles.card__img}
            src={
              image ||
              `/images/gradients/gradienta-unsplash-${randomImage()}.png`
            }
          />
        )}

        <div className={styles.card__header}>{title || 'Card Title'}</div>
        <div className={styles.card__body}>
          <p>
            {body ||
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, rem a facilis laudantium expedita reiciendis!'}
          </p>
        </div>

        {/* If no link provided, do not render <Link> and avoid undefined href error  */}
        {link && (
          <Link href={link} passHref>
            <a className={styles.link}>
              <button className={styles.card__button}>
                <strong>More</strong>
              </button>
            </a>
          </Link>
        )}
        {children}
      </article>
    </>
  );
};

const Card = ({ children, title, body, date, image, link = '' }) => {
  const randomImage = () => Math.floor(Math.random() * 3);
  return (
    <Link href={link} passHref>
      <article
        style={link !== '' && { cursor: 'pointer' }}
        className={styles.card}>
        <a className={styles.link}>
          <img
            className={styles.card__img}
            src={
              image ||
              `/images/gradients/gradienta-unsplash-${randomImage()}.png`
            }
          />
        </a>
        <header className={styles.card__header}>{title || 'Card Title'}</header>
        <div className={styles.card__body}>
          <p>
            {body ||
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, rem a facilis laudantium expedita reiciendis!'}
          </p>
        </div>
        <div>
          <p className={styles.card__byline}>
            Published: <GoCalendar />
            <span> {date || <em>?/?/?</em>}</span>
          </p>
        </div>
        {children}
        <a className={styles.link}>
          <button className={styles.card__button}>
            <strong>More</strong>
          </button>
        </a>
      </article>
    </Link>
  );
};

export default Card;

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

export const IntroCard = () => {
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
