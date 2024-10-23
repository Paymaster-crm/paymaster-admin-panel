import * as Yup from "yup";

export const validationSchema = Yup.object({
  review: Yup.string().required("Review is required"),
  reviewer_name: Yup.string().required("Reviewer name is required"),
});
