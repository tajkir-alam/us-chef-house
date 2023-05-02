/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-img': "url('https://i.ibb.co/NyfFm93/headerbg.png')"
      },
    },
  },
  plugins: [require("daisyui")],  
}

