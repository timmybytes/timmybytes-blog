import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import { BasicCard } from '../components/Card/Card';

export default function Work({ allPostsData }) {
  return (
    <>
      <Head>
        <title>timmybytes</title>
        <meta name='title' content='timmybytes' />
        <meta
          name='description'
          content="Timothy Merritt's developer portfolio and blog"
        />
        <link rel='icon' href='/favicon.ico' />
        {/* Open graph */}
        <meta property='og:title' content='timmybytes' />
        <meta
          property='og:description'
          content="Timothy Merritt's development portfolio and blog"
        />
        <meta property='og:url' content='https://timmybytes.com' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='../public/images/SocialCard.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='647' />
        <meta property='og:image:alt' content='The timmybytes logo' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:image'
          content='../public/images/SocialCard.png'
        />
        <meta property='twitter:creator' content='@timmybytes' />
        {/* <link
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
        /> */}
      </Head>
      <Header />
      <div className='container'>
        <h2 className='heading'>Work</h2>
        <main>
          <section className='grid'>
            <BasicCard
              title='Rational Design'
              body='A tool for creating ratio-based style systems built in React.'
              link='https://github.com/timmybytes/rational-design'
              image='https://raw.githubusercontent.com/timmybytes/rational-design/a3bd89b918b051840fb8301c5c5cf9b9404f36fa/src/assets/rational-design-logo.svg'
            />
            <BasicCard
              title='Resolute Apparel'
              body='A full-stack e-commerce site built from React,
                  Redux, SCSS, Firebase, and Stripe.'
              link='https://github.com/timmybytes/resolute-apparel'
              image='https://raw.githubusercontent.com/timmybytes/resolute-apparel/dev/src/assets/resolute-apparel-social-card.png'
            />
            <BasicCard
              title='Dotfiles'
              body='My personal (.)dotfiles and configurations for various
                  programs and environments.'
              image='https://raw.githubusercontent.com/timmybytes/dotfiles/main/dotfiles-logo.svg'
              link='https://github.com/timmybytes/dotfiles'
            />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
