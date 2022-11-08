import { createSlice } from "@reduxjs/toolkit";

const dirSlice = createSlice({
  name: "dir",
  initialState: {
    dri: "",
  },
  reducers: {
    setDir(state, action) {
      return action.payload;
    },
  },
});

export const { setDir } = dirSlice.actions;
export default dirSlice.reducer;
