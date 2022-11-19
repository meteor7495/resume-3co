import React from "react";
import BoxUi from "../../../../components/UiKit/BoxUi";
import OrderBookTable from "./components/OrderBookTable/OrderBookTable";
import useStyles from "./styles";

const OrderBook = () => {
  const classes = useStyles();
  return (
    <div className={`flex flex-col h-full gap-[10px]`}>
      <BoxUi className={`flex-[1] min-h-[337px] ${classes.orderRed}`}>
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
      <BoxUi className={`flex-[1] min-h-[337px] ${classes.orderGreen}`}>
        <OrderBookTable priceType="buy" />
      </BoxUi>
    </div>
  );
};

export default OrderBook;
