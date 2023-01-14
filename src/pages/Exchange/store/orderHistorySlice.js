import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get } = axiosService("orderHistory");
export const getOrderHistory = get({
  url: "market",
  urlTail: "history",
  name: "getOrderHistory",
  dataHandler: (data) =>
    data.map((item) => ({
      ...item,
      amount: item.amount.toNormalNumber(),
      price: item.price.toNormalNumber(),
    })),
});

const orderHistoryAdapter = createEntityAdapter({ selectId: (i) => i._id });

export const { selectAll: selectOrderHistorys } =
  orderHistoryAdapter.getSelectors((state) => {
    return state.exchange.orderHistory;
  });

const orderHistorySlice = createSlice({
  name: "orderHistory",
  initialState: orderHistoryAdapter.getInitialState({
    searchText: "",
  }),
  extraReducers: {
    [getOrderHistory.fulfilled]: orderHistoryAdapter.setAll,
  },
});

export default orderHistorySlice.reducer;
