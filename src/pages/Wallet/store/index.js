import { combineReducers } from "@reduxjs/toolkit";
import deposit from "./depositSlice";
import coin from "./coinSlice";
import history from "./historySlice";
import withdraw from "./withdrawSlice";
import financial from "./financialSlice";
import error from "./errorSlice";
import walletOrderHistory from "./walletOrderHistorySlice";

const reducer = combineReducers({
  deposit,
  coin,
  history,
  financial,
  withdraw,
  error,
  walletOrderHistory,
});

export default reducer;
