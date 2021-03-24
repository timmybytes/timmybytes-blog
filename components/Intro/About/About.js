import React from 'react';
import { colors } from '@components/utils';
import Icongrid from './IconGrid';
import AboutSection from './AboutWrapper';

const About = ({ children }) => {
  return (
    <AboutSection>
      <h2>developer/designer</h2>
      <p>
        I'm a self-taught developer with a{' '}
        <span
          style={{
            background: colors.primaryLess,
            padding: '2px 4px',
            fontWeight: 700,
            borderRadius: '4px',
          }}>
          maker
        </span>{' '}
        mindset. After spending years in corporate environments where I was
        limited in how I could apply my skills as a creative to solve problems,
        I decided to pursue a more hands-on role as a developer focusing on
        frontend UIs.
      </p>
      <p>
        I pull from a varied background in how I design, code, document, and
        improve upon my work, including experience as a graphic designer,
        editor, musician, and team leader, and I love to learn! Part of the
        reason I started this blog was to learn in public, and hopefully impart
        what I've gleaned from my own journey to others who might benefit from
        it. You can see some of my work <a href='#work'>below</a>.
      </p>
      <h3>Tech Stacks</h3>
      <p>
        I'm experienced with the following tech, libraries, languages, tools,
        etc.:
      </p>
      <Icongrid />
      <h2>Music</h2>
      <p>
        Outside of development, I love to play music. You can find my work with{' '}
        <strong>Animal Politik</strong> for free or available to stream on your
        preferred music service:
      </p>
      <a href='https://animalpolitik.org'>
        <img
          className='logo'
          src='/images/LogoBlackItalic.png'
          alt='Animal Politik logo'
        />
      </a>
      <h2>Writing</h2>
      <p>
        I've written academic literary criticism, comic book reviews, film
        studies, and technical analyses, but currently you can keep up with my
        writing in the <a href='#blog'>blog</a>.
      </p>
      {children}
    </AboutSection>
  );
};

export default About;
