import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Card from '../components/Card/Card';

export default function Blog({ allPostsData }) {
  return (
    <>
      {/* <Header /> */}
      {/* <div className='container'> */}
      <h2 className='heading'>Latest Blog Posts</h2>
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
      {/* <Footer /> */}
      {/* </div> */}
    </>
  );
}
