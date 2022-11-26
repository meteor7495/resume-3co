import {
  Button,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React, { useRef, useState } from "react";
import BoxUi from "../../../../../../components/UiKit/BoxUi";
import ScrollbarsUi from "../../../../../../components/UiKit/PerfectScrollbarUi/ScrollbarsUi";
import useStyles from "./styles";
import Icons from "../../../../../../assets/icons";
import { useSelector } from "react-redux";
import OrdersTableHead from "../OrdersTableHead";
import useDate from "../../../../../../hooks/useDate";

const OrdersTable = () => {
  const classes = useStyles();
  const tClasses = {
    headerCell: `border-0 z-[0] text-[10px] font-bold min-w-[100px] ${classes.headerCell}`,
    cell: "border-0 text-[10px] py-[2.5px] ",
  };
  const getDate = useDate();
  const { width } = useSelector((s) => s.width);
  return (
    <BoxUi className={`p-[5px] lg:p-[10px] pt-[5px] h-full ${classes.body}`}>
      <TableContainer className={`overflow-auto h-full w-full`}>
        <ScrollbarsUi>
          <Table aria-label="simple table" size={"small"} stickyHeader>
            <OrdersTableHead />
            {width > 1024 ? (
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    className={classes.tableRow}
                  >
                    <TableCell className={`${tClasses.cell}`} align="center">
                      {getDate(row.time).format("MM/DD - HH:mm:ss")}
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
                      {`${row.amount} ${row.pair}`}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <ResponsiveTable rows={rows} />
            )}
          </Table>
        </ScrollbarsUi>
      </TableContainer>
    </BoxUi>
  );
};

const ResponsiveTable = ({ rows }) => {
  const classes = useStyles();
  const cell = "border-0 text-[10px] py-[2.5px] px-0";
  const getDate = useDate();
  return (
    <TableBody>
      {rows.map((row, i) => {
        let time;
        const today = getDate(new Date()).format("YYYY-MM-DD");
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        yesterday = getDate(yesterday).format("YYYY-MM-DD");
        switch (getDate(row.time).format("YYYY-MM-DD")) {
          case today:
            time = getDate(row.time).format("HH:mm:ss");
            break;
          case yesterday:
            time = "Yesterday";
            break;
          default:
            time = getDate(row.time).format("MM/DD");
            break;
        }
        return (
          <React.Fragment key={i}>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className={`${
                row.buySell === "Buy" ? classes.buy : classes.sell
              }`}
            >
              <TableCell className={`rounded-l-[3px] ${cell}`} align="center">
                {time}
              </TableCell>
              <TableCell
                className={`${cell} ${classes.responsivPair}`}
                align="center"
              >
                <span className="font-bold">{row.pair}</span> /{" "}
                <span>{row.type}</span>
              </TableCell>
              <TableCell className={`rounded-r-[3px] ${cell}`} align="center">
                <PriceTooltip price={row.price} amount={row.amount} i={i} />
              </TableCell>
            </TableRow>
            <div className={`w-full h-[10px]`}></div>
          </React.Fragment>
        );
      })}
    </TableBody>
  );
};

function PriceTooltip({ price, amount, i }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <div aria-describedby={id} variant="contained" onClick={handleClick}>
        {nFormatter(price, 2)} $ / {nFormatter(amount, 2)}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className={`p-[9px] text-[10px] font-bold`}>
          {price} $ / {amount}
        </div>
      </Popover>
    </div>
  );
}

function createData(time, pair, type, buySell, price, amount) {
  return { time, pair, type, buySell, price, amount };
}

function nFormatter(num, digits) {
  const lookup = [
    { value: 1e-9, symbol: "e-9" },
    { value: 1e-7, symbol: "e-7" },
    { value: 1e-6, symbol: "e-6" },
    { value: 1e-3, symbol: "e-3" },
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
    ? `${(num / item.value).toFixed(digits).replace(rx, "$1")}${item.symbol}`
    : "0";
}

const rows = [
  createData(
    "2022-11-23 15:44:00",
    "ETH",
    "Market",
    "Buy",
    636213.43,
    0.0000136237
  ),
  createData(
    "2022-11-23 11:03:1",
    "ETH",
    "Market",
    "Sell",
    636213.43,
    0.0000136237
  ),
  createData(
    "2022-11-22 22:11:2",
    "ETH",
    "Market",
    "Buy",
    636213.43,
    0.0000136237
  ),
  createData(
    "2022-12-21 15:44:00",
    "ETH",
    "Market",
    "Sell",
    636213.43,
    0.0000136237
  ),
  createData(
    "2022-12-21 15:44:00",
    "ETH",
    "Market",
    "Sell",
    636213.43,
    0.0000136237
  ),
  createData(
    "2022-12-21 15:44:00",
    "ETH",
    "Market",
    "Sell",
    636213.43,
    0.0000136237
  ),
  createData(
    "2022-12-21 15:44:00",
    "ETH",
    "Market",
    "Buy",
    636213.43,
    0.0000136237
  ),
  createData("2022-12-21 15:44:00", "ETH", "Market", "Buy", 636213.43, 136237),
  createData("2022-12-21 15:44:00", "ETH", "Market", "Buy", 636213.43, 136237),
  createData("2022-12-21 15:44:00", "ETH", "Market", "Sell", 636213.43, 136237),
  createData("2022-12-21 15:44:00", "ETH", "Market", "Buy", 636213.43, 136237),
  createData("2022-12-21 15:44:00", "ETH", "Market", "Sell", 636213.43, 136237),
  createData("2022-12-21 15:44:00", "ETH", "Market", "Buy", 636213.43, 136237),
  createData("2022-12-21 15:44:00", "ETH", "Market", "Sell", 636213.43, 136237),
  createData("2022-12-21 15:44:00", "ETH", "Market", "Buy", 636213.43, 136237),
  createData("2022-12-21 15:44:00", "ETH", "Market", "Buy", 636213.43, 136237),
  createData("2022-12-21 15:44:00", "ETH", "Market", "Sell", 636213.43, 136237),
  createData("2022-12-21 15:44:00", "ETH", "Market", "Sell", 636213.43, 136237),
];

export default OrdersTable;
