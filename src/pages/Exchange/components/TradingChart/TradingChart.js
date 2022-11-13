import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AdvancedChart } from "react-tradingview-embed";
import BoxUi from "../../../../components/UiKit/BoxUi";
// import { useSelector } from "react-redux";

export default function TradingChart() {
  const { selectedCoin, theme } = useSelector((state) => state.app);
  const [chart, setChart] = useState("");

  useEffect(() => {
    setChart(
      <AdvancedChart
        widgetProps={{
          theme: theme,
          symbol: `BINANCE:${selectedCoin.symbol}`,
          allow_symbol_change: true,
          toolbar_bg: "#fff",
          height: 380,
          // hide_top_toolbar: true,
          // hide_side_toolbar: true,

        }}
      />
    );
  }, [selectedCoin, theme]);
  return (
    <>
      <BoxUi className="h-[440px] px-[17px] py-[30px]">
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
      </BoxUi>
    </>
  );
}
