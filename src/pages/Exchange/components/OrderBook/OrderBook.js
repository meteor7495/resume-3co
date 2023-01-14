import { selectOnlinePairsById } from "pages/Exchange/store/onlinePairsSlice";
import React from "react";
import { useSelector } from "react-redux";
import BoxUi from "../../../../components/UiKit/BoxUi";
import OrderBookTable from "./components/OrderBookTable/OrderBookTable";
import useStyles from "./styles";

const OrderBook = () => {
  const classes = useStyles();
  const selectedPair = useSelector((s) =>
    selectOnlinePairsById(s, s.exchange.pairs.selectedPair)
  );
  const {
    baseCurrency: { ticker: baseTicker } = {},
    pairCurrency: { ticker: pairTicker } = {},
    lastPrice,
  } = selectedPair ? selectedPair : {};
  return (
    <div className={`flex flex-col h-full gap-[10px]`}>
      <BoxUi
        className={`flex-[1] min-h-[230px] lg:min-h-[337px] ${classes.orderRed}`}
      >
        <OrderBookTable priceType={"sell"} />
      </BoxUi>
      <BoxUi>
        <div
          className={`flex items-center justify-center gap-[5px] text-[12px] p-[8px] font-bold`}
        >
          <span>1</span>
          <span>{baseTicker}</span>
          <span className={`opacity-50`}>≈</span>
          <span className={`opacity-50`}>{lastPrice}</span>
          <span className={`opacity-50`}>{pairTicker}</span>
        </div>
      </BoxUi>
      <BoxUi
        className={`flex-[1] min-h-[230px] lg:min-h-[337px] ${classes.orderGreen}`}
      >
        <OrderBookTable priceType="buy" />
      </BoxUi>
    </div>
  );
};

export default OrderBook;
