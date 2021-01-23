import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <div className='container'>
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
                  Some of what I learned after completing my first
                  #100DaysOfCode challenge.
                </p>
              </a>
            </Link>
            <Link href='/posts/adding-ci-cd-to-your-project-with-github-actions'>
              <a className='card'>
                <h3>Adding CI/CD to Your Project with GitHub Actions</h3>
                <p>
                  Speed up and streamline your workflow with automation and code
                  checks.
                </p>
              </a>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
