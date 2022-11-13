import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import BoxUi from "../../../../components/UiKit/BoxUi";
import useStyles from "./styles";

const MarketPairs = () => {
  var classes = useStyles();
  return <BoxUi className={`${classes.body}`}>dd</BoxUi>;
};

export default MarketPairs;
