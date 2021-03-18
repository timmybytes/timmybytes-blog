import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils';

const handleColorHover = color => {
  switch (color) {
    case 'primary':
      return `background: ${colors.colorPrimaryLess};`;
    case 'secondary':
      return `background: ${colors.colorQuaternaryLess};`;
    case 'tertiary':
      return `background: ${colors.colorTertiaryLess};`;
    case 'quarternary':
      return `background: ${colors.colorSecondaryLess};`;
    case 'colorDark':
      return `background: ${colors.colorLight};`;
    case 'colorLight':
      return `background: ${colors.colorDark};`;
    default:
      return `background: ${colors.colorDark}; color: ${colors.colorLight}`;
  }
};

const HighlightSpan = styled.span`
  background: ${({ color }) => colors[color]};
  border-radius: 4px;
  font-size: 2rem;
  font-weight: 800;
  margin: 5px;
  padding: 0 7px;
  transition: 0.3s;
  &:hover {
    transform: translate(-4px, -4px);

    box-shadow: 4px 4px 0 0 ${colors.colorDark};
    ${({ color }) => handleColorHover(color)};
  }
  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const Highlight = ({ children, color }) => {
  return <HighlightSpan color={color}>{children}</HighlightSpan>;
};

export default Highlight;
