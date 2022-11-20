import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const PagesLayout = ({ children, className, ...props }) => {
  const classes = useStyles();
  return (
    <div
      {...props}
      className={`p-[20px] pb-[24px] mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full ${classes.body} ${className}`}
    >
      {children}
    </div>
  );
};

export default PagesLayout;
