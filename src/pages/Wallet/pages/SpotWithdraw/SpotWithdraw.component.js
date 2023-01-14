import { clearError } from "pages/Wallet/store/errorSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWallets } from "store/slices/walletsSlice";
import BoxUi from "../../../../components/UiKit/BoxUi";
import { walletType } from "../../../../constants/walletType.enum copy";
import AttentionCard from "../../components/AttentionCard/AttentionCard";
import FAQCard from "../../components/FAQCard/FAQCard";
import TransactionSection from "../../components/TransactionSection/TransactionSection";
import WalletRecord from "../../components/WalletRecord/WalletRecord";

export default function SpotWithdraw({ children, ...props }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearError());
    dispatch(getWallets());
  }, []);
  return (
    <div className={`flex flex-col gap-[10px]`}>
      <BoxUi
        classes={{
          header:
            "font-bold border-b-0 lg:border-b text-[20px] lg:text-[15px] text-center lg:text-left",
          body: "p-[10px] lg:p-[15px]",
        }}
        header={"Withdraw"}
      >
        <div className={`flex flex-col-reverse lg:flex-row gap-[25px]`}>
          <div className={`flex lg:w-1/2`}>
            <TransactionSection type={walletType.Withdraw} />
          </div>
          <div className={`flex flex-col gap-[15px] lg:w-1/2`}>
            <AttentionCard
              description={
                <div className={`text-[12px] opacity-50`}>
                  <span className="font-bold">Arrival time:</span> Normal
                  Transfers are sent via crypto network, and the arrival time
                  depends on the number of confirmations required by the
                  recipient.
                </div>
              }
              items={attentionItems}
            />
            <FAQCard items={faqItems} className={`hidden lg:block`} />
          </div>
        </div>
      </BoxUi>
      <WalletRecord type={walletType.Withdraw} />
    </div>
  );
}

const faqItems = [
  {
    question: "How do I withdraw cryptocurrency from 3Co Exchange?",
    answer:
      "To withdraw cryptocurrency from 3Co Exchange, you will need to request a withdrawal and provide the unique address of your external wallet. Please make sure to double-check the address before initiating the withdrawal to avoid mistakes.",
  },
  {
    question:
      "Is there a minimum withdrawal amount for cryptocurrency on 3Co Exchange?",
    answer:
      "The minimum withdrawal amount and associated withdrawal fee for each cryptocurrency can be found on the withdrawal page for the selected cryptocurrency on our website. Please check this page or contact customer support for more information.",
  },
  {
    question:
      "How long does it take for my withdrawn cryptocurrency to show up in my external wallet?",
    answer:
      "The time it takes for withdrawn cryptocurrency to show up in your external wallet will depend on the cryptocurrency and the network traffic at the time of the withdrawal. It is generally faster for withdrawals to be credited to your external wallet for more widely-used cryptocurrencies with higher network traffic.",
  },
  {
    question:
      "What should I do if I encounter an error when withdrawing cryptocurrency from 3Co Exchange?",
    answer:
      "If you encounter an error when withdrawing cryptocurrency from 3Co Exchange, please contact customer support for assistance. They will be able to help you troubleshoot any issues and ensure that your withdrawal is processed smoothly. you can send ticket for support from your profile",
  },
];

const attentionItems = [
  // { title: "24H Withdrawal Amount", value: "10,000", unit: "USD" },
  // { title: "24H Remaining Amount", value: "1,236", unit: "USD" },
  {
    title: "Number of Confiromation for Withdrawal",
    value: "11",
    unit: "Block",
  },
  {
    title: "Minimum Withdrawal",
    value: "3",
    unit: "USDT",
    warning: true,
  },
];
