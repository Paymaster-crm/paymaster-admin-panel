import express from "express";
import ContentModel from "../models/contentModel.mjs";

const router = express.Router();

router.post("/api/update-partners", async (req, res) => {
  const {
    partners_heading,
    partners_icon_1,
    partners_icon_2,
    partners_icon_3,
    partners_icon_4,
    partners_text_1,
    partners_text_2,
    partners_text_3,
    partners_text_4,
  } = req.body;

  try {
    // Create an object with only the defined values
    const updatedFields = {};
    if (partners_heading !== undefined && partners_heading !== "")
      updatedFields.partners_heading = partners_heading;
    if (partners_icon_1 !== undefined && partners_icon_1 !== "")
      updatedFields.partners_icon_1 = partners_icon_1;
    if (partners_icon_2 !== undefined && partners_icon_2 !== "")
      updatedFields.partners_icon_2 = partners_icon_2;
    if (partners_icon_3 !== undefined && partners_icon_3 !== "")
      updatedFields.partners_icon_3 = partners_icon_3;
    if (partners_icon_4 !== undefined && partners_icon_4 !== "")
      updatedFields.partners_icon_4 = partners_icon_4;
    if (partners_text_1 !== undefined && partners_text_1 !== "")
      updatedFields.partners_text_1 = partners_text_1;
    if (partners_text_2 !== undefined && partners_text_2 !== "")
      updatedFields.partners_text_2 = partners_text_2;
    if (partners_text_3 !== undefined && partners_text_3 !== "")
      updatedFields.partners_text_3 = partners_text_3;
    if (partners_text_4 !== undefined && partners_text_4 !== "")
      updatedFields.partners_text_4 = partners_text_4;

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
