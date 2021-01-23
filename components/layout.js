import Head from 'next/head';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import Header from './header';

const name = 'Timothy Merritt';
export const siteTitle = 'Next.js Sample Website';
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
export const postDate = `${cMonth}/${cDay}/${cYear}`;

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Header />
      <>{children}</>
    </div>
  );
}
