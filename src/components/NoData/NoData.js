import React from "react";
import { ReactComponent as NothingHere } from "assets/svg/NothingHere.svg";
import useStyles from "./styles";

const NoData = ({ visible, className }) => {
  const classes = useStyles();

  return (
    visible && (
      <div
        className={`h-full w-full flex flex-col inset-y-0  absolute items-center justify-center gap-[5px] ${classes.tableTextColor}`}
      >
        <div>No Data!</div>
        <NothingHere className={className} />
      </div>
    )
  );
};

export default NoData;
