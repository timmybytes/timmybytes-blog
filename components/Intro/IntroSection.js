import Link from 'next/link';
import Image from 'next/image';
import Intro from '@/components/Intro/Intro';
import styles from '@/components/Intro/intro-section.module.scss';

const IntroSection = () => {
  return (
    <section className={styles.intro_section}>
      <Intro />
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
