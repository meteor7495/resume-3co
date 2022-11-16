import { createSlice } from "@reduxjs/toolkit";
import storage from "../utils/storage";

// Define the initial state using that type
const appSlice = createSlice({
  name: "app",
  initialState: {
    theme: "light",
    selectedCoin: {
      baseTicker: "BTC",
      symbol: "BTCUSDT",
      isActive: true,
      pairTicker: "USDT",
    },
    pairData: { data: {}, tab: [] },
  },
  reducers: {
    setTheme: (state, action) => {
      return { ...state, theme: action.payload };
    },
    setSelectedCoin: (state, action) => {
      return { ...state, selectedCoin: action.payload };
    },
    setPairData: (state, action) => {
      return { ...state, pairData: action.payload };
    },
  },
});

export const { setSelectedCoin, setPairData, setTheme } = appSlice.actions;
export default appSlice.reducer;
