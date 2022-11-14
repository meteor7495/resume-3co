import React from "react";
import Welcome from "./Components/Welcome/Welcome";
import YourPlatform from "./Components/YourPlatform/YourPlatform";
import TradeNow from "./Components/TradeNow/TradeNow";
import PopularMarketsList from "./Components/PopularMarketsList/PopularMarketsList";

export default function Landing() {
    return (
        <>
            <Welcome/>
            <TradeNow/>
            <PopularMarketsList/>
            <YourPlatform/>
        </>
    );
}
