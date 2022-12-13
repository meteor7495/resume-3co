import { combineReducers } from "@reduxjs/toolkit";
import deposit from "./depositSlice";
import wallets from "./walletsSlice";
import coin from "./coinSlice";

const reducer = combineReducers({
  deposit,
  wallets,
  coin,
});

export default reducer;
