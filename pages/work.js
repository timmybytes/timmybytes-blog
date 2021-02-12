import Head from 'next/head';
import Link from 'next/link';
import Header from './components/Header/header';
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
            <Link href='https://timmybytes.github.io/rational-design/'>
              <a className='card'>
                <h3 style={{ fontSize: '1.5rem' }}>Rational Design</h3>
                <img
                  src='https://raw.githubusercontent.com/timmybytes/rational-design/a3bd89b918b051840fb8301c5c5cf9b9404f36fa/src/assets/rational-design-logo.svg'
                  alt='Rational Design logo'
                />
                <p>
                  A tool for creating ratio-based style systems built in React.{' '}
                </p>
              </a>
            </Link>
            <Link href='https://timmybytes.github.io/resolute-apparel'>
              <a className='card'>
                <h3 style={{ fontSize: '1.5rem' }}>Resolute Apparel</h3>
                <img
                  src='https://raw.githubusercontent.com/timmybytes/resolute-apparel/dev/src/assets/resolute-apparel-social-card.png'
                  alt='Resolute Apparel logo'
                />
                <p>
                  A full-stack e-commerce site built from React, React-Router,
                  Redux, SCSS, Firebase, and Stripe.{' '}
                </p>
              </a>
            </Link>
            <Link href='https://github.com/timmybytes/dotfiles'>
              <a className='card'>
                <h3 style={{ fontSize: '1.5rem' }}>Dotfiles</h3>
                <img
                  src='https://raw.githubusercontent.com/timmybytes/dotfiles/main/dotfiles-logo.svg'
                  alt='dotfiles logo'
                />
                <p>
                  My personal (.)dotfiles and configurations for various
                  programs and environments.{' '}
                </p>
              </a>
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
