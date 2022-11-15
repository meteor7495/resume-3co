import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import ScrollbarsUi from "../../../../../../components/UiKit/PerfectScrollbarUi/ScrollbarsUi";
import useStyles from "./styles";

function createData(pairs, lastPrice, change) {
  return { pairs, lastPrice, change };
}

const rows = [
  createData("ETH / BTC", 0.00020255, -2.58),
  createData("KCS / BTC", 0.00013192, 3.17),
  createData("ETH / USDT", 0.00350255, -1.58),
  createData("KCS / USDT", 0.00013192, 7.16),
  createData("XRP / USDT", 0.00002996, -1.31),
  createData("VET / USDT", 0.00000103, 8.63),
  createData("ETH / BTC", 0.00020255, -2.58),
  createData("KCS / BTC", 0.00013192, 3.17),
  createData("ETH / USDT", 0.00350255, -1.58),
  createData("KCS / USDT", 0.00013192, 7.16),
  createData("XRP / USDT", 0.00002996, -1.31),
  createData("VET / USDT", 0.00000103, 8.63),
  createData("ETH / BTC", 0.00020255, -2.58),
  createData("KCS / BTC", 0.00013192, 3.17),
  createData("ETH / USDT", 0.00350255, -1.58),
  createData("KCS / USDT", 0.00013192, 7.16),
  createData("XRP / USDT", 0.00002996, -1.31),
  createData("VET / USDT", 0.00000103, 8.63),
  createData("ETH / BTC", 0.00020255, -2.58),
  createData("KCS / BTC", 0.00013192, 3.17),
  createData("ETH / USDT", 0.00350255, -1.58),
  createData("KCS / USDT", 0.00013192, 7.16),
  createData("XRP / USDT", 0.00002996, -1.31),
  createData("VET / USDT", 0.00000103, 8.63),
];

const PairsTable = ({ children, className, priceType }) => {
  var classes = useStyles();
  const tClasses = {
    headerCell: `z-[0] text-[12px]${
      priceType === "sell" ? " bg-[#fdedec]" : ""
    }`,
    cell: "border-0 text-[9px] py-[2.5px]",
  };
  return (
    <TableContainer className={`overflow-auto h-full w-full`}>
      <ScrollbarsUi>
        <Table aria-label="simple table" size={"small"} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                className={tClasses.headerCell}
                padding="none"
                align="center"
              >
                Pairs
              </TableCell>
              <TableCell
                className={tClasses.headerCell}
                padding="none"
                align="center"
              >
                Last Price
              </TableCell>
              <TableCell
                className={tClasses.headerCell}
                padding="none"
                align="center"
              >
                Change
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  className={`${tClasses.cell}${
                    priceType === "buy" ? " text-success" : " text-error"
                  }`}
                  align="center"
                >
                  {row.pairs}
                </TableCell>
                <TableCell className={tClasses.cell} align="center">
                  {row.lastPrice}
                </TableCell>
                <TableCell className={tClasses.cell} align="center">
                  {row.change}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollbarsUi>
    </TableContainer>
  );
};

export default PairsTable;
