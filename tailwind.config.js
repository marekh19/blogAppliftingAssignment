/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      body: '#212529',
      secondary: '#6C757D',
      white: '#fff',
      'light-gray': '#F8F9FA',
      blue: '#007BFF',
      'blue-secondary': '#2B7EFB',
    },
    fontFamily: {
      body: 'var(--body-font)',
    },
    extend: {},
  },
  plugins: [],
}
