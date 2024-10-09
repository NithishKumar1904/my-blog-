/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A202C',
        secondary: '#F7FAFC',
        accent: '#ECC94B',
      },
      fontFamily: {
        body: ['"Inter"', 'sans-serif'],
        heading: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

