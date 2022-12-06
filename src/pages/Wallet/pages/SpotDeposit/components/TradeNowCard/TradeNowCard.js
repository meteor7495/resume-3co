import React from "react";
import Icons from "../../../../../../assets/icons";
import ButtonUi from "../../../../../../components/UiKit/ButtonUi";
import useStyles from "./styles";
export default function TradeNowCard({ items }) {
  const classes = useStyles();
  return (
    <div className={`flex flex-col gap-[10px]`}>
      <div className={`font-bold text-[15px]`}>Trade now</div>
      <div className={`flex gap-[10px]`}>
        <ButtonUi className={`flex gap-[4px] rounded-[10px]`}>
          BTC / USDT <Icons.BoxOut />
        </ButtonUi>
        <ButtonUi className={`flex gap-[4px] rounded-[10px]`}>
          USDT / BTC <Icons.BoxOut />
        </ButtonUi>
        <ButtonUi className={`flex gap-[4px] rounded-[10px]`}>
          BTC / BSC <Icons.BoxOut />
        </ButtonUi>
      </div>
    </div>
  );
}
