/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(0, 136, 110)',
        blue: '#006e88',
        green: '#00885e',
        purple: '#5e0088',
        brown: '#885e00',
        orange: '#ff721f',
      },
      backgroundColor: {
        primary: 'rgb(0, 136, 110)',
        blue: '#006e88',
        green: '#00885e',
        purple: '#5e0088',
        brown: '#885e00',
        bege: '#f4f3f0',
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

