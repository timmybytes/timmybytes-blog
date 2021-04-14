import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import Footer from '../components/Footer/Footer';
import WorkPreview from '../components/WorkPreview/WorkPreview';
import BlogPreview from '../components/BlogPreview/BlogPreview';
import About from '../components/About/About';
import styles from '../components/Intro/intro.module.scss';

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title key='title'>
          timmybytes | developer, designer, writer, musician
        </title>
      </Head>
      <Header />
      <main className='container'>
        <section style={{ margin: '0.25rem auto 1rem', maxWidth: '60ch' }}>
          {/* <h2 className='heading txt-center'>Hi! I'm Timothy Merritt</h2> */}
          <Intro />
          <p>
            I’m a <strong>multidisciplinarian</strong> passionate about making,
            exploring, and experimenting in a variety of creative fields.
          </p>
          <p>
            Primarily, I'm a self-taught developer transitioning careers into
            tech after falling in love with code, but I'm also a designer and
            graphic artist, a writer, and a musician.
          </p>
          <p>
            Examples of my work can be seen on the{' '}
            <Link href='/work'>
              <a>work page</a>
            </Link>{' '}
            (more being added soon) and the social media links above. You can
            also keep up with what I'm doing by checking out{' '}
            <Link href='/blog'>
              <a>my blog</a>
            </Link>
            . Thanks for stopping by!
          </p>
          {/* <img
            src='/favicons/safari-pinned-tab.svg'
            alt='timmybytes tb icon'
            style={{
              width: '100%',
              height: 'auto  ',
              margin: '0 auto',
              maxWidth: '100px',
            }}
          /> */}
        </section>
        {/* <section id='about' className={styles.intro_card}>
          <h2 className='heading txt-center'>about</h2>
          <About />
        </section> */}
        <WorkPreview />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
