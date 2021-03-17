import React from 'react';
import Head from 'next/head';
import PostLayout from './PostLayout';

const Post = ({
  children,
  // Set default placeholder data if no props present
  title = 'Post Title',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  date,
}) => {
  // Parse title for page/tab title and url slug
  const postTitle = `${title} | timmybytes blog`;
  let titleDashed = title.replace(/\s+/g, '-').toLowerCase();
  const titleUrl = `https://timmybytes.com/posts/${titleDashed}`;

  const postDate = date || new Date().toDateString();

  return (
    <>
      <Head>
        <title>{postTitle}</title>
        <meta name='description' content={description} />
        <meta name='title' content={postTitle} />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='timmybytes' />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={titleUrl} />
        <meta property='og:type' content='article' />
        {/* Default Image for social media sharing */}
        <meta
          property='og:image'
          content='../../public/images/gradients/gradienta-unsplash-1.jpg'
        />
        <meta property='og:image:alt' content='Color gradient' />
        <meta property='og:image:type' content='image/jpg' />
        <meta
          property='twitter:image'
          content='../../public/images/gradients/gradienta-unsplash-1.jpg'
        />
        <meta property='og:image:width' content='1920' />
        <meta property='og:image:height' content='1280' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:creator' content='@timmybytes' />
      </Head>
      <PostLayout>
        <header>
          <h1 className='post__header'>{title}</h1>
          <p className='post__date'>{postDate}</p>
        </header>
        <article className='post__article'>{children}</article>
      </PostLayout>
    </>
  );
};

export default Post;
