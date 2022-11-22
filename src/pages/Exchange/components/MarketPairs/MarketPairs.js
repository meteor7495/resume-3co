import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Icons from "../../../../assets/icons";
import BoxUi from "../../../../components/UiKit/BoxUi";
import InputUi from "../../../../components/UiKit/InputUi/InputUi";
import ButtonTab from "../ButtonTab";
import PairsTable from "./components/PairsTable";
import useStyles from "./styles";

const MarketPairs = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState("favorites");
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
      <div className="h-full"  >
        <PairsTable />
      </div>
    </>
  );
};

const PairsTypes = [
  { children: <Icons.Favorites />, value: "favorites" },
  { children: "BTC", value: "BTC" },
  { children: "USDT", value: "USDT" },
];

export default MarketPairs;
