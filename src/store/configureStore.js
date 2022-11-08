import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import appSlice from "./appSlice";
import dirSlice from "./dirSlice";
import AlertsSlice from "./AlertsSlice";
import LoadingSlice from "./LoadingSlice";

const reducer = combineReducers({
  loading: LoadingSlice,
  userInfo: userSlice,
  dir : dirSlice,
  app: appSlice,
  alerts:AlertsSlice
});

export const store = configureStore({
  reducer,
});
