import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Landing from "../pages/Landing/Landing.component";

export const privateRoutes = () => {

    return (
        <>
          <Route path="/" element={<Landing />} />
        </>
    );
  };
