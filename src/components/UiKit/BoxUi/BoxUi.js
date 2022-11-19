import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const BoxUi = ({ children, className, ...props }) => {
  const classes = useStyles();
  return (
    <div
      {...props}
      className={`p-[10px] border border-solid rounded-[10px] ${classes.body} ${className}`}
    >
      {children}
    </div>
  );
};

export default BoxUi;
