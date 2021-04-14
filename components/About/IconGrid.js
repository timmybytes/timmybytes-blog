import {
  SiAdobe,
  SiApple,
  SiBabel,
  SiCss3,
  SiDebian,
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
  SiLinux,
  SiMacos,
  SiMarkdown,
  SiNextDotJs,
  SiNodeDotJs,
  SiNotion,
  SiNpm,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiPrettier,
  SiPython,
  SiReact,
  SiReactrouter,
  SiSass,
  SiScrutinizerci,
  SiStyledComponents,
  SiToggl,
  SiTrello,
  SiVim,
  SiVisualstudiocode,
  SiWebpack,
  SiWordpress,
} from 'react-icons/si';
import { IoLogoVercel } from 'react-icons/io5';
import { colors } from '@/components/utils';
import styled from 'styled-components';

const IconGridWrapper = styled.div`
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: -4px 0px 20px 0px ${colors.dark} inset;
  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;

const IconGridBody = styled.ul`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-between;
  justify-items: center;
  line-height: 1.1;
  list-style: none inside;
  max-height: 400px;
  overflow: scroll;
  padding: 1rem;
  text-align: center;
  li {
    background: none;
    color: ${colors.colorDarker};
    border-radius: 4px;
    font-size: 2rem;
    margin: 1rem;
    transition: 0.3s;
    svg {
      background: ${colors.dark};
      border-radius: 4px;
      padding: 0.5rem;
    }
    span {
      color: ${colors.dark};
      display: block;
      font-size: 1rem;
      font-weight: 700;
      margin: 0 auto;
      transition: 0.05s;
      width: min-content;
    }
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(3, auto);
    padding: 0;
    li {
      margin: 0.5rem;
      padding: 0;
      font-size: 1.75rem;
      span {
        font-size: 0.85rem;
      }
    }
  }
`;

const IconGrid = () => {
  return (
    <IconGridWrapper>
      <IconGridBody>
        <li>
          <SiHtml5 style={{ color: colors.primary }} />
          <span>HTML</span>
        </li>
        <li>
          <SiCss3 style={{ color: colors.secondary }} />
          <span>CSS</span>
        </li>
        <li>
          <SiJavascript style={{ color: colors.tertiary }} />
          <span>JavaScript</span>
        </li>
        <li>
          <SiSass style={{ color: colors.quaternary }} />
          <span>SASS</span>
        </li>
        <li>
          <SiStyledComponents style={{ color: colors.primary }} />
          <span>styled-components</span>
        </li>
        <li>
          <SiReact style={{ color: colors.secondary }} />
          <span>React</span>
        </li>
        <li>
          <SiNextDotJs style={{ color: colors.tertiary }} />
          <span>Next.js</span>
        </li>
        <li>
          <SiReactrouter style={{ color: colors.quaternary }} />
          <span>React Router</span>
        </li>
        <li>
          <SiGnubash style={{ color: colors.primary }} />
          <span>Bash</span>
        </li>
        <li>
          <SiVim style={{ color: colors.secondary }} />
          <span>Vim</span>
        </li>
        <li>
          <SiPython style={{ color: colors.tertiary }} />
          <span>Python</span>
        </li>
        <li>
          <SiGit style={{ color: colors.primary }} />
          <span>Git</span>
        </li>
        <li>
          <SiNpm style={{ color: colors.secondary }} />
          <span>NPM</span>
        </li>
        <li>
          <SiNodeDotJs style={{ color: colors.tertiary }} />
          <span>Node</span>
        </li>
        <li>
          <SiBabel style={{ color: colors.quaternary }} />
          <span>ES6+/Babel</span>
        </li>
        <li>
          <SiGithub style={{ color: colors.primary }} />
          <span>GitHub</span>
        </li>
        <li>
          <SiGithubactions style={{ color: colors.secondary }} />
          <span>GitHub Actions</span>
        </li>
        <li>
          <SiEslint style={{ color: colors.tertiary }} />
          <span>ESLint</span>
        </li>
        <li>
          <SiPrettier style={{ color: colors.quaternary }} />
          <span>Prettier</span>
        </li>
        <li>
          <SiWebpack style={{ color: colors.primary }} />
          <span>Webpack</span>
        </li>
        <li>
          <SiFirebase style={{ color: colors.secondary }} />
          <span>Firebase</span>
        </li>
        <li>
          <IoLogoVercel style={{ color: colors.tertiary }} />
          <span>Vercel</span>
        </li>
        <li>
          <SiLighthouse style={{ color: colors.quaternary }} />
          <span>Lighthouse</span>
        </li>
        <li>
          <SiFigma style={{ color: colors.primary }} />
          <span>Figma</span>
        </li>
        <li>
          <SiAdobephotoshop style={{ color: colors.secondary }} />
          <span>Photoshop</span>
        </li>
        <li>
          <SiAdobeindesign style={{ color: colors.tertiary }} />
          <span>InDesign</span>
        </li>
        <li>
          <SiGimp style={{ color: colors.quaternary }} />
          <span>GIMP</span>
        </li>
        <li>
          <SiWordpress style={{ color: colors.primary }} />
          <span>Wordpress</span>
        </li>
      </IconGridBody>
    </IconGridWrapper>
  );
};

export default IconGrid;
