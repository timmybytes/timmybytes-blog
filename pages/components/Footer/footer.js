import React from 'react';
import footer from './footer.module.scss';

const currentYear = `© ${new Date().getFullYear()}`;
const Footer = () => (
  <footer className={footer}>Built by Timothy Merritt, {currentYear}</footer>
);

export default Footer;
