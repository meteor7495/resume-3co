import { Route } from "react-router-dom";
import { lazy } from "react";
import Landing from "../pages/Landing/Landing.component";
import routes from "../configs/routes";
import Authentication from "../pages/Authentication/Authentication.component";

export const privateRoutes = () => {
  const ExchangePage = lazy(() =>
    import("../pages/Exchange/Exchange.component")
  );
  const WalletPage = lazy(() => import("../pages/Wallet/Wallet.component"));
  const Profile = lazy(() => import("../pages/Profile/Profile.component"));

  return (
    <>
      <Route path="/" element={<Landing />} />
      <Route path={routes.exchange} element={<ExchangePage />} />
      <Route path={routes.walletPage} element={<WalletPage />} />
      <Route path={routes.profile} element={<Profile />} />
      <Route path={routes.twoFactorAuth} element={<Authentication page={"twoFactorAuth"} />} />
      <Route path="*" element={<div>404</div>} />
    </>
  );
};
