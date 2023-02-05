/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://lh5.googleusercontent.com/proxy/Z8pU-YrYVTPlejIOh_3NAnAH9eBJ1AxUB8yX0fQzv7nbDMJQwjQ5Rxn0cS3WhkGPxSIQr1MbCi_tzzpmwZtu6Ye_9X2iF64RVBO5lVsqvBkoD3H87GxdhVKw1R4C11WphHkCJFSgCwd2sqnwVEaHzung3v30Y6UNV4I4U0FzyOftKf70d0KSrEtGwhG_gP7GN7M=w1200-h630-p-k-no-nu')",
      },
    },
  },
  plugins: [],
};
