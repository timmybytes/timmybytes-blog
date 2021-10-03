import Card from '@/components/Cards/Card'

export default function WorkPreview({ allPostsData }) {
  return (
    <>
      <div id='work' className='home-section-heading'>
        <h2>Work</h2>
      </div>
      <section className='grid'>
        <Card
          title='Banquet'
          body='A gourmet Next.js starter + boilerplate'
          link='https://github.com/timmybytes/banquet'
          image='/images/banquet-card.svg'
          alt='Banquet Logo'
        />
        <Card
          title='Rational Design'
          body='A tool for creating ratio-based style systems built in React.'
          link='https://github.com/timmybytes/rational-design'
          image='/images/rational-design-logo.svg'
          alt='Rational Design logo'
        />
        <Card
          title='Dotfiles'
          body='My personal (.)dotfiles and configurations for various
                  programs and environments.'
          image='/images/dotfiles-logo.svg'
          alt='Dotfiles logo'
        />
      </section>
    </>
  )
}
