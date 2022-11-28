import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AssetsLayout from "./components/AssetsLayout/AssetsLayout";
import routes from "../../configs/routes";

export default function Assets({ children, ...props }) {
  const OverviewPage = lazy(() =>
    import("./pages/Overview/Overview.component")
  );

  const pages = [
    { name: "overview", path: "", element: <OverviewPage /> },
    { name: "assets", path: routes.wallet.assets, element: <OverviewPage /> },
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
