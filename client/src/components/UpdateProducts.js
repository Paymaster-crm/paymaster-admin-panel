import React, { useEffect, useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { handleAwsNestedFileUpload } from "../utils/handleAwsNestedFileUpload";

function UpdateProducts() {
  const [fileSnackbar, setFileSnackbar] = useState(false);

  useEffect(() => {
    async function getBannerData() {
      const res = await axios(`${process.env.REACT_APP_API_STRING}/get-data`);
      formik.setValues({
        products_heading: res.data.products_heading || "",
        products: res.data.products || [
          {
            product_name: "",
            product_heading: "",
            product_content: "",
            product_img: "",
            product_btn_1_text: "",
            product_btn_1_link: "",
            product_btn_2_text: "",
            product_btn_2_link: "",
          },
        ],
      });
    }

    getBannerData();
    // eslint-disable-next-line
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      products_heading: "",
      products: [
        {
          product_name: "",
          product_heading: "",
          product_content: "",
          product_img: "",
          product_btn_1_text: "",
          product_btn_1_link: "",
          product_btn_2_text: "",
          product_btn_2_link: "",
        },
      ],
    },
    onSubmit: async (values) => {
      console.log(JSON.stringify(values));
      const res = await axios.post(
        `${process.env.REACT_APP_API_STRING}/update-products`,
        values
      );
      alert(res.data.message);
    },
  });

  const handleDeleteImage = (index) => {
    formik.setFieldValue(`products[${index}].product_img`, "");
  };

  const handleAddField = () => {
    formik.setValues({
      ...formik.values,
      products: [
        ...formik.values.products,
        {
          product_name: "",
          product_heading: "",
          product_content: "",
          product_img: "",
          product_btn_1_text: "",
          product_btn_1_link: "",
          product_btn_2_text: "",
          product_btn_2_link: "",
        },
      ],
    });
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

        {formik.values.products.map((product, index) => (
          <div key={index}>
            <TextField
              fullWidth
              size="small"
              margin="dense"
              variant="filled"
              id={`products[${index}].product_name`}
              name={`products[${index}].product_name`}
              label="Product Name"
              value={product.product_name}
              onChange={formik.handleChange}
            />
            <TextField
              fullWidth
              size="small"
              margin="dense"
              variant="filled"
              id={`products[${index}].product_heading`}
              name={`products[${index}].product_heading`}
              label="Product Heading"
              value={product.product_heading}
              onChange={formik.handleChange}
            />
            <TextField
              fullWidth
              size="small"
              margin="dense"
              variant="filled"
              id={`products[${index}].product_content`}
              name={`products[${index}].product_content`}
              label="Product Content"
              value={product.product_content}
              onChange={formik.handleChange}
            />

            {/* File Input for Image */}
            <input
              type="file"
              onChange={(e) =>
                handleAwsNestedFileUpload(
                  e,
                  `products[${index}].product_img`,
                  `product_img_${index}`,
                  formik,
                  setFileSnackbar
                )
              }
            />
            <br />
            {product.product_img && (
              <div>
                <img
                  src={product.product_img}
                  alt={`Product ${index + 1}`}
                  style={{ width: "100px", height: "100px" }}
                />
                <br />
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDeleteImage(index)}
                >
                  Delete Image
                </Button>
              </div>
            )}

            {/* Other fields */}
            <TextField
              fullWidth
              size="small"
              margin="dense"
              variant="filled"
              id={`products[${index}].product_btn_1_text`}
              name={`products[${index}].product_btn_1_text`}
              label="Button 1 Text"
              value={product.product_btn_1_text}
              onChange={formik.handleChange}
            />
            <TextField
              fullWidth
              size="small"
              margin="dense"
              variant="filled"
              id={`products[${index}].product_btn_1_link`}
              name={`products[${index}].product_btn_1_link`}
              label="Button 1 Link"
              value={product.product_btn_1_link}
              onChange={formik.handleChange}
            />
            <TextField
              fullWidth
              size="small"
              margin="dense"
              variant="filled"
              id={`products[${index}].product_btn_2_text`}
              name={`products[${index}].product_btn_2_text`}
              label="Button 2 Text"
              value={product.product_btn_2_text}
              onChange={formik.handleChange}
            />
            <TextField
              fullWidth
              size="small"
              margin="dense"
              variant="filled"
              id={`products[${index}].product_btn_2_link`}
              name={`products[${index}].product_btn_2_link`}
              label="Button 2 Link"
              value={product.product_btn_2_link}
              onChange={formik.handleChange}
            />
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
          Add Product
        </button>

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
