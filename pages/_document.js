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
          <meta name='title' content='timmybytes' />
          <meta
            name='description'
            content='timmybytes is a portfolio and blog for Timothy Merritt | Developer, Designer, Writer, and Musician'
          />
          {/* Fonts */}
          <link
            rel='preload'
            href='/fonts/HK-Grotesk/HKGrotesk-Black.otf'
            as='font'
            type='font/ttf'
            crossorigin
          />
          <link
            rel='preload'
            href='/fonts/HK-Grotesk/HKGrotesk-Bold.otf'
            as='font'
            type='font/ttf'
            crossorigin
          />
          <link
            rel='preload'
            href='/fonts/HK-Grotesk/HKGrotesk-BoldItalic.otf'
            as='font'
            type='font/ttf'
            crossorigin
          />
          <link
            rel='preload'
            href='/fonts/HK-Grotesk/HKGrotesk-ExtraBold.otf'
            as='font'
            type='font/ttf'
            crossorigin
          />
          <link
            rel='preload'
            href='/fonts/HK-Grotesk/HHKGrotesk-Italic.otf'
            as='font'
            type='font/ttf'
            crossorigin
          />
          <link
            rel='preload'
            href='/fonts/HK-Grotesk/HKGrotesk-Light.otf'
            as='font'
            type='font/ttf'
            crossorigin
          />
          <link
            rel='preload'
            href='/fonts/HK-Grotesk/HKGrotesk-LightItalic.otf'
            as='font'
            type='font/ttf'
            crossorigin
          />
          <link
            rel='preload'
            href='/fonts/HK-Grotesk/HKGrotesk-Medium.otf'
            as='font'
            type='font/ttf'
            crossorigin
          />
          <link
            rel='preload'
            href='/fonts/HK-Grotesk/HKGrotesk-MediumItalic.otf'
            as='font'
            type='font/ttf'
            crossorigin
          />
          <link
            rel='preload'
            href='/fonts/HK-Grotesk/HKGrotesk-Regular.otf'
            as='font'
            type='font/ttf'
            crossorigin
          />
          <link
            rel='preload'
            href='/fonts/HK-Grotesk/HKGrotesk-SemiBold.otf'
            as='font'
            type='font/ttf'
            crossorigin
          />
          <link
            rel='preload'
            href='/fonts/HK-Grotesk/HKGrotesk-SemiBoldItalic.otf'
            as='font'
            type='font/ttf'
            crossorigin
          />
          <link
            rel='preload'
            href='/fonts/Iosevka/iosevka-bold.ttf'
            as='font'
            type='font/ttf'
            crossorigin
          />
          <link
            rel='preload'
            href='/fonts/Iosevka/iosevka-italic.ttf'
            as='font'
            type='font/ttf'
            crossorigin
          />
          <link
            rel='preload'
            href='/fonts/Iosevka/iosevka-regular.ttf'
            as='font'
            type='font/ttf'
            crossorigin
          />
          {/* Icons and Favicons */}
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicons/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicons/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ff90ad' />
          {/* Open graph */}
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='timmybytes' />
          <meta
            property='og:description'
            content='timmybytes is a portfolio and blog for Timothy Merritt | Developer, Designer, Writer, and Musician'
          />
          <meta property='og:url' content='https://timmybytes.com' />
          <meta
            property='og:image'
            content='https://raw.githubusercontent.com/timmybytes/timmybytes-blog/main/public/images/timmybytes-Plain-Business-OG-Card.png'
          />
          <meta property='og:image:type' content='image/png' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='647' />
          <meta property='og:image:alt' content='The timmybytes logo' />
          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:image'
            content='https://raw.githubusercontent.com/timmybytes/timmybytes-blog/main/public/images/timmybytes-Plain-Business-OG-Card.png'
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
