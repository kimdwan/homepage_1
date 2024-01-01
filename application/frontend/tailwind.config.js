/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./build/**/*.{html,js}"
  ],
  theme: {
    extend: {
      margin : {
        70 : "70px",
        100 : "100px",
        300 : "300px",
      },
      height : {
        70 : "70px"
      }, 
      width : {
        11 : "11rem",
        12 : "12rem",
        15 : "15rem"
      },
      flexBasis : {
        "1/10" : "10%",
        "2/10" : "20%",
        "3/10" : "30%",
        "4/10" : "40%",
      }, zIndex : {
        "100" : "100"
      }
    },
  },
  plugins: [],
}

