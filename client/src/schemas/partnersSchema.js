import * as Yup from "yup";

export const validationSchema = Yup.object({
  partners_heading: Yup.string().required("Heading is required"),
  partners_icon_1: Yup.string().required("Icon 1 is required"),
  partners_icon_2: Yup.string().required("Icon 2 is required"),
  partners_icon_3: Yup.string().required("Icon 3 is required"),
  partners_icon_4: Yup.string().required("Icon 4 is required"),
  partners_text_1: Yup.string().required("Text 1 is required"),
  partners_text_2: Yup.string().required("Text 2 is required"),
  partners_text_3: Yup.string().required("Text 3 is required"),
  partners_text_4: Yup.string().required("Text 4 is required"),
});
