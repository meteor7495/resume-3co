import React, { lazy, useEffect, useState } from "react";
import useStyles from "./Assets.style";
import PagesLayout from "../../components/PagesLayout";
import BoxUi from "../../components/UiKit/BoxUi";
import CollapseUi from "../../components/UiKit/CollapseUi/CollapseUi";
import { useSelector } from "react-redux";
import ButtonUi from "../../components/UiKit/ButtonUi";
import { Route, Routes } from "react-router-dom";
import AssetsLayout from "./pages/AssetsLayout/AssetsLayout.component";
import routes from "../../configs/routes";

export default function Assets({ children, ...props }) {
  const classes = useStyles();
  const OverviewPage = lazy(() =>
    import("./pages/OverviewPage/OverviewPage.component")
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
