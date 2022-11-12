module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto-Normal", "Kalameh"],
      "roboto-bold": ["Roboto-Bold", "Kalameh"],
      "roboto-thin": ["Roboto-Thin", "Kalameh"],
    },
    extend: {
      colors: {
        btnEnter: "#2BD292",
        "btn-accent": "#20AFFF",
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
