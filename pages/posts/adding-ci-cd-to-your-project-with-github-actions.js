import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        {/* TODO: Add media cards */}
        <title>Adding CI/CD to Your Project with GitHub Actions</title>
      </Head>
      <header>
        <h1 className='post__header'>
          Adding CI/CD to Your Project with GitHub Actions
        </h1>
        <p className='post__date'>January 22, 2021</p>
      </header>
      <article className='post__article'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem et ut
          dolore, doloribus debitis dolores commodi? Temporibus dolor ducimus
          soluta.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem et ut
          dolore, doloribus debitis dolores commodi? Temporibus dolor ducimus
          soluta.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem et ut
          dolore, doloribus debitis dolores commodi? Temporibus dolor ducimus
          soluta.
        </p>
      </article>
    </Layout>
  );
};

export default FirstPost;
