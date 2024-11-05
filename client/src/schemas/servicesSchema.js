import * as Yup from "yup";

export const validationSchema = Yup.object({
  services_heading: Yup.string().required("Heading is required"),
  services_banner_img: Yup.string().required("Banner image is required"),
  services_bg_img: Yup.string().required("Background image is required"),
  services_inner_heading: Yup.string().required("Inner heading is required"),
  services: Yup.array()
    .of(
      Yup.object().shape({
        service_name: Yup.string().required("Service name is required"),
        service_desc: Yup.string().required("Service description is required"),
        service_img: Yup.string().required("Service image is required"),
      })
    )
    .required("Services array is required"),
});
