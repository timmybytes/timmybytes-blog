import styles from '@/components/Intro/intro-section.module.scss';
import { colors } from '@/utils/colors';
import { IoDocumentTextOutline } from 'react-icons/io5';
import {
  SiDevDotTo,
  SiDribbble,
  SiGithub,
  SiKoFi,
  SiLinkedin,
  SiReddit,
  SiTwitter,
} from 'react-icons/si';

const socialIcons = [
  {
    icon: <SiTwitter className={styles.bg_primary} />,
    url: 'https://twitter.com/timmybytes',
    name: 'Twitter',
  },
  {
    icon: <SiGithub className={styles.bg_secondary} />,
    url: 'https://github.com/timmybytes',
    name: 'Github',
  },
  {
    icon: <SiLinkedin className={styles.bg_tertiary} />,
    url: 'https://linkedin.com/in/timmybytes',
    name: 'LinkedIn',
  },
  {
    icon: <SiDevDotTo className={styles.bg_quaternary} />,
    url: 'https://dev.to/timmybytes',
    name: 'Dev.to',
  },
  {
    icon: <SiDribbble className={styles.bg_primary} />,
    url: 'https://dribbble.com/timmybytes',
    name: 'Dribbble',
  },
  {
    icon: <SiKoFi className={styles.bg_secondary} />,
    url: 'https://ko-fi.com/timmybytes',
    name: 'Ko-fi',
  },
  {
    icon: <SiReddit className={styles.bg_tertiary} />,
    url: 'https://www.reddit.com/user/timmybytes',
    name: 'Reddit',
  },
  {
    icon: <IoDocumentTextOutline className={styles.bg_quaternary} />,
    url: '/Resume.pdf',
    name: 'Resume',
  },
];

const techStack = [
  'HTML5',
  'CSS3',
  'Javascript (ES6+)',
  'React',
  'Next.js',
  'Gatsby',
  'Typescript',
  'Node.js',
  'NPM/Yarn',
  'MDX',
  'SASS/SCSS',
  'CSS Modules',
  'Styled Components',
  'Jest',
  'React Testing Library',
  'Bash/Zsh',
  'macOS',
  'Linux',
  'git',
];

const IntroSection = () => {
  const palette = [
    colors.primary,
    colors.secondary,
    colors.tertiary,
    colors.quaternary,
  ];

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
          {socialIcons.map(icon => (
            <li className={styles.intro__social_item} key={icon.url}>
              <a href={icon.url} target='_blank' rel='noopener noreferrer'>
                {icon.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.intro_section__heading_wrapper}>
        <h2 className={styles.intro_section__heading}>Hi!</h2>
      </div>
      <h3>I'm Tim, a frontend software developer. </h3>
      <p>
        I’m a frontend developer with a background in design, writing, and
        music, along with long stints in operational leadership roles. I like
        building things and solving weird problems!
      </p>{' '}
      <p>
        I work primarily in React-based applications, and some of the other tech
        stack(s) I use are:
      </p>
      <ul className={styles.techStack}>
        {techStack.map((tech, idx) => {
          return (
            <li
              className={`${styles.techStack_item}`}
              key={idx}
              // Alternate colors for each item based on the four colors in the palette
              style={{
                backgroundColor: palette[idx % 4],
              }}>
              {tech}
            </li>
          );
        })}
      </ul>
      <p>I’m currently playing with:</p>
      <ul className={styles.techStack}>
        <li
          className={styles.techStack_item}
          style={{ backgroundColor: palette[0] }}>
          Vite.js
        </li>
        <li
          className={styles.techStack_item}
          style={{ backgroundColor: palette[1] }}>
          Mantine UI
        </li>
      </ul>
      <p>
        If you’re looking for a developer for a website, SPA, etc., please
        contact me here. I’m currently pretty busy with a primary client, but
        I’m open to new roles/projects if it’s a good fit!
      </p>
    </section>
  );
};

export default IntroSection;
