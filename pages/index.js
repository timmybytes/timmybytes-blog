import Header from '@components/Header/Header';
import IntroCard from '@components/Cards/IntroCard';
import Footer from '@components/Footer/Footer';
import Work from './work';
import Blog from './blog';
import Head from 'next/head';

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>timmybytes</title>
      </Head>
      <Header />
      <main className='container'>
        <IntroCard />
        <Work />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
