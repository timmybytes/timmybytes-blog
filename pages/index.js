import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Card from '../components/Card/Card';
import About from './about';
import Work from './work';
import Blog from './blog';
import styled from 'styled-components';

const IntroHeading = styled.h1`
  font-weight: 900;
  font-size: 4rem;
  line-height: 1.3;
  text-transform: uppercase;
  padding: 1rem;
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

export default function Home({ allPostsData }) {
  return (
    <>
      <Header />
      <main className='container'>
        {/* <section className='card'> */}
        <IntroHeading>Developer, designer, writer, musician</IntroHeading>
        {/* <h2 className='header-2'> */}
        {/* Hi! I'm Timothy Merritt, a{' '} */}
        {/* <span className='primary'>developer</span>,{' '} */}
        {/* <span className='secondary'>designer</span>,{' '} */}
        {/* <span className='tertiary-more'>writer</span>, and{' '} */}
        {/* <span className='quaternary'>musician</span>* */}
        {/* </h2> */}
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
          <p>
            <sub>
              <sub>* I'm also pretty good at LEGOs.</sub>
            </sub>
          </p> */}
        {/* </section> */}
        <About />
        <Work />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
