import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiStyledComponents,
  SiReact,
  SiGnubash,
  SiGit,
  SiNpm,
  SiNodeDotJs,
  SiPython,
  SiFigma,
  SiTrello,
  SiNotion,
  SiNextDotJs,
  SiBabel,
  SiEslint,
  SiPrettier,
  SiAdobe,
  SiGimp,
  SiGithub,
  SiGithubactions,
  SiWebpack,
  SiDebian,
} from 'react-icons/si';
import { colors } from '@components/utils';
import styled from 'styled-components';

const IconGridBody = styled.ul`
  border-radius: 10px;
  box-shadow: -4px 0px 20px 0px ${colors.dark} inset;
  display: grid;
  grid-template-columns: repeat(4, auto);
  max-height: 400px;
  overflow: scroll;
  list-style: none inside;
  padding: 1rem;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  text-align: center;
  line-height: 1.1;
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
    @media screen and (max-width: 500px) {
      margin: 0.5rem;
      padding: 0.5rem 0.5rem 0 0.5rem;
    }
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(3, auto);
    li {
      margin: 0.5rem;
      padding: 0;
      span {
        font-size: 0.85rem;
      }
    }
  }
`;
import React from 'react';

const Icongrid = () => {
  return (
    <IconGridBody>
      <li>
        <SiHtml5 style={{ color: colors.secondaryLess }} />
        <span>HTML</span>
      </li>
      <li>
        <SiCss3 style={{ color: colors.tertiaryLess }} />
        <span>CSS</span>
      </li>
      <li>
        <SiJavascript style={{ color: colors.quarternaryLess }} />
        <span>JavaScript</span>
      </li>
      <li>
        <SiSass style={{ color: colors.primaryLess }} />
        <span>SASS</span>
      </li>
      <li>
        <SiStyledComponents style={{ color: colors.secondaryLess }} />
        <span>Styled Components</span>
      </li>
      <li>
        <SiReact style={{ color: colors.tertiaryLess }} />
        <span>React</span>
      </li>
      <li>
        <SiNextDotJs style={{ color: colors.quarternaryLess }} />
        <span>Next.js</span>
      </li>
      <li>
        <SiGnubash style={{ color: colors.secondaryLess }} />
        <span>Bash</span>
      </li>
      <li>
        <SiPython style={{ color: colors.tertiaryLess }} />
        <span>Python</span>
      </li>
      <li>
        <SiGit style={{ color: colors.quarternaryLess }} />
        <span>Git</span>
      </li>
      <li>
        <SiNpm style={{ color: colors.primaryLess }} />
        <span>NPM</span>
      </li>
      <li>
        <SiNodeDotJs style={{ color: colors.secondaryLess }} />
        <span>Node</span>
      </li>
      <li>
        <SiBabel style={{ color: colors.tertiaryLess }} />
        <span>ES6+/Babel</span>
      </li>
      <li>
        <SiGithub style={{ color: colors.secondaryLess }} />
        <span>GitHub</span>
      </li>
      <li>
        <SiGithubactions style={{ color: colors.quarternaryLess }} />
        <span>GitHub Actions</span>
      </li>
      <li>
        <SiEslint style={{ color: colors.tertiaryLess }} />
        <span>ESLint</span>
      </li>
      <li>
        <SiPrettier style={{ color: colors.quarternaryLess }} />
        <span>Prettier</span>
      </li>
      <li>
        <SiWebpack style={{ color: colors.primaryLess }} />
        <span>Webpack</span>
      </li>
      <li>
        <SiFigma style={{ color: colors.tertiaryLess }} />
        <span>Figma</span>
      </li>
      <li>
        <SiAdobe style={{ color: colors.quarternaryLess }} />
        <span>Adobe Suite</span>
      </li>
      <li>
        <SiGimp style={{ color: colors.primaryLess }} />
        <span>GIMP</span>
      </li>
      <li>
        <SiTrello style={{ color: colors.secondaryLess }} />
        <span>Trello</span>
      </li>
      <li>
        <SiNotion style={{ color: colors.tertiaryLess }} />
        <span>Notion</span>
      </li>
      <li>
        <SiDebian style={{ color: colors.primaryLess }} />
        <span>Debian</span>
      </li>
    </IconGridBody>
  );
};

export default Icongrid;
