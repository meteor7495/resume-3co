import React from "react";
import useStyles from "./Exchange.style";
import PagesLayout from "../../components/PagesLayout";
// import MarketPairs from "./components/MarketPairs";
import OrderBook from "./components/OrderBook";
import TradingChart from "./components/TradingChart";
import MarketHistory from "./components/MarketHistory";

export default function Exchange({ children, ...props }) {
  const classes = useStyles();

  return (
    <PagesLayout>
      <div className={`flex gap-[10px] `}>
        <div className={`flex-[1]`}>
          <OrderBook />
        </div>
        <div className={`flex-[3] flex flex-col gap-[10px]`}>
          <TradingChart />
          <MarketHistory />
        </div>
        <div className={`flex-[1]`}>ss</div>
      </div>
    </PagesLayout>
  );
}
