import { createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get } = axiosService("history");
export const getHistory = get({
  url: "transactions/history",
  name: "getHistory",
});

const historySlice = createSlice({
  name: "history",
  initialState: {},
  reducers: {
    sethistorySearch: {
      reducer: (state, action) => {
        state.searchText = action.payload;
        return state;
      },
    },
  },
  extraReducers: {
    [getHistory.fulfilled]: (state, action) => action.payload,

  },
});

export const { sethistorySearch } = historySlice.actions;

export default historySlice.reducer;
