import express from "express";
import BlogModel from "../models/blogModel.mjs";

const router = express.Router();

router.get("/api/get-blogs", async (req, res) => {
  try {
    const blogs = await BlogModel.find({}).limit(3);
    if (!blogs) {
      return res.status(404).send({ message: "Blogs not found" });
    }
    res.status(200).send(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
