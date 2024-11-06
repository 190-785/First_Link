// tailwind.config.js
module.exports = {
  content: [
    "./index.html",              // Include the main HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript/TypeScript files in src
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: '#433878',
        mediumPurple: '#7e60bf',
        lightPurple: '#e4b1f0',
        palePurple: '#ffe1ff',
      },
    },
  },
  plugins: [],
};
