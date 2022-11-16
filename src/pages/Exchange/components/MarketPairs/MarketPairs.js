import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Icons from "../../../../assets/icons";
import BoxUi from "../../../../components/UiKit/BoxUi";
import InputUi from "../../../../components/UiKit/InputUi/InputUi";
import PairsTable from "./components/PairsTable/PairsTable";
import useStyles from "./styles";

const MarketPairs = () => {
  const classes = useStyles();
  return (
    <BoxUi className={`flex flex-col gap-[10px] h-[290px]`}>
      <div>
        <InputUi placeholder="Search..." />
      </div>
      <div>
        <PairsSelect />
      </div>
      <div className="h-full" >
        <PairsTable />
      </div>
    </BoxUi>
  );
};

const PairsSelect = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState("favorites");
  return (
    <div className={`flex gap-[5px] p-[5px] rounded-[5px] ${classes.PairsSelectWrapper}`}>
      {PairsTypes.map(({ children, value }) => (
        <Button
          key={value}
          className={`min-w-0 p-[5px] rounded-[3px] h-[20px] text-[12px] leading-[14px] ${
            selected === value
              ? `border-2 [&:hover]:border-2 ${classes.selected}`
              : classes.unSelected
          }`}
          variant="outlined"
          onClick={() => setSelected(value)}
        >
          {children}
        </Button>
      ))}
    </div>
  );
};

const PairsTypes = [
  { children: <Icons.Favorites />, value: "favorites" },
  { children: "BTC", value: "BTC" },
  { children: "USDT", value: "USDT" },
];

export default MarketPairs;
