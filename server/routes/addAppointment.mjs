import express from "express";
import AppointmentModel from "../models/appointmentModel.mjs";

const router = express.Router();

router.post("/api/add-appointment", async (req, res) => {
  try {
    const { name, email, phone, dateTime } = req.body;

    const appointment = new AppointmentModel({
      name,
      email,
      phone,
      dateTime,
    });

    await appointment.save();
    // Your logic here
    res.status(201).send({ message: "Appointment scheduled" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
