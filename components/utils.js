import styled from 'styled-components';

/*
Updated pastels and darker varients
Primary (Pink): #FF90AD - HSL(344,100,78)
Darker: #FF3D71 - HSL(344,100,62)

Secondary (Yellow): #FFDF85 - HSL(44,100,76)
Darker: #FFC933 - HSL(44,100,60)

Tertiary (Blue): #B8DCFF - HSL(210,100,86)
Darker: #66B2FF - HSL(210,100,70)

Quaternary (Green): #CAFFBF - HSL(110,100,87)
Darker: #84FF6B - HSL(110,100,71)
*/

export const colors = {
  colorLight: `#f5f5f5`,
  colorLighter: `#fdfdfd`,
  colorDark: `#444444`,
  colorDarker: `#333333`,
  colorGrey: `#777777`,
  colorGreyer: `#999999`,
  colorGreyLess: `#dddddd`,
  // colorPrimary: `#f5668c`,
  colorPrimary: `#FF90AD`,
  // colorPrimaryLess: `#ff90ad`,
  colorPrimaryLess: `#FF90AD`,
  // colorPrimaryMore: `#fd3b6f`,
  colorPrimaryMore: `#FF90AD`,
  colorSecondary: `#FFDF85`,
  // colorSecondaryLess: `#b0d8ff`,
  colorSecondaryLess: '#FFDF85',
  // colorSecondaryMore: `#3997f5`,
  colorSecondaryMore: `#FFDF85`,
  // colorTertiary: `#baea93`,
  colorTertiary: `#B8DCFF`,
  // colorTertiaryLess: `#ccf7a9`,
  colorTertiaryLess: `#B8DCFF`,
  // colorTertiaryMore: `#8aeb3c`,
  colorTertiaryMore: `#B8DCFF`,
  // colorQuaternary: `#ffaa65`,
  colorQuaternary: `#CAFFBF`,
  // colorQuaternaryLess: `#fdc393`,
  colorQuaternaryLess: `#CAFFBF`,
  // colorQuaternaryMore: `#ff9c4a`,
  colorQuaternaryMore: `#CAFFBF`,
  // primary: '#f5668c',
  // primaryLess: `#ff90ad`,
  // secondary: '#F5CF66',
  // secondaryLess: '#ffdf85',
  // tertiary: '#D4F566',
  // tertiaryLess: `#e5ff91`,
  // quaternary: '#98c4ef',
  // quaternaryLess: `#b8dcff`,
  // FIXME:
  light: '#fdfdfd',
  dark: '#444444',
  primary: '#FF90AD',
  primaryDarker: '#FF3D71',
  primaryLess: `#FF90AD`,
  secondary: '#FFDF85',
  secondaryDarker: '#FFC933',
  secondaryLess: '#FFDF85',
  tertiary: '#B8DCFF',
  tertiaryDarker: '#66B2FF',
  tertiaryLess: `#B8DCFF`,
  quaternary: '#CAFFBF',
  quaternaryDarker: '#84FF6B',
  quaternaryLess: `#CAFFBF`,
};

export const PlainButton = styled.button`
  background: none;
  border-radius: none;
  border: 0;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: none;
  outline: none;
  padding: inherit;
  text-decoration: inherit;
  white-space: nowrap;
`;
