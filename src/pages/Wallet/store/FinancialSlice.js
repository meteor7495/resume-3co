import { createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get } = axiosService("financial");
export const getFinancial = get({
  url: "wallet/financial",
  name: "getHistory",
});

const FinancialSlice = createSlice({
  name: "financial",
  initialState: {},
  // reducers: {
  //   sethistorySearch: {
  //     reducer: (state, action) => {
  //       state.searchText = action.payload;
  //       return state;
  //     },
  //   },
  // },
  extraReducers: {
    [getFinancial.fulfilled]: (state, action) => action.payload,
  },
});

// export const { sethistorySearch } = FinancialSlice.actions;

export default FinancialSlice.reducer;
