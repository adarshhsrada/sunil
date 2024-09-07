import Home from "@/pages/Home";
import Head from 'next/head';
import Content from "@/content";
const App = () =>
  
  <>
    <Head>
      <title>{Content.homePageTitle}</title>
      <meta name="description" content={Content.homePageDescription} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": Content.homePageTitle,
            "description": Content.homePageDescription,
            "url": "https://arc-sunil.vercel.app",
          }),
        }}
      />
    </Head>
    <Home />
  </>

export default App;
