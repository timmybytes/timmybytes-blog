import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Layout from '../components/layout';
import { useAppContext } from '../contexts/AppContext';

const About = () => {
  return (
    <>
      {/* <Header /> */}
      <main className='container-gen'>
        {/* <section className='card'> */}
        <img
          className='img-avatar rotate'
          // src='/images/profile.png'
          src='/images/profile.png'
          alt='Timothy Merritt profile photo'
        />
        <h1 className='header-1 txtthick center'>Hi! I'm Timothy Merritt</h1>
        <h2 className='header-2 txtlower center'>
          a <span className='primary'>developer</span>,{' '}
          <span className='secondary'>designer</span>,{' '}
          <span className='tertiary-more'>writer</span>, and{' '}
          <span className='quaternary'>musician</span>.*
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
          If you’re interested is speaking with me please feel free to send a
          message through my{' '}
          <Link href='/contact'>
            <a>Contact page</a>
          </Link>
          , or connect with me on{' '}
          <a href='https://www.linkedin.com/in/timmybytes'>LinkedIn</a> or{' '}
          <a href='https://twitter.com/timmybytes'>Twitter</a>.
        </p>
        <p>
          <sub>* I'm also pretty good at LEGOs.</sub>
        </p>

        {/* <Link href='/'> */}
        {/* <a>&larr; Back to home</a> */}
        {/* </Link> */}
        {/* </section> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};
export default About;
