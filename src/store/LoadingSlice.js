import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    visible: false,
    loaderArray: [],
    text: "",
  },
  reducers: {
    showLoader(state, action) {
      return { ...state, ...action.payload };
    },
    addLoader(state, action) {
      return { ...state, loaderArray: [...state.loaderArray, action.payload] };
    },
    deleteLoader(state, action) {
      return {
        ...state,
        loaderArray: [...state.loaderArray.filter((x) => x !== action.payload)],
      };
    },
  },
});

export const { showLoader, addLoader, deleteLoader } = loadingSlice.actions;
export default loadingSlice.reducer;
