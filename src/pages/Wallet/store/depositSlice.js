import { createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get } = axiosService("Deposit");
export const getDeposit = get({
  url: "wallet/Overview",
  name: "getDeposit",
});

const depositSlice = createSlice({
  name: "Deposit",
  initialState: null,
  extraReducers: {
    [getDeposit.fulfilled]: (state, action) => action.payload,
  },
});

export const { newAdmin, resetAdmin } = depositSlice.actions;

export default depositSlice.reducer;
