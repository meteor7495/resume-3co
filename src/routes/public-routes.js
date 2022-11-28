import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Landing from "../pages/Landing/Landing.component";
import Authentication from "../pages/Authentication/Authentication.component";
import routes from "../configs/routes";

const ExchangePage = lazy(() => import("../pages/Exchange/Exchange.component"));
const WalletPage = lazy(() => import("../pages/Wallet/Wallet.component"));

export const publicRoutes = () => {
  return (
    <>
      <Route path="/login" element={<Authentication page={"login"} />} />
      <Route path="/register" element={<Authentication page={"register"} />} />
      <Route
        path="/reset-password"
        element={<Authentication page={"resetPassword"} />}
      />
      <Route
        path="/choose-password"
        element={<Authentication page={"choosePassword"} />}
      />
      <Route
        path="/two-factor-auth"
        element={<Authentication page={"twoFactorAuth"} />}
      />
      <Route
        path="/verification-code"
        element={<Authentication page={"verificationCode"} />}
      />
      <Route path={routes.exchange} element={<ExchangePage />} />
      <Route path={routes.walletPage} element={<WalletPage />} />
      <Route path="/" element={<Landing />} />
    </>
  );
};
