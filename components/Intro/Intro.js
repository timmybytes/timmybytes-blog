import {
  SiKoFi,
  SiLinkedin,
  SiDevDotTo,
  SiTwitter,
  SiDribbble,
  SiGithub,
  SiReddit,
} from 'react-icons/si';
import { IoDocumentTextOutline } from 'react-icons/io5';
import styles from './intro.module.scss';
import { colors } from '@/components/utils';

const IntroCard = () => {
  const { primary, secondary, tertiary, quaternary } = colors;

  return (
    <section className={styles.intro__grid}>
      <h1 className={styles.intro__header}>Timothy Merritt</h1>
      <div className={styles.intro__tags}>
        <span
          className={styles.intro__tags_tag}
          style={{
            background: primary,
          }}>
          developer
        </span>
        <span
          className={styles.intro__tags_tag}
          style={{
            background: secondary,
          }}>
          designer
        </span>
        <span
          className={styles.intro__tags_tag}
          style={{
            background: tertiary,
          }}>
          writer
        </span>
        <span
          className={styles.intro__tags_tag}
          style={{
            background: quaternary,
          }}>
          musician
        </span>
      </div>
      <ul className={styles.intro__social}>
        <li>
          <a href='https://twitter.com/timmybytes' target='_blank'>
            <SiTwitter style={{ background: primary }} />
          </a>
        </li>
        <li>
          <a href='https://github.com/timmybytes' target='_blank'>
            <SiGithub style={{ background: secondary }} />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/timmybytes' target='_blank'>
            <SiLinkedin style={{ background: tertiary }} />
          </a>
        </li>
        <li>
          <a href='https://dev.to/timmybytes' target='_blank'>
            <SiDevDotTo style={{ background: quaternary }} />
          </a>
        </li>
        <li>
          <a href='https://dribbble.com/timmybytes' target='_blank'>
            <SiDribbble style={{ background: primary }} />
          </a>
        </li>
        <li>
          <a href='https://ko-fi.com/O4O82TAZB' target='_blank'>
            <SiKoFi style={{ background: secondary }} />
          </a>
        </li>
        <li>
          <a href='https://reddit.com/u/timmybytes' target='_blank'>
            <SiReddit style={{ background: tertiary }} />
          </a>
        </li>
        <li>
          <a href='./Resume.pdf' target='_blank'>
            <IoDocumentTextOutline style={{ background: quaternary }} />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default IntroCard;
