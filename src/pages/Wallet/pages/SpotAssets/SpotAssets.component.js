import React, { useEffect, useState } from "react";
import useStyles from "./SpotAssets.style";

export default function SpotAssets({ children, ...props }) {
  const classes = useStyles();
  return (
    <div>
      <div className={"text-base"}>www</div>
      <div className={`text-[20px]`}>www</div>
    </div>
  );
}
