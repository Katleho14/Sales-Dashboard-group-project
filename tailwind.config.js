/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#D0021B',
        accent: '#F5A623',
        background: '#F8F8F8',
        text: '#333333',
        gray: {
          DEFAULT: '#B0B0B0',
          light: '#EAEAEA',
          dark: '#374151',
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        info: '#3B82F6',
      },
    },
  },
  plugins: [],
}
