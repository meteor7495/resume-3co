import { createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get, post } = axiosService("Coin");
export const selectCoin = get({
  url: "currencies",
  name: "selectCoin",
});

export const generateAddress = post({
  url: "wallet/spot/onchain/generate",
  name: "generateAddress",
});

const coinSlice = createSlice({
  name: "Coin",
  initialState: {
    currency: {},
    networks: [],
    network: "",
    address: {},
    pairCurrencies: [],
  },
  reducers: {
    setNetwork: {
      reducer: (state, action) => {
        state.network = action.payload;
      },
    },
  },
  extraReducers: {
    [selectCoin.fulfilled]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [generateAddress.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        address: {
          ...payload,
        },
      };
    },
  },
});

export const { setNetwork } = coinSlice.actions;

export default coinSlice.reducer;
