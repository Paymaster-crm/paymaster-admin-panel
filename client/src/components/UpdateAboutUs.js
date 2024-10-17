import React, { useEffect, useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { handleSingleFileUpload } from "../utils/awsSingleFileUpload";

function UpdateAboutUs() {
  const [fileSnackbar, setFileSnackbar] = useState(false);

  useEffect(() => {
    async function getBannerData() {
      const res = await axios("http://localhost:9000/api/get-data");
      formik.setValues({
        about_us_content: res.data.about_us_content || "",
        about_us_bg: res.data.about_us_bg || "",
        about_us_img: res.data.about_us_img || "",
      });
    }

    getBannerData();
    // eslint-disable-next-line
  }, []);

  const formik = useFormik({
    initialValues: {
      about_us_content: "",
      about_us_bg: "",
      about_us_img: "",
    },
    onSubmit: async (values) => {
      const res = await axios.post(
        "http://localhost:9000/api/update-about-us",
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
          id="about_us_content"
          name="about_us_content"
          label="About Us Content"
          value={formik.values.about_us_content}
          onChange={formik.handleChange}
          error={
            formik.touched.about_us_content &&
            Boolean(formik.errors.about_us_content)
          }
          helperText={
            formik.touched.about_us_content && formik.errors.about_us_content
          }
        />
        <br />
        <br />
        <label htmlFor="about_us_bg">About Us Background Image:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "about_us_bg",
              "about_us_bg",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />

        {formik.values.about_us_bg && (
          <div>
            <img
              src={formik.values.about_us_bg}
              alt="About Us"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("about_us_bg")} // Pass the field name to delete
            >
              Delete Image
            </Button>
          </div>
        )}

        <br />

        <label htmlFor="about_us_img">About Us Image:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "about_us_img",
              "about_us_img",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.about_us_img && (
          <div>
            <img
              src={formik.values.about_us_img}
              alt="About Us"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("about_us_img")} // Pass the field name to delete
            >
              Delete Image
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

export default UpdateAboutUs;
