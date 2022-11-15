import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
const SamplePage = lazy(() => import('../pages/Sample/Sample.component'))

export const privateRoutes = () => {

    return (
        <>
            <Route path="/" element={<SamplePage />} />
        </>
    );
  };
