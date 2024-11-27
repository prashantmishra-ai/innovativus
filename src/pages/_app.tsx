import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Metadata for the application */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Innovativus Technologies - Empowering productivity with smart AI-driven solutions." />
        <link rel="icon" href="/favicon.ico" />
        <title>Innovativus Technologies</title>
      </Head>
      
      {/* Main component rendering the current page */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
