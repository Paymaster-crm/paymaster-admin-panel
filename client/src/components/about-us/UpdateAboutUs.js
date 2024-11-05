import React, { useEffect, useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { handleAwsNestedFileUpload } from "../../utils/handleAwsNestedFileUpload";
import { validationSchema } from "../../schemas/aboutUsSchema";

function UpdateAboutUs() {
  const [fileSnackbar, setFileSnackbar] = useState(false);

  useEffect(() => {
    async function getBannerData() {
      const res = await axios(`${process.env.REACT_APP_API_STRING}/get-data`);
      formik.setValues({
        about_us_heading: res.data.about_us_heading || "",
        about_us_banner_info: res.data.about_us_banner_info || "",
        about_us_content_heading: res.data.about_us_content_heading || "",
        about_us_content: res.data.about_us_content || "",
        about_us_images: res.data.about_us_images || [],
      });
    }

    getBannerData();
    // eslint-disable-next-line
  }, []);

  const formik = useFormik({
    initialValues: {
      about_us_heading: "",
      about_us_banner_info: "",
      about_us_content_heading: "",
      about_us_content: "",
      about_us_images: [
        {
          about_us_img: "",
        },
      ],
    },
    validationSchema,
    onSubmit: async (values) => {
      const res = await axios.post(
        `${process.env.REACT_APP_API_STRING}/update-about-us`,
        values
      );
      alert(res.data.message);
    },
  });

  const handleDeleteImage = (index) => {
    const updatedImages = formik.values.about_us_images.filter(
      (_, i) => i !== index
    );
    formik.setFieldValue("about_us_images", updatedImages);
  };

  const handleAddField = () => {
    formik.setFieldValue("about_us_images", [
      ...formik.values.about_us_images,
      { about_us_img: "" },
    ]);
  };

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="about_us_heading"
          name="about_us_heading"
          label="About Us Heading"
          value={formik.values.about_us_heading}
          onChange={formik.handleChange}
          error={
            formik.touched.about_us_heading &&
            Boolean(formik.errors.about_us_heading)
          }
          helperText={
            formik.touched.about_us_heading && formik.errors.about_us_heading
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="about_us_banner_info"
          name="about_us_banner_info"
          label="About Us Banner Info"
          value={formik.values.about_us_banner_info}
          onChange={formik.handleChange}
          error={
            formik.touched.about_us_banner_info &&
            Boolean(formik.errors.about_us_banner_info)
          }
          helperText={
            formik.touched.about_us_banner_info &&
            formik.errors.about_us_banner_info
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="about_us_content_heading"
          name="about_us_content_heading"
          label="About Us Content Heading"
          value={formik.values.about_us_content_heading}
          onChange={formik.handleChange}
          error={
            formik.touched.about_us_content_heading &&
            Boolean(formik.errors.about_us_content_heading)
          }
          helperText={
            formik.touched.about_us_content_heading &&
            formik.errors.about_us_content_heading
          }
        />

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

        {formik.values.about_us_images.map((image, index) => (
          <div key={index}>
            {/* File Input for Image */}
            <input
              type="file"
              onChange={(e) =>
                handleAwsNestedFileUpload(
                  e,
                  `about_us_images[${index}].about_us_img`,
                  `about_us_img_${index}`,
                  formik,
                  setFileSnackbar
                )
              }
            />
            <br />
            {image.about_us_img && (
              <div>
                <img
                  src={image.about_us_img}
                  alt={`Image ${index + 1}`}
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            )}

            <button type="button" onClick={() => handleDeleteImage(index)}>
              Delete Image
            </button>
            <br />
            <br />
          </div>
        ))}

        <button
          type="button"
          className="btn"
          aria-label="submit-btn"
          style={{ marginBottom: "20px", padding: "5px" }}
          onClick={handleAddField}
        >
          Add Image
        </button>

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
