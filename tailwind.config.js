/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'Libre Franklin',
        body: 'Libre Franklin',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },

      colors: {
        'text': '#141711',
        'background': '#f5f6f3',
        'primary': '#4a5440',
        'secondary': '#9da4b4',
        'accent': '#625973',
       },

       spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      }
    },
  },
  plugins: [],
}