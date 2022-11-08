import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter , withRouter, Routes } from "react-router-dom";
import AppRouter from "../routes/AppRouter";
import { setDir } from "../store/dirSlice";
import Themes from "../themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import Toastify from "../components/Toastify/Toastify";

function Index(props) {
  const dispatch = useDispatch();
  const { theme } = useSelector((s) => s.app);
  const { t } = useTranslation();
  const isRtl = t("dir");

  useEffect(() => {
    const body = document.querySelector("body");
    const dirAttr = body.getAttribute("dir");
    if (dirAttr !== isRtl) {
      body.setAttribute("dir", isRtl);
    }
    dispatch(setDir({ dir: isRtl }));
  }, [isRtl, dispatch]);

  return (
    <ThemeProvider theme={Themes[theme]}>
      <CssBaseline />
      <Toastify />
      <LoaderComponent />
      
          <AppRouter {...props} />
     
    </ThemeProvider>
  );
}

export default Index;
