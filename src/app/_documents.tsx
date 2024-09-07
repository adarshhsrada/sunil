// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Content from "../content"
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>{Content.homePageTitle}</title>
          <meta name="description" content={Content.homePageDescription} />
          <meta name="keywords" content={Content.SEOKeywords} />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content={Content.homePageTitle} />
          <meta property="og:description" content={Content.homePageDescription} />
          <meta property="og:url" content="https://arc-sunil.vercel.app/" />
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
