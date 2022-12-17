import React from "react";
import useStyles from "./DisableAccount.styles";

import {useSelector} from "react-redux";

export default function YourPlatform(props) {
  const {theme} = useSelector((s) => s.app);
  const classes = useStyles();
  return (
    <></>
  );
}