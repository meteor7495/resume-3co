import { Route } from "react-router-dom";
import Landing from "../pages/Landing/Landing.component";
import Authentication from "../pages/Authentication/Authentication.component";

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

      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Authentication page={"login"} />} />
    </>
  );
};
