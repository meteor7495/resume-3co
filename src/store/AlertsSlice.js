import { createSlice } from "@reduxjs/toolkit";

const alertsSlice = createSlice({
  name: "alerts",
  initialState: {
    visible: false,
    type: "",
    text: "",
    key: 0,
  },
  reducers: {
    showAlert(state, action) {
      return {...action.payload};
    },
  },
});

export const { showAlert } = alertsSlice.actions;
export default alertsSlice.reducer;
