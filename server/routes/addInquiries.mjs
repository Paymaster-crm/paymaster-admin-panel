import express from "express";
import InquiryModel from "../models/inquiryModel.mjs";
import aws from "aws-sdk";
import nodemailer from "nodemailer";

// Configure AWS SDK
aws.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: "ap-south-1",
});

// Create Nodemailer SES transporter
let transporter = nodemailer.createTransport({
  SES: new aws.SES({ apiVersion: "2010-12-01" }),
});

const router = express.Router();

router.post("/api/add-inquiries", async (req, res) => {
  const { first_name, last_name, mobile, message, services, email } = req.body;

  try {
    // Create a new inquiry document
    const inquiry = new InquiryModel({
      first_name,
      last_name,
      mobile,
      message,
      services,
      email,
    });

    await inquiry.save();

    const mailOptions = {
      to: process.env.NOTIFICATION_EMAIL, // Your email address where inquiries should be sent
      from: process.env.EMAIL_FROM,
      subject: "New Inquiry Received",
      html: `
        <h1>New Inquiry from ${first_name} ${last_name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Service Interested:</strong> ${services}</p>
        <p>Thank you!</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (err) {
      console.error("Error sending email:", err);
    }

    res.status(201).json({ message: "Inquiry added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding inquiry" });
  }
});

export default router;
