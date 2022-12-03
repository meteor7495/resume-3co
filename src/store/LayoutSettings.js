import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const defaultSettings = {
  header: {
    display: true,
  },
  footer: {
    main: {
      display: true,
    },
    copyRight: {
      display: true,
    },
    linksSection: {
      display: true,
    },
  },
};

function generateSettings(_defaultSettings, _newSettings) {
  return _.merge(_defaultSettings, _newSettings);
}

const layoutSettingsSlice = createSlice({
  name: "layoutSettings",
  initialState: {},
  reducers: {
    resetSettings() {
      return defaultSettings;
    },
    setSettings(state, action) {
      const mainAction = generateSettings(defaultSettings, {
        ...action.payload,
      });
      return mainAction;
    },
  },
});

export const { setSettings, resetSettings } = layoutSettingsSlice.actions;
export default layoutSettingsSlice.reducer;
