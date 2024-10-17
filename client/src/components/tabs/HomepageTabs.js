import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import UpdateBanner from "../UpdateBanner";
import UpdateFeatures from "../UpdateFeatures";
import UpdateReviews from "../UpdateReviews";
import UpdatePartners from "../UpdatePartners";
import UpdateProducts from "../UpdateProducts";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function HomepageTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Banner" {...a11yProps(0)} />
          <Tab label="Features" {...a11yProps(1)} />
          <Tab label="Partners" {...a11yProps(2)} />
          <Tab label="Products" {...a11yProps(3)} />
          <Tab label="Reviews" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <UpdateBanner />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <UpdateFeatures />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <UpdatePartners />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <UpdateProducts />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <UpdateReviews />
      </CustomTabPanel>
    </Box>
  );
}

export default HomepageTabs;
