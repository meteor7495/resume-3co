import React, {useEffect} from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom";

export default function Layout({children, ...props}) {

  return (
    <>
      <Header {...props} />
      <Outlet/>
      <Footer/>
    </>
  );
}
