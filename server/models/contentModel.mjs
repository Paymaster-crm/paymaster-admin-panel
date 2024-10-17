import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contentSchema = new Schema({
  // banner
  banner_subheading: {
    type: String,
  },
  banner_heading: {
    type: String,
  },
  banner_content: { type: String },
  banner_btn_1_text: { type: String },
  banner_btn_1_link: { type: String },
  banner_btn_2_text: { type: String },
  banner_btn_2_link: { type: String },
  banner_bg: { type: String },
  banner_image: { type: String },
  // about us
  about_us_content: {
    type: String,
  },
  about_us_bg: {
    type: String,
  },
  about_us_img: {
    type: String,
  },
  // features
  features_subheading: { type: String },
  features_heading: { type: String },
  banner_content: { type: String },
  features_icon_1: { type: String },
  features_text_1: { type: String },
  features_icon_2: { type: String },
  features_text_2: { type: String },
  features_icon_3: { type: String },
  features_text_3: { type: String },
  features_icon_4: { type: String },
  features_text_4: { type: String },
  features_icon_5: { type: String },
  features_text_5: { type: String },
  features_link_text: { type: String },
  features_url: { type: String },
  features_subheading_2: { type: String },
  features_heading_2: { type: String },
  features_img: { type: String },
  // reviews
  review: { type: String },
  reviewer_name: { type: String },
  // partners
  partners_heading: { type: String },
  partners_icon_1: { type: String },
  partners_icon_2: { type: String },
  partners_icon_3: { type: String },
  partners_icon_4: { type: String },
  partners_text_1: { type: String },
  partners_text_2: { type: String },
  partners_text_3: { type: String },
  partners_text_4: { type: String },
  // products
  products_heading: { type: String },
  product_1_name: { type: String },
  product_2_name: { type: String },
  product_3_name: { type: String },
  product_1_heading: { type: String },
  product_2_heading: { type: String },
  product_3_heading: { type: String },
  product_1_content: { type: String },
  product_2_content: { type: String },
  product_3_content: { type: String },
  product_1_img: { type: String },
  product_2_img: { type: String },
  product_3_img: { type: String },
  product_1_btn_1_text: { type: String },
  product_1_btn_1_link: { type: String },
  product_1_btn_2_text: { type: String },
  product_1_btn_2_link: { type: String },
  product_2_btn_1_text: { type: String },
  product_2_btn_1_link: { type: String },
  product_2_btn_2_text: { type: String },
  product_2_btn_2_link: { type: String },
  product_3_btn_1_text: { type: String },
  product_3_btn_1_link: { type: String },
  product_3_btn_2_text: { type: String },
  product_3_btn_2_link: { type: String },
});

const ContentModel = mongoose.model("Content", contentSchema);
export default ContentModel;
