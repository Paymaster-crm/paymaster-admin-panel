import express from "express";
import ContentModel from "../models/contentModel.mjs";

const router = express.Router();

router.post("/api/update-reviews", async (req, res) => {
  const { review, reviewer_name } = req.body;

  try {
    // Create an object with only the defined values
    const updatedFields = {};
    if (review !== undefined && review !== "") updatedFields.review = review;
    if (reviewer_name !== undefined && reviewer_name !== "")
      updatedFields.reviewer_name = reviewer_name;

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
