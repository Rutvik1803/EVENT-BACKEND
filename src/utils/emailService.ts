import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendVerificationEmail = async (email: string, token: string) => {
    const verificationLink = `http://localhost:4000/api/auth/verify-email?token=${token}`;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Verify Your Email",
        html: `
            <h3>Welcome to Event Planner!</h3>
            <p>Click the link below to verify your email:</p>
            <a href="${verificationLink}" target="_blank">${verificationLink}</a>
        `,
    };

    await transporter.sendMail(mailOptions);
};
