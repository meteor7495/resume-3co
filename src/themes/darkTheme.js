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
      light: `${primary}ed`,
      dark: `${primary}ed`,
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
    },
    error: {
      main: "#F34F45",
    },
    input: {
      main: "#2b2b2d",
      light: "#E4E7EC",
      dark: "#E4E7EC",
    },
    background: {
      paper: "#1C1C1E",
      default: "#1C1C1E",
      main: "#121213",
      light: "#E4E7EC",
      dark: "#E4E7EC",
    },
    secondBackground: {
      main: "#1C1C1E",
    },
    textColor: {
      main: "#F2F2F7",
    },
    headerBorderColor: {
      main: "#000000",
    },
    box: {
      background: "#1B1C1D",
    },
    border: {
      main: "#D1D1D6",
      light: "#D1D1D6",
      dark: "#D1D1D6",
    },
    borderColor: {
      main: "#D1D1D6",
      light: "#D1D1D6",
      dark: "#D1D1D6",
    },
    text: {
      primary: "#F2F2F7",
      secondary: "#",
    },
  },
};

export default lightTheme;
