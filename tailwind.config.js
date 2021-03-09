module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      grayBlue: 'hsl(208, 11%, 55%)',
      paleCyan: 'hsl(193, 100%, 96%)',
      pinkEsp: 'hsl(322, 100%, 66%)',
      darkCyan: 'hsl(192, 100%, 9%)'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
