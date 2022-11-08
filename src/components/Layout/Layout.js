import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Button } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout({ children, ...props }) {
  return (
    <>
      <Header {...props} />
      {children}
      <Footer/>
    </>
  );
}
