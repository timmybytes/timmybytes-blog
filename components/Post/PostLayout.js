import Head from 'next/head';
import styles, { post_container } from './layout.module.scss';
import Link from 'next/link';
import Header from '../Header/Header';
import PostFooter from './PostFooter';
import Footer from '../Footer/Footer';

const name = 'Timothy Merritt';
export const siteTitle = 'timmybytes';

export default function PostLayout({ children, home }) {
  return (
    <>
      <Header />
      <main className={post_container}>
        <Link href='/blog'>
          <a>&larr; Back to blog home</a>
        </Link>
        <>{children}</>
        <Link href='/blog'>
          <a>&larr; Back to blog home</a>
        </Link>
        {/* <PostFooter postTitle={} /> */}
      </main>
      <Footer />
    </>
  );
}
