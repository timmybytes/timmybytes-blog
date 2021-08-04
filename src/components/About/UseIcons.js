import React from 'react';
import {
  SiAdobecreativecloud,
  SiCss3,
  SiFigma,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiNextDotJs,
  SiNodeDotJs,
  SiNpm,
  SiReact,
  SiSass,
  SiTypescript,
} from 'react-icons/si';
import styles from './about.module.scss';

const stack = [
  {
    name: 'JavaScript',
    icon: <SiJavascript className={styles.fg_primary} />,
  },
  {
    name: 'HTML',
    icon: <SiHtml5 className={styles.fg_secondary} />,
  },
  {
    name: 'CSS',
    icon: <SiCss3 className={styles.fg_tertiary} />,
  },
  {
    name: 'Git',
    icon: <SiGit className={styles.fg_tertiary} />,
  },
  {
    name: 'Sass',
    icon: <SiSass className={styles.fg_quaternary} />,
  },
  {
    name: 'React',
    icon: <SiReact className={styles.fg_primary} />,
  },
  {
    name: 'Next.js',
    icon: <SiNextDotJs className={styles.fg_secondary} />,
  },
  {
    name: 'Node.js',
    icon: <SiNodeDotJs className={styles.fg_tertiary} />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className={styles.fg_quaternary} />,
  },
  {
    name: 'Bash',
    icon: <SiGnubash className={styles.fg_quaternary} />,
  },
  {
    name: 'NPM',
    icon: <SiNpm className={styles.fg_quaternary} />,
  },
  {
    name: 'Github',
    icon: <SiGithub className={styles.fg_quaternary} />,
  },
  {
    name: 'Github Actions',
    icon: <SiGithubactions className={styles.fg_primary} />,
  },
  {
    name: 'Figma',
    icon: <SiFigma className={styles.fg_secondary} />,
  },
  {
    name: 'Creative Cloud',
    icon: <SiAdobecreativecloud className={styles.fg_tertiary} />,
  },
];

const UseIcons = () => (
  <div className={styles.icons__wrapper}>
    <ul className={styles.icons__grid}>
      {stack.map(({ name, icon }, idx) => (
        <li key={name} className={styles.icons__item}>
          {icon}
          <span>{name}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default UseIcons;
