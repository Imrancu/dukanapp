/** @type {import('tailwindcss').Config} */
// module.exports = {

//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ff8e3c",

          "secondary": "#fffffe",

          "button": "#0d0d0d",
          
          "icon-color": "#2a2a2a",

          "neutral": "#3D4451",

          "base-100": "#eff0f3",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  //...
} 