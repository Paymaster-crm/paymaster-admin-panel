import express from "express";
import BlogModel from "../models/blogModel.mjs";

const router = express.Router();

router.post("/api/add-blog", async (req, res) => {
  try {
    const { title, featured_image, content } = req.body;
    if (!content && !title) {
      return res.status(400).send("Content is required");
    }

    const blog = new BlogModel({ content, title, featured_image });
    await blog.save();
    res.status(201).send({ message: "Blog added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
