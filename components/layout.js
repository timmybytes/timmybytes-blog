import Head from 'next/head';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import Header from './header';
import PostFooter from './postFooter';
import Footer from '../components/footer';

const name = 'Timothy Merritt';
export const siteTitle = 'timmybytes';

export default function Layout({ children, home }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          {/* TODO: Add favicon */}
          <link rel='icon' href='/favicon.ico' />
          <meta
            name='description'
            content="Timothy Merritt's byte-sized blog"
          />
          {/* TODO: Add media cards */}
          <meta
            property='og:image'
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name='og:title' content={siteTitle} />
          <meta name='twitter:card' content='summary_large_image' />
        </Head>
        <Link href='/'>
          <a>&larr; Back to home</a>
        </Link>
        <>{children}</>
        <Link href='/'>
          <a>&larr; Back to home</a>
        </Link>
        <PostFooter />
      </div>
      <Footer />
    </>
  );
}
