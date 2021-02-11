import React from 'react';
import utilStyles from './styles/utils.module.scss';

const PostFooter = () => {
  return (
    <section className='post__footer'>
      <h2 className='post__footer-header center'>share</h2>
      <div className='post__footer-social'>
        <a href='https://ko-fi.com/O4O82TAZB'>
          <img src='/images/kofi-icon.png' alt='Buy Me a Coffee at ko-fi.com' />
        </a>
        <a href='https://dev.to/timmybytes'>
          <img src='/images/dev-icon.png' alt='DEV icon' />
        </a>
        <a href='https://twitter.com/timmybytes'>
          <img src='/images/twitter-icon.jpg' alt='Twitter icon' />
        </a>
        <a href='https://www.linkedin.com/in/timmybytes'>
          <img src='/images/linkedin-icon.png' alt='LinkedIn icon' />
        </a>
      </div>
    </section>
  );
};

export default PostFooter;
