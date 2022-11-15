import React from "react";
import Welcome from "./Components/Welcome/Welcome";
import YourPlatform from "./Components/YourPlatform/YourPlatform";
import TradeNow from "./Components/TradeNow/TradeNow";
import PopularMarketsList from "./Components/PopularMarketsList/PopularMarketsList";
import useStyles from './Landing.styles'

export default function Landing() {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <Welcome/>
            <TradeNow/>
            <PopularMarketsList/>
            <YourPlatform/>
        </div>
    );
}
