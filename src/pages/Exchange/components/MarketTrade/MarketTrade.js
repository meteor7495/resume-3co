import { InputAdornment } from "@mui/material";
import ComingSoon from "components/ComingSoon/ComingSoon";
import { AlertTypes } from "constants/alertTypes.enum";
import useOrder from "pages/Exchange/hooks/useOrder";
import { selectPairById } from "pages/Exchange/store/pairsSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "store/AlertsSlice";
import BoxUi from "../../../../components/UiKit/BoxUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi/ButtonUi";
import InputUi from "../../../../components/UiKit/InputUi";
import ButtonTab from "../ButtonTab";
import useStyles from "./styles";

export default function MarketTrade({ type }) {
  const [config, setConfig] = useState({});
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();
  const [marketType] = useState("market");
  const selectedPair = useSelector((s) =>
    selectPairById(s, s.exchange.pairs.selectedPair)
  );
  const {
    baseCurrency: { ticker: baseTicker } = {},
    pairCurrency: { ticker: pairTicker, _id: pairId } = {},
    lastPrice,
  } = selectedPair ? selectedPair : {};

  const { activeBalance } = useSelector((s) => s.exchange.pairs.pairWallet);

  const { postBuyOrder } = useOrder();
  const clickHandler = async () => {
    switch (type) {
      case "buy":
        await postBuyOrder({
          amount,
          activeBalance,
          selectedPair: selectedPair._id,
          pairId,
        });
        break;
      case "sell":
        break;
      default:
        break;
    }
  };
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
    //eslint-disable-next-line
  }, [type]);
  const isMarket = marketType === "market";
  const setMarketTypeHandler = (value) => {
    if (value === "limit") {
      dispatch(
        showAlert({
          type: AlertTypes.info,
          visible: true,
          message: "coming soon...",
          key: 0,
        })
      );
    }
  };
  const amountHandler = (e) => {
    const value = e?.target?.value
      ? e?.target?.value
      : typeof e === "string" || typeof e === "number"
      ? e
      : "";
    setAmount(value.toFixedNumber());
  };
  return (
    <BoxUi className={`flex flex-col gap-[10px] lg:gap-[4px] relative`}>
      <div className={`flex flex-col gap-[10px]`}>
        <div className={`flex gap-[10px] items-center`}>
          <div className={`flex-[1] font-bold text-${config.color}`}>
            {config.title}
          </div>
          <div className={`flex-[5]`}>
            <ButtonTab
              buttons={marketTypes}
              selected={marketType}
              classes={{ button: "px-[20px] py-[4px] box-content" }}
              setSelected={setMarketTypeHandler}
              className={`justify-center gap-[10] `}
            />
          </div>
        </div>
        <TradeInput
          bestPrice={isMarket}
          placeholder="Price"
          name={pairTicker}
          lastPrice={lastPrice}
          type="number"
        />
        <TradeInput
          placeholder="Amount"
          name={baseTicker}
          type="number"
          onChange={amountHandler}
          value={amount}
        />
      </div>
      <AssetsSelect value={activeBalance} onClick={amountHandler} />
      <div className="flex gap-[12px]">
        <div className="flex text-[10px] justify-between flex-1">
          <div>{isMarket ? "available" : "Total"}</div>
          <div className="w-[70px] flex items-center">
            <span className="w-[50px] truncate">{activeBalance}</span>{" "}
            {pairTicker}
          </div>
        </div>
        <div className="flex text-[10px] justify-between flex-1 opacity-50">
          <div>{isMarket ? "Fee" : "Volume"}</div>
          <div>0 {pairTicker}</div>
        </div>
      </div>
      <div className="flex flex-col">
        <ButtonUi
          variant="contained"
          className=" font-bold"
          onClick={clickHandler}
          color={config.color}
        >
          {config.title}
        </ButtonUi>
      </div>
      <ComingSoon visible={baseTicker !== "3CO" || type === "sell"} />
    </BoxUi>
  );
}

const AssetsSelect = ({ value, onClick }) => {
  const clickHandler = (x) => {
    const newValue = +value * 100 * x;
    onClick && onClick(newValue);
  };
  const classes = useStyles();
  const className = `rounded-[2px] text-[8px] px-[20px] py-[3px] text-center cursor-pointer flex-1 ${classes.assetsSelect}`;
  return (
    <div className={`flex gap-[12px]`}>
      <div onClick={() => clickHandler(1 / 4)} className={className}>
        25%
      </div>
      <div onClick={() => clickHandler(1 / 2)} className={className}>
        50%
      </div>
      <div onClick={() => clickHandler(3 / 4)} className={className}>
        75%
      </div>
      <div onClick={() => clickHandler(1)} className={className}>
        100%
      </div>
    </div>
  );
};

const TradeInput = ({ name, bestPrice, lastPrice, ...props }) => {
  const classes = useStyles();
  return (
    <>
      {bestPrice ? (
        <div
          className={`text-center text-[12px] border border-solid rounded-[5px] pt-[10px] pb-[9px] ${classes.bestPrice}`}
        >
          Best Market Price{" "}
          <span className={classes.text}>
            ( {lastPrice} {name} )
          </span>
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
