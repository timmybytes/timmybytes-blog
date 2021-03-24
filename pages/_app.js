import '../components/styles/global.scss';
import { AppWrapper } from '../contexts/AppContext';

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
