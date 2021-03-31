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
        <title key='title'>{postTitle}</title>
        <meta name='title' content={postTitle} key='meta-title' />
        <meta name='description' content={description} key='description' />
        {/* Open Graph */}
        <meta property='og:title' content={postTitle} key='og-title' />
        <meta
          property='og:description'
          content={description}
          key='description'
        />
        <meta property='og:url' content={titleUrl} key='og-url' />
        <meta property='og:type' content='article' key='og-type' />
        {/* FIXME: Default image for social media sharing if none provided - 1280x640 Required */}
        {image ? (
          <>
            <meta
              property='og:image'
              content={`https://timmybytes.com/images/${image}`}
              key='og-img'
            />
            <meta
              property='og:image:type'
              content='image/png'
              key='og-img-type'
            />
            <meta
              property='og:image:alt'
              content='Post image'
              key='og-img-alt'
            />
            <meta
              property='twitter:image'
              content={`https://timmybytes.com/images/${image}`}
              key='twitter-img'
            />
            <meta property='og:image:width' content='1280' key='og-img-width' />
            <meta
              property='og:image:height'
              content='640'
              key='og-img-height'
            />
          </>
        ) : (
          <>
            <meta
              property='og:image'
              content='https://timmybytes.com/images/timmybytes-Plain-Business-OG-Card.png'
              key='og-img'
            />
            <meta
              property='og:image:type'
              content='image/jpg'
              key='og-img-type'
            />
            <meta
              property='og:image:alt'
              content='Color gradient'
              key='og-img-alt'
            />
            <meta
              property='twitter:image'
              content='https://timmybytes.com/images/timmybytes-Plain-Business-OG-Card.png'
              key='twitter-img'
            />
            <meta property='og:image:width' content='1920' key='og-img-width' />
            <meta
              property='og:image:height'
              content='1280'
              key='og-img-height'
            />
          </>
        )}
        <meta
          property='twitter:card'
          content='summary_large_image'
          key='twitter-card'
        />
        <meta
          property='twitter:creator'
          content='@timmybytes'
          key='twitter-creator'
        />
      </Head>
      <PostLayout>
        <header>
          <PostImage src={image} alt='Post image' />
          <h1 className='post__header'>{title}</h1>
          <p className='post__date'>{postDate}</p>
        </header>
        <article className='post__article'>{children}</article>
        <PostFooter postTitle={title} postUrl={titleUrl} />
      </PostLayout>
    </>
  );
};

export default Post;
