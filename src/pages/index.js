import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import AppRouter from "../routes/AppRouter";
import Themes from "../themes";
import {CssBaseline, ThemeProvider} from "@mui/material";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import Toastify from "../components/Toastify/Toastify";
import useAuth from "../hooks/useAuth";

function Index(props) {
  const {theme} = useSelector((s) => s.app);
  const {getUser, user, isLoading} = useAuth();
  useMemo(() => {
    getUser();
  }, []);

  return (
    <ThemeProvider theme={Themes[theme]}>
      <CssBaseline/>
      <Toastify/>
      <LoaderComponent/>
      <AppRouter isLoading={isLoading} user={user} {...props} />
    </ThemeProvider>
  );
}

export default Index;
