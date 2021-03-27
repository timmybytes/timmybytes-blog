import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../utils';

const handleColorHover = color => {
  switch (color) {
    case 'primary':
      return `background: ${colors.primaryLess};`;
    case 'secondary':
      return `background: ${colors.secondaryLess};`;
    case 'tertiary':
      return `background: ${colors.tertiaryLess};`;
    case 'quaternary':
      return `background: ${colors.quaternaryLess};`;
    case 'colorDark' || 'dark':
      return `background: ${colors.light};`;
    case 'colorLight' || 'light':
      return `background: ${colors.dark};`;
    default:
      return `background: ${colors.colorDark}; color: ${colors.colorLight}`;
  }
};

const HighlightSpan = styled.span`
  background: ${({ color }) => colors[color]};
  border-radius: 4px;
  font-weight: 800;
  margin: 5px;
  padding: 0 7px;
  transition: 0.3s;
  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 4px 4px 0 0 ${colors.colorDark};
    ${({ color }) => handleColorHover(color)};
  }
`;

const Highlight = ({ children, color }) => {
  const [highlightColor, setHighlightColor] = useState('');

  useEffect(() => {
    setHighlightColor(color);
  }, []);

  return <HighlightSpan color={highlightColor}>{children}</HighlightSpan>;
};

export default Highlight;
