import styles from '../styles/glassEffect.module.css';

const PerformanceSection = () => {
  return (
    <section className={styles.glass} style={{ padding: '50px 20px', margin: '50px', textAlign: 'center' }}>
      <h2>Personal Performance</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px'
      }}>
        <img src="https://via.placeholder.com/500x250" alt="Performance Chart" style={{ maxWidth: '100%', borderRadius: '10px' }} />
        <div style={{ marginTop: '20px' }}>
          <h3>Quarterly Performance Report</h3>
          <p>Keep track of your productivity and team goals efficiently.</p>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
