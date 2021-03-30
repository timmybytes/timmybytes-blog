import React from 'react';
import Head from 'next/head';
import PostLayout from './PostLayout';
import PostImage from './PostImage';
import PostFooter from './PostFooter';

const Post = ({
  children,
  // Set default placeholder data if no props present
  title = 'Post Title',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  date,
  image,
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
        <link rel='icon' href='/favicons/favicon.ico' />
        <meta property='og:title' content='timmybytes' />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={titleUrl} />
        <meta property='og:type' content='article' />
        {/* Default Image for social media sharing - 1280x640 PNG Required */}
        {image ? (
          <>
            <meta property='og:image' content={image} />
            <meta property='og:image:alt' content='Post image' />
            <meta property='og:image:type' content='image/png' />
            <meta property='twitter:image' content={image} />
            <meta property='og:image:width' content='1280' />
            <meta property='og:image:height' content='640' />
          </>
        ) : (
          <>
            <meta
              property='og:image'
              content='../../public/images/gradients/gradienta-unsplash-1.png'
            />
            <meta property='og:image:alt' content='Color gradient' />
            <meta property='og:image:type' content='image/jpg' />
            <meta
              property='twitter:image'
              content='../../public/images/gradients/gradienta-unsplash-1.png'
            />
            <meta property='og:image:width' content='1920' />
            <meta property='og:image:height' content='1280' />
          </>
        )}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:creator' content='@timmybytes' />
      </Head>
      <PostLayout>
        <header>
          <PostImage src={image} alt='Post image' />
          <h1 className='post__header'>{title}</h1>
          <p className='post__date'>{postDate}</p>
        </header>
        <article className='post__article'>{children}</article>
        <PostFooter postTitle={title} />
      </PostLayout>
    </>
  );
};

export default Post;
