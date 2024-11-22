import express from "express";
import BlogModel from "../models/blogModel.mjs";

const router = express.Router();

router.put("/api/add-blog-comment/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { name, email, message } = req.body;

    const blog = await BlogModel.findOne({ _id });

    if (!blog) {
      return res.status(404).send({ message: "Blog not found" });
    }

    const comment = {
      name,
      email,
      message,
    };

    blog.comments.push(comment);

    await blog.save();
    res.status(200).send({ message: "Comment added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
