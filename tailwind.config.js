/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#FAF8ED",
        secondaryBlue: "#3b71fe",
        secondaryYellow: "#ffaf4e",
        primary: "#6978ef",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
