import React from "react";
import useStyles from "./styles";
import { Scrollbars } from "react-custom-scrollbars";

export default function ScrollbarsUi(props) {
  const classes = useStyles();
  return (
    <Scrollbars
      {...props}
      className={[classes.wrapper, props.className].join(" ")}
    >
      {props.children}
    </Scrollbars>
  );
}
