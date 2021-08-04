import React from 'react';
import Link from 'next/link';
import UseIcons from './UseIcons';
import styles from './about.module.scss';

const About = ({ children }) => {
  //ℹ️ I’m a freelance software developer with a background in design, music, and writing. I’m open to new frontend-focused roles and opportunities.

  // ⚙️ My current technical skills include: HTML, CSS, SCSS/SASS, JS (ES6+), React (with Hooks, state, etc.), Next.js, TypeScript, Styled Components, CSS Modules, git, Bash, Webpack, NPM, ESLint, Prettier, Figma, Adobe XD, InDesign, and Photoshop.

  // 💻 I’m currently working on a new project with a client.
  // // 📨 If you’re interested is speaking with me please feel free to send me a message or add me to your network.
  return (
    <>
      <h2 className='heading txt-center'>about me</h2>
      <section className={styles.about__section}>
        <img
          className='rainbow-gradient-spin'
          style={{
            display: 'block',
            margin: '0 auto',
            width: '50%',
            borderRadius: '50%',
          }}
          src='/images/avatar_eyebrow-transparent.png'
          alt='Avatar image of Timothy Merritt'
        />
        <h2>Hi! I'm Tim.</h2>
        <p>
          I’m a <strong>multidisciplinarian</strong> freelance software
          developer with a background in design, music, and writing. I’m
          currently open to new frontend-focused roles and opportunities.
        </p>
        <h2>developer + designer</h2>
        <p>
          As a developer,{' '}
          <a href='https://github.com/timmybytes' target='_blank'>
            I create frontend applications using a variety of tools and
            frameworks
          </a>
          , primarily with React. I’m also partial to{' '}
          <a href='https://github.com/timmybytes/dotfiles' target='_blank'>
            working with the command line and automating tasks with shell
            scripts.
          </a>
        </p>
        <p>
          See some of my{' '}
          <Link href='/work'>
            <a>work</a>
          </Link>
          .
        </p>
        {/* <p>
          I’m comfortable using the following languages, frameworks, libraries,
          and tools in a given tech stack:
        </p> */}
        <h3>Tech Stack</h3>
        <UseIcons />
        <h2>+ writer</h2>
        <p>
          I’ve written and presented award-winning academic literary criticism,
          media reviews and studies, technical documentation, product copy, and
          blog posts over the years. You can keep up with my current writing at
          my{' '}
          <Link href='/blog'>
            <a>blog</a>
          </Link>
          .
        </p>
        <h2>+ musician</h2>
        <p>
          For nearly twenty years I’ve been a songwriter, collaborator,
          performer, and recording musician. I’m currently part of{' '}
          <a href='https://animalpolitik.org' target='_blank'>
            Animal Politik
          </a>{' '}
          as a lead songwriter, singer, and guitarist, though I tinker with
          other instrumentation too. Our music is available for free from our
          website, as well as streaming on most music subscription services.
        </p>
        <a href='https://animalpolitik.org' target='_blank'>
          <img
            className='ap_logo'
            src='/images/LogoBlackItalic.png'
            alt='Animal Politik logo'
          />
        </a>
        {children}
      </section>
    </>
  );
};

export default About;
