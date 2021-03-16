import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Card from '../components/Card/Card';
import About from './about';
import Work from './work';
import Blog from './blog';
import styled from 'styled-components';
import { colors, helpers } from './utils';

const IntroH1 = styled.h1`
  text-align: center;
  font-size: 3rem;
  line-height: 1.1;
  padding: 1rem 0 0 0;
  margin: 0;
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

const handleColorHover = color => {
  switch (color) {
    case 'colorPrimary':
      return `background: ${colors.colorTertiary};`;
    case 'colorSecondary':
      return `background: ${colors.colorQuaternary};`;
    case 'colorTertiary':
      return `background: ${colors.colorPrimary};`;
    case 'colorQuaternary':
      return `background: ${colors.colorSecondary};`;
    case 'colorDark':
      return `background: ${colors.colorLight};`;
    case 'colorLight':
      return `background: ${colors.colorDark};`;
    default:
      return `background: ${colors.colorDark}; color: ${colors.colorLight}`;
  }
};

const Highlight = styled.span`
  background: ${({ color }) => colors[color]};
  border-radius: 4px;
  font-size: 2rem;
  margin: 5px;
  padding: 0 7px;
  transition: 0.3s;
  &:hover {
    box-shadow: 4px 4px 0 0 ${colors.colorDark};
    ${({ color }) => handleColorHover(color)};
  }
  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export default function Home({ allPostsData }) {
  return (
    <>
      <Header />
      <main className='container'>
        <section className=''>
          <img
            className='img-avatar rotate'
            src='/images/profile.png'
            alt='Timothy Merritt profile photo'
          />
          <IntroH1>Hi! I'm Timothy Merritt</IntroH1>
          <h2 className='flexRow'>
            <Highlight color='colorPrimary'>developer</Highlight>
            {' // '}
            <Highlight color='colorSecondary'>designer</Highlight>
            {' // '}
            <Highlight color='colorTertiary'>writer</Highlight>
            {' // '}
            <Highlight color='colorQuaternary'>musician</Highlight>*
          </h2>
          <sub>
            <sub>* I'm also pretty good at LEGOs.</sub>
          </sub>
        </section>
        <About />
        <Work />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
