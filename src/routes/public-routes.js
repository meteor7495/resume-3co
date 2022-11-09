import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Landing from "../pages/Landing/Landing.component";

const ExchangePage = lazy(() => import("../pages/Exchange/Exchange.component"));

export const publicRoutes = (isLoading, props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/exchange" element={<ExchangePage />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};
