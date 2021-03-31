import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* <title key='title'>
            timmybytes | Developer, Designer, Writer, Musician
          </title> */}
          <meta name='title' content='timmybytes' key='meta-title' />
          <meta
            name='description'
            content='timmybytes is a portfolio and blog for Timothy Merritt | Developer, Designer, Writer, and Musician'
            key='description'
          />
          {/* Icons and Favicons */}
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicons/apple-touch-icon.png'
            key='apple-touch-icon'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicons/favicon-32x32.png'
            key='favicon-32x32'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicons/favicon-16x16.png'
            key='favicon-16x16'
          />
          <link
            rel='mask-icon'
            href='/safari-pinned-tab.svg'
            color='#5bbad5'
            key='safari-pinned-tab'
          />
          <meta
            name='msapplication-TileColor'
            content='#da532c'
            key='ms-tile'
          />
          <meta name='theme-color' content='#ff90ad' key='theme-color' />
          {/* Open graph */}
          <meta property='og:locale' content='en_US' key='og-locale' />
          <meta property='og:type' content='website' key='og-type' />
          <meta property='og:title' content='timmybytes' key='og-title' />
          <meta
            property='og:description'
            content='timmybytes is a portfolio and blog for Timothy Merritt | Developer, Designer, Writer, and Musician'
            key='og-description'
          />
          <meta
            property='og:url'
            content='https://timmybytes.com'
            key='og-url'
          />
          <meta
            property='og:image'
            content='https://raw.githubusercontent.com/timmybytes/timmybytes-blog/main/public/images/timmybytes-Plain-Business-OG-Card.png'
            key='og-img'
          />
          <meta
            property='og:image:type'
            content='image/png'
            key='og-img-type'
          />
          <meta
            property='og:image:alt'
            content='The timmybytes logo'
            key='og-img-alt'
          />
          <meta property='og:image:width' content='1200' key='og-img-width' />
          <meta property='og:image:height' content='647' key='og-img-height' />
          <meta
            property='twitter:card'
            content='summary_large_image'
            key='twitter-card'
          />
          {/* <meta
            property='twitter:image'
            content='https://raw.githubusercontent.com/timmybytes/timmybytes-blog/main/public/images/timmybytes-Plain-Business-OG-Card.png'
            key='twitter-img'
          /> */}
          <meta
            property='twitter:creator'
            content='@timmybytes'
            key='twitter-creator'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
