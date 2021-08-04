import Card from '@/components/Cards/Card';

export default function Blog({ allPostsData }) {
  return (
    <>
      <div className='home-section-heading'>
        <h2>Latest posts</h2>
      </div>
      <section className='grid'>
        <Card
          title='Keeping Git Commit Messages Consistent with a Custom Template'
          body='Create your own template to easily guide your commit messages.'
          link='/posts/keeping-git-commit-messages-consistent-with-a-custom-template'
          date='1/21/2021'
        />
        <Card
          image='https://timmybytes.com/images/100DaysOfCode.png'
          title='What I Learned From 100 Days of Code'
          body='Some of what I learned after completing my first
                  #100DaysOfCode challenge.'
          link='/posts/what-i-learned-from-100-days-of-code'
          date='10/07/2020'
        />
        <Card
          image='https://timmybytes.com/images/github-actions.png'
          title='Adding CI/CD to Your Projects with GitHub Actions'
          body='Speed up and streamline your workflow with automation and code checks.'
          link='/posts/adding-ci-cd-to-your-projects-with-github-actions'
          date='1/22/2021'
        />
      </section>
    </>
  );
}
