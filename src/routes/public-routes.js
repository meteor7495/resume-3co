import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Landing from "../pages/Landing/Landing.component";
import Authentication from "../pages/Authentication/Authentication.component";

const ExchangePage = lazy(() => import("../pages/Exchange/Exchange.component"));

export const publicRoutes = () => {
  return (
      <>
        <Route path="/login" element={<Authentication page={'login'}/>} />
        <Route path="/register" element={<Authentication page={'register'}/>} />
        <Route path="/reset-password" element={<Authentication page={'resetPassword'}/>} />
        <Route path="/choose-password" element={<Authentication page={'choosePassword'}/>} />
        <Route path="/two-factor-auth" element={<Authentication page={'twoFactorAuth'}/>} />
        <Route path="/verification-code" element={<Authentication page={'verificationCode'}/>} />
        <Route path="/exchange" element={<ExchangePage />} />
        <Route path="/" element={<Landing />} />
      </>
  );
};
