import React, { useEffect, useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { handleAwsNestedFileUpload } from "../../utils/handleAwsNestedFileUpload";
import { handleSingleFileUpload } from "../../utils/awsSingleFileUpload";
import { validationSchema } from "../../schemas/servicesSchema";

function UpdateServices() {
  const [fileSnackbar, setFileSnackbar] = useState(false);

  useEffect(() => {
    async function getBannerData() {
      const res = await axios(`${process.env.REACT_APP_API_STRING}/get-data`);
      formik.setValues({
        services_heading: res.data.services_heading || "",
        services_banner_img: res.data.services_banner_img || "",
        services_bg_img: res.data.services_bg_img || "",
        services_inner_heading: res.data.services_inner_heading || "",
        services: res.data.services || [],
      });
    }

    getBannerData();
    // eslint-disable-next-line
  }, []);

  const formik = useFormik({
    initialValues: {
      services_heading: "",
      services_banner_img: "",
      services_bg_img: "",
      services_inner_heading: "",
      services: [
        {
          service_name: "",
          service_desc: "",
          service_img: "",
        },
      ],
    },
    validationSchema,
    onSubmit: async (values) => {
      const res = await axios.post(
        `${process.env.REACT_APP_API_STRING}/update-services`,
        values
      );
      alert(res.data.message);
      console.log(values);
    },
  });

  const handleDeleteImage = (fieldName) => {
    formik.setFieldValue(fieldName, "");
  };

  const handleAddField = () => {
    formik.setFieldValue("services", [
      ...formik.values.services,
      {
        service_name: "",
        service_desc: "",
        service_img: "",
      },
    ]);
  };

  const handleDeleteServiceImage = (index) => {
    formik.setFieldValue(`services[${index}].service_img`, "");
  };

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="services_heading"
          name="services_heading"
          label="Services Heading"
          value={formik.values.services_heading}
          onChange={formik.handleChange}
          error={
            formik.touched.services_heading &&
            Boolean(formik.errors.services_heading)
          }
          helperText={
            formik.touched.services_heading && formik.errors.services_heading
          }
        />

        <label htmlFor="services_banner_img">
          Services Banner Image:&nbsp;
        </label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "services_banner_img",
              "services_banner_img",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.services_banner_img && (
          <div>
            <img
              src={formik.values.services_banner_img}
              alt="Banner Background"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("services_banner_img")}
            >
              Delete Image
            </Button>
          </div>
        )}

        <label htmlFor="services_bg_img">
          Services Background Image:&nbsp;
        </label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "services_bg_img",
              "services_bg_img",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.services_bg_img && (
          <div>
            <img
              src={formik.values.services_bg_img}
              alt="Banner Background"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("services_bg_img")}
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
          id="services_inner_heading"
          name="services_inner_heading"
          label="Services Inner Heading"
          value={formik.values.services_inner_heading}
          onChange={formik.handleChange}
          error={
            formik.touched.services_inner_heading &&
            Boolean(formik.errors.services_inner_heading)
          }
          helperText={
            formik.touched.services_inner_heading &&
            formik.errors.services_inner_heading
          }
        />

        {formik.values.services.map((service, index) => (
          <div key={index}>
            <TextField
              size="small"
              fullWidth
              margin="dense"
              variant="filled"
              id={`services[${index}].service_name`}
              name={`services[${index}].service_name`}
              label="Service Name"
              value={service.service_name}
              onChange={formik.handleChange}
              error={
                formik.touched.services &&
                formik.touched.services[index]?.service_name &&
                Boolean(formik.errors.services?.[index]?.service_name)
              }
              helperText={
                formik.touched.services &&
                formik.touched.services[index]?.service_name &&
                formik.errors.services?.[index]?.service_name
              }
            />
            <TextField
              size="small"
              fullWidth
              margin="dense"
              variant="filled"
              id={`services[${index}].service_desc`}
              name={`services[${index}].service_desc`}
              label="Service Description"
              value={service.service_desc}
              onChange={formik.handleChange}
              error={
                formik.touched.services &&
                formik.touched.services[index]?.service_desc &&
                Boolean(formik.errors.services?.[index]?.service_desc)
              }
              helperText={
                formik.touched.services &&
                formik.touched.services[index]?.service_desc &&
                formik.errors.services?.[index]?.service_desc
              }
            />
            {/* File Input for Image */}
            <input
              type="file"
              onChange={(e) =>
                handleAwsNestedFileUpload(
                  e,
                  `services[${index}].service_img`,
                  `service_img_${index}`,
                  formik,
                  setFileSnackbar
                )
              }
            />
            <br />
            {service.service_img && (
              <div>
                <img
                  src={service.service_img}
                  alt={`Image ${index + 1}`}
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            )}

            <button
              onClick={() => handleDeleteServiceImage(index)}
              type="button"
            >
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
          Add Service
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

export default UpdateServices;
