import { TextField } from "@mui/material";
import React from "react";
import useStyles from "./styles";

const InputUi = ({
  children,
  className,
  onEnter: onEnterProp,
  onKeyDown,
  InputProps,
  ...props
}) => {
  const classes = useStyles();
  function onEnter(e) {
    if (e.keyCode && e.keyCode === 13) {
      onEnterProp && onEnterProp();
    }
  }

  return (
    <TextField
      {...props}
      className={`w-full rounded-[5px] ${className}`}
      onKeyDown={(e) => {
        onEnterProp && onEnter(e);
        onKeyDown && onKeyDown(e);
      }}
      InputProps={{
        ...InputProps,
        className: `${classes.body} ${InputProps?.className}`,
        classes: {
          ...InputProps?.classes,
          root: `w-full ${InputProps?.classes?.root}`,
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
