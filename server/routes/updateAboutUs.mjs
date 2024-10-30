import express from "express";
import ContentModel from "../models/contentModel.mjs";

const router = express.Router();

router.post("/api/update-about-us", async (req, res) => {
  const {
    about_us_heading,
    about_us_banner_info,
    about_us_content_heading,
    about_us_content,
    about_us_images,
  } = req.body;

  try {
    // Create an object with only the defined values
    const updatedFields = {};
    if (about_us_content !== undefined && about_us_content !== "")
      updatedFields.about_us_content = about_us_content;
    if (about_us_heading !== undefined && about_us_heading !== "")
      updatedFields.about_us_heading = about_us_heading;
    if (about_us_banner_info !== undefined && about_us_banner_info !== "")
      updatedFields.about_us_banner_info = about_us_banner_info;
    if (
      about_us_content_heading !== undefined &&
      about_us_content_heading !== ""
    )
      updatedFields.about_us_content_heading = about_us_content_heading;

    // Handle the images array
    if (about_us_images && Array.isArray(about_us_images)) {
      updatedFields.about_us_images = about_us_images.filter(
        (image) => image.about_us_img !== undefined && image.about_us_img !== ""
      );
    }

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
