import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icons from "../../../../../../assets/icons";
import ScrollbarsUi from "../../../../../../components/UiKit/PerfectScrollbarUi/ScrollbarsUi";
import useStyles from "./styles";
import { selectPairs, setSelectedPair } from "pages/Exchange/store/pairsSlice";
import storage from "utils/storage";
import NoData from "components/NoData/NoData";
import { selectOnlinePairs } from "pages/Exchange/store/onlinePairsSlice";

const PairsTable = ({ selected }) => {
  const onlinePairs = useSelector(selectOnlinePairs);
  // const Pairs = useSelector(selectPairs);
  const { selectedPair } = useSelector((s) => s.exchange.pairs);
  const [favorites, setFavorites] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    switch (selected) {
      case "Favorites":
        setData(onlinePairs.filter(({ _id }) => favorites.includes(_id)));
        break;
      default:
        setData(onlinePairs);
        break;
    }
  }, [selected, onlinePairs, favorites]);
  useEffect(() => {
    const favorites = storage.getItem("favorites");
    setFavorites(favorites ? favorites : []);
  }, []);
  const dispatch = useDispatch();
  const classes = useStyles();

  const tClasses = {
    headerCell: ` text-[12px] ${classes.headerCell}`,
    cell: `border-0 text-[10px] py-[4px] px-[5px] cursor-pointer`,
  };
  const numberHandler = (n) =>
    new Intl.NumberFormat("en-US", {
      signDisplay: "exceptZero",
    }).format(n);

  const FavoritesHandler = (id) => {
    setFavorites((f) => {
      let newFavorites = [...f];
      if (f.includes(id)) {
        newFavorites = newFavorites.filter((fid) => fid !== id);
      } else {
        newFavorites = [...newFavorites, id];
      }
      storage.setItem("favorites", newFavorites);
      return newFavorites;
    });
    // rows[index].isFavorite = !rows[index].isFavorite;
    // setRows((s) => {
    //   const old = [...s];
    //   old[index].isFavorite = !old[index].isFavorite;
    //   return old;
    // });
  };

  const paireSelectHandler = (id) => {
    dispatch(setSelectedPair(id));
  };
  return (
    <div className="flex flex-col h-full min-h-[130px] relative">
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
              {data?.length > 0 &&
                data.map(
                  (
                    {
                      _id,
                      baseCurrency,
                      pairCurrency,
                      lastPrice,
                      change24: change,
                    },
                    i
                  ) => {
                    const pair = `${baseCurrency.ticker} / ${pairCurrency.ticker}`;
                    const isFavorite = favorites.includes(_id);
                    const activeClass =
                      selectedPair === _id ? classes.active : "";
                    const changeHandler = (v) => {
                      // if (v === 0) {
                      //   return "";
                      // }else
                    };
                    return (
                      <React.Fragment key={i}>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                          className={`rounded-[3px] relative ${classes.tableRow}`}
                          onClick={() => paireSelectHandler(_id)}
                        >
                          <TableCell
                            className={`rounded-l-[3px] ${activeClass} ${tClasses.cell} flex gap-[5px] font-bold`}
                            align="left"
                          >
                            <span onClick={() => FavoritesHandler(_id)}>
                              <Icons.Favorites
                                className={`${classes.favorite} ${
                                  isFavorite ? "" : classes.unFavorite
                                }`}
                              />
                            </span>
                            <span>{pair}</span>
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
                              +change === 0
                                ? ""
                                : +change > 0
                                ? "text-success"
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
                  }
                )}
            </TableBody>
          </Table>
        </ScrollbarsUi>
      </TableContainer>
      <NoData visible={!data.length > 0} className={`w-[110px] h-[100px]`} />
    </div>
  );
};

export default PairsTable;
