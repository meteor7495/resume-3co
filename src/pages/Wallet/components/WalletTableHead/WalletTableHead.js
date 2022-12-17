import {
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import useStyles from "./styles";

const WalletTableHead = ({ header }) => {
  const classes = useStyles();
  const tClasses = {
    headerCell: `border-0 z-[0] px-[6px] text-[15px] font-bold min-w-[50px] h-[48px] lg:min-w-[100px] ${classes.headerCell}`,
  };
  return (
    <TableHead>
      <TableRow>
        {header.map(({ name, className }) => (
          <TableCell
            key={name}
            className={`${tClasses.headerCell} ${className}`}
            padding="none"
            align="center"
          >
            {name && name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default WalletTableHead;
