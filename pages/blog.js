import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Card from '../components/Card/Card';

export default function Blog({ allPostsData }) {
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
      </Head>
      <Header />
      <div className='container'>
        <h2 className='heading'>Latest Posts</h2>
        <main>
          <section className='grid'>
            <Card
              title='Keeping Git Commit Messages Consistent with a Custom Template'
              body='Create your own template to easliy guide your commit messages.'
              link='/posts/keeping-git-commit-messages-consistent-with-a-custom-template'
              date='1/21/2021'
            />
            <Card
              title='What I Learned From 100 Days of Code'
              body='Some of what I learned after completing my first
                  #100DaysOfCode challenge.'
              link='/posts/what-i-learned-from-100-days-of-code'
              date='10/07/2020'
            />
            <Card
              title='Adding CI/CD to Your Project with GitHub Actions'
              body='Speed up and streamline your workflow with automation and code checks.'
              link='/posts/adding-ci-cd-to-your-project-with-github-actions'
              date='1/22/2021'
            />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
