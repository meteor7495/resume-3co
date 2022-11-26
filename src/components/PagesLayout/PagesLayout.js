import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const PagesLayout = ({ children, className, sidebar, ...props }) => {
  const classes = useStyles();
  return (
    <div
      {...props}
      className={`p-[20px] pb-[24px] mx-auto max-w-[1380px] h-full ${
        sidebar ? "flex gap-[10px] " : ""
      } ${classes.body} ${className}`}
    >
      {sidebar && <div className={`flex-[1]`}>{sidebar}</div>}
      {sidebar ? <div className={`flex-[4]`}>{children}</div> : children}
    </div>
  );
};

export default PagesLayout;
