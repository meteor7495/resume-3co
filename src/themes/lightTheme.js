const primary = "#007BFF";
// const secondary = "#FF5C93";
// const warning = "#FFC260";
// const success = "#3CD4A0";
// const info = "#9013FE";

const lightTheme = {
  palette: {
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
    background: {
      main: "#F9F9FC",
      light: "#E4E7EC",
      dark: "#E4E7EC",
    },
    input: {
      main: "#F9F9FC",
      light: "#E4E7EC",
      dark: "#E4E7EC",
    },
    boxUiBackground: {
      main: "#fff",
    },
    border: {
      main: "#D1D1D6",
      light: "#F2F2F7",
      dark: "#D1D1D6",
    },
    borderColor: {
      main: "#D1D1D6",
      light: "#D1D1D6",
      dark: "#D1D1D6",
    },
    text: {
      primary: "#1F263F",
      secondary: "#",
    },
  },
};

export default lightTheme;
