import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
const Landing = lazy(() => import('../pages/Landing/Landing.component'))
const Profile = lazy(() => import('../pages/Profile/Profile.component'))
export const privateRoutes = () => {

    return (
        <>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
        </>
    );
  };
