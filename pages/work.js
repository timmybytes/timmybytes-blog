import Head from 'next/head';
import Link from 'next/link';
import Header from './components/header';
import Footer from './components/Footer/footer';

export default function Work({ allPostsData }) {
  return (
    <>
      <Head>
        <title>timmybytes</title>
        <link rel='icon' href='/favicon.ico' />
        {/* TODO: Add preload fonts */}
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
      <div className='container'>
        <h2>Work</h2>
        <main>
          <section className='grid'>
            <Link href='/'>
              <a className='card'>
                <h3>Project </h3>
                <p>Description</p>
              </a>
            </Link>
            <Link href='/'>
              <a className='card'>
                <h3>Project </h3>
                <p>Description</p>
              </a>
            </Link>
            <Link href='/'>
              <a className='card'>
                <h3>Project </h3>
                <p>Description</p>
              </a>
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
