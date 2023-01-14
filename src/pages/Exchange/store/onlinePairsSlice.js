import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get } = axiosService("onlinePairs");
export const getOnlinePairs = get({
  url: "market/pairs",
  name: "getOnlinePairs",
  disabelLoading: true,
  dataHandler: (data) =>
    data.map((item) => ({
      ...item,
      lastPrice: item.lastPrice.toNormalNumber(),
    })),
});

const onlinePairsAdapter = createEntityAdapter({ selectId: (i) => i._id });

export const {
  selectAll: selectOnlinePairs,
  selectById: selectOnlinePairsById,
} = onlinePairsAdapter.getSelectors((state) => {
  return state.exchange.onlinePairs;
});

const onlinePairsSlice = createSlice({
  name: "onlinePairs",
  initialState: onlinePairsAdapter.getInitialState({
    searchText: "",
    selectedPair: "",
  }),
  extraReducers: {
    [getOnlinePairs.fulfilled]: onlinePairsAdapter.setAll,
  },
});

// export const { setSelectedPair, setPairSearch } = onlinePairsSlice.actions;

export default onlinePairsSlice.reducer;
