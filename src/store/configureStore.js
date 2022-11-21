import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import appSlice from "./appSlice";
import dirSlice from "./dirSlice";
import AlertsSlice from "./AlertsSlice";
import LoadingSlice from "./LoadingSlice";
import WidthSlice from "./WidthSlice";

const reducer = combineReducers({
  loading: LoadingSlice,
  user: userSlice,
  dir: dirSlice,
  app: appSlice,
  alerts: AlertsSlice,
  width: WidthSlice,
});

export const store = configureStore({
  reducer,
});
