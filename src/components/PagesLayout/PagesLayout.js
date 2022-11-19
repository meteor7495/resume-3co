import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const PagesLayout = ({ children }) => {
  const classes = useStyles();
  return <div className={`p-[20px] pb-[24px] ${classes.body}`}>{children}</div>;
};

export default PagesLayout;
