import { combineReducers } from "@reduxjs/toolkit";
import deposit from "./depositSlice";
import wallets from "./walletsSlice";
import coin from "./coinSlice";
import history from "./historySlice";
import withdraw from "./withdrawSlice";
import financial from "./financialSlice";

const reducer = combineReducers({
  deposit,
  wallets,
  coin,
  history,
  financial,
  withdraw,
});

export default reducer;
