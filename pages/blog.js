import Head from 'next/head';
import Card from '@/components/Cards/Card';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BlogPreview from '@/components/BlogPreview/BlogPreview';

export default function Blog() {
  return (
    <>
      <Head>
        <title key='title'>timmybytes | blog</title>
      </Head>
      <Header />
      <main className='container' style={{ marginTop: '0', paddingTop: 0 }}>
        <h1
          className='heading'
          style={{
            marginTop: '5rem',
            maxWidth: '90%',
            textAlign: 'center',
            textTransform: 'lowercase',
          }}>
          blog
        </h1>
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
