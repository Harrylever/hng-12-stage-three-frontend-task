/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "subtract-bg": "url('/subtract-bg.png')",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        black: "hsl(var(--black))",
        "grey-98": "hsl(var(--grey-98))",
      },
      fontFamily: {
        jejumyeongjo: ["JejuMyeongjo", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        "road-rage": ["Road Rage", "sans-serif"],
        alatsi: ["Alatsi", "serif"],
      },
    },
  },
  plugins: [],
}
