import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get } = axiosService("history");
export const getHistory = get({
  url: "wallet/history",
  name: "getHistory",
});

const historyAdapter = createEntityAdapter({ selectId: (i) => i._id });
export const { selectAll: selecthistory, selectById: selectHistoryById } =
historyAdapter.getSelectors((state) => {
    return state.wallet.history;
  });
const historySlice = createSlice({
  name: "history",
  initialState: historyAdapter.getInitialState(),
  reducers: {
    sethistorySearch: {
      reducer: (state, action) => {
        state.searchText = action.payload;
        return state;
      },
    },
  },
  extraReducers: {
    [getHistory.fulfilled]: historyAdapter.setAll,
  },
});

export const { sethistorySearch } = historySlice.actions;

export default historySlice.reducer;
