import { Button } from "@mui/material";
import React from "react";
import useStyles from "./styles";

const ButtonUi = ({ children, className, ...props }) => {
  const classes = useStyles();
  // disableElevation
  return (
    <Button
      {...props}
      className={`shadow-none normal-case ${className}`}
      disableElevation
      classes={{
        ...props?.classes,
        textPrimary: `${classes.textPrimary} ${props?.classes?.textPrimary}`,
        outlinedPrimary: `${classes.textPrimary} ${props?.classes?.outlinedPrimary}`,
        
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonUi;
