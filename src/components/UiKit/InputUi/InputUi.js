import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const InputUi = ({ children, className, inputProps, ...props }) => {
  var classes = useStyles();
  return (
    <TextField
      {...props}
      className={`w-full [&,&fieldset]rounded-[5px] ${classes.body} ${className}`}
      inputProps={{
        ...inputProps,
        className: `px-[12px] py-[8px] ${classes.body} ${inputProps?.className}`,
      }}
    >
      {children}
    </TextField>
  );
};

export default InputUi;
