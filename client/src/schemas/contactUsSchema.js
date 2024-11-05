import * as Yup from "yup";

export const validationSchema = Yup.object({
  contact_us_heading: Yup.string().required("Heading is required"),
  contact_us_subheading: Yup.string().required("Subheading is required"),
  contact_us_phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must only contain digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number cannot exceed 10 digits")
    .required("Contact Us Phone is required"),
  contact_us_email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  contact_us_address: Yup.string()
    .max(250, "Address cannot be more than 250 characters")
    .required("Address is required"),
  contact_us_working_days: Yup.string()
    .max(100, "Working days cannot be more than 100 characters")
    .required("Working Days is required"),
  contact_us_img: Yup.string().required("Contact Us Image is required"),
});
