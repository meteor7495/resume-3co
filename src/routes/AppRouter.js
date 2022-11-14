import {Suspense} from "react";
import Layout from "../components/Layout/Layout";
import SpinnerComp from "../components/SpinnerComp/SpinnerComp";
import {publicRoutes} from "./public-routes";
import {privateRoutes} from "./private-routes";

function AppRouter({user, isLoading, ...props}) {

    //const routes = publicRoutes(isLoading, props);
    const routes = user ? privateRoutes(isLoading, props) : publicRoutes(isLoading, props);

    return (
        <Layout>
            <Suspense fallback={<SpinnerComp/>}>
                {routes}
            </Suspense>
        </Layout>
    );
}

export default AppRouter;
