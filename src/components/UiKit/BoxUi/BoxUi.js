import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const BoxUi = ({ children, className, ...props }) => {
  var classes = useStyles();
  return (
    <div
      {...props}
      className={`p-[10px] border rounded-[10px] ${classes.body} ${className}`}
    >
      {children}
    </div>
  );
};

export default BoxUi;
