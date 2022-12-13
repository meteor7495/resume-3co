import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get } = axiosService("Wallets");
export const getWallets = get({
  url: "wallet/spot/assets",
  name: "getWallets",
});

const walletAdapter = createEntityAdapter({ selectId: (i) => i._id });
export const { selectAll: selectWallets, selectById: selectWalletById } =
  walletAdapter.getSelectors((state) => {
    return state.wallet.wallets;
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
    // [saveAdmin.fulfilled]: (state, action) => action.payload,
    // [updateAdmin.fulfilled]: (state, action) => action.payload,
    // [removeAdmin.fulfilled]: (state, action) => null,
  },
});

export const { setWalletsSearch } = walletSlice.actions;

export default walletSlice.reducer;
