import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { selectPairs, setSelectedPair } from "pages/Exchange/store/pairsSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Icons from "../../../../assets/icons";
import BoxUi from "../../../../components/UiKit/BoxUi";
import InputUi from "../../../../components/UiKit/InputUi/InputUi";
import ButtonTab from "../ButtonTab";
import PairsTable from "./components/PairsTable";
import useStyles from "./styles";

const MarketPairs = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState("USDT");
  return (
    <>
      <div>
        <InputUi placeholder="Search..." />
      </div>
      <div>
        <ButtonTab
          buttons={PairsTypes}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className="h-full">
        <PairsTable selected={selected} />
      </div>
    </>
  );
};

const PairsTypes = [
  { children: <Icons.Favorites />, value: "Favorites" },
  // { children: "BTC", value: "BTC" },
  { children: "USDT", value: "USDT" },
];

export default MarketPairs;
