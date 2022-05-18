module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        red: {
          700: '#f02d34',
        },
      },
      height: {
        128: '32rem',
      },
    },
  },
  plugins: [],
}
