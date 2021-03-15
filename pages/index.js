import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Card from '../components/Card/Card';
import About from './about';
import Work from './work';
import Blog from './blog';
import styled from 'styled-components';
import { colors } from './utils';

const IntroHeading = styled.h1`
  display: block;
  font-weight: 900;
  font-size: 3rem;
  line-height: 1.3;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const HighlightSpan = styled.span`
  background: ${props => props.colorValue};
  padding: 0 5px;
  line-height: 2;
  margin: 5px;
  border: 1px solid ${colors.colorDark};
  border-radius: 4px;
  box-shadow: 2px 2px 0px 0px ${colors.colorDark};
`;

export default function Home({ allPostsData }) {
  return (
    <>
      <Header />
      <main className='container'>
        <section className='card'>
          <IntroHeading>I'm Timothy Merritt</IntroHeading>
          {/* <img
            className='img-avatar rotate'
            src='/images/profile.png'
            alt='Timothy Merritt profile photo'
          /> */}
          <h2 className='header-2'>
            <HighlightSpan colorValue={colors.colorPrimary}>
              developer
            </HighlightSpan>{' '}
            <HighlightSpan colorValue={colors.colorSecondary}>
              designer
            </HighlightSpan>
            <HighlightSpan colorValue={colors.colorTertiaryMore}>
              writer
            </HighlightSpan>
            <HighlightSpan colorValue={colors.colorQuaternary}>
              musician
            </HighlightSpan>
            *
          </h2>
          {/* <p>
            See more about me in the{' '}
            <Link href='/about'>
              <a>About</a>
            </Link>{' '}
            page, read my writing about coding and web development in the{' '}
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
            , or check out some of my featured{' '}
            <Link href='/work'>
              <a>Work</a>
            </Link>
            .
          </p>
          <p>
            I'm currently looking for new opportunities in frontend roles, so if
            you'd like to chat about what I can bring to your project, please
            contact me here!
          </p>
          <p> */}
          <About />
          <sub>
            <sub>* I'm also pretty good at LEGOs.</sub>
          </sub>
          {/* </p> */}
        </section>
        <Work />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
