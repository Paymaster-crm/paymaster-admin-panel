import * as Yup from "yup";
import { domainRegex } from "../assets/data/emailRegex";

export const validationSchema = Yup.object({
  about_us_content: Yup.string().required("Content is required"),
  about_us_bg: Yup.string()
    .required("Background is required")
    .url("Background must be a valid URL"),
  about_us_img: Yup.string()
    .required("Image is required")
    .matches(domainRegex, "Image must be a valid URL"),
});
