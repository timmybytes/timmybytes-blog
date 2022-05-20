import React from 'react';
import { SiDevDotTo, SiTwitter, SiLinkedin } from 'react-icons/si';

const PostFooter = ({ postTitle, postUrl }) => {
  let shareTitle = postTitle
    ? postTitle.replace(/ /g, '%20')
    : `timmybytes%20blog`;
  let dashedUrl = postTitle.replace(/%20/g, '-');
  return (
    <section className='post__footer'>
      <h2 className='post__footer-header center'>share</h2>
      <div className='post__footer-social'>
        <a
          href={`https://dev.to/new?prefill=---%0Atitle%3A${shareTitle}%0Apublished%3A%20true%0Atags%3Awebdev%0A---via%20%7B%25%20user%20timmybytes%20%25%7D%20%5Bsource%20on%20timmybytes%20blog%5D%28${postUrl}%29`}
          target='_blank' rel="noreferrer">
          <SiDevDotTo className='post__footer-social-icon' />
        </a>
        <a
          className='twitter-share-button'
          aria-label='share to twitter'
          href={`https://twitter.com/intent/tweet?url=${postUrl}&text=${shareTitle}&via=timmybytes`}
          target='_blank' rel="noreferrer">
          <SiTwitter className='post__footer-social-icon' />
        </a>
        <a
          href={`http://www.linkedin.com/shareArticle?mini=true&url=${postUrl}`}
          target='_blank' rel="noreferrer">
          <SiLinkedin className='post__footer-social-icon' />
        </a>
      </div>
    </section>
  );
};

export default PostFooter;
