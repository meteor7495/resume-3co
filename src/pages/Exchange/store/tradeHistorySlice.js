import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get } = axiosService("tradeHistory");
export const getTradeHistory = get({
  url: "market",
  urlTail: "trades/history",
  name: "getTradeHistory",
  dataHandler: (data) =>
    data.map((item) => ({
      ...item,
      amount: item.amount.toNormalNumber(),
      price: item.price.toNormalNumber(),
    })),
});

const tradeHistoryAdapter = createEntityAdapter({ selectId: (i) => i._id });

export const { selectAll: selectTradeHistorys } =
  tradeHistoryAdapter.getSelectors((state) => {
    return state.exchange.tradeHistory;
  });

const tradeHistorySlice = createSlice({
  name: "tradeHistory",
  initialState: tradeHistoryAdapter.getInitialState({
    searchText: "",
  }),
  extraReducers: {
    [getTradeHistory.fulfilled]: tradeHistoryAdapter.setAll,
  },
});

export default tradeHistorySlice.reducer;
