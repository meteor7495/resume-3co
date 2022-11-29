import React, { useState } from "react";
import OverviewHeader from "../../components/OverviewHeader/OverviewHeader";
import TransactionCard from "../../components/TransactionCard/TransactionCard";

export default function Overview({ children, ...props }) {
  const [visibility, setVisibility] = useState(true);

  return (
    <div className={`flex flex-col gap-[10px]`}>
      <OverviewHeader visibility={visibility} setVisibility={setVisibility} />
      <div className={`flex flex-col gap-[10px]`}>
        <TransactionCard visibility={visibility} title="Spot" btc={0.075947} usd={1585.69} />
        <TransactionCard visibility={visibility} title="Financial" btc={0.075947} usd={1585.69} />
        <TransactionCard visibility={visibility} title="Margin" btc={0} usd={0} />
        <TransactionCard visibility={visibility} title="NFT Market" btc={0} usd={0} />
      </div>
    </div>
  );
}
