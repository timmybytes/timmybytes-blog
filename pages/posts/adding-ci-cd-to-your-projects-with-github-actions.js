import React from 'react';
import Post from '@/components/Post/Post';

const NewPost = () => {
  return (
    <Post
      title='Adding CI/CD to Your Projects With GitHub Actions'
      date='January 22, 2021'
      description='If you’re hosting your code on GitHub, you can use to add useful workflows to your project. In this guide, I’ll show you what Actions are, and how you can use them to streamline your development process and add automation.'
      image='https://timmybytes.com/images/github-actions.png'>
      <p>
        If you’re hosting your code on GitHub, you can use{' '}
        <a href='https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions'>
          GitHub Actions
        </a>{' '}
        to add useful workflows to your project. In this guide, I’ll show you
        what Actions are, and how you can use them to streamline your
        development process and add automation.
      </p>
      <h2>What are GitHub Actions?</h2>
      <blockquote className='info'>
        GitHub Actions help you automate tasks within your software development
        life cycle. GitHub Actions are event-driven, meaning that you can run a
        series of commands after a specified event has occurred.
        <br />— via{' '}
        <a href='https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions'>
          GitHub Docs
        </a>
      </blockquote>
      <p>
        In the simplest sense, Actions allow you to automate tasks. That might
        include checking code for syntax errors, optimizing image compression,
        or any other task you want to automate based on a certain *event*.
        Events can be defined in various ways, but most typically use a git push
        to trigger an Action. By using Actions to automate tedious or repetitive
        tasks, you can make your SDLC (
        <a href='https://en.m.wikipedia.org/wiki/Systems_development_life_cycle'>
          Systems Development Life Cycle
        </a>
        ) more efficient, particularly when multiple people are using the same
        code base.
      </p>
      <h2>Setting Up GitHub Actions</h2>
      <p>
        Actions are defined by a{' '}
        <a href='https://en.m.wikipedia.org/wiki/YAML'>YAML</a> file in your
        repository. To set up your first Action, you’ll need to add a
        <code>.github</code>
        directory to the root of your project, with a<code>workflows</code>
        directory nested inside. Your Action <code>.yaml</code> (or{' '}
        <code>.yml</code>, either extension is valid) files will go here.
      </p>
      {/* prettier-ignore */}
      <pre className='codeblock'>
          <code>
• Project<br />
├─ .github/<br />
│  └─ workflows/<br />
│    └─ action-one.yml<br />
│    └─ action-two.yml<br />
├─ dist/<br />
├─ src/<br />
├─ package.json<br />
└─ package.lock.json<br />
          </code>
        </pre>
      <p>
        If you haven’t used YAML before, it’s very straightforward, but be aware
        the syntax is very unforgiving when it comes to whitespace. Make sure
        you’re using spaces instead of tabs for indentation.
      </p>
      <pre className='codeblock'>
        {/* prettier-ignore */}
        <code>
<span className='codeblock__comment'># action-one.yml</span><br />
<br />
name: action-one <span className='codeblock__comment'># Optional: the name of the workflow</span><br />
on: [push] <span className='codeblock__comment'># Specify the event trigger</span><br />
jobs: <span className='codeblock__comment'># Groups all the 'action-one' jobs</span><br />
{'  '}say-hello: <span className='codeblock__comment'># Defines the 'say-hello' job</span><br />
{'    '}runs-on: ubuntu-20.04 <span className='codeblock__comment'># Virtual runner environment</span><br />
{'    '}steps: <span className='codeblock__comment'># Groups all the steps for 'say-hello' job</span><br />
{'      '}- uses: actions/checkout@v2 <span className='codeblock__comment'># Checks out your repo so Action can access it</span><br />
{'      '}- run: echo "Hello" <span className='codeblock__comment'># Run a command on the runner</span>
          </code>
      </pre>
      <p>
        The
        <code>action-one.yml</code>
        Action will work as follows:
      </p>
      <ol>
        <li>Trigger on a git push to the repository</li>
        <li>Execute 'job' called 'say-hello'</li>
        <li>
          Use version 20.04 of Ubuntu as a runner environment for the job
          (virtual machine)
        </li>
        <li>Execute 'say-hello' steps</li>
        <li>
          Use the community <code>actions/checkout@v2</code> Action to check out
          the repo and allow access for the current Action
        </li>
        <li>
          Echo <code>"Hello"</code>
        </li>
      </ol>
      <p>
        So the
        <code>.yml</code>
        file provides the instructions, and the GitHub servers take care of all
        the actual heavy lifting.{' '}
      </p>
      <p>
        You’re free to run self-contained Actions in your workflow, including
        creating your own scripts to run within an Action. For instance, if you
        have a script you want to run against your repo written in bash, you
        could run that script within the workflow like so:
      </p>
      <pre className='codeblock'>
        {/* prettier-ignore */}
        <code>name: action-one<br />
on: [push]<br/>
jobs:<br/>
{'  '}say-hello:<br/>
{'    '}runs-on: ubuntu-20.04<br/>
{'    '}steps:<br/>
{'      '}- uses: actions/checkout@v2<br/>
{'      '}- run: ./some-script.sh<br/>
{'      '}shell: bash<br/>
          </code>
      </pre>
      <p>
        This process works the same whatever your Action is, but the
        possibilities become more powerful once you incorporate Actions from the{' '}
        <a href='https://github.com/marketplace?type=actions'>
          GitHub marketplace
        </a>
        .
      </p>
      <h2>Integrating Marketplace Actions</h2>
      <p>
        There are thousands of marketplace Actions you can incorporate into your
        workflows. Typically you only need to define the relevant action in your
        Action’s
        <code>uses:</code>
        field within its YAML file, and many can be further configured according
        to their documentation.{' '}
      </p>
      <p>
        Here’s an Action I use to publish a package to the NPM repository only
        if I push to the main branch with a commit message that includes the
        word "deploy" (Note that the emojis are purely decorative):
      </p>
      {/* prettier-ignore */}
      <pre className='codeblock'>
          <code>
name: '🚀 publish'<br />
<br />
on:<br />
{'  '}push:<br />
{'    '}branches:<br />
{'      '}- main<br />
jobs:<br />
{'  '}release:<br />
{'    '}name: 🚀 publish<br />
{'    '}if:<br />
{'      '}"contains(github.event.head_commit.message, 'deploy')"<br />
{'    '}runs-on: ubuntu-latest<br />
{'    '}steps:<br />
{'      '}- name: 📚 checkout<br />
{'        '}uses: actions/checkout@v2.3.3<br />
{'      '}- name: 🟢 node<br />
{'        '}uses: actions/setup-node@v1.4.4<br />
{'        '}with:<br />
{'          '}node-version: 12<br />
{'          '}registry-url: https://registry.npmjs.org<br />
{'      '}- name: 🚀 publish<br />
{'        '}run: npm publish --access public<br />
{'        '}env:<br />
{'          '}NODE_AUTH_TOKEN: $&#123;&#123;secrets.NPM_AUTH_TOKEN&#125;&#125;<br />
          </code>
        </pre>
      <p>
        The Action uses the marketplace Actions "checkout" and "setup-node",
        along with a<code>NODE_AUTH_TOKEN</code>
        that uses my npm login credentials as a{' '}
        <a href='https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets'>
          Secret
        </a>
        . So without having to do anything myself, this Action will publish my
        package to the npm registry, though it only updates the published
        package there if there’s been a version change since the last
        publication.{' '}
      </p>
      <p>
        <a href='https://github.com/sisodiya2421/trello-manage'>
          Here’s an Action from sisodiya2421
        </a>
        that automatically creates a Trello card with a list issues of issues
        from your repo.
      </p>
      <p>
        The capabilities are nearly limitless, depending on how much
        configuration you want to do. For example, a workflow might involve a
        few Actions that cascade:
      </p>
      <ol>
        <li>Use a linter to check for code errors</li>
        <li>Run tests</li>
        <li>Build for production </li>
        <li>Deploy live</li>
      </ol>
      <p>
        If any of the steps in the sequence fail, the workflow could stop,
        preventing problematic code from reaching production. In a simpler
        scenario, you might have an action that detects an issue submission, and
        prompts the user to use a premise template for their issue.
      </p>
      <p>
        Not every project will need lots of Actions, but they’re an extremely
        useful tool that can be tailored any way you like (depending on how long
        you want to spend configuring them). I’m still getting the hang of
        implementing more complex Actions that I combine with githook checks
        locally, but I’ve found them to be a very helpful addition to my
        workflows.
      </p>
    </Post>
  );
};

export default NewPost;
