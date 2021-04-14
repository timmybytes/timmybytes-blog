import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Intro from '@/components/Intro/Intro';
import Footer from '@/components/Footer/Footer';
import WorkPreview from '@/components/WorkPreview/WorkPreview';
import BlogPreview from '@/components/BlogPreview/BlogPreview';

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
          <Intro />
          <h2
            style={{ marginTop: '3rem', lineHeight: '1.1' }}
            className='heading txt-center'>
            Hi! I'm Timothy Merritt
          </h2>
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
            (more being added soon), the social media links above, and{' '}
            <Link href='/Resume.pdf'>
              <a target='_blank'>my resume</a>
            </Link>
            . You can also keep up with what I'm doing by checking out{' '}
            <Link href='/blog'>
              <a>my blog</a>
            </Link>
            . Thanks for stopping by!
          </p>
        </section>
        <WorkPreview />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
