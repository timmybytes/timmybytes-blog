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
          <title>timmybytes</title>
          <meta name='title' content='timmybytes' />
          <meta
            name='description'
            content="Timothy Merritt's developer portfolio and blog"
          />
          <link rel='icon' href='/favicon.ico' />
          {/* Open graph */}
          <meta property='og:title' content='timmybytes' />
          <meta
            property='og:description'
            content="Timothy Merritt's development portfolio and blog"
          />
          <meta property='og:url' content='https://timmybytes.com' />
          <meta property='og:type' content='website' />
          <meta property='og:image' content='../public/images/SocialCard.png' />
          <meta property='og:image:type' content='image/png' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='647' />
          <meta property='og:image:alt' content='The timmybytes logo' />
          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:image'
            content='../public/images/SocialCard.png'
          />
          <meta property='twitter:creator' content='@timmybytes' />
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
