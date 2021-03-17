import React from 'react';
import Post from '../../components/Post/Post';

const TestPost = () => {
  return (
    <Post
      title='A Test Post'
      description='If you’re hosting your code on GitHub, you can use to add useful workflows to your project. In this guide, I’ll show you what Actions are, and how you can use them to streamline your development process and add automation.'>
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
    </Post>
  );
};

export default TestPost;
