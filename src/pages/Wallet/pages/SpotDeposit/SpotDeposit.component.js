import { Refresh } from "@mui/icons-material";
import React, { useState } from "react";
import BoxUi from "../../../../components/UiKit/BoxUi";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import SearchUi from "../../../../components/UiKit/SearchUi/SearchUi";
import OverviewHeader from "../../components/OverviewHeader/OverviewHeader";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import DepositRecord from "./components/DepositRecord/DepositRecord";

export default function SpotDeposit({ children, ...props }) {
  const [visibility, setVisibility] = useState(true);

  return (
    <div className={`flex flex-col gap-[10px]`}>
      <BoxUi header={<div className={`font-bold`}>Deposit</div>}>
        <div>
        </div>
      </BoxUi>
      <DepositRecord />
    </div>
  );
}
