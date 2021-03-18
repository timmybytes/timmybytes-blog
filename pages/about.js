import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiStyledComponents,
  SiReact,
  SiGnubash,
  SiVim,
  SiV,
  SiGit,
  SiNpm,
  SiNodeDotJs,
  SiPython,
  SiFigma,
  SiApple,
  SiLinux,
  SiTypescript,
  SiJest,
  SiTrello,
  SiNotion,
} from 'react-icons/si';
import { IconContext } from 'react-icons';
import { colors } from '../components/utils';

const About = () => {
  return (
    <>
      <div>
        <h2 className='heading'>About Me</h2>
        <p>
          I’m self-taught software developer with a background in design,
          writing, and music.
        </p>
        <p>I'm familiar and/or proficient with the following technologies:</p>
        <section
          style={{
            display: 'flex',
            fontSize: '1.1rem',
            flexFlow: 'column wrap',
            justifyContent: 'space-between',
            alignItems: 'start',
          }}>
          <IconContext.Provider value={{ color: colors.colorQuaternaryMore }}>
            <ul
              style={{
                listStyleType: 'none',
                listStylePosition: 'inside',
                margin: 0,
                padding: 0,
              }}>
              <h3>Tech Stacks</h3>
              <li>
                <SiHtml5 /> HTML5
              </li>
              <li>
                <SiCss3 /> CSS3
              </li>
              <li>
                <SiSass /> SASS/SCSS
              </li>
              <li>
                <SiJavascript /> JavaScript (ES6+)
              </li>
              <li>
                <SiStyledComponents /> CSS-in-JS (Styled Components, CSS
                Modules, etc)
              </li>
              <li>
                <SiReact /> React (w/ Hooks)
              </li>
              <li>
                <SiGnubash />
                <SiVim /> Bash, Zsh, Vim, and various CLI tools and shell
                scripting
              </li>
              <li>
                <SiGit /> Git
              </li>
              <li>
                <SiNpm /> NPM
              </li>
              <li>
                <SiNodeDotJs /> Node
              </li>
              <li>
                <SiPython /> Python
              </li>
              <li>
                CI/CD tools and workflows (linters, formatters, task runners,
                code checks, etc)
              </li>
              <li>
                <SiTypescript /> TypeScript (learning)
              </li>
              <li>
                <SiJest /> Jest (learning)
              </li>
            </ul>
            <h3>Software</h3>
            <ul
              style={{
                listStyleType: 'none',
                listStylePosition: 'inside',
                margin: 0,
                padding: 0,
              }}>
              <li>
                <SiApple /> macOS
              </li>
              <li>
                <SiLinux /> Linux (mostly Debian-based flavors)
              </li>
              <li>
                <SiFigma /> Figma
              </li>
              <li>
                <SiTrello /> Trello
              </li>
              <li>
                <SiNotion /> Notion
              </li>
            </ul>
          </IconContext.Provider>
        </section>
      </div>
    </>
  );
};
export default About;
