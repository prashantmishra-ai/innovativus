import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: 'rgba(17, 17, 17, 0.9)', // Added solid background color for better visibility
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      flexWrap: 'wrap',
    }}>
      {/* Logo Section */}
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ff004c' }}>
        Innovativus Technologies
      </div>

      {/* Hamburger Button for Mobile Devices */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        backgroundColor: 'transparent',
        border: 'none',
        color: '#fff',
        fontSize: '2rem',
        cursor: 'pointer',
        display: 'none', // Hidden on larger screens by default
      }} className="hamburger-button">
        ☰
      </button>

      {/* Navigation Menu */}
      <nav style={{
        display: menuOpen ? 'block' : 'flex',
        flexDirection: menuOpen ? 'column' : 'row',
        alignItems: menuOpen ? 'flex-start' : 'center',
        marginTop: menuOpen ? '10px' : '0',
        transition: 'all 0.3s ease-in-out',
      }}   className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '20px',
          flexDirection: menuOpen ? 'column' : 'row',
          marginTop: menuOpen ? '10px' : '0',
          textAlign: menuOpen ? 'left' : 'center',
        }}>
          <li><Link href="/"><span style={{ color: '#fff' }}>Home</span></Link></li>
          <li><Link href="/about"><span style={{ color: '#fff' }}>About</span></Link></li>
          <li><Link href="/services"><span style={{ color: '#fff' }}>Services</span></Link></li>
          <li><Link href="/contact"><span style={{ color: '#fff' }}>Contact</span></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
