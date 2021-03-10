module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      grayBlue: 'hsl(208, 11%, 55%)',
      paleCyan: 'hsl(193, 100%, 96%)',
      pinkEsp: 'hsl(322, 100%, 66%)',
      darkCyan: 'hsl(192, 100%, 9%)',
      white: 'hsl(0, 100%, 100%)'
    },
    extend: {
      backgroundImage: theme => ({
        'hero-mobile': "url('/src/img/bg-hero-mobile.svg')",
        'hero-desktop': "url('/src/img/bg-hero-desktop.svg')",
        
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
