import {TextField} from "@mui/material";
import React from "react";
import useStyles from "./styles";

const InputUi = ({children, className, inputProps, ...props}) => {
  const classes = useStyles();
  return (
    <>
      <TextField
        {...props}
        className={`w-full ${classes.body} ${className}`}
        InputProps={{
          ...inputProps,
          className: `${classes.body} ${inputProps?.className}`,
          classes: {
            notchedOutline: `rounded-[5px]`,
            input: `rounded-[5px] px-[12px] py-[8px]`,
          },
        }}
      >
        {children}
      </TextField>
    </>
  );
};

export default InputUi;
