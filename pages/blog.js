import Card from '@components/Cards/Cards';
import Head from 'next/head';

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head>
        <title>timmybytes</title>
      </Head>
      <h2 className='heading'>Latest Blog Posts</h2>
      <section className='grid'>
        <Card
          title='Keeping Git Commit Messages Consistent with a Custom Template'
          body='Create your own template to easily guide your commit messages.'
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
          title='Adding CI/CD to Your Projects with GitHub Actions'
          body='Speed up and streamline your workflow with automation and code checks.'
          link='/posts/adding-ci-cd-to-your-projects-with-github-actions'
          date='1/22/2021'
        />
      </section>
    </>
  );
}
