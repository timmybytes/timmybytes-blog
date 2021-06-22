import Link from 'next/link';
import styles from './card.module.scss';

const Card = ({
  children,
  title = 'Card Title',
  body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  date,
  image,
  alt,
  // href is required for next/link; if none provided, setting as empty string prevents error
  link = '',
}) => {
  const processImage = image => {
    // Return random gradient Card image and alt if none are provided
    let randomImage = () => Math.floor(Math.random() * 3);
    return (
      <img
        className={styles.card__img}
        src={
          image || `/images/gradients/gradienta-unsplash-${randomImage()}.jpg`
        }
        alt={alt || 'card image'}
      />
    );
  };

  return (
    <article className={styles.card}>
      <Link href={link} passHref>
        <a className={styles.link}>
          {processImage(image)}
      <header className={styles.card__header}>{title}</header>
      <div className={styles.card__body}>
        <p>{body}</p>
      </div>
      {children}
        </a>
      </Link>
    </article>
  );
};

export default Card;
