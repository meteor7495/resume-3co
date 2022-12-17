import React from "react";
import useStyles from "./styles";

const BoxUi = ({
  children,
  className,
  header,
  classes: { header: headerClass, body } = {},
  ...props
}) => {
  const classes = useStyles();
  return (
    <div
      {...props}
      className={`${!header && "p-[10px]"} border border-solid rounded-[10px] ${
        classes.body
      } ${className}`}
    >
      {header && (
        <div
          className={`py-[10px] px-[20px] border-0 border-b border-solid ${classes.tabelHeader} ${headerClass}`}
        >
          {header}
        </div>
      )}
      {header ? <div className={`p-[15px] ${body}`}>{children}</div> : children}
    </div>
  );
};

export default BoxUi;
