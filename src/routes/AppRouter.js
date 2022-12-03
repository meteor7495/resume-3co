import { Suspense, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import SpinnerComp from "../components/SpinnerComp/SpinnerComp";
import { publicRoutes } from "./public-routes";
import { privateRoutes } from "./private-routes";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetSettings } from "../store/LayoutSettings";

function AppRouter({ user, isLoading, ...props }) {
  //const routes = publicRoutes(isLoading, props);
  const [routes, setRoutes] = useState();
  useEffect(() => {
    console.log("useruseruseruser", user);
    setRoutes(
      user ? privateRoutes(isLoading, props) : publicRoutes(isLoading, props)
    );
  }, [user]);
  const dispatch = useDispatch();

  let { pathname } = useLocation();
  useEffect(() => {
    dispatch(resetSettings());
    console.log("resetSettings", pathname);
  }, [pathname]);
  return (
    <>
      <Suspense fallback={<SpinnerComp />}>
        <Routes>
          <Route element={<Layout />}>{routes}</Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default AppRouter;
