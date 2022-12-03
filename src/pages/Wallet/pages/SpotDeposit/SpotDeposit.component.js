import React, { useState } from "react";
import BoxUi from "../../../../components/UiKit/BoxUi";
import DepositRecord from "./components/DepositRecord/DepositRecord";

export default function SpotDeposit({ children, ...props }) {
  const [visibility, setVisibility] = useState(true);

  return (
    <div className={`flex flex-col gap-[10px]`}>
      <BoxUi header={<div className={`font-bold`}>Deposit</div>}>
        <div></div>
      </BoxUi>
      <DepositRecord />
    </div>
  );
}
