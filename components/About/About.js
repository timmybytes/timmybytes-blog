import React from 'react';
import Link from 'next/link';

import IconGrid from './IconGrid';
import AboutWrapper from './AboutWrapper';

const About = ({ children }) => {
  return (
    <>
      <h2 className='heading txt-center'>about me</h2>
      <AboutWrapper>
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
          I’m a <strong>multidisciplinarian</strong> passionate about making,
          exploring, and experimenting in a variety of creative fields.
        </p>
        <h2>developer / designer</h2>
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
          I’m passionate about clean, meaningful design to communicate ideas
          simply, and I have experience creating logos and branding, graphics,
          typographically-focused layouts, and album artwork.
        </p>
        <p>
          See some of my{' '}
          <Link href='/work'>
            <a>work</a>
          </Link>
          .
        </p>
        <p>
          I’m comfortable using the following languages, frameworks, libraries,
          and tools in a given tech stack:
        </p>
        <IconGrid />
        <h2>writer</h2>
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
        <h2>musician</h2>
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
      </AboutWrapper>
    </>
  );
};

export default About;
