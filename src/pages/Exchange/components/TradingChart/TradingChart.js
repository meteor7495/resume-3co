import ComingSoon from "components/ComingSoon/ComingSoon";
import { selectPairById } from "pages/Exchange/store/pairsSlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AdvancedChart } from "react-tradingview-embed";

export default function TradingChart() {
  const { theme } = useSelector((state) => state.app);
  const [chart, setChart] = useState("");
  const selectedPair = useSelector((s) =>
    selectPairById(s, s.exchange.pairs.selectedPair)
  );
  useEffect(() => {
    if (selectedPair) {
      const {
        baseCurrency: { ticker: baseTicker },
        pairCurrency: { ticker: pairTicker },
      } = selectedPair;

      const symbol = baseTicker + pairTicker;

      setChart(
        <>
          <AdvancedChart
            widgetProps={{
              theme: theme,
              symbol,
              allow_symbol_change: true,
              toolbar_bg: "#fff",
              height: "100%",
              withdateranges: false,
              hide_top_toolbar: true,
              hide_side_toolbar: true,
            }}
          />
          <ComingSoon visible={symbol === "3COUSDT"} />
        </>
      );
    }
  }, [selectedPair, theme]);
  return (
    <>
      {chart ? (
        chart
      ) : (
        <div
          style={{ zIndex: 100, opacity: 0.7 }}
          className={`absolute w-full h-full bg-dark ${
            // selectedCoin.isActive
            false ? "none" : "flex flex-col items-center justify-center"
          }`}
        >
          <h3 className={"text-light text-center m-2"}>
            The market is currently inactive for this currency!!
          </h3>
        </div>
      )}
    </>
  );
}
