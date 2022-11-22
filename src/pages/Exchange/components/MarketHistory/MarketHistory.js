import { Box, Container, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import BoxUi from "../../../../components/UiKit/BoxUi";
import OrdersTable from "./components/OrdersTable/OrdersTable";
import useStyles from "./styles";

const MarketHistory = () => {
  const classes = useStyles();
  const tClasses = {
    tabPanel: "pt-[8px] h-full grow",
    tab: "normal-case p-[6px] min-h-0 min-w-[80px] lg:min-w-[90px] text-[10px] lg:text-[12px] font-bold opacity-50",
  };
  const [tab, setTab] = useState(0);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
      className: tClasses.tab,
      classes:{
        selected:"opacity-100"
      }
    };
  }
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <BoxUi className={`h-full`}>
      <Box className={`h-full flex flex-col`}>
        <Box
          className={`flex-1 grow w-full lg:w-fit`}
          sx={{ borderBottom: 1, borderColor: "divider", width: "fit-content" }}
        >
          <Tabs
            value={tab}
            className="w-full"
            onChange={handleChange}
            classes={{
              flexContainer: " justify-between lg:justify-start flex lg:gap-[20px]",
              root: "min-h-0",
            }}
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
          <OrdersTable />
        </TabPanel>
        <TabPanel classes={{ root: tClasses.tabPanel }} value={tab} index={2}>
          <OrdersTable />
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
