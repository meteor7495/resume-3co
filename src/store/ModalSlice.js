import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    visible: true,
    id: '',
  },
  reducers: {
    setModal(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setModal, addModal, deleteModal } = modalSlice.actions;
export default modalSlice.reducer;
