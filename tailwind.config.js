/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#011a99",
        
"secondary": "#b9d6f7",
        
"accent": "#83e50b",
        
"neutral": "#2C2442",
        
"base-100": "#F3EEF6",
        
"info": "#60D1F0",
        
"success": "#1AD584",
        
"warning": "#AE820A",
        
"error": "#EA396B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

