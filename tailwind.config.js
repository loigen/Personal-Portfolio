/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "tint-t4": "#c8e6c9",
        black: "#000",
        limegreen: "#31ce3e",
        forestgreen: {
          "100": "#21a628",
          "200": "#388e3b",
        },
        mediumspringgreen: "#20d263",
        mediumseagreen: "#46b95c",
        "tint-t2": "#81c784",
      },
      spacing: {},
      fontFamily: {
        jomhuria: "Jomhuria",
        inter: "Inter",
        montserrat: "Montserrat",
        "montserrat-alternates": "'Montserrat Alternates'",
      },
      borderRadius: {
        "6xs": "7px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "5xl": "1.5rem",
      "29xl": "3rem",
      xs: "0.75rem",
      "17xl": "2.25rem",
      "13xl": "2rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xs": "0.688rem",
      "11xl": "1.875rem",
      base: "1rem",
      "5xs": "0.5rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      mq350small: {
        raw: "screen and (max-width: 350px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
