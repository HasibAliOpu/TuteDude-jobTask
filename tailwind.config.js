module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f9a7cc",

          secondary: "#eaab81",

          accent: "#6e72d1",

          neutral: "#800080",

          "base-100": "#FFFFFF",

          info: "#7DCFED",

          success: "#149050",

          warning: "#CB7615",

          error: "#EA758F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
