import * as Yup from "yup";
import { domainRegex } from "../assets/data/emailRegex";

export const validationSchema = Yup.object({
  banner_subheading: Yup.string().required("Subheading is required"),

  banner_heading: Yup.string().required("Heading is required"),

  banner_content: Yup.string().required("Content is required"),

  banner_btn_1_text: Yup.string().required("Button 1 text is required"),

  banner_btn_1_link: Yup.string()
    .required("Button 1 link is required")
    .matches(domainRegex, "Button 1 link must be a valid URL"),
  banner_btn_2_text: Yup.string().required("Button 2 text is required"),

  banner_btn_2_link: Yup.string()
    .required("Button 2 link is required")
    .matches(domainRegex, "Button 2 link must be a valid URL"),
  banner_bg: Yup.string()
    .required("Background is required")
    .matches(domainRegex, "Background must be a valid URL"),
  banner_image: Yup.string()
    .required("Image is required")
    .matches(domainRegex, "Image must be a valid URL"),
});
