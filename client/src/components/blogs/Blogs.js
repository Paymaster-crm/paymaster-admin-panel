import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import ReactQuill from "react-quill";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import { handleSingleFileUpload } from "../../utils/awsSingleFileUpload";
import { validationSchema } from "../../schemas/addBlogSchema";

function Index() {
  const [fileSnackbar, setFileSnackbar] = useState(false);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6] }], // Heading levels
      ["bold", "italic", "underline", "blockquote"], // Formatting options
      [{ list: "ordered" }, { list: "bullet" }], // Lists
      ["link", "image"], // Link and image options
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
  ];

  const formik = useFormik({
    initialValues: {
      title: "",
      featured_image: "",
      content: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const res = await axios.post(
        `${process.env.REACT_APP_API_STRING}/add-blog`,
        values
      );
      alert(res.data.message);
    },
  });

  const handleDeleteImage = (fieldName) => {
    formik.setFieldValue(fieldName, "");
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Title Field */}
      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="title"
        name="title"
        label="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <br />
      <br />
      {/* File Upload */}
      <label htmlFor="banner_bg">Featured Image:&nbsp;</label>
      <input
        type="file"
        onChange={(e) =>
          handleSingleFileUpload(
            e,
            "featured_image",
            "featured_image",
            formik,
            setFileSnackbar
          )
        }
      />
      <br />
      {formik.values.featured_image && (
        <div>
          <img
            src={formik.values.featured_image}
            alt="Banner Background"
            style={{ width: "100px", height: "100px" }}
          />
          <br />
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleDeleteImage("featured_image")}
          >
            Delete Image
          </Button>
        </div>
      )}
      <br />

      {/* ReactQuill Editor */}
      {/* ReactQuill Editor */}
      <ReactQuill
        value={formik.values.content} // Bind Formik value to the editor
        onChange={(value) => formik.setFieldValue("content", value)} // Update Formik on change
        onBlur={() => formik.setFieldTouched("content", true)} // Manually set touched for content
        modules={modules}
        formats={formats}
        theme="snow"
      />
      {formik.touched.content && formik.errors.content && (
        <p style={{ color: "red", marginTop: "5px" }}>
          {formik.errors.content}
        </p> // Display error
      )}

      <br />

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default Index;
