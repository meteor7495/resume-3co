import { combineReducers } from "@reduxjs/toolkit";
import deposit from "./depositSlice";
import wallets from "./walletsSlice";

const reducer = combineReducers({
  deposit,
  wallets,
});

export default reducer;
