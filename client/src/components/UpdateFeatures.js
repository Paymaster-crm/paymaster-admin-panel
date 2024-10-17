import React, { useEffect, useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { handleSingleFileUpload } from "../utils/awsSingleFileUpload";

function UpdateFeatures() {
  const [fileSnackbar, setFileSnackbar] = useState(false);

  useEffect(() => {
    async function getBannerData() {
      const res = await axios("http://localhost:9000/api/get-data");
      formik.setValues({
        features_subheading: res.data.features_subheading || "",
        features_heading: res.data.features_heading || "",
        banner_content: res.data.banner_content || "",
        features_icon_1: res.data.features_icon_1 || "",
        features_text_1: res.data.features_text_1 || "",
        features_icon_2: res.data.features_icon_2 || "",
        features_text_2: res.data.features_text_2 || "",
        features_icon_3: res.data.features_icon_3 || "",
        features_text_3: res.data.features_text_3 || "",
        features_icon_4: res.data.features_icon_4 || "",
        features_text_4: res.data.features_text_4 || "",
        features_icon_5: res.data.features_icon_5 || "",
        features_text_5: res.data.features_text_5 || "",
        features_link_text: res.data.features_link_text || "",
        features_url: res.data.features_url || "",
        features_subheading_2: res.data.features_subheading_2 || "",
        features_heading_2: res.data.features_heading_2 || "",
        features_img: res.data.features_img || "",
      });
    }

    getBannerData();
    // eslint-disable-next-line
  }, []);

  const formik = useFormik({
    enableReinitialize: true, // Allow reinitializing with new values
    initialValues: {
      features_subheading: "",
      features_heading: "",
      features_text_1: "",
      features_text_2: "",
      features_text_3: "",
      features_text_4: "",
      features_text_5: "",
      features_icon_1: "",
      features_icon_2: "",
      features_icon_3: "",
      features_icon_4: "",
      features_icon_5: "",
      features_link_text: "",
      features_url: "",
      features_subheading_2: "",
      features_heading_2: "",
      features_img: "",
    },
    onSubmit: async (values) => {
      const res = await axios.post(
        "http://localhost:9000/api/update-features",
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
          id="features_subheading"
          name="features_subheading"
          label="Features Sub-heading"
          value={formik.values.features_subheading}
          onChange={formik.handleChange}
          error={
            formik.touched.features_subheading &&
            Boolean(formik.errors.features_subheading)
          }
          helperText={
            formik.touched.features_subheading &&
            formik.errors.features_subheading
          }
        />
        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="features_heading"
          name="features_heading"
          label="Features Heading"
          value={formik.values.features_heading}
          onChange={formik.handleChange}
          error={
            formik.touched.features_heading &&
            Boolean(formik.errors.features_heading)
          }
          helperText={
            formik.touched.features_heading && formik.errors.features_heading
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="features_text_1"
          name="features_text_1"
          label="Features Text 1"
          value={formik.values.features_text_1}
          onChange={formik.handleChange}
          error={
            formik.touched.features_text_1 &&
            Boolean(formik.errors.features_text_1)
          }
          helperText={
            formik.touched.features_text_1 && formik.errors.features_text_1
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="features_text_2"
          name="features_text_2"
          label="Features Text 2"
          value={formik.values.features_text_2}
          onChange={formik.handleChange}
          error={
            formik.touched.features_text_2 &&
            Boolean(formik.errors.features_text_2)
          }
          helperText={
            formik.touched.features_text_2 && formik.errors.features_text_2
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="features_text_3"
          name="features_text_3"
          label="Features Text 3"
          value={formik.values.features_text_3}
          onChange={formik.handleChange}
          error={
            formik.touched.features_text_3 &&
            Boolean(formik.errors.features_text_3)
          }
          helperText={
            formik.touched.features_text_3 && formik.errors.features_text_3
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="features_text_4"
          name="features_text_4"
          label="Features Text 4"
          value={formik.values.features_text_4}
          onChange={formik.handleChange}
          error={
            formik.touched.features_text_4 &&
            Boolean(formik.errors.features_text_4)
          }
          helperText={
            formik.touched.features_text_4 && formik.errors.features_text_4
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="features_text_5"
          name="features_text_5"
          label="Features Text 5"
          value={formik.values.features_text_5}
          onChange={formik.handleChange}
          error={
            formik.touched.features_text_5 &&
            Boolean(formik.errors.features_text_5)
          }
          helperText={
            formik.touched.features_text_5 && formik.errors.features_text_5
          }
        />

        <br />
        <br />
        <label htmlFor="features_icon_1">Features Image 1:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "features_icon_1",
              "features_icon_1",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.features_icon_1 && (
          <div>
            <img
              src={formik.values.features_icon_1}
              alt="Features"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("features_icon_1")} // Pass the field name to delete
            >
              Delete Image
            </Button>
          </div>
        )}

        <label htmlFor="features_icon_2">Features Image 2:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "features_icon_2",
              "features_icon_2",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.features_icon_2 && (
          <div>
            <img
              src={formik.values.features_icon_2}
              alt="Features"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("features_icon_2")} // Pass the field name to delete
            >
              Delete Image
            </Button>
          </div>
        )}

        <label htmlFor="features_icon_3">Features Image 3:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "features_icon_3",
              "features_icon_3",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.features_icon_3 && (
          <div>
            <img
              src={formik.values.features_icon_3}
              alt="Features"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("features_icon_3")} // Pass the field name to delete
            >
              Delete Image
            </Button>
          </div>
        )}

        <label htmlFor="features_icon_1">Features Image 4:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "features_icon_4",
              "features_icon_4",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.features_icon_4 && (
          <div>
            <img
              src={formik.values.features_icon_4}
              alt="Features"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("features_icon_4")} // Pass the field name to delete
            >
              Delete Image
            </Button>
          </div>
        )}

        <label htmlFor="features_icon_1">Features Image 5:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "features_icon_5",
              "features_icon_5",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.features_icon_5 && (
          <div>
            <img
              src={formik.values.features_icon_5}
              alt="Features"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("features_icon_5")} // Pass the field name to delete
            >
              Delete Image
            </Button>
          </div>
        )}

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="features_link_text"
          name="features_link_text"
          label="Other Features Link Text"
          value={formik.values.features_link_text}
          onChange={formik.handleChange}
          error={
            formik.touched.features_link_text &&
            Boolean(formik.errors.features_link_text)
          }
          helperText={
            formik.touched.features_link_text &&
            formik.errors.features_link_text
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="features_url"
          name="features_url"
          label="Other Features Link"
          value={formik.values.features_url}
          onChange={formik.handleChange}
          error={
            formik.touched.features_url && Boolean(formik.errors.features_url)
          }
          helperText={formik.touched.features_url && formik.errors.features_url}
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="features_subheading_2"
          name="features_subheading_2"
          label="Features Subheading 2"
          value={formik.values.features_subheading_2}
          onChange={formik.handleChange}
          error={
            formik.touched.features_subheading_2 &&
            Boolean(formik.errors.features_subheading_2)
          }
          helperText={
            formik.touched.features_subheading_2 &&
            formik.errors.features_subheading_2
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="features_heading_2"
          name="features_heading_2"
          label="Features Heading 2"
          value={formik.values.features_heading_2}
          onChange={formik.handleChange}
          error={
            formik.touched.features_heading_2 &&
            Boolean(formik.errors.features_heading_2)
          }
          helperText={
            formik.touched.features_heading_2 &&
            formik.errors.features_heading_2
          }
        />

        <br />
        <br />
        <label htmlFor="features_icon_1">Features Image:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "features_img",
              "features_img",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.features_img && (
          <div>
            <img
              src={formik.values.features_img}
              alt="Features"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("features_img")} // Pass the field name to delete
            >
              Delete Image
            </Button>
          </div>
        )}

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

export default UpdateFeatures;
