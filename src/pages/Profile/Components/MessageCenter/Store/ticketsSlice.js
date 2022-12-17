import { createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get, post } = axiosService("Tickets");
export const getTickets = get({
  url: "tickets",
  name: "getTickets",
});
// export const removeAdmin = useAxios("post", "/admin/remove-admin", "removeAdmin");
// export const saveAdmin = useAxios("post", "/admin/admins", "saveAdmin")
// export const updateAdmin = useAxios("patch", "/admin/admins", "updateAdmin");

const ticketsSlice = createSlice({
  name: "tickets",
  initialState: null,
  reducers: {
  },
  extraReducers: {
    [getTickets.fulfilled]: (state, action) => action.payload?.itemsList,
    // [updateAdmin.fulfilled]: (state, action) => action.payload,
    // [removeAdmin.fulfilled]: (state, action) => null,
  },
});

export const {} = ticketsSlice.actions;

export default ticketsSlice.reducer;
