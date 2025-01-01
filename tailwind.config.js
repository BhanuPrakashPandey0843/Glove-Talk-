// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 2s infinite",
      },
      colors: {
        red: {
          500: "#FF0000", // Adjust red shade to match your design
        },
      },
    },
  },
  plugins: [],
};
