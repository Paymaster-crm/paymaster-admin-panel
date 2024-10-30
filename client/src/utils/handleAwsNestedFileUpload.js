import AWS from "aws-sdk";

export const handleAwsNestedFileUpload = async (
  e,
  formikField,
  folderName,
  formik,
  setFileSnackbar
) => {
  if (e.target.files.length === 0) {
    alert("No file selected");
    return;
  }

  try {
    const file = e.target.files[0];
    const key = `${folderName}/${file.name}`;

    const s3 = new AWS.S3({
      accessKeyId: process.env.REACT_APP_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
      region: "ap-south-1",
    });

    const params = {
      Bucket: "paymaster-document",
      Key: key,
      Body: file,
    };

    // Upload the file to S3 and get the URL
    const data = await s3.upload(params).promise();
    const photoUrl = data.Location;

    // Use setFieldValue to update the specific field inside the products array
    formik.setFieldValue(formikField, photoUrl);

    setFileSnackbar(true);

    setTimeout(() => {
      setFileSnackbar(false);
    }, 3000);
  } catch (err) {
    console.error("Error uploading file:", err);
  }
};
