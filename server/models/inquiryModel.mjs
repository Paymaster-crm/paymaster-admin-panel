import mongoose from "mongoose";

const { Schema, model } = mongoose;

const InquirySchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  mobile: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    trim: true,
  },
  services: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default model("Inquiry", InquirySchema);
