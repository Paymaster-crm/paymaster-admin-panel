import React, { useEffect } from "react";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { validationSchema } from "../../schemas/reviewsSchema";

function UpdateReviews() {
  useEffect(() => {
    async function getBannerData() {
      const res = await axios(`${process.env.REACT_APP_API_STRING}/get-data`);
      formik.setValues({
        review: res.data.review || "",
        reviewer_name: res.data.reviewer_name || "",
      });
    }

    getBannerData();
    // eslint-disable-next-line
  }, []);

  const formik = useFormik({
    initialValues: {
      review: "",
      reviewer_name: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const res = await axios.post(
        `${process.env.REACT_APP_API_STRING}/update-reviews`,
        values
      );
      alert(res.data.message);
    },
  });

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          multiline
          rows={4}
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="review"
          name="review"
          label="Review"
          value={formik.values.review}
          onChange={formik.handleChange}
          error={formik.touched.review && Boolean(formik.errors.review)}
          helperText={formik.touched.review && formik.errors.review}
        />
        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="reviewer_name"
          name="reviewer_name"
          label="Reviewer name"
          value={formik.values.reviewer_name}
          onChange={formik.handleChange}
          error={
            formik.touched.reviewer_name && Boolean(formik.errors.reviewer_name)
          }
          helperText={
            formik.touched.reviewer_name && formik.errors.reviewer_name
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpdateReviews;
