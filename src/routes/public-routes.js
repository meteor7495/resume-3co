import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy } from "react";

const SamplePage = lazy(() => import("../pages/Sample/Sample.component"));
const ExchangePage = lazy(() => import("../pages/Exchange/Exchange.component"));

export const publicRoutes = (isLoading, props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SamplePage />} />
        <Route path="/exchange" element={<ExchangePage />} />
      </Routes>
    </BrowserRouter>
  );
};
