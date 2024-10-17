import express from "express";
import ContentModel from "../models/contentModel.mjs";

const router = express.Router();

router.post("/api/update-about-us", async (req, res) => {
  const { about_us_bg, about_us_img, about_us_content } = req.body;

  try {
    // Create an object with only the defined values
    const updatedFields = {};
    if (about_us_bg !== undefined && about_us_bg !== "")
      updatedFields.about_us_bg = about_us_bg;
    if (about_us_img !== undefined && about_us_img !== "")
      updatedFields.about_us_img = about_us_img;
    if (about_us_content !== undefined && about_us_content !== "")
      updatedFields.about_us_content = about_us_content;

    // Find the document and update it, or create a new one if none exists
    const updatedContent = await ContentModel.findOneAndUpdate(
      {}, // Find the only document in the collection
      { $set: updatedFields }, // Only update the defined fields
      { new: true, upsert: true } // Create the document if it doesn't exist
    );

    res
      .status(200)
      .json({ message: "Content updated successfully", updatedContent });
  } catch (error) {
    console.error("Error updating content:", error);
    res.status(500).json({ message: "Error updating content" });
  }
});

export default router;
