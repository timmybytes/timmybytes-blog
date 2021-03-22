import Header from '@components/Header/header';
import { IntroCard } from '@components/Cards/Cards';
import Footer from '@components/Footer/footer';
import Work from './work';
import Blog from './blog';

export default function Home({ allPostsData }) {
  return (
    <>
      <Header />
      <main className='container'>
        <IntroCard />
        <Work />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
