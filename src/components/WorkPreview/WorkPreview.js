import Card from '@/components/Cards/Card';

export default function WorkPreview({ allPostsData }) {
  return (
    <>
      <div id='work' className='home-section-heading'>
        <h2>Work</h2>
      </div>
      <section className='grid'>
        <Card
          title='Rational Design'
          body='A tool for creating ratio-based style systems built in React.'
          link='https://github.com/timmybytes/rational-design'
          image='https://raw.githubusercontent.com/timmybytes/rational-design/a3bd89b918b051840fb8301c5c5cf9b9404f36fa/src/assets/rational-design-logo.svg'
          alt='Rational Design logo'
        />
        <Card
          title='Resolute Apparel'
          body='A full-stack e-commerce site built from React,
                  Redux, SCSS, Firebase, and Stripe.'
          link='https://github.com/timmybytes/resolute-apparel'
          image='https://raw.githubusercontent.com/timmybytes/resolute-apparel/dev/src/assets/resolute-apparel-social-card.png'
          alt='Resolute Apparel logo'
        />
        <Card
          title='Dotfiles'
          body='My personal (.)dotfiles and configurations for various
                  programs and environments.'
          image='https://raw.githubusercontent.com/timmybytes/dotfiles/main/dotfiles-logo.svg'
          link='https://github.com/timmybytes/dotfiles'
          alt='Dotfiles logo'
        />
      </section>
    </>
  );
}
