import React from 'react';
import styles from './card.module.scss';
import Link from 'next/link';
import { GoCalendar } from 'react-icons/go';

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

        <header className={styles.card__header}>{title || 'Card Title'}</header>
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
