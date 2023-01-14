import { createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get } = axiosService("walletOrderHistory");
export const getWalletOrderHistory = get({
  url: "wallet/tradeHistories",
  name: "getWalletOrderHistory",
  dataHandler: (data) =>
    data.map((item) => ({
      ...item,
      amount: item.amount.toNormalNumber(),
      price: item.price.toNormalNumber(),
    })),
});

const walletOrderHistorySlice = createSlice({
  name: "walletOrderHistory",
  initialState: [],
  extraReducers: {
    [getWalletOrderHistory.fulfilled]: (state, action) => action.payload,
  },
});

export default walletOrderHistorySlice.reducer;
