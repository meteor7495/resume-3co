import {Suspense} from "react";
import Layout from "../components/Layout/Layout";
import SpinnerComp from "../components/SpinnerComp/SpinnerComp";
import {publicRoutes} from "./public-routes";
import {privateRoutes} from "./private-routes";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function AppRouter({user, isLoading, ...props}) {

    //const routes = publicRoutes(isLoading, props);
    const routes = user ? privateRoutes(isLoading, props) : publicRoutes(isLoading, props);

    return (
        <>
            <Suspense fallback={<SpinnerComp/>}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout/>}>
                            {routes}
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
}

export default AppRouter;
