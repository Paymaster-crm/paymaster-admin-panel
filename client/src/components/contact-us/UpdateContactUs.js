import React, { useEffect, useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { handleSingleFileUpload } from "../../utils/awsSingleFileUpload";
import { validationSchema } from "../../schemas/contactUsSchema";

function UpdateContactUs() {
  const [fileSnackbar, setFileSnackbar] = useState(false);

  useEffect(() => {
    async function getBannerData() {
      const res = await axios(`${process.env.REACT_APP_API_STRING}/get-data`);
      formik.setValues({
        contact_us_heading: res.data.contact_us_heading || "",
        contact_us_subheading: res.data.contact_us_subheading || "",
        contact_us_phone: res.data.contact_us_phone || "",
        contact_us_email: res.data.contact_us_email || "",
        contact_us_address: res.data.contact_us_address || "",
        contact_us_working_days: res.data.contact_us_working_days || "",
        contact_us_img: res.data.contact_us_img || "",
      });
    }

    getBannerData();
    // eslint-disable-next-line
  }, []);

  const formik = useFormik({
    initialValues: {
      contact_us_heading: "",
      contact_us_subheading: "",
      contact_us_phone: "",
      contact_us_email: "",
      contact_us_address: "",
      contact_us_working_days: "",
      contact_us_img: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      const res = await axios.post(
        `${process.env.REACT_APP_API_STRING}/update-contact-us`,
        values
      );
      alert(res.data.message);
    },
  });

  const handleDeleteImage = (fieldName) => {
    formik.setFieldValue(fieldName, "");
  };

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="contact_us_heading"
          name="contact_us_heading"
          label="Contact Us Heading"
          value={formik.values.contact_us_heading}
          onChange={formik.handleChange}
          error={
            formik.touched.contact_us_heading &&
            Boolean(formik.errors.contact_us_heading)
          }
          helperText={
            formik.touched.contact_us_heading &&
            formik.errors.contact_us_heading
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="contact_us_subheading"
          name="contact_us_subheading"
          label="Contact Us Subheading"
          value={formik.values.contact_us_subheading}
          onChange={formik.handleChange}
          error={
            formik.touched.contact_us_subheading &&
            Boolean(formik.errors.contact_us_subheading)
          }
          helperText={
            formik.touched.contact_us_subheading &&
            formik.errors.contact_us_subheading
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="contact_us_phone"
          name="contact_us_phone"
          label="Contact Us Phone"
          value={formik.values.contact_us_phone}
          onChange={formik.handleChange}
          error={
            formik.touched.contact_us_phone &&
            Boolean(formik.errors.contact_us_phone)
          }
          helperText={
            formik.touched.contact_us_phone && formik.errors.contact_us_phone
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="contact_us_email"
          name="contact_us_email"
          label="Contact Us Email"
          value={formik.values.contact_us_email}
          onChange={formik.handleChange}
          error={
            formik.touched.contact_us_email &&
            Boolean(formik.errors.contact_us_email)
          }
          helperText={
            formik.touched.contact_us_email && formik.errors.contact_us_email
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="contact_us_address"
          name="contact_us_address"
          label="Contact Us Address"
          value={formik.values.contact_us_address}
          onChange={formik.handleChange}
          error={
            formik.touched.contact_us_address &&
            Boolean(formik.errors.contact_us_address)
          }
          helperText={
            formik.touched.contact_us_address &&
            formik.errors.contact_us_address
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="contact_us_working_days"
          name="contact_us_working_days"
          label="Contact Us Working Days"
          value={formik.values.contact_us_working_days}
          onChange={formik.handleChange}
          error={
            formik.touched.contact_us_working_days &&
            Boolean(formik.errors.contact_us_working_days)
          }
          helperText={
            formik.touched.contact_us_working_days &&
            formik.errors.contact_us_working_days
          }
        />

        <br />
        <br />
        <label htmlFor="contact_us_img">Contact Us Image:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "contact_us_img",
              "contact_us_img",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.contact_us_img && (
          <div>
            <img
              src={formik.values.contact_us_img}
              alt="Banner Background"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("contact_us_img")}
            >
              Delete Background Image
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

export default UpdateContactUs;
