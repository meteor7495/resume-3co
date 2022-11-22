import { Button, Collapse, Container } from "@mui/material";
import React, { useState } from "react";
import Icons from "../../../assets/icons";
import BoxUi from "../BoxUi";
import useStyles from "./styles";

const CollapseUi = ({
  children,
  name,
  className,
  classes: { button, collapse } = {},
  ...props
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState();
  return (
    <BoxUi className={`p-[0] flex flex-col rounded-[15px] ${className}`}>
      <Button
        className={`h-full border-b border-solid rounded-[15px] flex gap-[10px] h-[45px] normal-case text-[15px] ${classes.button} ${button}`}
        onClick={() => setOpen((o) => !o)}
      >
        <div>{name}</div>
        <div
          className={`rounded-[3px] flex items-center justify-center w-[25px] h-[25px] ${
            open ? "rotate-180" : ""
          } ${classes.vector}`}
        >
          <Icons.Vector className={`w-[11px] h-[7px]`} />
        </div>
      </Button>
      <Collapse className={collapse} in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </BoxUi>
  );
};

export default CollapseUi;
