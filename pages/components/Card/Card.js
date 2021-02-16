import React from 'react';
import styles from './card.module.scss';

const Card = ({ title, body, date }) => {
  return (
    <article className={styles.card}>
      <header className={styles.card__header}>{title || 'Card Title'}</header>
      <div className={styles.card__body}>
        <p>
          {body ||
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, rem a facilis laudantium expedita reiciendis!'}
        </p>
      </div>
      <p className={styles.card__byline}>
        Published <span>{date || <em>unknown</em>}</span> by{' '}
        <a>Timothy Merritt</a>
      </p>
      <button className={styles.card__button}>
        <a>Read more!</a>
      </button>
    </article>
  );
};

export default Card;
