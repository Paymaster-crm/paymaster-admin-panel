import React, { useEffect, useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { handleSingleFileUpload } from "../utils/awsSingleFileUpload";

function UpdatePartners() {
  const [fileSnackbar, setFileSnackbar] = useState(false);

  useEffect(() => {
    async function getBannerData() {
      const res = await axios("http://localhost:9000/api/get-data");
      formik.setValues({
        partners_heading: res.data.partners_heading || "",
        partners_icon_1: res.data.partners_icon_1 || "",
        partners_icon_2: res.data.partners_icon_2 || "",
        partners_icon_3: res.data.partners_icon_3 || "",
        partners_icon_4: res.data.partners_icon_4 || "",
        partners_text_1: res.data.partners_text_1 || "",
        partners_text_2: res.data.partners_text_2 || "",
        partners_text_3: res.data.partners_text_3 || "",
        partners_text_4: res.data.partners_text_4 || "",
      });
    }

    getBannerData();
    // eslint-disable-next-line
  }, []);

  const formik = useFormik({
    enableReinitialize: true, // Allow reinitializing with new values
    initialValues: {
      partners_heading: "",
      partners_icon_1: "",
      partners_icon_2: "",
      partners_icon_3: "",
      partners_icon_4: "",
      partners_text_1: "",
      partners_text_2: "",
      partners_text_3: "",
      partners_text_4: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await axios.post(
        "http://localhost:9000/api/update-partners",
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
          id="partners_heading"
          name="partners_heading"
          label="Partners heading"
          value={formik.values.partners_heading}
          onChange={formik.handleChange}
          error={
            formik.touched.partners_heading &&
            Boolean(formik.errors.partners_heading)
          }
          helperText={
            formik.touched.partners_heading && formik.errors.partners_heading
          }
        />

        <br />
        <br />
        <label htmlFor="partners_icon_1">Partners Icon 1:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "partners_icon_1",
              "partners_icon_1",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.partners_icon_1 && (
          <div>
            <img
              src={formik.values.partners_icon_1}
              alt="Banner Background"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("partners_icon_1")} // Pass the field name to delete
            >
              Delete Background Image
            </Button>
          </div>
        )}

        <label htmlFor="partners_icon_2">Partners Icon 2:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "partners_icon_2",
              "partners_icon_2",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.partners_icon_2 && (
          <div>
            <img
              src={formik.values.partners_icon_2}
              alt="Banner Background"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("partners_icon_2")} // Pass the field name to delete
            >
              Delete Background Image
            </Button>
          </div>
        )}

        <label htmlFor="partners_icon_3">Partners Icon 3:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "partners_icon_3",
              "partners_icon_3",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.partners_icon_3 && (
          <div>
            <img
              src={formik.values.partners_icon_3}
              alt="Banner Background"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("partners_icon_3")} // Pass the field name to delete
            >
              Delete Background Image
            </Button>
          </div>
        )}

        <label htmlFor="partners_icon_4">Partners Icon 4:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "partners_icon_4",
              "partners_icon_4",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.partners_icon_4 && (
          <div>
            <img
              src={formik.values.partners_icon_4}
              alt="Banner Background"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("partners_icon_4")} // Pass the field name to delete
            >
              Delete Background Image
            </Button>
          </div>
        )}

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="partners_text_1"
          name="partners_text_1"
          label="Partners text 1"
          value={formik.values.partners_text_1}
          onChange={formik.handleChange}
          error={
            formik.touched.partners_text_1 &&
            Boolean(formik.errors.partners_text_1)
          }
          helperText={
            formik.touched.partners_text_1 && formik.errors.partners_text_1
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="partners_text_2"
          name="partners_text_2"
          label="Partners text 2"
          value={formik.values.partners_text_2}
          onChange={formik.handleChange}
          error={
            formik.touched.partners_text_2 &&
            Boolean(formik.errors.partners_text_2)
          }
          helperText={
            formik.touched.partners_text_2 && formik.errors.partners_text_2
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="partners_text_3"
          name="partners_text_3"
          label="Partners text 3"
          value={formik.values.partners_text_3}
          onChange={formik.handleChange}
          error={
            formik.touched.partners_text_3 &&
            Boolean(formik.errors.partners_text_3)
          }
          helperText={
            formik.touched.partners_text_3 && formik.errors.partners_text_3
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="partners_text_4"
          name="partners_text_4"
          label="Partners text 4"
          value={formik.values.partners_text_4}
          onChange={formik.handleChange}
          error={
            formik.touched.partners_text_4 &&
            Boolean(formik.errors.partners_text_4)
          }
          helperText={
            formik.touched.partners_text_4 && formik.errors.partners_text_4
          }
        />

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

export default UpdatePartners;
