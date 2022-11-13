import React from "react";
import useStyles from "./Exchange.style";
import PagesLayout from "../../components/PagesLayout";
// import MarketPairs from "./components/MarketPairs";
import OrderBook from "./components/OrderBook";
import TradingChart from "./components/TradingChart";

export default function Exchange({ children, ...props }) {
  const classes = useStyles();

  return (
    <PagesLayout>
      <div className={`flex gap-[10px] `}>
        <div className={`flex-[1]`}>
          <OrderBook />
        </div>
        {/*275*/}
        <div className={`flex-[3]`}>
          <TradingChart />
          </div>
        <div className={`flex-[1]`}>ss</div>
        {/*275*/}
      </div>
    </PagesLayout>
  );
}
