import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get } = axiosService("pairs");
export const getPairs = get({
  url: "market/pairs",
  name: "getPairs",
  // disabelLoading: true,
  dataHandler: (data) =>
    data.map((item) => ({
      ...item,
      lastPrice: item.lastPrice.toNormalNumber(),
    })),
});

export const getPairWallet = get({
  url: "wallet/spot/currency",
  name: "getPairWallet",
  dataHandler: (data) => ({
    ...data,
    activeBalance: data.activeBalance.toNormalNumber(),
  }),
});

const pairsAdapter = createEntityAdapter({ selectId: (i) => i._id });

export const { selectAll: selectPairs, selectById: selectPairById } =
  pairsAdapter.getSelectors((state) => {
    return state.exchange.pairs;
  });

const pairsSlice = createSlice({
  name: "pairs",
  initialState: pairsAdapter.getInitialState({
    searchText: "",
    selectedPair: "",
    pairWallet: {},
  }),
  reducers: {
    setSelectedPair: {
      reducer: (state, action) => {
        state.selectedPair = action.payload;
      },
    },
    setPairSearch: {
      reducer: (state, action) => {
        state.searchText = action.payload;
        return state;
      },
    },
  },
  extraReducers: {
    [getPairs.fulfilled]: pairsAdapter.setAll,
    [getPairWallet.fulfilled]: (state, action) => ({
      ...state,
      pairWallet: action.payload,
    }),
  },
});

export const { setSelectedPair, setPairSearch } = pairsSlice.actions;

export default pairsSlice.reducer;
