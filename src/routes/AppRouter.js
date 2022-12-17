import { Suspense, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import SpinnerComp from "../components/SpinnerComp/SpinnerComp";
import { publicRoutes } from "./public-routes";
import { privateRoutes } from "./private-routes";
import { Route, Routes } from "react-router-dom";

function AppRouter({ user, isLoading, ...props }) {
  //const routes = publicRoutes(isLoading, props);
  const [routes, setRoutes] = useState();
  useEffect(() => {
    setRoutes(
      user ? privateRoutes(isLoading, props) : publicRoutes(isLoading, props)
    );
  }, [user]);
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
