import React, { useEffect, useState } from "react";
import useStyles from "./OverviewPage.style";

export default function Assets({ children, ...props }) {
  const classes = useStyles();
  return (
    <div>
      <div className={"text-base"}>www</div>
      <div className={`text-[20px]`}>www</div>
    </div>
  );
}
