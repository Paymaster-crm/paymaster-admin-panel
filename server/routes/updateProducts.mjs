import express from "express";
import ContentModel from "../models/contentModel.mjs";

const router = express.Router();

router.post("/api/update-products", async (req, res) => {
  const {
    products_heading,
    products, // Array of products from the frontend
  } = req.body;

  try {
    // Create an object with only the defined values
    const updatedFields = {};
    if (products_heading !== undefined && products_heading !== "") {
      updatedFields.products_heading = products_heading;
    }

    // Only update products if the array is provided and has valid entries
    if (Array.isArray(products) && products.length > 0) {
      updatedFields.products = products;
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
