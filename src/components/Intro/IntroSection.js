import styles from '@/components/Intro/intro-section.module.scss';
import { colors } from '@/utils/colors';
import { IoDocumentTextOutline } from 'react-icons/io5';
import {
  SiApple,
  SiCss3,
  SiDevDotTo,
  SiDribbble,
  SiGatsby,
  SiGit,
  SiGithub,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiKoFi,
  SiLinkedin,
  SiLinux,
  SiMarkdown,
  SiNextDotJs,
  SiNodeDotJs,
  SiNpm,
  SiReact,
  SiReddit,
  SiSass,
  SiStyledComponents,
  SiTwitter,
  SiTypescript,
  SiYarn,
} from 'react-icons/si';

// TODO: Combine arrays into larger nested one, along with the 'currently playing with' tech. Map more consicely.

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

const stack = [
  {
    name: 'HTML5',
    icon: <SiHtml5 />,
  },
  {
    name: 'CSS3',
    icon: <SiCss3 />,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
  },
  {
    name: 'React',
    icon: <SiReact />,
  },
  {
    name: 'Typescript',
    icon: <SiTypescript />,
  },
  {
    name: 'Node.js',
    icon: <SiNodeDotJs />,
  },
  {
    name: 'Yarn',
    icon: <SiYarn />,
  },
  {
    name: 'Gatsby',
    icon: <SiGatsby />,
  },
  {
    name: 'Styled Components',
    icon: <SiStyledComponents />,
  },
  {
    name: 'Jest',
    icon: <SiJest />,
  },
  {
    name: 'SASS/SCSS',
    icon: <SiSass />,
  },
  {
    name: 'Next.js',
    icon: <SiNextDotJs />,
  },
  {
    name: 'NPM',
    icon: <SiNpm />,
  },
  {
    name: 'MDX',
    icon: <SiMarkdown />,
  },
  {
    name: 'Git',
    icon: <SiGit />,
  },
  {
    name: 'Bash',
    icon: <SiGnubash />,
  },
  {
    name: 'macOS',
    icon: <SiApple />,
  },
  {
    name: 'Linux',
    icon: <SiLinux />,
  },
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
      <div id='aboutme' className={styles.intro_section__heading_wrapper}>
        <h2 className={styles.intro_section__heading}>
          Hi! I'm Tim, a developer.
        </h2>
      </div>
      <p>
        I’m a frontend developer who builds websites, apps, and online services.
        My background is in design, writing, and music, along with long stints
        in operational leadership roles. I like building things and solving
        weird problems! I love open-source, technology as a tool for
        progressiveness, and helping to build things that will have positive
        impacts in the community.
      </p>
      <p>✨I’m currently open to new roles and clients.✨</p>
      <p>
        You can <a href='#work'>see some of my work</a> below, or check out more
        of my projects on <a href='https://github.com/timmybytes'>GitHub</a>.
      </p>{' '}
      <p>
        I work primarily with React/Next.js, and some of the other tech I use
        is:
      </p>
      <ul className={styles.techStack}>
        {stack.map((tech, idx) => {
          return (
            <li
              key={idx}
              className={styles.techStack_item}
              style={{
                backgroundColor: palette[idx % 4],
                color: colors.dark,
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}>
              {tech.icon}
              <span style={{ color: colors.dark }}>{tech.name}</span>
            </li>
          );
        })}
      </ul>
      <p>And tech/libraries I’m currently playing with are:</p>
      <ul className={styles.techStack}>
        <li
          className={styles.techStack_item}
          style={{
            backgroundColor: palette[0],
          }}>
          <a
            href='https://vitejs.dev'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              color: colors.dark,
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}>
            <img
              src='https://vitejs.dev/logo.svg'
              width='18px'
              alt='Vite.js icon'
            />
            <span>Vite.js</span>
          </a>
        </li>
        <li
          className={styles.techStack_item}
          style={{
            backgroundColor: palette[1],
          }}>
          <a
            href='https://chakra-ui.com'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              color: colors.dark,
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}>
            <img
              src='https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logomark-colored.svg'
              width='18px'
              alt='Chakra UI icon'
            />
            <span>Chakra UI</span>
          </a>
        </li>
      </ul>
      <p>
        <a href='mailto:info@timmybytes.com'>Feel free to message me</a> for
        roles you think I might be a good fit for (though please do so only if a
        role is relevant to my listed experiences), to inquire about
        collaboration, or just to say hi!.
      </p>
    </section>
  );
};

export default IntroSection;
