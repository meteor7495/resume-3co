import { Button, InputAdornment } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BoxUi from "../../../../components/UiKit/BoxUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi/ButtonUi";
import InputUi from "../../../../components/UiKit/InputUi";
import ButtonTab from "../ButtonTab";
import useStyles from "./styles";

export default function MarketTrade({ type }) {
  const [config, setConfig] = useState({});
  const classes = useStyles();
  const [marketType, setMarketType] = useState("limit");
  const { selectedCoin: { baseTicker, pairTicker } = {} } = useSelector(
    (state) => state.app
  );
  useEffect(() => {
    switch (type) {
      case "buy":
        setConfig({
          title: "BUY",
          color: "success",
        });
        break;
      case "sell":
        setConfig({
          title: "SELL",
          color: "error",
        });
        break;
      default:
        break;
    }
  }, [type]);
  const isMarket = marketType === "market";
  return (
    <BoxUi className={`flex flex-col gap-[4px]`}>
      <div className={`flex flex-col gap-[10px]`}>
        <div className={`flex gap-[10px] items-center`}>
          <div className={`flex-[1] font-bold text-${config.color}`}>{config.title}</div>
          <div className={`flex-[5]`}>
            <ButtonTab
              buttons={marketTypes}
              selected={marketType}
              classes={{ button: "px-[20px] py-[4px] box-content" }}
              setSelected={setMarketType}
              className={`justify-center gap-[10] `}
            />
          </div>
        </div>
        <TradeInput
          bestPrice={isMarket}
          placeholder="Price"
          name={baseTicker}
        />
        <TradeInput placeholder="Amount" name={pairTicker} />
      </div>
      <AssetsSelect />
      <div className="flex gap-[12px]">
        <div className="flex text-[10px] justify-between flex-1">
          <div>{isMarket ? "Availabe" : "Total"}</div>
          <div>0.08686 {baseTicker}</div>
        </div>
        <div className="flex text-[10px] justify-between flex-1 opacity-50">
          <div>{isMarket ? "Volume" : "Fee"}</div>
          <div>0.00051 {baseTicker}</div>
        </div>
      </div>
      <div className="flex flex-col">
        <ButtonUi variant="contained" className=" font-bold" color={config.color}>
          {config.title}
        </ButtonUi>
      </div>
    </BoxUi>
  );
}

const AssetsSelect = () => {
  const classes = useStyles();
  const className = `rounded-[2px] text-[8px] px-[20px] py-[3px] text-center cursor-pointer flex-1 ${classes.assetsSelect}`;
  return (
    <div className={`flex gap-[12px]`}>
      <div className={className}>25%</div>
      <div className={className}>50%</div>
      <div className={className}>75%</div>
      <div className={className}>100%</div>
    </div>
  );
};

const TradeInput = ({ name, bestPrice, ...props }) => {
  const classes = useStyles();
  return (
    <>
      {bestPrice ? (
        <div
          className={`text-center text-[12px] border border-solid rounded-[5px] pt-[10px] pb-[9px] ${classes.bestPrice}`}
        >
          Best Market Price
        </div>
      ) : (
        <InputUi
          {...props}
          InputProps={{
            endAdornment: (
              <InputAdornment className="z-[1]" position="end">
                <div
                  className={`h-[38px] flex items-center justify-center text-[14px] font-bold p-[0] min-w-[46px] border border-solid rounded-[5px] ${classes.input}`}
                  variant="outlined"
                >
                  {name}
                </div>
              </InputAdornment>
            ),
            classes: { root: "p-[0]" },
          }}
        />
      )}
    </>
  );
};

const marketTypes = [
  { children: "Limit", value: "limit" },
  { children: "Market", value: "market" },
];
