/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          black: "#000000",
          indigo: "#1E1B4B",
          blue: "#2563EB",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'premium-gradient': "linear-gradient(135deg, #000000 0%, #1E1B4B 50%, #2563EB 100%)",
      }
    },
  },
  plugins: [],
}
