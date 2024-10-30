import * as Yup from "yup";
import { domainRegex } from "../assets/data/domainRegex";

export const validationSchema = Yup.object({
  products_heading: Yup.string().required("Heading is required"),
  products: Yup.array()
    .of(
      Yup.object().shape({
        product_name: Yup.string().required("Product name is required"),
        product_heading: Yup.string().required("Product heading is required"),
        product_content: Yup.string().required("Product content is required"),
        product_img: Yup.string().required("Product image is required"),
        product_btn_1_text: Yup.string().required("Button 1 text is required"),
        product_btn_1_link: Yup.string()
          .required("Button 1 link is required")
          .matches(domainRegex, "Must be a valid domain or subdomain"),
        product_btn_2_text: Yup.string().required("Button 2 text is required"),
        product_btn_2_link: Yup.string()
          .required("Button 2 link is required")
          .matches(domainRegex, "Must be a valid domain or subdomain"),
      })
    )
    .required("Products array is required")
    .min(1, "At least one product is required"),
});
