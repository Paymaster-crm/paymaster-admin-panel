import express from "express";
import ContentModel from "../models/contentModel.mjs";

const router = express.Router();

router.post("/api/update-contact-us", async (req, res) => {
  const {
    contact_us_heading,
    contact_us_subheading,
    contact_us_phone,
    contact_us_email,
    contact_us_address,
    contact_us_working_days,
    contact_us_img,
  } = req.body;

  try {
    // Create an object with only the defined values
    const updatedFields = {};
    if (contact_us_heading !== undefined && contact_us_heading !== "")
      updatedFields.contact_us_heading = contact_us_heading;
    if (contact_us_subheading !== undefined && contact_us_subheading !== "")
      updatedFields.contact_us_subheading = contact_us_subheading;
    if (contact_us_phone !== undefined && contact_us_phone !== "")
      updatedFields.contact_us_phone = contact_us_phone;
    if (contact_us_email !== undefined && contact_us_email !== "")
      updatedFields.contact_us_email = contact_us_email;
    if (contact_us_address !== undefined && contact_us_address !== "")
      updatedFields.contact_us_address = contact_us_address;
    if (contact_us_working_days !== undefined && contact_us_working_days !== "")
      updatedFields.contact_us_working_days = contact_us_working_days;
    if (contact_us_img !== undefined && contact_us_img !== "")
      updatedFields.contact_us_img = contact_us_img;

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
