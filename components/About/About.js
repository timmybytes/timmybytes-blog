import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiStyledComponents,
  SiReact,
  SiGnubash,
  SiVim,
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
  SiSpotify,
  SiYoutube,
  SiApplemusic,
  SiNextDotJs,
  SiBabel,
  SiEslint,
  SiPrettier,
  SiAdobe,
  SiGimp,
  SiGithub,
  SiGithubactions,
  SiWebpack,
} from 'react-icons/si';
import { IconContext } from 'react-icons';
import { colors, PlainButton } from '@components/utils';
import styled from 'styled-components';

// const DumbAbout = () => {
//   return (
//     <>
//       <>
//         <h2 className='heading'>About Me</h2>
//         <p>
//           I’m self-taught software developer with a background in design,
//           writing, and music.
//         </p>
//         <p>I'm familiar and/or proficient with the following technologies:</p>
//         <section
//           style={{
//             display: 'flex',
//             fontSize: '1.1rem',
//             flexFlow: 'column wrap',
//             justifyContent: 'space-between',
//             alignItems: 'start',
//           }}>
//           <IconContext.Provider value={{ color: colors.colorQuaternaryMore }}>
//             <ul
//               style={{
//                 listStyleType: 'none',
//                 listStylePosition: 'inside',
//                 margin: 0,
//                 padding: 0,
//               }}>
//               <h3>Tech Stacks</h3>
//               <li>
//                 <SiHtml5 /> HTML5
//               </li>
//               <li>
//                 <SiCss3 /> CSS3
//               </li>
//               <li>
//                 <SiSass /> SASS/SCSS
//               </li>
//               <li>
//                 <SiJavascript /> JavaScript (ES6+)
//               </li>
//               <li>
//                 <SiStyledComponents /> CSS-in-JS (Styled Components, CSS
//                 Modules, etc)
//               </li>
//               <li>
//                 <SiReact /> React (w/ Hooks)
//               </li>
//               <li>
//                 <SiGnubash />
//                 <SiVim /> Bash, Zsh, Vim, and various CLI tools and shell
//                 scripting
//               </li>
//               <li>
//                 <SiGit /> Git
//               </li>
//               <li>
//                 <SiNpm /> NPM
//               </li>
//               <li>
//                 <SiNodeDotJs /> Node
//               </li>
//               <li>
//                 <SiPython /> Python
//               </li>
//               <li>
//                 CI/CD tools and workflows (linters, formatters, task runners,
//                 code checks, etc)
//               </li>
//               <li>
//                 <SiTypescript /> TypeScript (learning)
//               </li>
//               <li>
//                 <SiJest /> Jest (learning)
//               </li>
//             </ul>
//             <h3>Software</h3>
//             <ul
//               style={{
//                 listStyleType: 'none',
//                 listStylePosition: 'inside',
//                 margin: 0,
//                 padding: 0,
//               }}>
//               <li>
//                 <SiApple /> macOS
//               </li>
//               <li>
//                 <SiLinux /> Linux (mostly Debian-based flavors)
//               </li>
//               <li>
//                 <SiFigma /> Figma
//               </li>
//               <li>
//                 <SiTrello /> Trello
//               </li>
//               <li>
//                 <SiNotion /> Notion
//               </li>
//             </ul>
//           </IconContext.Provider>
//         </section>
//       </>
//     </>
//   );
// };

const IconGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  list-style: none inside;
  padding: 1rem;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  text-align: center;
  line-height: 1.1;
  li {
    background: ${colors.dark};
    border: 1px solid ${colors.dark};
    color: ${colors.colorDarker};
    border-radius: 4px;
    font-size: 2rem;
    margin: 1rem;
    padding: 0.5rem 1rem 0 1rem;
    transition: 0.3s;
    &:hover {
      box-shadow: 2px 2px 0 0 ${colors.colorDark};
    }
    @media screen and (max-width: 500px) {
      margin: 0.5rem;
      padding: 0.5rem 0.5rem 0 0.5rem;
    }
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(3, auto);
  }
`;

const AboutArticle = styled.article`
  max-width: 60ch;
  h2,
  h3 {
    font-weight: 900;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin: 1.5rem auto 0 auto;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  p {
    margin: 0.25rem auto 1rem;
  }
  img {
    width: 1rem;
    height: auto;
    display: inline;
    padding: 0;
    margin: 0;
  }
  ul {
    list-style: none inside;
    padding: 1rem;
    margin: 0;
  }
  .logo {
    border: 1px solid ${colors.dark};
    display: block;
    width: 90%;
    height: auto;
    margin: 0 auto;
    padding: 1rem;
    transition: 0.3s;
    @media screen and (max-width: 500px) {
      padding: 0.5rem;
    }
    &:hover {
      box-shadow: 2px 2px 0 0 ${colors.dark};
      transform: translate(-2px, -2px);
    }
  }
`;

const About = () => {
  return (
    <AboutArticle>
      <h2>About Me</h2>
      <p>
        I'm a self-taught developer with a 'maker' mindset. After spending years
        in corporate environments where I was limited in how I could apply my
        skills as a creative to solve problems, I decided to pursue a more
        hands-on role as a developer focusing on frontend UIs.
      </p>
      <p>
        I pull from a varied background in how I design, code, document, and
        improve upon my work, including experience as a graphic designer,
        editor, musician, and team leader, and I love to learn! Part of the
        reason I started this blog was to learn in public, and hopefully impart
        what I've gleaned from my own journey to others who might benefit from
        it.
      </p>
      <h3>Tech Stacks</h3>
      <p>
        I'm experienced with the following technologies, libraries, languages,
        etc.:
      </p>
      {/* prettier-ignore */}
      <IconGrid>
        <IconContext.Provider value={{ color: colors.primaryLess }}>
          <li><SiHtml5 /></li>
          <li><SiCss3 /></li>
          <li><SiJavascript /></li>
          <li><SiSass /></li>
          <li><SiStyledComponents /></li>
          <li><SiReact /></li>
          <li><SiNextDotJs /></li>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: colors.secondary }}>
          <li><SiGnubash /></li>
          <li><SiPython /></li>
          <li><SiGit /></li>
          <li><SiNpm /></li>
          <li><SiNodeDotJs /></li>
          <li><SiBabel /></li>
          <li><SiGithubactions /></li>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: colors.tertiary }}>
          <li><SiGithub /></li>
          <li><SiEslint /></li>
          <li><SiPrettier /></li>
          <li><SiWebpack /></li>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: colors.quarternaryLess }}>
          <li><SiFigma /></li>
          <li><SiAdobe /></li>
          <li><SiGimp /></li>
          <li><SiLinux /></li>
          <li><SiApple /></li>
        </IconContext.Provider>
      </IconGrid>
      <h3>Music</h3>
      <p>
        Outside of development, I love to play music. You can find my work with
        Animal Politik for free or available to stream on your preferred music
        service:
      </p>
      <a href='https://animalpolitik.org'>
        <img
          className='logo'
          src='/images/LogoBlackItalic.png'
          alt='Animal Politik logo'
        />
      </a>
    </AboutArticle>
  );
};

export default About;
