import React from "react";
import { Link } from "react-router-dom";
import bigInt from "utils/bigInt";
import BoxUi from "../../../../components/UiKit/BoxUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";

export default function TransactionCard({
  title,
  visibility,
  btc,
  usd,
  deposit,
  withdraw,
  ...props
}) {
  return (
    <BoxUi
      className={`flex flex-col lg:flex-row justify-between items-center p-[14px] gap-[24px] lg:gap-0 lg:p-[17px] ${
        ["Spot", "Financial"].includes(title) ? "" : "opacity-30"
      }`}
    >
      <div className="flex flex-col items-center lg:items-start gap-[15px]">
        <div className="text-[20px] font-bold">{title}</div>
        <div className="text-[15px]">
          <span className="font-bold">
            {" "}
            {numberHandler({ number: btc, visibility })} BTC
          </span>{" "}
          ≈ {numberHandler({ number: usd, visibility })} USD
        </div>
      </div>
      <div className={`flex gap-[20px]`}>
        <TransactionCardBtn
          to={deposit}
          className={`bg-[#35C85A0d]`}
          color={"success"}
          disabled={!["Spot", "Financial"].includes(title)}
        >
          Deposit
        </TransactionCardBtn>
        <TransactionCardBtn
          to={withdraw}
          className={`bg-[#f34f450d] ${
            ["Financial"].includes(title) ? "opacity-30" : ""
          }`}
          color={"error"}
          disabled={title !== "Spot"}
        >
          Withdraw
        </TransactionCardBtn>
      </div>
    </BoxUi>
  );
}

const TransactionCardBtn = ({ className, to, ...props }) => {
  return (
    <Link to={to}>
      <ButtonUi
        {...props}
        variant="outlined"
        className={`font-bold w-[120px] h-[50px] rounded-[10px] ${className}`}
      />
    </Link>
  );
};

const numberHandler = ({ number, visibility }) => {
  return visibility ? "****" : number && bigInt(number);
};
