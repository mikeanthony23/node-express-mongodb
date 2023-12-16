const nodeMailer = require('nodemailer');

const sendEmail = async options => {
  // 1) Create a transporter
  const transporter = nodeMailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '7302bc4eb44a55',
      pass: 'deb5751a3434a9',
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Mike Anthony <mike@user.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
