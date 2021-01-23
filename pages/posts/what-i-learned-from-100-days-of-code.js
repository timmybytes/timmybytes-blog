import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        {/* TODO: Add media cards */}
        <title>What I Learned From 100 Days of Code</title>
      </Head>
      <Link href='/'>
        <a>&larr; Back to home</a>
      </Link>
      <header>
        <h1 className='post__header'>What I Learned From 100 Days of Code</h1>
        <p className='post__date'>October 7, 2020</p>
      </header>
      <article className='post__article'>
        <p>
          Yesterday was day 100 of my personal{' '}
          <a href='https://www.100daysofcode.com/'>100DaysOfCode</a> challenge.
          Before beginning, I already had some experience with HTML/CSS, Python,
          and the command line, but my comprehension was limited and mostly
          fragmentary. Over these last few months, however, I’ve completely
          thrown myself into learning to code, web development best practices,
          and computer science theory (in a limited fashion). Here are some tips
          I’ve picked up along the way.
        </p>
        <h2> Feeling like an imposter can be a good thing </h2>
        <p>
          One of the most common aspects of being a newbie to coding and
          development is the dreaded “Imposter Syndrome”: the feeling of being a
          fraud when you don’t know as much as you think you should, or when
          you’re just sort of faking it until you make it. This mindset is
          particularly applicable to people who’ve just landed their first
          developer job (or even long after), and while it can be stressful and
          depressing to compare yourself to seasoned savants, there’s a simple
          solution—don’t.{' '}
        </p>
        <p>
          If you’re new, you’re new. There’s nothing wrong with that. Not
          everyone learns to write DRY code before they’re out of diapers, and
          whatever path led you to coding at whatever age is a valid one. I’ve
          spent years working in retail, have an unrelated degree in English,
          and one of the things I’ve learned to embrace over this period diving
          into programming has been my lack of knowledge.{' '}
        </p>
        <p>
          When you don’t know how a particular piece of code works, or what a
          tool does, or why a technology exists, it gives you the opportunity to
          find out. Computer Science is so dense with history and evolution that
          no one person can know it all, but learning to embrace going down
          wormholes to clear up gaps in your knowledge is a useful skill, and
          along the way you’ll find another dozen topics you’ll want to look
          into later for even more clarification. Part of learning to code is
          learning how to learn, and being okay with the fact that there’s
          always more to find out.{' '}
        </p>
        <h3>Resources</h3>
        <ul>
          <li>
            <a href='https://www.freecodecamp.org/news/what-is-imposter-syndrome-and-how-do-you-overcome-it/'>
              How to Overcome Imposter Syndrome
            </a>
          </li>
          <li>
            <a href='https://www.freecodecamp.org/news/the-self-taught-developers-guide-to-coding/'>
              The Self-Taught Developer’s Guide to Coding
            </a>
          </li>
          <li>
            <a href='https://github.com/bayandin/awesome-awesomeness'>
              Awesome Programming Resources
            </a>
          </li>
        </ul>
        <h2>Stick with a central programming language </h2>
        <p>
          You might feel inclined to try and cram as much into your brain as
          possible when starting out, and desire to learn how every popular
          programming language works. This is a recipe for remaining confused
          and staying stuck at the beginner level indefinitely. Instead, focus
          on one language.
        </p>{' '}
        <p>
          For me, I’ve pursued front-end web development, so after getting the
          hang of HTML and CSS (which aren’t really programming languages at
          all), I’ve focused solely on JavaScript. As a result, I’ve deepened my
          knowledge of the language rather than spreading myself thin over many
          others, and this applies to any other language you’re interested in.
        </p>
        <p>
          There isn’t a “right” language to learn first, though some may be
          better suited for you if you’re looking to work with certain realms of
          development or engineering. JavaScript is tailored to web development,
          Python is often the choice for machine learning, Java is popular for
          enterprise software, etc. There are exceptions to all of these, but
          the gist is that once you start with a language, stick with it.
        </p>
        <p>
          A language’s syntax is something you can pick up pretty quickly, or
          look up once you know what you need, but the important thing is to
          learn the concepts of programming and /thinking/ programmatically.
          Once you’ve become adept at one language, it becomes easier to learn
          another because the same underlying concepts will usually apply.
        </p>
        <h3>Resources</h3>
        <ul>
          <li>
            <a href='https://www.freecodecamp.org/news/what-programming-language-should-i-learn-first-19a33b0a467d/'>
              What Programming Language Should I Learn First?
            </a>
          </li>
          <li>
            <a href='https://www.freecodecamp.org/news/a-cautionary-tale-of-learning-to-code-my-own-eddb24d9d5a7/'>
              A Cautionary Tale of Learning to Code
            </a>
          </li>
        </ul>
        <h2>Track your progress</h2>
        <p>
          Publicly committing to the <code>#100DaysOfCode</code> challenge gave
          me some accountability for reporting what I’d done each day on
          Twitter, and eventually I started using tools like Toggl Track and
          Wakatime to record the time I was studying and actually working on
          things. Gamifying your progress can be a great incentive to keep
          trying to up your own “scores”, but more than anything it gives you
          tangible evidence that you’re really taking ownership over your own
          learning. Seeing weekly reports of the hours you’ve put in can give
          you that added boost of knowing you’re accomplishing something
          incrementally, especially if it feels like you’re just spinning your
          wheels in the moment.{' '}
        </p>
        <p>
          Similarly, take notes! When you’re watching a tutorial or researching
          a topic that’s unfamiliar to you, it’s immensely helpful to write down
          contexts for why something is the way it is, preferably with examples
          you can refer back to later. I personally recommend using{' '}
          <a href='https://bear.app/'>Bear</a> (it’s what I’m using to write
          this article), a free, full-featured note app that supports markdown
          and syntax highlighting.{' '}
        </p>
        <h3>Resources</h3>
        <ul>
          <li>
            <a href='https://toggl.com/'>Toggl Track</a>
          </li>
          <li>
            <a href='https://wakatime.com/'>Wakatime</a>
          </li>
          <li>
            <a href='https://bear.app/'>Bear App</a>
          </li>
        </ul>
        <h2>Be kind to yourself when you need a break </h2>
        <p>
          Just as tracking your time can make you strive for more time spent
          working, it’s also important to step /away/ from the keyboard. You
          can’t learn everything there is to know about programming by staring
          at code for twelve hours a day, and more often than not life will
          throw you curveballs that will force you to take a break (and 2020 is
          the year of curveballs, if nothing else). Burnout is a very real issue
          for developers, so try to establish good habits from the get go by
          giving yourself time away from the keyboard.{' '}
        </p>
        <p>
          For me personally, that has meant juggling chronic migraines, raising
          my son, air toxicity (I live in Oregon, where we spent two weeks under
          a blanket of dangerous wildfire smoke), and any number of things on a
          daily basis that could either distract or derail my focus on coding.
          There’s always more I want to be doing, always more I wish I was
          learning, but I’ve learned to be patient and appreciate that even if
          the pace isn’t always as consistent as I’d like, I’m still moving
          forward bit by bit.{' '}
        </p>
        <h3>Resources</h3>
        <ul>
          <li>
            <a href='https://simpleprogrammer.com/taking-breaks-will-boost-productivity/'>
              Taking Breaks Will Boost Productivity
            </a>
          </li>
          <li>
            <a href='https://en.m.wikipedia.org/wiki/Pomodoro_Technique'>
              The Pomodoro Technique
            </a>
          </li>
        </ul>
        <h2>Push out of your comfort zone</h2>
        <p>
          When you finally get the hang of a concept, a framework, a tool, etc.,
          it can be easy to fall into the habit of continuing to revisit an area
          where you feel comfortable—and avoid things that you grapple with.
          This was me with JavaScript, which was extremely intimidating to me at
          first, and as a result I kept putting off diving into it.{' '}
        </p>
        <p>
          But most of the time, doing the thing that seems scary ends up being
          much less frightening than you thought initially, and it makes you get
          comfortable with the knowledge that a) you have a lot to learn, and b)
          you /can/ learn a lot. I spend some part of every day with JavaScript
          now, and I’ve come to really love it’s quirky personality and the
          staggering capabilities it has. I’ve gotten so used to trying things I
          don’t understand, at this point I’ve started making notes and
          bookmarks of complex topics to come back to or work towards.{' '}
        </p>
        <h2>Use your momentum as a spring board</h2>
        <p>
          Learning to code is a daunting undertaking. There’s more to learn than
          any one person can cover in a lifetime, and things are changing all
          the time. It’s easy to get overwhelmed and feel like you aren’t
          getting anywhere, and an important component to the process is to keep
          pushing yourself forward. One of the best ways you can do this is to
          learn in public (by sharing your journey through #100DaysOfCode on
          Twitter, for example), and more directly, to engage with the developer
          community at large.{' '}
        </p>
        <p>
          As someone who deleted most social media accounts years ago, it can
          often be a hurdle for me to go from passively reading posts and
          following interesting people online to actively engaging with them,
          but I’m trying to get better about it (see the current article you’re
          reading...).{' '}
        </p>
        <p>
          More than anything though, if you reach Day 100 of your own challenge,
          keep going. Keep learning, keep coding. Build projects, connect with
          others online to learn from and share with. Do a second round of the
          challenge, or create one for yourself.{' '}
        </p>
        <p>
          I for one plan to keep coding everyday without exception, and am
          currently trying to land a job in the industry as a developer. I’ve
          realized the passion I have for this stuff seems to know no bounds,
          and completing 100DaysOfCode has only seemed to increase my appetite
          to learn and do more. If you’re just starting your journey,
          overwhelmed by all there is to learn and know, don’t worry. You’ve got
          this, and there are many of us here eager to support you along the
          way.{' '}
        </p>
      </article>
    </Layout>
  );
};

export default FirstPost;
