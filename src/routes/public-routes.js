import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Landing from "../pages/Landing/Landing.component";
import Layout from "../components/Layout/Layout";

const ExchangePage = lazy(() => import("../pages/Exchange/Exchange.component"));

export const publicRoutes = () => {
  return (
      <>
        <Route path="/exchange" element={<ExchangePage />} />
        <Route path="/" element={<Landing />} />
      </>
  );
};
