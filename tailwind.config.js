/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        pink: '#FF9C9C',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      opacity: ['group-hover', "hover"], 
      transform: ['group-hover'],
      scale: ['group-hover'],
      // add any other utilities you want to use with group-hover
    },
  },
}

