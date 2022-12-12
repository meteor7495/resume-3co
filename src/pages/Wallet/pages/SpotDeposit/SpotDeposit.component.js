import React from "react";
import BoxUi from "../../../../components/UiKit/BoxUi";
import { walletType } from "../../../../constants/walletType.enum copy";
import AttentionCard from "../../components/AttentionCard/AttentionCard";
import FAQCard from "../../components/FAQCard/FAQCard";
import TransactionSection from "../../components/TransactionSection/TransactionSection";
import WalletRecord from "../../components/WalletRecord/WalletRecord";
import TradeNowCard from "./components/TradeNowCard/TradeNowCard";

export default function SpotDeposit({ children, ...props }) {
  return (
    <div className={`flex flex-col gap-[10px]`}>
      <BoxUi
        classes={{
          header:
            "font-bold border-b-0 lg:border-b text-[20px] lg:text-[15px] text-center lg:text-left",
          body: "p-[10px] lg:p-[15px]",
        }}
        header={"Deposit"}
      >
        <div className={`flex flex-col-reverse lg:flex-row gap-[25px]`}>
          <div className={`flex lg:w-1/2`}>
            <TransactionSection type={walletType.Deposit} />
          </div>
          <div className={`flex flex-col gap-[15px] lg:w-1/2`}>
            <AttentionCard items={attentionItems} />
            <TradeNowCard className={`hidden lg:block`} />
            <FAQCard className={`hidden lg:block`} />
          </div>
        </div>
      </BoxUi>
      <WalletRecord type={walletType.Deposit} />
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
  },
];
