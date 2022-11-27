import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import appSlice from "./appSlice";
import dirSlice from "./dirSlice";
import AlertsSlice from "./AlertsSlice";
import LoadingSlice from "./LoadingSlice";
import LayoutSettings from "./LayoutSettings";
import logger from "redux-logger";

const reducer = combineReducers({
  loading: LoadingSlice,
  user: userSlice,
  dir : dirSlice,
  app: appSlice,
  alerts:AlertsSlice,
  layoutSettings: LayoutSettings
});

export const store = configureStore({
  reducer,
  middleware: [logger],
});
