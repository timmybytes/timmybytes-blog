import Head from 'next/head';
import styles, { post_container } from './layout.module.scss';
import Link from 'next/link';
import Header from '../Header/header';
import PostFooter from './PostFooter';
import Footer from '../Footer/footer';

const name = 'Timothy Merritt';
export const siteTitle = 'timmybytes';

export default function PostLayout({ children, home }) {
  return (
    <>
      <Header />
      <main className={post_container}>
        <Link href='/'>
          <a>&larr; Back to home</a>
        </Link>
        <>{children}</>
        <Link href='/'>
          <a>&larr; Back to home</a>
        </Link>
        <PostFooter />
      </main>
      <Footer />
    </>
  );
}
