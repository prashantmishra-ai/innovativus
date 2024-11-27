import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Innovativus Technologies | Empowering Productivity</title>
        <meta name="description" content="Innovativus Technologies - Revolutionize productivity with smart AI-driven solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <div className={styles.landingContainer}>
        <h1 className={styles.companyName}>Innovativus Technologies</h1>
        <p className={styles.tagline}>
          <span className={styles.typewriter}>Empowering Innovations for a Better Tomorrow...</span>
        </p>
      </div>

      <Footer />
    </>
  );
}
