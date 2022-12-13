import { createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get } = axiosService("Deposit");
export const getDeposit = get({
  url: "wallet/Overview",
  name: "getDeposit",
});

// export const removeAdmin = useAxios("post", "/admin/remove-admin", "removeAdmin");
// export const saveAdmin = useAxios("post", "/admin/admins", "saveAdmin")
// export const updateAdmin = useAxios("patch", "/admin/admins", "updateAdmin");

const depositSlice = createSlice({
  name: "Deposit",
  initialState: null,
  // reducers: {},
  extraReducers: {
    [getDeposit.fulfilled]: (state, action) => action.payload,
    // [saveAdmin.fulfilled]: (state, action) => action.payload,
    // [updateAdmin.fulfilled]: (state, action) => action.payload,
    // [removeAdmin.fulfilled]: (state, action) => null,
  },
});

export const { newAdmin, resetAdmin } = depositSlice.actions;

export default depositSlice.reducer;
