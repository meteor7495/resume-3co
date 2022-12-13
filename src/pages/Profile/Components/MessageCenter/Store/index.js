import { combineReducers } from "@reduxjs/toolkit";
import tickets from "./ticketsSlice";
import ticket from "./ticketSlice";
import issues from "./issuesSlice";

const reducer = combineReducers({
  tickets,
  issues,
  ticket,
});

export default reducer;
