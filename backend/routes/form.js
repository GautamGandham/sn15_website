const express = require('express');
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const Form = require('../models/Form');

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
});

async function sendFormEmail(type, data) {
  const subject = type === 'book-demo'
    ? `New Book Demo request from ${data.name}`
    : `New Contact message from ${data.name}`;

  const html = `
    <h2>${subject}</h2>
    <ul>
      <li>Name: ${data.name}</li>
      <li>Email: ${data.email}</li>
      <li>Phone: ${data.phone || '-'}</li>
      <li>Company: ${data.company || '-'}</li>
      <li>Message: ${data.message || '-'}</li>
    </ul>
  `;

  await transporter.sendMail({
    from: `"Website" <no-reply@yourdomain.com>`,
    to: process.env.EMAIL_TO,
    subject,
    html
  });
}

router.post('/book-demo',
  [ check('name').notEmpty(), check('email').isEmail() ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const payload = { type: 'book-demo', ...req.body };
    await new Form(payload).save();
    await sendFormEmail('book-demo', payload);

    res.status(201).json({ message: 'Demo request sent' });
  }
);

router.post('/contact',
  [ check('name').notEmpty(), check('email').isEmail() ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const payload = { type: 'contact', ...req.body };
    await new Form(payload).save();
    await sendFormEmail('contact', payload);

    res.status(201).json({ message: 'Contact message sent' });
  }
);

module.exports = router;
