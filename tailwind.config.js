/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      body: '#212529',
      secondary: '#6C757D',
      white: '#fff',
      'gray-50': '#F8F9FA',
      'gray-100': '#DFDFDF',
      blue: '#007BFF',
      'blue-secondary': '#2B7EFB',
      error: '#DC3545',
    },
    extend: {
      boxShadow: {
        normal: '0px 16px 48px rgba(0, 0, 0, 0.175);',
        focus: '0px 0px 6px #2079FF;',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
