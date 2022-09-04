/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "typing": {
          '0%': { content: '' },
          '25%': { content: '.' },
          '50%': { content: '..' },
          '75%': { content: '...' },
          '100%': { content: '' },
        },
      },
      animation: {
        "typing-animation": "typing steps(1) 1s infinite",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
