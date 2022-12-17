import React from "react";
import useStyles from "./styles";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";

const QRCodeUi = ({
  value,
  title,
  style,
  fgColor: propsFgColor,
  size,
  ...props
}) => {
  const classes = useStyles();
  const { theme } = useSelector((s) => s.app);
  const bgColor =
    theme === "light" ? "rgba(242, 242, 247)" : "rgba(242, 242, 247, 0.07)";
  const fgColor = theme === "light" ? "#000" : "#007BFF";
  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: 8,
        borderRadius: 5,
        height: 113,
        width: 113,
        ...style,
      }}
    >
      <QRCode
        size={size ? size : 103}
        value={value}
        title={title}
        bgColor={"transparent"}
        fgColor={propsFgColor ? propsFgColor : fgColor}
      />
    </div>
  );
};

export default QRCodeUi;
