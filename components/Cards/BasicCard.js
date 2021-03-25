import styles from './card.module.scss';
import Link from 'next/link';

const BasicCard = ({ children, title, body, date, image, link }) => {
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

export default BasicCard;
