import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import About from './about';
import Work from './work';
import Blog from './blog';
import IntroCard from '../components/Card/IntroCard';

export default function Home({ allPostsData }) {
  return (
    <>
      <Header />
      <main className='container'>
        <IntroCard />
        {/* <About /> */}
        <Work />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
