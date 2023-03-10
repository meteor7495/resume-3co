import React, { useEffect, useState } from "react";
import useStyles from "./PopularMarketsList.styles";
import ArrowUp from "../../../../assets/icons/arrow-up.svg";
import ArrowDown from "../../../../assets/icons/arrow-down.svg";
import Charts from "../../../../components/Charts";
import { Typography } from "@mui/material";
import ButtonUi from "../../../../components/UiKit/ButtonUi";
import withReducer from "../../../../store/withReducer";
import reducer from "./Store";
import { useDispatch, useSelector } from "react-redux";
import { getMarkets } from "./Store/marketsSlice";
import { useNavigate } from "react-router-dom";
import useMarkets from "../../../../hooks/useMarkets";

function PopularMarketsList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { markets } = useSelector((s) => s.markets);
  const { GetIndexMarketsWeekly } = useMarkets();
  const [chartData, setChartData] = useState([]);
  useEffect(async () => {
    dispatch(getMarkets());
    await setChartData([
      {
        "3CO": {
          array: [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
          average: 0.01,
        },
      },
      {
        BTC: await CoinWeeklyHandler("bitcoin"),
      },
      {
        ETH: await CoinWeeklyHandler("ethereum"),
      },
      {
        ADA: await CoinWeeklyHandler("cardano"),
      },
      {
        BNB: await CoinWeeklyHandler("binancecoin"),
      },
    ]);
  }, []);
  const CoinWeeklyHandler = async (coin) => {
    const chartData = await GetIndexMarketsWeekly(coin);
    const array = await chartData?.data?.prices?.map((item, index) => {
      return parseFloat(item[1]).toFixed(3);
      //return Math.round(item[1])
    });
    const average =
      (await array?.reduce((a, b) => parseInt(a) + parseInt(b), 0)) /
      array?.length;
    return { array, average };
  };
  const CoinName = ({ url, name, shortName }) => {
    return (
      <>
        <img src={url} width={30} height={30} />
        <span className={"ml-[13px] text-black font-bold"}>{name}</span>
        <span className={"ml-[13px] opacity-50"}>{shortName}</span>
      </>
    );
  };
  const CoinChangesHandler = (item) => {
    if (item?.change24 > 0) {
      return (
        <>
          <span className={"mr-2 text-success"}>
            {parseFloat(item?.change24).toFixed(2)}
          </span>
          <img src={ArrowUp} />
        </>
      );
    } else if (item?.change24 < 0) {
      return (
        <>
          <span className={"mr-2 text-error"}>
            {parseFloat(item?.change24).toFixed(2)}
          </span>
          <img src={ArrowDown} />
        </>
      );
    } else {
      return (
        <>
          <span className={"mr-2"}>
            {parseFloat(item?.change24).toFixed(2)}
          </span>
          -
        </>
      );
    }
  };
  return (
    <section className={`text-gray-600 body-font ${classes.background}`}>
      <div className="container mx-auto flex py-8 lg:py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow w-full flex flex-col mb-16 md:mb-0 items-center text-center px-5 lg:px-16">
          <Typography
            className={`hidden lg:block title-font sm:text-[35px] font-[700] text-3xl mb-4 font-medium text-gray-900 ${classes.title}`}
          >
            Popular crypt ocurrencies
          </Typography>
          <div className="flex flex-col w-full mt-[36px]">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-12 ">
              <div className="inline-block min-w-full">
                <div className="overflow-hidden">
                  <table
                    className={`min-w-full border-0 lg:border rounded-[15px] border-gray-300 border-solid ${classes.table} ${classes.borderColor}`}
                    style={{ borderSpacing: 0 }}
                  >
                    <thead>
                      <tr>
                        <th
                          scope="col-3"
                          className={
                            "hidden lg:table-cell opacity-50 border-b border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] text-gray-900 px-6 py-4 text-left w-[45%] " +
                            classes.borderColor
                          }
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className={
                            "hidden lg:table-cell opacity-50 border-b border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] text-gray-900 px-6 py-4 text-center w-[15%] " +
                            classes.borderColor
                          }
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className={
                            "hidden lg:table-cell opacity-50 border-b border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] text-gray-900 px-6 py-4 text-center w-[15%] " +
                            classes.borderColor
                          }
                        >
                          Change 24h
                        </th>
                        <th
                          scope="col"
                          className={
                            "hidden lg:table-cell opacity-50 border-b border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] text-gray-900 px-6 py-4 text-center w-[15%] " +
                            classes.borderColor
                          }
                        >
                          Market Cap(USD)
                        </th>
                        <th
                          scope="col"
                          className={
                            "hidden lg:table-cell opacity-50 border-b border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] text-gray-900 px-6 py-4 text-center w-[5%] " +
                            classes.borderColor
                          }
                        >
                          Chart
                        </th>
                        <th
                          scope="col"
                          className={
                            "hidden lg:table-cell opacity-50 border-b border-0 border-solid border-gray-300 text-sm font-[400] text-[18px] text-gray-900 px-6 py-4 text-center w-[10%] " +
                            classes.borderColor
                          }
                        >
                          Trade
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {markets?.map((item, index) => {
                        // console.log('chartData?.[item?.baseCurrency?.ticker]', chartData[index][item?.baseCurrency?.ticker])
                        return (
                          <tr className="border-b">
                            <td
                              className={
                                "flex border-b border-0 border-solid lg:border-0 items-center lg:px-6 py-6 lg:py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left" +
                                classes.borderColor
                              }
                            >
                              <CoinName
                                url={item?.baseCurrency?.logo}
                                name={item?.baseCurrency?.title}
                                shortName={item?.baseCurrency?.ticker}
                              />
                            </td>
                            <td
                              className={
                                "text-sm border-b border-0 border-solid lg:border-0 border lg:border-0 text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center" +
                                classes.borderColor
                              }
                            >
                              ${item?.lastPrice}
                              <div className={"lg:hidden"}>
                                {CoinChangesHandler(item)}
                              </div>
                            </td>
                            <td className="hidden lg:table-cell text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                              {CoinChangesHandler(item)}
                            </td>
                            <td>
                              <span className={"text-xs"}>
                                {item?.marketCap}
                              </span>
                            </td>
                            <td className="hidden lg:table-cell text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                              {chartData[index] && (
                                <Charts
                                  width={65}
                                  type="area"
                                  data={{
                                    name: "????????????????",
                                    data: chartData[index][
                                      item?.baseCurrency?.ticker
                                    ]?.array,
                                  }}
                                  options={{
                                    colors: [
                                      item?.lastPrice ==
                                      chartData[index][
                                        item?.baseCurrency?.ticker
                                      ]?.average
                                        ? "#ccc"
                                        : item?.lastPrice >
                                          chartData[index][
                                            item?.baseCurrency?.ticker
                                          ]?.average
                                        ? "#F34F45"
                                        : "#35C85A",
                                    ],
                                    // colors: ['#35C85A'],
                                  }}
                                />
                              )}
                            </td>
                            <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-center">
                              <ButtonUi
                                onClick={() =>
                                  navigate(`/exchange?coinId=${item?._id}`)
                                }
                                variant={"outlined"}
                                className={"text-[14px] font-[700]"}
                              >
                                Buy
                              </ButtonUi>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withReducer("markets", reducer)(PopularMarketsList);
