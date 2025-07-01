import dotenv from "dotenv";
import nodemailer from "nodemailer"
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("Gmail services are not ready to send emails. Please check the email configuration.");
  } else {
    console.log("Gmail services are ready to send emails.");
  }
});

const sendEmail = async (to, subject, body) => {
  try {
    await transporter.sendMail({
      from: `"LMS Support" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: body,
    });
    console.log(`Email sent successfully to ${to}`);
  } catch (error) {
    console.error(`Failed to send email to ${to}:`, error);
  }
};

export const sendResetPasswordLinkToEmail = async (to, token) => {
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${token}`;
  const html = `
    <h2>Password Reset Request - LMS Platform</h2>
    <p>Hello,</p>
    <p>We received a request to reset your password for your LMS account.</p>
    <p>Please click the link below to choose a new password:</p>
    <a href="${resetUrl}" style="display:inline-block;padding:10px 20px;background-color:#4CAF50;color:white;text-decoration:none;border-radius:5px;">Reset Password</a>
    <p>If you did not request a password reset, you can safely ignore this email.</p>
    <br/>
    <p>Thanks,</p>
    <p><strong>LMS Support Team</strong></p>
  `;
  await sendEmail(to, "Reset Your LMS Password", html);
};
