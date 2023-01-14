import React, { useEffect } from "react";
import Welcome from "./Components/Welcome/Welcome";
import YourPlatform from "./Components/YourPlatform/YourPlatform";
import TradeNow from "./Components/TradeNow/TradeNow";
import PopularMarketsList from "./Components/PopularMarketsList/PopularMarketsList";
import useStyles from "./Landing.styles";
import { useDispatch } from "react-redux";
import { resetSettings } from "../../store/LayoutSettings";
import MobileApp from "./Components/MobileApp/MobileApp";

export default function Landing() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetSettings());
  }, []);
  return (
    <div className={classes.body}>
      <Welcome />
      <TradeNow />
      <PopularMarketsList />
      <YourPlatform />
      <MobileApp />
    </div>
  );
}
