import mongoose from "mongoose";

const { Schema, model } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
  },
  featured_image: {
    type: String,
  },
  content: {
    type: String,
  },
  comments: [
    {
      name: { type: String },
      email: { type: String },
      message: { type: String },
    },
  ],
});

export default model("Blog", blogSchema);
