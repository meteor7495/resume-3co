import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import BoxUi from "../../../../components/UiKit/BoxUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi/ButtonUi";
import InputUi from "../../../../components/UiKit/InputUi";
import ButtonTab from "../ButtonTab";
import useStyles from "./styles";

export default function MarketTrade({ type }) {
  const [config, setConfig] = useState({});
  const classes = useStyles();
  const [marketType, setMarketType] = useState("limit");
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

  return (
    <BoxUi className={`flex flex-col gap-[4px]`}>
      <div className={`flex flex-col gap-[10px]`}>
        <div className={`flex gap-[10px] items-center`}>
          <div className={`flex-[1] text-${config.color}`}>{config.title}</div>
          <div className={`flex-[5]`}>
            <ButtonTab
              buttons={marketTypes}
              selected={marketType}
              classes={{ button: "font-bold px-[20px] py-[0px] box-content" }}
              setSelected={setMarketType}
              className={`justify-center gap-[10] `}
            />
          </div>
        </div>
        <InputUi />
        <InputUi />
      </div>
      <div></div>
      <div className="flex flex-col">
        <ButtonUi variant="contained" color={config.color}>
          {config.title}
        </ButtonUi>
      </div>
    </BoxUi>
  );
}

const marketTypes = [
  { children: "Limit", value: "limit" },
  { children: "Market", value: "market" },
];
