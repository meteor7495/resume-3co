import { CircularProgress } from "@mui/material";
import React from "react";

const LoadingUi = ({ children, loadingProps, className, ...props }) => {
  return (
    <div
      {...props}
      className={`flex h-full w-full flex-col items-center justify-center ${className}`}
    >
      <CircularProgress {...loadingProps} />
    </div>
  );
};

export default LoadingUi;
