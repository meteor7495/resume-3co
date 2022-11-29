import React from "react";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import useStyles from "./SpotAssets.style";

export default function SpotAssets({ children, ...props }) {
  const classes = useStyles();
  return (
    <div className={`flex flex-col gap-[10px]`}>
      <TransactionCard title={"Spot"} btc={0.000345345} usd={12.23} />
      
    </div>
  );
}
