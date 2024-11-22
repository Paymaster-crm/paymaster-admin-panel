import express from "express";
import BlogModel from "../models/blogModel.mjs";

const router = express.Router();

router.get("/api/get-blog/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const blog = await BlogModel.findOne({ _id });

    if (!blog) {
      return res.status(404).send({ message: "Blog not found" });
    }
    res.status(200).send(blog);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
