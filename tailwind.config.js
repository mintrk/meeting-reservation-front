/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "me-ocean-dark": "#023E43",
        "me-ocean-waves": "#09767F",
        "me-pastel-blue": "#A6D2D0",
        "me-ice-cube": "#DDEAE9",
        "me-cream": "#EFE0D3",
        "me-sunrise": "#E09364",
        "me-yellow": "#E4B054",
      },
    },
  },
  plugins: [nextui()],
};
