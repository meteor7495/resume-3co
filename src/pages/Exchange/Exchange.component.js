import React, { useEffect, useState } from "react";
import useStyles from "./Exchange.style";
import PagesLayout from "../../components/PagesLayout";
import MarketPairs from "./components/MarketPairs";
import OrderBook from "./components/OrderBook";
import TradingChart from "./components/TradingChart";
import MarketHistory from "./components/MarketHistory";
import MarketTrade from "./components/MarketTrade/MarketTrade";
import BoxUi from "../../components/UiKit/BoxUi";
import CollapseUi from "../../components/UiKit/CollapseUi/CollapseUi";
import { useDispatch, useSelector } from "react-redux";
import { setSettings } from "../../store/LayoutSettings";

export default function Exchange({ children, ...props }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSettings({ footerMainDisplay: false }));
  }, []);
  const { width } = useSelector((s) => s.width);
  const { selectedCoin: { baseTicker, pairTicker } = {} } = useSelector(
    (state) => state.app
  );
  return (
    <PagesLayout className={classes.body}>
      {width > 1024 ? (
        <div className={`hidden lg:flex gap-[10px] h-full`}>
          <div className={`flex-[1]`}>
            <OrderBook />
          </div>
          <div className={`flex-[3] flex flex-col gap-[10px]`}>
            <div className="flex-[3] min-h-[440px]">
              <BoxUi className={`h-full px-[17px] py-[30px]`}>
                <TradingChart />
              </BoxUi>
            </div>
            <div className={`flex-[2] min-h-[300px]`}>
              <MarketHistory />
            </div>
          </div>
          <div className={`flex-[1] flex flex-col gap-[10px]`}>
            <BoxUi className={`flex flex-col gap-[10px] h-full`}>
              <MarketPairs />
            </BoxUi>
            <div className="flex-1">
              <MarketTrade type="buy" />
            </div>
            <div className="flex-1">
              <MarketTrade type="sell" />
            </div>
          </div>
        </div>
      ) : (
        <div className={`flex flex-col lg:hidden gap-[10px] h-full`}>
          <CollapseUi name={"Chart"}>
            <div className="min-h-[440px] px-[10px] py-[10px]">
              <TradingChart />
            </div>
          </CollapseUi>
          <CollapseUi name={baseTicker + "/" + pairTicker}>
            <div className="flex flex-col gap-[10px] h-[350px] px-[22px] py-[10px]">
              <MarketPairs />
            </div>
          </CollapseUi>
          <div className=" block h-[420px]">
            <OrderBook />
          </div>
          <MarketTrade type="buy" />
          <MarketTrade type="sell" />
          <div className=" block h-[290px]">
            <MarketHistory />
          </div>
        </div>
      )}
    </PagesLayout>
  );
}