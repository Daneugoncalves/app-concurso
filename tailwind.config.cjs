/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          500: "#7C3AED",
          600: "#6D28D9",
        },
        secondary: {
          500: "#3B82F6",
        },
        success: {
          500: "#10B981",
        },
        error: {
          500: "#EF4444",
        },
      },
    },
  },
  plugins: [],
};

