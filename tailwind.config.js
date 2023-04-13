/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      mobileXS: "420px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1380px",
    },
    fonts:{
      mainFont:'Open Sans'
    },
    colors:{
      mainBackgroundColor:'#3F414B',
      secondColor:'',
      thirdColor:''
    }
  },
  plugins: [],
}