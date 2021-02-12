import React from 'react';
import styles from './footer.module.scss';

const currentYear = `© ${new Date().getFullYear()}`;
const Footer = () => (
  <footer className={styles.footer}>
    Built by Timothy Merritt, {currentYear}
  </footer>
);

export default Footer;
