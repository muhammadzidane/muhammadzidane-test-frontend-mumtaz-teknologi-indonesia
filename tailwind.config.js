/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      brightness: {},
      colors: {
        primary: "#8362F2",
        secondary: "#ffed4a",
        danger: "#FF0000",
        white: "#ffffff",
        "gray-1": "#F4F4F4",
        "gray-2": "#8DD4CC",
        "gray-3": "#9A9A9A",
        "gray-4": "#AAAAAA",
        "gray-5": "#6E6E6E",
        "blue-1": "#e3f2fd",
      },
    },
  },
  plugins: [],
};
