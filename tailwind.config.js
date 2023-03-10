module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    fontFamily: {
      roboto: ["Roboto-Normal", "Kalameh"],
      "roboto-bold": ["Roboto-Bold", "Kalameh"],
      "roboto-thin": ["Roboto-Thin", "Kalameh"],
    },
    extend: {
      colors: {
        btnEnter: "#2BD292",
        "btn-accent": "#20AFFF",
        primary: "#007BFF",
        text: "#1F263F",
        card: "#39495B",
        imageBackGround: "#39495B",
        error: "#F34F45",
        success: "#35C85A",
        warning: "#FFCC00",
        deactivate: "#9E9E9E",
      },
    },
  },
  plugins: [],
};
