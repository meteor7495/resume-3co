import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import appSlice from "./appSlice";
import dirSlice from "./dirSlice";
import AlertsSlice from "./AlertsSlice";
import LoadingSlice from "./LoadingSlice";
import LayoutSettings from "./LayoutSettings";
import WidthSlice from "./WidthSlice";
import marketsSlice from "./marketsSlice";
import modalSlice from "./ModalSlice";

// const reducer = combineReducers({
//   loading: LoadingSlice,
//   user: userSlice,
//   dir: dirSlice,
//   app: appSlice,
//   alerts:AlertsSlice,
//   layoutSettings: LayoutSettings,
//   width: WidthSlice,
//   markets: marketsSlice,
//   modal: modalSlice,
// });

// export const store = configureStore({
//   reducer,
// });

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    loading: LoadingSlice,
    user: userSlice,
    dir: dirSlice,
    app: appSlice,
    alerts: AlertsSlice,
    layoutSettings: LayoutSettings,
    width: WidthSlice,
    markets: marketsSlice,
    modal: modalSlice,
    ...asyncReducers,
  });

  /*
	Reset the redux store when user logged out
	 */
  if (action.type === "auth/user/userLoggedOut") {
    // state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;
