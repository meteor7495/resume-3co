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
import reducer from "./store";
import withReducer from "store/withReducer";
import {
  getPairs,
  getPairWallet,
  selectPairById,
  selectPairs,
  setSelectedPair,
} from "./store/pairsSlice";
import { useSearchParams } from "react-router-dom";
import { getOnlinePairs } from "./store/onlinePairsSlice";

function Exchange({ children, ...props }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSettings({ footerMainDisplay: false }));
  }, []);
  const selectedPair = useSelector((s) =>
    selectPairById(s, s.exchange.pairs.selectedPair)
  );
  const {
    pairCurrency: { ticker: pairTicker, _id: pairId } = {},
    baseCurrency: { ticker: baseTicker } = {},
  } = selectedPair
    ? selectedPair
    : {
        pairCurrency: {},
        baseCurrency: {},
      };
  useEffect(() => {
    if (pairId) {
      dispatch(getPairWallet({ selectId: pairId }));
    }
  }, [pairId]);

  useEffect(() => {
    dispatch(getOnlinePairs());
    dispatch(getPairs());
    const interval = setInterval(() => {
      dispatch(getOnlinePairs());
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  const pairs = useSelector(selectPairs);
  const [searchParams] = useSearchParams();
  const coinId = searchParams.get("coinId");
  const queryPairId = searchParams.get("pairId");
  useEffect(() => {
    let id;
    if (queryPairId) {
      id = queryPairId;
    } else if (coinId) {
      let pair = pairs?.filter(
        ({ baseCurrency: { _id } }) => _id === coinId
      )[0];
      id = pair?._id;
    } else {
      let TCO = pairs?.filter(
        ({ baseCurrency: { ticker } = {} }) => ticker === "3CO"
      )[0];
      id = TCO?._id;
    }
    id && dispatch(setSelectedPair(id));
  }, [coinId, queryPairId, pairs]);

  const { width } = useSelector((s) => s.width);
  return (
    <PagesLayout className={classes.body}>
      {width > 1024 ? (
        <div className={`hidden lg:flex gap-[10px] h-full`}>
          <div className={`flex-[1]`}>
            <OrderBook />
          </div>
          <div className={`flex-[3] flex flex-col gap-[10px]`}>
            <div className="flex-[3] min-h-[440px]">
              <BoxUi className={`h-full relative px-[17px] py-[30px]`}>
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
            <div className="relative min-h-[440px] px-[10px] py-[10px]">
              <TradingChart />
            </div>
          </CollapseUi>
          <CollapseUi name={baseTicker + "/" + pairTicker}>
            <div className="flex flex-col gap-[10px] h-[350px] px-[22px] py-[10px]">
              <MarketPairs />
            </div>
          </CollapseUi>
          <div className=" block h-[540px]">
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

export default withReducer("exchange", reducer)(Exchange);
