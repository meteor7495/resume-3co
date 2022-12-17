import React from "react";
import { AlertTypes } from "../../constants/alertTypes.enum";
import { useDispatch } from "react-redux";
import { showAlert } from "../../store/AlertsSlice";
import { Button } from "@mui/material";
import SpinnerComp from "../../components/SpinnerComp/SpinnerComp";
import { showLoader } from "../../store/LoadingSlice";
import { ThemeTypes } from "../../constants/themeTypes.enum";
import { setTheme } from "../../store/appSlice";
import useStyles from "./Sample.style";
import { resetSettings } from "../../store/LayoutSettings";

export default function SamplePage({ children, ...props }) {
    const dispatch = useDispatch();
    const classes = useStyles();
  const notifyHandler = (alertType) => {
    dispatch(showAlert( { message: "Sample Yo", type: alertType }));
  };
  useEffect(() => {
    dispatch(resetSettings());
  }, []);
  const themeChangeHandler = (alertType) => {
    dispatch(setTheme(alertType));
  };


  const loadingPageHandler = () => {
    dispatch(
      showLoader({
        visible: true,
        text: "yo yo sample text",
      }),
    );

    setTimeout(() => {
      dispatch(
        showLoader({
          visible: false,
          text: "",
        }),
      );
    }, 2000);
  };
  return (
    <div className={classes.body}>
      <Button color="primary" variant="outlined" onClick={()=>{notifyHandler(AlertTypes.success)}}>notify success</Button>
      <Button variant="outlined"
       onClick={()=>{notifyHandler(AlertTypes.danger)}}>notify danger</Button>
      <Button variant="outlined"
       onClick={()=>{notifyHandler(AlertTypes.info)}}>notify info</Button>
      
      <div>spinner <SpinnerComp/></div>
      <div><Button variant="outlined"
       onClick={loadingPageHandler}>Load wholePage</Button></div>
      <div>
        <Button variant="outlined"
         onClick={()=>{themeChangeHandler(ThemeTypes.light)}}>light Theme</Button>
        <Button variant="outlined"
         onClick={()=>{themeChangeHandler(ThemeTypes.dark)}}>Dark Theme</Button>
       </div>
    </div>
  );
}
