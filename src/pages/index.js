import BlogPreview from '@/components/BlogPreview/BlogPreview';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import IntroSection from '@/components/Intro/IntroSection';
import WorkPreview from '@/components/WorkPreview/WorkPreview';
import Head from 'next/head';
import React from 'react';

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title key='title'>
          timmybytes | developer, designer, writer, musician
        </title>
      </Head>
      <Header />
      <main
        // style={{ background: primary }}
        className='container'>
        <IntroSection />
        <h2 className='home-section-heading'>Work</h2>
        <WorkPreview />
        <h2 className='home-section-heading'>Latest posts</h2>
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
