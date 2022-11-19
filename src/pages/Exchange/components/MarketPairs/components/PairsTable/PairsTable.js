import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Icons from "../../../../../../assets/icons";
import ScrollbarsUi from "../../../../../../components/UiKit/PerfectScrollbarUi/ScrollbarsUi";
import useStyles from "./styles";

function createData(pairs, lastPrice, change, isFavorite) {
  return { pairs, lastPrice, change, isFavorite };
}

const PairsTable = ({ children, className, priceType }) => {
  const classes = useStyles();
  const { selectedCoin: { baseTicker, pairTicker } = {} } = useSelector(
    (state) => state.app
  );

  const [rows, setRows] = useState([
    createData("ETH / BTC", 0.00020255, -2.58, true),
    createData("KCS / BTC", 0.00013192, 3.17, false),
    createData("BTC / USDT", 0.00350255, -1.58, true),
    createData("KCS / USDT", 0.00013192, 7.16, false),
    createData("XRP / USDT", 0.00002996, -1.31, true),
    createData("VET / USDT", 0.00000103, 8.63, false),
    createData("ETH / BTC", 0.00020255, -2.58, true),
    createData("KCS / BTC", 0.00013192, 3.17, true),
    createData("ETH / USDT", 0.00350255, -1.58, false),
    createData("KCS / USDT", 0.00013192, 7.16, false),
    createData("XRP / USDT", 0.00002996, -1.31, false),
    createData("VET / USDT", 0.00000103, 8.63, false),
    createData("ETH / BTC", 0.00020255, -2.58, true),
    createData("KCS / BTC", 0.00013192, 3.17, false),
    createData("ETH / USDT", 0.00350255, -1.58, false),
    createData("KCS / USDT", 0.00013192, 7.16, true),
    createData("XRP / USDT", 0.00002996, -1.31, true),
    createData("VET / USDT", 0.00000103, 8.63, true),
    createData("ETH / BTC", 0.00020255, -2.58, false),
    createData("KCS / BTC", 0.00013192, 3.17, true),
    createData("ETH / USDT", 0.00350255, -1.58, true),
    createData("KCS / USDT", 0.00013192, 7.16, true),
    createData("XRP / USDT", 0.00002996, -1.31, true),
    createData("VET / USDT", 0.00000103, 8.63, true),
  ]);

  const FavoritesHandler = (index) => {
    rows[index].isFavorite = !rows[index].isFavorite;
    setRows((s) => {
      const old = [...s];
      old[index].isFavorite = !old[index].isFavorite;
      return old;
    });
  };

  const tClasses = {
    headerCell: ` text-[12px] ${classes.headerCell}`,
    cell: `border-0 text-[10px] py-[4px] px-[5px] cursor-pointer`,
  };
  const numberHandler = (n) =>
    new Intl.NumberFormat("en-US", {
      signDisplay: "exceptZero",
    }).format(n);
  return (
    <TableContainer className={`overflow-auto h-full w-full`}>
      <ScrollbarsUi>
        <Table aria-label="simple table" size={"small"} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                className={tClasses.headerCell}
                padding="none"
                align="left"
              >
                <span>Pairs</span>
              </TableCell>
              <TableCell
                className={tClasses.headerCell}
                padding="none"
                align="center"
              >
                <span>Last Price</span>
              </TableCell>
              <TableCell
                className={tClasses.headerCell}
                padding="none"
                align="center"
              >
                <span>Change</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ isFavorite, pairs, lastPrice, change }, i) => {
              const activeClass =
                `${baseTicker} / ${pairTicker}` === pairs ? classes.active : "";

              return (
                <React.Fragment key={i}>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    className={`rounded-[3px] relative ${classes.tableRow}`}
                  >
                    <TableCell
                      className={`rounded-l-[3px] ${activeClass} ${tClasses.cell} flex gap-[5px] font-bold`}
                      align="left"
                    >
                      <span onClick={() => FavoritesHandler(i)}>
                        <Icons.Favorites
                          className={`${classes.favorite} ${
                            isFavorite ? "" : classes.unFavorite
                          }`}
                        />
                      </span>
                      <span>{pairs}</span>
                    </TableCell>
                    <TableCell
                      className={`${activeClass} ${tClasses.cell}`}
                      align="center"
                    >
                      {lastPrice}
                    </TableCell>
                    <TableCell
                      className={`rounded-r-[3px] ${activeClass} ${
                        tClasses.cell
                      } ${
                        change >= 0
                          ? change === 0
                            ? ""
                            : "text-success"
                          : "text-error"
                      }`}
                      align="center"
                    >
                      {numberHandler(change)} %
                    </TableCell>
                    {/* <div className={`absolute w-full flex items-center conta h-full left-0`} >
                    <div className={`w-full h-[70%] rounded-[3px] ${activeClass}`}></div>
                  </div> */}
                  </TableRow>
                  <div className={`w-full h-[10px]`}></div>
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </ScrollbarsUi>
    </TableContainer>
  );
};

export default PairsTable;
