import {
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import BoxUi from "../../../../../../components/UiKit/BoxUi";
import ScrollbarsUi from "../../../../../../components/UiKit/PerfectScrollbarUi/ScrollbarsUi";
import useStyles from "./styles";
import Icons from "../../../../../../assets/icons";
import { useSelector } from "react-redux";
import OrdersTableHead from "../OrdersTableHead";

const OrdersTable = () => {
  const classes = useStyles();
  const tClasses = {
    headerCell: `border-0 z-[0] text-[10px] font-bold min-w-[100px] ${classes.headerCell}`,
    cell: "border-0 text-[10px] py-[2.5px] ",
  };
  const { width } = useSelector((s) => s.width);
  return (
    <BoxUi className={`p-[5px] lg:p-[10px] pt-[5px] h-full ${classes.body}`}>
      <TableContainer className={`overflow-auto h-full w-full`}>
        <ScrollbarsUi>
          {width > 1024 ? (
            <Table aria-label="simple table" size={"small"} stickyHeader>
              <OrdersTableHead />
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    className={classes.tableRow}
                  >
                    <TableCell className={`${tClasses.cell}`} align="center">
                      {row.time}
                    </TableCell>
                    <TableCell
                      className={`${tClasses.cell} ${classes.tableTextColor}`}
                      align="center"
                    >
                      {row.pair}
                    </TableCell>
                    <TableCell
                      className={`${tClasses.cell} ${classes.tableTextColor}`}
                      align="center"
                    >
                      {row.type}
                    </TableCell>
                    <TableCell
                      className={`${tClasses.cell} ${
                        row.buySell === "Buy" ? "text-success" : "text-error"
                      }`}
                      align="center"
                    >
                      {row.buySell}
                    </TableCell>
                    <TableCell className={tClasses.cell} align="center">
                      {row.price}
                    </TableCell>
                    <TableCell className={tClasses.cell} align="center">
                      {`${row.amount.value} ${row.amount.symbol}`}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <ResponsiveTable rows={rows} />
          )}
        </ScrollbarsUi>
      </TableContainer>
    </BoxUi>
  );
};

const ResponsiveTable = ({ rows }) => {
  const classes = useStyles();
  const cell = "border-0 text-[10px] py-[2.5px] ";

  return (
    <Table aria-label="simple table" size={"small"} stickyHeader>
      <OrdersTableHead />
      <TableBody>
        {rows.map((row, i) => (
          <>
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className={`${
                row.buySell === "Buy" ? classes.buy : classes.sell
              }`}
            >
              <TableCell className={`rounded-l-[3px] ${cell}`} align="center">
                {row.time}
              </TableCell>
              <TableCell className={`${cell}`} align="center">
                <span>{row.type}</span>/<span>{row.pair}</span>
              </TableCell>
              <TableCell className={`rounded-r-[3px] ${cell}`} align="center">
                {row.price}
              </TableCell>
            </TableRow>
            <div className={`w-full h-[10px]`}></div>
          </>
        ))}
      </TableBody>
    </Table>
  );
};

function createData(time, pair, type, buySell, price, amount) {
  return { time, pair, type, buySell, price, amount };
}

function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? `${(num / item.value).toFixed(digits).replace(rx, "$1")} ${item.symbol}`
    : "0";
}

const rows = [
  createData("1400/02/11", "ETH", "Market", "Buy", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
  createData("1400/02/11", "ETH", "Market", "Sell", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
  createData("1400/02/11", "ETH", "Market", "Buy", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
  createData("1400/02/11", "ETH", "Market", "Sell", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
  createData("1400/02/11", "ETH", "Market", "Sell", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
  createData("1400/02/11", "ETH", "Market", "Sell", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
  createData("1400/02/11", "ETH", "Market", "Buy", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
  createData("1400/02/11", "ETH", "Market", "Buy", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
  createData("1400/02/11", "ETH", "Market", "Buy", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
  createData("1400/02/11", "ETH", "Market", "Sell", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
  createData("1400/02/11", "ETH", "Market", "Buy", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
  createData("1400/02/11", "ETH", "Market", "Sell", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
  createData("1400/02/11", "ETH", "Market", "Buy", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
  createData("1400/02/11", "ETH", "Market", "Sell", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
  createData("1400/02/11", "ETH", "Market", "Buy", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
  createData("1400/02/11", "ETH", "Market", "Buy", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
  createData("1400/02/11", "ETH", "Market", "Sell", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
  createData("1400/02/11", "ETH", "Market", "Sell", 132.213, {
    value: 1.55452,
    symbol: "BTC",
  }),
];

export default OrdersTable;
