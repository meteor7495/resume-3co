import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
const SamplePage = lazy(() => import('../pages/Sample/Sample.component'))

export const privateRoutes = (isLoading) => {

    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SamplePage />} />
      </Routes>
    </BrowserRouter>
    );
  };
