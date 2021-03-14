import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Card from '../components/Card/Card';

export default function Home({ allPostsData }) {
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
      <main className='container'>
        <section className='card'>
          <h2 className='header-2'>
            Hi! I'm Timothy Merritt, a{' '}
            <span className='primary'>developer</span>,{' '}
            <span className='secondary'>designer</span>,{' '}
            <span className='tertiary-more'>writer</span>, and{' '}
            <span className='quaternary'>musician</span>*
          </h2>
          <p>
            See more about me in the{' '}
            <Link href='/about'>
              <a>About</a>
            </Link>{' '}
            page, read my writing about coding and web development in the{' '}
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
            , or check out some of my featured{' '}
            <Link href='/work'>
              <a>Work</a>
            </Link>
            .
          </p>
          <p>
            I'm currently looking for new opportunities in frontend roles, so if
            you'd like to chat about what I can bring to your project, please
            contact me here!
          </p>
          <p>
            <sub>
              <sub>* I'm also pretty good at LEGOs.</sub>
            </sub>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
