import { createSlice } from "@reduxjs/toolkit";
import axiosService from "store/axiosService";

const { get, post,put } = axiosService("Ticket");
export const getTicket = get({
  url: "tickets",
  name: "getTickets",
});
export const replyTicket = put({
  url: "tickets",
  name: "replyTicket",
});
export const saveTicket = post({
  url: "tickets",
  name: "saveTicket",
});
// export const removeAdmin = useAxios("post", "/admin/remove-admin", "removeAdmin");
// export const saveAdmin = useAxios("post", "/admin/admins", "saveAdmin")
// export const updateAdmin = useAxios("patch", "/admin/admins", "updateAdmin");

const ticketsSlice = createSlice({
  name: "ticket",
  initialState: null,
  reducers: {
  },
  extraReducers: {
    [getTicket.fulfilled]: (state, action) => action.payload,
    [replyTicket.fulfilled]: (state, action) => action.payload,
    [saveTicket.fulfilled]: (state, action) => action.payload,
    // [updateAdmin.fulfilled]: (state, action) => action.payload,
    // [removeAdmin.fulfilled]: (state, action) => null,
  },
});

export const {} = ticketsSlice.actions;

export default ticketsSlice.reducer;
