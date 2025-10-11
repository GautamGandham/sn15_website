require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const allowedOrigin = process.env.FRONTEND_ORIGIN || 'http://localhost:5173';
app.use(cors({
  origin: allowedOrigin,
  methods: ['GET', 'POST', 'OPTIONS'],
}));

function validateRequiredEnv() {
  const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];
  const missing = required.filter((k) => !process.env[k] || String(process.env[k]).trim() === '');
  if (missing.length) {
    console.error('❌ Missing required SMTP env vars:', missing.join(', '));
    return false;
  }
  return true;
}

let transporter;

async function createTransporter() {
  if (process.env.USE_ETHEREAL === 'true' || !validateRequiredEnv()) {
    console.warn('⚠️ Using Ethereal test account for emails. Set SMTP_ envs to use real SMTP.');
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    return transporter;
  }

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporter;
}

// Route: Book Demo
app.post('/api/book-demo', async (req, res) => {
  try {
    const { name, email, phone, role, about, company, companyRole } = req.body;

    console.log("📩 Attempting to send email with data:", req.body);
    console.log("SMTP settings check:", {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      passLength: process.env.SMTP_PASS ? process.env.SMTP_PASS.length : 0
    });

    if (!transporter) await createTransporter();
    if (!validateRequiredEnv() && process.env.USE_ETHEREAL !== 'true') {
      return res.status(500).json({ message: 'Mail server is not configured properly on the backend.' });
    }

    const toAddress = process.env.EMAIL_TO || process.env.SMTP_USER;

    const html = `
      <h2>Book Demo Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || '-'}</p>
      <p><strong>Role:</strong> ${role}</p>
      <p><strong>About:</strong> ${about}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${companyRole ? `<p><strong>Role in Company:</strong> ${companyRole}</p>` : ''}
    `;

    let info = await transporter.sendMail({
      from: {
        name: 'Website Demo',
        address: transporter.options.auth?.user || process.env.SMTP_USER,
      },
      to: toAddress,
      subject: `New Book Demo Request from ${name}`,
      html,
      text: `Book Demo Request\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nRole: ${role}\nAbout: ${about}\n${company ? `Company: ${company}\n` : ''}${companyRole ? `Role in Company: ${companyRole}\n` : ''}`,
    });

    console.log("✅ Email sent:", info.messageId);
    const previewUrl = nodemailer.getTestMessageUrl ? nodemailer.getTestMessageUrl(info) : null;
    if (previewUrl) console.log('🔗 Ethereal preview URL:', previewUrl);
    res.json({ message: 'Demo request received and email sent', previewUrl });
  } catch (error) {
    console.error('❌ Error sending email:', {
      message: error.message,
      code: error.code,
      response: error.response,
      command: error.command,
    });
    res.status(500).json({ message: 'Failed to send demo request email', error: error.message, code: error.code });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ ok: true, smtpConfigured: !!process.env.SMTP_HOST, frontendOrigin: allowedOrigin });
});

// Start server with transport verification
async function start() {
  const PORT = process.env.PORT || 5000;
  try {
    await createTransporter();
    if (process.env.USE_ETHEREAL === 'true') {
      console.log('✅ SMTP transporter (Ethereal) ready');
    } else if (validateRequiredEnv()) {
      await transporter.verify();
      console.log('✅ SMTP transporter verified and ready');
    } else {
      console.warn('⚠️ SMTP not fully configured. Email sending will fail until env is fixed.');
    }
  } catch (err) {
    console.error('❌ SMTP verification failed:', err.message);
  }
  app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT} (CORS origin: ${allowedOrigin})`));
}

start();
