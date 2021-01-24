import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import Layout from '../components/layout';

export default function About() {
  return (
    <>
      <Header />
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

      <main className='container-gen'>
        <img
          className='img-avatar rotate'
          src='/images/profile.png'
          alt='Timothy Merritt profile photo'
        />
        <h1 className='header-1 txtthick'>Hi! I'm Timothy Merritt</h1>
        <h2 className='header-2 txtlower'>
          a <span className='primary'>developer</span>,{' '}
          <span className='secondary'>designer</span>,{' '}
          <span className='tertiary-more'>writer</span>, and{' '}
          <span className='quaternary'>musician</span>.
        </h2>
        <p>
          I’m a software developer with a background in design, music, and
          critical analysis. I’m especially passionate about creating for the
          web, where I put my multidisciplinary skills to bear from concept to
          deployment. I enjoy making style guides, designing mock- ups,
          developing and creating websites and web apps, and employing DevOps
          best practices in CI/CD workflows.{' '}
          <Link href='/work'>
            <a>You can see some of my work here, or view my resume.</a>
          </Link>
        </p>
        <p>
          I’m currently proficient in: HTML, CSS, SASS, JS (ES6+), React (with
          Hooks, state, etc.), git, Bash, Webpack, NPM, ESLint, Prettier, Figma,
          InDesign, and Photoshop, and I’m always learning more technologies and
          methods to improve my practices. I’m a seasoned team leader, trainer,
          mentor, and collaborator, and I'm currently looking for new
          development roles and freelance opportunities.
        </p>
        <p>
          If you’re interested is speaking with me please feel free to send a
          message through my{' '}
          <Link href='/contact'>
            <a>Contact page</a>
          </Link>
          , or connect with me on{' '}
          <a href='https://www.linkedin.com/in/timmybytes'>LinkedIn</a> or{' '}
          <a href='https://twitter.com/timmybytes'>Twitter</a>.
        </p>
        <Link href='/'>
          <a>&larr; Back to home</a>
        </Link>
      </main>
      <Footer />
    </>
  );
}
