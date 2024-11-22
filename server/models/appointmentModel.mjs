import mongoose from "mongoose";

const { Schema, model } = mongoose;

const AppointmentSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  contact: {
    type: String,
    trim: true,
  },
  dateTime: {
    type: String,
    trim: true,
  },
});

export default model("Appointment", AppointmentSchema);
