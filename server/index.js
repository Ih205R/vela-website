import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware - CORS configuration for production
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:4173',
    'https://vela-website.vercel.app',
    // Add your production domain here when you have one
  ],
  credentials: true
}));
app.use(express.json());

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'ihorr30@gmail.com',
    pass: process.env.EMAIL_PASS || 'vhoa scrf ugpx jxln'
  }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER || 'ihorr30@gmail.com',
    to: process.env.EMAIL_USER || 'ihorr30@gmail.com',
    subject: `Vela Contact Form: Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1;">New Contact Form Submission</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
        <p style="color: #6b7280; font-size: 12px;">
          This email was sent from the Vela website contact form.
        </p>
      </div>
    `,
    replyTo: email
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Vela email server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Vela Email API', 
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      sendEmail: 'POST /api/send-email'
    }
  });
});

app.listen(PORT, () => {
  console.log(`✓ Vela email server running on port ${PORT}`);
  console.log(`✓ Environment: ${process.env.NODE_ENV || 'development'}`);
});
