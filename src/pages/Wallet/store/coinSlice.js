import { createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get, post } = axiosService("Coin");
export const selectCoin = get({
  url: "currencies",
  name: "selectCoin",
});

export const selectNetwork = post({
  url: "wallet/spot/onchain/generate",
  name: "selectNetwork",
});

const coinSlice = createSlice({
  name: "Coin",
  initialState: {
    currency: {},
    networks: [],
    pairCurrencies: [],
  },
  reducers: {
    setCoinSearch: {
      reducer: (state, action) => {
        state.searchText = action.payload;
        return state;
      },
    },
  },
  extraReducers: {
    [selectCoin.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
    [selectNetwork.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
    // [saveAdmin.fulfilled]: (state, action) => action.payload,
    // [updateAdmin.fulfilled]: (state, action) => action.payload,
    // [removeAdmin.fulfilled]: (state, action) => null,
  },
});

export const { setCoinSearch } = coinSlice.actions;

export default coinSlice.reducer;
