import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";
//import Vazir from '../../src/assets/fonts/Vazir-Medium-FD-WOL.woff'
import { createTheme } from "@mui/material";
// const VazirFont = {
//   fontFamily: 'Vazir',
//   fontStyle: 'normal',
//   src: `url(${Vazir})`
// }
const overrides = {
  // typography: {
  //   h1: {
  //     fontSize: "3rem",
  //   },
  //   h2: {
  //     fontSize: "2rem",
  //   },
  //   h3: {
  //     fontSize: "1.64rem",
  //   },
  //   h4: {
  //     fontSize: "1.5rem",
  //   },
  //   h5: {
  //     fontSize: "1.285rem",
  //   },
  //   h6: {
  //     fontSize: "1.142rem",
  //   },
  //   fontFamily: "Vazir"
  // },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       //'@font-face': [VazirFont]
  //     }
  //   }
  // }
};

const themes = {
  light: createTheme({ ...lightTheme, ...overrides }),
  dark: createTheme({ ...darkTheme, ...overrides }),
};

export default themes;
