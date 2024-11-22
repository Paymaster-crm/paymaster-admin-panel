import express from "express";
import AppointmentModel from "../models/appointmentModel.mjs";

const router = express.Router();

router.get("/api/get-appointment-slots", async (req, res) => {
  try {
    const { year, month } = req.query;

    if (!year || !month) {
      return res.status(400).json({ message: "Year and month are required." });
    }

    // Start and end dates of the month
    const startOfMonth = new Date(year, month - 1, 1);
    const endOfMonth = new Date(year, month, 0);

    const appointments = await AppointmentModel.find({
      dateTime: {
        $gte: startOfMonth.toISOString(),
        $lte: endOfMonth.toISOString(),
      },
    });

    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ message: "Error fetching appointments." });
  }
});

export default router;
