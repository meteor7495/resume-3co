import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import BoxUi from "../../../../components/UiKit/BoxUi";
import InputUi from "../../../../components/UiKit/InputUi/InputUi";
import useStyles from "./styles";

const MarketPairs = () => {
  var classes = useStyles();
  return (
    <BoxUi className={`flex flex-col gap-[10px]`}>
      <div>
        <InputUi placeholder="Search..." />
      </div>
      <div>dd</div>
      <div>ddh</div>
    </BoxUi>
  );
};

export default MarketPairs;
