import React, { useState } from 'react';
import styles from './card.module.scss';
import Link from 'next/link';
import { GoCalendar } from 'react-icons/go';
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
      <article className={styles.card}>
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
  const [isFocused, setIsFocused] = useState(false);
  const [focusValue, setFocusValue] = useState('');

  const tabs = [
    [
      'developer',
      'I am passionate about building responsive UI/UX with modern tech stacks.',
    ],
    ['designer', 'I love designing logos and graphics for a variety of media.'],
    ['writer', 'I am an experienced copywriter and critical analyst.'],
    [
      'musician',
      'For nearly twenty years, I have recorded and released music.',
    ],
  ];

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleButtons = e => {
    setIsFocused(!isFocused);
    setFocusValue(e.target.value);
    console.log(focusValue);
    // const parentStyle = e.target.parentElement;
    // const focusShadow = `
    //   box-shadow: 0.5px 0.5px 0 0 ${colors.colorDark}, 1px 1px 0 0 ${colors.colorDark},
    //   1.5px 1.5px 0 0 ${colors.colorDark}, 2px 2px 0 0 ${colors.colorDark},
    //   2.5px 2.5px 0 0 ${colors.colorDark}, 3px 3px 0 0 ${colors.colorDark},
    //   3.5px 3.5px 0 0 ${colors.colorDark}, 4px 4px 0 0 ${colors.colorDark};transform: translate(-4px,-4px);`;
    // parentStyle.style = focusShadow;
  };

  return (
    <section className={styles.intro_card}>
      <img
        className='img-avatar rotate'
        src='/images/profile.png'
        alt='Timothy Merritt profile photo'
      />
      <IntroHeading>Hi! I'm Timothy Merritt</IntroHeading>
      <h2 className='flexRow'>
        <Highlight color='primary'>
          <PlainButton onClick={handleButtons} value={'developer'}>
            developer
          </PlainButton>
        </Highlight>
        <Highlight color='secondary'>
          <PlainButton onClick={handleButtons} value={'designer'}>
            designer
          </PlainButton>
        </Highlight>
        <Highlight color='tertiary'>
          <PlainButton onClick={handleButtons} value={'writer'}>
            writer
          </PlainButton>
        </Highlight>
        <Highlight color='quarternary'>
          <PlainButton onClick={handleButtons} value={'musician'}>
            musician
          </PlainButton>
        </Highlight>
        *
      </h2>
      {isFocused && (
        <article>
          {focusValue &&
            tabs
              .filter(value => value[0] === focusValue)
              .map(value => {
                return (
                  <>
                    <h3>{value[0]}</h3>
                    <p>{value[1]}</p>
                  </>
                );
              })}
        </article>
      )}
      <sub>
        <sub>* I'm also pretty good at LEGOs.</sub>
      </sub>
      <button className={styles.card__button} onClick={handleClick}>
        <strong>More About Me</strong>
      </button>
      {isClicked === true && <About />}
    </section>
  );
};
