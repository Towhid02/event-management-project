/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        nunito : "'Nunito', sans-serif",
        galada : "'Galada', cursive",
        grand : "'Grand Hotel', cursive",
        itim : "'Itim', cursive",
      }
      
    },
  },
  plugins: [require("daisyui")],
  
}

