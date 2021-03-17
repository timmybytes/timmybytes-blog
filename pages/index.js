import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Card from '../components/Card/Card';
import About from './about';
import Work from './work';
import Blog from './blog';
import Highlight from '../components/Highlight/Highlight';
import styled from 'styled-components';
import { colors, helpers } from '../components/utils';

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
            <Highlight color='colorSecondary'>designer</Highlight>
            <Highlight color='colorTertiary'>writer</Highlight>
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
