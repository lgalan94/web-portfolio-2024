const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        defaultColor: '#E6EBE7',
        light: '#f5f5f5',
        dark: '#1f1f1f'
      },
    },
  },
  plugins: [
      // ...
      require('tailwind-scrollbar')({ nocompatible: true }),
  ],
});