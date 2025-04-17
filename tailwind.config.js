// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bytesized: ['Bytesized', 'sans-serif'],  // Add the custom font here
      },
    
      colors: {
        primary: "#C5C505", // Define your custom color
      },
    
    },
  },
  plugins: [],
};
