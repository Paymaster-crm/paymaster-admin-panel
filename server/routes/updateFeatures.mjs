import express from "express";
import ContentModel from "../models/contentModel.mjs";

const router = express.Router();

router.post("/api/update-features", async (req, res) => {
  const {
    features_subheading,
    features_heading,
    features_text_1,
    features_text_2,
    features_text_3,
    features_text_4,
    features_text_5,
    features_icon_1,
    features_icon_2,
    features_icon_3,
    features_icon_4,
    features_icon_5,
    features_link_text,
    features_url,
    features_subheading_2,
    features_heading_2,
    features_img,
  } = req.body;

  try {
    // Create an object with only the defined values
    const updatedFields = {};
    if (features_subheading !== undefined && features_subheading !== "")
      updatedFields.features_subheading = features_subheading;
    if (features_heading !== undefined && features_heading !== "")
      updatedFields.features_heading = features_heading;
    if (features_text_1 !== undefined && features_text_1 !== "")
      updatedFields.features_text_1 = features_text_1;
    if (features_text_2 !== undefined && features_text_2 !== "")
      updatedFields.features_text_2 = features_text_2;
    if (features_text_3 !== undefined && features_text_3 !== "")
      updatedFields.features_text_3 = features_text_3;
    if (features_text_4 !== undefined && features_text_4 !== "")
      updatedFields.features_text_4 = features_text_4;
    if (features_text_5 !== undefined && features_text_5 !== "")
      updatedFields.features_text_5 = features_text_5;
    if (features_icon_1 !== undefined && features_icon_1 !== "")
      updatedFields.features_icon_1 = features_icon_1;
    if (features_icon_2 !== undefined && features_icon_2 !== "")
      updatedFields.features_icon_2 = features_icon_2;
    if (features_icon_3 !== undefined && features_icon_3 !== "")
      updatedFields.features_icon_3 = features_icon_3;
    if (features_icon_4 !== undefined && features_icon_4 !== "")
      updatedFields.features_icon_4 = features_icon_4;
    if (features_icon_5 !== undefined && features_icon_5 !== "")
      updatedFields.features_icon_5 = features_icon_5;

    if (features_link_text !== undefined && features_link_text !== "")
      updatedFields.features_link_text = features_link_text;
    if (features_url !== undefined && features_url !== "")
      updatedFields.features_url = features_url;
    if (features_subheading_2 !== undefined && features_subheading_2 !== "")
      updatedFields.features_subheading_2 = features_subheading_2;
    if (features_heading_2 !== undefined && features_heading_2 !== "")
      updatedFields.features_heading_2 = features_heading_2;
    if (features_img !== undefined && features_img !== "")
      updatedFields.features_img = features_img;

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
