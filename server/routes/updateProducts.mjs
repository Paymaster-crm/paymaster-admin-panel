import express from "express";
import ContentModel from "../models/contentModel.mjs";

const router = express.Router();

router.post("/api/update-products", async (req, res) => {
  const {
    products_heading,
    product_1_name,
    product_2_name,
    product_3_name,
    product_1_heading,
    product_2_heading,
    product_3_heading,
    product_1_content,
    product_2_content,
    product_3_content,
    product_1_img,
    product_2_img,
    product_3_img,
    product_1_btn_1_text,
    product_1_btn_1_link,
    product_1_btn_2_text,
    product_1_btn_2_link,
    product_2_btn_1_text,
    product_2_btn_1_link,
    product_2_btn_2_text,
    product_2_btn_2_link,
    product_3_btn_1_text,
    product_3_btn_1_link,
    product_3_btn_2_text,
    product_3_btn_2_link,
  } = req.body;

  try {
    // Create an object with only the defined values
    const updatedFields = {};
    if (products_heading !== undefined && products_heading !== "")
      updatedFields.products_heading = products_heading;
    if (product_1_name !== undefined && product_1_name !== "")
      updatedFields.product_1_name = product_1_name;
    if (product_2_name !== undefined && product_2_name !== "")
      updatedFields.product_2_name = product_2_name;
    if (product_3_name !== undefined && product_3_name !== "")
      updatedFields.product_3_name = product_3_name;
    if (product_1_heading !== undefined && product_1_heading !== "")
      updatedFields.product_1_heading = product_1_heading;
    if (product_2_heading !== undefined && product_2_heading !== "")
      updatedFields.product_2_heading = product_2_heading;
    if (product_3_heading !== undefined && product_3_heading !== "")
      updatedFields.product_3_heading = product_3_heading;
    if (product_1_content !== undefined && product_1_content !== "")
      updatedFields.product_1_content = product_1_content;
    if (product_2_content !== undefined && product_2_content !== "")
      updatedFields.product_2_content = product_2_content;
    if (product_2_content !== undefined && product_2_content !== "")
      updatedFields.product_2_content = product_2_content;
    if (product_3_content !== undefined && product_3_content !== "")
      updatedFields.product_3_content = product_3_content;
    if (product_1_img !== undefined && product_1_img !== "")
      updatedFields.product_1_img = product_1_img;
    if (product_2_img !== undefined && product_2_img !== "")
      updatedFields.product_2_img = product_2_img;
    if (product_3_img !== undefined && product_3_img !== "")
      updatedFields.product_3_img = product_3_img;

    if (product_1_btn_1_text !== undefined && product_1_btn_1_text !== "")
      updatedFields.product_1_btn_1_text = product_1_btn_1_text;
    if (product_1_btn_1_link !== undefined && product_1_btn_1_link !== "")
      updatedFields.product_1_btn_1_link = product_1_btn_1_link;

    if (product_1_btn_2_text !== undefined && product_1_btn_2_text !== "")
      updatedFields.product_1_btn_2_text = product_1_btn_2_text;
    if (product_1_btn_2_link !== undefined && product_1_btn_2_link !== "")
      updatedFields.product_1_btn_2_link = product_1_btn_2_link;

    if (product_2_btn_1_text !== undefined && product_2_btn_1_text !== "")
      updatedFields.product_2_btn_1_text = product_2_btn_1_text;
    if (product_2_btn_1_link !== undefined && product_2_btn_1_link !== "")
      updatedFields.product_2_btn_1_link = product_2_btn_1_link;

    if (product_2_btn_2_text !== undefined && product_2_btn_2_text !== "")
      updatedFields.product_2_btn_2_text = product_2_btn_2_text;
    if (product_2_btn_2_link !== undefined && product_2_btn_2_link !== "")
      updatedFields.product_2_btn_2_link = product_2_btn_2_link;

    if (product_3_btn_1_text !== undefined && product_3_btn_1_text !== "")
      updatedFields.product_3_btn_1_text = product_3_btn_1_text;
    if (product_3_btn_1_link !== undefined && product_3_btn_1_link !== "")
      updatedFields.product_3_btn_1_link = product_3_btn_1_link;

    if (product_3_btn_2_text !== undefined && product_3_btn_2_text !== "")
      updatedFields.product_3_btn_2_text = product_3_btn_2_text;
    if (product_3_btn_2_link !== undefined && product_3_btn_2_link !== "")
      updatedFields.product_3_btn_2_link = product_3_btn_2_link;

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
