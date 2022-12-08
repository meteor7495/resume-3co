import React from "react";
import BoxUi from "../../../../components/UiKit/BoxUi";
import { walletType } from "../../../../constants/walletType.enum copy";
import AttentionCard from "../../components/AttentionCard/AttentionCard";
import FAQCard from "../../components/FAQCard/FAQCard";
import TransactionSection from "../../components/TransactionSection/TransactionSection";
import WalletRecord from "../../components/WalletRecord/WalletRecord";

export default function SpotWithdraw({ children, ...props }) {
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
          <div className={`flex lg:w-[460px]`}>
            <TransactionSection type={walletType.Withdraw} />
          </div>
          <div className={`flex flex-col gap-[15px] grow`}>
            <AttentionCard description={<div className={`text-[12px] opacity-50`} >
              <span className="font-bold" >Arrival time:</span> Normal Transfers are sent via crypto network, and the arrival time depends on the number of confirmations required by the recipient.
            </div>} items={attentionItems} />
            <FAQCard className={`hidden lg:block`} />
          </div>
        </div>
      </BoxUi>
      <WalletRecord type={walletType.Withdraw} />
    </div>
  );
}

const attentionItems = [
  { title: "24H Withdrawal Amount", value: "10,000", unit: "USD" },
  { title: "24H Remaining Amount", value: "1,236", unit: "USD" },
  {
    title: "Minimum Withdrawal",
    value: "0.01",
    unit: "BTC",
    warning: true
  },
];
