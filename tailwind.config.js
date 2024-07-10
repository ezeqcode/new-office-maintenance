const flowbite = require("flowbite-react/tailwind");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient-home":
          "radial-gradient(circle at center, rgba(7, 168, 93, 0.09) 1%, rgba(217, 217, 217, 0.00) 300%), linear-gradient(#111827, #111827)",
        "custom-gradient-home-light":
          "radial-gradient(circle at center, rgba(88, 7, 168, 0.10) 1%, rgba(255, 255, 255, 0.00) 300%), linear-gradient(#F9FAFB, #F9FAFB)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
