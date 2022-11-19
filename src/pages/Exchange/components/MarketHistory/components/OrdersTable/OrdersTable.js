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

const OrdersTable = () => {
  const classes = useStyles();
  const tClasses = {
    headerCell: `border-0 z-[0] text-[10px] font-bold min-w-[100px] ${classes.headerCell}`,
    cell: "border-0 text-[10px] py-[2.5px] ",
  };
  const { pair, type, buySell } = tableSorts;
  const [filters, setFilters] = useState({});
  return (
    <BoxUi className={`p-[10px] pt-[5px] h-full ${classes.body}`}>
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
                  <HeaderFilter
                    onChange={setFilters}
                    value={filters.pair}
                    items={pair}
                  />
                </TableCell>
                <TableCell
                  className={tClasses.headerCell}
                  padding="none"
                  align="center"
                >
                  <HeaderFilter
                    onChange={setFilters}
                    value={filters.type}
                    items={type}
                  />
                </TableCell>
                <TableCell
                  className={tClasses.headerCell}
                  padding="none"
                  align="center"
                >
                  <HeaderFilter
                    onChange={setFilters}
                    value={filters.buySell}
                    items={buySell}
                  />
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
  const classes = useStyles();
  const handleChange = (e) => {
    onChange((s) => ({ ...s, [items.name]: e.target.value }));
  };
  return (
    <Select
      className={`[&:before]:hidden [&:after]:hidden bg-transparent [&:hover]:bg-transparent [&.Mui-focused]:bg-transparent [&>div:focus]:bg-transparent ${classes.select}`}
      classes={{ select: `text-[10px] font-bold p-0 ${classes.headerCell}` }}
      variant="filled"
      value={value ? value : "None"}
      onChange={handleChange}
      label="Age"
      IconComponent={Icons.Vector}
    >
      {items.items.map(({ value, name }) => (
        <MenuItem
          value={value}
          key={name}
          className={`text-[10px] font-bold ${classes.headerCell}`}
        >
          {name}
        </MenuItem>
      ))}
    </Select>
  );
};

const tableSorts = {
  pair: {
    name: "pair",
    items: [
      { value: "None", name: "All Pairs" },
      { value: "CurrentPair", name: "Current Pair" },
    ],
  },
  type: {
    name: "type",
    items: [
      { value: "None", name: "All Types" },
      { value: "Limit", name: "Limit" },
      { value: "Market", name: "Market" },
    ],
  },
  buySell: {
    name: "buySell",
    items: [
      { value: "None", name: "Buy/Sell" },
      { value: "B", name: "Buy" },
      { value: "S", name: "Sell" },
    ],
  },
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
