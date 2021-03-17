import React from 'react';

const Post = ({ children, title, description, date }) => {
  const postTitle = `${title} | timmybytes` || 'Post Title | timmybytes';
  let titleDashed = title.replace(/\s+/g, '-').toLowerCase();
  const titleUrl = `https://timmybytes.com/posts/${titleDashed}`;
  return (
    <>
      <Head>
        {/* TODO: Add media cards */}
        <title>{postTitle}</title>
        <meta name='description' content={description} />
        <meta name='title' content={postTitle} />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='timmybytes' />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={titleUrl} />
        <meta property='og:type' content='website' />
        {/* <meta property='og:image' content='../public/images/SocialCard.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='647' />
        <meta property='og:image:alt' content='The timmybytes logo' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:image'
          content='../public/images/SocialCard.png'
        />
        <meta property='twitter:creator' content='@timmybytes' /> */}
      </Head>
      <PostLayout>
        <header>
          <h1 className='post__header'>What I Learned From 100 Days of Code</h1>
          <p className='post__date'>October 7, 2020</p>
        </header>
        <article className='post__article'></article>
      </PostLayout>
    </>
  );
};

export default Post;
