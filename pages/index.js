import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import WorkPreview from '@/components/WorkPreview/WorkPreview';
import BlogPreview from '@/components/BlogPreview/BlogPreview';
import IntroSection from '@/components/Intro/IntroSection';

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
        <IntroSection />
        <WorkPreview />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
