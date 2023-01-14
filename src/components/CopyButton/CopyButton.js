import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./styles";

const CopyButton = ({ children, className, value, setOpen, ...props }) => {
  const classes = useStyles();
  const [tooltip, setTooltip] = useState(false);
  const copyHandler = () => {
    setOpen ? setOpen(true) : setTooltip(true);
    document.execCommand(value);
    navigator.clipboard.writeText(value);
  };

  return (
    <Tooltip
      onClose={() => (setOpen ? setOpen(false) : setTooltip(false))}
      open={tooltip}
      {...props}
      placement="top"
      color={"success"}
      classes={{ tooltip: classes.tooltip, arrow: classes.tooltipColor }}
      title={<span>Copied!</span>}
      leaveDelay={500}
      arrow
    >
      <div onClick={copyHandler} className={`${className}`}>
        {children}
      </div>
    </Tooltip>
  );
};

export default CopyButton;
