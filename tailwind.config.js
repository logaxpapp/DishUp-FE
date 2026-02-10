/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#003366',
          500: '#ff6b00',
        },
        fontFamily: {
        sans: ['var(--font-urbanist)', 'sans-serif'],
      },
      },
    },
  },
  plugins: [],
}