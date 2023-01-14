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
            <FAQCard items={faqItems} className={`hidden lg:block`} />
          </div>
        </div>
      </BoxUi>
      <WalletRecord type={walletType.Deposit} />
    </div>
  );
}

const faqItems = [
  {
    question: "How do I deposit cryptocurrency on 3Co Exchange?",
    answer:
      "To deposit cryptocurrency on 3Co Exchange, you will need to send it from your wallet to the unique deposit address provided by our exchange. Please make sure to double-check the address before sending any funds to avoid mistakes.",
  },
  {
    question:
      "Is there a minimum deposit amount for cryptocurrency on 3Co Exchange?",
    answer:
      "There may be a minimum deposit amount for certain cryptocurrencies on 3Co Exchange. Please check our website or contact customer support for more information.",
  },
  {
    question:
      "How long does it take for my deposited cryptocurrency to show up in my account on 3Co Exchange?",
    answer:
      "The time it takes for deposited cryptocurrency to show up in your account on 3Co Exchange will depend on the cryptocurrency and the network traffic at the time of the deposit. It is generally faster for deposits to be credited to your account for more widely-used cryptocurrencies with higher network traffic.",
  },
  {
    question:
      "What should I do if I encounter an error when depositing cryptocurrency on 3Co Exchange?",
    answer:
      "If you encounter an error when depositing cryptocurrency on 3Co Exchange, please contact customer support for assistance. They will be able to help you troubleshoot any issues and ensure that your deposit is processed smoothly. you can send ticket for support from your profile",
  },
];

const attentionItems = [
  { title: "Minimum Deposit", value: "2", unit: "USDT" },
  { title: "Number of Confirmation", value: "11", unit: "Block" },
];
