import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';

export default function Home() {
  const currentYear = `© ${new Date().getFullYear()}`;
  return (
    <div className='container'>
      <Head>
        {/* TODO: Add media cards */}
        <title>timmybytes</title>
        <link rel='icon' href='/favicon.ico' />
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
      <main>
        <div className='grid'>
          <Link href='/posts/keeping-git-commit-messages-consistent-with-a-custom-template'>
            <a className='card'>
              <h3>
                Keeping Git Commit Messages Consistent with a Custom Template
              </h3>
              <p>
                Create your own template to easliy guide your commit messages.
              </p>
            </a>
          </Link>
          <Link href='/posts/what-i-learned-from-100-days-of-code'>
            <a className='card'>
              <h3>What I Learned From 100 Days of Code</h3>
              <p>
                Some of what I learned after completing my first #100DaysOfCode
                challenge.
              </p>
            </a>
          </Link>
          <Link href='/posts/keeping-git-commit-messages-consistent-with-a-custom-template'>
            <a className='card'>
              <h3>
                Keeping Git Commit Messages Consistent with a Custom Template
              </h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
          <Link href='/posts/keeping-git-commit-messages-consistent-with-a-custom-template'>
            <a className='card'>
              <h3>
                Keeping Git Commit Messages Consistent with a Custom Template
              </h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
          <Link href='/posts/keeping-git-commit-messages-consistent-with-a-custom-template'>
            <a className='card'>
              <h3>
                Keeping Git Commit Messages Consistent with a Custom Template
              </h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
        </div>
      </main>
      <footer>Made by Timothy Merritt, {currentYear}</footer>
    </div>
  );
}
