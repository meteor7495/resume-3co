import React from "react";
import useStyles from "./styles";

const PagesLayout = ({ children, className, sidebar, ...props }) => {
  const classes = useStyles();
  return (
    <div {...props} className={`${classes.body} ${className}`}>
      <div
        className={`p-[15px] lg:p-[20px] pb-[24px] mx-auto container h-full ${
          sidebar ? "flex gap-[10px] " : ""
        }`}
      >
        {sidebar && <div className={`hidden lg:block flex-[1]`}>{sidebar}</div>}
        {sidebar ? <div className={`flex-[4]`}>{children}</div> : children}
      </div>
    </div>
  );
};

export default PagesLayout;
