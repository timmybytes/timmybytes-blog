import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        {/* TODO: Add media cards */}
        <title>
          Keeping Git Commit Messages Consistent with a Custom Template
        </title>
      </Head>
      <header>
        <h1 className='post__header'>
          Keeping Git Commit Messages Consistent with a Custom Template
        </h1>
        <p className='post__date'>January 21, 2021</p>
      </header>
      <article className='post__article'>
        <p>
          The ability to write consistent git commit messages is a skill that
          will serve both you and any team you’re working with well in the long
          run. If you often find yourself struggling to come up with a decent
          message format, or you’re unable to decipher what it was you were
          doing when looking back through old commits, this little fix might
          help. And the best part is it’s extremely easy to implement.
        </p>
        <p>
          You can set a file to act as a commit message template through git’s
          global configuration. I tend to follow the{' '}
          <a href='https://www.conventionalcommits.org/en/v1.0.0-beta.2/'>
            conventional commits format
          </a>
          , which makes it easy to decide how to format your messages, and keeps
          things organized across all your commits.{' '}
          <a href='https://chris.beams.io/posts/git-commit/'>
            Chris Beams also has a great article on this topic
          </a>
          .
        </p>
        <p>
          First, create a .txt file in a directory of your choice that will act
          as the template. I’ll assume you’re using the terminal for the
          process.
        </p>
        <pre>
          <code className='codeblock language-bash'>
            touch commit-conventions.txt
          </code>
        </pre>
        <p>
          Open the .txt file with the editor of your choice. Git will ignore
          lines that begin with a <code>#</code> or <code>;</code> by default,
          so we’ll use those to make a template of ignored lines that only you
          will see when you’re making commits.
        </p>
        <blockquote className='info'>
          <strong>Note</strong>: By default,{' '}
          <a href='https://git-scm.com/docs/git-config#_syntax'>
            git allows both <code>#</code> and <code>;</code> as comment
            characters for configuration files
          </a>
          , but you can set a character of your choice with{' '}
          <code>git config --global core.commentChar '#'</code>, substituting{' '}
          <code>#</code> with your preferred character.
        </blockquote>
        <p>
          You can put whatever you want in your template, but here’s mine as an
          example:
        </p>
        <pre>
          {/* prettier-ignore */}
          <code className='codeblock'>
# ----------------------------------------------------------<br />
# Header - type(scope): Brief description<br />
# ----------------------------------------------------------<br />
#    * feat             A new feature - SemVar PATCH<br />
#    * fix              A bug fix - SemVar MINOR<br />
#    * BREAKING CHANGE  Breaking API change - SemVar MAJOR<br />
#    * docs             Change to documentation only<br />
#    * style            Change to style (whitespace, etc.)<br />
#    * refactor         Change not related to a bug or feat<br />
#    * perf             Change that affects performance<br />
#    * test             Change that adds/modifies tests<br />
#    * build            Change to build system<br />
#    * ci               Change to CI pipeline/workflow<br />
#    * chore            General tooling/config/min refactor<br />
# ----------------------------------------------------------<br />
<br />
<br />
# ----------------------------------------------------------<br />
# Body - More description, if necessary<br />
# ----------------------------------------------------------<br />
#    * Motivation behind changes, more detail into how<br />
#      functionality might be affected, etc.<br />
# ----------------------------------------------------------<br />
<br />
<br />
# ----------------------------------------------------------<br />
# Footer - Associated issues, PRs, etc.<br />
# ----------------------------------------------------------<br />
#    * Ex: Resolves Issue #207, see PR #15, etc.<br />
# ----------------------------------------------------------<br />
<br />
<br />
        </code>
        </pre>
        <p>
          To add the template to your global git config is enter the following:
        </p>
        <pre>
          <code className='codeblock'>
            git config --global commit.template path/to/your/file.txt
          </code>
        </pre>
        <p>
          Now whenever you’re making a commit, instead of the typical{' '}
          <code className='lang-bash'>
            git commit -m "A brief commit message"
          </code>
          , just enter
          <code>git commit</code> to open your default editor with the template
          in place. You’ll automatically have a guide to choose conventions from
          to create a structured message. For example:
        </p>
        <pre>
          {/* prettier-ignore */}
          <code className='codeblock'>
# ----------------------------------------------------------<br />
# Header - type(scope): Brief description<br />
# ----------------------------------------------------------<br />
#    * feat             A new feature - SemVar PATCH<br />
#    * fix              A bug fix - SemVar MINOR<br />
#    * BREAKING CHANGE  Breaking API change - SemVar MAJOR<br />
#    * docs             Change to documentation only<br />
#    * style            Change to style (whitespace, etc.)<br />
#    * refactor         Change not related to a bug or feat<br />
#    * perf             Change that affects performance<br />
#    * test             Change that adds/modifies tests<br />
#    * build            Change to build system<br />
#    * ci               Change to CI pipeline/workflow<br />
#    * chore            General tooling/config/min refactor<br />
# ----------------------------------------------------------<br />
docs: Update README with contributing instructions<br />
<br />
# ----------------------------------------------------------<br />
# Body - More description, if necessary<br />
# ----------------------------------------------------------<br />
#    * Motivation behind changes, more detail into how<br />
#      functionality might be affected, etc.<br />
# ----------------------------------------------------------<br />
Adds a CONTRIBUTING.md with PR best practices, code style<br />
guide, and code of conduct for contributors.<br />
<br />
# ----------------------------------------------------------<br />
# Footer - Associated issues, PRs, etc.<br />
# ----------------------------------------------------------<br />
#    * Ex: Resolves Issue #207, see PR #15, etc.<br />
# ----------------------------------------------------------<br />
Closes #9<br />
<br />
          </code>
        </pre>
        <p>
          The “header” of the commit message notes the type of the commit as
          <code>docs</code> and a brief description that does not exceed 60
          characters to ensure readability (the commented lines are 60
          characters long and act as guides for when to use a line break). The
          “body” optionally elaborates on the changes made, and the “footer”
          optionally notes any issue/PR the commit is related to. The final
          message will simply look like this:
        </p>
        {/* prettier-ignore */}
        <pre><code className='codeblock'>
docs: Update README with contributing instructions<br />
<br />
Adds a CONTRIBUTING.md with PR best practices, code style<br />
guide, and code of conduct for contributors.<br />
<br />
Closes #9<br />
        </code></pre>
        <p>
          For more specifics on the convention formatting or how it works with
          semantic versioning, see my{' '}
          <a href='https://github.com/timmybytes/dotfiles/blob/main/git/README.md'>
            git configuration
          </a>
          . If it's too confusing or overly complex for your use cases, just
          simplify as needed.
        </p>
        <p>
          If you use Vim or Neovim, and you want to speed up the process even
          more, you can add this to your git config:
        </p>
        {/* prettier-ignore */}
        <pre>
          <code className='codeblock'>
# Neovim<br />
git config --global core.editor=nvim +16 -c 'startinsert'<br />
<br />
# Vim<br />
git config --global core.editor "vim +16 +startinsert"<br />
          </code>
        </pre>
        <p>
          This sets the default editor to Neovim (or Vim), and places the cursor
          on line 16 in Insert Mode as soon the editor opens. Now whenever
          you’re committing, when you type <code>git commit</code>, Neovim opens
          the template, places your cursor, and accepts typing input
          immediately. Also note that you can still use
          <code>git commit -m "Your message"</code>
          exactly as you did before, but the configuration will default to the
          template setup when you just type git commit.
        </p>
        <p>
          <a href='https://stackoverflow.com/questions/2596805/how-do-i-make-git-use-the-editor-of-my-choice-for-commits'>
            See more tips for configuring your git editor here.
          </a>
        </p>
        <p>
          Setting up this template has saved me countless time and frustration,
          and makes it so much easier to track my commits since all my repos use
          the same global commit format. You can get much more creative with git
          defaults and complex githooks, but this is a great way to solve a
          common problem for most developers.{' '}
        </p>
      </article>
    </Layout>
  );
};

export default FirstPost;
