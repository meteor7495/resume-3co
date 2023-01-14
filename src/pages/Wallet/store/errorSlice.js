import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: {},
  reducers: {
    setError: {
      reducer: (state, action) => {
        state = { ...state, ...action.payload };
        return state;
      },
    },
    clearError: {
      reducer: (state) => {
        state = {};
        return state;
      },
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
