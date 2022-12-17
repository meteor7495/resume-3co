import { createSlice } from "@reduxjs/toolkit";

const widthSlice = createSlice({
  name: "width",
  initialState: {
    width: 1380,
  },
  reducers: {
    setWidth(state, action) {
      return { width: action.payload };
    },
  },
});

export const { setWidth } = widthSlice.actions;
export default widthSlice.reducer;
