import Link from 'next/link';
import Image from 'next/image';
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
import styles from '@/components/Intro/intro-section.module.scss';

const IntroSection = () => {
  return (
    <section className={styles.intro_section}>
      <div className={styles.intro__tags_grid}>
        <h1 className={styles.intro__header}>Timothy Merritt</h1>
        <div className={styles.intro__tags}>
          <span className={`${styles.intro__tags_tag} ${styles.bg_primary}`}>
            developer
          </span>
          <span className={`${styles.intro__tags_tag} ${styles.bg_secondary}`}>
            designer
          </span>
          <span className={`${styles.intro__tags_tag} ${styles.bg_tertiary}`}>
            writer
          </span>
          <span className={`${styles.intro__tags_tag} ${styles.bg_quaternary}`}>
            musician
          </span>
        </div>
        <ul className={styles.intro__social}>
          <li>
            <a href='https://twitter.com/timmybytes' target='_blank'>
              <SiTwitter className={styles.bg_primary} />
            </a>
          </li>
          <li>
            <a href='https://github.com/timmybytes' target='_blank'>
              <SiGithub className={styles.bg_secondary} />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/timmybytes' target='_blank'>
              <SiLinkedin className={styles.bg_tertiary} />
            </a>
          </li>
          <li>
            <a href='https://dev.to/timmybytes' target='_blank'>
              <SiDevDotTo className={styles.bg_quaternary} />
            </a>
          </li>
          <li>
            <a href='https://dribbble.com/timmybytes' target='_blank'>
              <SiDribbble className={styles.bg_primary} />
            </a>
          </li>
          <li>
            <a href='https://ko-fi.com/O4O82TAZB' target='_blank'>
              <SiKoFi className={styles.bg_secondary} />
            </a>
          </li>
          <li>
            <a href='https://reddit.com/u/timmybytes' target='_blank'>
              <SiReddit className={styles.bg_tertiary} />
            </a>
          </li>
          <li>
            <a href='./Resume.pdf' target='_blank'>
              <IoDocumentTextOutline className={styles.bg_quaternary} />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.intro_section__heading_wrapper}>
        <h2 className={styles.intro_section__heading}>Hi! I'm Tim </h2>
        <Image
          className={`${styles.intro_section__avatar} rainbow-gradient-spin`}
          src='/images/avatar_eyebrow-transparent.png'
          width={75}
          height={75}
          alt="Timothy Merritt's avatar"
          priority={`true`}
        />
      </div>
      <p>
        I’m a <strong>multidisciplinarian</strong> passionate about making,
        exploring, and experimenting in a variety of creative fields.
      </p>
      <p>
        Primarily, I'm a self-taught developer transitioning careers into tech
        after falling in love with code, but
        <Link href='/about'>
          <a>
            {' '}
            I'm also a designer and graphic artist, a writer, and a musician.
          </a>
        </Link>
      </p>
      <p>
        Examples of my work can be seen on the{' '}
        <Link href='/work'>
          <a>work page</a>
        </Link>{' '}
        (more being added soon), the social media links above, and{' '}
        <Link href='/Resume.pdf'>
          <a target='_blank'>my resume</a>
        </Link>
        . You can also keep up with what I'm doing by checking out{' '}
        <Link href='/blog'>
          <a>my blog</a>
        </Link>
        . Thanks for stopping by!
      </p>
    </section>
  );
};

export default IntroSection;
