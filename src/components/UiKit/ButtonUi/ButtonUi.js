import { Button, CircularProgress } from "@mui/material";
import React from "react";
import useStyles from "./styles";

const ButtonUi = ({ children, className, loading, ...props }) => {
  const classes = useStyles();
  return (
    <Button
      sx={
        props?.hover === false && {
          "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "transparent",
          },
        }
      }
      {...props}
      className={`shadow-none ${
        loading ? "pointer-events-none" : ""
      } normal-case ${className}`}
      disableElevation
      classes={{
        ...props?.classes,
        textPrimary: `${classes.textPrimary} ${props?.classes?.textPrimary}`,
        outlinedPrimary: `${classes.textPrimary} ${props?.classes?.outlinedPrimary}`,
      }}
    >
      {loading ? (
        <CircularProgress
          className={`bg-transparent text-inherit`}
          size={25}
        />
      ) : (
        children
      )}
    </Button>
  );
};

export default ButtonUi;
