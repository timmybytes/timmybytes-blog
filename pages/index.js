import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const currentYear = `© ${new Date().getFullYear()}`;
  return (
    <div className='container'>
      <Head>
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

      <main>
        <header className='header'>
          <img className='header__img' src='/Logo.svg' />
          <h1 className='header__title' ariaRole='title'>
            timmybytes
          </h1>
          <h2 className='header__subheading'>a byte-sized blog</h2>
          <nav
            style={{
              display: 'flex',
              listStyleType: 'none',
              justifyContent: 'center',
            }}>
            <li>One</li>
            <li>One</li>
            <li>One</li>
          </nav>
        </header>
        <h3 className='header__description heading'>Latest posts</h3>

        <div className='grid'>
          <Link href='/posts/keeping-git-commit-messages-consistent-with-a-custom-template'>
            <a className='card'>
              <h3>
                Keeping Git Commit Messages Consistent with a Custom Template
              </h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>

          <a href='https://nextjs.org/learn' className='card'>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className='card'>
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className='card'>
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <footer>Made by Timothy Merritt, {currentYear}</footer>
    </div>
  );
}
