import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: '#fff',
      padding: '40px 20px',
      textAlign: 'center',
      marginTop: '50px'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <h3>Innovativus Technologies Private Limited</h3>
        <p>Empowering productivity with smart AI-driven solutions for a brighter future.</p>
      </div>
      <nav style={{ marginBottom: '20px' }}>
        <ul style={{
          display: 'flex',
          justifyContent: 'center',
          listStyle: 'none',
          gap: '20px',
        }}>
          <li>
            <Link href="/">
            Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact">
            Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <div style={{ marginBottom: '20px' }}>
        <p>&copy; {new Date().getFullYear()} Innovativus Technologies Private Limited. All rights reserved.</p>
      </div>
      <div>
        <p>Follow us on:
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', color: '#ff004c' }}>Twitter</Link> | 
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', color: '#ff004c' }}>LinkedIn</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
