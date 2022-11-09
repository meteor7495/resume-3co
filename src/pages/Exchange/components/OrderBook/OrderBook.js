import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import BoxUi from "../../../../components/UiKit/BoxUi";
import OrderBookTable from "./components/OrderBookTable/OrderBookTable";
import useStyles from "./styles";

const OrderBook = () => {
  var classes = useStyles();
  return (
    <div className={`flex flex-col gap-[10px]`}>
      <BoxUi className={`h-[333px] ${classes.orderRed}`}>
        <OrderBookTable />
      </BoxUi>
      <BoxUi>2</BoxUi>
      <BoxUi className={`h-[333px] ${classes.orderGreen}`}>3</BoxUi>
    </div>
  );
};

export default OrderBook;
