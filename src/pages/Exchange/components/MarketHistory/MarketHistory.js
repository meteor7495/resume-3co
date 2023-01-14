import { Box, Tab, Tabs } from "@mui/material";
import {
  getOrderHistory,
  selectOrderHistorys,
} from "pages/Exchange/store/orderHistorySlice";
import {
  getTradeHistory,
  selectTradeHistorys,
} from "pages/Exchange/store/tradeHistorySlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoxUi from "../../../../components/UiKit/BoxUi";
import OrdersTable from "./components/OrdersTable/OrdersTable";
import useStyles from "./styles";

const MarketHistory = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tClasses = {
    tabPanel: "pt-[8px] h-full grow relative",
    tab: "normal-case p-[6px] min-h-0 min-w-[80px] lg:min-w-[90px] text-[10px] lg:text-[12px] font-bold opacity-50",
  };

  const selectedPair = useSelector((s) => s.exchange.pairs.selectedPair);
  const orderHistorys = useSelector(selectOrderHistorys);
  const tradeHistorys = useSelector(selectTradeHistorys);

  const [tab, setTab] = useState("openOrders");

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
      className: tClasses.tab,
      classes: {
        selected: "opacity-100",
      },
    };
  }
  const handleChange = (event, newValue) => {
    setTab(newValue);
    switch (newValue) {
      case "openOrders":
        break;
      case "orderHistory":
        dispatch(getOrderHistory({ selectId: selectedPair }));
        break;
      case "tradeHistory":
        dispatch(getTradeHistory({ selectId: selectedPair }));
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    switch (tab) {
      case "openOrders":
        break;
      case "orderHistory":
        dispatch(getOrderHistory({ selectId: selectedPair }));
        break;
      case "tradeHistory":
        dispatch(getTradeHistory({ selectId: selectedPair }));
        break;
      default:
        break;
    }
  }, [selectedPair]);
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
              flexContainer:
                " justify-between lg:justify-start flex lg:gap-[20px]",
              root: "min-h-0",
            }}
          >
            <Tab value={"openOrders"} label="Open Orders" {...a11yProps(0)} />
            <Tab
              value={"orderHistory"}
              label="Order History"
              {...a11yProps(1)}
            />
            <Tab
              value={"tradeHistory"}
              label="Trade History"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel
          classes={{ root: tClasses.tabPanel }}
          value={tab}
          index={"openOrders"}
        >
          <OrdersTable rows={[]} />
        </TabPanel>
        <TabPanel
          classes={{ root: tClasses.tabPanel }}
          value={tab}
          index={"orderHistory"}
        >
          <OrdersTable rows={orderHistorys} />
        </TabPanel>
        <TabPanel
          classes={{ root: tClasses.tabPanel }}
          value={tab}
          index={"tradeHistory"}
        >
          <OrdersTable rows={tradeHistorys} />
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
