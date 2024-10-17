import React, { useEffect, useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { handleSingleFileUpload } from "../utils/awsSingleFileUpload";

function UpdateProducts() {
  const [fileSnackbar, setFileSnackbar] = useState(false);

  useEffect(() => {
    async function getBannerData() {
      const res = await axios("http://localhost:9000/api/get-data");
      formik.setValues({
        products_heading: res.data.products_heading || "",
        product_1_name: res.data.product_1_name || "",
        product_2_name: res.data.product_2_name || "",
        product_3_name: res.data.product_3_name || "",
        product_1_heading: res.data.product_1_heading || "",
        product_2_heading: res.data.product_2_heading || "",
        product_3_heading: res.data.product_3_heading || "",
        product_1_content: res.data.product_1_content || "",
        product_2_content: res.data.product_2_content || "",
        product_3_content: res.data.product_3_content || "",
        product_1_img: res.data.product_1_img || "",
        product_2_img: res.data.product_2_img || "",
        product_3_img: res.data.product_3_img || "",
        product_1_btn_2_text: res.data.product_1_btn_2_text || "",
        product_1_btn_2_link: res.data.product_1_btn_2_link || "",
        product_2_btn_1_text: res.data.product_2_btn_1_text || "",
        product_2_btn_1_link: res.data.product_2_btn_1_link || "",
        product_2_btn_2_text: res.data.product_2_btn_2_text || "",
        product_2_btn_2_link: res.data.product_2_btn_2_link || "",
        product_3_btn_1_text: res.data.product_3_btn_1_text || "",
        product_3_btn_1_link: res.data.product_3_btn_1_link || "",
        product_3_btn_2_text: res.data.product_3_btn_2_text || "",
        product_3_btn_2_link: res.data.product_3_btn_2_link || "",
      });
    }

    getBannerData();
    // eslint-disable-next-line
  }, []);

  const formik = useFormik({
    enableReinitialize: true, // Allow reinitializing with new values
    initialValues: {
      products_heading: "",
      product_1_name: "",
      product_2_name: "",
      product_3_name: "",
      product_1_heading: "",
      product_2_heading: "",
      product_3_heading: "",
      product_1_content: "",
      product_2_content: "",
      product_3_content: "",
      product_1_img: "",
      product_2_img: "",
      product_3_img: "",
      product_1_btn_1_text: "",
      product_1_btn_1_link: "",
      product_1_btn_2_text: "",
      product_1_btn_2_link: "",
      product_2_btn_1_text: "",
      product_2_btn_1_link: "",
      product_2_btn_2_text: "",
      product_2_btn_2_link: "",
      product_3_btn_1_text: "",
      product_3_btn_1_link: "",
      product_3_btn_2_text: "",
      product_3_btn_2_link: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await axios.post(
        "http://localhost:9000/api/update-products",
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
          id="products_heading"
          name="products_heading"
          label="Products Heading"
          value={formik.values.products_heading}
          onChange={formik.handleChange}
          error={
            formik.touched.products_heading &&
            Boolean(formik.errors.products_heading)
          }
          helperText={
            formik.touched.products_heading && formik.errors.products_heading
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_1_name"
          name="product_1_name"
          label="Product 1 Name"
          value={formik.values.product_1_name}
          onChange={formik.handleChange}
          error={
            formik.touched.product_1_name &&
            Boolean(formik.errors.product_1_name)
          }
          helperText={
            formik.touched.product_1_name && formik.errors.product_1_name
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_3_name"
          name="product_3_name"
          label="Product 3 Name"
          value={formik.values.product_3_name}
          onChange={formik.handleChange}
          error={
            formik.touched.product_3_name &&
            Boolean(formik.errors.product_3_name)
          }
          helperText={
            formik.touched.product_3_name && formik.errors.product_3_name
          }
        />
        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_2_name"
          name="product_2_name"
          label="Product 3 Name"
          value={formik.values.product_2_name}
          onChange={formik.handleChange}
          error={
            formik.touched.product_2_name &&
            Boolean(formik.errors.product_2_name)
          }
          helperText={
            formik.touched.product_2_name && formik.errors.product_2_name
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_1_heading"
          name="product_1_heading"
          label="Product 1 Heading"
          value={formik.values.product_1_heading}
          onChange={formik.handleChange}
          error={
            formik.touched.product_1_heading &&
            Boolean(formik.errors.product_1_heading)
          }
          helperText={
            formik.touched.product_1_heading && formik.errors.product_1_heading
          }
        />
        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_1_content"
          name="product_1_content"
          label="Product 1 Content"
          value={formik.values.product_1_content}
          onChange={formik.handleChange}
          error={
            formik.touched.product_1_content &&
            Boolean(formik.errors.product_1_content)
          }
          helperText={
            formik.touched.product_1_content && formik.errors.product_1_content
          }
        />

        <br />
        <br />
        <label htmlFor="product_1_img">Product 1 Image:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "product_1_img",
              "product_1_img",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.product_1_img && (
          <div>
            <img
              src={formik.values.product_1_img}
              alt="Product 1"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("product_1_img")} // Pass the field name to delete
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
          id="product_2_heading"
          name="product_2_heading"
          label="Product 2 Heading"
          value={formik.values.product_2_heading}
          onChange={formik.handleChange}
          error={
            formik.touched.product_2_heading &&
            Boolean(formik.errors.product_2_heading)
          }
          helperText={
            formik.touched.product_2_heading && formik.errors.product_2_heading
          }
        />
        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_2_content"
          name="product_2_content"
          label="Product 2 Content"
          value={formik.values.product_2_content}
          onChange={formik.handleChange}
          error={
            formik.touched.product_2_content &&
            Boolean(formik.errors.product_2_content)
          }
          helperText={
            formik.touched.product_2_content && formik.errors.product_2_content
          }
        />

        <br />
        <br />
        <label htmlFor="product_2_img">Product 2 Image:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "product_2_img",
              "product_2_img",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.product_2_img && (
          <div>
            <img
              src={formik.values.product_2_img}
              alt="Product 2"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("product_2_img")} // Pass the field name to delete
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
          id="product_3_heading"
          name="product_3_heading"
          label="Product 3 Heading"
          value={formik.values.product_3_heading}
          onChange={formik.handleChange}
          error={
            formik.touched.product_3_heading &&
            Boolean(formik.errors.product_3_heading)
          }
          helperText={
            formik.touched.product_3_heading && formik.errors.product_3_heading
          }
        />
        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_3_content"
          name="product_3_content"
          label="Product 1 Content"
          value={formik.values.product_3_content}
          onChange={formik.handleChange}
          error={
            formik.touched.product_3_content &&
            Boolean(formik.errors.product_3_content)
          }
          helperText={
            formik.touched.product_3_content && formik.errors.product_3_content
          }
        />

        <br />
        <br />
        <label htmlFor="product_3_img">Product 3 Image:&nbsp;</label>
        <input
          type="file"
          onChange={(e) =>
            handleSingleFileUpload(
              e,
              "product_3_img",
              "product_3_img",
              formik,
              setFileSnackbar
            )
          }
        />
        <br />
        {formik.values.product_3_img && (
          <div>
            <img
              src={formik.values.product_3_img}
              alt="Product 3"
              style={{ width: "100px", height: "100px" }}
            />
            <br />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteImage("product_3_img")} // Pass the field name to delete
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
          id="product_1_btn_1_text"
          name="product_1_btn_1_text"
          label="Product 1 Button 1 Text"
          value={formik.values.product_1_btn_1_text}
          onChange={formik.handleChange}
          error={
            formik.touched.product_1_btn_1_text &&
            Boolean(formik.errors.product_1_btn_1_text)
          }
          helperText={
            formik.touched.product_1_btn_1_text &&
            formik.errors.product_1_btn_1_text
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_1_btn_1_link"
          name="product_1_btn_1_link"
          label="Product 1 Button 1 Link"
          value={formik.values.product_1_btn_1_link}
          onChange={formik.handleChange}
          error={
            formik.touched.product_1_btn_1_link &&
            Boolean(formik.errors.product_1_btn_1_link)
          }
          helperText={
            formik.touched.product_1_btn_1_link &&
            formik.errors.product_1_btn_1_link
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_1_btn_2_text"
          name="product_1_btn_2_text"
          label="Product 1 Button 2 Text"
          value={formik.values.product_1_btn_2_text}
          onChange={formik.handleChange}
          error={
            formik.touched.product_1_btn_2_text &&
            Boolean(formik.errors.product_1_btn_2_text)
          }
          helperText={
            formik.touched.product_1_btn_2_text &&
            formik.errors.product_1_btn_2_text
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_1_btn_2_link"
          name="product_1_btn_2_link"
          label="Product 1 Button 2 Link"
          value={formik.values.product_1_btn_2_link}
          onChange={formik.handleChange}
          error={
            formik.touched.product_1_btn_2_link &&
            Boolean(formik.errors.product_1_btn_2_link)
          }
          helperText={
            formik.touched.product_1_btn_2_link &&
            formik.errors.product_1_btn_2_link
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_2_btn_1_text"
          name="product_2_btn_1_text"
          label="Product 3 Button 1 Text"
          value={formik.values.product_2_btn_1_text}
          onChange={formik.handleChange}
          error={
            formik.touched.product_2_btn_1_text &&
            Boolean(formik.errors.product_2_btn_1_text)
          }
          helperText={
            formik.touched.product_2_btn_1_text &&
            formik.errors.product_2_btn_1_text
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_2_btn_1_link"
          name="product_2_btn_1_link"
          label="Product 2 Button 1 Link"
          value={formik.values.product_2_btn_1_link}
          onChange={formik.handleChange}
          error={
            formik.touched.product_2_btn_1_link &&
            Boolean(formik.errors.product_2_btn_1_link)
          }
          helperText={
            formik.touched.product_2_btn_1_link &&
            formik.errors.product_2_btn_1_link
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_2_btn_2_text"
          name="product_2_btn_2_text"
          label="Product 2 Button 2 Text"
          value={formik.values.product_2_btn_2_text}
          onChange={formik.handleChange}
          error={
            formik.touched.product_2_btn_2_text &&
            Boolean(formik.errors.product_2_btn_2_text)
          }
          helperText={
            formik.touched.product_2_btn_2_text &&
            formik.errors.product_2_btn_2_text
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_2_btn_2_link"
          name="product_2_btn_2_link"
          label="Product 2 Button 2 Link"
          value={formik.values.product_2_btn_2_link}
          onChange={formik.handleChange}
          error={
            formik.touched.product_2_btn_2_link &&
            Boolean(formik.errors.product_2_btn_2_link)
          }
          helperText={
            formik.touched.product_2_btn_2_link &&
            formik.errors.product_2_btn_2_link
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_3_btn_1_text"
          name="product_3_btn_1_text"
          label="Product 3 Button 1 Text"
          value={formik.values.product_3_btn_1_text}
          onChange={formik.handleChange}
          error={
            formik.touched.product_3_btn_1_text &&
            Boolean(formik.errors.product_3_btn_1_text)
          }
          helperText={
            formik.touched.product_3_btn_1_text &&
            formik.errors.product_3_btn_1_text
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_3_btn_1_link"
          name="product_3_btn_1_link"
          label="Product 3 Button 1 Link"
          value={formik.values.product_3_btn_1_link}
          onChange={formik.handleChange}
          error={
            formik.touched.product_3_btn_1_link &&
            Boolean(formik.errors.product_3_btn_1_link)
          }
          helperText={
            formik.touched.product_3_btn_1_link &&
            formik.errors.product_3_btn_1_link
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_3_btn_2_text"
          name="product_3_btn_2_text"
          label="Product 3 Button 2 Text"
          value={formik.values.product_3_btn_2_text}
          onChange={formik.handleChange}
          error={
            formik.touched.product_3_btn_2_text &&
            Boolean(formik.errors.product_3_btn_2_text)
          }
          helperText={
            formik.touched.product_3_btn_2_text &&
            formik.errors.product_3_btn_2_text
          }
        />

        <TextField
          size="small"
          fullWidth
          margin="dense"
          variant="filled"
          id="product_3_btn_2_link"
          name="product_3_btn_2_link"
          label="Product 3 Button 2 Link"
          value={formik.values.product_3_btn_2_link}
          onChange={formik.handleChange}
          error={
            formik.touched.product_3_btn_2_link &&
            Boolean(formik.errors.product_3_btn_2_link)
          }
          helperText={
            formik.touched.product_3_btn_2_link &&
            formik.errors.product_3_btn_2_link
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

export default UpdateProducts;
