const primary = "#007BFF";
// const secondary = "#FF5C93";
// const warning = "#FFC260";
// const success = "#3CD4A0";
// const info = "#9013FE";

const lightTheme = {
  palette: {
    mode: "dark",
    primary: {
      main: primary,
      light: `${primary}0d`,
      dark: `${primary}0d`,
      contrastText: "#ffffff",
    },
    // secondary: {
    //   main: '#000',
    //   light: '#000',
    //   dark: '#000'
    // },
    success: {
      main: "#35C85A",
      contrastText: "#FFF",
      alertBg: '#193621',
    },
    error: {
      main: "#F34F45",
      alertBg: '#3F1E1D',
    },
    input: {
      main: "#2b2b2d",
      light: "#E4E7EC",
      dark: "#E4E7EC",
      transparent: "rgba(242, 242, 247, 0.07)",
      placeholder: "#F2F2F7",
      border: "#121213",
      hover: "#007bff66",
    },
    background: {
      paper: "#1C1C1E",
      modal: "#1C1C1E",
      default: "#121213",
      main: "#121213",
      profile: "#121213",
      light: "#1B1C1D",
      dark: "#E4E7EC",
      lightBlue: "rgba(242, 242, 247, 0.07)",
    },
    secondBackground: {
      main: "#1C1C1E",
    },
    headerBorderColor: {
      main: "#000000",
    },
    textColor: {
      main: "#F2F2F7",
      gray: "#F2F2F7",
    },
    box: {
      background: "#1B1C1D",
      bgBlueTransparent: "rgba(0, 123, 255, 0.05);",
      uploadBox: '#F2F2F712'
    },
    border: {
      main: "#000000",
      light: "#121213",
      dark: "#121213",
    },
    text: {
      primary: "#F2F2F7",
      secondary: "#F2F2F780",
    },
    button: {
      menuButtonBg: "#121213",
      disabled: "#12121333",
      active: "#007BFF1A",
    },
    icons: {
      grey: '#1F263F',
    },
    orderBook: {
      sellBackground: "#271718",
      buyBackground: "#131615",
    },
    sidebar: {
      buttonBg: "#1212134d",
      vectorBg: "#121213",
    },
  },
};

export default lightTheme;
