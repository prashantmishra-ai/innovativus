import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Innovativus Technologies</title>
        <meta name="description" content="Learn more about Innovativus Technologies - our mission, vision, and what we do." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Simplified "About Innovativus Technologies" Section */}
      <div className={styles.simpleHeroSection}>
        <h1>About Innovativus Technologies</h1>
        <p>
          At Innovativus Technologies, we are committed to empowering productivity through smart, AI-driven solutions.
          Our mission is to innovate and provide cutting-edge technologies to make the world a better place.
        </p>
      </div>

      {/* Parallax effect for Vision and Mission */}
      <div className={styles.parallaxSection}>
        <h2>Our Vision and Mission</h2>
      </div>
      <div className={`${styles.alternateSection} ${styles.leftAlign}`}>
        <div className={`${styles.glassCard} ${styles.textContent}`}>
          <p><strong>Our Vision:</strong> At Innovativus Technologies, we envision a world where technology seamlessly enhances productivity and quality of life for people everywhere. We strive to be pioneers in developing innovative solutions that make a significant impact on society.</p>
          <p><strong>Our Mission:</strong> Our mission is to empower businesses and individuals by providing smart, AI-driven solutions that simplify processes, drive efficiency, and promote growth. We aim to bridge the gap between people and technology by offering cutting-edge services and tools.</p>
        </div>
      </div>

      {/* Parallax effect for Our Core Values */}
      <div className={styles.parallaxSection}>
        <h2>Our Core Values</h2>
      </div>
      <div className={`${styles.alternateSection} ${styles.rightAlign}`}>
        <div className={styles.cardsContainer}>
          <div className={`${styles.glassCard}`}>
            <strong>Innovation:</strong> Innovation lies at the core of everything we do. We push boundaries and challenge the status quo to deliver revolutionary solutions.
          </div>
          <div className={`${styles.glassCard}`}>
            <strong>Collaboration:</strong> We believe that great things are achieved together. Our team works closely with clients to understand their challenges and develop solutions that truly meet their needs.
          </div>
          <div className={`${styles.glassCard}`}>
            <strong>Integrity:</strong> Honesty and transparency are our guiding principles. We are committed to delivering on our promises and maintaining strong relationships with our partners and clients.
          </div>
          <div className={`${styles.glassCard}`}>
            <strong>Customer-Centric Approach:</strong> Our customers are at the heart of every decision we make. We prioritize user experience and strive to deliver value that makes a tangible difference in the lives of our customers.
          </div>
        </div>
      </div>

      {/* Parallax effect for Our Goals */}
      <div className={styles.parallaxSection}>
        <h2>Our Goals</h2>
      </div>
      <div className={`${styles.alternateSection} ${styles.leftAlign}`}>
        <div className={styles.cardsContainer}>
          <div className={`${styles.glassCard}`}>
            To be a leading provider of AI-driven technologies that help businesses become more efficient and innovative.
          </div>
          <div className={`${styles.glassCard}`}>
            To contribute to the technological advancement of society by building tools that empower individuals and communities.
          </div>
          <div className={`${styles.glassCard}`}>
            To foster a work environment where creativity, collaboration, and innovation are celebrated.
          </div>
        </div>
      </div>

      {/* Parallax effect for Why Choose Us */}
      <div className={styles.parallaxSection}>
        <h2>Why Choose Us?</h2>
      </div>
      <div className={`${styles.alternateSection} ${styles.rightAlign}`}>
        <div className={styles.cardsContainer}>
          <div className={`${styles.glassCard}`}>
            <strong>Expertise:</strong> With years of experience in software development and AI, our team brings deep technical expertise to every project.
          </div>
          <div className={`${styles.glassCard}`}>
            <strong>Personalized Solutions:</strong> We understand that every business is unique. We take the time to understand your needs and tailor our solutions to fit your specific requirements.
          </div>
          <div className={`${styles.glassCard}`}>
            <strong>Commitment to Excellence:</strong> We are committed to delivering quality in every aspect of our work. From ideation to execution, we aim for excellence.
          </div>
          <div className={`${styles.glassCard}`}>
            <strong>Future-Focused:</strong> At Innovativus Technologies, we stay ahead of the curve by keeping up with the latest technological trends. We provide solutions that are ready for tomorrow's challenges.
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
