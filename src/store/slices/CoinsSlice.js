import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get } = axiosService("coins");
export const getCoins = get({
  url: "currencies",
  name: "getCoins",
});

const coinsAdapter = createEntityAdapter({ selectId: (i) => i._id });
export const { selectAll: selectCoins, selectById: selectCoinsById } =
  coinsAdapter.getSelectors((state) => {
    return state.coins;
  });
const coinsSlice = createSlice({
  name: "coins",
  initialState: coinsAdapter.getInitialState({
    searchText: "",
  }),
  reducers: {
    setCoinsSearch: {
      reducer: (state, action) => {
        state.searchText = action.payload;
        return state;
      },
    },
  },
  extraReducers: {
    [getCoins.fulfilled]: coinsAdapter.setAll,
  },
});

export const { setCoinsSearch } = coinsSlice.actions;

export default coinsSlice.reducer;
