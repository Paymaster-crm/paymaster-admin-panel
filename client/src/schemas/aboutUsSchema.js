import * as Yup from "yup";

export const validationSchema = Yup.object({
  about_us_heading: Yup.string().required("Heading is required"),
  about_us_banner_info: Yup.string().required("Banner info is required"),
  about_us_content_heading: Yup.string().required(
    "Content heading is required"
  ),
  about_us_content: Yup.string().required("Content is required"),
  about_us_images: Yup.array().of(
    Yup.object().shape({
      about_us_img: Yup.string().required("Image is required"),
    })
  ),
});
