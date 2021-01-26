import React from 'react';

const currentYear = `© ${new Date().getFullYear()}`;
const Footer = () => <footer>Built by Timothy Merritt, {currentYear}</footer>;

export default Footer;
