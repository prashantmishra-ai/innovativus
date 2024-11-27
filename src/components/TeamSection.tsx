import styles from '../styles/glassEffect.module.css';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Chief Executive Officer",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      role: "Chief Technology Officer",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Mike Johnson",
      role: "Lead Product Designer",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Emily Brown",
      role: "Head of Marketing",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section style={{ padding: '50px 20px', textAlign: 'center' }}>
      <h2>Meet Our Team</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        flexWrap: 'wrap',
        marginTop: '20px'
      }}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.glass} style={{ maxWidth: '200px', padding: '20px' }}>
            <img src={member.imageUrl} alt={member.name} style={{ width: '100%', borderRadius: '50%' }} />
            <h3 style={{ margin: '10px 0' }}>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
