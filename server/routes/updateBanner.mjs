import express from "express";
import ContentModel from "../models/contentModel.mjs";

const router = express.Router();

router.post("/api/update-banner", async (req, res) => {
  const {
    banner_subheading,
    banner_heading,
    banner_content,
    banner_btn_1_text,
    banner_btn_1_link,
    banner_btn_2_text,
    banner_btn_2_link,
    banner_bg,
    banner_image,
  } = req.body;

  try {
    // Create an object with only the defined values
    const updatedFields = {};
    if (banner_subheading !== undefined && banner_subheading !== "")
      updatedFields.banner_subheading = banner_subheading;
    if (banner_heading !== undefined && banner_heading !== "")
      updatedFields.banner_heading = banner_heading;
    if (banner_content !== undefined && banner_content !== "")
      updatedFields.banner_content = banner_content;
    if (banner_btn_1_text !== undefined && banner_btn_1_text !== "")
      updatedFields.banner_btn_1_text = banner_btn_1_text;
    if (banner_btn_1_link !== undefined && banner_btn_1_link !== "")
      updatedFields.banner_btn_1_link = banner_btn_1_link;
    if (banner_btn_2_text !== undefined && banner_btn_2_text !== "")
      updatedFields.banner_btn_2_text = banner_btn_2_text;
    if (banner_btn_2_link !== undefined && banner_btn_2_link !== "")
      updatedFields.banner_btn_2_link = banner_btn_2_link;
    if (banner_bg !== undefined && banner_bg !== "")
      updatedFields.banner_bg = banner_bg;
    if (banner_image !== undefined && banner_image !== "")
      updatedFields.banner_image = banner_image;

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
