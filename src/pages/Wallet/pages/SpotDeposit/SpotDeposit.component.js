import React, { useState } from "react";
import Icons from "../../../../assets/icons";
import BoxUi from "../../../../components/UiKit/BoxUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import CollapseUi from "../../../../components/UiKit/CollapseUi/CollapseUi";
import AttentionCard from "../../components/AttentionCard/AttentionCard";
import WalletRecord from "../../components/WalletRecord/WalletRecord";

export default function SpotDeposit({ children, ...props }) {
  const [visibility, setVisibility] = useState(true);

  return (
    <div className={`flex flex-col gap-[10px]`}>
      <BoxUi header={<div className={`font-bold`}>Deposit</div>}>
        <div className={`flex gap-[25px]`} >
          <div className={`flex w-[460px]`} >s</div>
          <div className={`flex flex-col gap-[15px] grow`} >
            <AttentionCard items={attentionItems} />
            <div className={`flex flex-col gap-[10px]`} >
              <div className={`font-bold text-[15px]`}>Trade now</div>
              <div className={`flex gap-[10px]`}>
                <ButtonUi className={`flex gap-[4px] rounded-[10px]`} >BTC / USDT <Icons.BoxOut /></ButtonUi>
                <ButtonUi className={`flex gap-[4px] rounded-[10px]`} >USDT / BTC <Icons.BoxOut /></ButtonUi>
                <ButtonUi className={`flex gap-[4px] rounded-[10px]`} >BTC / BSC <Icons.BoxOut /></ButtonUi>
              </div>
            </div>
            <div className={`flex flex-col gap-[12px]`} >
              <div className={`font-bold text-[15px]`}>FAQ</div>
              <div className={`flex flex-col gap-[10px]`}>
                <CollapseUi className={`border-0 w-[320px]`} classes={{ button: `border-b-0 text-[13px] font-normal p-0 px-0 gap-0 h-fit rounded-[2px]`,collapse:`text-[12px] pt-[5px]` }} name="Do I have to send money to my useless friend?">
                  No, not at all.
                  Your friend will never and never give back your money
                  now that’s your choise to trust your friend or not.
                </CollapseUi>
                <CollapseUi className={`border-0 w-[320px]`} classes={{ button: `border-b-0 text-[13px] font-normal p-0 px-0 gap-0 h-fit rounded-[2px]`,collapse:`text-[12px] pt-[5px]` }} name="Do I have to send money to my useless friend?">
                  No, not at all.
                  Your friend will never and never give back your money
                  now that’s your choise to trust your friend or not.
                </CollapseUi>
                <CollapseUi className={`border-0 w-[320px]`} classes={{ button: `border-b-0 text-[13px] font-normal p-0 px-0 gap-0 h-fit rounded-[2px]`,collapse:`text-[12px] pt-[5px]` }} name="Do I have to send money to my useless friend?">
                  No, not at all.
                  Your friend will never and never give back your money
                  now that’s your choise to trust your friend or not.
                </CollapseUi>
              </div>
            </div>
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
  { title: "Number of Confiromation for Withdrawal", value: "6", unit: "Block", warning: true },
]