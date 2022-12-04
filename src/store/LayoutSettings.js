import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const defaultSettings = {
  headerDisplay: true,
  footerMainDisplay: true,
  footerCopyRightDisplay: true,
  footerLinksSectionDisplay: true,
};

function generateSettings(_newSettings) {
  const newSettings = { ...defaultSettings, ..._newSettings };
  return newSettings;
}

const layoutSettingsSlice = createSlice({
  name: "layoutSettings",
  initialState: {},
  reducers: {
    resetSettings() {
      return defaultSettings;
    },
    setSettings(state, { payload }) {
      return generateSettings(payload);
    },
  },
});

export const { setSettings, resetSettings } = layoutSettingsSlice.actions;
export default layoutSettingsSlice.reducer;
