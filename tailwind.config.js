/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        'primaryblue':'#293264',
        'secondaryblue':'#1e2653',
        'lightblue':'#a6b5cd',
        'paleblue':'#8ba0bb',
        'palegreen':'#dce5f0',
        'tertiaryblue':'#d3dae6',
        'borderblue':'#4f5888',
        'primarygray':'#c1cade',
        'secondarygray':'#f5f7fa',
        'tertiarygray':'#e7f0fb',
        'textgray':'#495057',
        'orange': '#ff8c00',
        'white':'#ffffff',
        'footerfont':'#2b2e38',
      },
    },
  },
  plugins: [],
}

