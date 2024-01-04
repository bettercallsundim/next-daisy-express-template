/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    extend: {},
    colors: {
      text1: "var(--text1)",
      background1: "var(--background)",
      primary1: "var(--primary)",
      secondary1: "var(--secondary)",
      accent1: "var(--accent)",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,

    // darkTheme: "sunset", // name of one of the included
  },
};
