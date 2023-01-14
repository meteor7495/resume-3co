import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get } = axiosService("Wallets");
export const getWallets = get({
  url: "wallet/spot/assets",
  name: "getWallets",
  dataHandler: (data) =>
    data.map((item) => ({
      ...item,
      activeBalance: item.activeBalance.toNormalNumber(),
    })),
});

export const updateOneWallet = get({
  url: "wallet/spot",
  name: "updateOneWallet",
  dataHandler: (data) => ({
    ...data,
    activeBalance: data.activeBalance.toNormalNumber(),
  }),
});

export const getOneWalletByCurrency = get({
  url: "wallet/spot/currency",
  name: "getOneWalletByCurrency",
  dataHandler: (data) => ({
    ...data,
    activeBalance: data.activeBalance.toNormalNumber(),
  }),
});

const walletAdapter = createEntityAdapter({ selectId: (i) => i._id });
export const { selectAll: selectWallets, selectById: selectWalletById } =
  walletAdapter.getSelectors((state) => {
    return state.wallets;
  });
const walletSlice = createSlice({
  name: "Wallets",
  initialState: walletAdapter.getInitialState({
    searchText: "",
  }),
  reducers: {
    setWalletsSearch: {
      reducer: (state, action) => {
        state.searchText = action.payload;
        return state;
      },
    },
  },
  extraReducers: {
    [getWallets.fulfilled]: walletAdapter.setAll,
    [updateOneWallet.fulfilled]: walletAdapter.setOne,
    [getOneWalletByCurrency.fulfilled]: walletAdapter.setOne,
  },
});

export const { setWalletsSearch } = walletSlice.actions;

export default walletSlice.reducer;
