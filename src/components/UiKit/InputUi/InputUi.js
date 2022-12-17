import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const InputUi = ({ children, className, InputProps, ...props }) => {
  const classes = useStyles();
  return (
    <TextField
      {...props}
      className={`w-full rounded-[5px] ${classes.body} ${className}`}
      InputProps={{
        ...InputProps,
        className: `${classes.body} ${InputProps?.className}`,
        classes: {
          ...InputProps?.classes,
          root:`w-full ${InputProps?.classes?.root}`,
          notchedOutline: `rounded-[5px] ${classes.notchedOutline} ${InputProps?.classes?.notchedOutline}`,
          input: `rounded-[5px] px-[12px] py-[8px] ${InputProps?.classes?.input}`,
        },
      }}
    >
      {children}
    </TextField>
  );
};

export default InputUi;
