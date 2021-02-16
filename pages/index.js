import Head from 'next/head';
import Link from 'next/link';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Card from './components/Card/Card';
import utilStyles from './components/styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>timmybytes</title>
        <link rel='icon' href='/favicon.ico' />
        {/* TODO: Add preload fonts */}
        {/* TODO: Add social cards */}
        <link
          rel='preload'
          href='/fonts/HK-Grotesk/HKGrotesk-Regular.otf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/HK-Grotesk/HKGrotesk-Italic.ttf'
          as='font'
          crossOrigin=''
        />
      </Head>
      <Header />
      <main className='container'>
        <div>
          <section className='card'>
            <h2 className='header-2'>
              Hi! I'm Timothy Merritt, a{' '}
              <span className='primary'>developer</span>,{' '}
              <span className='secondary'>designer</span>,{' '}
              <span className='tertiary-more'>writer</span>, and{' '}
              <span className='quaternary'>musician</span>*
            </h2>
            <p>
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
              I'm currently looking for new opportunities in frontend roles, so
              if you'd like to chat about what I can bring to your project,
              please contact me here!
            </p>
            <p>
              <sub>
                <sub>* I'm also pretty good at LEGOs.</sub>
              </sub>
            </p>
          </section>
        </div>
        <Card />
        {/* <section
          style={{
            background: '#f5668c',
            width: '100%',
          }}>
          <h2 className='header-2 center'>Blog</h2>
          <article className='grid'>
            {allPostsData.map(({ id, date, title }) => (
              <div className='card' key={id}>
                <h3>{title}</h3>
                <br />
                <sub>{id}</sub>
                <br />
                <sub>{date}</sub>
              </div>
            ))}
          </article>
        </section> */}
      </main>

      <Footer />
    </>
  );
}
