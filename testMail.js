const nodemailer = require('nodemailer');

async function sendTestEmail() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    secure: false,
    auth: {
      user: 'postmaster@sandboxe26f71fb617c4d60b0929be8cb80274e.mailgun.org',
      pass: 'e92402396788a90c48cc233e7cd6d33e-f55d7446-02e9646f',
    },
  });

  try {
    const info = await transporter.sendMail({
      from: 'Test <no-reply@example.com>',
      to: ['prathampatel0440@gmail.com'],
      subject: 'Testing SMTP with Nodemailer',
      text: 'This is a test email sent using Nodemailer and Mailgun SMTP.',
    });
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendTestEmail();
