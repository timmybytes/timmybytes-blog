import {
  SiBabel,
  SiCss3,
  SiEslint,
  SiFigma,
  SiFirebase,
  SiGimp,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiLighthouse,
  SiNextDotJs,
  SiNodeDotJs,
  SiNpm,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiPrettier,
  SiPython,
  SiReact,
  SiReactrouter,
  SiSass,
  SiStyledComponents,
  SiVim,
  SiWebpack,
  SiWordpress,
} from 'react-icons/si';
import { IoLogoVercel } from 'react-icons/io5';
import styles from './about.module.scss';

const UseIcons = () => (
  <div className={styles.icons__wrapper}>
    <ul className={styles.icons__grid}>
      <li>
        <SiHtml5 className={`${styles.fg_primary}`} />
        <span>HTML</span>
      </li>
      <li>
        <SiCss3 className={styles.fg_secondary} />
        <span>CSS</span>
      </li>
      <li>
        <SiJavascript className={styles.fg_tertiary} />
        <span>JavaScript</span>
      </li>
      <li>
        <SiSass className={styles.fg_quaternary} />
        <span>SASS</span>
      </li>
      <li>
        <SiStyledComponents className={styles.fg_primary} />
        <span>styled-components</span>
      </li>
      <li>
        <SiReact className={styles.fg_secondary} />
        <span>React</span>
      </li>
      <li>
        <SiNextDotJs className={styles.fg_tertiary} />
        <span>Next.js</span>
      </li>
      <li>
        <SiReactrouter className={styles.fg_quaternary} />
        <span>React Router</span>
      </li>
      <li>
        <SiGnubash className={styles.fg_primary} />
        <span>Bash</span>
      </li>
      <li>
        <SiVim className={styles.fg_secondary} />
        <span>Vim</span>
      </li>
      <li>
        <SiPython className={styles.fg_tertiary} />
        <span>Python</span>
      </li>
      <li>
        <SiGit className={styles.fg_quaternary} />
        <span>Git</span>
      </li>
      <li>
        <SiNpm className={styles.fg_primary} />
        <span>NPM</span>
      </li>
      <li>
        <SiNodeDotJs className={styles.fg_secondary} />
        <span>Node</span>
      </li>
      <li>
        <SiBabel className={styles.fg_tertiary} />
        <span>ES6+/Babel</span>
      </li>
      <li>
        <SiGithub className={styles.fg_quaternary} />
        <span>GitHub</span>
      </li>
      <li>
        <SiGithubactions className={styles.fg_primary} />
        <span>GitHub Actions</span>
      </li>
      <li>
        <SiEslint className={styles.fg_secondary} />
        <span>ESLint</span>
      </li>
      <li>
        <SiPrettier className={styles.fg_tertiary} />
        <span>Prettier</span>
      </li>
      <li>
        <SiWebpack className={styles.fg_quaternary} />
        <span>Webpack</span>
      </li>
      <li>
        <SiFirebase className={styles.fg_primary} />
        <span>Firebase</span>
      </li>
      <li>
        <IoLogoVercel className={styles.fg_secondary} />
        <span>Vercel</span>
      </li>
      <li>
        <SiLighthouse className={styles.fg_tertiary} />
        <span>Lighthouse</span>
      </li>
      <li>
        <SiFigma className={styles.fg_quaternary} />
        <span>Figma</span>
      </li>
      <li>
        <SiAdobephotoshop className={styles.fg_primary} />
        <span>Photoshop</span>
      </li>
      <li>
        <SiAdobeindesign className={styles.fg_secondary} />
        <span>InDesign</span>
      </li>
      <li>
        <SiGimp className={styles.fg_tertiary} />
        <span>GIMP</span>
      </li>
      <li>
        <SiWordpress className={styles.fg_quaternary} />
        <span>Wordpress</span>
      </li>
    </ul>
  </div>
);

export default UseIcons;
