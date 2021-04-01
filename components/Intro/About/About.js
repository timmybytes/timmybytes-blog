import React from 'react';
import Link from 'next/link';

import IconGrid from './IconGrid';
import AboutWrapper from './AboutWrapper';

const About = ({ children }) => {
  return (
    <>
      <AboutWrapper>
        <h2>Hi! I'm Tim.</h2>
        <p>
          I’m a <strong>multidisciplinarian</strong>: a maker passionate about
          exploration and experimentation in a variety of creative fields. I
          thrive on using my technical and creative skill set to solve
          challenges and pursue lifelong learning.
        </p>
        <h2>developer</h2>
        <p>
          As a developer, I create frontend applications using a variety of
          tools and frameworks, but I primarily work with React. I’m also
          partial to working with the command line and automating tasks with
          shell scripts. See some of my{' '}
          <Link href='/work'>
            <a>work</a>
          </Link>
          .
        </p>
        <p>
          I’m comfortable using the following languages, frameworks, libraries,
          and tools in a given tech stack:
        </p>
        <h3>#uses</h3>
        <IconGrid />
        <h2>designer</h2>
        <p>
          I’m passionate about clean, meaningful design to communicate ideas
          simply, and I have experience creating logos and branding, graphics,
          typographically-focused layouts, and album artwork.
          {/* TODO: Add Dribbble/Figma link here */}
        </p>
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
          performer, and recording musician. I’m currently part of Animal
          Politik as a lead songwriter, singer, and guitarist, though I tinker
          with other instrumentation too.
        </p>
        <a href='https://animalpolitik.org'>
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
