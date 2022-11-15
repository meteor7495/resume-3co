import { Box, Container, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import BoxUi from "../../../../components/UiKit/BoxUi";
import OrdersTable from "./components/OrdersTable/OrdersTable";
import useStyles from "./styles";

const MarketHistory = () => {
  const classes = useStyles();
  const tClasses = {
    tabPanel: "pt-[8px]",
    tab: "normal-case p-[6px] min-h-0 text-[12px] font-bold",
  };
  const [tab, setTab] = useState(0);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
      className: tClasses.tab,
    };
  }
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <BoxUi className={`h-[300px] ${classes.body}`}>
      <Box>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", width: "fit-content" }}
        >
          <Tabs
            value={tab}
            onChange={handleChange}
            aria-label="basic tabs example"
            classes={{ flexContainer: "gap-[20px]", root: "min-h-0" }}
          >
            <Tab label="Open Orders" {...a11yProps(0)} />
            <Tab label="Order History" {...a11yProps(1)} />
            <Tab label="Trade History" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel classes={{ root: tClasses.tabPanel }} value={tab} index={0}>
          <OrdersTable />
        </TabPanel>
        <TabPanel classes={{ root: tClasses.tabPanel }} value={tab} index={1}>
          Item Two
        </TabPanel>
        <TabPanel classes={{ root: tClasses.tabPanel }} value={tab} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </BoxUi>
  );
};

function TabPanel(props) {
  const {
    children,
    value,
    index,
    className,
    classes: { root } = {},
    ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={`h-full ${className}`}
      {...other}
    >
      {value === index && <Box className={root}>{children}</Box>}
    </div>
  );
}

export default MarketHistory;
