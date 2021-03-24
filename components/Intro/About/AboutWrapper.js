import React from 'react';
import { colors } from '../../utils';
import styled from 'styled-components';

const AboutWrapper = ({ children }) => {
  const AboutSectionBody = styled.article`
    max-width: 60ch;
    h2,
    h3 {
      font-weight: 900;
      letter-spacing: 1.4px;
      text-transform: lowercase;
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
    ul {
      list-style: none inside;
      padding: 1rem;
      margin: 0;
    }
    .logo {
      border: 1px solid ${colors.dark};
      display: block;
      max-width: 100%;
      width: 90%;
      height: auto;
      margin: 0 auto;
      padding: 1rem;
      transition: 0.3s;
      @media screen and (max-width: 500px) {
        padding: 0.5rem;
      }
      &:hover {
        box-shadow: 4px 4px 0 0 ${colors.dark};
        transform: translate(-4px, -4px);
      }
    }
    button {
      display: block;
    }
  `;

  return <AboutSectionBody>{children}</AboutSectionBody>;
};

export default AboutWrapper;
