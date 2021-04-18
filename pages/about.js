import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import About from '@/components/About/About';
import styles from '@/components/Intro/intro-section.module.scss';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title key='title'>timmybytes | about</title>
      </Head>
      <Header />
      <main className='container' style={{ marginTop: '0', paddingTop: 0 }}>
        <section id='about' className={styles.intro_card}>
          <About />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
