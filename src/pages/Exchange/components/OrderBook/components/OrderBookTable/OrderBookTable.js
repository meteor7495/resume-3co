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

function createData(price, amount, total) {
  return { price, amount, total };
}

const rows = [
  createData(159, 6.0, 24, 4.0),
  createData(237, 9.0, 37, 4.3),
  createData(262, 16.0, 24, 6.0),
  createData(305, 3.7, 67, 4.3),
  createData(356, 16.0, 49, 3.9),
];

const tClasses = {
  headerCell: "text-[10px]",
};

const OrderBookTable = ({ children, className }) => {
  var classes = useStyles();
  return (
    <TableContainer className={`overflow-auto h-full w-full`}>
      <ScrollbarsUi>
        <Table aria-label="simple table" size={"small"}>
          <TableHead>
            <TableRow>
              <TableCell
                className={tClasses.headerCell}
                padding="none"
                align="center"
              >
                Price (BTC)
              </TableCell>
              <TableCell
                className={tClasses.headerCell}
                padding="none"
                align="center"
              >
                Amount (ETH)
              </TableCell>
              <TableCell
                className={tClasses.headerCell}
                padding="none"
                align="center"
              >
                Total (BTC)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.price}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollbarsUi>
    </TableContainer>
  );
};

export default OrderBookTable;
