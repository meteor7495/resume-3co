import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Landing from "../pages/Landing/Landing.component";
import routes from "../configs/routes";

export const privateRoutes = () => {
  const ExchangePage = lazy(() =>
    import("../pages/Exchange/Exchange.component")
  );
  const WalletPage = lazy(() => import("../pages/Wallet/Wallet.component"));

  return (
    <>
      <Route path="/" element={<Landing />} />
      <Route path={routes.exchange} element={<ExchangePage />} />
      <Route path={routes.walletPage} element={<WalletPage />} />
      <Route path="*" element={<div>404</div>} />
    </>
  );
};
