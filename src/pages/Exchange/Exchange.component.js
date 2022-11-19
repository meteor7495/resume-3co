import React from "react";
import useStyles from "./Exchange.style";
import PagesLayout from "../../components/PagesLayout";
import MarketPairs from "./components/MarketPairs";
import OrderBook from "./components/OrderBook";
import TradingChart from "./components/TradingChart";
import MarketHistory from "./components/MarketHistory";
import MarketTrade from "./components/MarketTrade/MarketTrade";
import BoxUi from "../../components/UiKit/BoxUi";

export default function Exchange({ children, ...props }) {
  const classes = useStyles();

  return (
    <PagesLayout className={classes.body}>
      <div className={`flex gap-[10px] h-full`}>
        <div className={`flex-[1]`}>
          <OrderBook />
        </div>
        <div className={`flex-[3] flex flex-col gap-[10px]`}>
          <div className="flex-[3] min-h-[440px]">
            <TradingChart />
          </div>
          <div className={`flex-[2] min-h-[300px]`}>
            <MarketHistory />
          </div>
        </div>
        <div className={`flex-[1] flex flex-col gap-[10px]`}>
          <MarketPairs />
          <MarketTrade type="buy" />
          <MarketTrade type="sell" />
        </div>
      </div>
    </PagesLayout>
  );
}
