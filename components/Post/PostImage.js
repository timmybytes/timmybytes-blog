import React from 'react';
import { colors } from '../utils';
import styled from 'styled-components';

const Image = styled.img`
  border: 1px solid ${colors.colorDark};
  border-radius: 10px;
  box-shadow: 4px 4px 0 0 ${colors.colorDark};
  display: block;
  width: 100%;
  height: auto;
  margin: 1rem auto;
`;

const PostImage = ({ src }) => {
  const randomImage = () => Math.floor(Math.random() * 3);
  return (
    <Image
      src={src || `/images/gradients/gradienta-unsplash-${randomImage()}.png`}
    />
  );
};

export default PostImage;
