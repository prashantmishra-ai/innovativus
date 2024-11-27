import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState,FormEvent, ChangeEvent } from 'react'; // Import useState for form state handling
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(''); // To handle status messages

  // Handle form data changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: FormEvent) => {
    console.log("Handled")
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        }); // Reset the form data
      } else {
        setFormStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setFormStatus('An error occurred while sending the message.');
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Innovativus Technologies</title>
        <meta name="description" content="Get in touch with Innovativus Technologies. Contact us for inquiries about our products and services." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>

      <Header />

      {/* Contact Page Main Container */}
      <div className={styles.contactContainer}>
        {/* Contact Form */}
        <div className={styles.contactForm}>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
          {formStatus && <p className={styles.formStatus}>{formStatus}</p>}
        </div>

        {/* Contact Information */}
        <div className={styles.contactDetails}>
          <h2>Contact Details</h2>
          <ul>
            <li>
              <i className="fas fa-globe"></i>
              <div>
                <strong>Website:</strong><br />
                <a href="https://futurist-files.com" target="_blank" rel="noopener noreferrer">www.futurist-files.com</a><br />
                <a href="https://innovativus.tech" target="_blank" rel="noopener noreferrer">www.innovativus.tech</a>
              </div>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <div>
                <strong>Phone:</strong><br />
                +91 82690 87179, +91 97177 07930
              </div>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <div>
                <strong>E-mail:</strong><br />
                prashantmishra@futurist-files.com<br />
                contact@futurist-files.com
              </div>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>HQ Address:</strong><br />
                4598/12B, Gola Cottage, Ansari Road,<br />
                Darya Ganj, New Delhi 110002
              </div>
            </li>
            <li>
              <i className="fas fa-clipboard-list"></i>
              <div>
                <strong>Registration Details:</strong><br />
                CIN: U73100DL2024PTC436511<br />
                PAN: AAHCI8450Q<br />
                DPIIT: DPIIT179802
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}
