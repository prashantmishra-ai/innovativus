import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    console.log("Got in POST API")
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Set up the Nodemailer transporter with Hostinger SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com', // Hostinger SMTP host
      port: 465, // For SSL connection
      secure: true, // True for port 465, false for port 587
      auth: {
        user: process.env.SMTP_USER, // Your email address (use environment variables for security)
        pass: process.env.SMTP_PASS, // Your email password
      },
    });

    try {
      // Mail options
      const mailOptions = {
        from: process.env.SMTP_USER, // Sender address (your email)
        to: 'contact@futurist-files.com', // Your email address to receive the messages
        subject: `New Contact Form Message: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Failed to send email:', error);
      res.status(500).json({ error: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
