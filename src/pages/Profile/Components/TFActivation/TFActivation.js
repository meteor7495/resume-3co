import React from "react";
import useStyles from "./TFActivation.styles";

import {useSelector} from "react-redux";

export default function YourPlatform(props) {
  const {theme} = useSelector((s) => s.app);
  const classes = useStyles();
  return (
    <></>
  );
}