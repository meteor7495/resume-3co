import LoadingUi from "components/UiKit/LoadingUi";
import routes from "configs/routes";
import { getDeposit } from "pages/Wallet/store/depositSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bigInt from "utils/bigInt";
import OverviewHeader from "../../components/OverviewHeader/OverviewHeader";
import TransactionCard from "../../components/TransactionCard/TransactionCard";

export default function Overview({ children, ...props }) {
  const [visibility, setVisibility] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDeposit());
  }, [dispatch]);
  const { deposit = {} } = useSelector((s) => s.wallet);
  const walletTotalUSD = deposit
    ? +deposit.totalFinancialWalletsAmountInUSD +
      +deposit.totalSpotWalletsAmountInUSD
    : 0;
  const walletTotalBTC = deposit
    ? +deposit.totalFinancialWalletsAmountInBTC +
      +deposit.totalSpotWalletsAmountInBTC
    : 0;
  const ChartValues = {
    Spot: walletTotalUSD
      ? +bigInt(deposit.totalSpotWalletsAmountInUSD / walletTotalUSD) * 100
      : 0,
    Financial: walletTotalUSD
      ? +bigInt(deposit.totalFinancialWalletsAmountInUSD / walletTotalUSD) * 100
      : 0,
    Margin: 0,
    "NFT Market": 0,
  };
  return (
    <div className={`flex flex-col gap-[10px]`}>
      <OverviewHeader
        ChartValues={ChartValues}
        visibility={visibility}
        data={{
          USD: walletTotalUSD,
          BTC: walletTotalBTC,
          lock: deposit?.totalSpotWalletsLockedBalanceInUSD,
        }}
        setVisibility={setVisibility}
        title="Asset"
      />
      {deposit ? (
        <div className={`flex flex-col gap-[10px]`}>
          <TransactionCard
            visibility={visibility}
            title="Spot"
            btc={deposit.totalSpotWalletsAmountInBTC}
            usd={deposit.totalSpotWalletsAmountInUSD}
            deposit={routes.wallet.spot.deposit}
            withdraw={routes.wallet.spot.withdraw}
          />
          <TransactionCard
            visibility={visibility}
            title="Financial"
            usd={deposit.totalFinancialWalletsAmountInUSD}
            btc={deposit.totalFinancialWalletsAmountInBTC}
            deposit={routes.wallet.financial}
          />
          <TransactionCard
            visibility={visibility}
            title="Margin"
            btc={0}
            usd={0}
          />
          <TransactionCard
            visibility={visibility}
            title="NFT Market"
            btc={0}
            usd={0}
          />
        </div>
      ) : (
        <LoadingUi />
      )}
    </div>
  );
}
