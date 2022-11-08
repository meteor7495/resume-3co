import { Suspense, useMemo } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import SpinnerComp from "../components/SpinnerComp";
import useAuth from "../hooks/useAuth";
import SamplePage from "../pages/Sample/Sample.component";
import { publicRoutes } from "./public-routes";

function AppRouter(props) {
  const { getUser, user, isLoading } = useAuth();

  useMemo(() => {
    getUser();
  }, []);

  const routes = publicRoutes(isLoading, props);
  //user ? privateRoutes(isLoading,props) : publicRoutes(isLoading,props);

  return (
    <Layout>
      <Suspense fallback={<SpinnerComp/>} >
        {routes}
        </Suspense>
    </Layout>
  );
}

export default AppRouter;
