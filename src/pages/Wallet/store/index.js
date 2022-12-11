import { combineReducers } from "@reduxjs/toolkit";
import deposit from "./depositSlice";

const reducer = combineReducers({
  deposit,
});

export default reducer;
