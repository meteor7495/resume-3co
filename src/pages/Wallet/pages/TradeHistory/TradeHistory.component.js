import React, { useEffect, useState } from "react";
import BoxUi from "components/UiKit/BoxUi";
import useStyles from "./TradeHistory.style";
import WalletOrdersTable from "./components/WalletOrdersTable";
import { useDispatch, useSelector } from "react-redux";
import { getWalletOrderHistory } from "pages/Wallet/store/walletOrderHistorySlice";

export default function TradeHistory({ type, ...props }) {
  const dispatch = useDispatch();
  const walletOrderHistory = useSelector((s) => s.wallet.walletOrderHistory);
  const classes = useStyles();
  useEffect(() => {
    dispatch(getWalletOrderHistory());
  }, []);
  return (
    <BoxUi
      className={`flex flex-col ${classes.wrapper}`}
      header={
        <div className={`font-bold text-[15px] text-center lg:text-start `}>
          Trade History
        </div>
      }
      classes={{ body: "h-full flex flex-col gap-[10px]" }}
    >
      <WalletOrdersTable rows={walletOrderHistory} />
    </BoxUi>
  );
}
