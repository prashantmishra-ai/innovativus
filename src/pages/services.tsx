import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Services.module.css';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services | Innovativus Technologies</title>
        <meta name="description" content="Learn more about the products we are building at Innovativus Technologies - Futurist-Files, Reader's Choice, and our Mail Server." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Services Hero Section */}
      <div className={styles.heroSection}>
        <h1>Our Services & Products</h1>
        <p>At Innovativus Technologies, we are committed to building innovative products that solve real-world problems. Discover what we have to offer.</p>
      </div>

      {/* Product Cards Section */}
      <div className={styles.productCardsContainer}>
        {/* Futurist-Files Product */}
        <div className={styles.cubeBox}>
          <div className={styles.productContent}>
            <h2>Futurist-Files</h2>
            <p>
              Futurist-Files is a comprehensive solution for IT service providers, offering web development, app development, and digital marketing tools. With Futurist-Files, we aim to empower businesses to leverage cutting-edge technology for growth and digital transformation.
            </p>
            <p>
              <a href="https://futurist-files.com" target="_blank" rel="noopener noreferrer" className={styles.productLink}>Visit Futurist-Files Website</a>
            </p>
          </div>
        </div>

        {/* Reader's Choice Product */}
        <div className={styles.cubeBox}>
          <div className={styles.productContent}>
            <h2>Reader's Choice (Under Development)</h2>
            <p>
              Reader's Choice is an exciting new product designed to transform the reading experience. Whether you're an avid book lover or a casual reader, Reader's Choice will offer personalized recommendations and tools to help you connect with your favorite literature in innovative ways.
            </p>
            <p>
              Stay tuned for more updates as we work on bringing Reader's Choice to life.
            </p>
          </div>
        </div>

        {/* Mail Server Product */}
        <div className={styles.cubeBox}>
          <div className={styles.productContent}>
            <h2>Mail Server (Under Development)</h2>
            <p>
              Innovativus Technologies is currently building a robust and secure mail server to enhance communication for businesses. Our mail server will be built with a focus on privacy, reliability, and user-friendly features that help users manage their emails effectively.
            </p>
            <p>
              This product is currently in development, and we can't wait to show you what we are building.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
