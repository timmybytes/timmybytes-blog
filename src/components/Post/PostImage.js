import React from 'react';
import styles from './post-layout.module.scss';

const PostImage = ({ src }) => {
  const randomImage = () => Math.floor(Math.random() * 3);
  return (
    <img
      className={styles.post_img}
      src={src || `/images/gradients/gradienta-unsplash-${randomImage()}.png`}
    />
  );
};

export default PostImage;
