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
      className={`p-[20px] pb-[24px] mx-auto max-w-[1380px] h-full ${classes.body} ${className}`}
    >
      {children}
    </div>
  );
};

export default PagesLayout;
