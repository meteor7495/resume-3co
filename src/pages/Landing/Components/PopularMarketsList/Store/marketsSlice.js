import { createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get } = axiosService("Issues");
export const getMarkets = get({
  url: "home",
  name: "getMarkets",
});
// export const removeAdmin = useAxios("post", "/admin/remove-admin", "removeAdmin");
// export const saveAdmin = useAxios("post", "/admin/admins", "saveAdmin")
// export const updateAdmin = useAxios("patch", "/admin/admins", "updateAdmin");

const issuesSlice = createSlice({
  name: "home",
  initialState: null,
  reducers: {
  },
  extraReducers: {
    [getMarkets.fulfilled]: (state, action) => (action.payload),
    // [saveAdmin.fulfilled]: (state, action) => action.payload,
    // [updateAdmin.fulfilled]: (state, action) => action.payload,
    // [removeAdmin.fulfilled]: (state, action) => null,
  },
});

export const {} = issuesSlice.actions;

export default issuesSlice.reducer;
