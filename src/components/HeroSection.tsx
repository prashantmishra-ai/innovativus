import styles from '../styles/glassEffect.module.css';
import Button from './Button';

const HeroSection = () => {
  return (
    <section className={styles.glass} style={{ margin: '50px', padding: '40px' }}>
      <h1>Productivity</h1>
      <p>
        Give teams the context needed to make quick decisions while staying aligned.
      </p>
      <div>
        <Button text="Start Now" />
        <Button text="Learn More" />
      </div>
    </section>
  );
};

export default HeroSection;
