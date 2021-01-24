import React from 'react';
import utilStyles from '../styles/utils.module.scss';

const PostFooter = () => {
  return (
    <>
      <section className='post__footer'>
        <a href='https://ko-fi.com/O4O82TAZB'>
          <img
            src='https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/5cbee341ae2b8813ae072f5b_Ko-fi_logo_RGB_Outline.png'
            alt='Buy Me a Coffee at ko-fi.com'
          />
        </a>
        <a href='https://dev.to/timmybytes'>
          <img
            src='https://res.cloudinary.com/practicaldev/image/fetch/s--R9qwOwpC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/78hs31fax49uwy6kbxyw.png'
            alt='DEV icon'
          />
        </a>
        <a href='https://twitter.com/timmybytes'>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffemiwiki-uploaded-files-thumb.s3.amazonaws.com%2Fb%2Fbb%2FTwitter_Social_Icon_Rounded_Square_Color.svg%2F1200px-Twitter_Social_Icon_Rounded_Square_Color.svg.png&f=1&nofb=1'
            alt='Twitter icon'
          />
        </a>
        <a href='https://www.linkedin.com/in/timmybytes'>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F174%2F174857.png&f=1&nofb=1'
            alt='LinkedIn icon'
          />
        </a>
      </section>
    </>
  );
};

export default PostFooter;
