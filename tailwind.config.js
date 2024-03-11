/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
      },
      minHeight: {
        'calc-100vh-214px': 'calc(100vh - (112px + 102px))',
      },
      colors: {
        dark: "#121416",
      },
    },
  },
  plugins: [],
}

