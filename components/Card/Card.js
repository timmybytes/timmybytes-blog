import React from 'react';
import styles from './card.module.scss';
import Link from 'next/link';
import { GoCalendar } from 'react-icons/go';

export const BasicCard = ({ title, body, date, image, link = '' }) => {
  const randomImage = () => Math.floor(Math.random() * 3);
  return (
    <Link href={link}>
      <a className={styles.link}>
        <article className={styles.card}>
          <img
            className={styles.card__img}
            src={
              image ||
              `/images/gradients/gradienta-unsplash-${randomImage()}.jpg`
            }
          />
          <header className={styles.card__header}>
            {title || 'Card Title'}
          </header>
          <div className={styles.card__body}>
            <p>
              {body ||
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, rem a facilis laudantium expedita reiciendis!'}
            </p>
          </div>
        </article>
      </a>
    </Link>
  );
};

const Card = ({ title, body, date, image, link = '' }) => {
  const randomImage = () => Math.floor(Math.random() * 3);
  return (
    <Link href={link}>
      <a className={styles.link}>
        <article className={styles.card}>
          <img
            className={styles.card__img}
            src={
              image ||
              `/images/gradients/gradienta-unsplash-${randomImage()}.jpg`
            }
          />
          <header className={styles.card__header}>
            {title || 'Card Title'}
          </header>
          <div className={styles.card__body}>
            <p>
              {body ||
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, rem a facilis laudantium expedita reiciendis!'}
            </p>
          </div>
          <p className={styles.card__byline}>
            Published: <GoCalendar />
            <span> {date || <em>?/?/?</em>}</span>
          </p>
        </article>
      </a>
    </Link>
  );
};

export default Card;
