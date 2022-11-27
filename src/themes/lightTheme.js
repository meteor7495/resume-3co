const primary = "#007BFF";
// const secondary = "#FF5C93";
// const warning = "#FFC260";
// const success = "#3CD4A0";
// const info = "#9013FE";

const lightTheme = {
  palette: {
    mode: "light",
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
      alertBg: '#F5FCF6',
    },
    error: {
      main: "#F34F45",
      contrastText: "#FFF",
      alertBg: '#FEF6F5',
    },
    input: {
      main: "#F9F9FC",
      light: "#E4E7EC",
      dark: "#E4E7EC",
      transparent: "#F2F2F7",
      placeholder: "#1F263F",
      border: "#D1D1D6",
      hover: "#007bff66",
    },
    background: {
      paper: "#F9F9FC",
      default: "#fff",
      main: "#F9F9FC",
      light: "#fff",
      dark: "#E4E7EC",
      lightBlue: "rgba(0, 123, 255,0.05)",
    },
    secondBackground: {
      main: "#fff",
    },
    headerBorderColor: {
      main: "#E5E5EA",
    },
    textColor: {
      main: "#1F263F",
    },
    box: {
      background: "#fff",
    },
    border: {
      main: "#D1D1D6",
      light: "#D1D1D6",
      dark: "#D1D1D6",
    },
    text: {
      primary: "#1F263F",
      secondary: "#",
    },
    button: {
      menuButtonBg: "#F9F9FC",
    },
    orderBook: {
      sellBackground: "#f9eaeb",
      buyBackground: "#f8f8fb",
    },
    sidebar: {
      buttonBg: "#F9F9FC",
      vectorBg: "#F2F2F7",
    },
  },
};

export default lightTheme;
