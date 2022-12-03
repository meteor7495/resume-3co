import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AssetsLayout from "./components/AssetsLayout/AssetsLayout";
import routes from "../../configs/routes";

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
