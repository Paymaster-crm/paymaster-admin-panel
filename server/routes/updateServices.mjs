import express from "express";
import ContentModel from "../models/contentModel.mjs";

const router = express.Router();

router.post("/api/update-services", async (req, res) => {
  const {
    services_heading,
    services_banner_img,
    services_bg_img,
    services_inner_heading,
    services,
  } = req.body;

  try {
    // Create an object with only the defined values
    const updatedFields = {};
    if (services_heading !== undefined && services_heading !== "")
      updatedFields.services_heading = services_heading;

    if (services_banner_img !== undefined && services_banner_img !== "")
      updatedFields.services_banner_img = services_banner_img;

    if (services_bg_img !== undefined && services_bg_img !== "")
      updatedFields.services_bg_img = services_bg_img;

    if (services_inner_heading !== undefined && services_inner_heading !== "")
      updatedFields.services_inner_heading = services_inner_heading;

    if (Array.isArray(services) && services.length > 0) {
      updatedFields.services = services;
    }

    // Find the document and update it, or create a new one if none exists
    const updatedContent = await ContentModel.findOneAndUpdate(
      {},
      { $set: updatedFields },
      { new: true, upsert: true }
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
