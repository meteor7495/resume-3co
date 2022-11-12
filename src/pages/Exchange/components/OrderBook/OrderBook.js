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
        <OrderBookTable priceType={"sell"} />
      </BoxUi>
      <BoxUi>
        <div
          className={`flex items-center justify-center gap-[5px] text-[12px] p-[8px] font-bold`}
        >
          <span>0.075947</span>
          <span className={`opacity-50`}>≈</span>
          <span className={`opacity-50`}>1,585.69</span>
          <span className={`opacity-50`}>USD</span>
        </div>
      </BoxUi>
      <BoxUi className={`h-[333px] ${classes.orderGreen}`}>
        <OrderBookTable priceType="buy" />
      </BoxUi>
    </div>
  );
};

export default OrderBook;
