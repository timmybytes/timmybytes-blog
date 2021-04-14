import React from 'react';
import { colors } from '@/components/utils';
import styled from 'styled-components';

const Image = styled.img`
  border: 1px solid ${colors.colorDark};
  border-radius: 10px;
  display: block;
  width: 100%;
  height: auto;
  margin: 1rem auto;
  transition: 0.9s;
  transform: translate(-8px, -8px);
  box-shadow: 0.5px 0.5px 0 0 ${colors.colorDark},
    1px 1px 0 0 ${colors.colorDark}, 1.5px 1.5px 0 0 ${colors.colorDark},
    2px 2px 0 0 ${colors.colorDark}, 2.5px 2.5px 0 0 ${colors.colorDark},
    3px 3px 0 0 ${colors.colorDark}, 3.5px 3.5px 0 0 ${colors.colorDark},
    4px 4px 0 0 ${colors.colorDark}, 4.5px 4.5px 0 0 ${colors.colorDark},
    5px 5px 0 0 ${colors.colorDark}, 5.5px 5.5px 0 0 ${colors.colorDark},
    6px 6px 0 0 ${colors.colorDark}, 6.5px 6.5px 0 0 ${colors.colorDark},
    7px 7px 0 0 ${colors.colorDark}, 7.5px 7.5px 0 0 ${colors.colorDark},
    8px 8px 0px ${colors.colorDark};
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
