import * as Yup from "yup";
import { domainRegex } from "../assets/data/domainRegex";

export const validationSchema = Yup.object({
  features_subheading: Yup.string().required("Subheading is required"),
  features_heading: Yup.string().required("Heading is required"),
  features_text_1: Yup.string().required("Feature text 1 is required"),
  features_text_2: Yup.string().required("Feature text 2 is required"),
  features_text_3: Yup.string().required("Feature text 3 is required"),
  features_text_4: Yup.string().required("Feature text 4 is required"),
  features_text_5: Yup.string().required("Feature text 5 is required"),
  features_icon_1: Yup.string().required("Feature icon 1 is required"),
  features_icon_2: Yup.string().required("Feature icon 2 is required"),
  features_icon_3: Yup.string().required("Feature icon 3 is required"),
  features_icon_4: Yup.string().required("Feature icon 4 is required"),
  features_icon_5: Yup.string().required("Feature icon 5 is required"),
  features_link_text: Yup.string().required("Link text is required"),
  features_url: Yup.string()
    .required("URL is required")
    .matches(domainRegex, "Must be a valid URL"),
  features_subheading_2: Yup.string().required("Subheading 2 is required"),
  features_heading_2: Yup.string().required("Heading 2 is required"),
  features_img: Yup.string().required("Image is required"),
});
