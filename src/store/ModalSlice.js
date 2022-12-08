import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    visible: false,
    id: '',
  },
  reducers: {
    setModal(state, action) {
      return { ...state, ...action.payload };
    },
    closeModal: () => {
      return {
        visible: false,
        id: '',
      }
    }
  },
});

export const { setModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
