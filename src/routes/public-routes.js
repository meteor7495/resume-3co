import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy } from "react";

const SamplePage = lazy(() => import('../pages/Sample/Sample.component'))

export const publicRoutes = (isLoading, props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SamplePage />} />
      </Routes>
    </BrowserRouter>
  );
};

