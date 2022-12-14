import { createSlice } from "@reduxjs/toolkit";

const withdrawSlice = createSlice({
  name: "withdraw",
  initialState: {
    address: "",
    amount: "",
  },
  reducers: {
    resetWithdraw: {
      reducer: (state, action) => {
        state.address = "";
        state.amount = "";
      },
    },
    setWithdrawAddress: {
      reducer: (state, action) => {
        state.address = action.payload;
      },
      prepare: (event) => ({
        payload: event?.target?.value
          ? event?.target?.value
          : typeof event === "string"
          ? event
          : "",
      }),
    },
    setWithdrawAmount: {
      reducer: (state, action) => {
        state.amount = action.payload;
      },
      prepare: (event) => ({
        payload: event?.target?.value
          ? event?.target?.value
          : typeof event === "string"
          ? event
          : "",
      }),
    },
  },
});

export const { resetWithdraw, setWithdrawAmount, setWithdrawAddress } =
  withdrawSlice.actions;

export default withdrawSlice.reducer;
