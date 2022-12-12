import { combineReducers } from "@reduxjs/toolkit";
import markets from "./marketsSlice";

const reducer = combineReducers({
  markets,
});

export default reducer;
