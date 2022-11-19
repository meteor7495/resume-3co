import { Button } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./styles";

const ButtonTab = ({
  buttons,
  selected,
  setSelected,
  className,
  classes: { button } = {},
}) => {
  const classes = useStyles();
  return (
    <div
      className={`flex gap-[5px] p-[5px] rounded-[5px] ${
        classes.PairsSelectWrapper
      }${className ? " " + className : ""}`}
    >
      {buttons.map(({ children, value, ...props }) => (
        <Button
          {...props}
          key={value}
          className={`min-w-0 p-[5px] rounded-[3px] h-[20px] text-[12px] ${
            selected === value
              ? `border-2 [&:hover]:border-2 ${classes.selected}`
              : classes.unSelected
          }${button ? " " + button : ""}`}
          variant="outlined"
          onClick={() => setSelected(value)}
        >
          {children}
        </Button>
      ))}
    </div>
  );
};

export default ButtonTab;
