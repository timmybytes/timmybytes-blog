import { post_container } from './post-layout.module.scss';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const siteTitle = 'timmybytes';

export default function PostLayout({ children }) {
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
      </main>
      <Footer />
    </>
  );
}
