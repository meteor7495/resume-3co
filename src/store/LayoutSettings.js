import {createSlice} from "@reduxjs/toolkit";
import _ from 'lodash';


function generateSettings(_defaultSettings, _newSettings) {
  return _.merge(
    _defaultSettings,
    _newSettings
  )
}

const layoutSettingsSlice = createSlice({
  name: "layoutSettings",
  initialState: {},
  reducers: {
    resetSettings() {
      return {
        header: {
          display: true
        },
        footer: {
          main: {
            display: true
          },
          copyRight: {
            display: true
          },
          linksSection: {
            display: true
          },
        },
      };
    },
    setSettings(state, action) {
      const mainAction = generateSettings({}, {...action.payload})
      return {...state, ...mainAction};
    },
  },
});

export const {setSettings, resetSettings} = layoutSettingsSlice.actions;
export default layoutSettingsSlice.reducer;
