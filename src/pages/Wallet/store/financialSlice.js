import { createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";
import objectToNormalNumber from "utils/objectToNormalNumber";

const { get } = axiosService("financial");
export const getFinancialList = get({
  url: "wallet/financial",
  name: "getFinancialList",
  dataHandler: (data) =>
    data.map((item) => ({
      ...item,
      balance: item.balance.toNormalNumber(),
    })),
  // dataHandler: (data) => ({
  //   ...data,
  //   itemsList: data.itemsList.map((item) => ({
  //     ...item,
  //     amount: item.amount.toNormalNumber(),
  //   })),
  // }),
});

export const getFinancialOverview = get({
  url: "wallet/financial/overview",
  name: "getFinancialOverview",
  dataHandler: (data) => {
    const newData = {
      ...data,
      overview: {
        ...objectToNormalNumber(data.overview),
      },
      attention: {
        ...objectToNormalNumber(data.attention),
      },
      portfolio: {
        ...objectToNormalNumber(data.portfolio),
      },
    };
    return newData;
  },
});

const FinancialSlice = createSlice({
  name: "financial",
  initialState: {
    financialList: [],
  },
  // reducers: {
  //   sethistorySearch: {
  //     reducer: (state, action) => {
  //       state.searchText = action.payload;
  //       return state;
  //     },
  //   },
  // },
  extraReducers: {
    [getFinancialList.fulfilled]: (state, action) => ({
      ...state,
      financialList: action.payload,
    }),
    [getFinancialOverview.fulfilled]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

// export const { sethistorySearch } = FinancialSlice.actions;

export default FinancialSlice.reducer;
