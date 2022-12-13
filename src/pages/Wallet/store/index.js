import { combineReducers } from "@reduxjs/toolkit";
import deposit from "./depositSlice";
import wallets from "./walletsSlice";
import coin from "./coinSlice";
import history from "./historySlice";

const reducer = combineReducers({
  deposit,
  wallets,
  coin,
  history,
});

export default reducer;
