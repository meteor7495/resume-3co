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
import NoData from "components/NoData/NoData";
import { useSelector } from "react-redux";
import { selectPairById } from "pages/Exchange/store/pairsSlice";

function createData(price, amount, total) {
  return { price, amount, total };
}

const rows = [];
// const rows = [
//   createData(15915.15, 666.66, 6624, 466.6),
//   createData(23723.23, 999.99, 9937, 499.93),
//   createData(26226.26, 161616.1616, 161624, 61616.16),
//   createData(30530.3, 333.337, 3367, 433.33),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
//   createData(35635.35, 161616.1616, 161649, 31616.169),
// ];

const OrderBookTable = ({ children, className, priceType }) => {
  const selectedPair = useSelector((s) =>
    selectPairById(s, s.exchange.pairs.selectedPair)
  );
  const {
    pairCurrency: { ticker: pairTicker } = {},
    baseCurrency: { ticker: baseTicker } = {},
  } = selectedPair ? selectedPair : {};
  const classes = useStyles();
  const tClasses = {
    headerCell: `border-0 z-[0] text-[10px] ${
      priceType === "sell" ? classes.sellHeader : classes.buyHeader
    }`,
    cell: "border-0 text-[9px] px-[12px] py-[2.5px]",
  };
  return (
    <div className="flex flex-col h-full relative">
      <TableContainer className={`overflow-auto h-full w-full`}>
        <ScrollbarsUi>
          <Table aria-label="simple table" size={"small"} stickyHeader>
            <TableHead>
              <TableRow className={classes.headerWra}>
                <TableCell
                  className={tClasses.headerCell}
                  padding="none"
                  align="center"
                >
                  <span>Price ({pairTicker})</span>
                </TableCell>
                <TableCell
                  className={tClasses.headerCell}
                  padding="none"
                  align="center"
                >
                  <span>Amount ({baseTicker})</span>
                </TableCell>
                <TableCell
                  className={tClasses.headerCell}
                  padding="none"
                  align="center"
                >
                  <span>Total ({pairTicker})</span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.length > 0 &&
                rows.map((row, i) => (
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
                      {row.price}
                    </TableCell>
                    <TableCell className={tClasses.cell} align="center">
                      {row.amount}
                    </TableCell>
                    <TableCell className={tClasses.cell} align="center">
                      {row.total}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </ScrollbarsUi>
      </TableContainer>
      <NoData visible={!rows?.length > 0} className={"w-[130px] h-[110px]"} />
    </div>
  );
};

export default OrderBookTable;
