import React from 'react';
import { colors } from '../utils';
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
    .ap_logo {
      border: 1px solid ${colors.dark};
      display: block;
      max-width: 100%;
      width: 90%;
      height: auto;
      margin: 1.5rem auto;
      padding: 1rem;
      transition: 0.3s;
      @media screen and (max-width: 500px) {
        padding: 0.5rem;
      }
      &:hover {
        transform: translate(-8px, -8px);
        box-shadow: 0.5px 0.5px 0 0 ${colors.dark}, 1px 1px 0 0 ${colors.dark},
          1.5px 1.5px 0 0 ${colors.dark}, 2px 2px 0 0 ${colors.dark},
          2.5px 2.5px 0 0 ${colors.dark}, 3px 3px 0 0 ${colors.dark},
          3.5px 3.5px 0 0 ${colors.dark}, 4px 4px 0 0 ${colors.dark},
          4.5px 4.5px 0 0 ${colors.dark}, 5px 5px 0 0 ${colors.dark},
          5.5px 5.5px 0 0 ${colors.dark}, 6px 6px 0 0 ${colors.dark},
          6.5px 6.5px 0 0 ${colors.dark}, 7px 7px 0 0 ${colors.dark},
          7.5px 7.5px 0 0 ${colors.dark}, 8px 8px 0px ${colors.dark};
        @media screen and (max-width: 500px) {
          box-shadow: 0.5px 0.5px 0 0 ${colors.dark}, 1px 1px 0 0 ${colors.dark},
            1.5px 1.5px 0 0 ${colors.dark}, 2px 2px 0 0 ${colors.dark},
            2.5px 2.5px 0 0 ${colors.dark}, 3px 3px 0 0 ${colors.dark},
            3.5px 3.5px 0 0 ${colors.dark}, 4px 4px 0 0 ${colors.dark};
          transform: translate(-4px, -4px);
        }
      }
    }
    button {
      display: block;
    }
  `;

  return <AboutSectionBody>{children}</AboutSectionBody>;
};

export default AboutWrapper;
