import { combineReducers } from "@reduxjs/toolkit";
import deposit from "./depositSlice";
import wallets from "./walletsSlice";
import coin from "./coinSlice";
import history from "./historySlice";
import withdraw from "./withdrawSlice";

const reducer = combineReducers({
  deposit,
  wallets,
  coin,
  history,
  withdraw,
});

export default reducer;
