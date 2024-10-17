import React, { useEffect, useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { handleSingleFileUpload } from "../utils/awsSingleFileUpload";

function UpdateBanner() {
  const [fileSnackbar, setFileSnackbar] = useState(false);

  useEffect(() => {
    async function getBannerData() {
      const res = await axios("http://localhost:9000/api/get-data");
      formik.setValues({
        banner_subheading: res.data.banner_subheading || "",
        banner_heading: res.data.banner_heading || "",
        banner_content: res.data.banner_content || "",
        banner_btn_1_text: res.data.banner_btn_1_text || "",
        banner_btn_1_link: res.data.banner_btn_1_link || "",
        banner_btn_2_text: res.data.banner_btn_2_text || "",
        banner_btn_2_link: res.data.banner_btn_2_link || "",
        banner_bg: res.data.banner_bg || "",
        banner_image: res.data.banner_image || "",
      });
    }

    getBannerData();
    // eslint-disable-next-line
  }, []);

  const formik = useFormik({
    enableReinitialize: true, // Allow reinitializing with new values
    initialValues: {
      banner_subheading: "",
      banner_heading: "",
      banner_content: "",
      banner_btn_1_text: "",
      banner_btn_1_link: "",
      banner_btn_2_text: "",
      banner_btn_2_link: "",
      banner_bg: "",
      banner_image: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await axios.post(
        "http://localhost:9000/api/update-banner",
        values
      );
      alert(res.data.message);
    },
  });

  const handleDeleteImage = (fieldName) => {
    formik.setFieldValue(fieldName, ""); // Reset the specified image field to an empty string
  };

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="banner_subheading"
          name="banner_subheading"
          label="Banner Sub-heading"
          value={formik.values.banner_subheading}
          onChange={formik.handleChange}
          error={
            formik.touched.banner_subheading &&
            Boolean(formik.errors.banner_subheading)
          }
          helperText={
            formik.touched.banner_subheading && formik.errors.banner_subheading
          }
        />
        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="banner_heading"
          name="banner_heading"
          label="Banner Heading"
          value={formik.values.banner_heading}
          onChange={formik.handleChange}
          error={
            formik.touched.banner_heading &&
            Boolean(formik.errors.banner_heading)
          }
          helperText={
            formik.touched.banner_heading && formik.errors.banner_heading
          }
        />

        <TextField
          size="small"
          fullWidth
          multiline
          rows={4}
          margin="dense"
          variant="filled"
          id="banner_content"
          name="banner_content"
          label="Banner Content"
          value={formik.values.banner_content}
          onChange={formik.handleChange}
          error={
            formik.touched.banner_content &&
            Boolean(formik.errors.banner_content)
          }
          helperText={
            formik.touched.banner_content && formik.errors.banner_content
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="banner_btn_1_text"
          name="banner_btn_1_text"
          label="Banner Button 1 Text"
          value={formik.values.banner_btn_1_text}
          onChange={formik.handleChange}
          error={
            formik.touched.banner_btn_1_text &&
            Boolean(formik.errors.banner_btn_1_text)
          }
          helperText={
            formik.touched.banner_btn_1_text && formik.errors.banner_btn_1_text
          }
        />
        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="banner_btn_1_link"
          name="banner_btn_1_link"
          label="Banner Button 1 Link"
          value={formik.values.banner_btn_1_link}
          onChange={formik.handleChange}
          error={
            formik.touched.banner_btn_1_link &&
            Boolean(formik.errors.banner_btn_1_link)
          }
          helperText={
            formik.touched.banner_btn_1_link && formik.errors.banner_btn_1_link
          }
        />
        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="banner_btn_2_text"
          name="banner_btn_2_text"
          label="Banner Button 2 Text"
          value={formik.values.banner_btn_2_text}
          onChange={formik.handleChange}
          error={
            formik.touched.banner_btn_2_text &&
            Boolean(formik.errors.banner_btn_2_text)
          }
          helperText={
            formik.touched.banner_btn_2_text && formik.errors.banner_btn_2_text
          }
        />
        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="banner_btn_2_link"
          name="banner_btn_2_link"
          label="Banner Button 2 Link"
          value={formik.values.banner_btn_2_link}
          onChange={formik.handleChange}
          error={
            formik.touched.banner_btn_2_link &&
            Boolean(formik.errors.banner_btn_2_link)
          }
          helperText={
            formik.touched.banner_btn_2_link && formik.errors.banner_btn_2_link
          }
        />
        <br />
        <br />
        <label htmlFor="banner_bg">Banner Background Image:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "banner_bg",
              "banner_bg",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.banner_bg && (
          <div>
            <img
              src={formik.values.banner_bg}
              alt="Banner Background"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("banner_bg")} // Pass the field name to delete
            >
              Delete Background Image
            </Button>
          </div>
        )}

        <label htmlFor="banner_image">Banner Image:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "banner_image",
              "banner_image",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.banner_image && (
          <div>
            <img
              src={formik.values.banner_image}
              alt="Banner"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("banner_image")} // Pass the field name to delete
            >
              Delete Banner Image
            </Button>
          </div>
        )}

        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Snackbar to show upload success */}
      <Snackbar
        open={fileSnackbar}
        autoHideDuration={3000}
        onClose={() => setFileSnackbar(false)}
        message="File uploaded successfully"
      />
    </div>
  );
}

export default UpdateBanner;
