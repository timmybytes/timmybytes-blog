import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  console.log(allPostsData[0].title);
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
      <main className='container-gen'>
        <div
          className='card'
          style={{
            // boxShadow: '10px 10px 0 #444444',
            margin: '0 auto',
          }}>
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
        </div>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
