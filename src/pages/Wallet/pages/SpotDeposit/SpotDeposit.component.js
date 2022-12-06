import React from "react";
import BoxUi from "../../../../components/UiKit/BoxUi";
import AttentionCard from "../../components/AttentionCard/AttentionCard";
import FAQCard from "../../components/FAQCard/FAQCard";
import TransactionSection from "../../components/TransactionSection/TransactionSection";
import WalletRecord from "../../components/WalletRecord/WalletRecord";
import TradeNowCard from "./components/TradeNowCard/TradeNowCard";

export default function SpotDeposit({ children, ...props }) {
  return (
    <div className={`flex flex-col gap-[10px]`}>
      <BoxUi header={<div className={`font-bold`}>Deposit</div>}>
        <div className={`flex gap-[25px]`}>
          <div className={`flex w-[460px]`}>
            <TransactionSection />
          </div>
          <div className={`flex flex-col gap-[15px] grow`}>
            <AttentionCard items={attentionItems} />
            <TradeNowCard />
            <FAQCard />
          </div>
        </div>
      </BoxUi>
      <WalletRecord type="Deposit" />
    </div>
  );
}

const attentionItems = [
  { title: "Minimum Deposit", value: "0.001", unit: "BTC" },
  { title: "Number of Confirmation", value: "1", unit: "Block" },
  {
    title: "Number of Confiromation for Withdrawal",
    value: "6",
    unit: "Block",
    warning: true,
  },
];
