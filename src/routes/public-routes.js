import { Route } from "react-router-dom";
import { lazy } from "react";
import Landing from "../pages/Landing/Landing.component";
import Authentication from "../pages/Authentication/Authentication.component";
import routes from "../configs/routes";

export const publicRoutes = (isLoading) => {
  const WalletPage = lazy(() => import("../pages/Wallet/Wallet.component"));
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
      <Route path={routes.walletPage} element={<WalletPage />} />
      <Route
        path="/two-factor-auth"
        element={<Authentication page={"twoFactorAuth"} />}
      />
      <Route
        path="/verification-code"
        element={<Authentication page={"verificationCode"} />}
      />

      <Route path="/" element={<Landing />} />
      <Route
        path="*"
        element={
          isLoading ? (
            <div className="w-full h-full flex flex-col items-center ">
              Please wait...
            </div>
          ) : (
            <Authentication page={"login"} />
          )
        }
      />
    </>
  );
};
