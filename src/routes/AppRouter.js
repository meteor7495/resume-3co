import { Suspense, useMemo } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import SpinnerComp from "../components/SpinnerComp/SpinnerComp";
import useAuth from "../hooks/useAuth";
import { publicRoutes } from "./public-routes";
import { privateRoutes } from "./private-routes";

function AppRouter({user,isLoading,...props}) {
 
  //const routes = publicRoutes(isLoading, props);
  const routes = user ? privateRoutes(isLoading,props) : publicRoutes(isLoading,props);

  return (
    <Layout>
      <Suspense fallback={<SpinnerComp/>} >
        {routes}
        </Suspense>
    </Layout>
  );
}

export default AppRouter;
