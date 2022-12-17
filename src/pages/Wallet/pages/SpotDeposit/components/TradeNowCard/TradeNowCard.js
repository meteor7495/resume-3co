import routes from "configs/routes";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Icons from "../../../../../../assets/icons";
import ButtonUi from "../../../../../../components/UiKit/ButtonUi";

export default function TradeNowCard({ className }) {
  const { pairCurrencies } = useSelector((s) => s.wallet.coin);
  return (
    <div className={`flex flex-col gap-[10px] ${className}`}>
      <div className={`font-bold text-[15px]`}>Trade now</div>
      <div className={`flex gap-[10px]`} style={{ flexFlow: "row wrap" }}>
        {pairCurrencies?.map(({ baseCurrency, pairCurrency, _id }) => {
          return (
            <Link to={`../${routes.exchange}?pairId=${_id}`}>
              <ButtonUi className={` gap-[4px] rounded-[10px]`}>
                <span className={`w-max`}>
                  {`${baseCurrency?.ticker} / ${pairCurrency?.ticker}`}
                </span>
                <Icons.BoxOut />
              </ButtonUi>
            </Link>
          );
        })}
        {/* <ButtonUi className={`flex gap-[4px] rounded-[10px]`}>
          USDT / BTC <Icons.BoxOut />
        </ButtonUi>
        <ButtonUi className={`flex gap-[4px] rounded-[10px]`}>
          BTC / BSC <Icons.BoxOut />
        </ButtonUi> */}
      </div>
    </div>
  );
}
