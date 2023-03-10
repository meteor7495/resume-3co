import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppRouter from "../routes/AppRouter";
import Themes from "../themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import Toastify from "../components/Toastify/Toastify";
import useAuth from "../hooks/useAuth";
import { setWidth } from "../store/WidthSlice";
import { getCoins } from "store/slices/CoinsSlice";
import {setTheme} from "../store/appSlice";
import {ThemeTypes} from "../constants/themeTypes.enum";

function Index(props) {
  const { getUser, user, isLoading } = useAuth();
  const dispatch = useDispatch();
  useMemo(async() => {
    await getUser();
    const localTheme = localStorage.getItem('theme') ?? ThemeTypes.light
    dispatch(setTheme(localTheme));
  }, []);
  const { theme } = useSelector((s) => s.app);

  useEffect(() => {
    responseHandler((w) => {
      dispatch(setWidth(w));
    });
  }, []);
  useEffect(() => {
    if(user) {
      dispatch(getCoins())
    }
  }, [user]);
  return (
    <ThemeProvider theme={Themes[theme]}>
      <CssBaseline />
      <Toastify />
      <LoaderComponent />
      <AppRouter isLoading={isLoading} user={user} {...props} />
    </ThemeProvider>
  );
}

export default Index;

const responseHandler = (setWidth) => {
  let body = document.getElementsByTagName("BODY")[0];
  let width = body.offsetWidth;
  setWidth(width);

  const onResizeEvent = () => {
    const bodyElement = document.getElementsByTagName("BODY")[0];
    const newWidth = bodyElement.offsetWidth;
    if (newWidth != width) {
      width = newWidth;

      setWidth(width);
    }
  };
  if (window.addEventListener) {
    // all browsers except IE before version 9
    window.addEventListener("resize", onResizeEvent, true);
  } else {
    if (window.attachEvent) {
      // IE before version 9
      window.attachEvent("onresize", onResizeEvent);
    }
  }
};
