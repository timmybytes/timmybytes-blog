import React from 'react';
import styles from './card.module.scss';
import Link from 'next/link';
import { GoCalendar } from 'react-icons/go';

const Card = ({ children, title, body, date, image, alt, link = '' }) => {
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
            alt={alt || 'gradient background'}
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
