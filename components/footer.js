import React from 'react';

const currentYear = `© ${new Date().getFullYear()}`;
const Footer = () => <footer>Made by Timothy Merritt, {currentYear}</footer>;

export default Footer;
