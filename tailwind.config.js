/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#08070d",
        cardBg: "rgba(255, 255, 255, 0.03)",
        cardBorder: "rgba(255, 255, 255, 0.08)",
        neonPurple: "#a855f7",
        glowPurple: "#8b5cf6",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}