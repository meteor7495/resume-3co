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
import React from "react";
import BoxUi from "../../../../../../components/UiKit/BoxUi";
import ScrollbarsUi from "../../../../../../components/UiKit/PerfectScrollbarUi/ScrollbarsUi";
import useStyles from "./styles";

const OrdersTable = () => {
  var classes = useStyles();
  const tClasses = {
    headerCell: `border-0 z-[0] text-[10px] font-bold ${classes.headerCell}`,
    cell: "border-0 text-[10px] py-[2.5px] ",
  };
  const { pair, type, buySell } = tableSorts;
  return (
    <BoxUi className={`p-[10px] pt-[5px] h-[240px] ${classes.body}`}>
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
                  Time
                </TableCell>
                <TableCell
                  className={tClasses.headerCell}
                  padding="none"
                  align="center"
                >
                  <HeaderFilter items={pair} />
                </TableCell>
                <TableCell
                  className={tClasses.headerCell}
                  padding="none"
                  align="center"
                >
                  <HeaderFilter items={type} />
                </TableCell>
                <TableCell
                  className={tClasses.headerCell}
                  padding="none"
                  align="center"
                >
                  <HeaderFilter items={buySell} />
                </TableCell>
                <TableCell
                  className={tClasses.headerCell}
                  padding="none"
                  align="center"
                >
                  Price
                </TableCell>
                <TableCell
                  className={tClasses.headerCell}
                  padding="none"
                  align="center"
                >
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
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
        </ScrollbarsUi>
      </TableContainer>
    </BoxUi>
  );
};

const HeaderFilter = ({ value, onChange, items }) => {
  var classes = useStyles();
  const handleChange = () => {
    // onChange;
  };
  return (
    <Select
      className={`[&:before]:hidden bg-transparent [&:focus]:bg-transparent [&:hover]:bg-transparent`}
      classes={{ select: `text-[10px] font-bold p-0 ${classes.headerCell}` }}
      variant="filled"
      value={value ? value : "None"}
      onChange={handleChange}
      label="Age"
    >
      {items.map(({ value, name }) => (
        <MenuItem
          value={value}
          className={`text-[10px] font-bold ${classes.headerCell}`}
        >
          {name}
        </MenuItem>
      ))}
    </Select>
  );
};

const tableSorts = {
  pair: [
    { value: "None", name: "All Pairs" },
    { value: "CurrentPair", name: "Current Pair" },
  ],
  type: [
    { value: "None", name: "All Types" },
    { value: "Limit", name: "Limit" },
    { value: "Market", name: "Market" },
  ],
  buySell: [
    { value: "None", name: "Buy/Sell" },
    { value: "B", name: "Buy" },
    { value: "S", name: "Sell" },
  ],
};

function createData(time, pair, type, buySell, price, amount) {
  return { time, pair, type, buySell, price, amount };
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
