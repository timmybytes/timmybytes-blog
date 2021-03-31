import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import Footer from '../components/Footer/Footer';
import WorkPreview from '../components/WorkPreview/WorkPreview';
import BlogPreview from '../components/BlogPreview/BlogPreview';
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
      <main className='container'>
        <Intro />
        <WorkPreview />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
