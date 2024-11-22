import express from "express";
import Razorpay from "razorpay";
import dotenv from "dotenv";

dotenv.config();

// Initialize Razorpay instance with your credentials

const razorpay = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

const router = express.Router();

// Route to create a Razorpay order
router.post("/api/create-order", async (req, res) => {
  try {
    const { amount, currency = "INR", receipt, notes } = req.body;

    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    // Razorpay order options
    const options = {
      amount: amount * 100,
      currency: currency,
      receipt: receipt || `order_rcptid_${new Date().getTime()}`,
    };

    // Create order via Razorpay API
    const order = await razorpay.orders.create(options);

    // Send back order details to the frontend
    res.status(200).json(order);
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
