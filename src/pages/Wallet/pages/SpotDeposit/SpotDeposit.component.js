import React, { useState } from "react";
import BoxUi from "../../../../components/UiKit/BoxUi";
import WalletRecord from "../../components/WalletRecord/WalletRecord";

export default function SpotDeposit({ children, ...props }) {
  const [visibility, setVisibility] = useState(true);

  return (
    <div className={`flex flex-col gap-[10px]`}>
      <BoxUi header={<div className={`font-bold`}>Deposit</div>}>
        <div></div>
      </BoxUi>
      <WalletRecord type="Deposit" />
    </div>
  );
}
