import { combineReducers } from "@reduxjs/toolkit";
import pairs from "./pairsSlice";
import orderHistory from "./orderHistorySlice";
import tradeHistory from "./tradeHistorySlice";
import onlinePairs from "./onlinePairsSlice";

const reducer = combineReducers({
  pairs,
  onlinePairs,
  orderHistory,
  tradeHistory,
});

export default reducer;
