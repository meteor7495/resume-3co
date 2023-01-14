import {
  MenuItem,
  Select,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import useStyles from "./styles";
import Icons from "../../../../../../assets/icons";
import { useSelector } from "react-redux";

const WalletOrdersTableHead = ({ filterValue, items }) => {
  const [filters, setFilters] = useState({});

  const classes = useStyles();
  const { width } = useSelector((s) => s.width);

  const tClasses = {
    headerCell: `border-0 z-[0] text-[15px] font-bold min-w-[50px] lg:min-w-[100px] ${classes.headerCell}`,
  };
  const header = width > 1024 ? headerItems : responsiveHeaderItems;
  return (
    <TableHead>
      <TableRow>
        {header.map(({ name, filter }) => (
          <TableCell
            key={name}
            className={tClasses.headerCell}
            padding="none"
            align="center"
          >
            {name && name}
            {filter && (
              <HeaderFilter
                onChange={setFilters}
                value={filters[filter.name]}
                items={filter.items}
              />
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
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
      classes={{ select: `text-[15px] font-bold p-0 ${classes.headerCell}` }}
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
          className={`text-[15px] font-bold ${classes.headerCell}`}
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

const responsiveHeaderItems = [
  { name: "Time" },
  { name: "Pair/Type" },
  { name: "Price/Amount" },
];
const headerItems = [
  { name: "Time" },
  { name: "All Pairs" },
  { name: "All Types" },
  { name: "Buy/Sell" },
  // { filter: { name: "pair", items: tableSorts.pair } },
  // { filter: { name: "type", items: tableSorts.type } },
  // { filter: { name: "buySell", items: tableSorts.buySell } },
  { name: "Price" },
  { name: "Amount" },
];
export default WalletOrdersTableHead;
