import Head from 'next/head';
import Link from 'next/link';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
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
        <h2>Latest Posts</h2>
        <main>
          <section className='grid'>
            <Link href='/posts/keeping-git-commit-messages-consistent-with-a-custom-template'>
              <a className='card'>
                <h3>
                  Keeping Git Commit Messages Consistent with a Custom Template
                </h3>
                <img
                  src='https://res.cloudinary.com/practicaldev/image/fetch/s--137JySGe--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/lhu9sqsut40fqhxcc6xn.png'
                  alt='colored background'
                />
                <p>
                  Create your own template to easliy guide your commit messages.
                </p>
              </a>
            </Link>
            <Link href='/posts/what-i-learned-from-100-days-of-code'>
              <a className='card'>
                <h3>What I Learned From 100 Days of Code</h3>
                <img
                  src='https://res.cloudinary.com/practicaldev/image/fetch/s--uJPlXiA5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/341pj1urw7drhgbl0qq0.jpeg'
                  alt='laptop computer'
                />
                <p>
                  Some of what I learned after completing my first
                  #100DaysOfCode challenge.
                </p>
              </a>
            </Link>
            <Link href='/posts/adding-ci-cd-to-your-project-with-github-actions'>
              <a className='card'>
                <h3>Adding CI/CD to Your Project with GitHub Actions</h3>
                <img
                  src='https://res.cloudinary.com/practicaldev/image/fetch/s--137JySGe--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/lhu9sqsut40fqhxcc6xn.png'
                  alt='colored background'
                />
                <p>
                  Speed up and streamline your workflow with automation and code
                  checks.
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
