import React, { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AssetsLayout from "./components/AssetsLayout/AssetsLayout";
import routes from "../../configs/routes";
import { walletType } from "../../constants/walletType.enum copy";

export default function Wallet({ children, ...props }) {
  const OverviewPage = lazy(() =>
    import("./pages/Overview/Overview.component")
  );
  const SpotAssetsPage = lazy(() =>
    import("./pages/SpotAssets/SpotAssets.component")
  );

  const SpotDepositPage = lazy(() =>
    import("./pages/SpotDeposit/SpotDeposit.component")
  );

  const SpotWithdrawPage = lazy(() =>
    import("./pages/SpotWithdraw/SpotWithdraw.component")
  );

  const FinancialPage = lazy(() =>
    import("./pages/Financial/Financial.component")
  );

  const HistoryPage = lazy(() => import("./pages/History/History.component"));
  const pages = [
    { name: "overview", path: "", element: <OverviewPage /> },
    {
      name: "assets",
      path: routes.wallet.spot.assets,
      element: <SpotAssetsPage />,
    },
    {
      name: "deposit",
      path: routes.wallet.spot.deposit,
      element: <SpotDepositPage />,
    },
    {
      name: "withdraw",
      path: routes.wallet.spot.withdraw,
      element: <SpotWithdrawPage />,
    },
    {
      name: "financial",
      path: routes.wallet.financial,
      element: <FinancialPage />,
    },
    {
      name: "history/all",
      path: routes.wallet.history.allAssets,
      element: <HistoryPage />,
    },
    {
      name: "history/all",
      path: routes.wallet.history.deposit,
      element: <HistoryPage type={walletType.Deposit} />,
    },
    {
      name: "history/all",
      path: routes.wallet.history.withdraw,
      element: <HistoryPage type={walletType.Withdraw} />,
    },
  ];
  return (
    <Routes>
      <Route element={<AssetsLayout pages={pages} />}>
        {pages.map(({ name, ...props }) => (
          <Route key={name} {...props} />
        ))}
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
}
