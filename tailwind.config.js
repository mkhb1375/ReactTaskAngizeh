module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        borderColor: 'rgb(172, 56, 27)',
        borderColor2: 'rgb(80, 50, 7)',
        myGray: 'rgb(180, 180, 180)',
        customWhite: 'rgba(255, 255, 255, 0.33)',
       
      },
      screens: {
       
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1500px',
        '3xl': '2000px',
      },
    },
  },
  plugins: [],
};