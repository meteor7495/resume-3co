import { combineReducers } from "@reduxjs/toolkit";
import tickets from "./ticketsSlice";
import issues from "./issuesSlice";

const reducer = combineReducers({
  tickets,
  issues,
});

export default reducer;
