import express from "express";
import ContentModel from "../models/contentModel.mjs";

const router = express.Router();

router.get("/api/get-data", async (req, res) => {
  try {
    const bannerData = await ContentModel.findOne({});

    if (!bannerData || bannerData.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json(bannerData);
  } catch (error) {
    console.error("Error fetching banner data:", error);
    res.status(500).json({ message: "Error fetching banner data" });
  }
});

export default router;
