import React from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import Footer from '../components/Footer/Footer';
import WorkPreview from '../components/WorkPreview/WorkPreview';
import BlogPreview from '../components/BlogPreview/BlogPreview';
import About from '../components/Intro/About/About';
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
        <Intro />
        <section id='about' className={styles.intro_card}>
          <h2 className='heading txt-center'>about</h2>
          <About />
        </section>
        <WorkPreview />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
